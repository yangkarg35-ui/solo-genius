'use client';
import { useState } from 'react';

export default function VerifyPage() {
  const [credentialId, setCredentialId] = useState('SG-2026-0001');
  const [verified, setVerified] = useState(true);

  return (
    <div style={{
      backgroundColor: "#02040a",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        padding: "20px 32px",
        width: "100%",
        backgroundColor: "rgba(2, 4, 10, 0.85)",
        backdropFilter: "blur(20px)",
        position: "fixed",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.5)" }}
          />
          <span style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff", letterSpacing: "3px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "11px", fontWeight: "500", letterSpacing: "2px", color: "#888888", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "#D4AF37", textDecoration: "none" }}>VERIFY</a>
        </div>

        <div>
          <a href="#" style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.03) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            padding: "9px 18px",
            borderRadius: "1px",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            color: "#D4AF37",
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}>
            VIP ACCESS
          </a>
        </div>
      </nav>

      {/* Main Verification Container */}
      <main style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "140px 20px 80px",
        boxSizing: "border-box"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "580px",
          backgroundColor: "rgba(10, 14, 23, 0.75)",
          backgroundImage: "linear-gradient(145deg, rgba(212,175,55,0.03) 0%, transparent 100%)",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          borderRadius: "4px",
          padding: "45px 40px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.05)",
          boxSizing: "border-box",
          backdropFilter: "blur(10px)"
        }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{
              color: "#D4AF37",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px"
            }}>
              Authentication Portal
            </span>
            <h1 style={{
              fontSize: "clamp(20px, 3vw, 24px)",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#ffffff",
              margin: 0
            }}>
              STUDENT CREDENTIAL VERIFICATION
            </h1>
          </div>

          {/* Input Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            <div style={{ position: "relative" }}>
              <input 
                type="text" 
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                placeholder="ENTER CREDENTIAL ID (e.g. SG-2026-0001)"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(3, 7, 18, 0.9)",
                  border: "1px solid rgba(212, 175, 55, 0.35)",
                  borderRadius: "2px",
                  padding: "16px 20px",
                  color: "#ffffff",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.3s ease"
                }}
              />
            </div>

            <button 
              onClick={() => setVerified(true)}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #D4AF37 0%, #aa8c2c 100%)",
                border: "none",
                borderRadius: "2px",
                padding: "16px",
                color: "#030712",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.2s ease, transform 0.1s ease",
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.2)"
              }}
            >
              VERIFY CREDENTIAL
            </button>
          </div>

          {/* Verification Result Box */}
          {verified && (
            <div style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "28px",
              animation: "fadeIn 0.4s ease"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ color: "#34d399", fontSize: "14px" }}>✦</span>
                <span style={{ color: "#34d399", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Verified Authentic Record
                </span>
              </div>

              <h3 style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#ffffff",
                letterSpacing: "0.5px",
                margin: "0 0 10px 0",
                lineHeight: "1.5"
              }}>
                Musical Compose and Creative Guitar [Mid Level] Certificate · 2026
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                <p style={{ color: "#9ca3af", fontSize: "11.5px", letterSpacing: "1px", margin: 0 }}>
                  Credential ID: <span style={{ color: "#ffffff", fontWeight: "600" }}>{credentialId}</span>
                </p>
                <p style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "1px", margin: 0, textTransform: "uppercase" }}>
                  Issued By: Solo Genius Official Student & Credential Registry
                </p>
              </div>

              <div>
                <a href="#" style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "opacity 0.2s"
                }}>
                  VIEW CREDENTIAL →
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ 
        padding: "30px 40px", 
        borderTop: "1px solid rgba(255, 255, 255, 0.06)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap",
        gap: "15px",
        color: "#6b7280", 
        fontSize: "10px", 
        letterSpacing: "2px",
        boxSizing: "border-box"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
        </div>
      </footer>
    </div>
  );
}