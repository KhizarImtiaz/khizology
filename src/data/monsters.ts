export type MonsterStatus = 'active' | 'coming-soon';

export interface Monster {
  id: string;
  name: string;
  module: string;
  description: string;
  color: string;
  colorLight: string;
  textColor: string;
  route: string;
  image: string;
  status: MonsterStatus;
  emoji: string;
  tagline: string;
}

export const monsters: Monster[] = [
  {
    id: 'artooo',
    name: 'artooo',
    module: 'Artworks',
    description:
      'A visual playground of sticky-note art, sketches, illustrations, creativity, emotions, and storytelling through lines.',
    color: '#F5CF5C',
    colorLight: '#FDE68A',
    textColor: '#2A3439',
    route: '/artworks',
    image: '/images/Monsters/artooo.png',
    status: 'active',
    emoji: '🎨',
    tagline: 'Art that feels.',
  },
  {
    id: 'infooo',
    name: 'infooo',
    module: 'Infographics',
    description:
      'Knowledge hub sharing tech insights, AI, development tips, human psychology, and digital wisdom in visual form.',
    color: '#5CCFAF',
    colorLight: '#A7F3D0',
    textColor: '#2A3439',
    route: '/infographics',
    image: '/images/Monsters/infooo.png',
    status: 'active',
    emoji: '📊',
    tagline: 'Knowledge, visualized.',
  },
  {
    id: 'toolooo',
    name: 'toolooo',
    module: 'Toolbox',
    description:
      'Handy online tools and calculators crafted to simplify work, boost productivity, solve problems, and save your time.',
    color: '#F7933C',
    colorLight: '#FED7AA',
    textColor: '#2A3439',
    route: '/toolbox',
    image: '/images/Monsters/toolooo.png',
    status: 'active',
    emoji: '🔧',
    tagline: 'Tools that work.',
  },
  {
    id: 'freeooo',
    name: 'freeooo',
    module: 'Freebies',
    description:
      'Free resources, assets, libraries, templates, and curated giveaways to empower creators and developers globally.',
    color: '#6CA6FF',
    colorLight: '#BFDBFE',
    textColor: '#2A3439',
    route: '/freebies',
    image: '/images/Monsters/freeooo.png',
    status: 'active',
    emoji: '🎁',
    tagline: 'Free. Always.',
  },
  {
    id: 'devooo',
    name: 'devooo',
    module: 'DevSpark',
    description:
      'Deep dives into development, coding practices, frameworks, tutorials, solutions, and the engineering mindset.',
    color: '#B699FF',
    colorLight: '#DDD6FE',
    textColor: '#2A3439',
    route: '/future-monsters',
    image: '/images/Monsters/devooo.png',
    status: 'coming-soon',
    emoji: '⚡',
    tagline: 'Code that sparks.',
  },
  {
    id: 'summooo',
    name: 'summooo',
    module: 'Summariser',
    description:
      'AI-powered summaries of books, topics, and ideas — distilled knowledge for fast learners and curious minds.',
    color: '#5DB3D7',
    colorLight: '#BAE6FD',
    textColor: '#2A3439',
    route: '/future-monsters',
    image: '/images/Monsters/ff-01.png',
    status: 'coming-soon',
    emoji: '🧠',
    tagline: 'Think faster.',
  },
  {
    id: 'future-3',
    name: '???ooo',
    module: 'Unknown',
    description:
      'Something bold is incubating. A new monster is forming in the creative lab. Stay tuned.',
    color: '#DF78A0',
    colorLight: '#FBCFE8',
    textColor: '#2A3439',
    route: '/future-monsters',
    image: '/images/Monsters/ff-02.png',
    status: 'coming-soon',
    emoji: '🔮',
    tagline: 'Coming soon.',
  },
  {
    id: 'future-4',
    name: '???ooo',
    module: 'Unknown',
    description:
      'An experimental idea in its early form. This monster has yet to reveal its name and power.',
    color: '#93B96A',
    colorLight: '#D9F99D',
    textColor: '#2A3439',
    route: '/future-monsters',
    image: '/images/Monsters/ff-03.png',
    status: 'coming-soon',
    emoji: '🌱',
    tagline: 'Growing.',
  },
  {
    id: 'future-5',
    name: '???ooo',
    module: 'Unknown',
    description:
      'The last mystery. The biggest surprise. When this monster wakes, the universe expands.',
    color: '#E38D7C',
    colorLight: '#FED7AA',
    textColor: '#2A3439',
    route: '/future-monsters',
    image: '/images/Monsters/ff-04.png',
    status: 'coming-soon',
    emoji: '🚀',
    tagline: 'Unleashing soon.',
  },
];

export const activeMonsters = monsters.filter((m) => m.status === 'active');
export const getMonsterById = (id: string) => monsters.find((m) => m.id === id);
