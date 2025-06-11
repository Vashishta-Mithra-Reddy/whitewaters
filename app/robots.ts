import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || 'https://whitewaters.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/hiking',
          '/kayaking',
          '/rafting',
          '/expedition',
          '/trekking',
          '/contact',
          '/about',
          '/pilgrimage',
          '/services',
          '/services/'
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/profile',
          '/auth/',
          '/_next/',
          '/*.json',
          '/*.xml',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
