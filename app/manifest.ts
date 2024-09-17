import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bola Ahmed Buari - Senior Ruby Engineer',
    short_name: 'Bola Portfolio',
    description:
      'Bola Ahmed Buari is a Senior Ruby Engineer with expertise in full-stack development and scalable software solutions using Ruby on Rails, React, and TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icons-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icons-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
  }
}
