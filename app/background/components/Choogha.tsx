import React from 'react'

type Props = {}
{
  /* <div className="grid grid-cols-[70] grid-rows-6"></div> */
}

function Choogha({}: Props) {
  const whiteKeys = 52
  const blackKeyPattern = [true, false, true, true, false, true, true]

  return (
    <div className="flex justify-center items-end h-screen bg-white">
      <div className="relative flex">
        {[...Array(whiteKeys)].map((_, index) => (
          <div
            key={`white-${index}`}
            className="w-4 h-40 bg-white border border-black"
          />
        ))}
        {[...Array(whiteKeys)].map((_, index) => {
          if (blackKeyPattern[index % 7]) {
            return (
              <div
                key={`black-${index}`}
                className="absolute w-3 h-24 bg-black"
                style={{ left: `${index * 16 + 11}px` }}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Choogha
