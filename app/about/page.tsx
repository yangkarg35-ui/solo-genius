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
      overflowX: "hidden"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 60px",
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
            style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.5)" }}
          />
          <span style={{ fontSize: "15px", fontWeight: "700", color: "#ffffff", letterSpacing: "2px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "35px", fontSize: "13px", fontWeight: "500", letterSpacing: "1px", color: "#d1d5db" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "#D4AF37", textDecoration: "none" }}>About</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>Explore</a>
          <a href="/#manifesto" style={{ color: "inherit", textDecoration: "none" }}>Manifesto</a>
        </div>

        <div>
          <button 
            onClick={() => {
              setIsConfirmed(false);
              setScreenshot(null);
              setIsModalOpen(true);
            }}
            style={{
              background: "transparent",
              border: "1px solid rgba(212, 175, 55, 0.6)",
              padding: "9px 20px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              color: "#D4AF37",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            PRIVATE ACCESS
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "150px 40px 20px", textAlign: "center" }}>
        <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "11px", letterSpacing: "3px", fontWeight: "700" }}>
          Solo Genius Architecture
        </span>
        <h1 style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-1px", margin: "12px 0 10px 0", color: "#ffffff" }}>
          About The Ecosystem
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "14px", maxWidth: "550px", margin: "0 auto", lineHeight: "1.6" }}>
          Explore the founder&apos;s background or experience our proprietary student learning operating system.
        </p>

        {/* INTERACTIVE TAB SWITCHER BUTTONS */}
        <div style={{ 
          display: "inline-flex", 
          backgroundColor: "rgba(17, 24, 39, 0.8)", 
          border: "1px solid rgba(212, 175, 55, 0.3)", 
          borderRadius: "8px", 
          padding: "5px", 
          gap: "6px",
          marginTop: "35px" 
        }}>
          <button 
            onClick={() => setActiveTab('mentor')}
            style={{
              backgroundColor: activeTab === 'mentor' ? "#D4AF37" : "transparent",
              color: activeTab === 'mentor' ? "#030712" : "#d1d5db",
              border: "none",
              padding: "10px 24px",
              borderRadius: "6px",
              fontSize: "12px",
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
              padding: "10px 24px",
              borderRadius: "6px",
              fontSize: "12px",
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
      <section style={{ maxWidth: "1050px", margin: "0 auto", padding: "20px 40px 100px" }}>
        
        {/* TAB 1: MEET YOUR MENTOR CONTENT */}
        {activeTab === 'mentor' && (
          <div style={{ animation: "fadeIn 0.4s ease-in-out" }}>
            
            {/* FOUNDER SECTION (ပုံအရွယ်အစားကို သေးပြီး ညီညာအောင် ပြင်ထားသည် - Width: 220px, Height: 350px) */}
            <div style={{
              display: "flex",
              gap: "35px",
              alignItems: "stretch",
              justifyContent: "center",
              maxWidth: "820px",
              margin: "0 auto 45px auto",
              flexWrap: "wrap"
            }}>
              {/* Left Side: Reduced Size Image Frame */}
              <div style={{
                width: "220px",
                height: "350px",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                backgroundColor: "#0b0f19",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                flexShrink: 0
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
                minWidth: "300px",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                borderRadius: "10px",
                padding: "35px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
                  SOLO GENIUS ARCHITECT
                </span>
                <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#ffffff", margin: "0 0 12px 0" }}>
                  Yang Karg
                </h2>
                <div style={{ width: "45px", height: "2px", backgroundColor: "#D4AF37", marginBottom: "20px" }} />
                <p style={{ color: "#9ca3af", fontSize: "13.5px", fontStyle: "italic", lineHeight: "1.7", margin: "0 0 20px 0" }}>
                  &ldquo;I don&apos;t believe great musicians are created through memorization. I believe they are built through understanding, deliberate practice, and original thinking.&rdquo;
                </p>
                <p style={{ color: "#d1d5db", fontSize: "13px", lineHeight: "1.8", margin: 0 }}>
                  For me, music is not the destination—it is the medium through which people discover how to think, create, and express themselves. That belief became the core architectural foundation of Solo Genius.
                </p>
              </div>
            </div>

            {/* Areas of Focus */}
            <div style={{ marginBottom: "45px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "18px" }}>Areas of Focus</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px" }}>
                {focusAreas.map((area, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "6px",
                    padding: "16px",
                    color: "#e5e7eb",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}>
                    ✦ {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div style={{ marginBottom: "45px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "18px" }}>Teaching Philosophy</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
                {teachingPhilosophy.map((phil, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "8px",
                    padding: "22px"
                  }}>
                    <h4 style={{ color: "#D4AF37", fontSize: "14px", fontWeight: "700", margin: "0 0 6px 0" }}>{phil.title}</h4>
                    <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>{phil.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Cards */}
            <div style={{ marginTop: "50px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "18px" }}>Background & Metrics</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
                {experienceItems.map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "8px",
                    padding: "22px",
                    textAlign: "center"
                  }}>
                    <span style={{ color: "#D4AF37", fontSize: "24px", fontWeight: "800", display: "block", marginBottom: "4px" }}>
                      {item.value}
                    </span>
                    <span style={{ color: "#9ca3af", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "600" }}>
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
          <div style={{ animation: "fadeIn 0.4s ease-in-out" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#ffffff", margin: "0 0 15px 0" }}>Student Learning OS</h2>
              
              {/* STEP-BY-STEP SEQUENTIAL FLOW (ARROWS) */}
              <div style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "center", 
                alignItems: "center", 
                gap: "8px", 
                maxWidth: "900px", 
                margin: "0 auto",
                padding: "14px",
                backgroundColor: "rgba(17, 24, 39, 0.4)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "8px"
              }}>
                {studentLearningOS.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ 
                      color: "#D4AF37", 
                      fontSize: "11px", 
                      fontWeight: "700", 
                      letterSpacing: "0.5px",
                      textTransform: "uppercase"
                    }}>
                      {item.title}
                    </span>
                    {idx < studentLearningOS.length - 1 && (
                      <span style={{ color: "rgba(212, 175, 55, 0.5)", fontSize: "13px", fontWeight: "700" }}>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning OS Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "45px" }}>
              {studentLearningOS.map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: "rgba(17, 24, 39, 0.6)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  borderRadius: "8px",
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px" }}>
                        STAGE — {item.step}
                      </span>
                      <span style={{ color: "#9ca3af", fontSize: "11px", fontStyle: "italic" }}>
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#ffffff", margin: "0 0 10px 0" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Commitment Box */}
            <div style={{ backgroundColor: "rgba(17, 24, 39, 0.5)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "30px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>Operating Architecture</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
                Every lesson inside Solo Genius is routed through this 8-stage operating system. We do not teach students to memorize instructions—we install a permanent cognitive framework that empowers them to decode, practice, and create music autonomously for a lifetime.
              </p>
            </div>
          </div>
        )}

      </section>

      {/* Quote Banner */}
      <div style={{
        textAlign: "center",
        padding: "50px 20px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#D4AF37", fontStyle: "italic", margin: 0 }}>
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
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "#111827",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "10px",
            padding: "35px",
            width: "100%",
            maxWidth: "450px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
            position: "relative"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                background: "transparent",
                border: "none",
                color: "#9ca3af",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            {!isConfirmed ? (
              <div>
                <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                  SECURE ACCESS GATEWAY
                </span>
                <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", margin: "8px 0 18px 0" }}>
                  KBZ Pay Transfer
                </h2>
                
                <div style={{ backgroundColor: "rgba(3, 7, 18, 0.6)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "18px", marginBottom: "20px" }}>
                  <p style={{ color: "#9ca3af", fontSize: "13px", margin: "0 0 6px 0" }}>Account Name: <strong style={{ color: "#ffffff" }}>Yan Kha</strong></p>
                  <p style={{ color: "#9ca3af", fontSize: "13px", margin: 0 }}>KPay Number: <strong style={{ color: "#D4AF37", fontSize: "15px", letterSpacing: "1px" }}>09971097886</strong></p>
                </div>

                <form onSubmit={handleConfirmPayment} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "12px", marginBottom: "6px", fontWeight: "500" }}>
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
                        fontSize: "12px",
                        padding: "10px",
                        backgroundColor: "rgba(3, 7, 18, 0.4)",
                        border: "1px dashed rgba(212, 175, 55, 0.4)",
                        borderRadius: "6px"
                      }}
                    />
                  </div>

                  {screenshot && (
                    <div style={{ maxHeight: "140px", overflow: "hidden", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)" }}>
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
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "13px",
                      letterSpacing: "1px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.7 : 1,
                      marginTop: "8px"
                    }}
                  >
                    {isLoading ? "SENDING TO BOSS..." : "CONFIRM PAYMENT"}
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "15px 0" }}>
                <div style={{ fontSize: "42px", marginBottom: "12px" }}>✨</div>
                <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
                  Payment Submitted Successfully
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Your screenshot has been sent directly to Boss&apos;s Telegram. Access will be verified shortly.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#D4AF37",
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    padding: "9px 22px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "12px",
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
      <footer style={{ padding: "50px 60px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#6b7280", fontSize: "11px", letterSpacing: "1px" }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "25px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
        </div>
      </footer>
    </div>
  );
}