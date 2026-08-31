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
      {/* NAVIGATION BAR (FULL EXACT MATCH) */}
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
          <a href="#ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Ecosystem</a>
          <a href="#role-models" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Role Models</a>
          <a href="#journey" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Journey</a>
          <a href="#ai-engine" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>AI & Engine</a>
          <a href="#inner-circle" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Inner Circle</a>
          <a href="#impact" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Impact</a>
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
          <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="#role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="#journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="#ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>AI & Engine</a>
          <a href="#inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Verify</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* HERO SECTION MATCHING REFERENCE IMAGE */}
      <section id="explore" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "160px 24px 40px 24px",
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
          filter: "brightness(0.7) contrast(1.1) saturate(0.9)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(13,14,17,0.3) 0%, rgba(13,14,17,0.85) 80%, #0d0e11 100%)",
          zIndex: 1
        }} />

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "900px", zIndex: 2, display: "flex", flexDirection: "column", gap: "20px", width: "100%", margin: "auto 0" }}
        >
          <h1 style={{ fontSize: "clamp(40px, 6.5vw, 72px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.1" }}>
            This is Not<br />
            Education.<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>This is Elevation.</span>
          </h1>
          
          <p style={{ color: "#a1a1a6", fontSize: "16px", lineHeight: "1.7", letterSpacing: "0.5px", margin: "10px 0 24px 0", maxWidth: "550px", fontFamily: "sans-serif" }}>
            Solo Genius is an exclusive ecosystem for high achievers who are building the future.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", fontFamily: "sans-serif" }}>
            <a href="/explore" style={{
              backgroundColor: "#C5A059",
              color: "#0d0e11",
              padding: "14px 28px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.3s"
            }}>
              Explore the Environment
            </a>
            <span style={{ color: "#8e8e93", fontSize: "10px", letterSpacing: "1.5px" }}>
              By Invitation or Application Only
            </span>
          </div>
        </motion.div>

        {/* Bottom Stats Footer Matching Reference Image */}
        <div style={{
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "40px",
          borderTop: "1px solid rgba(197, 160, 89, 0.15)",
          textAlign: "center",
          fontFamily: "sans-serif"
        }}>
          <div>
            <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#f9f9fb", letterSpacing: "1px" }}>TOP 5%</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", marginTop: "4px" }}>Members Only</div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#f9f9fb", letterSpacing: "1px" }}>12+</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", marginTop: "4px" }}>Domains</div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#f9f9fb", letterSpacing: "1px" }}>100+</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", marginTop: "4px" }}>Role Models</div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "500", color: "#f9f9fb", letterSpacing: "1px" }}>∞</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", marginTop: "4px" }}>Possibilities</div>
          </div>
        </div>
      </section>

      {/* CORE DEFINITION SECTION (SG IS AN ENVIRONMENT) */}
      <section id="definition" style={{ maxWidth: "1000px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "28px" }}
        >
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            THE DEFINITION
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: "400", letterSpacing: "-0.5px", color: "#a1a1a6", lineHeight: "1.4" }}>
            <p style={{ margin: 0 }}>SG is not a school.</p>
            <p style={{ margin: 0 }}>SG is not a course platform.</p>
            <p style={{ margin: 0 }}>SG is not a content library.</p>
            <p style={{ margin: 0, color: "#f9f9fb", fontWeight: "500", fontSize: "clamp(28px, 4.5vw, 44px)" }}>
              SG is an environment.
            </p>
          </div>

          <div style={{ maxWidth: "700px", margin: "20px auto 0 auto", borderTop: "1px solid rgba(197, 160, 89, 0.2)", paddingTop: "32px" }}>
            <p style={{ color: "#e5e5e7", fontSize: "16px", lineHeight: "1.8", letterSpacing: "0.5px", margin: 0, fontFamily: "sans-serif" }}>
              An environment designed for capable people who want to become more original, more capable, more independent and more leveraged in the age of AI.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            PHILOSOPHY & MANIFESTO
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "16px 0 0 0", color: "#f9f9fb" }}>
            OUR CORE PRINCIPLES
          </h2>
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

      {/* SOLO GENIUS SYSTEM / ECOSYSTEM */}
      <section id="ecosystem" style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            THE ECOSYSTEM
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

      {/* WHO IT'S FOR */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            FOR THE FEW
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
      </section>

      {/* INVITATION / CTA */}
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
              Apply Now <ArrowRight size={12} />
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
            <a href="#ecosystem" style={{ color: "#8e8e93", textDecoration: "none" }}>Ecosystem</a>
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