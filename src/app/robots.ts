import { MetadataRoute } from 'next'

// Erforderlich für Static Export
export const dynamic = 'force-static'

const baseUrl = 'https://signage.cockpit360.de'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/de/',
          '/en/',
          '/images/',
          '/*.css',
          '/*.js',
        ],
      },
      // Social Media Bots - explizit erlauben
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Slackbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
