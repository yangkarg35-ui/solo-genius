'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function ExplorePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const explorePillars = [
    {
      num: "01",
      title: "MUSIC",
      subtitle: "Music is the beginning.",
      desc: "Music is not simply something you listen to or perform. It is a language for understanding rhythm, structure, emotion, creativity, and expression. Explore the foundations of musical thinking through guitar, rhythm, harmony, technique, and composition.",
      linkText: "Explore Music"
    },
    {
      num: "02",
      title: "CREATIVITY",
      subtitle: "Learn to create.",
      desc: "Creativity is not a talent reserved for a few people. It is a way of seeing. Explore ideas, creative processes, observation, experimentation, taste, and the systems behind meaningful creative work.",
      linkText: "Explore Creativity"
    },
    {
      num: "03",
      title: "THINKING",
      subtitle: "Think for yourself.",
      desc: "Better decisions begin with better thinking. Explore mental models, reasoning, decision-making, problem solving, critical thinking, and the frameworks that help you see what others miss.",
      linkText: "Explore Thinking"
    },
    {
      num: "04",
      title: "BUSINESS",
      subtitle: "Build something that matters.",
      desc: "Business is more than selling. It is the ability to understand people, create value, build systems, and turn ideas into something real. Explore business fundamentals, strategy, positioning, marketing, distribution, and entrepreneurship.",
      linkText: "Explore Business"
    },
    {
      num: "05",
      title: "CONTENT",
      subtitle: "Turn ideas into expression.",
      desc: "Content is not about being louder. It is about having something worth saying. Explore the systems behind ideas, storytelling, communication, visual thinking, content creation, and distribution.",
      linkText: "Explore Content"
    },
    {
      num: "06",
      title: "FINANCE",
      subtitle: "Understand the game.",
      desc: "Money should not remain a mystery. Explore personal finance, cash flow, saving, debt, risk, investing, wealth creation, and the systems behind financial independence.",
      linkText: "Explore Finance"
    },
    {
      num: "07",
      title: "LEARNING",
      subtitle: "Build your own learning system.",
      desc: "The ability to learn may be one of the most valuable skills you can own. Explore learning science, knowledge systems, active recall, retrieval, deliberate practice, and methods for turning information into usable capability.",
      linkText: "Explore Learning"
    }
  ];

  const coursewareCategories = [
    "Music", "Creativity", "Thinking", "Business", "Content", "Finance", "Learning"
  ];

  const philosophyItems = [
    "People don't buy skills. They buy who those skills allow them to become.",
    "Learning should create capability.",
    "Creativity should create something real.",
    "Taste should be developed, not performed.",
    "Technology should amplify human capability.",
    "A better life is built through better systems."
  ];

  return (
    <div style={{
      backgroundColor: "#0d0e11",
      backgroundImage: "linear-gradient(rgba(13, 14, 17, 0.92), rgba(13, 14, 17, 0.95)), url('/b1.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
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
            SG — EXPLORE
          </span>
        </div>

        {/* Desktop Nav Items */}
        <div style={{ display: "flex", gap: "22px", fontSize: "10px", fontWeight: "400", letterSpacing: "1.5px", color: "#8e8e93", fontFamily: "sans-serif" }} className="hidden xl:flex items-center">
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <a href="/explore" style={{ color: "#C5A059", textDecoration: "none" }}>Explore</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none" }}>Ecosystem</a>
          <a href="/journey" style={{ color: "inherit", textDecoration: "none" }}>Journey</a>
          <a href="/inner-circle" style={{ color: "inherit", textDecoration: "none" }}>Inner Circle</a>
        </div>

        <div className="hidden xl:flex" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
              fontFamily: "sans-serif"
            }}
          >
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
          backgroundColor: "#0d0e11",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "18px",
          padding: "100px 24px 40px 24px",
          fontFamily: "sans-serif",
          overflowY: "auto",
          boxSizing: "border-box"
        }}>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Home</a>
          <a href="/explore" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#C5A059", textDecoration: "none" }}>Explore</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>About SG</a>
          <a href="/ecosystem" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Ecosystem</a>
          <a href="/journey" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "14px", letterSpacing: "2px", color: "#e5e5e7", textDecoration: "none" }}>Journey</a>
          <a href="/apply" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "10px", backgroundColor: "#C5A059", padding: "12px 32px", fontSize: "11px", fontWeight: "600", letterSpacing: "2px", color: "#0d0e11", textDecoration: "none" }}>Apply Now</a>
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "160px 24px 80px 24px",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            SOLO GENIUS — EXPLORE
          </span>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: "400", letterSpacing: "-1px", color: "#f9f9fb", margin: 0, lineHeight: "1.15" }}>
            Explore Solo Genius.
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "18px", lineHeight: "1.7", letterSpacing: "0.5px", margin: "0 auto", maxWidth: "650px", fontFamily: "sans-serif" }}>
            A private world for people who want to think deeper, create better, and build a life with taste.
          </p>
          <div style={{ color: "#C5A059", fontSize: "13px", letterSpacing: "2px", margin: "20px 0", fontFamily: "sans-serif", fontWeight: "500" }}>
            Music. Creativity. Thinking. Business. Finance. Learning.
          </div>
          <div style={{ fontSize: "14px", color: "#8e8e93", fontStyle: "italic", fontFamily: "sans-serif" }}>
            Not everything here is meant to be consumed.<br />
            Some things are meant to be discovered.
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            INTRO
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", color: "#f9f9fb", margin: 0, letterSpacing: "-0.5px" }}>
            A Different Way to Learn.
          </h2>
          <p style={{ color: "#e5e5e7", fontSize: "16px", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" }}>
            Solo Genius is not built around collecting more information. It is built around transformation. We explore the ideas, skills, systems, and disciplines that help a person become more capable, more creative, and more independent.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "30px", fontFamily: "sans-serif", color: "#C5A059", fontSize: "15px", fontWeight: "500", flexWrap: "wrap" }}>
            <span>Learn less.</span>
            <span>Understand deeper.</span>
            <span>Create something of your own.</span>
          </div>
        </div>
      </section>

      {/* EXPLORE THE WORLD (PILLARS 01 - 07) */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            EXPLORE THE WORLD
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", margin: "16px 0 0 0", color: "#f9f9fb" }}>
            SEVEN DIMENSIONS OF MASTERY
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {explorePillars.map((pillar, idx) => (
            <div key={idx} style={{
              backgroundColor: "rgba(20, 21, 26, 0.75)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(197, 160, 89, 0.12)",
              padding: "40px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box"
            }}>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "2.5px", fontFamily: "sans-serif" }}>
                  {pillar.num} — {pillar.title}
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 8px 0" }}>
                  {pillar.subtitle}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.7", margin: "0 0 24px 0", fontFamily: "sans-serif" }}>
                  {pillar.desc}
                </p>
              </div>
              <a href="/apply" style={{
                color: "#C5A059",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "1.5px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "sans-serif"
              }}>
                {pillar.linkText} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN COURSEWARE */}
      <section style={{ backgroundColor: "rgba(20, 21, 26, 0.8)", backdropFilter: "blur(8px)", padding: "140px 24px", boxSizing: "border-box", textAlign: "center", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            OPEN COURSEWARE
          </span>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", margin: "16px 0 20px 0", color: "#f9f9fb" }}>
            Learn openly. The door is open.
          </h2>
          <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", margin: "0 auto 30px auto", fontFamily: "sans-serif", maxWidth: "600px" }}>
            Solo Genius Open Courseware makes selected knowledge and frameworks available to anyone who wants to learn. No status required. No special access required. Just curiosity.
          </p>
          <div style={{ color: "#e5e5e7", fontSize: "13px", letterSpacing: "1.5px", marginBottom: "40px", fontFamily: "sans-serif" }}>
            Explore selected lessons across: {coursewareCategories.join(" · ")}
          </div>
          <a href="/enter" style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(197, 160, 89, 0.4)",
            color: "#C5A059",
            padding: "14px 32px",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "2px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "sans-serif"
          }}>
            Enter Open Courseware <ArrowRight size={12} />
          </a>
        </div>
      </section>

      {/* THE LIBRARY & THE STUDIO */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          <div style={{ backgroundColor: "rgba(20, 21, 26, 0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(197, 160, 89, 0.12)", padding: "50px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", fontFamily: "sans-serif" }}>
                SG — LIBRARY
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 12px 0" }}>
                Go deeper.
              </h3>
              <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.8", margin: "0 0 20px 0", fontFamily: "sans-serif" }}>
                The Library is where ideas become systems. A private collection of deeper lessons, frameworks, research, resources, and learning experiences created for members of the Solo Genius ecosystem.
              </p>
              <div style={{ color: "#C5A059", fontSize: "11px", letterSpacing: "1.5px", marginBottom: "30px", fontFamily: "sans-serif" }}>
                Private Access · Available to selected members.
              </div>
            </div>
            <a href="/apply" style={{ backgroundColor: "#C5A059", color: "#0d0e11", padding: "12px 24px", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "sans-serif", width: "fit-content" }}>
              Enter the Library <ArrowRight size={12} />
            </a>
          </div>

          <div style={{ backgroundColor: "rgba(20, 21, 26, 0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(197, 160, 89, 0.12)", padding: "50px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", fontFamily: "sans-serif" }}>
                SG — STUDIO
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 12px 0" }}>
                Where ideas become real.
              </h3>
              <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.8", margin: "0 0 20px 0", fontFamily: "sans-serif" }}>
                The Studio is the private working environment of Solo Genius. A place for deeper work, experimentation, creation, collaboration, and transformation. Less consumption. More creation.
              </p>
              <div style={{ color: "#C5A059", fontSize: "11px", letterSpacing: "1.5px", marginBottom: "30px", fontFamily: "sans-serif" }}>
                Private Access · Available to selected members and projects.
              </div>
            </div>
            <a href="/apply" style={{ backgroundColor: "#C5A059", color: "#0d0e11", padding: "12px 24px", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "sans-serif", width: "fit-content" }}>
              Enter the Studio <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO & JOURNAL */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px" }}>
          <div>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              PORTFOLIO / WORK
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 16px 0" }}>
              Ideas made visible.
            </h2>
            <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px", fontFamily: "sans-serif" }}>
              Explore selected work created through Solo Genius. Music. Creative direction. Education. Systems. Digital experiences. Brand experiments. Every project is an attempt to turn an idea into something real.
            </p>
            <a href="/verify" style={{ color: "#C5A059", fontSize: "11px", fontWeight: "600", letterSpacing: "1.5px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "sans-serif" }}>
              Explore the Work <ArrowRight size={12} />
            </a>
          </div>
          <div>
            <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
              JOURNAL / IDEAS
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 16px 0" }}>
              Thinking in public.
            </h2>
            <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.8", marginBottom: "20px", fontFamily: "sans-serif" }}>
              Ideas worth exploring. Not everything needs to become a course. Some ideas deserve to remain questions. Explore selected thoughts, observations, experiments, frameworks, and lessons from the work behind Solo Genius.
            </p>
            <a href="/verify" style={{ color: "#C5A059", fontSize: "11px", fontWeight: "600", letterSpacing: "1.5px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "sans-serif" }}>
              Explore Ideas <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* THE SG PHILOSOPHY */}
      <section style={{ backgroundColor: "rgba(20, 21, 26, 0.8)", backdropFilter: "blur(8px)", padding: "140px 24px", boxSizing: "border-box", textAlign: "center", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
            THE SG PHILOSOPHY
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "400", margin: "16px 0 40px 0", color: "#f9f9fb" }}>
            We believe...
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px", fontFamily: "sans-serif" }}>
            {philosophyItems.map((item, idx) => (
              <p key={idx} style={{ color: "#e5e5e7", fontSize: "16px", margin: 0, fontStyle: "italic" }}>
                "{item}"
              </p>
            ))}
          </div>
          <div style={{ color: "#C5A059", fontSize: "15px", fontWeight: "600", letterSpacing: "1px", fontFamily: "sans-serif" }}>
            And above all: Your greatest asset is the ability to think and create for yourself.
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 24px", boxSizing: "border-box", borderTop: "1px solid rgba(197,160,89,0.08)", textAlign: "center" }}>
        <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "600", fontFamily: "sans-serif" }}>
          THE JOURNEY
        </span>
        <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: "400", margin: "16px 0 20px 0", color: "#f9f9fb" }}>
          Start anywhere.
        </h2>
        <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", margin: "0 auto 40px auto", fontFamily: "sans-serif", maxWidth: "600px" }}>
          You don't need to follow a perfect path. Start with what interests you. Follow the questions. Connect the disciplines. Build your own understanding.
        </p>
        <div style={{ color: "#C5A059", fontSize: "13px", letterSpacing: "2px", margin: "30px 0", fontFamily: "sans-serif", fontWeight: "600" }}>
          Music → Creativity → Thinking → Business → Content → Finance → Learning
        </div>
        <p style={{ color: "#8e8e93", fontSize: "14px", fontStyle: "italic", fontFamily: "sans-serif" }}>
          The disciplines are different. The person you become through them is connected.
        </p>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: "rgba(20, 21, 26, 0.8)", backdropFilter: "blur(8px)", padding: "160px 24px", boxSizing: "border-box", textAlign: "center", borderTop: "1px solid rgba(197,160,89,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "400", letterSpacing: "-1px", margin: "0 0 20px 0", color: "#f9f9fb", lineHeight: "1.15" }}>
            Don't just consume.<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>Explore. Think. Create.</span>
          </h2>
          <p style={{ color: "#a1a1a6", fontSize: "15px", maxWidth: "550px", margin: "0 auto 40px auto", lineHeight: "1.8", fontFamily: "sans-serif" }}>
            Welcome to Solo Genius.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
            <a href="/explore" style={{ backgroundColor: "#f5f5f7", color: "#0d0e11", padding: "14px 32px", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Explore the World <ArrowRight size={12} />
            </a>
            <a href="/enter" style={{ backgroundColor: "transparent", border: "1px solid rgba(197, 160, 89, 0.4)", color: "#C5A059", padding: "14px 32px", fontSize: "10px", fontWeight: "600", letterSpacing: "2px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Enter Open Courseware <ArrowRight size={12} />
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
        fontFamily: "sans-serif",
        backgroundColor: "rgba(13, 14, 17, 0.85)"
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
            <a href="/" style={{ color: "#8e8e93", textDecoration: "none" }}>Home</a>
            <a href="/explore" style={{ color: "#8e8e93", textDecoration: "none" }}>Explore</a>
            <a href="/about" style={{ color: "#8e8e93", textDecoration: "none" }}>About SG</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ color: "#C5A059", fontWeight: "600" }}>ACCESS</span>
            <a href="/ecosystem" style={{ color: "#8e8e93", textDecoration: "none" }}>Ecosystem</a>
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