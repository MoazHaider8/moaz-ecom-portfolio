# Sitemap Quick Start Guide

## 🚀 Quick Start

Your sitemap system is fully configured and running!

### Testing Locally

```bash
# Start dev server
npm run dev

# Visit these URLs:
http://localhost:3001/sitemap.xml              # Sitemap index
http://localhost:3001/sitemaps/services-1.xml  # Services sitemap
http://localhost:3001/sitemaps/platforms-1.xml # Platforms sitemap
http://localhost:3001/robots.txt               # Robots.txt
```

### Validate Implementation

```bash
# Run validation script
npx tsx scripts/validate-sitemap.ts
```

## 📦 Current State

**Total URLs**: 22
**Buckets**: 4 active (pages, services, platforms, industries)

### Sitemaps Generated

- ✅ `/sitemap.xml` - Main sitemap index
- ✅ `/sitemaps/pages-1.xml` - 1 URL (homepage)
- ✅ `/sitemaps/services-1.xml` - 7 URLs
- ✅ `/sitemaps/platforms-1.xml` - 7 URLs
- ✅ `/sitemaps/industries-1.xml` - 7 URLs
- ✅ `/robots.txt` - Points to sitemap

### Empty Buckets (Ready for Future Content)

- 🔜 `/sitemaps/blogs-1.xml` - Will appear when blogs are added
- 🔜 `/sitemaps/countries-1.xml` - Will appear when countries are added
- 🔜 `/sitemaps/cities-1.xml` - Will appear when cities are added

## ✨ Key Features

### 1. Fully Automatic
Add a new page → automatically in sitemap
```bash
# Example: Add new service page
mkdir -p app/services/my-new-service
# Create page.tsx...
# Restart dev server → URL automatically appears!
```

### 2. No Trailing Slashes
All URLs are canonical:
```
✅ https://moazhaider.com/services
❌ https://moazhaider.com/services/
```

### 3. Auto-Pagination
If any bucket exceeds 1000 URLs:
- services-1.xml (URLs 1-1000)
- services-2.xml (URLs 1001-2000)
- etc.

### 4. Smart Caching
- Revalidates every 12 hours
- CDN cached for 24 hours
- Stale-while-revalidate for 7 days

## 🎯 Next Steps

### Deploy to Production

1. **Push to GitHub**
```bash
git add .
git commit -m "Add dynamic sitemap system"
git push
```

2. **Deploy to Vercel**
   - Automatic deployment via GitHub integration
   - Sitemaps will be available at:
     - https://moazhaider.com/sitemap.xml
     - https://moazhaider.com/sitemaps/services-1.xml
     - etc.

3. **Submit to Search Engines**

   **Google Search Console:**
   - Go to: https://search.google.com/search-console
   - Select your property
   - Sitemaps → Add new sitemap
   - Enter: `sitemap.xml`
   - Submit

   **Bing Webmaster Tools:**
   - Go to: https://www.bing.com/webmasters
   - Select your site
   - Sitemaps → Submit Sitemap
   - Enter: `https://moazhaider.com/sitemap.xml`

### Add Blog Support

When you're ready to add blogs:

1. Create blog directory:
```bash
mkdir -p app/blog/[slug]
```

2. Update `lib/sitemap/url-collector.ts`:
```typescript
// In discoverBlogs() function, replace with:
function discoverBlogs(): UrlEntry[] {
  const blogsDir = path.join(process.cwd(), 'app', 'blog')
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
}
```

3. Restart server → Blog URLs automatically appear!

### Add Countries/Cities

Update the respective discover functions in `lib/sitemap/url-collector.ts`:

```typescript
function discoverCountries(): UrlEntry[] {
  // Load from your data source
  const countries = ['usa', 'uk', 'canada', 'australia']
  
  return countries.map(slug => ({
    loc: normalizeUrl(`${DOMAIN}/countries/${slug}`),
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.7,
  }))
}
```

## 🔧 Common Tasks

### View All URLs in a Bucket

```bash
npx tsx scripts/validate-sitemap.ts
```

### Force Sitemap Regeneration

In production (Vercel):
```typescript
// In your webhook or admin panel
await fetch('https://moazhaider.com/api/revalidate?path=/sitemap.xml')
```

Or redeploy:
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

### Check Sitemap Health

```bash
# Count total URLs
curl https://moazhaider.com/sitemap.xml | grep -c "<loc>"

# Validate XML
curl https://moazhaider.com/sitemap.xml | xmllint --noout -
```

## 📋 Validation Checklist

Before going live, verify:

- ✅ Sitemap index returns valid XML
- ✅ All bucket sitemaps accessible
- ✅ No trailing slashes in URLs
- ✅ All URLs start with https://moazhaider.com
- ✅ Robots.txt includes sitemap reference
- ✅ Content-Type: application/xml
- ✅ No 404 errors
- ✅ Google Search Console shows no errors

## 🆘 Troubleshooting

### Problem: 404 on sitemap route
**Solution**: Restart dev server, check route files exist

### Problem: URLs have trailing slashes
**Solution**: Check `normalizeUrl()` function is being used

### Problem: Sitemap not updating
**Solution**: 
- In dev: Restart server
- In prod: Wait for revalidation (12h) or redeploy

### Problem: Too slow to generate
**Solution**: Consider splitting buckets or optimizing discover functions

## 📚 Documentation

Full documentation: [SITEMAP-DOCUMENTATION.md](./SITEMAP-DOCUMENTATION.md)

## ✅ You're All Set!

Your sitemap system is production-ready and will automatically:
- ✅ Discover new pages
- ✅ Remove deleted pages
- ✅ Paginate large buckets
- ✅ Cache for performance
- ✅ Update search engines

**No manual sitemap maintenance needed ever again!** 🎉
