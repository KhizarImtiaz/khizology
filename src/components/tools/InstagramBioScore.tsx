import { useState, useRef } from 'react';

const ACCENT = '#F7933C';

const s = {
  wrap: { fontFamily: "'Mulish', sans-serif", color: 'var(--k-text)' } as React.CSSProperties,
  card: { background: 'var(--k-bg-card)', border: '1px solid var(--k-border)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.25rem' } as React.CSSProperties,
  label: { display: 'block', fontSize: '.78rem', fontWeight: 700, color: 'var(--k-text-muted)', marginBottom: '.375rem', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase' as const, letterSpacing: '.06em' },
  input: { width: '100%', padding: '.6rem .875rem', borderRadius: '.5rem', border: '1.5px solid var(--k-border)', background: 'var(--k-bg)', color: 'var(--k-text)', fontSize: '.9rem', fontFamily: "'Mulish', sans-serif", outline: 'none', boxSizing: 'border-box' as const },
  textarea: { width: '100%', padding: '.6rem .875rem', borderRadius: '.5rem', border: '1.5px solid var(--k-border)', background: 'var(--k-bg)', color: 'var(--k-text)', fontSize: '.9rem', fontFamily: "'Mulish', sans-serif", outline: 'none', resize: 'vertical' as const, boxSizing: 'border-box' as const, minHeight: '90px' },
  select: { width: '100%', padding: '.6rem .875rem', borderRadius: '.5rem', border: '1.5px solid var(--k-border)', background: 'var(--k-bg)', color: 'var(--k-text)', fontSize: '.9rem', fontFamily: "'Mulish', sans-serif", outline: 'none' },
  btn: { background: ACCENT, color: '#fff', border: 'none', padding: '.7rem 1.75rem', borderRadius: '.625rem', fontWeight: 700, fontSize: '.9rem', fontFamily: "'Poppins', sans-serif", cursor: 'pointer', width: '100%' } as React.CSSProperties,
  btnSm: { background: 'var(--k-bg-elevated)', color: 'var(--k-text)', border: '1px solid var(--k-border)', padding: '.45rem 1rem', borderRadius: '.5rem', fontWeight: 600, fontSize: '.78rem', fontFamily: "'Poppins', sans-serif", cursor: 'pointer' } as React.CSSProperties,
  fieldWrap: { marginBottom: '1.125rem' } as React.CSSProperties,
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' } as React.CSSProperties,
  result: { background: 'var(--k-bg-elevated)', border: '1.5px solid var(--k-border)', borderRadius: '1rem', padding: '1.5rem', marginTop: '1.5rem' } as React.CSSProperties,
  h3: { fontFamily: "'Poppins', sans-serif", fontSize: '1rem', fontWeight: 800, color: 'var(--k-text)', margin: '0 0 .75rem' } as React.CSSProperties,
  li: { fontSize: '.875rem', color: 'var(--k-text)', padding: '.35rem 0', borderBottom: '1px solid var(--k-border)', listStyle: 'none', display: 'flex', gap: '.5rem', alignItems: 'flex-start' } as React.CSSProperties,
};

interface Inputs {
  brandName: string;
  niche: string;
  currentBio: string;
  ctaGoal: string;
  tone: string;
}

interface ScoreResult {
  total: number;
  breakdown: { label: string; pts: number; max: number; passed: boolean }[];
  strengths: string[];
  weaknesses: string[];
  improvedBio: string;
  ctaSuggestions: string[];
  keywords: string[];
  contentIdeas: string[];
}

const hasEmoji = (s: string) => /\p{Emoji}/u.test(s);
const hasDigit = (s: string) => /\d/.test(s);
const hasNewline = (s: string) => s.includes('\n');

function scoreRule(label: string, max: number, passed: boolean): ScoreResult['breakdown'][0] {
  return { label, pts: passed ? max : 0, max, passed };
}

function calcScore(inputs: Inputs): ScoreResult {
  const bio = inputs.currentBio;
  const len = bio.length;
  const niche = inputs.niche.toLowerCase();
  const brand = inputs.brandName.toLowerCase();

  const nicheWords = niche.split(/\s+/).filter(Boolean);
  const brandWords = brand.split(/\s+/).filter(Boolean);
  const bioLower = bio.toLowerCase();
  const ctaWords = ['link', 'dm', 'book', 'shop', 'click', 'follow', 'join', 'get', 'visit', 'grab', 'free', 'check', 'download', 'subscribe', 'learn', 'apply'];
  const powerWords = ['help', 'expert', 'create', 'build', 'grow', 'teach', 'coach', 'design', 'founder', 'specialist', 'consultant', 'creator', 'build', 'transform', 'inspire'];

  const lengthPass = len >= 100 && len <= 150;
  const lengthPartial = len >= 50 && len < 100;
  const lengthPts = len === 0 ? 0 : lengthPass ? 20 : lengthPartial ? 12 : len >= 150 ? 15 : 5;

  const breakdown = [
    { label: 'Bio length (100–150 chars is ideal)', pts: lengthPts, max: 20, passed: lengthPts >= 15 },
    scoreRule('Uses emojis', 10, hasEmoji(bio)),
    scoreRule('Mentions your niche/topic', 15, nicheWords.some(w => w.length > 2 && bioLower.includes(w))),
    scoreRule('Has a clear CTA', 15, ctaWords.some(w => bioLower.includes(w))),
    scoreRule('Uses line breaks / structure', 10, hasNewline(bio)),
    scoreRule('Contains numbers or specifics', 10, hasDigit(bio)),
    scoreRule('Uses power/clarity words', 10, powerWords.some(w => bioLower.includes(w))),
    scoreRule('Brand/name present', 10, brandWords.length === 0 || brandWords.some(w => w.length > 2 && bioLower.includes(w))),
  ];

  const total = breakdown.reduce((sum, r) => sum + r.pts, 0);
  const strengths = breakdown.filter(r => r.passed).map(r => `✅ ${r.label}`);
  const weaknesses = breakdown.filter(r => !r.passed).map(r => {
    const fixes: Record<string, string> = {
      'Bio length (100–150 chars is ideal)': `Your bio is ${len} chars. Aim for 100–150 for maximum impact.`,
      'Uses emojis': 'Add 1–3 relevant emojis to break up text and add personality.',
      'Mentions your niche/topic': `Include "${inputs.niche || 'your niche'}" directly in your bio.`,
      'Has a clear CTA': 'Add a CTA like "Book a call 👇", "Shop link below", or "DM me FREE".',
      'Uses line breaks / structure': 'Use line breaks to separate your role, value, and CTA into 3 lines.',
      'Contains numbers or specifics': 'Add specifics: "Helped 500+ brands", "10K+ community", etc.',
      'Uses power/clarity words': 'Add words like "helping", "expert", "coach", "founder", "building".',
      'Brand/name present': `Consider including "${inputs.brandName || 'your name'}" for brand recognition.`,
    };
    return `❌ ${fixes[r.label] || r.label}`;
  });

  // Generate improved bio
  const nicheStr = inputs.niche || 'your niche';
  const brandStr = inputs.brandName || 'Your Brand';
  const ctaStr = inputs.ctaGoal || 'drive traffic';
  const toneMap: Record<string, { opener: string; cta: string }> = {
    Professional:  { opener: `${brandStr} | ${nicheStr} Expert`,   cta: `📎 ${ctaStr.includes('link') ? 'Link in bio' : 'Learn more ↓'}` },
    Playful:       { opener: `✨ ${brandStr} doing ${nicheStr}`,    cta: `👇 ${ctaStr.includes('dm') ? 'Slide into DMs!' : 'Tap the link!'}` },
    Inspirational: { opener: `🌟 ${nicheStr} | ${brandStr}`,        cta: `💡 ${ctaStr.includes('book') ? 'Book a call ↓' : 'Join the journey ↓'}` },
    Bold:          { opener: `⚡ ${brandStr} | The ${nicheStr} Go-To`, cta: `🔥 ${ctaStr.includes('shop') ? 'Shop now ↓' : 'Get started ↓'}` },
    Minimal:       { opener: `${brandStr} · ${nicheStr}`,           cta: `→ ${ctaStr.includes('website') ? 'Website below' : 'Link ↓'}` },
    Educational:   { opener: `📚 Teaching ${nicheStr} | ${brandStr}`, cta: `🎓 ${ctaStr.includes('download') ? 'Free download ↓' : 'Learn for free ↓'}` },
  };
  const t = toneMap[inputs.tone] || toneMap['Professional'];
  const improvedBio = `${t.opener}\nHelping creators & businesses with ${nicheStr}\n${t.cta}`;

  // CTA suggestions
  const ctaSuggestions = [
    `📎 ${ctaStr.charAt(0).toUpperCase() + ctaStr.slice(1)} → link in bio`,
    `💬 DM "${nicheStr.split(' ')[0].toUpperCase()}" for a free consultation`,
    `🚀 Ready to grow? Click the link below ↓`,
  ];

  // Keywords
  const nicheKeywordMap: Record<string, string[]> = {
    fitness:     ['certified trainer', 'transformation', 'fat loss', 'muscle gain', 'wellness'],
    tech:        ['developer', 'full-stack', 'SaaS', 'software engineer', 'product builder'],
    fashion:     ['style curator', 'outfit inspo', 'sustainable fashion', 'OOTD', 'trendsetter'],
    food:        ['recipe creator', 'home cook', 'foodie', 'meal prep', 'plant-based'],
    travel:      ['travel blogger', 'nomad life', 'budget travel', 'solo travel', 'wanderlust'],
    business:    ['entrepreneur', 'founder', 'growth', 'scaling', 'revenue'],
    marketing:   ['digital marketer', 'content strategy', 'SEO', 'growth hacking', 'funnel'],
    design:      ['UI/UX designer', 'brand identity', 'visual storyteller', 'product design', 'Figma'],
    photography: ['photographer', 'portrait', 'golden hour', 'editing', 'visual story'],
  };
  const nicheKey = Object.keys(nicheKeywordMap).find(k => nicheStr.toLowerCase().includes(k));
  const keywords = nicheKey ? nicheKeywordMap[nicheKey] : [`${nicheStr} expert`, `${nicheStr} tips`, `${nicheStr} coach`, `${nicheStr} community`, `${nicheStr} guide`];

  // 7-day content ideas
  const contentIdeasMap: Record<string, string[]> = {
    fitness:   ['Day 1: 3 myths about abs debunked', 'Day 2: My morning routine (60s)', 'Day 3: What I eat in a day', 'Day 4: Beginner workout you can do home', 'Day 5: Progress pic + lessons', 'Day 6: Q&A: your fitness questions', 'Day 7: Weekly recap + motivation'],
    tech:      ['Day 1: Tool I can\'t work without', 'Day 2: Biggest coding mistake I made', 'Day 3: 5 VS Code shortcuts that saved me', 'Day 4: My dev setup tour', 'Day 5: Build in public update', 'Day 6: Beginner tip of the week', 'Day 7: What I\'m building next'],
    business:  ['Day 1: How I got my first client', 'Day 2: Revenue breakdown (transparent)', 'Day 3: Mistake that cost me $5K', 'Day 4: Daily routine as a founder', 'Day 5: Tool stack I use', 'Day 6: Q&A session', 'Day 7: Weekly wins + what\'s next'],
    marketing: ['Day 1: Hook formula that 10x\'d my reach', 'Day 2: Content that works right now', 'Day 3: SEO tip in 60 seconds', 'Day 4: My posting schedule + why', 'Day 5: Viral post breakdown', 'Day 6: Q&A: marketing questions', 'Day 7: This week\'s results'],
    design:    ['Day 1: Color palette of the week', 'Day 2: UI before/after redesign', 'Day 3: Font pairing I love', 'Day 4: Design rule broken (and why it works)', 'Day 5: Tool walkthrough', 'Day 6: Client project reveal', 'Day 7: Design inspo round-up'],
  };
  const ideasKey = Object.keys(contentIdeasMap).find(k => nicheStr.toLowerCase().includes(k));
  const contentIdeas = ideasKey ? contentIdeasMap[ideasKey] : [
    `Day 1: My journey into ${nicheStr}`, `Day 2: Biggest lesson from ${nicheStr}`, `Day 3: Tool/resource I recommend`, `Day 4: Q&A on ${nicheStr}`, `Day 5: Behind the scenes`, `Day 6: Common mistake in ${nicheStr}`, `Day 7: This week\'s wins`,
  ];

  return { total, breakdown, strengths, weaknesses, improvedBio, ctaSuggestions, keywords, contentIdeas };
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? '#22c55e' : score >= 60 ? '#F7933C' : score >= 40 ? '#eab308' : '#ef4444';
  const label = score >= 80 ? 'Excellent ⭐' : score >= 60 ? 'Good 🟢' : score >= 40 ? 'Room to Improve 🟡' : 'Needs Work 🔴';
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 120, borderRadius: '50%', border: `8px solid ${color}`, background: 'var(--k-bg-card)', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: '2rem', color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: '.65rem', color: 'var(--k-text-muted)', fontWeight: 700 }}>/ 100</span>
      </div>
      <div style={{ marginTop: '.625rem', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '.875rem', color }}>{label}</div>
    </div>
  );
}

export default function InstagramBioScore() {
  const [inputs, setInputs] = useState<Inputs>({ brandName: '', niche: '', currentBio: '', ctaGoal: '', tone: 'Professional' });
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInputs(prev => ({ ...prev, [k]: e.target.value }));
  };

  const analyze = () => {
    if (!inputs.currentBio.trim()) return;
    const r = calcScore(inputs);
    setResult(r);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const copyResult = () => {
    if (!result) return;
    const text = [
      `Instagram Bio Score: ${result.total}/100`,
      ``,
      `✅ Strengths:`, ...result.strengths,
      ``,
      `❌ To Improve:`, ...result.weaknesses,
      ``,
      `💡 Improved Bio Suggestion:`, result.improvedBio,
      ``,
      `🔑 Suggested Keywords:`, result.keywords.join(', '),
    ].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={s.wrap}>
      {/* Form */}
      <div style={s.card}>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.125rem', color: 'var(--k-text)', margin: '0 0 1.25rem' }}>
          Analyze Your Bio
        </h2>
        <div style={s.grid2}>
          <div style={s.fieldWrap}>
            <label style={s.label}>Name or Brand</label>
            <input style={s.input} value={inputs.brandName} onChange={set('brandName')} placeholder="e.g. khizooo" />
          </div>
          <div style={s.fieldWrap}>
            <label style={s.label}>Your Niche</label>
            <input style={s.input} value={inputs.niche} onChange={set('niche')} placeholder="e.g. fitness, tech, design" />
          </div>
        </div>
        <div style={s.fieldWrap}>
          <label style={s.label}>
            Current Instagram Bio
            <span style={{ color: inputs.currentBio.length > 150 ? '#ef4444' : 'var(--k-text-muted)', marginLeft: '.5rem', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
              {inputs.currentBio.length} / 150
            </span>
          </label>
          <textarea
            style={s.textarea}
            value={inputs.currentBio}
            onChange={set('currentBio')}
            placeholder="Paste your current bio here. Try to match exactly what appears on Instagram."
            maxLength={200}
          />
        </div>
        <div style={s.grid2}>
          <div style={s.fieldWrap}>
            <label style={s.label}>CTA / Link Goal</label>
            <input style={s.input} value={inputs.ctaGoal} onChange={set('ctaGoal')} placeholder="e.g. drive to my website" />
          </div>
          <div style={s.fieldWrap}>
            <label style={s.label}>Tone / Style</label>
            <select style={s.select} value={inputs.tone} onChange={set('tone')}>
              {['Professional', 'Playful', 'Inspirational', 'Bold', 'Minimal', 'Educational'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <button style={s.btn} onClick={analyze}>Analyze My Bio →</button>
      </div>

      {/* Result */}
      {result && (
        <div ref={resultRef} style={s.result}>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.5rem', alignItems: 'start' }}>
            <ScoreRing score={result.total} />
            <div>
              <h3 style={{ ...s.h3, marginBottom: '.5rem' }}>Score Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                {result.breakdown.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.8rem' }}>
                    <span style={{ fontSize: '.75rem', color: r.passed ? '#22c55e' : '#ef4444' }}>{r.passed ? '✅' : '❌'}</span>
                    <span style={{ flex: 1, color: 'var(--k-text)', lineHeight: 1.3 }}>{r.label}</span>
                    <span style={{ fontWeight: 700, color: r.passed ? '#22c55e' : 'var(--k-text-muted)', fontFamily: "'Poppins', sans-serif" }}>+{r.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--k-border)', margin: '1.25rem 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div>
              <h3 style={s.h3}>✅ Strengths</h3>
              <ul style={{ margin: 0, padding: 0 }}>
                {result.strengths.length > 0 ? result.strengths.map((s, i) => (
                  <li key={i} style={{ ...s, fontSize: '.82rem', color: '#22c55e' }}>{s}</li>
                )) : <li style={{ fontSize: '.82rem', color: 'var(--k-text-muted)' }}>Fill in your bio to see strengths.</li>}
              </ul>
            </div>
            <div>
              <h3 style={s.h3}>❌ Improvements Needed</h3>
              <ul style={{ margin: 0, padding: 0 }}>
                {result.weaknesses.map((w, i) => (
                  <li key={i} style={{ ...s.li, fontSize: '.82rem' }}>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--k-border)', margin: '1.25rem 0' }} />

          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={s.h3}>💡 Improved Bio Suggestion</h3>
            <pre style={{ background: 'var(--k-bg)', border: '1.5px solid var(--k-border)', borderRadius: '.75rem', padding: '1rem', fontFamily: "'Mulish', sans-serif", fontSize: '.9rem', whiteSpace: 'pre-wrap', color: 'var(--k-text)', margin: 0 }}>
              {result.improvedBio}
            </pre>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={s.h3}>📣 CTA Suggestions</h3>
              <ul style={{ margin: 0, padding: 0 }}>
                {result.ctaSuggestions.map((c, i) => (
                  <li key={i} style={{ ...s.li, fontSize: '.82rem' }}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={s.h3}>🔑 Keyword Suggestions</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.375rem' }}>
                {result.keywords.map((k, i) => (
                  <span key={i} style={{ background: `color-mix(in srgb, ${ACCENT} 12%, transparent)`, color: ACCENT, fontSize: '.72rem', fontWeight: 700, padding: '.2rem .6rem', borderRadius: '999px', fontFamily: "'Poppins', sans-serif" }}>{k}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={s.h3}>🗓️ 7-Day Content Ideas</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '.5rem' }}>
              {result.contentIdeas.map((idea, i) => (
                <div key={i} style={{ background: 'var(--k-bg)', border: '1px solid var(--k-border)', borderRadius: '.625rem', padding: '.625rem .875rem', fontSize: '.8rem', color: 'var(--k-text)' }}>
                  {idea}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button style={s.btnSm} onClick={() => resultRef.current?.scrollIntoView({ behavior: 'smooth' })}>↑ Back to Form</button>
            <button
              style={{ ...s.btnSm, background: copied ? '#22c55e' : ACCENT, color: '#fff', border: 'none' }}
              onClick={copyResult}
            >
              {copied ? 'Copied! ✓' : '📋 Copy Result'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
