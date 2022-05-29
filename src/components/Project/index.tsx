import Chip from '#components/Chip'
import { ProjectInterface } from '#types'
import Image from 'next/image'
import Link from 'next/link'
import _ from './Project.module.scss'

export default function ProjectCard({
  id,
  name,
  image,
  description,
  stack,
}: ProjectInterface) {
  return (
    <Link href={`/${id}`}>
      <a className={_.card}>
        <div className={_.image}>
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            loading='eager'
            priority={true}
            layout='responsive'
          />
        </div>
        <div className={_.cardContent}>
          <h2 className={_.title}>{name}</h2>
          <p className={_.description}>{description}</p>
          <div className={_.tags}>
            {stack.map((tag) => (
              <Chip color='blue' key={tag.name}>
                {tag.name}
              </Chip>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
