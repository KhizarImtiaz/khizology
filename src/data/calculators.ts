export interface CalculatorCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  count: number;
  live: boolean;
  featured?: boolean;
}

export interface Calculator {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  live: boolean;
  isMVP?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export const calculatorCategories: CalculatorCategory[] = [
  {
    slug: 'everyday-life',
    title: 'Everyday Life',
    description: 'Age, dates, coin flips, and daily utility calculators.',
    icon: '📅',
    color: '#6CA6FF',
    count: 11,
    live: true,
    featured: true,
  },
  {
    slug: 'finance',
    title: 'Finance',
    description: 'Investment, ROI, profit margin, and money calculators.',
    icon: '💰',
    color: '#F5CF5C',
    count: 4,
    live: true,
    featured: true,
  },
  {
    slug: 'math',
    title: 'Math',
    description: 'Percentages, algebra, statistics, and number theory.',
    icon: '🔢',
    color: '#5CCFAF',
    count: 16,
    live: false,
    featured: true,
  },
  {
    slug: 'health',
    title: 'Health & Fitness',
    description: 'BMI, calories, hydration, and wellness calculators.',
    icon: '❤️',
    color: '#DF78A0',
    count: 16,
    live: false,
  },
  {
    slug: 'unit-conversion',
    title: 'Unit Conversion',
    description: 'Convert length, weight, temperature, volume, and more.',
    icon: '⚖️',
    color: '#F7933C',
    count: 12,
    live: false,
  },
  {
    slug: 'time-date',
    title: 'Time & Date',
    description: 'Date differences, time zones, countdowns, and durations.',
    icon: '⏰',
    color: '#5DB3D7',
    count: 8,
    live: false,
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    description: 'Fuel efficiency, speed, distance, and vehicle calculators.',
    icon: '🚗',
    color: '#B699FF',
    count: 51,
    live: false,
  },
  {
    slug: 'text',
    title: 'Text Tools',
    description: 'Word count, reading time, character analysis, and string tools.',
    icon: '📝',
    color: '#93B96A',
    count: 6,
    live: false,
  },
  {
    slug: 'physics',
    title: 'Physics',
    description: 'Speed, force, energy, and science formula calculators.',
    icon: '⚛️',
    color: '#E38D7C',
    count: 11,
    live: false,
  },
  {
    slug: 'sports',
    title: 'Sports',
    description: 'Pace, pace per mile, training, and sports performance calculators.',
    icon: '⚽',
    color: '#5DB3D7',
    count: 11,
    live: false,
  },
  {
    slug: 'food',
    title: 'Food & Cooking',
    description: 'Recipe scaling, nutrition, cooking time, and kitchen math.',
    icon: '🍳',
    color: '#F7933C',
    count: 8,
    live: false,
  },
  {
    slug: 'construction',
    title: 'Construction',
    description: 'Area, volume, materials estimate, and building calculators.',
    icon: '🏗️',
    color: '#93B96A',
    count: 17,
    live: false,
  },
  {
    slug: 'photography',
    title: 'Photography',
    description: 'Exposure, aperture, DOF, and camera settings calculators.',
    icon: '📸',
    color: '#B699FF',
    count: 5,
    live: false,
  },
  {
    slug: 'travel',
    title: 'Travel',
    description: 'Distance, fuel cost, timezone, and trip planning tools.',
    icon: '✈️',
    color: '#6CA6FF',
    count: 3,
    live: false,
  },
  {
    slug: 'developer-tools',
    title: 'Developer Tools',
    description: 'Base64, JSON formatter, regex tester, and color converters.',
    icon: '💻',
    color: '#5DB3D7',
    count: 4,
    live: false,
  },
  {
    slug: 'color',
    title: 'Color Tools',
    description: 'Color palettes, shades, contrast checker, and hex converters.',
    icon: '🎨',
    color: '#DF78A0',
    count: 4,
    live: false,
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    description: 'Fuel efficiency, car payments, speed, and vehicle calculators.',
    icon: '🚗',
    color: '#B699FF',
    count: 51,
    live: false,
  },
];

// Items per category
export const calculatorItemsMap: Record<string, Calculator[]> = {
  finance: [
    { slug: 'profit-margin-calculator', name: 'Profit Margin Calculator', description: 'Calculate gross, net, and operating profit margins for your business.', category: 'finance', icon: '📈', live: false, isMVP: true, isPopular: true },
    { slug: 'website-cost-calculator', name: 'Website Cost Calculator', description: 'Estimate the total cost to build and maintain a website.', category: 'finance', icon: '🌐', live: false, isMVP: true },
    { slug: 'sip-calculator', name: 'SIP Calculator', description: 'Calculate returns on Systematic Investment Plan investments.', category: 'finance', icon: '📊', live: false },
    { slug: 'roi-calculator', name: 'ROI Calculator', description: 'Calculate Return on Investment for any project or venture.', category: 'finance', icon: '💹', live: false },
  ],
  math: [
    { slug: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, discounts, and percentage changes.', category: 'math', icon: '%', live: false, isMVP: true, isPopular: true },
    { slug: 'standard-calculator', name: 'Standard Calculator', description: 'Basic arithmetic with a clean interface.', category: 'math', icon: '🔢', live: false },
    { slug: 'scientific-calculator', name: 'Scientific Calculator', description: 'Advanced math functions and operations.', category: 'math', icon: '🧮', live: false },
    { slug: 'gpa-calculator', name: 'GPA Calculator', description: 'Calculate Grade Point Average with weighted options.', category: 'math', icon: '🎓', live: false },
    { slug: 'fraction-calculator', name: 'Fraction Calculator', description: 'Perform arithmetic with fractions and mixed numbers.', category: 'math', icon: '½', live: false },
    { slug: 'statistics-calculator', name: 'Statistics Calculator', description: 'Calculate mean, median, mode, and statistical measures.', category: 'math', icon: '📉', live: false },
  ],
  'everyday-life': [
    { slug: 'age-calculator', name: 'Age Calculator', description: 'Calculate your exact age in years, months, days, and hours.', category: 'everyday-life', icon: '🎂', live: false, isMVP: true, isNew: true },
    { slug: 'coin-flip', name: 'Coin Flip', description: 'Flip a virtual coin for quick and fair decisions.', category: 'everyday-life', icon: '🪙', live: false },
    { slug: 'dice-roll', name: 'Dice Roll', description: 'Roll virtual dice for games or random number generation.', category: 'everyday-life', icon: '🎲', live: false },
    { slug: 'random-number', name: 'Random Number Generator', description: 'Generate random numbers within your specified range.', category: 'everyday-life', icon: '🎯', live: false },
    { slug: 'year-progress', name: 'Year Progress', description: 'Track how much of the current year has passed.', category: 'everyday-life', icon: '📅', live: false },
    { slug: 'wheel-of-names', name: 'Wheel of Names', description: 'Spin the wheel to randomly pick names from your list.', category: 'everyday-life', icon: '🎡', live: false },
  ],
  health: [
    { slug: 'bmi-calculator', name: 'BMI Calculator', description: 'Calculate Body Mass Index to check healthy weight range.', category: 'health', icon: '⚖️', live: false },
    { slug: 'bmr-calculator', name: 'BMR Calculator', description: 'Calculate Basal Metabolic Rate and energy needs.', category: 'health', icon: '🔥', live: false },
    { slug: 'calorie-calculator', name: 'Calorie Calculator', description: 'Calculate daily calorie needs based on activity level.', category: 'health', icon: '🥗', live: false },
    { slug: 'body-fat-calculator', name: 'Body Fat Calculator', description: 'Estimate body fat percentage using multiple methods.', category: 'health', icon: '💪', live: false },
    { slug: 'sleep-calculator', name: 'Sleep Calculator', description: 'Calculate optimal bedtime and wake times for better sleep.', category: 'health', icon: '😴', live: false },
    { slug: 'ideal-weight-calculator', name: 'Ideal Weight Calculator', description: 'Find your ideal weight range based on height and frame.', category: 'health', icon: '❤️', live: false },
  ],
  'unit-conversion': [
    { slug: 'length-converter', name: 'Length Converter', description: 'Convert between meters, feet, inches, and other units.', category: 'unit-conversion', icon: '📏', live: false },
    { slug: 'weight-converter', name: 'Weight Converter', description: 'Convert between kg, pounds, ounces, and more.', category: 'unit-conversion', icon: '⚖️', live: false },
    { slug: 'temperature-converter', name: 'Temperature Converter', description: 'Convert between Celsius, Fahrenheit, and Kelvin.', category: 'unit-conversion', icon: '🌡️', live: false },
    { slug: 'area-converter', name: 'Area Converter', description: 'Convert between square meters, acres, hectares, and more.', category: 'unit-conversion', icon: '📐', live: false },
    { slug: 'volume-converter', name: 'Volume Converter', description: 'Convert between liters, gallons, cubic meters, and more.', category: 'unit-conversion', icon: '🧪', live: false },
    { slug: 'data-storage-converter', name: 'Data Storage Converter', description: 'Convert between bytes, KB, MB, GB, and TB.', category: 'unit-conversion', icon: '💾', live: false },
  ],
  'time-date': [
    { slug: 'date-difference', name: 'Date Difference Calculator', description: 'Calculate days, months, years between two dates.', category: 'time-date', icon: '📅', live: false },
    { slug: 'countdown-timer', name: 'Countdown Timer', description: 'Create countdown timers for events and deadlines.', category: 'time-date', icon: '⏱️', live: false },
    { slug: 'time-zone-converter', name: 'Time Zone Converter', description: 'Convert times between different time zones worldwide.', category: 'time-date', icon: '🌍', live: false },
    { slug: 'business-days', name: 'Business Days Calculator', description: 'Calculate business days between dates, excluding weekends.', category: 'time-date', icon: '📆', live: false },
    { slug: 'unix-timestamp', name: 'Unix Timestamp Converter', description: 'Convert between Unix timestamps and readable dates.', category: 'time-date', icon: '🔢', live: false },
  ],
  text: [
    { slug: 'word-counter', name: 'Word Counter', description: 'Count words, characters, sentences, and reading time.', category: 'text', icon: '📝', live: false },
    { slug: 'case-converter', name: 'Case Converter', description: 'Convert text between camelCase, snake_case, PascalCase, and more.', category: 'text', icon: '🔤', live: false },
    { slug: 'readability-calculator', name: 'Readability Calculator', description: 'Calculate readability scores and grade levels.', category: 'text', icon: '📖', live: false },
    { slug: 'word-unscrambler', name: 'Word Unscrambler', description: 'Unscramble letters to find possible words.', category: 'text', icon: '🔡', live: false },
    { slug: 'syllable-counter', name: 'Syllable Counter', description: 'Count syllables in words and analyze text complexity.', category: 'text', icon: '🗣️', live: false },
  ],
  physics: [
    { slug: 'mechanics-calculator', name: 'Mechanics Calculator', description: 'Calculate force, velocity, acceleration, and momentum.', category: 'physics', icon: '⚙️', live: false },
    { slug: 'wave-calculator', name: 'Wave Calculator', description: 'Calculate wavelength, frequency, and wave properties.', category: 'physics', icon: '〰️', live: false },
    { slug: 'electricity-calculator', name: 'Electricity Calculator', description: 'Calculate voltage, current, resistance, and power.', category: 'physics', icon: '⚡', live: false },
    { slug: 'thermodynamics-calculator', name: 'Thermodynamics Calculator', description: 'Calculate heat, temperature, and thermal properties.', category: 'physics', icon: '🌡️', live: false },
    { slug: 'optics-calculator', name: 'Optics Calculator', description: 'Calculate focal length, magnification, and optical properties.', category: 'physics', icon: '🔭', live: false },
  ],
  sports: [
    { slug: 'pace-calculator', name: 'Pace Calculator', description: 'Calculate running or cycling pace, time, and distance.', category: 'sports', icon: '🏃', live: false },
    { slug: 'one-rep-max', name: 'One Rep Max (1RM)', description: 'Calculate maximum weight for a single repetition.', category: 'sports', icon: '🏋️', live: false },
    { slug: 'vo2-max', name: 'VO2 Max Calculator', description: 'Estimate maximum oxygen uptake capacity.', category: 'sports', icon: '💨', live: false },
    { slug: 'heart-rate-zone', name: 'Heart Rate Zone Calculator', description: 'Calculate target heart rate zones for training.', category: 'sports', icon: '❤️', live: false },
  ],
  food: [
    { slug: 'recipe-scaling', name: 'Recipe Scaling Calculator', description: 'Adjust recipe ingredients for different serving sizes.', category: 'food', icon: '🍳', live: false },
    { slug: 'calorie-calculator-food', name: 'Calorie Calculator', description: 'Calculate daily caloric needs for weight management.', category: 'food', icon: '🥗', live: false },
    { slug: 'nutrition-calculator', name: 'Nutrition Calculator', description: 'Calculate macros including protein, carbs, and fats.', category: 'food', icon: '🥦', live: false },
    { slug: 'recipe-cost', name: 'Recipe Cost Calculator', description: 'Calculate total cost of recipes including all ingredients.', category: 'food', icon: '💰', live: false },
  ],
  construction: [
    { slug: 'area-calculator', name: 'Area Calculator', description: 'Calculate floor area, wall area, and surface measurements.', category: 'construction', icon: '📐', live: false },
    { slug: 'concrete-calculator', name: 'Concrete Calculator', description: 'Calculate concrete volume for your construction project.', category: 'construction', icon: '🧱', live: false },
    { slug: 'paint-calculator', name: 'Paint Calculator', description: 'Calculate paint quantity needed for walls and surfaces.', category: 'construction', icon: '🖌️', live: false },
    { slug: 'tile-calculator', name: 'Tile Calculator', description: 'Calculate number of tiles and layout patterns needed.', category: 'construction', icon: '🔲', live: false },
    { slug: 'brick-calculator', name: 'Brick Calculator', description: 'Calculate bricks needed for walls or projects.', category: 'construction', icon: '🧱', live: false },
  ],
  biology: [
    { slug: 'genetics-calculator', name: 'Genetics Calculator', description: 'Calculate genetic crosses, probabilities, and inheritance.', category: 'biology', icon: '🧬', live: false },
    { slug: 'cell-biology', name: 'Cell Biology Calculator', description: 'Calculate cell properties and division rates.', category: 'biology', icon: '🔬', live: false },
    { slug: 'ecology-calculator', name: 'Ecology Calculator', description: 'Calculate population growth and ecological relationships.', category: 'biology', icon: '🌿', live: false },
    { slug: 'microbiology', name: 'Microbiology Calculator', description: 'Calculate bacterial growth and colony counts.', category: 'biology', icon: '🦠', live: false },
  ],
  chemistry: [
    { slug: 'molarity-calculator', name: 'Molarity Calculator', description: 'Calculate concentration, molarity, and solution properties.', category: 'chemistry', icon: '⚗️', live: false },
    { slug: 'ph-calculator', name: 'pH Calculator', description: 'Calculate pH, pOH, and acid-base properties.', category: 'chemistry', icon: '🧪', live: false },
    { slug: 'stoichiometry', name: 'Stoichiometry Calculator', description: 'Calculate moles and chemical reaction properties.', category: 'chemistry', icon: '⚗️', live: false },
    { slug: 'gas-laws', name: 'Gas Laws Calculator', description: 'Calculate pressure, volume, temperature for gases.', category: 'chemistry', icon: '💨', live: false },
  ],
  photography: [
    { slug: 'dof-calculator', name: 'Depth of Field Calculator', description: 'Calculate depth of field for camera and lens combinations.', category: 'photography', icon: '📷', live: false },
    { slug: 'exposure-calculator', name: 'Exposure Calculator', description: 'Balance ISO, shutter speed, and aperture for perfect exposure.', category: 'photography', icon: '🌟', live: false },
    { slug: 'focal-length', name: 'Focal Length Calculator', description: 'Calculate equivalent focal lengths across sensor sizes.', category: 'photography', icon: '🔭', live: false },
    { slug: 'long-exposure', name: 'Long Exposure Calculator', description: 'Calculate long exposure times when using ND filters.', category: 'photography', icon: '💫', live: false },
  ],
  crafting: [
    { slug: 'fabric-calculator', name: 'Fabric Calculator', description: 'Calculate fabric yardage for sewing projects.', category: 'crafting', icon: '🧵', live: false },
    { slug: 'yarn-calculator', name: 'Yarn Calculator', description: 'Estimate yarn requirements for knitting and crochet.', category: 'crafting', icon: '🧶', live: false },
    { slug: 'paint-coverage', name: 'Paint Coverage Calculator', description: 'Calculate paint needed for different surfaces.', category: 'crafting', icon: '🖌️', live: false },
    { slug: 'pattern-layout', name: 'Pattern Layout Calculator', description: 'Optimize pattern placement on fabric to minimize waste.', category: 'crafting', icon: '✂️', live: false },
  ],
  fun: [
    { slug: 'random-name-generator', name: 'Random Name Generator', description: 'Generate random funny names, superhero names, or fantasy names.', category: 'fun', icon: '🎲', live: false },
    { slug: 'magic-8-ball', name: 'Magic 8 Ball', description: 'Ask a question and get a mystical prediction.', category: 'fun', icon: '🔮', live: false },
    { slug: 'love-calculator', name: 'Love Calculator', description: 'Calculate the love compatibility between two names.', category: 'fun', icon: '💖', live: false },
    { slug: 'flames-calculator', name: 'FLAMES Calculator', description: 'The classic FLAMES relationship predictor.', category: 'fun', icon: '🔥', live: false },
    { slug: 'joke-generator', name: 'Joke Generator', description: 'Generate random jokes, puns, and dad jokes.', category: 'fun', icon: '😄', live: false },
    { slug: 'fortune-cookie', name: 'Fortune Cookie', description: 'Get your daily fortune cookie message with lucky numbers.', category: 'fun', icon: '🥠', live: false },
  ],
  travel: [
    { slug: 'travel-budget', name: 'Solo Travel Budget Planner', description: 'Calculate daily and total costs for any trip destination.', category: 'travel', icon: '✈️', live: false },
    { slug: 'carbon-footprint', name: 'Carbon Footprint Calculator', description: 'Calculate your travel environmental impact.', category: 'travel', icon: '🌱', live: false },
    { slug: 'hotel-breakeven', name: 'Hotel Break-Even Calculator', description: 'Determine minimum nights needed to profit from hotel stays.', category: 'travel', icon: '🏨', live: false },
  ],
  color: [
    { slug: 'shades-of-color', name: 'Shades of Color', description: 'Create a full color palette from any base color.', category: 'color', icon: '🎨', live: false },
    { slug: 'color-contrast', name: 'Color Contrast Checker', description: 'Verify WCAG-compliant contrast ratios for accessibility.', category: 'color', icon: '♿', live: false },
    { slug: 'color-palette', name: 'Color Palette Generator', description: 'Generate harmonious color palettes for your projects.', category: 'color', icon: '🖌️', live: false },
    { slug: 'gradient-generator', name: 'Gradient Generator', description: 'Create beautiful CSS gradients visually.', category: 'color', icon: '🌈', live: false },
  ],
  automotive: [
    { slug: 'fuel-efficiency', name: 'Fuel Efficiency Calculator', description: 'Calculate MPG, fuel cost, and trip expenses.', category: 'automotive', icon: '⛽', live: false },
    { slug: 'car-payment', name: 'Car Payment Calculator', description: 'Calculate monthly payments and total loan cost.', category: 'automotive', icon: '🚗', live: false },
    { slug: 'speed-distance', name: 'Speed & Distance Calculator', description: 'Calculate travel time, speed, and distance.', category: 'automotive', icon: '🏎️', live: false },
    { slug: 'tire-size', name: 'Tire Size Calculator', description: 'Convert and compare tire sizes and dimensions.', category: 'automotive', icon: '🛞', live: false },
  ],
  'developer-tools': [
    { slug: 'base64-encoder', name: 'Base64 Encoder/Decoder', description: 'Encode and decode text and files in Base64 format.', category: 'developer-tools', icon: '💻', live: false },
    { slug: 'json-formatter', name: 'JSON Formatter', description: 'Format, validate, and beautify JSON data.', category: 'developer-tools', icon: '{ }', live: false },
    { slug: 'regex-tester', name: 'Regex Tester', description: 'Test regular expressions with live matching and highlighting.', category: 'developer-tools', icon: '⚡', live: false },
    { slug: 'color-converter', name: 'Color Converter', description: 'Convert between HEX, RGB, HSL, and other color formats.', category: 'developer-tools', icon: '🎨', live: false },
  ],
};

// MVP calculators — build these first
export const mvpCalculators: Calculator[] = [
  {
    slug: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate gross, net, and operating profit margins for your business.',
    category: 'finance',
    icon: '📈',
    live: false,
    isMVP: true,
    isPopular: true,
  },
  {
    slug: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, discounts, increases, and percentage changes easily.',
    category: 'math',
    icon: '%',
    live: false,
    isMVP: true,
    isPopular: true,
  },
  {
    slug: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days, hours, and minutes.',
    category: 'everyday-life',
    icon: '🎂',
    live: false,
    isMVP: true,
    isNew: true,
  },
  {
    slug: 'website-cost-calculator',
    name: 'Website Cost Calculator',
    description: 'Estimate the total cost to build and maintain a website for your needs.',
    category: 'finance',
    icon: '🌐',
    live: false,
    isMVP: true,
  },
  {
    slug: 'instagram-bio-score',
    name: 'Instagram Bio Score',
    description: 'Analyze and score your Instagram bio for maximum impact.',
    category: 'tools',
    icon: '📸',
    live: false,
    isMVP: true,
    isNew: true,
  },
];
