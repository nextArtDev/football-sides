import React from 'react'
import Choogha from './components/Choogha'
import PianoKeys from './components/piano'
import StripePattern from './components/strip-patern'
import Chooghaa from './components/Chooghaa'

type Props = {}

function page({}: Props) {
  return (
    <div>
      <Chooghaa />
      <Choogha />
      <PianoKeys />
      <div className="bg-white">
        <StripePattern />
      </div>
    </div>
  )
}

export default page
