'use client';
import { useState } from 'react';

export default function ExplorePage() {
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

  const openVerifyModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConfirmed(false);
    setScreenshot(null);
    setIsModalOpen(true);
  };

  const modules = [
    {
      pillar: "PILLAR 01",
      title: "FOUNDATION",
      subtitle: "BUILDING THE CORE",
      purpose: "Build the essential foundation required for lifelong musical growth."
    },
    {
      pillar: "PILLAR 02",
      title: "MUSICAL LANGUAGE",
      subtitle: "UNDERSTANDING HOW MUSIC WORKS",
      purpose: "Develop the ability to understand, analyze, and communicate through music."
    },
    {
      pillar: "PILLAR 03",
      title: "CREATIVE DEVELOPMENT",
      subtitle: "BUILDING YOUR CREATIVE VOICE",
      purpose: "Transform knowledge into original expression."
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

        <div style={{ display: "flex", gap: "18px", fontSize: "11px", fontWeight: "500", letterSpacing: "1.5px", color: "#9ca3af", flexWrap: "wrap", alignItems: "center" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "#D4AF37", textDecoration: "none" }}>EXPLORE</a>
          <a href="#verify" onClick={openVerifyModal} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>VERIFY</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 20px 60px", textAlign: "center", boxSizing: "border-box" }}>
        <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "700" }}>
          Our Learning System Is Designed Around One Principle:
        </span>
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#d1d5db", letterSpacing: "1.5px", margin: "15px 0 20px 0" }}>
          UNDERSTAND → PRACTICE → CREATE → REFLECT → IMPROVE
        </p>
        <h1 style={{ fontSize: "clamp(26px, 4.5vw, 42px)", fontWeight: "800", letterSpacing: "-0.5px", margin: "0 0 40px 0", color: "#ffffff" }}>
          Learning Is A System, Not A Collection Of Lessons
        </h1>

        <div style={{ textAlign: "left", maxWidth: "1050px", margin: "0 auto" }}>
          <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
            System Modules
          </span>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#ffffff", margin: "6px 0 25px 0" }}>
            Curated Masterclass Series
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {modules.map((mod, idx) => (
              <div key={idx} style={{
                backgroundColor: "rgba(17, 24, 39, 0.6)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                borderRadius: "6px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box"
              }}>
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", display: "block", marginBottom: "8px" }}>
                    {mod.pillar}
                  </span>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", margin: "0 0 6px 0" }}>
                    {mod.title}
                  </h3>
                  <span style={{ color: "#9ca3af", fontSize: "10.5px", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
                    {mod.subtitle}
                  </span>
                  <p style={{ color: "#d1d5db", fontSize: "12.5px", lineHeight: "1.6", margin: 0 }}>
                    <strong style={{ color: "#ffffff" }}>Purpose:</strong> {mod.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment / Verification Modal */}
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
        textAlign: "center",
        marginTop: "60px"
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