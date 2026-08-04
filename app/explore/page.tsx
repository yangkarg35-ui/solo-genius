'use client';
import { useState } from 'react';

export default function ExplorePage() {
  const [openPillar, setOpenPillar] = useState<number | null>(null);

  const exploreModules = [
    { 
      code: "PILLAR 01", 
      title: "FOUNDATION",
      subtitle: "Building The Core",
      purpose: "Build the essential foundation required for lifelong musical growth.",
      includes: [
        "Music Fundamentals",
        "Technique",
        "Practice System",
        "Musical Awareness",
        "Learning Habits",
        "Discipline",
        "Listening Skills"
      ]
    },
    { 
      code: "PILLAR 02", 
      title: "MUSICAL LANGUAGE",
      subtitle: "Understanding How Music Works",
      purpose: "Develop the ability to understand, analyze, and communicate through music.",
      includes: [
        "Music Theory",
        "Rhythm",
        "Melody",
        "Harmony",
        "Chords",
        "Scales",
        "Ear Training",
        "Arrangement Concepts"
      ],
      transformation: "Player → Musician"
    },
    { 
      code: "PILLAR 03", 
      title: "CREATIVE DEVELOPMENT",
      subtitle: "Building Your Creative Voice",
      purpose: "Transform knowledge into original expression.",
      includes: [
        "Creativity Framework",
        "Composition",
        "Songwriting",
        "Improvisation",
        "Experimentation",
        "Musical Identity",
        "Idea Development"
      ],
      transformation: "Musician → Creator"
    },
    { 
      code: "PILLAR 04", 
      title: "ARTISTIC MASTERY",
      subtitle: "Developing Your Craft",
      purpose: "Refine skills and develop personal artistic standards.",
      includes: [
        "Advanced Technique",
        "Style Development",
        "Performance",
        "Interpretation",
        "Expression",
        "Tone",
        "Arrangement Mastery"
      ],
      transformation: "Creator → Artist"
    },
    { 
      code: "PILLAR 05", 
      title: "CREATOR IDENTITY",
      subtitle: "Becoming The Person Behind The Work",
      purpose: "Develop the mindset and identity required for long-term creative success.",
      includes: [
        "Creative Philosophy",
        "Critical Thinking",
        "Self Direction",
        "Leadership",
        "Lifelong Learning",
        "Contribution",
        "Legacy"
      ]
    },
    { 
      code: "PILLAR 06", 
      title: "MASTERY",
      subtitle: "Systematic Execution & Growth",
      purpose: "Lock in rigorous daily systems, performance reviews, and long-term optimization.",
      includes: [
        "Deliberate Practice",
        "Habit System",
        "Practice Journal",
        "Goal System",
        "Measurement",
        "Performance Review",
        "Reflection",
        "Optimization",
        "Recovery",
        "Long-term Planning"
      ],
      transformation: "Artist → Master"
    }
  ];

  return (
    <div style={{
      backgroundColor: "#030712",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      scrollBehavior: "smooth",
      overflowX: "hidden"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "25px 60px",
        width: "100%",
        backgroundColor: "rgba(3, 7, 18, 0.9)",
        backdropFilter: "blur(12px)",
        position: "fixed",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.5)" }}
          />
          <span style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", letterSpacing: "2px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "35px", fontSize: "13px", fontWeight: "500", letterSpacing: "1px", color: "#d1d5db" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="/explore" style={{ color: "#D4AF37", textDecoration: "none" }}>Explore</a>
        </div>

        <div>
          <a href="#" style={{
            border: "1px solid rgba(212, 175, 55, 0.6)",
            padding: "10px 22px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1.5px",
            color: "#D4AF37",
            textDecoration: "none"
          }}>
            PRIVATE ACCESS
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{
        minHeight: "55vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 20px 60px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        background: "linear-gradient(180deg, rgba(3,7,18,0.2) 0%, rgba(3,7,18,0.95) 100%)"
      }}>
        <span style={{ 
          color: "#D4AF37", 
          textTransform: "uppercase", 
          fontSize: "15px", 
          letterSpacing: "3px", 
          fontWeight: "700", 
          marginBottom: "20px", 
          maxWidth: "900px", 
          lineHeight: "1.8" 
        }}>
          Our learning system is designed around one principle:<br/>
          <span style={{ fontSize: "18px", letterSpacing: "4px", fontWeight: "800", color: "#ffffff" }}>
            UNDERSTAND → PRACTICE → CREATE → REFLECT → IMPROVE
          </span>
        </span>
        <h1 style={{ fontSize: "48px", fontWeight: "800", letterSpacing: "-1px", color: "#ffffff", margin: "10px 0 0 0", maxWidth: "950px", lineHeight: "1.2" }}>
          Learning Is A System, Not A Collection Of Lessons
        </h1>
      </section>

      {/* Explore Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <h3 style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "12px", letterSpacing: "3px", marginBottom: "10px", fontWeight: "700" }}>
              System Modules
            </h3>
            <h2 style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-1px", margin: 0 }}>
              Curated Masterclass Series
            </h2>
          </div>
          <span style={{ color: "#9ca3af", fontSize: "14px", letterSpacing: "1px" }}>01 — 06 PILLARS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px" }}>
          {exploreModules.map((item, idx) => {
            const isOpen = openPillar === idx;
            return (
              <div key={idx} onClick={() => setOpenPillar(isOpen ? null : idx)} style={{
                backgroundColor: "rgba(17, 24, 39, 0.8)",
                border: isOpen ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.4)",
                borderRadius: "8px",
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}>
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "12px", fontWeight: "700", letterSpacing: "2px" }}>{item.code}</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "700", margin: "12px 0 5px 0", color: "#ffffff", letterSpacing: "0.5px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#9ca3af", fontSize: "14px", fontWeight: "500", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "20px" }}>
                    {item.subtitle}
                  </p>
                  <p style={{ color: "#d1d5db", fontSize: "15px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Purpose:</strong> {item.purpose}
                  </p>

                  {isOpen && (
                    <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", animation: "fadeIn 0.3s ease" }}>
                      <p style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "1px", marginBottom: "10px" }}>INCLUDES:</p>
                      <ul style={{ margin: 0, paddingLeft: "20px", color: "#e5e7eb", fontSize: "14px", lineHeight: "1.8", marginBottom: item.transformation ? "20px" : "0" }}>
                        {item.includes?.map((subItem, sIdx) => (
                          <li key={sIdx}>{subItem}</li>
                        ))}
                      </ul>
                      {item.transformation && (
                        <>
                          <p style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", letterSpacing: "1px", marginBottom: "5px" }}>TRANSFORMATION:</p>
                          <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: "600", margin: 0 }}>{item.transformation}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "600", letterSpacing: "1px" }}>
                    {isOpen ? "CLOSE DETAILS" : "CLICK TO READ FULL DETAILS →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "60px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#6b7280", fontSize: "12px", letterSpacing: "1px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
        </div>
      </footer>
    </div>
  );
}