import Layout from '#components/Layout'
import Search from '#components/Search'
import SnippetCard from '#components/Snippet'
import _ from '#components/Snippet/Snippet.module.scss'
import { getMetaDataFromFiles } from '#libs/mdx'
import { SnippetInterface } from '#types'
import type { GetStaticProps, NextPage } from 'next'

interface Props {
  snippets: SnippetInterface[]
}

const Snippets: NextPage<Props> = ({ snippets }) => {
  return (
    <Layout>
      <div className={_.head}>
        <h1 className={_.titleSection}>Snippets</h1>
        <Search placeholder='Buscar snippet' />
      </div>
      <div className={_.snippets}>
        {snippets.map(snippet => (
          <SnippetCard {...snippet} key={snippet.id} />
        ))}
      </div>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const snippets = getMetaDataFromFiles('snippets')
  return {
    props: { snippets },
    revalidate: 10,
  }
}

export default Snippets
