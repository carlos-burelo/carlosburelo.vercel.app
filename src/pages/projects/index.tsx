import type { GetStaticProps, NextPage } from 'next'
import Layout from '#components/Layout'
import _ from '#components/Project/Project.module.scss'
import Search from '#components/Search'
import ProjectCard from '#components/Project'
import { getMetaDataFromFiles } from '#libs/mdx'
import { ProjectInterface } from '#types'

interface Props {
  projects: ProjectInterface[]
}

const Works: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <div className={_.head}>
        <h1 className={_.titleSection}>Proyectos</h1>
        <Search placeholder='Buscar snippet' />
      </div>
      <div className={_.projects}>
        {projects.map(project => (
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
    revalidate: 10,
  }
}

export default Works
