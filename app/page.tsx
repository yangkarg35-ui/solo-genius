'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Lock, Bookmark } from 'lucide-react';

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const manifestoItems = [
    { num: "01", title: "Mastery", desc: "We believe mastery cannot be rushed. Uncompromising depth over superficial speed." },
    { num: "02", title: "Originality", desc: "We believe originality is more valuable than imitation. Creating absolute artistic autonomy." },
    { num: "03", title: "Understanding", desc: "We believe deep understanding outlasts memorization. Grasping the core universal laws." },
    { num: "04", title: "Systems", desc: "We believe great creators are built through systems, not shortcuts. Precision architecture." },
    { num: "05", title: "Quality", desc: "We believe quality is remembered long after speed is forgotten. The elite standard." },
    { num: "06", title: "Discipline", desc: "We believe creativity is a discipline, not an accident. Rigorous daily mechanical execution." },
    { num: "07", title: "Transformation", desc: "We believe learning should transform the way you think, not just what you know." },
    { num: "08", title: "Identity", desc: "We believe music is not the destination-it is the medium to discover your creative identity." }
  ];

  const systemPillars = [
    { num: "01", title: "MUSIC", desc: "Build musical ability and creative expression through uncompromising technical mastery." },
    { num: "02", title: "CREATIVITY", desc: "Learn how to generate original ideas instead of copying existing ones." },
    { num: "03", title: "THINKING", desc: "Develop clearer thinking, decision-making, and structural problem-solving." },
    { num: "04", title: "BUSINESS", desc: "Understand how creative ideas transition into absolute market value." },
    { num: "05", title: "CONTENT", desc: "Learn how to communicate and distribute your intellectual property." },
    { num: "06", title: "FINANCE", desc: "Build the underlying capability to understand, generate, and manage capital." },
    { num: "07", title: "LEARNING SYSTEM", desc: "Build a personal architecture for continuous acquisition and self-mastery." }
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
      backgroundColor: "#090a0d",
      color: "#e5e5e7",
      minHeight: "100vh",
      fontFamily: "var(--font-serif), 'Didot', 'Bodoni MT', 'Times New Roman', serif",
      scrollBehavior: "smooth",
      overflowX: "hidden",
      width: "100%",
      boxSizing: "border-box",
      position: "relative"
    }}>
      {/* CLASSIC LUXURY MAGAZINE SPINE / BINDING EFFECT OVERLAY */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "36px",
        height: "100vh",
        background: "linear-gradient(90deg, rgba(5,5,7,0.95) 0%, rgba(20,21,26,0.8) 50%, rgba(13,14,17,0.4) 100%)",
        borderRight: "1px solid rgba(197, 160, 89, 0.25)",
        zIndex: 900,
        pointerEvents: "none",
        boxShadow: "inset -4px 0 12px rgba(0,0,0,0.8)"
      }} className="hidden lg:block" />

      {/* TOP LUXURY NAVIGATION (MAGAZINE HEADER STYLE) */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 48px",
        backgroundColor: "rgba(9, 10, 13, 0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.18)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(197, 160, 89, 0.6)" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              SOLO GENIUS
            </span>
            <span style={{ fontSize: "8px", color: "#8e8e93", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              VOL. 01 • PRIVATE EDITION
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div style={{ display: "flex", gap: "24px", fontSize: "10px", fontWeight: "400", letterSpacing: "2px", color: "#9e9eA2", fontFamily: "sans-serif" }} className="hidden xl:flex items-center">
          <a href="#explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>01. Cover</a>
          <a href="#definition" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>02. Manifesto</a>
          <a href="#ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>03. Ecosystem</a>
          <a href="#audience" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>04. The Standard</a>
          <a href="#apply" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>05. Access</a>
        </div>

        <div className="hidden xl:flex" style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <a href="/enter" style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(197, 160, 89, 0.4)",
            padding: "10px 20px",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "#C5A059",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "sans-serif"
          }}>
            Enter
          </a>
          <a href="/apply" style={{
            backgroundColor: "#C5A059",
            border: "1px solid #C5A059",
            padding: "10px 24px",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "2px",
            color: "#090a0d",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "sans-serif"
          }}>
            Apply Now
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: "none", border: "none", color: "#C5A059", cursor: "pointer", padding: "4px" }}
          className="xl:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#090a0d",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          padding: "24px",
          fontFamily: "sans-serif"
        }}>
          <a href="#explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>01. Cover</a>
          <a href="#definition" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>02. Manifesto</a>
          <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>03. Ecosystem</a>
          <a href="#audience" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>04. The Standard</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "16px", backgroundColor: "#C5A059", padding: "14px 36px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#090a0d", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* HERO SECTION - MAGAZINE FRONT COVER PAGE */}
      <section id="explore" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "160px 48px 50px 48px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        borderBottom: "2px solid rgba(197, 160, 89, 0.2)"
      }}>
        {/* Background Image with Magazine Vignette & Grain */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/b1.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          filter: "brightness(0.65) contrast(1.15) saturate(0.85)"
        }} />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(9,10,13,0.4) 0%, rgba(9,10,13,0.85) 75%, #090a0d 100%)",
          zIndex: 1
        }} />

        {/* Magazine Cover Header Tag */}
        <div style={{ zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: "1280px", margin: "0 auto", fontFamily: "sans-serif" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderLeft: "2px solid #C5A059", paddingLeft: "12px" }}>
            <span style={{ fontSize: "10px", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "600" }}>ISSUE N° 01</span>
            <span style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px" }}>/ 2026</span>
          </div>
          <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "2px", textTransform: "uppercase" }}>
            SOLO GENIUS MUSICAL SCHOOL
          </div>
        </div>

        {/* Hero Content / Main Cover Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: "950px", zIndex: 2, display: "flex", flexDirection: "column", gap: "24px", margin: "auto 0", width: "100%" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(197, 160, 89, 0.1)", border: "1px solid rgba(197, 160, 89, 0.3)", padding: "6px 14px", width: "fit-content", fontFamily: "sans-serif" }}>
            <Bookmark size={12} color="#C5A059" />
            <span style={{ fontSize: "9px", color: "#C5A059", letterSpacing: "2.5px", fontWeight: "600" }}>PRIVATE MONOGRAPH</span>
          </div>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 78px)", fontWeight: "400", letterSpacing: "-1.5px", color: "#fcfcfd", margin: 0, lineHeight: "1.08" }}>
            This is Not<br />
            Education.<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>This is Elevation.</span>
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "17px", lineHeight: "1.8", letterSpacing: "0.5px", margin: "10px 0 20px 0", maxWidth: "600px", fontFamily: "sans-serif" }}>
            An uncompromising architectural manifesto for the 0.000833% market segment. Built for those who demand absolute mastery.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", fontFamily: "sans-serif" }}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#definition" style={{
                backgroundColor: "#C5A059",
                color: "#090a0d",
                padding: "15px 32px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2.5px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 20px rgba(197, 160, 89, 0.2)"
              }}>
                Turn The Page
              </a>
              <a href="/apply" style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                color: "#C5A059",
                padding: "15px 32px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2.5px",
                textDecoration: "none",
                display: "inline-block"
              }}>
                Request Access
              </a>
            </div>
          </div>
        </motion.div>

        {/* Magazine Bottom Sheet Footer Info */}
        <div style={{
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingTop: "40px",
          borderTop: "1px solid rgba(197, 160, 89, 0.15)",
          textAlign: "left",
          fontFamily: "sans-serif"
        }}>
          <div>
            <div style={{ fontSize: "11px", color: "#C5A059", letterSpacing: "2px", fontWeight: "600" }}>MARKET SEGMENT</div>
            <div style={{ fontSize: "14px", color: "#fcfcfd", marginTop: "4px" }}>0.000833% Elite</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#C5A059", letterSpacing: "2px", fontWeight: "600" }}>EXPERIENCE</div>
            <div style={{ fontSize: "14px", color: "#fcfcfd", marginTop: "4px" }}>Silent & Mysterious</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#C5A059", letterSpacing: "2px", fontWeight: "600" }}>CORE FOCUS</div>
            <div style={{ fontSize: "14px", color: "#fcfcfd", marginTop: "4px" }}>Musical Theory & Systems</div>
          </div>
          <div>
            <div style={{ fontSize: "11px", color: "#C5A059", letterSpacing: "2px", fontWeight: "600" }}>EDITION</div>
            <div style={{ fontSize: "14px", color: "#fcfcfd", marginTop: "4px" }}>Private Exclusive</div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE DEFINITION (PAGE 2 SPREAD STYLE) */}
      <section id="definition" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "160px 48px",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(197,160,89,0.1)",
        position: "relative"
      }}>
        {/* Magazine Page Number Watermark */}
        <div style={{ position: "absolute", top: "60px", right: "48px", fontSize: "12px", color: "rgba(197,160,89,0.4)", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          [ 02 ]
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", gap: "36px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A059" }}></span>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              CHAPTER I: THE DEFINITION
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: "400", letterSpacing: "-0.5px", color: "#9a9a9f", lineHeight: "1.45" }}>
            <p style={{ margin: 0 }}>SG is not a school.</p>
            <p style={{ margin: 0 }}>SG is not a standard course platform.</p>
            <p style={{ margin: 0 }}>SG is not superficial content.</p>
            <p style={{ margin: 0, color: "#fcfcfd", fontWeight: "500", fontSize: "clamp(30px, 5vw, 46px)" }}>
              SG is a private high-end environment.
            </p>
          </div>

          <div style={{
            maxWidth: "750px",
            marginTop: "20px",
            borderLeft: "2px solid #C5A059",
            paddingLeft: "28px",
            backgroundColor: "rgba(197, 160, 89, 0.02)",
            paddingTop: "16px",
            paddingBottom: "16px"
          }}>
            <p style={{ color: "#d1d1d6", fontSize: "17px", lineHeight: "1.9", letterSpacing: "0.5px", margin: 0, fontFamily: "sans-serif", fontStyle: "italic" }}>
              &ldquo;Engineered for high achievers who reject noise, value depth over speed, and build absolute autonomy through rigorous technical mastery and structural elegance.&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 03: THE MANIFESTO (CLASSIC MAGAZINE GRID SPREAD) */}
      <section id="manifesto" style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "160px 48px",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(197,160,89,0.1)",
        position: "relative"
      }}>
        <div style={{ position: "absolute", top: "60px", right: "48px", fontSize: "12px", color: "rgba(197,160,89,0.4)", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          [ 03 ]
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A059" }}></span>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              CHAPTER II: PHILOSOPHY & MANIFESTO
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: "400", letterSpacing: "-0.5px", margin: 0, color: "#fcfcfd" }}>
            THE EIGHT PILLARS OF MASTERY
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {manifestoItems.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: "rgba(18, 19, 24, 0.7)",
              border: "1px solid rgba(197, 160, 89, 0.15)",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              position: "relative",
              transition: "border-color 0.3s ease"
            }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ color: "#C5A059", fontSize: "11px", fontWeight: "600", letterSpacing: "3px", fontFamily: "sans-serif" }}>
                    RULE N° {item.num}
                  </span>
                  <span style={{ fontSize: "10px", color: "#636366", fontFamily: "sans-serif" }}>// SG-M</span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "400", color: "#fcfcfd", margin: "0 0 14px 0", letterSpacing: "-0.2px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9a9a9f", fontSize: "14px", lineHeight: "1.8", margin: 0, fontFamily: "sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: THE ECOSYSTEM (LOCKED LUXURY MODULES) */}
      <section id="ecosystem" style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "160px 48px",
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(197,160,89,0.1)",
        position: "relative"
      }}>
        <div style={{ position: "absolute", top: "60px", right: "48px", fontSize: "12px", color: "rgba(197,160,89,0.4)", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          [ 04 ]
        </div>

        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A059" }}></span>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              CHAPTER III: THE ECOSYSTEM
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: "400", letterSpacing: "-0.5px", margin: 0, color: "#fcfcfd" }}>
            STRUCTURAL DOMAINS
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {systemPillars.map((pillar, idx) => (
            <a
              key={idx}
              href="/apply"
              style={{
                backgroundColor: "rgba(18, 19, 24, 0.7)",
                border: "1px solid rgba(197, 160, 89, 0.15)",
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "rgba(9, 10, 13, 0.9)",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                zIndex: 10
              }}>
                <Lock size={12} color="#C5A059" />
                <span style={{ fontSize: "9px", letterSpacing: "1.5px", color: "#C5A059", fontWeight: "600", fontFamily: "sans-serif" }}>RESTRICTED</span>
              </div>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", fontFamily: "sans-serif" }}>
                  DOMAIN N° {pillar.num}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "500", color: "#fcfcfd", margin: "16px 0 14px 0", letterSpacing: "-0.2px" }}>
                  {pillar.title}
                </h3>
                <p style={{ color: "#9a9a9f", fontSize: "14.5px", margin: 0, fontFamily: "sans-serif", lineHeight: "1.8" }}>
                  {pillar.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 05: THE AUDIENCE / STANDARD */}
      <section id="audience" style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "160px 48px",
        boxSizing: "border-box",
        position: "relative"
      }}>
        <div style={{ position: "absolute", top: "60px", right: "48px", fontSize: "12px", color: "rgba(197,160,89,0.4)", letterSpacing: "3px", fontFamily: "sans-serif" }}>
          [ 05 ]
        </div>

        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A059" }}></span>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              CHAPTER IV: THE RECIPIENTS
            </span>
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A059" }}></span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "400", letterSpacing: "-1px", margin: 0, color: "#fcfcfd", lineHeight: "1.15" }}>
            NOT FOR EVERYONE.<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>AND THAT&apos;S THE INTENT.</span>
          </h2>
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "rgba(18, 19, 24, 0.5)",
          border: "1px solid rgba(197, 160, 89, 0.15)",
          padding: "50px",
          fontFamily: "sans-serif"
        }}>
          <p style={{ color: "#a1a1a6", fontSize: "15px", marginBottom: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>Solo Genius is designed exclusively for individuals who:</p>
          {audienceItems.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "18px", color: "#fcfcfd", fontSize: "16px", letterSpacing: "0.5px" }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#C5A059", borderRadius: "50%" }}></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION / FINAL PAGE */}
      <section id="apply" style={{
        backgroundColor: "#121318",
        padding: "180px 48px",
        boxSizing: "border-box",
        textAlign: "center",
        borderTop: "1px solid rgba(197,160,89,0.2)"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif", textTransform: "uppercase" }}>
            FINAL CHAPTER // INVITATION
          </span>
          <h2 style={{ fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: "400", letterSpacing: "-1px", margin: "20px 0 24px 0", color: "#fcfcfd", lineHeight: "1.12" }}>
            YOUR NEXT VERSION<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>BEGINS WITH THIS ENVIRONMENT.</span>
          </h2>
          <p style={{ color: "#a1a1a6", fontSize: "16px", maxWidth: "580px", margin: "0 auto 50px auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Examine the environment. If your standard aligns with ours, submit your application.
          </p>
          <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
            <a href="/apply" style={{
              backgroundColor: "#f5f5f7",
              color: "#090a0d",
              padding: "16px 36px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2.5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Apply For Access <ArrowRight size={12} />
            </a>
            <a href="/enter" style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              color: "#C5A059",
              padding: "16px 36px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2.5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Enter Environment <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* MAGAZINE FOOTER */}
      <footer style={{
        padding: "80px 48px",
        borderTop: "1px solid rgba(197, 160, 89, 0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "40px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        backgroundColor: "#090a0d"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "320px" }}>
          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "3px", color: "#C5A059" }}>SOLO GENIUS MUSICAL SCHOOL</span>
          <p style={{ color: "#8e8e93", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
            Private Exclusive monograph for the 0.000833% market segment. Silent, direct, high-end connection.
          </p>
        </div>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", fontSize: "11px", letterSpacing: "2px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>INDEX</span>
            <a href="#explore" style={{ color: "#8e8e93", textDecoration: "none" }}>Cover</a>
            <a href="#definition" style={{ color: "#8e8e93", textDecoration: "none" }}>Manifesto</a>
            <a href="#ecosystem" style={{ color: "#8e8e93", textDecoration: "none" }}>Ecosystem</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>ACCESS</span>
            <a href="/enter" style={{ color: "#8e8e93", textDecoration: "none" }}>Environment</a>
            <a href="/apply" style={{ color: "#8e8e93", textDecoration: "none" }}>Application</a>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid rgba(197,160,89,0.08)", color: "#636366", fontSize: "10px", letterSpacing: "1.5px" }}>
          <p style={{ margin: 0 }}>© 2026 SOLO GENIUS. ALL RIGHTS RESERVED.</p>
          <p style={{ margin: 0 }}>VOL. 01 // PRIVATE MONOGRAPH</p>
        </div>
      </footer>
    </div>
  );
}