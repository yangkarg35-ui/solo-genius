'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, CheckCircle } from 'lucide-react';

export default function EnterPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

      {/* ENTER THE ENVIRONMENT SECTION */}
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
          {/* Left Column: Text & Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              APPLICATION FOR ENTRY
            </span>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.15" }}>
              ENTER THE<br />ENVIRONMENT
            </h1>
            <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", letterSpacing: "0.5px", margin: 0, fontFamily: "sans-serif", maxWidth: "450px" }}>
              This is not for everyone.<br />
              It&apos;s for those who are ready for a higher standard.
            </p>

            {/* Checkmark List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "10px 0", fontFamily: "sans-serif" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#e5e5e7", fontSize: "13px" }}>
                <CheckCircle size={16} color="#C5A059" /> Exclusive Access
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#e5e5e7", fontSize: "13px" }}>
                <CheckCircle size={16} color="#C5A059" /> Carefully Selected Members
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#e5e5e7", fontSize: "13px" }}>
                <CheckCircle size={16} color="#C5A059" /> Transformation Guaranteed
              </div>
            </div>

            {/* Action Button linking to /apply */}
            <div>
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
                Begin Application <ArrowRight size={12} />
              </a>
            </div>

            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", fontFamily: "sans-serif", marginTop: "10px" }}>
              BY INVITATION OR APPLICATION ONLY
            </div>
          </div>

          {/* Right Column: High-End Environment Visual Vibe */}
          <div style={{
            position: "relative",
            aspectRatio: "4/5",
            backgroundColor: "#14151a",
            border: "1px solid rgba(197, 160, 89, 0.2)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img
              src="/owner.jpg"
              alt="SG Environment"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%) contrast(1.2) brightness(0.5)"
              }}
            />
            <div style={{
              position: "absolute",
              bottom: "30px",
              textAlign: "center",
              zIndex: 2,
              fontFamily: "sans-serif"
            }}>
              <div style={{ fontSize: "12px", color: "#C5A059", letterSpacing: "3px", fontWeight: "600" }}>SG</div>
              <div style={{ fontSize: "9px", color: "#a1a1a6", letterSpacing: "2px", marginTop: "4px" }}>PRIVATE ENTRANCE</div>
            </div>
          </div>
        </motion.div>
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
            <a href="/enter" style={{ color: "#8e8e93", textDecoration: "none" }}>Enter</a>
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