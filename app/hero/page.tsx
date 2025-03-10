import React from 'react'
import Hero from './components/Hero'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-full min-h-screen h-screen ">
      <Hero />
      <div className="h-screen bg-red-500"></div>
      <div className="h-screen bg-blue-500"></div>
      <div className="h-screen bg-red-500"></div>
    </div>
  )
}
