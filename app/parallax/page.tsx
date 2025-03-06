import React from 'react'
import Parallax from './components/Parallax'
import Image from 'next/image'
import Stadium from '@/public/images/stadium.jpg'

type Props = {}

function page({}: Props) {
  return (
    <section className="relative   h-[300vh] w-full">
      <div className="relative ">
        <Parallax />
        <Image
          fill
          alt="bg"
          src={Stadium}
          className="sticky top-0 -z-[10]  object-cover"
        />
      </div>
    </section>
  )
}

export default page
