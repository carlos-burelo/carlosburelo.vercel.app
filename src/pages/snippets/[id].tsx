import Markdown from '#components/Markdown'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { parseMarkdown } from '#libs/highlight'
import { getDataFromMdx, getSlugs } from '#libs/mdx'
import Layout from '#components/Layout'
import _ from '#components/Pages/Snippets.module.scss'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { PostInterface } from '#types'

interface PostProps extends PostInterface {
  source: MDXRemoteSerializeResult
}

export default function SnippetPage({ source, title, description }: PostProps) {
  const meta = {
    title: title,
    description: description,
  }
  return (
    <Layout meta={meta}>
      <div className={_.container}>
        <div className={_.head}>
          <h1 className={_.title}>{title}</h1>
          <p className={_.description}>{description}</p>
        </div>
        <div className={_.snippet}>
          <Markdown source={source} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('snippets')
  return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps<PostInterface> = async ({
  params,
}) => {
  const { id } = params as { id: string }
  const snippet = getDataFromMdx('snippets', id)
  return {
    props: {
      ...snippet,
      source: await parseMarkdown(snippet.content),
    },
  }
}
