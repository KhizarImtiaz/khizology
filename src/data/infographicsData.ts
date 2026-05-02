// ─────────────────────────────────────────────
//  Infographic types and learning category pages
// ─────────────────────────────────────────────

export interface InfographicPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  readingTime: string;
  live: boolean;
}

export interface InfographicSection {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  kind: 'type' | 'topic';
  seoTitle: string;
  seoDesc: string;
  posts: InfographicPost[];
}

// ── Infographic format types ──────────────────
export const infographicTypes: InfographicSection[] = [
  {
    slug: 'market-trend',
    title: 'Market Trends',
    description: 'Visual breakdowns of industry trends, data movements, and market shifts that every professional needs to understand.',
    icon: '📈',
    color: '#5CCFAF',
    kind: 'type',
    seoTitle: 'Market Trend Infographics — khizooo',
    seoDesc: 'Visual breakdowns of market trends and industry movements. Data-backed infographics that make trends instantly clear.',
    posts: [],
  },
  {
    slug: 'cost-breakdown',
    title: 'Cost Breakdowns',
    description: 'Where money actually goes — pricing structures, fee explanations, and expense charts simplified into visual clarity.',
    icon: '💸',
    color: '#F5CF5C',
    kind: 'type',
    seoTitle: 'Cost Breakdown Infographics — khizooo',
    seoDesc: 'Understand where money goes with clear cost breakdown infographics covering pricing, fees, and expenses.',
    posts: [],
  },
  {
    slug: 'decision-trees',
    title: 'Decision Trees',
    description: 'Flowcharts and logic paths to help you make better decisions faster — for life, business, and everything in between.',
    icon: '🌿',
    color: '#93B96A',
    kind: 'type',
    seoTitle: 'Decision Tree Infographics — khizooo',
    seoDesc: 'Flowcharts and visual decision trees to help you make better decisions faster.',
    posts: [],
  },
  {
    slug: 'comparison',
    title: 'Comparisons',
    description: 'Head-to-head visual comparisons of tools, ideas, concepts, and choices — so you can decide with clarity.',
    icon: '⚖️',
    color: '#F7933C',
    kind: 'type',
    seoTitle: 'Comparison Infographics — khizooo',
    seoDesc: 'Visual comparisons of tools, frameworks, ideas, and choices. Decide faster with side-by-side breakdowns.',
    posts: [],
  },
  {
    slug: 'cheat-sheet-framework',
    title: 'Cheat Sheets',
    description: 'Quick reference cards and actionable frameworks you can actually use — condensed knowledge in printable form.',
    icon: '📋',
    color: '#B699FF',
    kind: 'type',
    seoTitle: 'Cheat Sheet Infographics & Frameworks — khizooo',
    seoDesc: 'Quick reference cheat sheets and visual frameworks covering tech, productivity, and more.',
    posts: [],
  },
  {
    slug: 'data-stats',
    title: 'Data & Stats',
    description: 'Numbers, research findings, and statistics made visually digestible — because raw data alone never tells the full story.',
    icon: '📊',
    color: '#5DB3D7',
    kind: 'type',
    seoTitle: 'Data & Stats Infographics — khizooo',
    seoDesc: 'Research-backed data and statistics visualized for clarity. Turn raw numbers into insights.',
    posts: [],
  },
  {
    slug: 'step-by-step-process',
    title: 'Step-by-Step',
    description: 'Process guides and how-to breakdowns in visual format — follow the steps, achieve the outcome.',
    icon: '📌',
    color: '#DF78A0',
    kind: 'type',
    seoTitle: 'Step-by-Step Process Infographics — khizooo',
    seoDesc: 'Visual step-by-step guides and process breakdowns for learning and doing.',
    posts: [],
  },
  {
    slug: 'mistakes-fixes',
    title: 'Mistakes & Fixes',
    description: 'Common errors, anti-patterns, and their solutions — learn faster by knowing exactly what not to do.',
    icon: '🔧',
    color: '#E38D7C',
    kind: 'type',
    seoTitle: 'Mistakes & Fixes Infographics — khizooo',
    seoDesc: 'Common mistakes and their fixes visualized. Learn from errors faster.',
    posts: [],
  },
];

// ── Learning topic categories ─────────────────
export const infographicTopics: InfographicSection[] = [
  {
    slug: 'self-improvements',
    title: 'Self Improvements',
    description: 'Mindset shifts, habits, discipline, and personal growth strategies visualized for fast understanding and real-world application.',
    icon: '🌱',
    color: '#5CCFAF',
    kind: 'topic',
    seoTitle: 'Self Improvement Infographics — khizooo',
    seoDesc: 'Visual guides for personal growth, habit building, and mindset shifts. Actionable self-improvement infographics.',
    posts: [],
  },
  {
    slug: 'tech-and-coding',
    title: 'Tech & Coding',
    description: 'Programming concepts, development tips, tech stack comparisons, and engineering insights — all made visually clear.',
    icon: '💻',
    color: '#6CA6FF',
    kind: 'topic',
    seoTitle: 'Tech & Coding Infographics — khizooo',
    seoDesc: 'Programming concepts, developer tools, and tech insights visualized. Learn coding faster with visual infographics.',
    posts: [],
  },
  {
    slug: 'career-productivity',
    title: 'Career & Productivity',
    description: 'Work smarter, grow faster. Career advice, productivity systems, and professional development in visual format.',
    icon: '🚀',
    color: '#F7933C',
    kind: 'topic',
    seoTitle: 'Career & Productivity Infographics — khizooo',
    seoDesc: 'Career growth strategies and productivity systems visualized. Work smarter with actionable infographics.',
    posts: [],
  },
  {
    slug: 'human-psychology',
    title: 'Human Psychology',
    description: 'The fascinating science of how humans think, feel, decide, and behave — distilled into visual knowledge.',
    icon: '🧠',
    color: '#B699FF',
    kind: 'topic',
    seoTitle: 'Human Psychology Infographics — khizooo',
    seoDesc: 'Visual breakdowns of psychology, behavior, decision-making, and the human mind.',
    posts: [],
  },
  {
    slug: 'finance',
    title: 'Finance',
    description: 'Money, investing, budgeting, compound interest, and financial wisdom simplified into visual knowledge.',
    icon: '💰',
    color: '#F5CF5C',
    kind: 'topic',
    seoTitle: 'Finance Infographics — khizooo',
    seoDesc: 'Financial concepts, investing basics, and money management tips visualized clearly.',
    posts: [],
  },
  {
    slug: 'humanity-and-wisdom',
    title: 'Humanity & Wisdom',
    description: 'Timeless philosophy, historical lessons, and the collective wisdom of human civilization visualized.',
    icon: '🌍',
    color: '#5DB3D7',
    kind: 'topic',
    seoTitle: 'Humanity & Wisdom Infographics — khizooo',
    seoDesc: 'Philosophy, history, and timeless wisdom visualized for modern understanding.',
    posts: [],
  },
  {
    slug: 'kids-and-learning',
    title: 'Kids & Learning',
    description: 'Educational visuals for curious young minds — science, math, nature, and the world made fun and accessible.',
    icon: '🎒',
    color: '#DF78A0',
    kind: 'topic',
    seoTitle: 'Kids & Learning Infographics — khizooo',
    seoDesc: 'Fun and educational infographics for kids and learners of all ages.',
    posts: [],
  },
  {
    slug: 'art-and-creativity',
    title: 'Art & Creativity',
    description: 'Color theory, design principles, art techniques, creative process, and artistic inspiration in visual form.',
    icon: '🎨',
    color: '#93B96A',
    kind: 'topic',
    seoTitle: 'Art & Creativity Infographics — khizooo',
    seoDesc: 'Color theory, design principles, and creative techniques visualized for artists and designers.',
    posts: [],
  },
];

export const allInfographicSections: InfographicSection[] = [
  ...infographicTypes,
  ...infographicTopics,
];

export function getInfographicSection(slug: string): InfographicSection | undefined {
  return allInfographicSections.find(s => s.slug === slug);
}
