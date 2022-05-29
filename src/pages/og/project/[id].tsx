import _ from '#components/OpenGraph/Project.module.scss'
import Progress from '#components/Progress'
import { GitHubIcon } from '#data/icons'
import { getDataFromMdx, getSlugs } from '#libs/mdx'
import { ProjectInterface } from '#types'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

export default function OpenGraphPage({ stack,description, id }: ProjectInterface) {
  return (
    <div className={_.container}>
      <section className={_.content}>
        <div className={_.info}>
          <h1 className={_.title}>
            <div className={_.owner}>carlos-burelo/</div>{id}
          </h1>
          <p className={_.description}>
            {description}
          </p> 
        </div>
        <div className={_.image}>
          <Image
            src='/images/logo.png'
            layout='fixed'
            width={200}
            alt='logo image'
            loading='eager'
            height={200}
            className={_.avatar}
          />
        </div>
      </section>
      <div className={_.ghIcon}>
        <GitHubIcon />
      </div>
      <span className={_.line}>
        <Progress data={stack} />
      </span>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('projects')
  return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const project = getDataFromMdx('projects', id)
  return {
    props: {
      ...project,
    },
  }
}
