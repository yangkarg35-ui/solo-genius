'use client';
import { useState } from 'react';

const credentials: any = {
  'SG-2026-0001': { name: 'Kyaw Zin', cert: 'Advanced Guitar & Musical Thinking', date: '13 August 2026', image: '/0001.jpg' },
  'SG-2026-0002': { name: 'Aung Hein', cert: 'Advanced Guitar & Musical Thinking', date: '13 August 2026', image: '/0002.jpg' },
};

export default function VerifyPage() {
  const [id, setId] = useState('');
  const [state, setState] = useState<'idle' | 'verifying' | 'valid' | 'invalid'>('idle');
  const [result, setResult] = useState<any>(null);

  const verify = () => {
    setState('verifying');
    setTimeout(() => {
      if (credentials[id]) {
        setResult({ id, ...credentials[id] });
        setState('valid');
      } else {
        setState('invalid');
      }
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: "'Inter', sans-serif", padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Brand Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '16px', letterSpacing: '8px', fontWeight: '300' }}>SOLO GENIUS</h1>
        <p style={{ fontSize: '10px', letterSpacing: '3px', color: '#666', marginTop: '10px', textTransform: 'uppercase' }}>Official Credential Registry</p>
      </div>

      <div style={{ width: '100%', maxWidth: '500px' }}>
        {state === 'idle' || state === 'invalid' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              value={id} onChange={(e) => setId(e.target.value)}
              placeholder="ENTER CREDENTIAL ID"
              style={{ background: 'transparent', border: '1px solid #222', padding: '20px', color: '#fff', textAlign: 'center', fontSize: '14px', letterSpacing: '3px', outline: 'none' }}
            />
            {state === 'invalid' && <p style={{ fontSize: '10px', color: '#888', textAlign: 'center' }}>CREDENTIAL NOT FOUND. CHECK THE ID AND TRY AGAIN.</p>}
            <button onClick={verify} style={{ background: '#fff', color: '#000', padding: '16px', border: 'none', cursor: 'pointer', fontWeight: '600', letterSpacing: '2px', fontSize: '11px' }}>VERIFY</button>
          </div>
        ) : state === 'verifying' ? (
          <div style={{ textAlign: 'center', color: '#444', letterSpacing: '4px', fontSize: '12px' }}>VERIFYING...</div>
        ) : (
          <div style={{ animation: 'fadeIn 0.8s ease' }}>
            {/* The Credential Card */}
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px', position: 'relative' }}>
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '9px', letterSpacing: '3px', color: '#D4AF37', marginBottom: '10px' }}>OFFICIAL CREDENTIAL</p>
                <h2 style={{ fontSize: '18px', fontWeight: '300', lineHeight: '1.4' }}>CERTIFICATE OF COMPLETION</h2>
              </div>
              
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '12px', color: '#666' }}>STUDENT</p>
                <p style={{ fontSize: '16px', marginTop: '5px' }}>{result.name}</p>
              </div>

              <p style={{ fontSize: '14px', marginBottom: '40px' }}>{result.cert}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a', paddingTop: '20px' }}>
                <div style={{ fontSize: '10px', color: '#666', letterSpacing: '1px' }}>ISSUED · {result.date}</div>
                <div style={{ fontSize: '10px', color: '#666', letterSpacing: '1px' }}>ID · {result.id}</div>
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '10px', color: '#444', marginBottom: '20px' }}>This credential has been verified against the official Solo Genius credential registry.</p>
              <button onClick={() => { setState('idle'); setId(''); }} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '10px', letterSpacing: '2px', textDecoration: 'underline', cursor: 'pointer' }}>VERIFY ANOTHER</button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}