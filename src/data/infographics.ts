export interface InfoCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  postCount: number;
}

export interface InfoType {
  slug: string;
  title: string;
  desc: string;
  icon: string;
}

export const infographicTypes: InfoType[] = [
  { slug: 'market-trend',   title: 'Market Trends',    desc: 'Visual breakdowns of industry trends and market movements.',       icon: '📈' },
  { slug: 'cost-breakdown', title: 'Cost Breakdowns',  desc: 'Where money goes — pricing, fees, and expense charts.',             icon: '💸' },
  { slug: 'decision-trees', title: 'Decision Trees',   desc: 'Flowcharts and logic paths for better decisions.',                  icon: '🌿' },
  { slug: 'comparison',     title: 'Comparisons',      desc: 'Head-to-head breakdowns of tools, ideas, and choices.',             icon: '⚖️' },
  { slug: 'cheat-sheet',    title: 'Cheat Sheets',     desc: 'Quick reference cards and frameworks you can actually use.',        icon: '📋' },
  { slug: 'data-stats',     title: 'Data & Stats',     desc: 'Numbers, research, and facts made visually digestible.',            icon: '📊' },
  { slug: 'step-by-step',   title: 'Step-by-Step',     desc: 'Process guides and how-to formats in visual form.',                 icon: '📌' },
  { slug: 'mistakes-fixes', title: 'Mistakes & Fixes', desc: 'Common errors and their solutions — learn faster.',                 icon: '🔧' },
];

export const infoCategories: InfoCategory[] = [
  {
    slug: 'self-improvements',
    title: 'Self Improvements',
    description: 'Mindset shifts, habits, discipline, and personal growth strategies that actually work.',
    icon: '🌱',
    color: '#5CCFAF',
    postCount: 0,
  },
  {
    slug: 'tech-coding',
    title: 'Tech & Coding',
    description: 'Programming concepts, development tips, tech tools, and engineering insights visualized.',
    icon: '💻',
    color: '#6CA6FF',
    postCount: 0,
  },
  {
    slug: 'career-productivity',
    title: 'Career & Productivity',
    description: 'Work smarter, grow faster. Career advice and productivity systems in visual format.',
    icon: '🚀',
    color: '#F7933C',
    postCount: 0,
  },
  {
    slug: 'human-psychology',
    title: 'Human Psychology',
    description: 'The fascinating science of how humans think, feel, decide, and behave.',
    icon: '🧠',
    color: '#B699FF',
    postCount: 0,
  },
  {
    slug: 'finance',
    title: 'Finance',
    description: 'Money, investing, budgeting, and financial wisdom simplified into visual knowledge.',
    icon: '💰',
    color: '#F5CF5C',
    postCount: 0,
  },
  {
    slug: 'humanity-wisdom',
    title: 'Humanity & Wisdom',
    description: 'Timeless lessons, philosophy, and the collective wisdom of the human experience.',
    icon: '🌍',
    color: '#5DB3D7',
    postCount: 0,
  },
  {
    slug: 'kids-learning',
    title: 'Kids & Learning',
    description: 'Fun and educational visuals for curious young minds ready to explore the world.',
    icon: '🎒',
    color: '#DF78A0',
    postCount: 0,
  },
  {
    slug: 'art-creativity',
    title: 'Art & Creativity',
    description: 'Color theory, design principles, creative techniques, and artistic inspiration.',
    icon: '🎨',
    color: '#93B96A',
    postCount: 0,
  },
];
