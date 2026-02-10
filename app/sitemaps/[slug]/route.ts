import { NextRequest, NextResponse } from 'next/server'
import { getUrlsForBucket, isValidBucket, type BucketType } from '@/lib/sitemap/url-collector'
import { generateSitemapXml, paginateUrls } from '@/lib/sitemap/xml-helpers'

const URLS_PER_PAGE = 1000

/**
 * GET /sitemaps/[slug].xml
 * Returns a specific bucket sitemap page (e.g., services-1.xml, platforms-2.xml)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    
    // Parse the slug to extract bucket and page number
    // Expected format: {bucket}-{page}.xml (e.g., "services-1.xml")
    const match = slug.match(/^([a-z]+)-(\d+)\.xml$/)
    
    if (!match) {
      return new NextResponse('Invalid sitemap format. Expected format: {bucket}-{page}.xml', { 
        status: 400 
      })
    }
    
    const bucket = match[1]
    const pageNumber = parseInt(match[2], 10)
    
    // Validate bucket name
    if (!isValidBucket(bucket)) {
      return new NextResponse(`Invalid bucket: ${bucket}. Valid buckets: pages, blogs, services, platforms, industries, countries, cities`, { 
        status: 404 
      })
    }
    
    // Validate page number
    if (pageNumber < 1 || !Number.isInteger(pageNumber)) {
      return new NextResponse('Invalid page number. Must be a positive integer.', { 
        status: 400 
      })
    }
    
    // Get all URLs for this bucket
    const allUrls = await getUrlsForBucket(bucket as BucketType)
    
    // Paginate the URLs
    const pages = paginateUrls(allUrls, URLS_PER_PAGE)
    
    // Check if the requested page exists
    if (pageNumber > pages.length) {
      return new NextResponse(`Page ${pageNumber} does not exist for bucket ${bucket}. Total pages: ${pages.length}`, { 
        status: 404 
      })
    }
    
    // Get the URLs for the requested page (page numbers are 1-indexed)
    const urlsForPage = pages[pageNumber - 1]
    
    // Generate the sitemap XML
    const xml = generateSitemapXml(urlsForPage)
    
    // Return with proper headers and caching
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=43200, s-maxage=86400, stale-while-revalidate=604800', // 12h cache, 24h CDN, 7d stale
      },
    })
  } catch (error) {
    console.error('Error generating bucket sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

// Enable static generation with revalidation
export const revalidate = 43200 // Revalidate every 12 hours

/**
 * Generate static params for all bucket sitemap pages
 * This enables static generation at build time
 */
export async function generateStaticParams() {
  const { collectAllUrls } = await import('@/lib/sitemap/url-collector')
  const allUrls = await collectAllUrls()
  const params: { slug: string }[] = []
  
  const buckets: BucketType[] = ['pages', 'blogs', 'services', 'platforms', 'industries', 'countries', 'cities']
  
  for (const bucket of buckets) {
    const urls = allUrls[bucket]
    
    if (urls.length === 0) {
      continue
    }
    
    const pages = paginateUrls(urls, URLS_PER_PAGE)
    
    for (let i = 0; i < pages.length; i++) {
      const pageNumber = i + 1
      params.push({ slug: `${bucket}-${pageNumber}.xml` })
    }
  }
  
  return params
}
