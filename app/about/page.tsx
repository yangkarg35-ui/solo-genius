'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'mentor' | 'learning_os'>('mentor');

  const focusAreas = [
    "Music Theory",
    "Guitar Performance",
    "Fingerstyle Arrangement",
    "Creativity & Composition",
    "Learning Systems",
    "Practice Design",
    "Creative Thinking"
  ];

  const teachingPhilosophy = [
    { title: "Principles First", desc: "I teach principles before techniques." },
    { title: "Understanding", desc: "I encourage understanding before memorization." },
    { title: "Originality", desc: "I value originality over imitation." },
    { title: "Systems over Shortcuts", desc: "I believe mastery is built through systems, not shortcuts." }
  ];

  const studentLearningOS = [
    { step: "01", title: "Concept", subtitle: "The Core Definition", desc: "Establishing a crystal-clear foundational definition before physical execution." },
    { step: "02", title: "Mechanism", subtitle: "How It Works", desc: "Deconstructing the structural engineering of the technique and mechanics." },
    { step: "03", title: "Observation", subtitle: "Real-world Example", desc: "Analyzing how master arrangers and rhythmic architects apply this framework." },
    { step: "04", title: "Analysis", subtitle: "Why It Works", desc: "Deep-diving into cognitive and psychological principles behind the system." },
    { step: "05", title: "Practice", subtitle: "Skill Exercise", desc: "Executing targeted, high-efficiency deliberate practice drills." },
    { step: "06", title: "Creation", subtitle: "Build Your Own", desc: "Transitioning to creation by composing or arranging original musical phrases." },
    { step: "07", title: "Feedback", subtitle: "Review & Refine", desc: "Rigorous system evaluation to eliminate inefficiencies and errors." },
    { step: "08", title: "Reflection", subtitle: "Lesson Learned", desc: "Consolidating cognitive breakthroughs into permanent mental models." }
  ];

  const experienceItems = [
    { label: "Teaching Experience", value: "2+ Years" },
    { label: "Personal Learning Journey", value: "17 Years" },
    { label: "Students Guided", value: "300+" },
    { label: "Role", value: "Founder & Creator" }
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
          <a href="/about" style={{ color: "#C5A059", textDecoration: "none" }}>About SG</a>
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
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Verify</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "12px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* HERO SECTION matching reference layout */}
      <section style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "160px 48px 80px 48px",
        position: "relative",
        boxSizing: "border-box",
        background: "linear-gradient(180deg, rgba(13,14,17,0.9) 0%, rgba(13,14,17,1) 100%)"
      }}>
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              02 ABOUT SG
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.1" }}>
              ABOUT SOLO GENIUS
            </h1>
            <p style={{ color: "#f9f9fb", fontSize: "18px", lineHeight: "1.5", margin: 0, fontWeight: "300" }}>
              We don&apos;t teach.<br />
              We build environments where the Top 5% become 1%.
            </p>
            <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>
              SG is a private ecosystem that combines curated intelligence, role models, high-level network, real projects, and an AI engine to create real transformation.
            </p>
          </motion.div>

          {/* Right Reference Box like image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              backgroundColor: "rgba(20, 21, 26, 0.8)",
              border: "1px solid rgba(197, 160, 89, 0.25)",
              borderRadius: "4px",
              padding: "32px",
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
            }}
          >
            <span style={{ fontSize: "10px", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>Our DNA</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "#e5e5e7", fontFamily: "sans-serif" }}>
              <span style={{ borderBottom: "1px solid rgba(197,160,89,0.1)", paddingBottom: "8px" }}>Originality</span>
              <span style={{ borderBottom: "1px solid rgba(197,160,89,0.1)", paddingBottom: "8px" }}>Excellence</span>
              <span style={{ borderBottom: "1px solid rgba(197,160,89,0.1)", paddingBottom: "8px" }}>Discretion</span>
              <span style={{ borderBottom: "1px solid rgba(197,160,89,0.1)", paddingBottom: "8px" }}>Leverage</span>
              <span style={{ borderBottom: "1px solid rgba(197,160,89,0.1)", paddingBottom: "8px" }}>Transformation</span>
              <span>Legacy</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Badges matching reference image */}
        <div style={{ maxWidth: "1200px", width: "100%", margin: "80px auto 0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", borderTop: "1px solid rgba(197, 160, 89, 0.15)", paddingTop: "40px" }}>
          {[
            { title: "Selective by Design", icon: "⊙" },
            { title: "Discreet by Nature", icon: "回" },
            { title: "Excellence by Standard", icon: "⌘" },
            { title: "Impact by Result", icon: "⌖" },
            { title: "Legacy by Purpose", icon: "⌭" }
          ].map((badge, idx) => (
            <div key={idx} style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
              <span style={{ fontSize: "20px", color: "#C5A059" }}>{badge.icon}</span>
              <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#f9f9fb", fontFamily: "sans-serif", textTransform: "uppercase" }}>{badge.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CONTENT SECTION (Tabs: Mentor & Learning OS) */}
      <section style={{ maxWidth: "1050px", margin: "40px auto 100px auto", padding: "0 24px", boxSizing: "border-box" }}>
        
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {/* TAB SWITCHER */}
          <div style={{ 
            display: "inline-flex", 
            backgroundColor: "rgba(20, 21, 26, 0.9)", 
            border: "1px solid rgba(197, 160, 89, 0.3)", 
            borderRadius: "0px", 
            padding: "4px", 
            gap: "4px"
          }}>
            <button 
              onClick={() => setActiveTab('mentor')}
              style={{
                backgroundColor: activeTab === 'mentor' ? "#C5A059" : "transparent",
                color: activeTab === 'mentor' ? "#0d0e11" : "#e5e5e7",
                border: "none",
                padding: "10px 24px",
                borderRadius: "0px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                transition: "all 0.3s ease"
              }}
            >
              MEET YOUR MENTOR
            </button>
            
            <button 
              onClick={() => setActiveTab('learning_os')}
              style={{
                backgroundColor: activeTab === 'learning_os' ? "#C5A059" : "transparent",
                color: activeTab === 'learning_os' ? "#0d0e11" : "#e5e5e7",
                border: "none",
                padding: "10px 24px",
                borderRadius: "0px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2px",
                cursor: "pointer",
                fontFamily: "sans-serif",
                transition: "all 0.3s ease"
              }}
            >
              STUDENT LEARNING OS
            </button>
          </div>
        </div>

        {activeTab === 'mentor' ? (
          <div>
            {/* FOUNDER CARD */}
            <div style={{
              display: "flex",
              gap: "32px",
              alignItems: "stretch",
              justifyContent: "center",
              marginBottom: "60px",
              flexWrap: "wrap"
            }}>
              <div style={{
                width: "240px",
                height: "340px",
                borderRadius: "2px",
                overflow: "hidden",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                backgroundColor: "#14151a",
                flexShrink: 0
              }}>
                <img 
                  src="/yang.jpeg" 
                  alt="Yang Karg - Founder" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} 
                />
              </div>

              <div style={{
                flex: "1",
                minWidth: "300px",
                backgroundColor: "rgba(20, 21, 26, 0.7)",
                border: "1px solid rgba(197, 160, 89, 0.2)",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box"
              }}>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  SOLO GENIUS ARCHITECT
                </span>
                <h2 style={{ fontSize: "28px", fontWeight: "400", color: "#f9f9fb", margin: "0 0 12px 0" }}>
                  Yang Karg
                </h2>
                <div style={{ width: "40px", height: "1px", backgroundColor: "#C5A059", marginBottom: "20px" }} />
                <p style={{ color: "#a1a1a6", fontSize: "14px", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                  &ldquo;I don&apos;t believe great musicians are created through memorization. I believe they are built through understanding, deliberate practice, and original thinking.&rdquo;
                </p>
                <p style={{ color: "#e5e5e7", fontSize: "13.5px", lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>
                  For me, music is not the destination—it is the medium through which people discover how to think, create, and express themselves.
                </p>
              </div>
            </div>

            {/* Areas of Focus */}
            <div style={{ marginBottom: "60px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#f9f9fb", marginBottom: "20px", letterSpacing: "1px" }}>Areas of Focus</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                {focusAreas.map((area, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(20, 21, 26, 0.5)",
                    border: "1px solid rgba(197, 160, 89, 0.15)",
                    padding: "16px",
                    color: "#e5e7eb",
                    fontSize: "12.5px",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px"
                  }}>
                    ✦ {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div style={{ marginBottom: "60px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#f9f9fb", marginBottom: "20px", letterSpacing: "1px" }}>Teaching Philosophy</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                {teachingPhilosophy.map((phil, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(20, 21, 26, 0.5)",
                    border: "1px solid rgba(197, 160, 89, 0.15)",
                    padding: "24px",
                    boxSizing: "border-box"
                  }}>
                    <h4 style={{ color: "#C5A059", fontSize: "14px", fontWeight: "500", margin: "0 0 8px 0", fontFamily: "sans-serif" }}>{phil.title}</h4>
                    <p style={{ color: "#8e8e93", fontSize: "13px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>{phil.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#f9f9fb", marginBottom: "20px", letterSpacing: "1px" }}>Background & Metrics</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
                {experienceItems.map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(20, 21, 26, 0.5)",
                    border: "1px solid rgba(197, 160, 89, 0.25)",
                    padding: "24px",
                    textAlign: "center"
                  }}>
                    <span style={{ color: "#C5A059", fontSize: "22px", fontWeight: "700", display: "block", marginBottom: "6px", fontFamily: "sans-serif" }}>
                      {item.value}
                    </span>
                    <span style={{ color: "#8e8e93", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "400", color: "#f9f9fb", margin: "0 0 16px 0" }}>Student Learning OS</h2>
              <p style={{ color: "#8e8e93", fontSize: "14px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                An 8-stage operating framework engineered to convert technical practice into permanent mental models.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              {studentLearningOS.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: "rgba(20, 21, 26, 0.6)",
                  border: "1px solid rgba(197, 160, 89, 0.2)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", fontFamily: "sans-serif" }}>
                        STAGE — {item.step}
                      </span>
                      <span style={{ color: "#8e8e93", fontSize: "11px", fontStyle: "italic" }}>
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#f9f9fb", margin: "0 0 8px 0" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#8e8e93", fontSize: "13px", lineHeight: "1.6", margin: 0, fontFamily: "sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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