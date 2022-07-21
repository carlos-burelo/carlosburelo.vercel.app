import type { GetStaticProps, NextPage } from 'next'
import Layout from '#components/Layout'
import _ from '#components/Project/Project.module.scss'
import Search from '#components/Search'
import ProjectCard from '#components/Project'
import { getMetaDataFromFiles } from '#libs/mdx'
import { ProjectInterface } from '#types'
import { useState } from 'react'

interface Props {
  projects: ProjectInterface[]
}

const Works: NextPage<Props> = ({ projects }) => {
  const [results, setResults] = useState(projects)
  return (
    <Layout>
      <div className={_.head}>
        <h1 className={_.titleSection}>Proyectos</h1>
        <Search
          onSearch={setResults}
          placeholder='Buscar proyecto'
          raw={projects}
        />
      </div>
      <div className={_.projects}>
        {results.map(project => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = getMetaDataFromFiles('projects')
  return {
    props: { projects },
  }
}

export default Works
