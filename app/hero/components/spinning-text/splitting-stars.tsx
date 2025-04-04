import React from 'react'
import { SpinningText } from './spinning-text'

function SplittingStars() {
  return (
    <div>
      <SpinningText
        radius={5.5}
        fontSize={1}
        variants={{
          container: {
            hidden: {
              opacity: 1,
            },
            visible: {
              opacity: 1,
              rotate: 360,
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 6,
                repeat: Infinity,
                staggerChildren: 0.03,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
            },
          },
        }}
        className="font-[450]"
      >
        <svg
          height="200px"
          width="200px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 47.94 47.94"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              style={{ fill: '#ED8A19' }}
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
            ></path>{' '}
          </g>
        </svg>
      </SpinningText>
    </div>
  )
}

export default SplittingStars
