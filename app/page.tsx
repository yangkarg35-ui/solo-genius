'use client';

import { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // New Form Fields State
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');

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
    formData.append('fullName', fullName);
    formData.append('age', age);
    formData.append('city', city);
    formData.append('phone', phone);
    formData.append('goal', goal);

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

  return (
    <div style={{
      backgroundColor: "#030712",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      scrollBehavior: "smooth",
      overflowX: "hidden",
      width: "100%",
      boxSizing: "border-box"
    }}>
      {/* Luxury Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        padding: "16px 20px",
        width: "100%",
        backgroundColor: "rgba(3, 7, 18, 0.95)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.6)" }}
          />
          <span style={{ fontSize: "11px", fontWeight: "700", color: "#ffffff", letterSpacing: "2.5px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "14px", fontSize: "10px", fontWeight: "600", letterSpacing: "1.5px", color: "#888888", alignItems: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "#D4AF37", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "inherit", textDecoration: "none" }}>VERIFY</a>
        </div>

        <div>
          <button 
            onClick={() => {
              setIsConfirmed(false);
              setScreenshot(null);
              setFullName('');
              setAge('');
              setCity('');
              setPhone('');
              setGoal('');
              setIsModalOpen(true);
            }}
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              padding: "7px 14px",
              borderRadius: "2px",
              fontSize: "9.5px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              color: "#D4AF37",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            APPLY FOR ENROLLMENT
          </button>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
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
          filter: "brightness(1.1) contrast(1.1) saturate(1.05)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(3,7,18,0.35) 0%, rgba(3,7,18,0.88) 100%)",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "850px", zIndex: 2, display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "700" }}>
            The Architecture of Mastery behind creative musicians
          </span>
          <h1 style={{ fontSize: "clamp(28px, 6.5vw, 48px)", fontWeight: "800", letterSpacing: "-0.5px", color: "#ffffff", margin: 0, lineHeight: "1.2" }}>
            Become The Creator<br />
            <span style={{ color: "#D4AF37" }}>You Were Designed To Be</span>
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.6", letterSpacing: "0.5px", margin: "8px 0 24px 0", padding: "0 10px" }}>
            We believe originality is more valuable than imitation.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
            <a href="/explore" style={{
              backgroundColor: "#ffffff",
              color: "#030712",
              padding: "12px 28px",
              borderRadius: "2px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(255,255,255,0.15)"
            }}>
              EXPLORE SYSTEMS
            </a>
            <a href="#manifesto" style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "12px 28px",
              borderRadius: "2px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textDecoration: "none",
              textAlign: "center"
            }}>
              OUR MANIFESTO
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" style={{ maxWidth: "1200px", margin: "0 auto", padding: "90px 20px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "700" }}>
            Core Philosophy
          </span>
          <h2 style={{ fontSize: "clamp(26px, 4.5vw, 40px)", fontWeight: "800", letterSpacing: "-0.5px", margin: "10px 0 15px 0", color: "#ffffff" }}>
            Our Manifesto
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "14px", maxWidth: "650px", margin: "0 auto", lineHeight: "1.6", padding: "0 10px" }}>
            We exist to build creators who think deeply, create intentionally, and pursue excellence without compromise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {manifestoItems.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(11, 15, 25, 0.75)", 
              border: "1px solid rgba(212, 175, 55, 0.2)", 
              borderRadius: "4px", 
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              backdropFilter: "blur(8px)"
            }}>
              <div>
                <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px" }}>
                  {item.num} — PRINCIPLE
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#ffffff", margin: "10px 0 10px 0", letterSpacing: "-0.3px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply / Enrollment Modal */}
      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(3, 7, 18, 0.9)",
          backdropFilter: "blur(12px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          padding: "15px",
          boxSizing: "border-box"
        }}>
          <div style={{
            backgroundColor: "#0b0f19",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "6px",
            padding: "24px 20px",
            width: "100%",
            maxWidth: "520px",
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
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
                  SECURE ELITE ENROLLMENT
                </span>
                <h2 style={{ fontSize: "19px", fontWeight: "700", color: "#ffffff", margin: "8px 0 6px 0" }}>
                  Solo Genius Private Admission Form
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "12px", marginBottom: "16px", lineHeight: "1.5" }}>
                  Fill out your details and complete your tuition fee transfer via KBZ Pay to secure admission.
                </p>

                {/* Investment Breakdown Box */}
                <div style={{ backgroundColor: "rgba(3, 7, 18, 0.8)", border: "1px solid rgba(212, 175, 55, 0.3)", borderRadius: "4px", padding: "14px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                    <span style={{ color: "#9ca3af", fontSize: "11px" }}>Tuition Investment:</span>
                    <span style={{ color: "#D4AF37", fontSize: "13px", fontWeight: "800" }}>USD 500</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                    <span style={{ color: "#9ca3af", fontSize: "11px" }}>Exchange Rate:</span>
                    <span style={{ color: "#ffffff", fontSize: "11px", fontWeight: "600" }}>1 USD = 4,400 MMK</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#9ca3af", fontSize: "11px" }}>Total Payable Amount:</span>
                    <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "800" }}>2,200,000 MMK</span>
                  </div>
                </div>

                {/* KPay Transfer Details Box */}
                <div style={{ backgroundColor: "rgba(17, 24, 39, 0.9)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "4px", padding: "14px", marginBottom: "18px" }}>
                  <p style={{ color: "#9ca3af", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "6px", fontWeight: "700" }}>
                    KBZ Pay Official Transfer Details
                  </p>
                  <p style={{ color: "#d1d5db", fontSize: "12px", margin: "0 0 4px 0" }}>Account Name: <strong style={{ color: "#ffffff" }}>Yan Kha</strong></p>
                  <p style={{ color: "#d1d5db", fontSize: "12px", margin: 0 }}>KPay Number: <strong style={{ color: "#D4AF37", fontSize: "15px", letterSpacing: "1px" }}>09971097886</strong></p>
                </div>

                {/* Enrollment Form */}
                <form onSubmit={handleConfirmPayment} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "4px", fontWeight: "500" }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="Enter your full name"
                      style={{
                        width: "100%",
                        color: "#ffffff",
                        fontSize: "12px",
                        padding: "10px",
                        backgroundColor: "rgba(3, 7, 18, 0.6)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "4px",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div>
                      <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "4px", fontWeight: "500" }}>
                        Age *
                      </label>
                      <input 
                        type="number" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        placeholder="Age"
                        style={{
                          width: "100%",
                          color: "#ffffff",
                          fontSize: "12px",
                          padding: "10px",
                          backgroundColor: "rgba(3, 7, 18, 0.6)",
                          border: "1px solid rgba(212, 175, 55, 0.3)",
                          borderRadius: "4px",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "4px", fontWeight: "500" }}>
                        City / Township *
                      </label>
                      <input 
                        type="text" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="City / Township"
                        style={{
                          width: "100%",
                          color: "#ffffff",
                          fontSize: "12px",
                          padding: "10px",
                          backgroundColor: "rgba(3, 7, 18, 0.6)",
                          border: "1px solid rgba(212, 175, 55, 0.3)",
                          borderRadius: "4px",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "4px", fontWeight: "500" }}>
                      Phone Number / Telegram *
                    </label>
                    <input 
                      type="text" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Phone number or Telegram contact"
                      style={{
                        width: "100%",
                        color: "#ffffff",
                        fontSize: "12px",
                        padding: "10px",
                        backgroundColor: "rgba(3, 7, 18, 0.6)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "4px",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "4px", fontWeight: "500" }}>
                      Musical Goal / Background *
                    </label>
                    <textarea 
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      required
                      rows={3}
                      placeholder="Briefly state your primary musical goal or current level..."
                      style={{
                        width: "100%",
                        color: "#ffffff",
                        fontSize: "12px",
                        padding: "10px",
                        backgroundColor: "rgba(3, 7, 18, 0.6)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "11px", marginBottom: "6px", fontWeight: "500" }}>
                      Upload Payment Transfer Receipt *
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
                        backgroundColor: "rgba(3, 7, 18, 0.5)",
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
                      borderRadius: "2px",
                      fontWeight: "700",
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.7 : 1,
                      marginTop: "6px",
                      width: "100%"
                    }}
                  >
                    {isLoading ? "TRANSMITTING APPLICATION..." : "SUBMIT APPLICATION & PROOF"}
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "38px", marginBottom: "12px" }}>✨</div>
                <h2 style={{ fontSize: "19px", fontWeight: "700", color: "#ffffff", marginBottom: "8px" }}>
                  Application Received Successfully
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: "1.5", marginBottom: "20px" }}>
                  Your admission details and payment receipt have been dispatched securely to Boss&apos;s Telegram channel. Verification will be processed promptly.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#D4AF37",
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    padding: "10px 20px",
                    borderRadius: "2px",
                    fontWeight: "600",
                    fontSize: "11px",
                    letterSpacing: "1px",
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

      {/* Luxury Footer */}
      <footer style={{ 
        padding: "40px 20px", 
        borderTop: "1px solid rgba(255, 255, 255, 0.06)", 
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