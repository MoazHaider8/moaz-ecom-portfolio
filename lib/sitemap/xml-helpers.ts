import type { UrlEntry } from './url-collector'

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Generate XML for a single URL entry in a sitemap
 */
function generateUrlXml(entry: UrlEntry): string {
  let xml = '  <url>\n'
  xml += `    <loc>${escapeXml(entry.loc)}</loc>\n`
  
  if (entry.lastmod) {
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`
  }
  
  if (entry.changefreq) {
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`
  }
  
  if (entry.priority !== undefined) {
    xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`
  }
  
  xml += '  </url>\n'
  return xml
}

/**
 * Generate a complete sitemap XML document
 */
export function generateSitemapXml(urls: UrlEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  for (const url of urls) {
    xml += generateUrlXml(url)
  }
  
  xml += '</urlset>'
  return xml
}

/**
 * Sitemap index entry
 */
export interface SitemapEntry {
  loc: string
  lastmod?: string
}

/**
 * Generate XML for a single sitemap entry in the index
 */
function generateSitemapEntryXml(entry: SitemapEntry): string {
  let xml = '  <sitemap>\n'
  xml += `    <loc>${escapeXml(entry.loc)}</loc>\n`
  
  if (entry.lastmod) {
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`
  }
  
  xml += '  </sitemap>\n'
  return xml
}

/**
 * Generate a sitemap index XML document
 */
export function generateSitemapIndexXml(sitemaps: SitemapEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  
  for (const sitemap of sitemaps) {
    xml += generateSitemapEntryXml(sitemap)
  }
  
  xml += '</sitemapindex>'
  return xml
}

/**
 * Split URLs into pages of max size
 */
export function paginateUrls(urls: UrlEntry[], pageSize: number = 1000): UrlEntry[][] {
  const pages: UrlEntry[][] = []
  
  for (let i = 0; i < urls.length; i += pageSize) {
    pages.push(urls.slice(i, i + pageSize))
  }
  
  return pages.length > 0 ? pages : [[]] // Return at least one empty page
}
