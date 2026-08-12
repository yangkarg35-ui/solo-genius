'use client';
import { useState } from 'react';

// စာရင်းထဲမှာ ID ရှိရင် ပေါ်လာမယ်
const registry: any = {
  'SG-2026-0001': { name: 'Kyaw Zin', cert: 'Advanced Guitar & Musical Thinking', date: '13 August 2026' },
  'SG-2026-0002': { name: 'Aung Hein', cert: 'Creativity and Critical Thinking', date: '13 August 2026' },
};

export default function VerifyPage() {
  const [val, setVal] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(registry[val] || 'NOT_FOUND');
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#050505', minHeight: '100vh', color: '#fff', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '12px', letterSpacing: '6px', textAlign: 'center', marginBottom: '40px', opacity: 0.5 }}>SOLO GENIUS</h1>
        
        {/* Input Section */}
        <div style={{ border: '1px solid #222', padding: '30px', backgroundColor: '#0a0a0a' }}>
          <p style={{ fontSize: '10px', letterSpacing: '2px', marginBottom: '20px' }}>STUDENT CREDENTIAL VERIFICATION</p>
          <input 
            value={val} onChange={(e) => setVal(e.target.value)}
            style={{ width: '100%', background: 'transparent', border: '1px solid #333', padding: '15px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }}
          />
          <button onClick={handleVerify} style={{ width: '100%', marginTop: '20px', padding: '15px', background: '#D4AF37', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            {loading ? 'VERIFYING...' : 'VERIFY CREDENTIAL'}
          </button>
        </div>

        {/* Dynamic Result Section */}
        {result === 'NOT_FOUND' && <p style={{ textAlign: 'center', marginTop: '20px', color: '#D4AF37', fontSize: '12px' }}>CREDENTIAL NOT FOUND.</p>}
        
        {result && result !== 'NOT_FOUND' && (
          <div style={{ marginTop: '40px', border: '1px solid #D4AF37', padding: '40px', animation: 'fadeIn 0.5s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ color: '#D4AF37' }}>✓</span> 
              <span style={{ fontSize: '10px', letterSpacing: '2px' }}>VERIFIED AUTHENTIC RECORD</span>
            </div>
            <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{result.cert}</h2>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>{result.name}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>
              <span>ID: {val}</span>
              <span>{result.date}</span>
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}