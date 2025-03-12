'use client'
import { useState, useEffect, useMemo, useRef, Suspense } from 'react'
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import Star from './Pentagon'
import { useScreenSize } from '@/hooks/useScreenSize'

// Hexagon geometry creation utility
function createHexagonGeometry(width: number, height: number) {
  const shape = new THREE.Shape()
  const sides = 6
  const radius = Math.min(width, height) / 2
  const angleStep = (Math.PI * 2) / sides

  shape.moveTo(radius * Math.cos(0), radius * Math.sin(0))
  for (let i = 1; i <= sides; i++) {
    shape.lineTo(
      radius * Math.cos(angleStep * i),
      radius * Math.sin(angleStep * i)
    )
  }

  return new THREE.ShapeGeometry(shape)
}

type Props = {
  totalImages?: number
  totalItems?: number
  baseWidth?: number
  baseHeight?: number
  sphereRadius?: number
  backgroundColor?: string
}

function Orb({
  //   totalImages = 6,
  //   totalItems = 100,
  //   baseWidth = 1,
  //   baseHeight = 0.6,
  //   sphereRadius = 5,
  //   backgroundColor = '#ebebeb',
  totalImages = 6,
  totalItems = 80,
  baseWidth = 0.6,
  baseHeight = 0.6,
  sphereRadius = 5,
  backgroundColor,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const imagePaths = useMemo(
    () => Array.from({ length: totalImages }, (_, i) => `/images/${i + 1}.jpg`),
    [totalImages]
  )
  // const { width } = useThree((state) => state.viewport)
  const { isSm } = useScreenSize()
  sphereRadius = isSm ? 3 : 5
  baseWidth = isSm ? 0.4 : 0.6
  baseHeight = isSm ? 0.4 : 0.6
  const textures = useLoader(THREE.TextureLoader, imagePaths) as THREE.Texture[]
  // const textures = useTexture(imagePaths)

  useEffect(() => {
    textures.forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.offset.set(0.5, 0.5)
      //   texture.repeat.set(0.5, 0.5)
      //   texture.center.set(0.5, 0.5)
      texture.repeat.set(2, 2)
      // texture.center.set(2, 2)
      texture.center.set(1, 1)
    })
  }, [textures])

  const positions = useMemo(() => {
    const posArray: THREE.Vector3[] = []
    for (let i = 0; i < totalItems; i++) {
      const phi = Math.acos(-1 + (2 * i) / totalItems)
      const theta = Math.sqrt(totalItems * Math.PI) * phi
      const x = sphereRadius * Math.sin(phi) * Math.cos(theta)
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta)
      const z = sphereRadius * Math.cos(phi)
      posArray.push(new THREE.Vector3(x, y, z))
    }
    return posArray
  }, [totalItems, sphereRadius])

  const textureIndices = useMemo(() => {
    if (textures.length === 0) return []
    return Array.from({ length: totalItems }, () =>
      Math.floor(Math.random() * textures.length)
    )
  }, [totalItems, textures.length])

  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: backgroundColor }}
      camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }}
      gl={{ antialias: true, alpha: true }}
      //   onClick={(e) => {
      //     if (e.distance === Infinity) setSelectedIndex(null)
      //   }}
    >
      <ambientLight intensity={5} />
      {/* <Star
        position={[-2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.7, 0.7, 0.7]}
        color="#ff0000"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
      />
      <Star
        position={[0, 0, 0]}
        rotation={[0, 0, Math.PI / 2]} // Rotate 90 degrees
        scale={[1, 1, 1]}
        color="gold"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
      />
      <Star
        position={[2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.7, 0.7, 0.7]}
        color="#00ff00"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
        depth={0.2}
      /> */}

      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={1.2}
        minDistance={6}
        maxDistance={10}
        enableZoom={!selectedIndex}
        enablePan={false}
        enabled={!selectedIndex}
      />

      {positions.map((pos, i) => (
        <HexagonImage
          key={i}
          index={i}
          position={pos}
          texture={textures[textureIndices[i]]}
          baseWidth={baseWidth}
          baseHeight={baseHeight}
          isSelected={selectedIndex === i}
          onSelect={() => setSelectedIndex(selectedIndex === i ? null : i)}
        />
      ))}
    </Canvas>
  )
}

function HexagonImage({
  index,
  texture,
  position,
  baseWidth,
  baseHeight,
  isSelected,
  onSelect,
}: {
  index: number
  texture: THREE.Texture
  position: THREE.Vector3
  baseWidth: number
  baseHeight: number
  isSelected: boolean
  onSelect: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()
  const originalPosition = useMemo(() => position.clone(), [position])
  const targetPosition = useMemo(() => new THREE.Vector3(), [])
  const targetScale = useMemo(() => new THREE.Vector3(), [])

  const geometry = useMemo(
    () => createHexagonGeometry(baseWidth, baseHeight),
    [baseWidth, baseHeight]
  )

  useFrame(({ camera }) => {
    if (!meshRef.current) return
    // meshRef.current.rotateX

    if (isSelected) {
      const distance = 5
      targetPosition
        .setFromMatrixPosition(camera.matrix)
        .add(camera.getWorldDirection(targetPosition).multiplyScalar(distance))

      meshRef.current.position.lerp(targetPosition, 0.1)
      //   meshRef.current.scale.lerp(targetScale.set(30, 30, 30), 0.1)
      meshRef.current.scale.lerp(targetScale.set(30, 30, 30), 0.1)
    } else {
      meshRef.current.position.lerp(originalPosition, 0.1)
      //   meshRef.current.scale.lerp(targetScale.set(1, 1, 1), 0.1)
      meshRef.current.scale.lerp(targetScale.set(3, 3, 3), 0.1)
    }
  })

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0)
      meshRef.current.rotateY(Math.PI)
    }
  }, [])

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      onClick={(e) => {
        // e.stopPropagation()
        // onSelect()
      }}
    >
      <meshBasicMaterial
        map={texture}
        side={THREE.DoubleSide}
        transparent
        // opacity={isSelected ? 1 : 0.8}
        opacity={1}
        depthWrite={true}
        depthTest={true}
      />
    </mesh>
  )
}

export default Orb
