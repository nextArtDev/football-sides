'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import RenderModel from './BallScene'

const Model = dynamic(() => import('./model'), {
  ssr: false,
})

function Ball() {
  return (
    <RenderModel>
      <Model />
    </RenderModel>
  )
}

export default Ball
