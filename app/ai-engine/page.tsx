'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Cpu, Brain, Network, Sliders, Zap, TrendingUp } from 'lucide-react';

export default function AIEnginePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const aiFeatures = [
    { title: "AI Mentor", desc: "Uncompromising guidance tailored to your exact creative frequency.", icon: Brain },
    { title: "Pattern Recognition", desc: "Extract underlying frameworks from top-tier masterpieces.", icon: Network },
    { title: "Smart Matching", desc: "Connect with the right role models, peers, and opportunities.", icon: Sliders },
    { title: "Personalized Strategy", desc: "Custom roadmaps built specifically for your unique evolution.", icon: Cpu },
    { title: "Real-time Feedback", desc: "Instant microscopic refinement on your execution and output.", icon: Zap },
    { title: "Growth Acceleration", desc: "Compound your trajectory and bypass conventional learning curves.", icon: TrendingUp }
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
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Ecosystem</a>
          <a href="/role-models" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Role Models</a>
          <a href="/journey" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Journey</a>
          <a href="/ai-engine" style={{ color: "#C5A059", textDecoration: "none" }}>AI & Engine</a>
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
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Verify</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* SG AI & TRANSFORMATION ENGINE SECTION (EXACT REFERENCE MATCH) */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "160px 24px 60px 24px",
        position: "relative",
        boxSizing: "border-box",
        maxWidth: "1300px",
        margin: "0 auto"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
            width: "100%"
          }}
        >
          {/* Left Text Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              SG INTELLIGENCE SYSTEM
            </span>
            <h1 style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.15" }}>
              SG AI &amp;<br />
              TRANSFORMATION ENGINE
            </h1>
            <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", letterSpacing: "0.5px", margin: 0, fontFamily: "sans-serif", maxWidth: "480px" }}>
              Our AI is not for information.<br />
              It&apos;s for leverage, insight, combination, and acceleration.
            </p>
          </div>

          {/* Right Image Display matching reference */}
          <div style={{
            position: "relative",
            aspectRatio: "16/10",
            backgroundColor: "#14151a",
            border: "1px solid rgba(197, 160, 89, 0.2)",
            overflow: "hidden"
          }}>
            <img
              src="/owner.jpg"
              alt="SG AI Engine"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%) contrast(1.2) brightness(0.6)"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "16px",
              background: "linear-gradient(180deg, transparent 0%, rgba(13,14,17,0.9) 100%)",
              fontFamily: "sans-serif"
            }}>
              <div style={{ fontSize: "10px", color: "#C5A059", letterSpacing: "2px" }}>SG INTELLIGENCE CUBE</div>
            </div>
          </div>
        </motion.div>

        {/* 6 Feature Cards & See How SG AI Works Button */}
        <div style={{ width: "100%", marginTop: "80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginBottom: "50px"
          }}>
            {aiFeatures.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <div key={idx} style={{
                  backgroundColor: "rgba(20, 21, 26, 0.7)",
                  border: "1px solid rgba(197, 160, 89, 0.15)",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxSizing: "border-box"
                }}>
                  <IconComponent size={20} color="#C5A059" />
                  <h3 style={{ fontSize: "14px", fontWeight: "400", color: "#f9f9fb", margin: 0, letterSpacing: "-0.2px" }}>
                    {feat.title}
                  </h3>
                  <p style={{ color: "#8e8e93", fontSize: "12px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
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
              See How SG AI Works <ArrowRight size={12} />
            </a>
          </div>
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
            <a href="/ai-engine" style={{ color: "#8e8e93", textDecoration: "none" }}>AI & Engine</a>
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