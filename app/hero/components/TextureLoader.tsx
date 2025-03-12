'use client'
import { Suspense, useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import dynamic from 'next/dynamic'

type TextureLoaderProps = {
  totalImages: number
  children: (textures: THREE.Texture[]) => React.ReactNode
}

const TextureLoaderContent = ({
  totalImages,
  children,
}: TextureLoaderProps) => {
  // Generate image paths with useMemo
  const imagePaths = useMemo(
    () => Array.from({ length: totalImages }, (_, i) => `/images/${i + 1}.jpg`),
    [totalImages]
  )

  // Use Drei's useTexture with proper TypeScript typing
  const textures = useTexture(imagePaths) as THREE.Texture[]

  return <>{children(textures)}</>
}

// Wrap in Suspense and dynamic import for SSR handling
export const DynamicTextureLoader = dynamic(
  () =>
    Promise.resolve((props: TextureLoaderProps) => (
      <Suspense fallback={null}>
        <TextureLoaderContent {...props} />
      </Suspense>
    )),
  {
    ssr: false,
    loading: () => <div>Loading textures...</div>,
  }
)

// Usage in your component:
// const MyScene = () => {
//   return (
//     <DynamicTextureLoader totalImages={5}>
//       {(textures) =>
//         /* Your R3F components using textures */
//         textures.map((texture, i) => (
//           <mesh key={i}>
//             <sphereGeometry />
//             <meshStandardMaterial map={texture} />
//           </mesh>
//         ))
//       }
//     </DynamicTextureLoader>
//   )
// }
