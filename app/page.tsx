'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Lock } from 'lucide-react';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
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
      desc: "We believe music is not the destination-it is the medium to discover your creative identity."
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

  const totalSheets = 4;

  return (
    <div style={{
      backgroundColor: "#0d0e11",
      color: "#e5e5e7",
      minHeight: "100vh",
      fontFamily: "var(--font-serif), 'Didot', 'Bodoni MT', 'Times New Roman', serif",
      overflowX: "hidden",
      width: "100%",
      boxSizing: "border-box",
      position: "relative"
    }}>
      {/* NAVIGATION BAR - FULL RESPONSIVE FIX */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        backgroundColor: "rgba(13, 14, 17, 0.98)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.12)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1px solid rgba(197, 160, 89, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C5A059", fontSize: "10px", fontWeight: "700" }}>SG</div>
          <span style={{ fontSize: "10px", fontWeight: "700", color: "#C5A059", letterSpacing: "2.5px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            SOLO GENIUS
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div style={{ display: "none", gap: "18px", fontSize: "10px", fontWeight: "400", letterSpacing: "1.5px", color: "#8e8e93", fontFamily: "sans-serif" }} className="xl:flex items-center">
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>Explore</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" style={{ color: "inherit", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" style={{ color: "inherit", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" style={{ color: "inherit", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" style={{ color: "inherit", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" style={{ color: "inherit", textDecoration: "none" }}>Impact</a>
          <a href="/verify" style={{ color: "inherit", textDecoration: "none" }}>Verify</a>
        </div>

        <div style={{ display: "none" }} className="xl:flex gap-2 items-center">
          <a href="/enter" style={{ backgroundColor: "transparent", border: "1px solid rgba(197, 160, 89, 0.4)", padding: "8px 14px", fontSize: "10px", fontWeight: "600", letterSpacing: "1.5px", color: "#C5A059", textDecoration: "none", fontFamily: "sans-serif" }}>Enter</a>
          <a href="/apply" style={{ backgroundColor: "#C5A059", border: "1px solid #C5A059", padding: "8px 16px", fontSize: "10px", fontWeight: "600", letterSpacing: "1.5px", color: "#0d0e11", textDecoration: "none", fontFamily: "sans-serif" }}>Apply Now</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", color: "#C5A059", cursor: "pointer", display: "flex", alignItems: "center" }} className="xl:hidden">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY (FULL SCREEN & FIXED) */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", backgroundColor: "#0d0e11",
          zIndex: 999, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center",
          gap: "14px", padding: "90px 20px 40px 20px", fontFamily: "sans-serif", overflowY: "auto", boxSizing: "border-box"
        }}>
          <a href="/explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Explore</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="/role-models" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Role Models</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/ai-engine" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>AI & Engine</a>
          <a href="/inner-circle" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Inner Circle</a>
          <a href="/impact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Impact</a>
          <a href="/verify" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Verify</a>
          <a href="/enter" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "13px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>Enter Environment</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "6px", backgroundColor: "#C5A059", padding: "10px 28px", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* 3D BOOK & REAL SPRING BINDING VIEWPORT */}
      <div style={{
        perspective: "2500px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        boxSizing: "border-box"
      }}>
        {/* REAL METALLIC SPRING BINDING RINGS */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "8%",
          bottom: "8%",
          width: "40px",
          transform: "translateX(-50%)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          pointerEvents: "none"
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              width: "48px",
              height: "22px",
              border: "4px solid #d4af37",
              borderRadius: "50px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.5)",
              background: "linear-gradient(135deg, #f3e5ab 0%, #b8860b 50%, #5d4037 100%)",
              transform: "rotateX(75deg)"
            }} />
          ))}
        </div>

        {/* BOOK SPREAD CONTAINER */}
        <div style={{
          width: "94vw",
          maxWidth: "1350px",
          height: "82vh",
          position: "relative",
          transformStyle: "preserve-3d",
          display: "flex"
        }}>
          {/* LEFT STATIC PAGE */}
          <div style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#0f1116",
            border: "1px solid rgba(197, 160, 89, 0.2)",
            boxSizing: "border-box",
            padding: "35px",
            overflowY: "auto",
            boxShadow: "inset -20px 0 40px rgba(0,0,0,0.6)"
          }}>
            {currentPage === 0 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>THE FOUNDATION</span>
                  <h1 style={{ fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: "14px 0", lineHeight: "1.1" }}>
                    This is Not<br />Education.<br />
                    <span style={{ color: "#C5A059", fontStyle: "italic" }}>This is Elevation.</span>
                  </h1>
                  <p style={{ color: "#a1a1a6", fontSize: "13.5px", lineHeight: "1.6", fontFamily: "sans-serif" }}>
                    Solo Genius is an exclusive ecosystem for high achievers who are building the future. Uncompromising depth over superficial speed.
                  </p>
                </div>
                {/* Stats Footer Included */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", borderTop: "1px solid rgba(197, 160, 89, 0.15)", paddingTop: "15px", fontFamily: "sans-serif" }}>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb" }}>TOP 5%</div>
                    <div style={{ fontSize: "9px", color: "#8e8e93", letterSpacing: "1.5px" }}>Members Only</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "500", color: "#f9f9fb" }}>12+</div>
                    <div style={{ fontSize: "9px", color: "#8e8e93", letterSpacing: "1.5px" }}>Domains</div>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 1 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>MANIFESTO (05-08)</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 16px 0", fontFamily: "sans-serif" }}>CORE PRINCIPLES CONT.</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {manifestoItems.slice(4, 8).map((item, idx) => (
                      <div key={idx}>
                        <span style={{ color: "#C5A059", fontSize: "9px", letterSpacing: "2px", fontFamily: "sans-serif" }}>{item.num} PRINCIPLE</span>
                        <h3 style={{ fontSize: "14px", color: "#f9f9fb", margin: "2px 0" }}>{item.title}</h3>
                        <p style={{ color: "#8e8e93", fontSize: "11.5px", margin: 0, fontFamily: "sans-serif" }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>MANIFESTO</span>
                  <span>SPREAD 02 / LEFT</span>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>ECOSYSTEM (05-07)</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 16px 0", fontFamily: "sans-serif" }}>PILLARS & FINANCE</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {systemPillars.slice(4, 7).map((pillar, idx) => (
                      <div key={idx} style={{ padding: "10px", border: "1px solid rgba(197,160,89,0.2)", backgroundColor: "rgba(20,21,26,0.6)", position: "relative" }}>
                        <div style={{ position: "absolute", top: "8px", right: "8px", display: "flex", alignItems: "center", gap: "4px" }}>
                          <Lock size={10} color="#C5A059" />
                          <span style={{ fontSize: "8px", color: "#C5A059", fontFamily: "sans-serif" }}>LOCKED</span>
                        </div>
                        <span style={{ color: "#C5A059", fontSize: "8px", letterSpacing: "2px", fontFamily: "sans-serif" }}>{pillar.num} - PILLAR</span>
                        <h3 style={{ fontSize: "12px", color: "#f9f9fb", margin: "2px 0" }}>{pillar.title}</h3>
                        <p style={{ color: "#8e8e93", fontSize: "11px", margin: 0, fontFamily: "sans-serif" }}>{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>ECOSYSTEM</span>
                  <span>SPREAD 03 / LEFT</span>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>FINAL INVITATION</span>
                  <h2 style={{ fontSize: "20px", color: "#f9f9fb", margin: "12px 0 14px 0", fontFamily: "sans-serif" }}>YOUR NEXT VERSION STARTS HERE.</h2>
                  <p style={{ color: "#a1a1a6", fontSize: "12.5px", lineHeight: "1.6", fontFamily: "sans-serif", marginBottom: "16px" }}>
                    Explore the Solo Genius environment and determine whether it belongs in your permanent trajectory. By Invitation or Application Only.
                  </p>
                  <a href="/apply" style={{ backgroundColor: "#f5f5f7", color: "#0d0e11", padding: "10px 22px", fontSize: "9.5px", fontWeight: "600", letterSpacing: "2px", textDecoration: "none", display: "inline-block" }}>
                    APPLY NOW →
                  </a>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>© 2026 SOLO GENIUS</span>
                  <span>FINAL SPREAD</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT FLIPPABLE 3D PAGE */}
          <motion.div
            animate={{ rotateY: currentPage === 0 ? 0 : currentPage === 1 ? -180 : currentPage === 2 ? -180 : -180 }}
            transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: "#13151b",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              boxSizing: "border-box",
              padding: "35px",
              overflowY: "auto",
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              boxShadow: "inset 20px 0 40px rgba(0,0,0,0.6)"
            }}
          >
            {currentPage === 0 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>MANIFESTO (01-04)</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 16px 0", fontFamily: "sans-serif" }}>OUR CORE PRINCIPLES</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {manifestoItems.slice(0, 4).map((item, idx) => (
                      <div key={idx}>
                        <span style={{ color: "#C5A059", fontSize: "9px", letterSpacing: "2px", fontFamily: "sans-serif" }}>{item.num} PRINCIPLE</span>
                        <h3 style={{ fontSize: "14px", color: "#f9f9fb", margin: "2px 0" }}>{item.title}</h3>
                        <p style={{ color: "#8e8e93", fontSize: "11.5px", margin: 0, fontFamily: "sans-serif" }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>MANIFESTO</span>
                  <span>SPREAD 01 / RIGHT</span>
                </div>
              </div>
            )}

            {currentPage === 1 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>THE ECOSYSTEM (01-04)</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 16px 0", fontFamily: "sans-serif" }}>ENVIRONMENT PILLARS</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {systemPillars.slice(0, 4).map((pillar, idx) => (
                      <div key={idx} style={{ padding: "8px 10px", border: "1px solid rgba(197,160,89,0.2)", backgroundColor: "rgba(20,21,26,0.6)", position: "relative" }}>
                        <div style={{ position: "absolute", top: "6px", right: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
                          <Lock size={10} color="#C5A059" />
                          <span style={{ fontSize: "8px", color: "#C5A059", fontFamily: "sans-serif" }}>LOCKED</span>
                        </div>
                        <span style={{ color: "#C5A059", fontSize: "8px", letterSpacing: "2px", fontFamily: "sans-serif" }}>{pillar.num} - PILLAR</span>
                        <h3 style={{ fontSize: "12px", color: "#f9f9fb", margin: "2px 0" }}>{pillar.title}</h3>
                        <p style={{ color: "#8e8e93", fontSize: "10.5px", margin: 0, fontFamily: "sans-serif" }}>{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>ECOSYSTEM</span>
                  <span>SPREAD 02 / RIGHT</span>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>FOR THE FEW</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 14px 0", fontFamily: "sans-serif" }}>NOT FOR EVERYONE.</h2>
                  <p style={{ color: "#a1a1a6", fontSize: "12px", marginBottom: "12px", fontFamily: "sans-serif" }}>Solo Genius is built for individuals who:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "sans-serif" }}>
                    {audienceItems.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e5e5e7", fontSize: "12px" }}>
                        <span style={{ width: "3.5px", height: "3.5px", backgroundColor: "#C5A059", borderRadius: "50%" }}></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>AUDIENCE</span>
                  <span>SPREAD 03 / RIGHT</span>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", fontFamily: "sans-serif" }}>SYSTEM FOOTER</span>
                  <h2 style={{ fontSize: "18px", color: "#f9f9fb", margin: "12px 0 14px 0", fontFamily: "sans-serif" }}>PRIVATE EXCLUSIVE</h2>
                  <p style={{ color: "#8e8e93", fontSize: "12px", lineHeight: "1.5", fontFamily: "sans-serif", marginBottom: "16px" }}>
                    An environment for creative thinkers. Built on absolute technical mastery, original creation, and structural execution.
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a href="/explore" style={{ border: "1px solid rgba(197,160,89,0.4)", color: "#C5A059", padding: "8px 16px", fontSize: "9.5px", textDecoration: "none" }}>Explore</a>
                    <a href="/verify" style={{ border: "1px solid rgba(197,160,89,0.4)", color: "#C5A059", padding: "8px 16px", fontSize: "9.5px", textDecoration: "none" }}>Verify</a>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(197,160,89,0.2)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#8e8e93", fontFamily: "sans-serif" }}>
                  <span>ALL RIGHTS RESERVED</span>
                  <span>BY INVITATION ONLY</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* SPREAD NAVIGATION CONTROLS */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        zIndex: 1000,
        backgroundColor: "rgba(13, 14, 17, 0.95)",
        padding: "8px 20px",
        border: "1px solid rgba(197, 160, 89, 0.3)",
        backdropFilter: "blur(10px)"
      }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          style={{ background: "transparent", color: currentPage === 0 ? "#555" : "#C5A059", border: "1px solid rgba(197, 160, 89, 0.3)", padding: "6px 12px", fontSize: "9.5px", letterSpacing: "1.5px", cursor: currentPage === 0 ? "not-allowed" : "pointer", fontFamily: "sans-serif" }}
        >
          ← PREV
        </button>
        <span style={{ color: "#C5A059", fontSize: "10px", display: "flex", alignItems: "center", fontFamily: "sans-serif" }}>
          {currentPage + 1} / {totalSheets}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalSheets - 1, prev + 1))}
          disabled={currentPage === totalSheets - 1}
          style={{ background: "transparent", color: currentPage === totalSheets - 1 ? "#555" : "#C5A059", border: "1px solid rgba(197, 160, 89, 0.3)", padding: "6px 12px", fontSize: "9.5px", letterSpacing: "1.5px", cursor: currentPage === totalSheets - 1 ? "not-allowed" : "pointer", fontFamily: "sans-serif" }}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}