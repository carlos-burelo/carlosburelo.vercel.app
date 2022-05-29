import Markdown from '#components/Markdown'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { parseMarkdown } from '#libs/highlight'
import { getDataFromMdx, getSlugs } from '#libs/mdx'
import Layout from '#components/Layout'
import Content from '#components/Content'
import { Img } from '#components/MDX'
import { ProjectInterface } from '#types'
import useOpenGraph from '#hooks/useOpenGraph'
import _ from '#components/Pages/Project.module.scss'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface PostProps extends ProjectInterface {
  source: MDXRemoteSerializeResult
  table: string[][]
}

export default function ProjectPage({
  source,
  table,
  image,
  ...props
}: PostProps) {
  const { ogImage } = useOpenGraph('project')
  const meta = {
    title: props.name,
    image: ogImage,
  }
  return (
    <Layout meta={meta}>
      <Content table={table}>
        <section className={_.section}>
          <Img src={image} alt={props.name} layout='responsive' />
          <Markdown source={source} />
        </section>
      </Content>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('projects')
  return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps<ProjectInterface> = async ({
  params,
}) => {
  const { id } = params as { id: string }
  const project: ProjectInterface = getDataFromMdx('projects', id)
  return {
    props: {
      ...project,
      source: await parseMarkdown(project.content),
    },
  }
}
