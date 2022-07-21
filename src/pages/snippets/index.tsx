import Layout from '#components/Layout'
import Search from '#components/Search'
import SnippetCard from '#components/Snippet'
import _ from '#components/Snippet/Snippet.module.scss'
import { getMetaDataFromFiles } from '#libs/mdx'
import { SnippetInterface } from '#types'
import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'

interface Props {
  snippets: SnippetInterface[]
}

const Snippets: NextPage<Props> = ({ snippets }) => {
  const [results, setResults] = useState(snippets)
  return (
    <Layout>
      <div className={_.head}>
        <h1 className={_.titleSection}>Snippets</h1>
        <Search
          raw={snippets}
          onSearch={setResults}
          placeholder='Buscar snippet'
        />
      </div>
      <div className={_.snippets}>
        {results.map(snippet => (
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
  }
}

export default Snippets
