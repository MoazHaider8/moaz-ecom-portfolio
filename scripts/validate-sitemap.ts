/**
 * Sitemap Validation Script
 * 
 * Run this script to validate your sitemap implementation:
 * npx tsx scripts/validate-sitemap.ts
 */

import { collectAllUrls } from '../lib/sitemap/url-collector'
import { paginateUrls } from '../lib/sitemap/xml-helpers'

const DOMAIN = 'https://moazhaider.com'
const URLS_PER_PAGE = 1000

async function validateSitemap() {
  console.log('🔍 Validating Sitemap Implementation...\n')
  
  try {
    // Collect all URLs
    const allUrls = await collectAllUrls()
    
    // Validation results
    const results = {
      totalUrls: 0,
      buckets: [] as any[],
      errors: [] as string[],
      warnings: [] as string[],
    }
    
    const buckets = ['pages', 'blogs', 'services', 'platforms', 'industries', 'countries', 'cities'] as const
    
    for (const bucket of buckets) {
      const urls = allUrls[bucket]
      const urlCount = urls.length
      results.totalUrls += urlCount
      
      if (urlCount === 0) {
        results.warnings.push(`Bucket '${bucket}' is empty`)
        continue
      }
      
      // Paginate URLs
      const pages = paginateUrls(urls, URLS_PER_PAGE)
      
      // Validate each URL
      for (const url of urls) {
        // Check for trailing slashes (except root domain)
        if (url.loc !== DOMAIN && url.loc.endsWith('/')) {
          results.errors.push(`URL has trailing slash: ${url.loc}`)
        }
        
        // Check for absolute URLs
        if (!url.loc.startsWith('http://') && !url.loc.startsWith('https://')) {
          results.errors.push(`URL is not absolute: ${url.loc}`)
        }
        
        // Check domain
        if (!url.loc.startsWith(DOMAIN)) {
          results.errors.push(`URL has wrong domain: ${url.loc}`)
        }
        
        // Check for duplicate slashes
        if (url.loc.includes('//') && !url.loc.startsWith('http')) {
          results.errors.push(`URL has duplicate slashes: ${url.loc}`)
        }
      }
      
      // Check for duplicates
      const urlSet = new Set(urls.map(u => u.loc))
      if (urlSet.size !== urls.length) {
        results.errors.push(`Bucket '${bucket}' has duplicate URLs`)
      }
      
      // Check pagination
      if (urlCount > URLS_PER_PAGE && pages.length !== Math.ceil(urlCount / URLS_PER_PAGE)) {
        results.errors.push(`Bucket '${bucket}' pagination is incorrect`)
      }
      
      results.buckets.push({
        name: bucket,
        urlCount,
        pageCount: pages.length,
        sitemaps: pages.map((_, i) => `/sitemaps/${bucket}-${i + 1}.xml`),
        priority: urls[0]?.priority,
        changefreq: urls[0]?.changefreq,
      })
    }
    
    // Print results
    console.log('📊 Statistics:\n')
    console.log(`Total URLs: ${results.totalUrls}`)
    console.log(`Total Buckets: ${results.buckets.filter(b => b.urlCount > 0).length}`)
    console.log(`Total Sitemap Files: ${results.buckets.reduce((sum, b) => sum + b.pageCount, 0)}`)
    console.log('\n')
    
    console.log('📦 Buckets:\n')
    for (const bucket of results.buckets) {
      console.log(`${bucket.name}:`)
      console.log(`  URLs: ${bucket.urlCount}`)
      console.log(`  Pages: ${bucket.pageCount}`)
      console.log(`  Priority: ${bucket.priority ?? 'N/A'}`)
      console.log(`  Change Freq: ${bucket.changefreq ?? 'N/A'}`)
      console.log(`  Sitemaps: ${bucket.sitemaps.join(', ')}`)
      console.log('')
    }
    
    // Print warnings
    if (results.warnings.length > 0) {
      console.log('⚠️  Warnings:\n')
      for (const warning of results.warnings) {
        console.log(`  - ${warning}`)
      }
      console.log('')
    }
    
    // Print errors
    if (results.errors.length > 0) {
      console.log('❌ Errors:\n')
      for (const error of results.errors) {
        console.log(`  - ${error}`)
      }
      console.log('')
      console.log('❌ Validation Failed!\n')
      process.exit(1)
    }
    
    console.log('✅ Validation Passed!\n')
    
    // Print example URLs
    console.log('🔗 Example URLs:\n')
    console.log('Sitemap Index:')
    console.log(`  ${DOMAIN}/sitemap.xml\n`)
    
    console.log('Bucket Sitemaps:')
    for (const bucket of results.buckets) {
      if (bucket.urlCount > 0) {
        console.log(`  ${DOMAIN}${bucket.sitemaps[0]}`)
      }
    }
    console.log('')
    
    console.log('Robots.txt:')
    console.log(`  ${DOMAIN}/robots.txt`)
    console.log('')
    
    // Print sample URLs from each bucket
    console.log('📄 Sample URLs:\n')
    for (const bucket of results.buckets) {
      if (bucket.urlCount > 0) {
        const bucketUrls = allUrls[bucket.name as keyof typeof allUrls]
        const sampleUrls = bucketUrls.slice(0, 3)
        console.log(`${bucket.name}:`)
        for (const url of sampleUrls) {
          console.log(`  - ${url.loc}`)
        }
        if (bucketUrls.length > 3) {
          console.log(`  ... and ${bucketUrls.length - 3} more`)
        }
        console.log('')
      }
    }
    
  } catch (error) {
    console.error('❌ Validation error:', error)
    process.exit(1)
  }
}

// Run validation
validateSitemap()
