export interface CaseStudy {
  slug: string
  title: string
  type: 'industry' | 'platform' | 'technical' | 'content' | 'international'
  tags: string[]
  problem: string
  approach: string
  outcomes: string[]
  summary: string
  lastUpdated: string
  featured: boolean
  relatedLinks: {
    services?: string[]
    platforms?: string[]
    industries?: string[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fashion-brand-category-restructure',
    title: 'Fashion Brand Category Page Restructure',
    type: 'industry',
    tags: ['Fashion', 'Category SEO', 'Content Strategy'],
    problem: 'Category cannibalization',
    approach: 'Topical map restructure',
    outcomes: ['+127% organic traffic', 'Top 3 rankings for 47 keywords', '3.2x category sessions'],
    summary: 'Restructured category architecture for a fashion ecommerce brand to eliminate keyword cannibalization and establish clear topical hierarchy.',
    lastUpdated: '2025-12-15',
    featured: true,
    relatedLinks: {
      services: ['/services/category-page-seo', '/services/ecommerce-content-strategy'],
      industries: ['/industries/fashion-ecommerce-seo'],
    },
  },
  {
    slug: 'shopify-technical-crawl-budget-fix',
    title: 'Shopify Store Crawl Budget Optimization',
    type: 'platform',
    tags: ['Shopify', 'Technical SEO', 'Indexation'],
    problem: 'Crawl budget waste',
    approach: 'Technical cleanup & URL optimization',
    outcomes: ['+89% indexation efficiency', '-67% crawl errors', 'Indexation fixed in 21 days'],
    summary: 'Eliminated crawl waste on a Shopify Plus store by fixing duplicate parameter URLs, improving robots.txt, and implementing strategic canonicalization.',
    lastUpdated: '2026-01-08',
    featured: true,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo'],
      platforms: ['/platforms/shopify-seo'],
    },
  },
  {
    slug: 'international-hreflang-deployment',
    title: 'Multi-Market Hreflang Implementation',
    type: 'international',
    tags: ['International SEO', 'Technical SEO', 'Multi-language'],
    problem: 'International duplicate content',
    approach: 'Hreflang architecture + localization',
    outcomes: ['+214% international traffic', 'Localized rankings achieved', '5 markets optimized'],
    summary: 'Deployed hreflang structure across 5 international markets (US, UK, CA, AU, DE) for a health supplements brand with market-specific keyword mapping.',
    lastUpdated: '2025-11-22',
    featured: true,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo', '/services/ecommerce-keyword-research'],
    },
  },
  {
    slug: 'electronics-product-schema-boost',
    title: 'Electronics Store Product Schema Deployment',
    type: 'technical',
    tags: ['Electronics', 'Technical SEO', 'Schema Markup'],
    problem: 'Missing rich results',
    approach: 'Advanced Product schema',
    outcomes: ['+43% CTR improvement', 'Rich snippets live for 912 products', 'Price & availability in SERPs'],
    summary: 'Implemented comprehensive Product schema markup with price, availability, and review data for an electronics retailer.',
    lastUpdated: '2026-01-15',
    featured: false,
    relatedLinks: {
      services: ['/services/product-page-seo', '/services/technical-ecommerce-seo'],
      industries: ['/industries/electronics-ecommerce-seo'],
    },
  },
  {
    slug: 'beauty-brand-content-topical-authority',
    title: 'Beauty Brand Topical Authority Strategy',
    type: 'content',
    tags: ['Beauty', 'Content Strategy', 'Topical Authority'],
    problem: 'Low authority in competitive niche',
    approach: 'Content hub + topical depth',
    outcomes: ['+156% blog traffic', '23 featured snippets secured', 'Authority boost for product pages'],
    summary: 'Built topical authority through strategic editorial content hubs targeting ingredient education, skincare routines, and buying guides.',
    lastUpdated: '2025-10-30',
    featured: false,
    relatedLinks: {
      services: ['/services/ecommerce-content-strategy', '/services/ecommerce-keyword-research'],
      industries: ['/industries/beauty-skincare-ecommerce-seo'],
    },
  },
  {
    slug: 'magento-site-speed-core-web-vitals',
    title: 'Magento Core Web Vitals Optimization',
    type: 'platform',
    tags: ['Magento', 'Technical SEO', 'Site Speed'],
    problem: 'Poor Core Web Vitals',
    approach: 'Performance optimization stack',
    outcomes: ['LCP: 4.2s → 1.8s', 'CLS: 0.45 → 0.08', '+31% mobile rankings improvement'],
    summary: 'Optimized Core Web Vitals for a Magento 2 store through image optimization, lazy loading, CSS cleanup, and JS deferral.',
    lastUpdated: '2025-12-01',
    featured: false,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo'],
      platforms: ['/platforms/magento-seo'],
    },
  },
  {
    slug: 'jewelry-brand-collection-architecture',
    title: 'Jewelry Brand Collection Page Strategy',
    type: 'industry',
    tags: ['Jewelry', 'Category SEO', 'Internal Linking'],
    problem: 'Flat collection structure',
    approach: 'Hierarchical collection strategy',
    outcomes: ['+94% collection page traffic', 'Top 5 positions for 31 collection terms', 'Internal link equity distributed'],
    summary: 'Redesigned collection architecture for a luxury jewelry brand with strategic hierarchy and internal linking to boost category visibility.',
    lastUpdated: '2025-09-17',
    featured: false,
    relatedLinks: {
      services: ['/services/category-page-seo'],
      industries: ['/industries/jewelry-accessories-ecommerce-seo'],
    },
  },
  {
    slug: 'woocommerce-plugin-conflict-resolution',
    title: 'WooCommerce Plugin Conflict SEO Fix',
    type: 'platform',
    tags: ['WooCommerce', 'Technical SEO', 'Plugin Issues'],
    problem: 'SEO plugin conflicts',
    approach: 'Technical audit & cleanup',
    outcomes: ['Duplicate meta tags removed', 'Schema conflicts resolved', '+22% indexation improvement'],
    summary: 'Diagnosed and resolved SEO plugin conflicts on a WooCommerce store causing duplicate meta tags and broken schema markup.',
    lastUpdated: '2025-11-05',
    featured: false,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo', '/services/ecommerce-seo-audit'],
      platforms: ['/platforms/woocommerce-seo'],
    },
  },
  {
    slug: 'furniture-brand-product-content-optimization',
    title: 'Furniture Store Product Content Expansion',
    type: 'industry',
    tags: ['Furniture', 'Product SEO', 'Content Strategy'],
    problem: 'Thin product descriptions',
    approach: 'Content template + unique descriptions',
    outcomes: ['+78% product page traffic', '412 products optimized', 'Average position: 38 → 14'],
    summary: 'Developed SEO-optimized content templates and unique product descriptions for a furniture retailer with 400+ SKUs.',
    lastUpdated: '2025-08-24',
    featured: false,
    relatedLinks: {
      services: ['/services/product-page-seo', '/services/ecommerce-content-strategy'],
      industries: ['/industries/furniture-home-decor-seo'],
    },
  },
  {
    slug: 'health-supplements-ymyl-compliance',
    title: 'Health Supplements YMYL Content Strategy',
    type: 'industry',
    tags: ['Health', 'Content Strategy', 'YMYL Compliance'],
    problem: 'YMYL content compliance',
    approach: 'EAT optimization + citations',
    outcomes: ['EAT score improved', 'Medical citations added', '+63% organic visibility'],
    summary: 'Implemented YMYL-compliant content strategy for health supplements brand with credible citations, expert authorship, and fact-checked claims.',
    lastUpdated: '2025-10-12',
    featured: false,
    relatedLinks: {
      services: ['/services/ecommerce-content-strategy'],
      industries: ['/industries/health-supplements-ecommerce-seo'],
    },
  },
  {
    slug: 'bigcommerce-faceted-navigation-seo',
    title: 'BigCommerce Faceted Navigation Control',
    type: 'platform',
    tags: ['BigCommerce', 'Technical SEO', 'Faceted Navigation'],
    problem: 'Faceted URL explosion',
    approach: 'Parameter handling + canonicalization',
    outcomes: ['URL bloat reduced by 84%', 'Crawl efficiency improved', 'Indexation controlled'],
    summary: 'Controlled faceted navigation URL proliferation on BigCommerce store through strategic parameter handling and canonical implementation.',
    lastUpdated: '2025-09-29',
    featured: false,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo'],
      platforms: ['/platforms/bigcommerce-seo'],
    },
  },
  {
    slug: 'custom-platform-migration-seo',
    title: 'Custom Platform Migration SEO Preservation',
    type: 'technical',
    tags: ['Migration', 'Technical SEO', 'Custom Platform'],
    problem: 'Platform migration risk',
    approach: 'Migration strategy + 301 mapping',
    outcomes: ['Zero ranking loss', '100% 301 redirect coverage', 'Traffic maintained post-launch'],
    summary: 'Managed SEO-safe migration from Magento to custom headless commerce platform with comprehensive redirect mapping and monitoring.',
    lastUpdated: '2025-07-19',
    featured: false,
    relatedLinks: {
      services: ['/services/technical-ecommerce-seo', '/services/ecommerce-seo-audit'],
      platforms: ['/platforms/custom-ecommerce-seo'],
    },
  },
]

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured)
}

export function getCaseStudiesByType(type: CaseStudy['type']): CaseStudy[] {
  return caseStudies.filter((study) => study.type === type)
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug)
}
