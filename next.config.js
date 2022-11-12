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
  images: {
    domains: ['localhost', 'finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com', 'reactnativecode.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/contacts',
        destination: 'https://finovista.netlify.app/api/contacts',
      }
      // {
      //   source: '/api/imageUpload',
      //   destination: 'https://thefinovista.netlify.app/api/uploadimage',
      // }
    ]
  }

}
