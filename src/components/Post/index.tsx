import Image from 'next/image'
import _ from './Post.module.scss'
import { PostInterface } from '#types'
import Time from '#components/Time'
import Link from 'next/link'

interface PostProps extends PostInterface {}

export default function PostItem({ date, id, image, tags, title }: PostProps) {
  return (
    <Link href={`/blog/${id}`}>
      <a className={_.post}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          layout='responsive'
          priority={true}
          loading='eager'
          objectFit='cover'
        />
        <div className={_.data}>
          <Time raw={date} className={_.time} />
          <h1 className={_.title}>{title}</h1>
          <div className={_.tags}>
            {tags.map(tag => (
              <span key={tag} className={_.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
