'use client';

import React, { useState } from 'react';

export default function VerifyPage() {
  const [studentId, setStudentId] = useState('');
  const [result, setResult] = useState<any>(null);

  // Credentials Database
  const credentials: Record<string, any> = {
    'SG-2026-0002': {
      title: 'Creativity and Critical Thinking Certificate · 2026',
      id: 'SG-2026-0002',
      issuer: 'SOLO GENIUS Official Student & Credential Registry'
    },
    'SG-2026-0001': {
      title: 'Musical Compose and Creative Guitar [Mid Level] Certificate · 2026',
      id: 'SG-2026-000002',
      issuer: 'SOLO GENIUS Official Student & Credential Registry',
      link: '#' // View Credential link
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = studentId.trim();
    const data = credentials[cleanId];
    setResult(data || 'invalid');
  };

  return (
    <div style={{ backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '80px auto', border: '1px solid #d4af37', padding: '40px', borderRadius: '4px', backgroundColor: '#0a0a0a' }}>
        <h2 style={{ color: '#d4af37', letterSpacing: '2px', textAlign: 'center', marginBottom: '30px' }}>STUDENT VERIFICATION</h2>
        
        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
          <input 
            type="text" 
            placeholder="ENTER CREDENTIAL ID" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={{ padding: '15px', backgroundColor: '#111', border: '1px solid #333', color: '#fff', fontSize: '16px' }}
          />
          <button type="submit" style={{ padding: '15px', backgroundColor: '#d4af37', color: '#030712', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            VERIFY CREDENTIAL
          </button>
        </form>

        {result === 'invalid' && (
          <div style={{ color: '#f00', textAlign: 'center', border: '1px solid #f00', padding: '10px' }}>Invalid Credential ID.</div>
        )}

        {result && result !== 'invalid' && (
          <div style={{ borderTop: '1px solid #333', paddingTop: '20px' }}>
            <h3 style={{ color: '#d4af37', marginBottom: '10px' }}>{result.title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '5px' }}>Credential ID: {result.id}</p>
            <p style={{ fontSize: '12px', color: '#888', marginBottom: '15px' }}>ISSUED BY: {result.issuer}</p>
            {result.link && (
              <a href={result.link} style={{ color: '#d4af37', textDecoration: 'underline', fontSize: '14px' }}>VIEW CREDENTIAL →</a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}