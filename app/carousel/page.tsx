import React from 'react'
import Carousel from './components/Carousel'

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Carousel />
    </div>
  )
}

export default page
