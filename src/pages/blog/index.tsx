import Layout from '#components/Layout'
import Search from '#components/Search'
import Section from '#components/Section'
import _ from '#components/Blog/index.module.scss'
import type { GetStaticProps, NextPage } from 'next'
import PostItem from '#components/Post'
import { getMetaDataFromFiles, getMetaDataFromJson } from '#libs/mdx'
import { PackageInterface, PostInterface } from '#types'
import PackageItem from '#components/Package'
import Subtitle from '#components/Subtitle'

interface Props {
  posts: PostInterface[]
  packages: PackageInterface[]
}
const Blog: NextPage<Props> = ({ posts, packages }) => {
  return (
    <Layout>
      <div className={_.container}>
        <Section name='Blog' className={_.blog}>
          <Search placeholder='Buscar publicacion' />
          <div className={_.posts}>
            {posts.map((post, index: number) => (
              <PostItem {...post} key={index} />
            ))}
          </div>
        </Section>
        <div className={_.packageArea}>
          <Subtitle text='Paquetes' />
          <div className={_.packages}>
            {packages.map((pkg, index: number) => (
              <PackageItem {...pkg} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getMetaDataFromFiles('posts')
  const packages = getMetaDataFromJson()
  return {
    props: {
      posts,
      packages,
    },
  }
}

export default Blog
