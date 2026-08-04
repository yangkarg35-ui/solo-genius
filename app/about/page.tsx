'use client';
import { useState } from 'react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'mentor' | 'learning_os'>('mentor');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setScreenshot(imageUrl);
    }
  };

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (!fileInput.files?.[0]) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append('screenshot', fileInput.files[0]);

    try {
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        setIsConfirmed(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error.');
    } finally {
      setIsLoading(false);
    }
  };

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
    {
      step: "01",
      title: "Concept",
      subtitle: "The Core Definition",
      desc: "Establishing a crystal-clear foundational definition of the musical theory, rhythm matrix, or fingerstyle mechanism before physical execution."
    },
    {
      step: "02",
      title: "Mechanism",
      subtitle: "How It Works",
      desc: "Deconstructing the structural engineering of the technique—analyzing how fretboard geometry, timing divisions, and mechanics interact mechanically."
    },
    {
      step: "03",
      title: "Observation",
      subtitle: "Real-world Example",
      desc: "Analyzing how master arrangers and rhythmic architects apply this exact framework in iconic compositions and live musical contexts."
    },
    {
      step: "04",
      title: "Analysis",
      subtitle: "Why It Works",
      desc: "Deep-diving into the cognitive and psychological principles behind the system to understand the underlying logic rather than blindly imitating."
    },
    {
      step: "05",
      title: "Practice",
      subtitle: "Skill Exercise",
      desc: "Executing targeted, high-efficiency deliberate practice drills designed to build mechanical precision, timing accuracy, and cognitive muscle memory."
    },
    {
      step: "06",
      title: "Creation",
      subtitle: "Build Your Own",
      desc: "Transitioning from consumption to creation by applying the learned architectural framework to compose or arrange an original musical phrase."
    },
    {
      step: "07",
      title: "Feedback",
      subtitle: "Review & Refine",
      desc: "Rigorous system evaluation and mentor review to eliminate mechanical inefficiencies, timing drifts, and structural errors."
    },
    {
      step: "08",
      title: "Reflection",
      subtitle: "Lesson Learned",
      desc: "Consolidating cognitive breakthroughs and converting technical practice into permanent mental models for long-term musical autonomy."
    }
  ];

  const experienceItems = [
    { label: "Teaching Experience", value: "2+ Years" },
    { label: "Personal Learning Journey", value: "17 Years" },
    { label: "Students Guided", value: "300+" },
    { label: "Role", value: "Founder & Creator" }
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
      {/* Luxury Navigation Bar */}
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
          <a href="/about" style={{ color: "#D4AF37", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
          <a href="/#manifesto" style={{ color: "inherit", textDecoration: "none" }}>MANIFESTO</a>
        </div>

        <div>
          <button 
            onClick={() => {
              setIsConfirmed(false);
              setScreenshot(null);
              setIsModalOpen(true);
            }}
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              padding: "8px 16px",
              borderRadius: "2px",
              fontSize: "10px",
              fontWeight: "700",
              letterSpacing: "2px",
              color: "#D4AF37",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            VIP ACCESS
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 20px 20px", textAlign: "center", boxSizing: "border-box" }}>
        <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "700" }}>
          Solo Genius Architecture
        </span>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: "800", letterSpacing: "-0.5px", margin: "10px 0 10px 0", color: "#ffffff" }}>
          About The Ecosystem
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "13px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.6", padding: "0 10px" }}>
          Explore the founder&apos;s background or experience our proprietary student learning operating system.
        </p>

        {/* INTERACTIVE TAB SWITCHER BUTTONS */}
        <div style={{ 
          display: "inline-flex", 
          backgroundColor: "rgba(17, 24, 39, 0.8)", 
          border: "1px solid rgba(212, 175, 55, 0.3)", 
          borderRadius: "6px", 
          padding: "4px", 
          gap: "4px",
          marginTop: "25px",
          maxWidth: "100%",
          boxSizing: "border-box"
        }}>
          <button 
            onClick={() => setActiveTab('mentor')}
            style={{
              backgroundColor: activeTab === 'mentor' ? "#D4AF37" : "transparent",
              color: activeTab === 'mentor' ? "#030712" : "#d1d5db",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            MEET YOUR MENTOR
          </button>
          
          <button 
            onClick={() => setActiveTab('learning_os')}
            style={{
              backgroundColor: activeTab === 'learning_os' ? "#D4AF37" : "transparent",
              color: activeTab === 'learning_os' ? "#030712" : "#d1d5db",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            STUDENT LEARNING OS
          </button>
        </div>
      </section>

      {/* DYNAMIC CONTENT CONTAINER */}
      <section style={{ maxWidth: "1050px", margin: "0 auto", padding: "20px 20px 80px", boxSizing: "border-box" }}>
        
        {/* TAB 1: MEET YOUR MENTOR CONTENT */}
        {activeTab === 'mentor' && (
          <div>
            
            {/* FOUNDER SECTION */}
            <div style={{
              display: "flex",
              gap: "25px",
              alignItems: "stretch",
              justifyContent: "center",
              maxWidth: "820px",
              margin: "0 auto 40px auto",
              flexWrap: "wrap",
              boxSizing: "border-box"
            }}>
              {/* Left Side: Reduced Size Image Frame */}
              <div style={{
                width: "100%",
                maxWidth: "220px",
                height: "320px",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                backgroundColor: "#0b0f19",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                flexShrink: 0,
                margin: "0 auto"
              }}>
                <img 
                  src="/yang.jpeg" 
                  alt="Yang Karg - Founder" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} 
                />
              </div>

              {/* Right Side: High-End Luxury Info Card */}
              <div style={{
                flex: "1",
                minWidth: "280px",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                borderRadius: "6px",
                padding: "24px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box"
              }}>
                <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", display: "block" }}>
                  SOLO GENIUS ARCHITECT
                </span>
                <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 10px 0" }}>
                  Yang Karg
                </h2>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#D4AF37", marginBottom: "16px" }} />
                <p style={{ color: "#9ca3af", fontSize: "13px", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                  &ldquo;I don&apos;t believe great musicians are created through memorization. I believe they are built through understanding, deliberate practice, and original thinking.&rdquo;
                </p>
                <p style={{ color: "#d1d5db", fontSize: "12.5px", lineHeight: "1.7", margin: 0 }}>
                  For me, music is not the destination—it is the medium through which people discover how to think, create, and express themselves. That belief became the core architectural foundation of Solo Genius.
                </p>
              </div>
            </div>

            {/* Areas of Focus */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "14px" }}>Areas of Focus</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                {focusAreas.map((area, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "4px",
                    padding: "14px",
                    color: "#e5e7eb",
                    fontSize: "12px",
                    fontWeight: "600",
                    boxSizing: "border-box"
                  }}>
                    ✦ {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "14px" }}>Teaching Philosophy</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                {teachingPhilosophy.map((phil, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "6px",
                    padding: "18px",
                    boxSizing: "border-box"
                  }}>
                    <h4 style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "700", margin: "0 0 6px 0" }}>{phil.title}</h4>
                    <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: "1.5", margin: 0 }}>{phil.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards */}
            <div style={{ marginTop: "40px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "14px" }}>Background & Metrics</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "14px" }}>
                {experienceItems.map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "6px",
                    padding: "18px",
                    textAlign: "center",
                    boxSizing: "border-box"
                  }}>
                    <span style={{ color: "#D4AF37", fontSize: "20px", fontWeight: "800", display: "block", marginBottom: "4px" }}>
                      {item.value}
                    </span>
                    <span style={{ color: "#9ca3af", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: STUDENT LEARNING OS CONTENT */}
        {activeTab === 'learning_os' && (
          <div>
            <div style={{ textAlign: "center", marginBottom: "35px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px 0" }}>Student Learning OS</h2>
              
              {/* STEP-BY-STEP SEQUENTIAL FLOW */}
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "center", 
                alignItems: "center", 
                gap: "6px", 
                maxWidth: "900px", 
                margin: "0 auto",
                padding: "12px",
                backgroundColor: "rgba(17, 24, 39, 0.4)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "6px",
                boxSizing: "border-box"
              }}>
                {studentLearningOS.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ 
                      color: "#D4AF37", 
                      fontSize: "10px", 
                      fontWeight: "700", 
                      letterSpacing: "0.5px",
                      textTransform: "uppercase"
                    }}>
                      {item.title}
                    </span>
                    {idx < studentLearningOS.length - 1 && (
                      <span style={{ color: "rgba(212, 175, 55, 0.5)", fontSize: "12px", fontWeight: "700" }}>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning OS Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "40px" }}>
              {studentLearningOS.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: "rgba(17, 24, 39, 0.6)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "6px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px" }}>
                        STAGE — {item.step}
                      </span>
                      <span style={{ color: "#9ca3af", fontSize: "10.5px", fontStyle: "italic" }}>
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", margin: "0 0 8px 0" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#9ca3af", fontSize: "12.5px", lineHeight: "1.6", margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Commitment Box */}
            <div style={{ backgroundColor: "rgba(17, 24, 39, 0.5)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "6px", padding: "24px", boxSizing: "border-box" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>Operating Architecture</h3>
              <p style={{ color: "#9ca3af", fontSize: "12.5px", lineHeight: "1.7", margin: 0 }}>
                Every lesson inside Solo Genius is routed through this 8-stage operating system. We do not teach students to memorize instructions—we install a permanent cognitive framework that empowers them to decode, practice, and create music autonomously for a lifetime.
              </p>
            </div>
          </div>
        )}

      </section>

      {/* Quote Banner */}
      <div style={{
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        boxSizing: "border-box"
      }}>
        <h2 style={{ fontSize: "clamp(18px, 4vw, 22px)", fontWeight: "700", color: "#D4AF37", fontStyle: "italic", margin: 0 }}>
          &ldquo;Become the Creator You Were Designed To Be.&rdquo;
        </h2>
      </div>

      {/* Private Access / KPay Payment Modal */}
      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(3, 7, 18, 0.85)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          padding: "15px",
          boxSizing: "border-box"
        }}>
          <div style={{
            backgroundColor: "#111827",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "6px",
            padding: "24px 20px",
            width: "100%",
            maxWidth: "450px",
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
            position: "relative",
            boxSizing: "border-box"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "#9ca3af",
                fontSize: "16px",
                cursor: "pointer",
                padding: "4px"
              }}
            >
              ✕
            </button>

            {!isConfirmed ? (
              <div>
                <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                  SECURE ACCESS GATEWAY
                </span>
                <h2 style={{ fontSize: "19px", fontWeight: "700", color: "#ffffff", margin: "8px 0 16px 0" }}>
                  KBZ Pay Transfer
                </h2>
                
                <div style={{ backgroundColor: "rgba(3, 7, 18, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "6px", padding: "14px", marginBottom: "16px" }}>
                  <p style={{ color: "#9ca3af", fontSize: "12px", margin: "0 0 4px 0" }}>Account Name: <strong style={{ color: "#ffffff" }}>Yan Kha</strong></p>
                  <p style={{ color: "#9ca3af", fontSize: "12px", margin: 0 }}>KPay Number: <strong style={{ color: "#D4AF37", fontSize: "14px", letterSpacing: "1px" }}>09971097886</strong></p>
                </div>

                <form onSubmit={handleConfirmPayment} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "6px", fontWeight: "500" }}>
                      Upload Payment Screenshot
                    </label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileUpload}
                      required
                      style={{
                        width: "100%",
                        color: "#9ca3af",
                        fontSize: "11px",
                        padding: "8px",
                        backgroundColor: "rgba(3, 7, 18, 0.4)",
                        border: "1px dashed rgba(212, 175, 55, 0.4)",
                        borderRadius: "4px",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  {screenshot && (
                    <div style={{ maxHeight: "120px", overflow: "hidden", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <img src={screenshot} alt="Preview" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isLoading}
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#030712",
                      border: "none",
                      padding: "12px",
                      borderRadius: "4px",
                      fontWeight: "700",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.7 : 1,
                      marginTop: "6px",
                      width: "100%"
                    }}
                  >
                    {isLoading ? "SENDING TO BOSS..." : "CONFIRM PAYMENT"}
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "15px 0" }}>
                <div style={{ fontSize: "38px", marginBottom: "12px" }}>✨</div>
                <h2 style={{ fontSize: "19px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
                  Payment Submitted Successfully
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: "1.5", marginBottom: "20px" }}>
                  Your screenshot has been sent directly to Boss&apos;s Telegram. Access will be verified shortly.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#D4AF37",
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    padding: "9px 20px",
                    borderRadius: "4px",
                    fontWeight: "600",
                    fontSize: "11px",
                    cursor: "pointer"
                  }}
                >
                  CLOSE WINDOW
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
        </div>
      </footer>
    </div>
  );
}