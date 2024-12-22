import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl: string = "https://financehb.cz"
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ["/studio", "/book"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}