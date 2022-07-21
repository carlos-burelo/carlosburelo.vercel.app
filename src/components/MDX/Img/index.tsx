import Image from 'next/image'
import _ from './Img.module.scss'

// interface ImgProps {
//   src: string
//   alt: string
//   width?: string
//   height?: string
//   title?: string
//   fit?: 'cover' | 'contain'
//   layout?: 'responsive' | 'fixed' | 'fill'
//   full?: boolean
// }

export const Img = ($props: any) => {
  const {
    src,
    alt = 'Image placeholder',
    full = false,
    fit = 'cover',
    title = alt || 'Image placeholder',
    width = 600,
    height = 400,
    layout = 'fixed',
    noSizes = false,
  } = $props
  const url = src.includes('://')
    ? `/api/proxy?url=${encodeURIComponent(src)}`
    : src
  const attrs = {
    src: url,
    alt: 'Image placeholder',
    title,
    layout,
    objectFit: fit,
    ...(!noSizes && { width, height }),
    ...(full && { layout: 'responsive' }),
  }
  return (
    <Image
      {...attrs}
      className={_.img}
      alt={alt || 'Image placeholder'}
      priority={true}
    />
  )
}
