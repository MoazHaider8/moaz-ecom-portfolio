import { NextRequest, NextResponse } from 'next/server'
import { collectAllUrls, type BucketType } from '@/lib/sitemap/url-collector'
import { generateSitemapIndexXml, type SitemapEntry, paginateUrls } from '@/lib/sitemap/xml-helpers'

const DOMAIN = 'https://moazhaider.com'
const URLS_PER_PAGE = 1000

/**
 * GET /sitemap.xml
 * Returns the sitemap index listing all bucket sitemaps
 */
export async function GET(request: NextRequest) {
  try {
    // Collect all URLs from all buckets
    const allUrls = await collectAllUrls()
    
    // Build sitemap entries for each bucket
    const sitemapEntries: SitemapEntry[] = []
    const buckets: BucketType[] = ['pages', 'blogs', 'services', 'platforms', 'industries', 'countries', 'cities']
    const lastmod = new Date().toISOString().split('T')[0]
    
    for (const bucket of buckets) {
      const urls = allUrls[bucket]
      
      // Skip empty buckets
      if (urls.length === 0) {
        continue
      }
      
      // Calculate how many pages this bucket needs
      const pages = paginateUrls(urls, URLS_PER_PAGE)
      
      // Add a sitemap entry for each page
      for (let i = 0; i < pages.length; i++) {
        const pageNumber = i + 1
        sitemapEntries.push({
          loc: `${DOMAIN}/sitemaps/${bucket}-${pageNumber}.xml`,
          lastmod,
        })
      }
    }
    
    // Generate the sitemap index XML
    const xml = generateSitemapIndexXml(sitemapEntries)
    
    // Return with proper headers and caching
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=43200, s-maxage=86400, stale-while-revalidate=604800', // 12h cache, 24h CDN, 7d stale
      },
    })
  } catch (error) {
    console.error('Error generating sitemap index:', error)
    return new NextResponse('Error generating sitemap index', { status: 500 })
  }
}

// Enable static generation with revalidation
export const revalidate = 43200 // Revalidate every 12 hours
