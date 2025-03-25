import React from 'react'
import Balls from './components/ball1'

type Props = {}

function page({}: Props) {
  return (
    <section className="w-full h-screen  ">
      <Balls />
    </section>
  )
}

export default page
