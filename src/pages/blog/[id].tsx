import Markdown from '#components/Markdown'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { parseMarkdown } from '#libs/highlight'
import { getDataFromMdx, getSlugs } from '#libs/mdx'
import Layout from '#components/Layout'
import Content from '#components/Content'
import { PostInterface } from '#types'
import useOpenGraph from '#hooks/useOpenGraph'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

interface PostProps extends PostInterface {
  source: MDXRemoteSerializeResult
  table: string[][]
}

export default function PostPage({ source, table, ...props }: PostProps) {
  const { ogImage } = useOpenGraph('post')
  const meta = {
    title: props.title,
    image: ogImage,
  }
  return (
    <Layout meta={meta}>
      <Content table={table}>
        <Markdown source={source} />
      </Content>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('posts')
  return { paths, fallback: 'blocking' }
}
export const getStaticProps: GetStaticProps<PostInterface> = async ({
  params,
}) => {
  const { id } = params as { id: string }
  const post: PostInterface = getDataFromMdx('posts', id)
  return {
    props: {
      ...post,
      source: await parseMarkdown(post.content),
    },
  }
}
