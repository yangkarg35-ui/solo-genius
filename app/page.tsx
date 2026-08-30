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
      title: "Identity Alignment",
      desc: "For those who refuse to become ordinary in the AI era. Deep psychological connection over superficial speed."
    },
    {
      num: "02",
      title: "Master Ecosystem",
      desc: "An integrated architectural standard. Replacing fragmented information with complete structural mastery."
    },
    {
      num: "03",
      title: "Silent Mastery",
      desc: "Operating with absolute autonomy and quiet precision within an elite closed circle."
    },
    {
      num: "04",
      title: "Absolute Originality",
      desc: "Rejecting mass production. Crafting true artistic and intellectual sovereignty."
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
              MASTER ECOSYSTEM
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "10px", fontWeight: "400", letterSpacing: "2px", color: "#8e8e93", alignItems: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Explore</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>About SG</a>
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Ecosystem Bundle</a>
          <a href="/inner-circle" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>Inner Circle</a>
        </div>

        <div>
          <a 
            href="/apply"
            style={{
              background: "#C5A059",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "10px 24px",
              borderRadius: "0px",
              fontSize: "9.5px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#0d0e11",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              fontFamily: "sans-serif"
            }}
          >
            Request Access
          </a>
        </div>
      </nav>

      {/* Cinematic Hero Section with owner.jpg */}
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
          filter: "brightness(0.8) contrast(1.1) saturate(0.85)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(13,14,17,0.5) 0%, rgba(13,14,17,0.96) 100%)",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "900px", zIndex: 2, display: "flex", flexDirection: "column", gap: "20px", width: "100%", alignItems: "center" }}>
          <span style={{ color: "#C5A059", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: "600" }}>
            For The 0.000833% Elite Segment
          </span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 66px)", fontWeight: "400", letterSpacing: "-0.5px", color: "#f9f9fb", margin: 0, lineHeight: "1.15", textAlign: "center", width: "100%", maxWidth: "800px" }}>
            Silence the Noise.<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>Master Your True Identity.</span>
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.7", letterSpacing: "0.5px", margin: "12px 0 24px 0", fontFamily: "sans-serif", maxWidth: "700px", textAlign: "center" }}>
            An exclusive, private master ecosystem built for advanced creators and self-directed experts who refuse to become ordinary in an age of automated excess.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", width: "100%", flexWrap: "wrap" }}>
            <a href="/ecosystem" style={{
              backgroundColor: "#C5A059",
              color: "#0d0e11",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              textAlign: "center",
              fontFamily: "sans-serif",
              transition: "opacity 0.3s"
            }}>
              Explore Ecosystem Bundle
            </a>
          </div>
          <span style={{ color: "#8e8e93", textTransform: "uppercase", fontSize: "9.5px", letterSpacing: "2.5px", fontWeight: "400", fontFamily: "sans-serif", marginTop: "8px" }}>
            Strictly Private — By Application & Identity Alignment Only
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
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Market Segment</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>BUNDLE</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Master Ecosystem</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>PRIVATE</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Insider Circle</div>
          </div>
          <div>
            <div style={{ fontSize: "20px", fontWeight: "600", color: "#f9f9fb", letterSpacing: "1px" }}>ABSOLUTE</div>
            <div style={{ fontSize: "10px", color: "#8e8e93", letterSpacing: "1.5px", marginTop: "6px", fontFamily: "sans-serif" }}>Identity Autonomy</div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "500", fontFamily: "sans-serif" }}>
            The Foundation
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "12px 0 16px 0", color: "#f9f9fb" }}>
            Customer Signal Architecture
          </h2>
          <p style={{ color: "#8e8e93", fontSize: "14px", maxWidth: "650px", margin: "0 auto", lineHeight: "1.7", fontFamily: "sans-serif" }}>
            Designed entirely around the deep psychological requirements of modern high-achievers: structural clarity, emotional resonance, and silent status.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {manifestoItems.map((item, idx) => (
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
                  SIGNAL — {item.num}
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
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>ABOUT</a>
          <a href="/ecosystem" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>ECOSYSTEM</a>
        </div>
      </footer>
    </div>
  );
}