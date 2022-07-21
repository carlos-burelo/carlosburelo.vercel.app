import Chip from '#components/Chip'
import { ProjectInterface } from '#types'
import Image from 'next/image'
import Link from 'next/link'
import _ from './Project.module.scss'
import { iconMap } from '#data/logos'

export default function ProjectCard({
  id,
  name,
  image,
  description,
  stack,
}: ProjectInterface) {
  return (
    <div className={_.card}>
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
        <Link href={`/${id}`}>
          <a className={_.title}>{name}</a>
        </Link>
        <p className={_.description}>{description}</p>
        <div className={_.tags}>
          {stack.map(tag => (
            <div className={_.icon} key={tag.name} title={tag.name}>
              {iconMap[tag.name]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
