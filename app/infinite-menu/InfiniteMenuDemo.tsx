import InfiniteMenu from './InfiniteMenu'

const items = [
  {
    image: '/images/100.webp',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/101.webp',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/102.webp',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/103.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/104.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/105.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/106.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/107.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/108.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
  {
    image: '/images/109.webp',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?',
  },
]
import React from 'react'

function InfiniteMenuDemo() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <InfiniteMenu items={items} />
    </div>
  )
}

export default InfiniteMenuDemo
