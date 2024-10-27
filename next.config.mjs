/** @type {import('next').NextConfig} */
import WithHtml from '@blunck/next-html'

const withHtml = WithHtml({
  minimize: false,
  conservativeCollapse: true
})

const nextConfig = withHtml({
  rewrites: async () => {
    return [
      {
        source: '/healthz',
        destination: '/api/healthcheck',
      },
      {
        source: '/',
        destination: '/api/pages/home',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

})


export default nextConfig
