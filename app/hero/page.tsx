import React from 'react'
import Hero from './components/Hero'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-full min-h-screen h-screen">
      <Hero />
    </div>
  )
}
