import About from '#components/About'
import Hero from '#components/Hero'
import Layout from '#components/Layout'
import Skills from '#components/Skills'
import TimeLine from '#components/TimeLine'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <TimeLine />
    </Layout>
  )
}

export default Home
