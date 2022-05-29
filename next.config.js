const { join } = require('path')
const { readdirSync } = require('fs')
/** @type {import('next').NextConfig} */

// logs
const isDev = process.env.NODE_ENV !== 'production'
console.log('##############################################')
console.log('IS_DEV: ', isDev)
console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log(
  'SHIKI_PATH: ',
  isDev ? join(process.cwd(), 'public/assets') : join(process.cwd(), 'assets')
)
// read dir in production
// console.log(
//   'reading assests path [assets]:',
//   readdirSync(join(process.cwd(), 'assets'))
// )
console.log(
  'reading assests path [pubic/assets]:',
  readdirSync(join(process.cwd(), 'public/assets'))
)
console.log('##############################################')

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
