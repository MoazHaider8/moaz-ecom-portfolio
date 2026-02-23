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
  
  // Extended fields for premium case studies
  category?: string
  platform?: string
  industry?: string
  timeline?: string
  primaryKPI?: string
  clientContext?: string
  challenges?: Array<{
    title: string
    description: string
  }>
  strategyPillars?: Array<{
    title: string
    description: string
  }>
  executionSteps?: Array<{
    phase: string
    title: string
    description: string
  }>
  keyTakeaways?: string[]
  learnings?: {
    whatWorked: string[]
    whatDidnt: string[]
    surprises?: string[]
  }
  faqs?: Array<{
    question: string
    answer: string
  }>
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
    category: 'Fashion Ecommerce',
    platform: 'Shopify Plus',
    industry: 'Fashion & Apparel',
    timeline: '4 months',
    primaryKPI: 'Organic category page traffic',
    clientContext: `Mid-sized fashion brand with 300+ products across 8 main categories. Strong brand presence but poor organic visibility. 70% of traffic came from paid channels. Category pages were competing with each other for the same keywords, diluting ranking potential.`,
    challenges: [
      {
        title: 'Severe Keyword Cannibalization',
        description: `Multiple category pages targeting identical keywords ("women's dresses", "summer dresses", "casual dresses"). Google couldn't determine which page to rank, causing all pages to underperform.`
      },
      {
        title: 'Flat Information Architecture',
        description: `All categories existed at the same hierarchical level with no parent-child relationships. This structure didn't align with how users actually search for fashion products.`
      },
      {
        title: 'Thin Category Content',
        description: `Category pages consisted only of product grids with no unique content, making it difficult for search engines to understand topical relevance and differentiate between similar categories.`
      }
    ],
    strategyPillars: [
      {
        title: 'Topical Mapping & Hierarchy',
        description: `Created a comprehensive keyword-to-intent map. Identified primary categories (Women's, Men's, Accessories) as top-level, with subcategories (Tops, Dresses, Outerwear) nested beneath. Mapped keywords to specific pages based on search intent and competition.`
      },
      {
        title: 'Content Differentiation',
        description: `Developed unique editorial content for each category page: buying guides, style tips, fabric information, and seasonal trends. This made each page contextually unique while targeting distinct keyword sets.`
      },
      {
        title: 'Internal Linking Architecture',
        description: `Implemented strategic internal linking: parent categories link to child categories, related categories cross-link appropriately, and product pages link back to multiple relevant category levels.`
      }
    ],
    executionSteps: [
      {
        phase: 'Phase 1',
        title: 'Audit & Analysis (Weeks 1-2)',
        description: `Conducted comprehensive keyword cannibalization audit using Screaming Frog and Search Console. Identified 23 instances where 3+ pages competed for the same keyword cluster. Mapped current site structure and created topical hierarchy blueprint.`
      },
      {
        phase: 'Phase 2',
        title: 'Restructure Implementation (Weeks 3-8)',
        description: `Consolidated redundant categories through 301 redirects. Created parent-child category relationships. Reassigned products to the most appropriate categories. Implemented breadcrumb navigation reflecting new hierarchy.`
      },
      {
        phase: 'Phase 3',
        title: 'Content Development (Weeks 6-12)',
        description: `Wrote unique 500-800 word editorial sections for each main category page. Created 200-300 word descriptions for subcategory pages. Developed seasonal buying guides. Optimized meta titles and descriptions for keyword clarity.`
      },
      {
        phase: 'Phase 4',
        title: 'Technical Implementation (Weeks 10-14)',
        description: `Deployed schema markup (BreadcrumbList, CollectionPage). Optimized internal linking patterns. Created XML sitemap with priority levels reflecting category hierarchy. Implemented faceted navigation with crawl controls.`
      },
      {
        phase: 'Phase 5',
        title: 'Monitoring & Iteration (Weeks 14-16)',
        description: `Tracked rankings for target keywords across all category levels. Monitored organic traffic patterns. Adjusted internal linking based on performance data. Fine-tuned category descriptions based on user engagement metrics.`
      }
    ],
    keyTakeaways: [
      `Keyword cannibalization is silent but deadly—multiple pages competing for the same terms will always underperform versus one authoritative page`,
      `Clear category hierarchy helps both users and search engines understand topical relationships and content organization`,
      `Unique editorial content on category pages dramatically improves topical relevance signals and provides ranking differentiation`,
      `Strategic internal linking distributes authority and reinforces topical relationships between parent and child categories`,
      `Technical SEO elements (schema, breadcrumbs, XML sitemaps) amplify the impact of structural improvements`
    ],
    learnings: {
      whatWorked: [
        `Creating parent-child category relationships based on actual keyword research (not just intuition) eliminated cannibalization`,
        `Editorial content sections with seasonal updates gave us fresh content signals without constant product changes`,
        `Breadcrumb schema markup improved SERP visibility and click-through rates by making page hierarchy obvious`,
        `Redirecting redundant categories consolidated ranking signals and provided immediate traffic lift to target pages`
      ],
      whatDidnt: [
        `Initial automated product assignments placed items in wrong categories—required manual review and correction`,
        `Early internal linking was too aggressive (too many links per page)—had to dial back to maintain user experience`,
        `First content drafts were too promotional—had to rewrite with more educational, helpful tone`
      ],
      surprises: [
        `Subcategory pages started ranking for long-tail keywords faster than expected (within 3 weeks of content deployment)`,
        `Users actually read the editorial content—average time on category pages increased 89% after content was added`,
        `Several "minor" categories became top traffic drivers once given proper topical clarity and unique content`
      ]
    },
    faqs: [
      {
        question: `How did you decide which category pages to keep versus consolidate?`,
        answer: `We used three criteria: (1) Monthly search volume—categories targeting keywords with <100 searches/month were consolidation candidates. (2) Keyword uniqueness—if two categories targeted >70% identical keywords, we merged them. (3) Product count—categories with <15 products were folded into parent categories unless they had strong search demand.`
      },
      {
        question: `What happened to the URLs of consolidated categories?`,
        answer: `All consolidated category URLs were redirected (301) to the most relevant remaining category page. We monitored redirect chains to ensure proper path length and maintained redirect mapping in a spreadsheet for future reference. Rankings and link equity transferred to target pages within 2-3 weeks.`
      },
      {
        question: `How do you prevent cannibalization as new products and categories are added?`,
        answer: `We created a category launch checklist: (1) Keyword research confirms unique topical space. (2) New category doesn't overlap >30% with existing category keywords. (3) Content template ensures unique editorial angle. (4) Internal linking plan is defined before launch. (5) Parent category assignment is clear. This process prevents cannibalization from reoccurring.`
      },
      {
        question: `Can this approach work for smaller fashion brands with fewer categories?`,
        answer: `Absolutely. Even brands with 10-20 products can benefit from clear category structure and unique content. The principles scale down—you just have fewer tiers in the hierarchy. Smaller brands often see faster results because there are fewer pages to optimize and less legacy mess to clean up.`
      }
    ]
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
