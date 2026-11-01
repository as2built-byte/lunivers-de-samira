/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Skip static 404/500 page generation
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  images: {
    domains: [
      'localhost',
      'res.cloudinary.com', // Cloudinary
      'images.unsplash.com', // Unsplash pour les images de test
    ],
    unoptimized: true,
  },

  // Redirections
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/shop',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/formation',
        permanent: true,
      },
    ]
  },

  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
