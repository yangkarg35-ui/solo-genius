'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

// Credential Registry Map linking IDs to specific images and certificate details
const credentialRegistry: Record<string, { title: string; image: string; holder: string; date: string }> = {
  "SG-2026-0001": {
    title: "Musical Compose and Creative Guitar [Mid Level] Certificate",
    image: "/0001.jpg",
    holder: "Verified Student",
    date: "2026"
  },
  "SG-2026-0002": {
    title: "Advanced Fingerstyle & Rhythm Architecture Masterclass",
    image: "/0002.jpg",
    holder: "Verified Student",
    date: "2026"
  },
  "SG-2026-0009": {
    title: "Solo Genius Professional Mastery & Artistic Execution",
    image: "/std3.jpg",
    holder: "Verified Student",
    date: "2026"
  }
};

export default function VerifyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [credentialId, setCredentialId] = useState('');
  const [searchId, setSearchId] = useState('');
  const [verifiedData, setVerifiedData] = useState<{ title: string; image: string; holder: string; date: string } | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = credentialId.trim();
    if (!cleanId) return;
    if (credentialRegistry[cleanId]) {
      setVerifiedData(credentialRegistry[cleanId]);
      setSearchId(cleanId);
      setNotFound(false);
    } else {
      setVerifiedData(null);
      setSearchId(cleanId);
      setNotFound(true);
    }
  };

  return (
    <div style={{
      backgroundColor: "#0d0e11",
      color: "#e5e5e7",
      minHeight: "100vh",
      fontFamily: "var(--font-serif), 'Didot', 'Bodoni MT', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%",
      position: "relative",
      boxSizing: "border-box"
    }}>
      {/* Background Image Layer */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/owner.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
        filter: "brightness(0.3) contrast(1.1) saturate(0.9)",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(13,14,17,0.7) 0%, rgba(13,14,17,0.92) 80%, #0d0e11 100%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* NAVIGATION BAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        backgroundColor: "rgba(13, 14, 17, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.12)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(197, 160, 89, 0.4)" }}
          />
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            SOLO GENIUS
          </span>
        </div>

        {/* Desktop Nav Items (Hidden on mobile & tablets, shown on xl screens) */}
        <div style={{ display: "none" }} className="xl:flex items-center gap-5 text-[10px] tracking-[1.5px] text-[#8e8e93] font-sans">
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>Explore</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" style={{ color: "inherit", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" style={{ color: "inherit", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" style={{ color: "inherit", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" style={{ color: "inherit", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" style={{ color: "inherit", textDecoration: "none" }}>Impact</a>
          <a href="/verify" style={{ color: "#C5A059", textDecoration: "none" }}>Verify</a>
        </div>

        <div style={{ display: "none" }} className="xl:flex items-center gap-3">
          <a 
            href="/apply"
            style={{
              backgroundColor: "#C5A059",
              border: "1px solid #C5A059",
              padding: "8px 18px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#0d0e11",
              textDecoration: "none",
              fontFamily: "sans-serif"
            }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger Button (Always visible on mobile/tablet) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          style={{ background: "none", border: "none", color: "#C5A059", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}
          className="xl:hidden"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(13, 14, 17, 0.98)",
          backdropFilter: "blur(16px)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          padding: "80px 24px 40px 24px",
          fontFamily: "sans-serif",
          overflowY: "auto",
          boxSizing: "border-box"
        }}>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Home</a>
          <a href="/explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Explore</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>Verify</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px 20px",
        zIndex: 1,
        boxSizing: "border-box"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            maxWidth: "720px",
            backgroundColor: "rgba(20, 21, 26, 0.85)",
            border: "1px solid rgba(197, 160, 89, 0.25)",
            borderRadius: "0px",
            padding: "36px 24px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(197, 160, 89, 0.05)",
            boxSizing: "border-box",
            backdropFilter: "blur(16px)"
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <span style={{
              color: "#C5A059",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
              fontFamily: "sans-serif"
            }}>
              Authentication Portal
            </span>
            <h1 style={{
              fontSize: "clamp(20px, 4vw, 26px)",
              fontWeight: "400",
              letterSpacing: "1px",
              color: "#f9f9fb",
              margin: 0
            }}>
              STUDENT CREDENTIAL VERIFICATION
            </h1>
          </div>

          {/* Input Form */}
          <form onSubmit={handleVerify} style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px", fontFamily: "sans-serif" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={credentialId}
                onChange={(e) => setCredentialId(e.target.value)}
                placeholder="ENTER CREDENTIAL ID (e.g. SG-2026-0009)"
                style={{
                  width: "100%",
                  backgroundColor: "rgba(13, 14, 17, 0.95)",
                  border: "1px solid rgba(197, 160, 89, 0.35)",
                  borderRadius: "0px",
                  padding: "14px 18px",
                  color: "#f9f9fb",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "sans-serif"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#C5A059",
                border: "none",
                borderRadius: "0px",
                padding: "14px",
                color: "#0d0e11",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "opacity 0.2s ease",
                fontFamily: "sans-serif"
              }}
            >
              Verify Credential
            </button>
          </form>

          {/* Not Found State */}
          {notFound && (
            <div style={{ 
              textAlign: "center", 
              padding: "16px", 
              backgroundColor: "rgba(239, 68, 68, 0.1)", 
              border: "1px solid rgba(239, 68, 68, 0.3)", 
              color: "#f87171", 
              fontSize: "11px", 
              letterSpacing: "1px",
              fontFamily: "sans-serif",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}>
              <AlertTriangle size={14} />
              Credential ID not found. Try: SG-2026-0001, SG-2026-0002, SG-2026-0009
            </div>
          )}

          {/* Verification Result Box */}
          <AnimatePresence>
            {verifiedData && !notFound && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderTop: "1px solid rgba(197, 160, 89, 0.2)",
                  paddingTop: "24px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", fontFamily: "sans-serif" }}>
                  <CheckCircle2 size={16} color="#34d399" />
                  <span style={{ color: "#34d399", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase" }}>
                    Verified Authentic Record
                  </span>
                </div>

                <h3 style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#f9f9fb",
                  letterSpacing: "0.2px",
                  margin: "0 0 10px 0",
                  lineHeight: "1.4"
                }}>
                  {verifiedData.title} · {verifiedData.date}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px", fontFamily: "sans-serif" }}>
                  <p style={{ color: "#8e8e93", fontSize: "11px", letterSpacing: "1px", margin: 0 }}>
                    Credential ID: <span style={{ color: "#f9f9fb", fontWeight: "600" }}>{searchId}</span>
                  </p>
                  <p style={{ color: "#8e8e93", fontSize: "10px", letterSpacing: "1px", margin: 0, textTransform: "uppercase" }}>
                    Issued By: Solo Genius Official Student & Credential Registry
                  </p>
                </div>

                {/* Certificate Image Preview Box */}
                <div style={{
                  width: "100%",
                  borderRadius: "0px",
                  overflow: "hidden",
                  border: "1px solid rgba(197, 160, 89, 0.3)",
                  backgroundColor: "#0d0e11",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  marginBottom: "16px",
                  boxSizing: "border-box"
                }}>
                  <div style={{
                    backgroundColor: "rgba(197, 160, 89, 0.1)",
                    padding: "8px 14px",
                    fontSize: "9px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                    color: "#C5A059",
                    borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
                    fontFamily: "sans-serif"
                  }}>
                    OFFICIAL DIPLOMA PREVIEW ({searchId})
                  </div>
                  <div style={{ padding: "10px", textAlign: "center" }}>
                    <img
                      src={verifiedData.image}
                      alt={`Certificate for ${searchId}`}
                      style={{
                        width: "100%",
                        maxHeight: "350px",
                        objectFit: "contain",
                        borderRadius: "0px",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif" }}>
                  <a href={verifiedData.image} target="_blank" rel="noopener noreferrer" style={{
                    color: "#C5A059",
                    fontSize: "10px",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    VIEW FULL-SIZE CERTIFICATE <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer style={{
        padding: "30px 24px",
        borderTop: "1px solid rgba(197, 160, 89, 0.12)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        color: "#8e8e93",
        fontSize: "10px",
        letterSpacing: "2px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        zIndex: 1,
        backgroundColor: "rgba(13, 14, 17, 0.95)"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About SG</a>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
        </div>
      </footer>
    </div>
  );
}