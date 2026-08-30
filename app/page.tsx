'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const manifestoItems = [
    {
      num: "01",
      title: "Mastery",
      desc: "We believe mastery cannot be rushed. Uncompromising depth over superficial speed."
    },
    {
      num: "02",
      title: "Originality",
      desc: "We believe originality is more valuable than imitation. Creating absolute artistic autonomy."
    },
    {
      num: "03",
      title: "Understanding",
      desc: "We believe deep understanding outlasts memorization. Grasping the core universal laws."
    },
    {
      num: "04",
      title: "Systems",
      desc: "We believe great creators are built through systems, not shortcuts. Precision architecture."
    },
    {
      num: "05",
      title: "Quality",
      desc: "We believe quality is remembered long after speed is forgotten. The elite standard."
    },
    {
      num: "06",
      title: "Discipline",
      desc: "We believe creativity is a discipline, not an accident. Rigorous daily mechanical execution."
    },
    {
      num: "07",
      title: "Transformation",
      desc: "We believe learning should transform the way you think, not just what you know."
    },
    {
      num: "08",
      title: "Identity",
      desc: "We believe music is not the destination—it is the medium to discover your creative identity."
    }
  ];

  const systemPillars = [
    {
      num: "01",
      title: "MUSIC",
      desc: "Build musical ability and creative expression through uncompromising technical mastery."
    },
    {
      num: "02",
      title: "CREATIVITY",
      desc: "Learn how to generate original ideas instead of copying existing ones."
    },
    {
      num: "03",
      title: "THINKING",
      desc: "Develop clearer thinking, decision-making, and structural problem-solving."
    },
    {
      num: "04",
      title: "BUSINESS",
      desc: "Understand how creative ideas transition into absolute market value."
    },
    {
      num: "05",
      title: "CONTENT",
      desc: "Learn how to communicate and distribute your intellectual property."
    },
    {
      num: "06",
      title: "FINANCE",
      desc: "Build the underlying capability to understand, generate, and manage capital."
    },
    {
      num: "07",
      title: "LEARNING SYSTEM",
      desc: "Build a personal architecture for continuous acquisition and self-mastery."
    }
  ];

  const audienceItems = [
    "want to build their own identity",
    "value depth over superficial noise",
    "want to create instead of copy",
    "want skills that connect beyond one profession",
    "care about taste, thinking, and long-term growth",
    "are willing to do the rigorous daily work"
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
      {/* 05 — NAVIGATION */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 48px",
        backgroundColor: "rgba(13, 14, 17, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.12)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(197, 160, 89, 0.4)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              SG
            </span>
            <span style={{ fontSize: "9.5px", fontWeight: "500", color: "#f3f3f3", letterSpacing: "2.5px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              Solo Genius
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "32px", fontSize: "11px", fontWeight: "400", letterSpacing: "2px", color: "#8e8e93", fontFamily: "sans-serif" }} className="hidden md:flex">
          <a href="#explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Explore</a>
          <a href="#about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>About</a>
          <a href="#system" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>System</a>
          <a href="#manifesto" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Manifesto</a>
          <a href="#experience" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Experience</a>
        </div>

        <div className="hidden md:flex">
          <a 
            href="/apply"
            style={{
              background: "transparent",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "10px 24px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "500",
              letterSpacing: "2px",
              color: "#C5A059",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif"
            }}
          >
            APPLY FOR ENROLLMENT <ArrowRight size={12} />
          </a>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          style={{ background: "none", border: "none", color: "#C5A059", cursor: "pointer" }}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
          gap: "24px",
          padding: "24px",
          fontFamily: "sans-serif"
        }}>
          <a href="#explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "3px", color: "#e5e5e7", textDecoration: "none" }}>EXPLORE</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "3px", color: "#e5e5e7", textDecoration: "none" }}>ABOUT</a>
          <a href="#system" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "3px", color: "#e5e5e7", textDecoration: "none" }}>SYSTEM</a>
          <a href="#manifesto" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "3px", color: "#e5e5e7", textDecoration: "none" }}>MANIFESTO</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "3px", color: "#e5e5e7", textDecoration: "none" }}>EXPERIENCE</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "24px", border: "1px solid rgba(197, 160, 89, 0.4)", padding: "12px 32px", fontSize: "11px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>APPLY FOR ENROLLMENT →</a>
        </div>
      )}

      {/* 06 — HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px 24px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/owner.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          filter: "brightness(0.75) contrast(1.1) saturate(0.9)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(13,14,17,0.4) 0%, rgba(13,14,17,0.95) 100%)",
          zIndex: 1
        }} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "850px", zIndex: 2, display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}
        >
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "500", fontFamily: "sans-serif" }}>
            Private Exclusive Space / 0.000833% Segment
          </span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.1" }}>
            BECOME MORE THAN<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>A MUSICIAN.</span>
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", letterSpacing: "0.5px", margin: "0 auto", maxWidth: "600px", padding: "0 10px", fontFamily: "sans-serif" }}>
            A private learning environment for people who want to think deeper, create better, and build their own identity.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", width: "100%", marginTop: "12px" }}>
            <a href="/apply" style={{
              backgroundColor: "#f5f5f7",
              color: "#0d0e11",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.3s",
              fontFamily: "sans-serif"
            }}>
              APPLY FOR ENROLLMENT <ArrowRight size={12} />
            </a>
            <a href="#manifesto" style={{
              background: "transparent",
              color: "#C5A059",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              textAlign: "center",
              display: "inline-block",
              fontFamily: "sans-serif"
            }}>
              Explore the Manifesto
            </a>
          </div>
        </motion.div>
      </section>

      {/* MANIFESTO SECTION (PDF Integrated) */}
      <section id="manifesto" style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            01 / PHILOSOPHY & MANIFESTO
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "16px 0 0 0", color: "#f9f9fb" }}>
            OUR CORE PRINCIPLES
          </h2>
          <p style={{ color: "#8e8e93", fontSize: "14px", maxWidth: "600px", margin: "12px auto 0 auto", lineHeight: "1.7", fontFamily: "sans-serif" }}>
            People don't buy guitar. They buy identity. Uncompromising depth for those who know the brand.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {manifestoItems.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(20, 21, 26, 0.6)", 
              border: "1px solid rgba(197, 160, 89, 0.12)", 
              borderRadius: "0px", 
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "500", letterSpacing: "2.5px", fontFamily: "sans-serif" }}>
                  {item.num} — PRINCIPLE
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: "400", color: "#f9f9fb", margin: "14px 0 12px 0", letterSpacing: "-0.2px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — TRANSFORMATION SECTION */}
      <section style={{ backgroundColor: "#14151a", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)", borderBottom: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            02 / TRANSFORMATION
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", letterSpacing: "-1px", margin: "24px 0 50px 0", color: "#f9f9fb" }}>
            FROM LEARNING TO ELEVATION.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", margin: "50px 0" }}>
            {["MUSIC", "CREATIVITY", "THINKING", "TASTE", "BUSINESS", "SELF-MASTERY"].map((step, idx, arr) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", fontFamily: "sans-serif" }}>
                <span style={{ fontSize: "13px", fontWeight: "500", letterSpacing: "3px", color: idx === arr.length - 1 ? "#C5A059" : "#8e8e93" }}>
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span style={{ color: "#C5A059", fontSize: "12px", opacity: 0.6 }}>↓</span>
                )}
              </div>
            ))}
          </div>

          <p style={{ color: "#a1a1a6", fontSize: "15px", maxWidth: "600px", margin: "40px auto 0 auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Solo Genius doesn't separate skills into isolated subjects. We connect them into one system designed around the person you are becoming.
          </p>
        </div>
      </section>

      {/* 09 — SOLO GENIUS SYSTEM */}
      <section id="system" style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            03 / THE SYSTEM
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "16px 0 0 0", color: "#f9f9fb" }}>
            ONE ENVIRONMENT. MULTIPLE DIMENSIONS.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {systemPillars.map((pillar, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(20, 21, 26, 0.6)", 
              border: "1px solid rgba(197, 160, 89, 0.12)", 
              borderRadius: "0px", 
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "2.5px", fontFamily: "sans-serif" }}>
                  {pillar.num} — PILLAR
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb", margin: "16px 0 12px 0", letterSpacing: "-0.2px" }}>
                  {pillar.title}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 — EXPERIENCE / ENVIRONMENT */}
      <section id="experience" style={{ backgroundColor: "#14151a", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            04 / THE ENVIRONMENT
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", letterSpacing: "-1px", margin: "20px 0 24px 0", color: "#f9f9fb" }}>
            THE ENVIRONMENT MATTERS.
          </h2>
          <p style={{ color: "#a1a1a6", fontSize: "15px", maxWidth: "600px", margin: "0 auto 60px auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Transformation rarely comes from information alone. It comes from the environment surrounding the learner.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", textAlign: "left" }}>
            <div style={{ backgroundColor: "#0d0e11", border: "1px solid rgba(197,160,89,0.12)", padding: "40px" }}>
              <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "2px", fontWeight: "600", fontFamily: "sans-serif" }}>OPEN</span>
              <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb", margin: "12px 0 8px 0" }}>Solo Genius Open Courseware</h3>
              <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>Foundational access points for structural initiation.</p>
            </div>
            <div style={{ backgroundColor: "#0d0e11", border: "1px solid rgba(197,160,89,0.12)", padding: "40px" }}>
              <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "2px", fontWeight: "600", fontFamily: "sans-serif" }}>PRIVATE</span>
              <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb", margin: "12px 0 8px 0" }}>SG Library</h3>
              <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>Restricted archives for dedicated internal growth.</p>
            </div>
            <div style={{ backgroundColor: "#0d0e11", border: "1px solid rgba(197,160,89,0.12)", padding: "40px" }}>
              <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "2px", fontWeight: "600", fontFamily: "sans-serif" }}>STUDIO</span>
              <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb", margin: "12px 0 8px 0" }}>SG Studio</h3>
              <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>Selective entry environment for absolute mastery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — WHO IT'S FOR */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            05 / FOR THE FEW
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", letterSpacing: "-1px", margin: "16px 0 0 0", color: "#f9f9fb" }}>
            NOT FOR EVERYONE. AND THAT'S THE POINT.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "60px", fontFamily: "sans-serif" }}>
          <p style={{ color: "#a1a1a6", fontSize: "15px", marginBottom: "10px" }}>Solo Genius is for people who:</p>
          {audienceItems.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "16px", color: "#e5e5e7", fontSize: "15px", letterSpacing: "0.5px" }}>
              <span style={{ width: "4px", height: "4px", backgroundColor: "#C5A059", borderRadius: "50%" }}></span>
              {item}
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "1px solid rgba(197,160,89,0.4)", paddingLeft: "24px", fontFamily: "sans-serif" }}>
          <p style={{ color: "#a1a1a6", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
            If you are only looking for guitar lessons, there are simpler places to go.<br />
            If you are looking for elevation and transformation, you're in the right place.
          </p>
        </div>
      </section>

      {/* 12 — INVITATION / CTA */}
      <section style={{ backgroundColor: "#14151a", padding: "160px 24px", boxSizing: "border-box", textAlign: "center", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "400", letterSpacing: "-1px", margin: "0 0 20px 0", color: "#f9f9fb", lineHeight: "1.15" }}>
            YOUR NEXT VERSION<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>STARTS WITH YOUR ENVIRONMENT.</span>
          </h2>
          <p style={{ color: "#a1a1a6", fontSize: "15px", maxWidth: "550px", margin: "0 auto 40px auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Explore the Solo Genius environment and decide whether it belongs in your journey.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
            <a href="/apply" style={{
              backgroundColor: "#f5f5f7",
              color: "#0d0e11",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              APPLY FOR ENROLLMENT <ArrowRight size={12} />
            </a>
            <a href="#explore" style={{
              background: "transparent",
              color: "#C5A059",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none"
            }}>
              Explore Solo Genius
            </a>
          </div>
        </div>
      </section>

      {/* 13 — FOOTER */}
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
            A private learning environment for creative thinkers. Private Exclusive.
          </p>
        </div>

        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", fontSize: "11px", letterSpacing: "2px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>NAVIGATION</span>
            <a href="#explore" style={{ color: "#8e8e93", textDecoration: "none" }}>Explore</a>
            <a href="#about" style={{ color: "#8e8e93", textDecoration: "none" }}>About</a>
            <a href="#system" style={{ color: "#8e8e93", textDecoration: "none" }}>System</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>ACCESS</span>
            <a href="#experience" style={{ color: "#8e8e93", textDecoration: "none" }}>Experience</a>
            <a href="/verify" style={{ color: "#8e8e93", textDecoration: "none" }}>Verify</a>
            <a href="/apply" style={{ color: "#8e8e93", textDecoration: "none" }}>Apply</a>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(197,160,89,0.06)", color: "#636366", fontSize: "10px", letterSpacing: "1.5px" }}>
          <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
          <p style={{ margin: 0 }}>PRIVATE EXCLUSIVE (0.000833%)</p>
        </div>
      </footer>
    </div>
  );
}