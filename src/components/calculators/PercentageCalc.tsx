import { useState } from 'react';

type CalcType = 'percent_of' | 'is_what_percent' | 'increase_decrease';
type Direction = 'increase' | 'decrease';

interface CalcResult {
  value: number;
  formula: string;
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

function fmt(n: number): string {
  return parseFloat(n.toFixed(10)).toString();
}

export default function PercentageCalc() {
  const [calcType, setCalcType] = useState<CalcType>('percent_of');
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [direction, setDirection] = useState<Direction>('increase');
  const [result, setResult] = useState<CalcResult | null>(null);
  const [copied, setCopied] = useState(false);

  const getLabelA = () => {
    if (calcType === 'percent_of') return 'Percentage (X %)';
    if (calcType === 'is_what_percent') return 'Value (X)';
    return 'Base Number (Y)';
  };

  const getLabelB = () => {
    if (calcType === 'percent_of') return 'Base Number (Y)';
    if (calcType === 'is_what_percent') return 'Total (Y)';
    return 'Percentage (X %)';
  };

  const calculate = () => {
    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    if (isNaN(a) || isNaN(b)) return;

    let value = 0;
    let formula = '';

    if (calcType === 'percent_of') {
      value = b * (a / 100);
      formula = `${a}% of ${b} = ${b} × ${a / 100} = ${fmt(value)}`;
    } else if (calcType === 'is_what_percent') {
      value = b !== 0 ? (a / b) * 100 : 0;
      formula = `${a} ÷ ${b} × 100 = ${fmt(value)}%`;
    } else {
      const pct = b / 100;
      if (direction === 'increase') {
        value = a * (1 + pct);
        formula = `${a} × (1 + ${b / 100}) = ${a} × ${1 + pct} = ${fmt(value)}`;
      } else {
        value = a * (1 - pct);
        formula = `${a} × (1 − ${b / 100}) = ${a} × ${1 - pct} = ${fmt(value)}`;
      }
    }

    setResult({ value, formula });
  };

  const copyResult = () => {
    if (!result) return;
    navigator.clipboard.writeText(`Result: ${fmt(result.value)}\nFormula: ${result.formula}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const radioStyle: React.CSSProperties = { accentColor: '#F7933C', width: '1rem', height: '1rem', cursor: 'pointer' };

  const calcTypes: { value: CalcType; label: string }[] = [
    { value: 'percent_of', label: 'What is X% of Y?' },
    { value: 'is_what_percent', label: 'X is what % of Y?' },
    { value: 'increase_decrease', label: 'Increase / Decrease Y by X%' },
  ];

  return (
    <div style={styles.card}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1.25rem' }}>
        Percentage Calculator
      </h2>

      {/* Calc type selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem', marginBottom: '1.25rem' }}>
        {calcTypes.map(({ value, label }) => (
          <label key={value} style={{ display: 'flex', alignItems: 'center', gap: '.625rem', cursor: 'pointer', fontFamily: "'Mulish', sans-serif", fontSize: '.9rem', color: calcType === value ? '#F7933C' : 'var(--k-text)', fontWeight: calcType === value ? 700 : 400 }}>
            <input
              type="radio"
              name="calcType"
              value={value}
              checked={calcType === value}
              onChange={() => { setCalcType(value); setResult(null); }}
              style={radioStyle}
            />
            {label}
          </label>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={styles.label}>{getLabelA()}</label>
          <input
            type="number"
            step="any"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
            placeholder="0"
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>{getLabelB()}</label>
          <input
            type="number"
            step="any"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
            placeholder="0"
            style={styles.input}
          />
        </div>
      </div>

      {calcType === 'increase_decrease' && (
        <div style={{ display: 'flex', gap: '1.25rem', marginTop: '.875rem' }}>
          {(['increase', 'decrease'] as Direction[]).map((d) => (
            <label key={d} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', cursor: 'pointer', fontFamily: "'Mulish', sans-serif", fontSize: '.9rem', color: direction === d ? '#F7933C' : 'var(--k-text)', fontWeight: direction === d ? 700 : 400, textTransform: 'capitalize' }}>
              <input
                type="radio"
                name="direction"
                value={d}
                checked={direction === d}
                onChange={() => setDirection(d)}
                style={radioStyle}
              />
              {d}
            </label>
          ))}
        </div>
      )}

      <button onClick={calculate} style={{ ...styles.button, marginTop: '1.25rem' }}>
        Calculate
      </button>

      {result && (
        <div style={styles.resultCard}>
          <div style={{ ...styles.label, marginBottom: '.5rem' }}>Result</div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '2.5rem', color: '#F7933C', lineHeight: 1.1, marginBottom: '.75rem' }}>
            {fmt(result.value)}{calcType === 'is_what_percent' ? '%' : ''}
          </div>

          <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.75rem 1rem' }}>
            <div style={{ ...styles.label, marginBottom: '.25rem' }}>Formula</div>
            <div style={{ fontFamily: "'Mulish', sans-serif", fontSize: '.875rem', color: 'var(--k-text)', wordBreak: 'break-word' }}>
              {result.formula}
            </div>
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
