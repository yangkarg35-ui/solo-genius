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
      icon: "/file.svg", // Pillar 1 အတွက် သက်ဆိုင်ရာ ပုံ
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
      icon: "/globe.svg", // Pillar 2 အတွက် သက်ဆိုင်ရာ ပုံ
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
      icon: "/next.svg", // Pillar 3 အတွက် သက်ဆိုင်ရာ ပုံ
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
      icon: "/file.svg", // Pillar 4 အတွက် သက်ဆိုင်ရာ ပုံ
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
      icon: "/globe.svg", // Pillar 5 အတွက် သက်ဆိုင်ရာ ပုံ
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
      icon: "/next.svg", // Pillar 6 အတွက် သက်ဆိုင်ရာ ပုံ
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
      overflowX: "hidden",
      width: "100%"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        padding: "18px 24px",
        width: "100%",
        backgroundColor: "rgba(3, 7, 18, 0.92)",
        backdropFilter: "blur(16px)",
        position: "fixed",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.6)" }}
          />
          <span style={{ fontSize: "13px", fontWeight: "700", color: "#ffffff", letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "18px", fontSize: "11px", fontWeight: "500", letterSpacing: "1.5px", color: "#9ca3af", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "#D4AF37", textDecoration: "none" }}>EXPLORE</a>
        </div>

        <div>
          <a href="#" style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.5)",
            padding: "8px 16px",
            borderRadius: "2px",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "2px",
            color: "#D4AF37",
            textDecoration: "none"
          }}>
            VIP ACCESS
          </a>
        </div>
      </nav>

      {/* Hero Header */}
      <section style={{
        minHeight: "45vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "130px 20px 40px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        background: "linear-gradient(180deg, rgba(3,7,18,0.2) 0%, rgba(3,7,18,0.95) 100%)",
        boxSizing: "border-box"
      }}>
        <span style={{ 
          color: "#D4AF37", 
          textTransform: "uppercase", 
          fontSize: "11px", 
          letterSpacing: "2px", 
          fontWeight: "700", 
          marginBottom: "15px", 
          maxWidth: "900px", 
          lineHeight: "1.7",
          padding: "0 10px"
        }}>
          Our learning system is designed around one principle:<br/>
          <span style={{ fontSize: "clamp(13px, 3vw, 16px)", letterSpacing: "2.5px", fontWeight: "800", color: "#ffffff", display: "inline-block", marginTop: "6px" }}>
            UNDERSTAND → PRACTICE → CREATE → REFLECT → IMPROVE
          </span>
        </span>
        <h1 style={{ fontSize: "clamp(26px, 5vw, 38px)", fontWeight: "800", letterSpacing: "-0.5px", color: "#ffffff", margin: "10px 0 0 0", maxWidth: "950px", lineHeight: "1.3", padding: "0 10px" }}>
          Learning Is A System, Not A Collection Of Lessons
        </h1>
      </section>

      {/* Explore Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "35px", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <h3 style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "2.5px", marginBottom: "6px", fontWeight: "700" }}>
              System Modules
            </h3>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: "800", letterSpacing: "-0.5px", margin: 0 }}>
              Curated Masterclass Series
            </h2>
          </div>
          <span style={{ color: "#9ca3af", fontSize: "12px", letterSpacing: "1px" }}>01 — 06 PILLARS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {exploreModules.map((item, idx) => {
            const isOpen = openPillar === idx;
            return (
              <div key={idx} onClick={() => setOpenPillar(isOpen ? null : idx)} style={{
                backgroundColor: "rgba(17, 24, 39, 0.8)",
                border: isOpen ? "1px solid rgba(212, 175, 55, 0.8)" : "1px solid rgba(212, 175, 55, 0.4)",
                borderRadius: "6px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}>
                <div>
                  {/* Pillar Top Header with Unique Pillar Icon */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px" }}>{item.code}</span>
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      style={{ width: "26px", height: "26px", objectFit: "contain", filter: "drop-shadow(0 0 2px rgba(212,175,55,0.5))" }}
                    />
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: "700", margin: "10px 0 4px 0", color: "#ffffff", letterSpacing: "0.5px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#9ca3af", fontSize: "12px", fontWeight: "500", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
                    {item.subtitle}
                  </p>
                  <p style={{ color: "#d1d5db", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                    <strong style={{ color: "#ffffff" }}>Purpose:</strong> {item.purpose}
                  </p>

                  {isOpen && (
                    <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", animation: "fadeIn 0.3s ease" }}>
                      <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", marginBottom: "8px" }}>INCLUDES:</p>
                      <ul style={{ margin: 0, paddingLeft: "18px", color: "#e5e7eb", fontSize: "12.5px", lineHeight: "1.7", marginBottom: item.transformation ? "16px" : "0" }}>
                        {item.includes?.map((subItem, sIdx) => (
                          <li key={sIdx}>{subItem}</li>
                        ))}
                      </ul>
                      {item.transformation && (
                        <>
                          <p style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", marginBottom: "4px" }}>TRANSFORMATION:</p>
                          <p style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600", margin: 0 }}>{item.transformation}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "600", letterSpacing: "1px" }}>
                    {isOpen ? "CLOSE DETAILS" : "CLICK TO READ FULL DETAILS →"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: "35px 20px", 
        borderTop: "1px solid rgba(255, 255, 255, 0.08)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap",
        gap: "15px",
        color: "#6b7280", 
        fontSize: "10px", 
        letterSpacing: "1.5px",
        boxSizing: "border-box",
        textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
        </div>
      </footer>
    </div>
  );
}