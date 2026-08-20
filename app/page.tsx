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
          <a 
            href="/apply"
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              padding: "7px 14px",
              borderRadius: "2px",
              fontSize: "9.5px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              color: "#D4AF37",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease"
            }}
          >
            APPLY FOR ENROLLMENT
          </a>
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
            <a href="/apply" style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.08) 100%)",
              color: "#D4AF37",
              border: "1px solid rgba(212, 175, 55, 0.6)",
              padding: "12px 28px",
              borderRadius: "2px",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textDecoration: "none",
              textAlign: "center",
              display: "inline-block"
            }}>
              APPLY FOR ENROLLMENT
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