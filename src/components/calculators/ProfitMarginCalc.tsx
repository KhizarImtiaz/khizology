import { useState } from 'react';

interface ProfitMarginInputs {
  costPrice: number;
  sellingPrice: number;
  shippingCost: number;
  platformFeePercent: number;
  adCost: number;
  otherCost: number;
}

interface Result {
  revenue: number;
  totalCost: number;
  profit: number;
  profitMargin: number;
  markup: number;
  breakEven: number;
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

export default function ProfitMarginCalc() {
  const [inputs, setInputs] = useState<ProfitMarginInputs>({
    costPrice: 0,
    sellingPrice: 0,
    shippingCost: 0,
    platformFeePercent: 0,
    adCost: 0,
    otherCost: 0,
  });
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (field: keyof ProfitMarginInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [field]: parseFloat(e.target.value) || 0 }));
  };

  const calculate = () => {
    const { costPrice, sellingPrice, shippingCost, platformFeePercent, adCost, otherCost } = inputs;
    const revenue = sellingPrice;
    const platformFee = revenue * (platformFeePercent / 100);
    const totalCost = costPrice + shippingCost + platformFee + adCost + otherCost;
    const profit = revenue - totalCost;
    const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;
    const markup = totalCost > 0 ? (profit / totalCost) * 100 : 0;
    const breakEven = totalCost;
    setResult({ revenue, totalCost, profit, profitMargin, markup, breakEven });
  };

  const getMarginColor = (margin: number) => {
    if (margin < 10) return '#ef4444';
    if (margin < 20) return '#f59e0b';
    return '#22c55e';
  };

  const copyResult = () => {
    if (!result) return;
    const text = `Profit Margin Analysis
Revenue: $${result.revenue.toFixed(2)}
Total Cost: $${result.totalCost.toFixed(2)}
Profit: $${result.profit.toFixed(2)}
Profit Margin: ${result.profitMargin.toFixed(2)}%
Markup: ${result.markup.toFixed(2)}%
Break-even Price: $${result.breakEven.toFixed(2)}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const fields: { key: keyof ProfitMarginInputs; label: string; placeholder?: string }[] = [
    { key: 'costPrice', label: 'Cost / Purchase Price', placeholder: '0.00' },
    { key: 'sellingPrice', label: 'Selling Price', placeholder: '0.00' },
    { key: 'shippingCost', label: 'Shipping Cost', placeholder: '0.00' },
    { key: 'platformFeePercent', label: 'Platform Fee %', placeholder: '0 (e.g. 15 for Amazon)' },
    { key: 'adCost', label: 'Ad Cost', placeholder: '0.00' },
    { key: 'otherCost', label: 'Other Costs', placeholder: '0.00' },
  ];

  return (
    <div style={styles.card}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1.25rem' }}>
        Profit Margin Calculator
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {fields.map(({ key, label, placeholder }) => (
          <div key={key}>
            <label style={styles.label}>{label}</label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder={placeholder}
              value={inputs[key] || ''}
              onChange={handleChange(key)}
              style={styles.input}
            />
          </div>
        ))}
      </div>

      <button onClick={calculate} style={{ ...styles.button, marginTop: '1.25rem' }}>
        Calculate
      </button>

      {result && (
        <div style={styles.resultCard}>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1rem' }}>
            Results
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '.875rem' }}>
            {[
              { label: 'Revenue', value: `$${result.revenue.toFixed(2)}` },
              { label: 'Total Cost', value: `$${result.totalCost.toFixed(2)}` },
              { label: 'Profit', value: `$${result.profit.toFixed(2)}`, color: result.profit >= 0 ? '#22c55e' : '#ef4444' },
              { label: 'Break-even Price', value: `$${result.breakEven.toFixed(2)}` },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
                <div style={{ ...styles.label, marginBottom: '.25rem' }}>{label}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: color || 'var(--k-text)' }}>{value}</div>
              </div>
            ))}

            <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
              <div style={{ ...styles.label, marginBottom: '.25rem' }}>Profit Margin</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: getMarginColor(result.profitMargin) }}>
                {result.profitMargin.toFixed(2)}%
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--k-text-muted)', marginTop: '.25rem', fontFamily: "'Mulish', sans-serif" }}>
                {result.profitMargin < 10 ? 'Low margin' : result.profitMargin < 20 ? 'Moderate margin' : 'Healthy margin'}
              </div>
            </div>

            <div style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
              <div style={{ ...styles.label, marginBottom: '.25rem' }}>Markup</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: 'var(--k-text)' }}>
                {result.markup.toFixed(2)}%
              </div>
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
