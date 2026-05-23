/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === 'true' ? '/vincent-kinney-portfolio' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/vincent-kinney-portfolio/' : '',
}

module.exports = nextConfig
