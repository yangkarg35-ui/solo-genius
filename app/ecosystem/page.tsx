'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function EcosystemPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ecosystemNodes = [
    { title: "Identity Engine", desc: "The foundational core shaping absolute artistic autonomy." },
    { title: "Role Model Constellation", desc: "Studying elite frameworks from history and industry." },
    { title: "Intelligence Library", desc: "Uncompromising depth of musical and systemic knowledge." },
    { title: "AI Core & Tools", desc: "Leveraging modern intelligence for accelerated creation." },
    { title: "Capability Engine", desc: "Rigorous daily mechanical and mental execution." },
    { title: "Action Lab", desc: "Where theory transitions instantly into practical mastery." },
    { title: "Production Vault", desc: "Securing intellectual property and high-end output." },
    { title: "Perfectionist Edge", desc: "The standard that separates elite work from the rest." },
    { title: "Master Guidance", desc: "Direct high-end connection and uncompromised feedback." },
    { title: "Experience & Rituals", desc: "Private immersive spaces for deep creative flow." }
  ];

  return (
    <div style={{
      backgroundColor: "#0d0e11",
      color: "#e5e5e7",
      minHeight: "100vh",
      fontFamily: "var(--font-serif), 'Didot', 'Bodoni MT', 'Times New Roman', serif",
      scrollBehavior: "smooth",
      overflowX: "hidden",
      width: "100%",
      boxSizing: "border-box"
    }}>
      {/* NAVIGATION BAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 36px",
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
            style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(197, 160, 89, 0.4)" }}
          />
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            SG
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div style={{ display: "flex", gap: "22px", fontSize: "10px", fontWeight: "400", letterSpacing: "1.5px", color: "#8e8e93", fontFamily: "sans-serif" }} className="hidden xl:flex items-center">
          <a href="/explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Explore</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>About SG</a>
          <a href="/ecosystem" style={{ color: "#C5A059", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Role Models</a>
          <a href="/journey" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Journey</a>
          <a href="/ai-engine" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>AI & Engine</a>
          <a href="/inner-circle" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Inner Circle</a>
          <a href="/impact" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Impact</a>
          <a href="/verify" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Verify</a>
        </div>

        <div className="hidden xl:flex">
          <a 
            href="/apply"
            style={{
              backgroundColor: "#C5A059",
              border: "1px solid #C5A059",
              padding: "10px 22px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#0d0e11",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif"
            }}
          >
            Apply Now
          </a>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          style={{ background: "none", border: "none", color: "#C5A059", cursor: "pointer" }}
          className="xl:hidden"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
          backgroundColor: "#0d0e11",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "24px",
          fontFamily: "sans-serif",
          overflowY: "auto"
        }}>
          <a href="/explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Explore</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Verify</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* ECOSYSTEM HERO / CENTRAL UI SECTION */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "160px 24px 80px 24px",
        position: "relative",
        boxSizing: "border-box",
        textAlign: "center"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "50px", zIndex: 2 }}
        >
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            03 ECOSYSTEM
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0 }}>
            THE SG ECOSYSTEM
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "15px", letterSpacing: "1px", margin: 0, fontFamily: "sans-serif" }}>
            A Complete Environment for Total Transformation
          </p>
        </motion.div>

        {/* Central Ecosystem Diagram Container matching reference image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "650px",
            height: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(197, 160, 89, 0.2)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,21,26,0.8) 0%, rgba(13,14,17,0.95) 100%)",
            zIndex: 2,
            margin: "0 auto"
          }}
        >
          {/* Center Core: YOU / SG YOU */}
          <div style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            backgroundColor: "#0d0e11",
            border: "2px solid #C5A059",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px rgba(197, 160, 89, 0.2)",
            zIndex: 3
          }}>
            <span style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", fontFamily: "sans-serif" }}>YOU</span>
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", fontFamily: "sans-serif" }}>SG</span>
            <span style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", fontFamily: "sans-serif" }}>YOU</span>
          </div>
        </motion.div>

        {/* Pillars / Nodes Grid Breakdown */}
        <div style={{ maxWidth: "1200px", width: "100%", margin: "100px auto 0 auto", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              ECOSYSTEM DIMENSIONS
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {ecosystemNodes.map((node, idx) => (
              <div key={idx} style={{
                backgroundColor: "rgba(20, 21, 26, 0.6)",
                border: "1px solid rgba(197, 160, 89, 0.12)",
                padding: "32px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", fontFamily: "sans-serif" }}>
                  NODE 0{idx + 1}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: "400", color: "#f9f9fb", margin: 0, letterSpacing: "-0.2px" }}>
                  {node.title}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: "80px", zIndex: 2 }}>
          <a href="/apply" style={{
            backgroundColor: "#C5A059",
            color: "#0d0e11",
            padding: "16px 36px",
            borderRadius: "0px",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "2px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "sans-serif"
          }}>
            Apply for Access <ArrowRight size={12} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        padding: "80px 48px", 
        borderTop: "1px solid rgba(197, 160, 89, 0.12)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "flex-start", 
        flexWrap: "wrap", 
        gap: "40px",
        boxSizing: "border-box",
        fontFamily: "sans-serif"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "300px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "#C5A059" }}>SOLO GENIUS</span>
          <p style={{ color: "#8e8e93", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
            An environment for creative thinkers. Private Exclusive.
          </p>
        </div>

        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", fontSize: "11px", letterSpacing: "2px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>NAVIGATION</span>
            <a href="/explore" style={{ color: "#8e8e93", textDecoration: "none" }}>Explore</a>
            <a href="/about" style={{ color: "#8e8e93", textDecoration: "none" }}>About SG</a>
            <a href="/verify" style={{ color: "#8e8e93", textDecoration: "none" }}>Verify</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>ACCESS</span>
            <a href="/ecosystem" style={{ color: "#8e8e93", textDecoration: "none" }}>Ecosystem</a>
            <a href="/apply" style={{ color: "#8e8e93", textDecoration: "none" }}>Apply Now</a>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(197,160,89,0.06)", color: "#636366", fontSize: "10px", letterSpacing: "1.5px" }}>
          <p style={{ margin: 0 }}>© 2026 SOLO GENIUS. ALL RIGHTS RESERVED.</p>
          <p style={{ margin: 0 }}>BY INVITATION ONLY</p>
        </div>
      </footer>
    </div>
  );
}