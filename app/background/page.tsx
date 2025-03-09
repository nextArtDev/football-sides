import React from 'react'
import Choogha from './components/Choogha'
import PianoKeys from './components/piano'
import StripePattern from './components/strip-patern'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <Choogha />
      <PianoKeys />
      <div className="bg-white">
        <StripePattern />
      </div>
    </div>
  )
}

export default page
