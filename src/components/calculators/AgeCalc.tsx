import { useState } from 'react';

interface AgeResult {
  years: number;
  months: number;
  days: number;
  nextBirthdayDays: number;
  isBirthdayToday: boolean;
  totalMonths: number;
  totalDays: number;
  totalHours: number;
  dayOfWeek: string;
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

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function calculateAge(dob: Date, target: Date): AgeResult {
  // Precise age calculation
  let years = target.getFullYear() - dob.getFullYear();
  let months = target.getMonth() - dob.getMonth();
  let days = target.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    // Days in previous month relative to target
    const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Total days
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((target.getTime() - dob.getTime()) / msPerDay);

  // Total months (rough)
  const totalMonths = years * 12 + months;

  // Total hours (approximate)
  const totalHours = totalDays * 24;

  // Next birthday
  const dayOfWeek = DAYS[dob.getDay()];
  const targetYear = target.getFullYear();
  let nextBirthday = new Date(targetYear, dob.getMonth(), dob.getDate());
  if (nextBirthday < target) {
    nextBirthday = new Date(targetYear + 1, dob.getMonth(), dob.getDate());
  }
  const isBirthdayToday =
    dob.getMonth() === target.getMonth() && dob.getDate() === target.getDate();
  const nextBirthdayDays = isBirthdayToday
    ? 0
    : Math.ceil((nextBirthday.getTime() - target.getTime()) / msPerDay);

  return {
    years,
    months,
    days,
    nextBirthdayDays,
    isBirthdayToday,
    totalMonths,
    totalDays,
    totalHours,
    dayOfWeek,
  };
}

function todayStr(): string {
  const t = new Date();
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, '0');
  const d = String(t.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function AgeCalc() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const calculate = () => {
    setError('');
    if (!dob) { setError('Please enter a date of birth.'); return; }
    const dobDate = new Date(dob + 'T00:00:00');
    const targetStr = targetDate || todayStr();
    const targetDt = new Date(targetStr + 'T00:00:00');

    if (dobDate > targetDt) { setError('Date of birth cannot be in the future relative to the target date.'); return; }

    setResult(calculateAge(dobDate, targetDt));
  };

  const copyResult = () => {
    if (!result) return;
    const text = `Age: ${result.years} years, ${result.months} months, ${result.days} days
Total Months: ${result.totalMonths.toLocaleString()}
Total Days: ${result.totalDays.toLocaleString()}
Total Hours: ${result.totalHours.toLocaleString()}
Born on: ${result.dayOfWeek}
Next Birthday: ${result.isBirthdayToday ? "Today! 🎂" : `In ${result.nextBirthdayDays} days`}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const statItems = result
    ? [
        { label: 'Total Months Lived', value: result.totalMonths.toLocaleString() },
        { label: 'Total Days Lived', value: result.totalDays.toLocaleString() },
        { label: 'Total Hours Lived', value: result.totalHours.toLocaleString() },
        { label: 'Born on (Day)', value: result.dayOfWeek },
      ]
    : [];

  return (
    <div style={styles.card}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'var(--k-text)', marginTop: 0, marginBottom: '1.25rem' }}>
        Age Calculator
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={styles.label}>Date of Birth</label>
          <input
            type="date"
            value={dob}
            max={todayStr()}
            onChange={(e) => setDob(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Target Date (optional)</label>
          <input
            type="date"
            value={targetDate}
            placeholder={todayStr()}
            onChange={(e) => setTargetDate(e.target.value)}
            style={styles.input}
          />
          <div style={{ fontSize: '.75rem', color: 'var(--k-text-muted)', marginTop: '.25rem', fontFamily: "'Mulish', sans-serif" }}>
            Defaults to today
          </div>
        </div>
      </div>

      {error && (
        <div style={{ color: '#ef4444', fontFamily: "'Mulish', sans-serif", fontSize: '.85rem', marginTop: '.75rem' }}>
          {error}
        </div>
      )}

      <button onClick={calculate} style={{ ...styles.button, marginTop: '1.25rem' }}>
        Calculate Age
      </button>

      {result && (
        <div style={styles.resultCard}>
          {/* Main age display */}
          <div style={{ background: 'var(--k-bg-card)', borderRadius: '.75rem', padding: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
            <div style={{ ...styles.label, textAlign: 'center', marginBottom: '.5rem' }}>Age</div>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '2rem', color: '#F7933C', lineHeight: 1.1 }}>
              {result.years} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--k-text-muted)' }}>yrs</span>{' '}
              {result.months} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--k-text-muted)' }}>mos</span>{' '}
              {result.days} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--k-text-muted)' }}>days</span>
            </div>
          </div>

          {/* Next birthday */}
          <div style={{ background: 'var(--k-bg-card)', borderRadius: '.75rem', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>{result.isBirthdayToday ? '🎂' : '🎉'}</div>
            <div>
              <div style={{ ...styles.label, marginBottom: '.2rem' }}>Next Birthday</div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: result.isBirthdayToday ? '#22c55e' : 'var(--k-text)' }}>
                {result.isBirthdayToday ? "Today! 🎂" : `In ${result.nextBirthdayDays} day${result.nextBirthdayDays === 1 ? '' : 's'}`}
              </div>
            </div>
          </div>

          {/* Stat grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '.75rem' }}>
            {statItems.map(({ label, value }) => (
              <div key={label} style={{ background: 'var(--k-bg-card)', borderRadius: '.625rem', padding: '.875rem' }}>
                <div style={{ ...styles.label, marginBottom: '.25rem' }}>{label}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: 'var(--k-text)' }}>
                  {value}
                </div>
              </div>
            ))}
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
