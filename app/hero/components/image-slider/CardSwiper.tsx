import { CardSwipe } from './ImageSlider'

export default function CardSwiper() {
  const images = [
    { src: '/images/chart1.webp', alt: 'Image 1' },
    { src: '/images/chart2.webp', alt: 'Image 2' },
    { src: '/images/charrt3.jpg', alt: 'Image 3' },
    { src: '/images/chart4.jpg', alt: 'Image 3' },
  ]

  return (
    <div className="w-full max-w-[98vw] mx-auto">
      <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  )
}
