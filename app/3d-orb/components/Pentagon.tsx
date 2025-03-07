'use client'
import { forwardRef, useMemo } from 'react'
import * as THREE from 'three'

// Define extended type for our component props
interface StarProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  color?: string
  outerRadius?: number
  innerRadius?: number
  points?: number
  depth?: number // New depth property
  bevel?: boolean // Add bevel edges
}

const Star = forwardRef<THREE.Group, StarProps>(
  (
    {
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      scale = [1, 1, 1],
      color = 'gold',
      outerRadius = 1,
      innerRadius = 0.4,
      points = 5,
      depth = 0.5,
      bevel = true,

      ...props
    },
    ref
  ) => {
    const geometry = useMemo(() => {
      const shape = new THREE.Shape()
      const nPoints = points * 2

      shape.moveTo(outerRadius * Math.cos(0), outerRadius * Math.sin(0))

      for (let i = 1; i < nPoints; i++) {
        const angle = (i * Math.PI * 2) / nPoints
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        shape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle))
      }

      shape.closePath()

      // Extrude settings for 3D shape
      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth,
        bevelEnabled: bevel,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 0.1,
        bevelThickness: 0.2,
      }

      return new THREE.ExtrudeGeometry(shape, extrudeSettings)
    }, [outerRadius, innerRadius, points, depth, bevel])

    return (
      <group ref={ref} {...props}>
        <mesh
          position={position}
          rotation={rotation}
          scale={scale}
          {...props}
          geometry={geometry}
        >
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    )
  }
)

Star.displayName = 'Star'

export default Star
