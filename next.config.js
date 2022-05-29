const { join } = require('path')
/** @type {import('next').NextConfig} */

// logs
const isDev = process.env.NODE_ENV !== 'production'
console.log('IS_DEV: ', isDev)
console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log(
  'SHIKI_PATH: ',
  isDev ? join(process.cwd(), 'public/assets') : join(process.cwd(), 'assets')
)

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src', 'scss')],
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
