import { SEOProps } from '#types'
import Head from 'next/head'

interface MetaProps {
  data: Partial<SEOProps>
}
export default function Meta({ data }: MetaProps) {
  return (
    <Head>
      <title>{data.title}</title>
      <link rel='shortcut icon' href='/images/logo.svg' type='image/svg+xml' />
      <meta name='description' content={data.description} />
      <meta name='keywords' content={data.keywords} />
      <meta property='og:title' content={data.title} />
      <meta property='og:description' content={data.description} />
      <meta property='og:image' content={data.image} />
      <meta property='og:url' content={data.url} />
    </Head>
  )
}
