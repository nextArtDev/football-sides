import React from 'react'

import Image from 'next/image'
import Stadium from '@/public/images/stadium.jpg'
import Parallax from './components/Parallax2'

type Props = {}

function page({}: Props) {
  return (
    <section className="relative min-h-screen  w-full">
      {/* <Image
        fill
        alt="bg"
        src={Stadium}
        className="sticky top-0 -z-[10]  object-cover"
      />
      <div className="relative ">
        <Parallax />
      </div> */}
      <div className="h-screen w-full bg-red-500"></div>
      <div className="h-[100vh]">
        <Parallax />
      </div>
      <div className="h-screen w-full bg-yellow-500"></div>
    </section>
  )
}

export default page
