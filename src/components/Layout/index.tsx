import Footer from '#components/Footer'
import Navbar from '#components/Navbar'
import _ from './Layout.module.scss'
import { SEOMap } from '#data/seo'
import { useRouter } from 'next/router'
import { SEOProps } from '#types'
import Meta from '#components/Meta'

interface LayoutProps {
  children: React.ReactNode
  meta?: Partial<SEOProps>
}

export default function Layout({ children, meta }: LayoutProps) {
  const { pathname } = useRouter()
  const seo = SEOMap[pathname] || SEOMap['/']
  const data = { ...seo, ...meta }
  return (
    <>
      <Meta data={data} />
      <Navbar />
      <main className={_.container}>{children}</main>
      <Footer />
    </>
  )
}
