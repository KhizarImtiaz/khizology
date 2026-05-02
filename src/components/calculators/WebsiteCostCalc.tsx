import { useState } from 'react';

type WebsiteType = 'Landing Page' | 'Business / Portfolio' | 'Blog' | 'E-commerce Store' | 'Web Application' | 'Custom Platform';
type Pages = '1-5' | '6-15' | '16-30' | '30+';
type DesignComplexity = 'Basic (template)' | 'Standard (custom design)' | 'Premium (pixel-perfect)';
type Timeline = 'Flexible (2-4 months)' | 'Standard (1-2 months)' | 'Rush (2-4 weeks)';

interface WebsiteInputs {
  websiteType: WebsiteType;
  pages: Pages;
  designComplexity: DesignComplexity;
  cms: boolean;
  ecommerce: boolean;
  customBackend: boolean;
  timeline: Timeline;
}

interface CostResult {
  minCost: number;
  maxCost: number;
  minWeeks: number;
  maxWeeks: number;
  buildType: string;
  features: string[];
}

const styles = {
  card: {
    background: 'var(--k-bg-card)',
    border: '1px solid var(--k-border)',
    borderRadius: '1rem',
    padding: '1.5rem',
  } as React.CSSProperties,
  label: {
    display: 'block',
    fontSize: '.8rem',
    fontWeight: 700,
    color: 'var(--k-text-muted)',
    marginBottom: '.375rem',
    fontFamily: "'Poppins', sans-serif",
    textTransform: 'uppercase' as const,
    letterSpacing: '.06em',
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: '.6rem .875rem',
    borderRadius: '.5rem',
    border: '1.5px solid var(--k-border)',
    background: 'var(--k-bg)',
    color: 'var(--k-text)',
    fontSize: '.9rem',
    fontFamily: "'Mulish', sans-serif",
    outline: 'none',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,
  button: {
    background: '#F7933C',
    color: '#fff',
    border: 'none',
    padding: '.6rem 1.5rem',
    borderRadius: '.5rem',
    fontWeight: 700,
    fontSize: '.875rem',
    fontFamily: "'Poppins', sans-serif",
    cursor: 'pointer',
  } as React.CSSProperties,
  resultCard: {
    background: 'var(--k-bg-elevated)',
    border: '1.5px solid var(--k-border)',
    borderRadius: '1rem',
    padding: '1.5rem',
    marginTop: '1.5rem',
  } as React.CSSProperties,
};

const selectStyle: React.CSSProperties = {
  ...styles.input,
  appearance: 'none',
  WebkitAppearance: 'none',
};

function getBuildType(type: WebsiteType, customBackend: boolean, ecommerce: boolean): string {
  if (type === 'Custom Platform') return 'Custom Full-Stack (React / Node.js)';
  if (type === 'Web Application') return 'Next.js / React + Backend API';
  if (type === 'E-commerce Store' || ecommerce) return 'Shopify / WooCommerce / Next.js Commerce';
  if (customBackend) return 'Next.js + Headless CMS + API';
  if (type === 'Landing Page') return 'Astro / Webflow / Next.js';
  if (type === 'Blog') return 'WordPress / Astro + CMS';
  return 'WordPress / Webflow / Next.js';
}

function getTimelineWeeks(type: WebsiteType, timeline: Timeline): [number, number] {
  const base: Record<WebsiteType, [number, number]> = {
    'Landing Page': [1, 3],
    'Business / Portfolio': [3, 6],
    'Blog': [4, 8],
    'E-commerce Store': [8, 16],
    'Web Application': [16, 32],
    'Custom Platform': [24, 52],
  };
  const [min, max] = base[type];
  if (timeline === 'Rush (2-4 weeks)') return [Math.max(1, Math.round(min * 0.6)), Math.round(max * 0.6)];
  if (timeline === 'Standard (1-2 months)') return [Math.round(min * 0.8), Math.round(max * 0.8)];
  return [min, max];
}

function calculate(inputs: WebsiteInputs): CostResult {
  const base: Record<WebsiteType, [number, number]> = {
    'Landing Page': [300, 800],
    'Business / Portfolio': [800, 2500],
    'Blog': [1000, 3000],
    'E-commerce Store': [3000, 8000],
    'Web Application': [8000, 25000],
    'Custom Platform': [15000, 50000],
  };

  let [min, max] = base[inputs.websiteType];

  // Pages multiplier
  const pagesMult: Record<Pages, number> = { '1-5': 1, '6-15': 1.3, '16-30': 1.6, '30+': 2.0 };
  min *= pagesMult[inputs.pages];
  max *= pagesMult[inputs.pages];

  // Design multiplier
  const designMult: Record<DesignComplexity, number> = {
    'Basic (template)': 1,
    'Standard (custom design)': 1.4,
    'Premium (pixel-perfect)': 2.0,
  };
  min *= designMult[inputs.designComplexity];
  max *= designMult[inputs.designComplexity];

  // Addons
  if (inputs.cms) { min += 500; max += 1000; }
  if (inputs.ecommerce && inputs.websiteType !== 'E-commerce Store') { min += 2000; max += 3000; }
  if (inputs.customBackend) { min += 3000; max += 8000; }

  // Timeline rush
  if (inputs.timeline === 'Rush (2-4 weeks)') { min *= 1.3; max *= 1.3; }

  const features: string[] = [inputs.websiteType, `${inputs.pages} pages`, inputs.designComplexity];
  if (inputs.cms) features.push('CMS Integration');
  if (inputs.ecommerce) features.push('E-commerce Functionality');
  if (inputs.customBackend) features.push('Custom Backend / API');
  features.push(`Timeline: ${inputs.timeline}`);

  const [minWeeks, maxWeeks] = getTimelineWeeks(inputs.websiteType, inputs.timeline);

  return {
    minCost: Math.round(min),
    maxCost: Math.round(max),
    minWeeks,
    maxWeeks,
    buildType: getBuildType(inputs.websiteType, inputs.customBackend, inputs.ecommerce),
    features,
  };
}

export default function WebsiteCostCalc() {
  const [inputs, setInputs] = useState<WebsiteInputs>({
    websiteType: 'Business / Portfolio',
    pages: '1-5',
    designComplexity: 'Standard (custom design)',
    cms: false,
    ecommerce: false,
    customBackend: false,
    timeline: 'Standard (1-2 months)',
  });
  const [result, setResult] = useState<CostResult | null>(null);
  const [copied, setCopied] = useState(false);

  const set = <K extends keyof WebsiteInputs>(key: K, value: WebsiteInputs[K]) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  const handleCalculate = () => setResult(calculate(inputs));

  const copyResult = () => {
    if (!result) return;
    const text = `Website Cost Estimate
Cost Range: $${result.minCost.toLocaleString()} – $${result.maxCost.toLocaleString()}
Timeline: ${result.minWeeks}–${result.maxWeeks} weeks
Build Type: ${result.buildType}
Includes: ${result.features.join(', ')}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const checkboxStyle: React.CSSProperties = {
    width: '1.1rem',
    height: '1.1rem',
    accentColor: '#F7933C',
    cursor: 'pointer',
    flexShrink: 0,
  };

  return (
    <div style={styles.card}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1.25rem' }}>
        Website Cost Calculator
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={styles.label}>Website Type</label>
          <select style={selectStyle} value={inputs.websiteType} onChange={(e) => set('websiteType', e.target.value as WebsiteType)}>
            {['Landing Page', 'Business / Portfolio', 'Blog', 'E-commerce Store', 'Web Application', 'Custom Platform'].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={styles.label}>Number of Pages</label>
          <select style={selectStyle} value={inputs.pages} onChange={(e) => set('pages', e.target.value as Pages)}>
            {['1-5', '6-15', '16-30', '30+'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label style={styles.label}>Design Complexity</label>
          <select style={selectStyle} value={inputs.designComplexity} onChange={(e) => set('designComplexity', e.target.value as DesignComplexity)}>
            {['Basic (template)', 'Standard (custom design)', 'Premium (pixel-perfect)'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label style={styles.label}>Timeline</label>
          <select style={selectStyle} value={inputs.timeline} onChange={(e) => set('timeline', e.target.value as Timeline)}>
            {['Flexible (2-4 months)', 'Standard (1-2 months)', 'Rush (2-4 weeks)'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1rem' }}>
        {([
          { key: 'cms', label: 'CMS Required?' },
          { key: 'ecommerce', label: 'E-commerce Required?' },
          { key: 'customBackend', label: 'Custom Backend / API Required?' },
        ] as { key: 'cms' | 'ecommerce' | 'customBackend'; label: string }[]).map(({ key, label }) => (
          <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', cursor: 'pointer', fontFamily: "'Mulish', sans-serif", fontSize: '.9rem', color: 'var(--k-text)' }}>
            <input
              type="checkbox"
              checked={inputs[key]}
              onChange={(e) => set(key, e.target.checked)}
              style={checkboxStyle}
            />
            {label}
          </label>
        ))}
      </div>

      <button onClick={handleCalculate} style={{ ...styles.button, marginTop: '1.25rem' }}>
        Estimate Cost
      </button>

      {result && (
        <div style={styles.resultCard}>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1rem' }}>
            Estimate
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '.875rem', marginBottom: '1rem' }}>
            <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
              <div style={{ ...styles.label, marginBottom: '.25rem' }}>Estimated Cost Range</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.3rem', color: '#F7933C' }}>
                ${result.minCost.toLocaleString()} – ${result.maxCost.toLocaleString()}
              </div>
            </div>

            <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
              <div style={{ ...styles.label, marginBottom: '.25rem' }}>Estimated Timeline</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.3rem', color: 'var(--k-text)' }}>
                {result.minWeeks}–{result.maxWeeks} weeks
              </div>
            </div>

            <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem', gridColumn: 'span 1' }}>
              <div style={{ ...styles.label, marginBottom: '.25rem' }}>Suggested Build Type</div>
              <div style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 600, fontSize: '.9rem', color: 'var(--k-text)' }}>
                {result.buildType}
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
            <div style={{ ...styles.label, marginBottom: '.5rem' }}>What's Included</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontFamily: "'Mulish', sans-serif", fontSize: '.875rem', color: 'var(--k-text)', lineHeight: 1.7 }}>
              {result.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <button
            onClick={copyResult}
            style={{ ...styles.button, marginTop: '1.25rem', background: copied ? '#22c55e' : '#F7933C' }}
          >
            {copied ? 'Copied! ✓' : 'Copy Result'}
          </button>
        </div>
      )}
    </div>
  );
}
