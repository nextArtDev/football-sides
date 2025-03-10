import React from 'react'
import RotatingStar from './RotatingStar'
import StarSvg from './StarSvg'
import Image from 'next/image'
import ball from '../../../public/images/ball.png'
type Props = {}

function DynamicLogo({}: Props) {
  return (
    <div className="relative  w-[150px] aspect-square items-center justify-center flex flex-col  ">
      <div className="absolute w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0  ">
        <RotatingStar className="" />
      </div>
      {/* <StarSvg className="w-full h-full absolute top-0 scale-200 -left-1/2" /> */}
      <Image fill alt="logo" src={ball} className="scale-50" />
    </div>
  )
}

export default DynamicLogo
