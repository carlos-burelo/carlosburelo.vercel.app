const { join } = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src', 'scss')],
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}
console.log(process.env)
module.exports = nextConfig
