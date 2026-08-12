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
      id: 'SG-2026-0001',
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
    <div style={{ backgroundColor: '#030712', color: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', padding: '120px 20px 40px', boxSizing: 'border-box' }}>
      
      {/* Luxury Navigation Bar (consistent with Home) */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        padding: "18px 24px",
        width: "100%",
        backgroundColor: "rgba(3, 7, 18, 0.92)",
        backdropFilter: "blur(16px)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.6)" }}
          />
          <span style={{ fontSize: "13px", fontWeight: "700", color: "#ffffff", letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", fontSize: "11px", fontWeight: "500", letterSpacing: "1.5px", color: "#9ca3af", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "#D4AF37", textDecoration: "none" }}>VERIFY</a>
        </div>
      </nav>

      {/* Verification Box */}
      <div style={{ maxWidth: '600px', margin: '40px auto', border: '1px solid rgba(212, 175, 55, 0.4)', padding: '40px 30px', borderRadius: '6px', backgroundColor: '#0b0f19', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', boxSizing: 'border-box' }}>
        <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", display: "block", textAlign: "center" }}>
          AUTHENTICATION PORTAL
        </span>
        <h2 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', letterSpacing: '1px', textAlign: 'center', margin: '10px 0 25px 0' }}>
          STUDENT CREDENTIAL VERIFICATION
        </h2>
        
        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
          <input 
            type="text" 
            placeholder="ENTER CREDENTIAL ID (e.g. SG-2026-0001)" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={{ 
              padding: '12px 14px', 
              backgroundColor: 'rgba(3, 7, 18, 0.6)', 
              border: '1px solid rgba(212, 175, 55, 0.3)', 
              borderRadius: '4px',
              color: '#fff', 
              fontSize: '13px',
              outline: 'none',
              boxSizing: 'border-box',
              letterSpacing: '1px'
            }}
          />
          <button type="submit" style={{ 
            padding: '12px', 
            backgroundColor: '#D4AF37', 
            color: '#030712', 
            fontWeight: '700', 
            fontSize: '12px',
            letterSpacing: '1.5px',
            border: 'none', 
            borderRadius: '2px',
            cursor: 'pointer' 
          }}>
            VERIFY CREDENTIAL
          </button>
        </form>

        {result === 'invalid' && (
          <div style={{ color: '#ef4444', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.3)', backgroundColor: 'rgba(239, 68, 68, 0.05)', padding: '12px', borderRadius: '4px', fontSize: '12px', letterSpacing: '1px' }}>
            Invalid Credential ID. Please check and try again.
          </div>
        )}

        {result && result !== 'invalid' && (
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', marginTop: '10px' }}>
            <span style={{ color: '#10b981', fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', display: 'block', marginBottom: '6px' }}>
              ✓ VERIFIED AUTHENTIC RECORD
            </span>
            <h3 style={{ color: '#D4AF37', fontSize: '16px', fontWeight: '700', marginBottom: '10px', lineHeight: '1.4' }}>
              {result.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#d1d5db', marginBottom: '6px' }}>Credential ID: <strong style={{ color: '#fff' }}>{result.id}</strong></p>
            <p style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '15px', letterSpacing: '0.5px' }}>ISSUED BY: {result.issuer}</p>
            {result.link && (
              <a href={result.link} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>
                VIEW CREDENTIAL →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}