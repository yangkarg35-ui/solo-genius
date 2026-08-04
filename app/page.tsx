'use client';
import { useState } from 'react';

export default function HomePage() {
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
          <a href="/" style={{ color: "#D4AF37", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>Explore</a>
          <a href="#manifesto" style={{ color: "inherit", textDecoration: "none" }}>Manifesto</a>
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
              padding: "10px 22px",
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

      {/* Hero Section */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 20px 40px",
        position: "relative",
        overflow: "hidden"
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
          filter: "brightness(1.15) contrast(1.15) saturate(1.1)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(3,7,18,0.2) 0%, rgba(3,7,18,0.75) 100%)",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "900px", zIndex: 2, display: "flex", flexDirection: "column", gap: "15px" }}>
          <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "12px", letterSpacing: "3px", fontWeight: "700" }}>
            The Architecture of Mastery behind creative musicians
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "800", letterSpacing: "-1px", color: "#ffffff", margin: 0, lineHeight: "1.2" }}>
            Become The Creator<br />
            <span style={{ color: "#D4AF37" }}>You Were Designed To Be</span>
          </h1>
          <p style={{ color: "#e5e7eb", fontSize: "16px", lineHeight: "1.6", letterSpacing: "0.5px", margin: "10px 0 30px 0" }}>
            We believe originality is more valuable than imitation.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="/explore" style={{
              backgroundColor: "#ffffff",
              color: "#030712",
              padding: "14px 32px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textDecoration: "none"
            }}>
              EXPLORE SYSTEMS
            </a>
            <a href="#manifesto" style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "14px 32px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textDecoration: "none"
            }}>
              OUR MANIFESTO
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto Section (Grid / Card OS Style) */}
      <section id="manifesto" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "12px", letterSpacing: "3px", fontWeight: "700" }}>
            Core Philosophy
          </span>
          <h2 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", margin: "15px 0 20px 0", color: "#ffffff" }}>
            Our Manifesto
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "16px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            We exist to build creators who think deeply, create intentionally, and pursue excellence without compromise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {manifestoItems.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(17, 24, 39, 0.6)", 
              border: "1px solid rgba(212, 175, 55, 0.2)", 
              borderRadius: "8px", 
              padding: "35px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <span style={{ color: "#D4AF37", fontSize: "12px", fontWeight: "700", letterSpacing: "2px" }}>
                  {item.num} — PRINCIPLE
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#ffffff", margin: "12px 0 15px 0", letterSpacing: "-0.5px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
            borderRadius: "12px",
            padding: "40px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
            position: "relative"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#9ca3af",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            {!isConfirmed ? (
              <div>
                <span style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                  SECURE ELITE ENROLLMENT
                </span>
                <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#ffffff", margin: "10px 0 6px 0" }}>
                  Solo Genius Private Admission
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "20px" }}>
                  Complete your tuition fee transfer via KBZ Pay to secure your exclusive access.
                </p>

                {/* Investment Breakdown Box */}
                <div style={{ backgroundColor: "rgba(3, 7, 18, 0.7)", border: "1px solid rgba(212, 175, 55, 0.3)", borderRadius: "8px", padding: "20px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "10px" }}>
                    <span style={{ color: "#9ca3af", fontSize: "13px" }}>Tuition Investment:</span>
                    <span style={{ color: "#D4AF37", fontSize: "16px", fontWeight: "800" }}>USD 500</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "10px" }}>
                    <span style={{ color: "#9ca3af", fontSize: "13px" }}>Exchange Rate:</span>
                    <span style={{ color: "#ffffff", fontSize: "13px", fontWeight: "600" }}>1 USD = 4,400 MMK</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#9ca3af", fontSize: "13px" }}>Total Payable Amount:</span>
                    <span style={{ color: "#ffffff", fontSize: "16px", fontWeight: "800" }}>2,200,000 MMK</span>
                  </div>
                </div>

                {/* KPay Transfer Details Box */}
                <div style={{ backgroundColor: "rgba(17, 24, 39, 0.8)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "18px", marginBottom: "25px" }}>
                  <p style={{ color: "#9ca3af", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", fontWeight: "700" }}>
                    KBZ Pay Official Transfer Details
                  </p>
                  <p style={{ color: "#d1d5db", fontSize: "13px", margin: "0 0 6px 0" }}>Account Name: <strong style={{ color: "#ffffff" }}>Yan Kha</strong></p>
                  <p style={{ color: "#d1d5db", fontSize: "13px", margin: 0 }}>KPay Number: <strong style={{ color: "#D4AF37", fontSize: "16px", letterSpacing: "1px" }}>09971097886</strong></p>
                </div>

                <form onSubmit={handleConfirmPayment} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", color: "#d1d5db", fontSize: "13px", marginBottom: "8px", fontWeight: "500" }}>
                      Upload Payment Transfer Receipt
                    </label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileUpload}
                      required
                      style={{
                        width: "100%",
                        color: "#9ca3af",
                        fontSize: "13px",
                        padding: "10px",
                        backgroundColor: "rgba(3, 7, 18, 0.4)",
                        border: "1px dashed rgba(212, 175, 55, 0.4)",
                        borderRadius: "6px"
                      }}
                    />
                  </div>

                  {screenshot && (
                    <div style={{ maxHeight: "150px", overflow: "hidden", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)" }}>
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
                      padding: "14px",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      letterSpacing: "1px",
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.7 : 1,
                      marginTop: "5px"
                    }}
                  >
                    {isLoading ? "TRANSMITTING TO BOSS..." : "SUBMIT PROOF FOR VERIFICATION"}
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "15px" }}>✨</div>
                <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
                  Admission Proof Received
                </h2>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6", marginBottom: "25px" }}>
                  Your receipt has been dispatched securely to Boss&apos;s Telegram channel. Verification will be processed promptly.
                </p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#D4AF37",
                    border: "1px solid rgba(212, 175, 55, 0.6)",
                    padding: "10px 24px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "13px",
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
      <footer style={{ padding: "60px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#6b7280", fontSize: "12px", letterSpacing: "1px" }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
        </div>
      </footer>
    </div>
  );
}