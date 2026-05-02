export interface WebTool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  live: boolean;
  isMVP?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  badge?: string;
}

export interface ToolGroup {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tools: WebTool[];
}

export const toolGroups: ToolGroup[] = [
  {
    slug: 'social-creator',
    title: 'Social & Creator Tools',
    description: 'Built for content creators, influencers, and social media professionals.',
    icon: '📱',
    color: '#F7933C',
    tools: [
      {
        slug: 'instagram-bio-score',
        name: 'Instagram Bio Score Checker',
        description: 'Analyze and score your Instagram bio for maximum impact and follower attraction.',
        icon: '📸',
        category: 'social-creator',
        live: false,
        isMVP: true,
        isNew: true,
        badge: 'MVP',
      },
      {
        slug: 'caption-generator',
        name: 'Caption Generator',
        description: 'Generate compelling social media captions for any post or platform.',
        icon: '✍️',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'hook-generator',
        name: 'Hook Generator',
        description: 'Create scroll-stopping opening hooks for your content and videos.',
        icon: '🎣',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'hashtag-generator',
        name: 'Hashtag Generator',
        description: 'Generate relevant hashtag sets to expand your reach on social platforms.',
        icon: '#️⃣',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'reel-script-generator',
        name: 'Reel Script Generator',
        description: 'Generate short-form video scripts for Reels, TikTok, and YouTube Shorts.',
        icon: '🎬',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'youtube-title-generator',
        name: 'YouTube Title Generator',
        description: 'Create click-worthy YouTube titles optimized for search and engagement.',
        icon: '▶️',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'thumbnail-text-generator',
        name: 'Thumbnail Text Generator',
        description: 'Generate punchy text overlays that boost your thumbnail click-through rate.',
        icon: '🖼️',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'social-media-audit',
        name: 'Social Media Audit Tool',
        description: 'Audit your social profiles for consistency, completeness, and optimization.',
        icon: '📋',
        category: 'social-creator',
        live: false,
        badge: 'Soon',
      },
    ],
  },
  {
    slug: 'business-ai',
    title: 'Business & AI Tools',
    description: 'Copy, branding, and content generation for founders, marketers, and freelancers.',
    icon: '💼',
    color: '#B699FF',
    tools: [
      {
        slug: 'business-name-generator',
        name: 'Business Name Generator',
        description: 'Generate creative, memorable, and available business names for any niche.',
        icon: '🏢',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'slogan-generator',
        name: 'Slogan Generator',
        description: 'Create powerful brand slogans and taglines that stick in your audience\'s mind.',
        icon: '💬',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'product-description-generator',
        name: 'Product Description Generator',
        description: 'Write compelling product descriptions that convert browsers into buyers.',
        icon: '📦',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'landing-page-copy',
        name: 'Landing Page Copy Generator',
        description: 'Generate high-converting landing page copy for any product or service.',
        icon: '📄',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'email-subject-line',
        name: 'Email Subject Line Generator',
        description: 'Generate subject lines that boost your email open rates significantly.',
        icon: '📧',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'cold-email-generator',
        name: 'Cold Email Generator',
        description: 'Write personalized cold emails that get replies from your ideal clients.',
        icon: '🥶',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'proposal-generator',
        name: 'Proposal Generator',
        description: 'Create professional client proposals that win projects and close deals.',
        icon: '🤝',
        category: 'business-ai',
        live: false,
        badge: 'Soon',
      },
    ],
  },
  {
    slug: 'seo-website',
    title: 'SEO & Website Tools',
    description: 'Optimize your site, content, and search presence with precision.',
    icon: '🔍',
    color: '#5CCFAF',
    tools: [
      {
        slug: 'seo-audit-checklist',
        name: 'SEO Audit Checklist',
        description: 'Run a complete SEO audit on your website with a structured checklist.',
        icon: '✅',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'meta-title-generator',
        name: 'Meta Title Generator',
        description: 'Generate SEO-optimized meta titles that rank and get clicked.',
        icon: '🏷️',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'meta-description-generator',
        name: 'Meta Description Generator',
        description: 'Write compelling meta descriptions that boost your organic click-through rate.',
        icon: '📝',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'blog-topic-generator',
        name: 'Blog Topic Generator',
        description: 'Generate high-traffic blog topics and content ideas for any niche.',
        icon: '💡',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'schema-markup-helper',
        name: 'Schema Markup Helper',
        description: 'Generate structured data markup to enhance your search result appearance.',
        icon: '⚙️',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'robots-txt-generator',
        name: 'Robots.txt Generator',
        description: 'Create a proper robots.txt file to guide search engine crawling.',
        icon: '🤖',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
      {
        slug: 'sitemap-generator',
        name: 'Sitemap Generator',
        description: 'Generate XML sitemaps to help search engines discover all your pages.',
        icon: '🗺️',
        category: 'seo-website',
        live: false,
        badge: 'Soon',
      },
    ],
  },
];

export const allTools: WebTool[] = toolGroups.flatMap(g => g.tools);
export const mvpWebTools = allTools.filter(t => t.isMVP);
