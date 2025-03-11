import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function OrbitingItem({ children }: Props) {
  return (
    <div className="size-14 rounded-full p-0.5 bg-yellow-500 backdrop-blur-sm w-14 h-14 aspect-square flex items-center justify-center text-black text-xs font-semibold">
      {children}
    </div>
  )
}

export default OrbitingItem
