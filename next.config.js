/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  packages: [
    {
      name: 'crypto-js',
      location: '../../node_modules/crypto-js',
      main: 'index'
    }
  ],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://finovista.netlify.app/:path*',
      }
    ]
  }

}
