import { CardSwipe } from './ImageSlider'

export default function CardSwiper() {
  const images = [
    { src: '/images/5.jpg', alt: 'Image 1' },
    { src: '/images/6.jpg', alt: 'Image 2' },
    { src: '/images/7.jpg', alt: 'Image 3' },
  ]

  return (
    <div className="w-full">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  )
}
