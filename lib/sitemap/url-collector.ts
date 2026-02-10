import fs from 'fs'
import path from 'path'

/**
 * URL entry for sitemap
 */
export interface UrlEntry {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

/**
 * Bucket type for categorizing URLs
 */
export type BucketType = 'pages' | 'blogs' | 'services' | 'platforms' | 'industries' | 'countries' | 'cities'

/**
 * Structured URL collection by bucket
 */
export interface UrlCollection {
  pages: UrlEntry[]
  blogs: UrlEntry[]
  services: UrlEntry[]
  platforms: UrlEntry[]
  industries: UrlEntry[]
  countries: UrlEntry[]
  cities: UrlEntry[]
}

const DOMAIN = 'https://moazhaider.com'

/**
 * Remove trailing slash from URL (except for root domain)
 */
function normalizeUrl(url: string): string {
  if (url === DOMAIN || url === `${DOMAIN}/`) {
    return DOMAIN
  }
  return url.replace(/\/$/, '')
}

/**
 * Get all page.tsx files recursively from a directory
 */
function getPageFiles(dir: string, baseDir: string = dir): string[] {
  const results: string[] = []
  
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name)
      
      if (file.isDirectory()) {
        // Recursively scan subdirectories
        results.push(...getPageFiles(fullPath, baseDir))
      } else if (file.name === 'page.tsx') {
        // Convert file path to route
        const relativePath = path.relative(baseDir, dir)
        const route = relativePath === '' ? '/' : `/${relativePath.replace(/\\/g, '/')}`
        results.push(route)
      }
    }
  } catch (error) {
    // Directory doesn't exist yet, return empty array
    console.warn(`Directory not found: ${dir}`)
  }
  
  return results
}

/**
 * Discover static pages from app directory
 */
function discoverStaticPages(): UrlEntry[] {
  const appDir = path.join(process.cwd(), 'app')
  const routes = getPageFiles(appDir)
  
  // Filter out service/platform/industry routes (they go in their own buckets)
  const staticRoutes = routes.filter(route => {
    const segments = route.split('/').filter(Boolean)
    if (segments.length === 0) return true // Homepage
    const firstSegment = segments[0]
    return !['services', 'platforms', 'industries', 'blogs', 'countries', 'cities'].includes(firstSegment)
  })
  
  return staticRoutes.map(route => ({
    loc: normalizeUrl(`${DOMAIN}${route}`),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }))
}

/**
 * Discover service pages from filesystem
 */
function discoverServices(): UrlEntry[] {
  const servicesDir = path.join(process.cwd(), 'app', 'services')
  const routes = getPageFiles(servicesDir)
  
  return routes
    .map(route => `/services${route === '/' ? '' : route}`)
    .sort()
    .map(route => ({
      loc: normalizeUrl(`${DOMAIN}${route}`),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly' as const,
      priority: 0.9,
    }))
}

/**
 * Discover platform pages from filesystem
 */
function discoverPlatforms(): UrlEntry[] {
  const platformsDir = path.join(process.cwd(), 'app', 'platforms')
  const routes = getPageFiles(platformsDir)
  
  return routes
    .map(route => `/platforms${route === '/' ? '' : route}`)
    .sort()
    .map(route => ({
      loc: normalizeUrl(`${DOMAIN}${route}`),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly' as const,
      priority: 0.9,
    }))
}

/**
 * Discover industry pages from filesystem
 */
function discoverIndustries(): UrlEntry[] {
  const industriesDir = path.join(process.cwd(), 'app', 'industries')
  const routes = getPageFiles(industriesDir)
  
  return routes
    .map(route => `/industries${route === '/' ? '' : route}`)
    .sort()
    .map(route => ({
      loc: normalizeUrl(`${DOMAIN}${route}`),
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly' as const,
      priority: 0.9,
    }))
}

/**
 * Discover blog posts
 * TODO: Replace with actual blog source (MDX, CMS, database)
 */
function discoverBlogs(): UrlEntry[] {
  // Currently no blogs exist
  // When you add blogs, implement discovery logic here:
  // - Read from /app/blog/[slug] or /content/blog/*.mdx
  // - Query from CMS API
  // - Query from database
  
  const blogsDir = path.join(process.cwd(), 'app', 'blog')
  try {
    const routes = getPageFiles(blogsDir)
    return routes
      .map(route => `/blog${route === '/' ? '' : route}`)
      .sort()
      .map(route => ({
        loc: normalizeUrl(`${DOMAIN}${route}`),
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly' as const,
        priority: 0.8,
      }))
  } catch {
    return []
  }
}

/**
 * Discover country pages
 * TODO: Replace with actual country data source
 */
function discoverCountries(): UrlEntry[] {
  // Currently no country pages exist
  // When you add countries, implement discovery logic here:
  // - Read from data file (countries.json)
  // - Query from database
  // - Generate from CMS
  
  const countriesDir = path.join(process.cwd(), 'app', 'countries')
  try {
    const routes = getPageFiles(countriesDir)
    return routes
      .map(route => `/countries${route === '/' ? '' : route}`)
      .sort()
      .map(route => ({
        loc: normalizeUrl(`${DOMAIN}${route}`),
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly' as const,
        priority: 0.7,
      }))
  } catch {
    return []
  }
}

/**
 * Discover city pages
 * TODO: Replace with actual city data source
 */
function discoverCities(): UrlEntry[] {
  // Currently no city pages exist
  // When you add cities, implement discovery logic here:
  // - Read from data file (cities.json)
  // - Query from database
  // - Generate from CMS
  
  const citiesDir = path.join(process.cwd(), 'app', 'cities')
  try {
    const routes = getPageFiles(citiesDir)
    return routes
      .map(route => `/cities${route === '/' ? '' : route}`)
      .sort()
      .map(route => ({
        loc: normalizeUrl(`${DOMAIN}${route}`),
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly' as const,
        priority: 0.7,
      }))
  } catch {
    return []
  }
}

/**
 * Single source of truth: Collect all URLs by bucket
 * This function automatically reflects the current state of the site
 */
export async function collectAllUrls(): Promise<UrlCollection> {
  return {
    pages: discoverStaticPages(),
    blogs: discoverBlogs(),
    services: discoverServices(),
    platforms: discoverPlatforms(),
    industries: discoverIndustries(),
    countries: discoverCountries(),
    cities: discoverCities(),
  }
}

/**
 * Get URLs for a specific bucket
 */
export async function getUrlsForBucket(bucket: BucketType): Promise<UrlEntry[]> {
  const allUrls = await collectAllUrls()
  return allUrls[bucket] || []
}

/**
 * Validate if a bucket name is valid
 */
export function isValidBucket(bucket: string): bucket is BucketType {
  return ['pages', 'blogs', 'services', 'platforms', 'industries', 'countries', 'cities'].includes(bucket)
}

/**
 * Get the total number of sitemap pages needed for a bucket
 */
export async function getBucketPageCount(bucket: BucketType, urlsPerPage: number = 1000): Promise<number> {
  const urls = await getUrlsForBucket(bucket)
  return Math.ceil(urls.length / urlsPerPage)
}
