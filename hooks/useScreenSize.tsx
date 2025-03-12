'use client' // Important for client-side hooks

import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number
    isSm: boolean
  }>({
    width: 0, // Initialize with 0 to avoid SSR mismatch
    isSm: false,
  })

  useEffect(() => {
    // Ensure window is available (client-side only)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const width = window.innerWidth
        setScreenSize({
          width,
          isSm: width <= 640,
        })
      }

      // Initial call to set values
      handleResize()

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}

// Usage in components:
// const { isSm } = useScreenSize();
