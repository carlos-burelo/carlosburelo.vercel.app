import type { GetStaticPaths, GetStaticProps } from 'next'
import _ from '#components/OpenGraph/OpenGraph.module.scss'
import Image from 'next/image'
import { CommentsIcon } from 'shared/data/icons'
import { getDataFromMdx, getSlugs } from '#libs/mdx'
import { PostInterface } from '#types'

export default function OpenGraphPage({ title, date }: PostInterface) {
  return (
    <div className={_.container}>
      <section className={_.content}>
        <div className={_.info}>
          <h2 className={_.origin}>carlos-burelo/web</h2>
          <h1 className={_.title}>
            <mark>#BLOG</mark> {title}
          </h1>
          <div className={_.details}>
            <CommentsIcon />
            <span>0 Comentarios</span>
          </div>
        </div>
        <div className={_.image}>
          <Image
            src='/images/logo.png'
            layout='fixed'
            width={160}
            alt='logo image'
            loading='eager'
            height={160}
            className={_.avatar}
          />
        </div>
      </section>
      <section className={_.meta}>
        <div className={_.author}>
          <Image
            src='/images/logo.png'
            layout='fixed'
            alt='avatar image'
            loading='eager'
            width={48}
            height={48}
            className={_.avatar}
          />
          <div className={_.name}>
            <h3>Carlos Burelo</h3>
          </div>
          <div className={_.date}>
            {new Intl.DateTimeFormat('es-ES', {
              dateStyle: 'long',
            }).format(new Date(date))}
          </div>
        </div>
      </section>
      <span className={_.line}></span>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('posts')
  return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const project = getDataFromMdx('posts', id)
  return {
    props: {
      ...project,
    },
    revalidate: 10,
  }
}
