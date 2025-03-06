'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
type Props = {
  totalImages?: number
  totalItems?: number
  baseWidth?: number
  baseHeight?: number
  sphereRadius?: number
  backgroundColor?: string
}

function Orb({
  //   totalImages = 30,
  totalImages = 6,
  totalItems = 100,
  baseWidth = 1,
  baseHeight = 0.6,
  sphereRadius = 5,
  backgroundColor = '#ff0000',
}: Props) {
  const orbRef = useRef(null)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75, //fov
      window.innerWidth / window.innerHeight, //aspect ration
      0.1, // near
      1000 // and far, objects too close/far wont be visible
    )
    const renderer = new THREE.WebGLRenderer({
      antialias: true, // smooth
      alpha: true, // transparent bg
      preserveDrawingBuffer: true, // capture screen shots without clearing the plain buffer
      powerPreference: 'high-performance', //optimize render sphere
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(parseInt(backgroundColor, 16))
    renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.gammaFactor=2.2
    // if (!orbRef || !orbRef?.current) return
    orbRef.current?.appendChild(renderer.domElement)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    // controls.enableFactor=0.05
    controls.rotateSpeed = 1.2
    controls.minDistance = 6
    controls.maxDistance = 10
    controls.enableZoom = true
    controls.enablePan = false

    const textureLoader = new THREE.TextureLoader()
    let loadedCount = 0

    const getRandomImagePath = () => {
      return `/images/${Math.floor(Math.random() * totalImages + 1)}.jpeg`
    }
    const createImagePlane = (texture: any) => {
      const imageAspect = texture.image.width / texture.image.height
      let width = baseWidth
      let height = baseHeight
      if (imageAspect > 1) {
        height = width / imageAspect
      } else {
        width = height * imageAspect
      }
      return new THREE.PlaneGeometry(width, height)
    }
    const loadImageMesh = ({ phi, theta }: { phi: number; theta: number }) => {
      textureLoader.load(
        getRandomImagePath(),
        (texture) => {
          texture.generateMipmaps = false
          texture.minFilter = THREE.LinearFilter
          texture.magFilter = THREE.LinearFilter
          // texture.encoding = THREE.Encoding

          const geometry = createImagePlane(texture)
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            transparent: false,
            depthWrite: true,
            depthTest: true,
            //   encoding:THREE.linearEncoding
          })
          const mesh = new THREE.Mesh(geometry, material)

          mesh.position.x = sphereRadius * Math.cos(theta) * Math.sin(phi)
          mesh.position.y = sphereRadius * Math.sin(theta) * Math.sin(phi)
          mesh.position.z = sphereRadius * Math.cos(theta)

          mesh.lookAt(0, 0, 0)
          mesh.rotateY(Math.PI)

          scene.add(mesh)

          loadedCount++

          if (loadedCount === totalImages) {
            animate()
          }
        },
        undefined,
        (error) => console.log(error)
      )
    }
    const createSphere = () => {
      for (let i = 0; i < totalItems; i++) {
        const phi = Math.acos(-1 + (2 * i) / totalItems)
        const theta = Math.sqrt(totalImages * Math.PI) * phi
        loadImageMesh({ phi, theta })
      }
    }
    camera.position.z = 10
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight

      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    })
    createSphere()
    return () => {
      //   if (!orbRef || !orbRef.current) return
      orbRef?.current?.removeChild(renderer.domElement)
    }
  }, [
    totalImages,
    totalItems,
    baseWidth,
    baseHeight,
    sphereRadius,
    backgroundColor,
  ])
  return (
    <div className="w-full h-full" ref={orbRef}>
      Orb
    </div>
  )
}

export default Orb
