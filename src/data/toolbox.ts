export interface ToolCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
  live: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  live: boolean;
  icon: string;
  isMVP?: boolean;
}

export const toolCategories: ToolCategory[] = [
  {
    slug: 'finance',
    title: 'Finance',
    description: 'Investment calculators, ROI tools, and financial planning helpers.',
    icon: '💰',
    color: '#F5CF5C',
    toolCount: 5,
    live: true,
  },
  {
    slug: 'math',
    title: 'Math',
    description: 'From basic arithmetic to advanced scientific calculations.',
    icon: '🔢',
    color: '#5CCFAF',
    toolCount: 4,
    live: true,
  },
  {
    slug: 'everyday-life',
    title: 'Everyday Life',
    description: 'Age calculators, coin flips, random number generators, and more.',
    icon: '📅',
    color: '#6CA6FF',
    toolCount: 8,
    live: true,
  },
  {
    slug: 'health',
    title: 'Health',
    description: 'BMI, calorie, fitness, and wellness calculators.',
    icon: '❤️',
    color: '#DF78A0',
    toolCount: 0,
    live: false,
  },
  {
    slug: 'unit-conversion',
    title: 'Unit Conversion',
    description: 'Convert between units of length, weight, temperature, and more.',
    icon: '⚖️',
    color: '#F7933C',
    toolCount: 0,
    live: false,
  },
  {
    slug: 'text',
    title: 'Text Tools',
    description: 'Word count, text analysis, case converters, and string manipulation.',
    icon: '📝',
    color: '#B699FF',
    toolCount: 0,
    live: false,
  },
  {
    slug: 'color',
    title: 'Color Tools',
    description: 'Color palettes, shades, contrast checker, and hex converters.',
    icon: '🎨',
    color: '#93B96A',
    toolCount: 0,
    live: false,
  },
  {
    slug: 'time-date',
    title: 'Time & Date',
    description: 'Date differences, time zone converters, countdown timers.',
    icon: '⏰',
    color: '#5DB3D7',
    toolCount: 0,
    live: false,
  },
];

// MVP tools — the 5 that must be functional first
export const mvpTools: Tool[] = [
  {
    slug: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate gross, net, and operating profit margins for your business or projects.',
    category: 'finance',
    live: false, // route exists, calculator is built in Layer 5
    icon: '📈',
    isMVP: true,
  },
  {
    slug: 'website-cost-calculator',
    name: 'Website Cost Calculator',
    description: 'Estimate the total cost of building and maintaining a website based on your needs.',
    category: 'finance',
    live: false,
    icon: '🌐',
    isMVP: true,
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, discounts, increases, and percentage changes easily.',
    category: 'math',
    live: false,
    icon: '%',
    isMVP: true,
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days, hours, and minutes.',
    category: 'everyday-life',
    live: false,
    icon: '🎂',
    isMVP: true,
  },
  {
    slug: 'instagram-bio-score',
    name: 'Instagram Bio Score Checker',
    description: 'Analyze and score your Instagram bio for maximum impact and follower attraction.',
    category: 'tools',
    live: false,
    icon: '📸',
    isMVP: true,
  },
];
