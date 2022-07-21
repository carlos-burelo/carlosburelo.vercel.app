import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' style={{ colorScheme: 'dark' }}>
      <Head>
        <link
          rel='preload'
          href='/fonts/ibm.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/code.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='shortcut icon'
          href='/images/logo.svg'
          type='image/svg+xml'
        />
        <meta
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          name='robots'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
