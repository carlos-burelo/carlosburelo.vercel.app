import Section from '#components/Section'
import { experience } from '#data/user'
import _ from './TimeLine.module.scss'
import Image from 'next/image'

interface TimeLineProps {}

export default function TimeLine({}: TimeLineProps) {
  return (
    <Section name='Experiencia'>
      <div className={_.timeLine}>
        {experience.map(i => (
          <div key={i.title} className={_.item}>
            <div className={_.head}>
              <picture className={_.image}>
                <Image
                  src={i.image}
                  alt={i.title}
                  width={60}
                  height={60}
                  objectFit='cover'
                  layout='fixed'
                  priority={true}
                />
              </picture>
              <div className='meta'>
                <h2 className={_.date}>{i.year}</h2>
                <h3 className={_.title}>{i.title}</h3>
              </div>
            </div>
            <p className={_.content}>{i.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
