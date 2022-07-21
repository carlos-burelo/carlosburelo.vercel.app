import Layout from '#components/Layout'
import Search from '#components/Search'
import Section from '#components/Section'
import _ from '#components/Blog/index.module.scss'
import type { GetStaticProps, NextPage } from 'next'
import PostItem from '#components/Post'
import { getDependecies, getMetaDataFromFiles } from '#libs/mdx'
import { PackageInterface, PackageProps, PostInterface } from '#types'
import PackageItem from '#components/Package'
import Subtitle from '#components/Subtitle'
import { useState } from 'react'

interface Props {
  posts: PostInterface[]
  packages: PackageInterface[]
}
const Blog: NextPage<Props> = ({ posts, packages }) => {
  const [results, setResults] = useState(posts)
  return (
    <Layout>
      <div className={_.container}>
        <Section name='Blog' className={_.blog}>
          <Search
            raw={posts}
            onSearch={setResults}
            placeholder='Buscar publicacion'
          />
          <div className={_.posts}>
            {results.map((post, index: number) => (
              <PostItem {...post} key={index} />
            ))}
          </div>
        </Section>
        <div className={_.packageArea}>
          <Subtitle text='Paquetes' />
          <div className={_.packages}>
            {packages.map((pkg, index: number) => (
              <PackageItem
                description={pkg.description}
                name={pkg.name}
                version={pkg.package?.version as string}
                url={pkg.package?.url as string}
                key={index}
                // {...(pkg.package as PackageProps)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getMetaDataFromFiles('posts')
  const packages = getDependecies()
  return {
    props: {
      posts,
      packages,
    },
  }
}

export default Blog
