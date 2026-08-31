'use client';

import { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Application Form State
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

  const handleConfirmApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('age', age);
    formData.append('city', city);
    formData.append('phone', phone);
    formData.append('goal', goal);
    if (screenshot) {
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput?.files?.[0]) {
        formData.append('screenshot', fileInput.files[0]);
      }
    }

    try {
      const res = await fetch('/api/verify-payment', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setIsConfirmed(true);
      } else {
        alert('Something went wrong. Please check your submission.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error.');
    } finally {
      setIsLoading(false);
    }
  };

  const systemPillars = [
    {
      num: "01",
      title: "Transformation Architect",
      desc: "Not a school or course platform. An exclusive private environment for capable people to compound their identity, judgment, and leverage."
    },
    {
      num: "02",
      title: "Bottleneck Diagnosis",
      desc: "We don't ask what you need to learn. We diagnose what is preventing your next level and deploy exact intelligence, AI, and systems."
    },
    {
      num: "03",
      title: "Identity & Autonomy",
      desc: "Absolute artistic and intellectual sovereignty. Designed strictly for the 0.000833% market segment who refuse ordinary standards."
    },
    {
      num: "04",
      title: "Master Ecosystem Bundle",
      desc: "Replacing fragmented pieces with an integrated operating system. Connect, build, ship, and compound your real-world output."
    }
  ];

  return (
    <div style={{
      backgroundColor: "#0d0e11",
      color: "#e5e5e7",
      minHeight: "100vh",
      fontFamily: "var(--font-serif), 'Didot', 'Bodoni MT', 'Times New Roman', serif",
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
        gap: "16px",
        padding: "24px 48px",
        width: "100%",
        backgroundColor: "rgba(13, 14, 17, 0.95)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.15)",
        backdropFilter: "blur(12px)",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(197, 160, 89, 0.4)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#C5A059", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              SOLO GENIUS
            </span>
            <span style={{ fontSize: "8px", color: "#8e8e93", letterSpacing: "2px", fontFamily: "sans-serif" }}>
              TRANSFORMATION OS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "10px", fontWeight: "400", letterSpacing: "2px", color: "#8e8e93", alignItems: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
          <a href="#system" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>System V2</a>
          <a href="#manifesto" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Doctrine</a>
          <a href="#ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Ecosystem</a>
        </div>

        <div>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{
              background: "#C5A059",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "10px 24px",
              borderRadius: "0px",
              fontSize: "9.5px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#0d0e11",
              cursor: "pointer",
              display: "inline-block",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              fontFamily: "sans-serif"
            }}
          >
            Apply for Access
          </button>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section style={{
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 40px 24px",
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
          filter: "brightness(0.75) contrast(1.1) saturate(0.8)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(13,14,17,0.5) 0%, rgba(13,14,17,0.97) 100%)",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "900px", zIndex: 2, display: "flex", flexDirection: "column", gap: "20px", width: "100%", alignItems: "center" }}>
          <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "600" }}>
            Not A School. A Private Transformation Operating System.
          </span>
          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: "400", letterSpacing: "-0.5px", color: "#f9f9fb", margin: 0, lineHeight: "1.15", textAlign: "center", width: "100%", maxWidth: "850px" }}>
            For Capable Minds Who Refuse <br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>To Become Ordinary.</span>
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.7", letterSpacing: "0.5px", margin: "12px 0 24px 0", fontFamily: "sans-serif", maxWidth: "700px", textAlign: "center" }}>
            We do not teach basic information. We select exceptional potential, diagnose your critical bottlenecks, and orchestrate environment, AI intelligence, and network leverage for measurable transformation.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={{
                backgroundColor: "#C5A059",
                color: "#0d0e11",
                padding: "14px 32px",
                borderRadius: "0px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "2px",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
                fontFamily: "sans-serif",
                transition: "opacity 0.3s"
              }}
            >
              Initiate Application
            </button>
          </div>
          <span style={{ color: "#8e8e93", textTransform: "uppercase", fontSize: "9.5px", letterSpacing: "2.5px", fontWeight: "400", fontFamily: "sans-serif", marginTop: "8px" }}>
            Strictly Selected — Fit & Agency Required
          </span>
        </div>

        {/* Stats Footer inside Hero */}
        <div style={{
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
          marginTop: "70px",
          borderTop: "1px solid rgba(197, 160, 89, 0.2)",
          paddingTop: "30px",
          textAlign: "center"
        }}>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>0.000833%</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Exclusive Segment</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>SYSTEM V2</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Transformation OS</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>NO SCHOOL</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Pure Environment</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>LEVERAGE</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Network & AI Core</div>
          </div>
        </div>
      </section>

      {/* System Architecture Section */}
      <section id="system" style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "500", fontFamily: "sans-serif" }}>
            System Architecture V2.0
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "12px 0 16px 0", color: "#f9f9fb" }}>
            How Solo Genius Operates
          </h2>
          <p style={{ color: "#8e8e93", fontSize: "14px", maxWidth: "650px", margin: "0 auto", lineHeight: "1.7", fontFamily: "sans-serif" }}>
            We shift from traditional teaching models to a rigorous orchestration of individual transformation, high-level intelligence, and strict quality control.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {systemPillars.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(20, 21, 26, 0.7)", 
              border: "1px solid rgba(197, 160, 89, 0.15)", 
              borderRadius: "0px", 
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              transition: "border-color 0.4s ease"
            }}>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "600", letterSpacing: "2.5px", fontFamily: "sans-serif" }}>
                  CORE — {item.num}
                </span>
                <h3 style={{ fontSize: "19px", fontWeight: "400", color: "#f9f9fb", margin: "16px 0 12px 0", letterSpacing: "-0.2px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "14px", lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(13, 14, 17, 0.85)",
          backdropFilter: "blur(16px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          boxSizing: "border-box"
        }}>
          <div style={{
            backgroundColor: "#14151a",
            border: "1px solid rgba(197, 160, 89, 0.3)",
            padding: "40px",
            maxWidth: "500px",
            width: "100%",
            boxSizing: "border-box",
            position: "relative"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#8e8e93",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            {!isConfirmed ? (
              <form onSubmit={handleConfirmApplication} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ fontSize: "20px", color: "#f9f9fb", margin: "0 0 8px 0", fontWeight: "400", letterSpacing: "-0.5px" }}>
                  Member Selection & Application
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "12px", margin: "0 0 16px 0", fontFamily: "sans-serif", lineHeight: "1.5" }}>
                  Provide your baseline credentials. We evaluate based on Agency, Capability, and Character.
                </p>

                <input 
                  type="text" 
                  placeholder="Full Name / Alias" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={{ background: "#0d0e11", border: "1px solid rgba(197, 160, 89, 0.2)", padding: "12px", color: "#f9f9fb", fontSize: "13px", outline: "none", fontFamily: "sans-serif" }}
                />
                <input 
                  type="text" 
                  placeholder="Age" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  style={{ background: "#0d0e11", border: "1px solid rgba(197, 160, 89, 0.2)", padding: "12px", color: "#f9f9fb", fontSize: "13px", outline: "none", fontFamily: "sans-serif" }}
                />
                <input 
                  type="text" 
                  placeholder="City / Location" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  style={{ background: "#0d0e11", border: "1px solid rgba(197, 160, 89, 0.2)", padding: "12px", color: "#f9f9fb", fontSize: "13px", outline: "none", fontFamily: "sans-serif" }}
                />
                <input 
                  type="text" 
                  placeholder="Phone / Telegram Handle" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{ background: "#0d0e11", border: "1px solid rgba(197, 160, 89, 0.2)", padding: "12px", color: "#f9f9fb", fontSize: "13px", outline: "none", fontFamily: "sans-serif" }}
                />
                <textarea 
                  placeholder="What is your primary bottleneck or what are you building next?" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                  rows={3}
                  style={{ background: "#0d0e11", border: "1px solid rgba(197, 160, 89, 0.2)", padding: "12px", color: "#f9f9fb", fontSize: "13px", outline: "none", fontFamily: "sans-serif", resize: "none" }}
                />

                <button 
                  type="submit"
                  disabled={isLoading}
                  style={{
                    backgroundColor: "#C5A059",
                    color: "#0d0e11",
                    padding: "14px",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    cursor: "pointer",
                    marginTop: "8px",
                    fontFamily: "sans-serif"
                  }}
                >
                  {isLoading ? "Processing Assessment..." : "Submit Application"}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <h3 style={{ fontSize: "22px", color: "#C5A059", marginBottom: "12px" }}>Application Received</h3>
                <p style={{ color: "#8e8e93", fontSize: "13px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
                  Your profile has entered the SG Baseline Scan queue. Our review system will verify your alignment.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setIsConfirmed(false); }}
                  style={{ marginTop: "24px", background: "transparent", border: "1px solid #C5A059", color: "#C5A059", padding: "10px 24px", fontSize: "10px", letterSpacing: "2px", cursor: "pointer", fontFamily: "sans-serif" }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Luxury Footer */}
      <footer style={{ 
        padding: "50px 32px", 
        borderTop: "1px solid rgba(197, 160, 89, 0.15)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: "20px",
        color: "#8e8e93", 
        fontSize: "10px", 
        letterSpacing: "2px",
        boxSizing: "border-box",
        fontFamily: "sans-serif"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS. PRIVATE TRANSFORMATION OPERATING SYSTEM. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#system" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>SYSTEM</a>
          <a href="#manifesto" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>DOCTRINE</a>
        </div>
      </footer>
    </div>
  );
}