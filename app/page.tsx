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
        backgroundColor: "rgba(13, 14, 17, 0.92)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.12)",
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
          <span style={{ fontSize: "11px", fontWeight: "500", color: "#f3f3f3", letterSpacing: "3.5px", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "10px", fontWeight: "400", letterSpacing: "2.5px", color: "#8e8e93", alignItems: "center", flexWrap: "wrap", fontFamily: "sans-serif" }}>
          <a href="/" style={{ color: "#C5A059", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>VERIFY</a>
        </div>

        <div>
          <a 
            href="/apply"
            style={{
              background: "transparent",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "10px 20px",
              borderRadius: "0px",
              fontSize: "9.5px",
              fontWeight: "500",
              letterSpacing: "2px",
              color: "#C5A059",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              fontFamily: "sans-serif"
            }}
          >
            APPLY FOR ENROLLMENT
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
        padding: "80px 24px",
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
          filter: "brightness(0.85) contrast(1.05) saturate(0.9)"
        }} />

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(13,14,17,0.4) 0%, rgba(13,14,17,0.95) 100%)",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "900px", zIndex: 2, display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "500", fontFamily: "sans-serif" }}>
            Private Exclusive Space · 0.000833% Segment
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: "400", letterSpacing: "-0.5px", color: "#f9f9fb", margin: 0, lineHeight: "1.15" }}>
            Become The Creator<br />
            <span style={{ color: "#C5A059", fontStyle: "italic" }}>You Were Designed To Be</span>
          </h1>
          <p style={{ color: "#a1a1a6", fontSize: "15px", lineHeight: "1.8", letterSpacing: "0.8px", margin: "12px 0 32px 0", padding: "0 10px", fontFamily: "sans-serif", maxWidth: "650px", marginLeft: "auto", marginRight: "auto" }}>
            We believe originality is more valuable than imitation. Uncompromising depth for those who know the brand.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
            <a href="/explore" style={{
              backgroundColor: "#f5f5f7",
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
              EXPLORE SYSTEMS
            </a>
            <a href="/apply" style={{
              background: "transparent",
              color: "#C5A059",
              border: "1px solid rgba(197, 160, 89, 0.5)",
              padding: "14px 32px",
              borderRadius: "0px",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: "2px",
              textDecoration: "none",
              textAlign: "center",
              display: "inline-block",
              fontFamily: "sans-serif"
            }}>
              APPLY FOR ENROLLMENT
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span style={{ color: "#C5A059", textTransform: "uppercase", fontSize: "10px", letterSpacing: "4px", fontWeight: "500", fontFamily: "sans-serif" }}>
            Core Philosophy
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "400", letterSpacing: "-0.5px", margin: "12px 0 16px 0", color: "#f9f9fb" }}>
            Our Manifesto
          </h2>
          <p style={{ color: "#8e8e93", fontSize: "14px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7", padding: "0 10px", fontFamily: "sans-serif" }}>
            We exist to build creators who think deeply, create intentionally, and pursue excellence without compromise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {manifestoItems.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: "rgba(20, 21, 26, 0.6)", 
              border: "1px solid rgba(197, 160, 89, 0.12)", 
              borderRadius: "0px", 
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              transition: "border-color 0.4s ease"
            }}>
              <div>
                <span style={{ color: "#C5A059", fontSize: "10px", fontWeight: "500", letterSpacing: "2.5px", fontFamily: "sans-serif" }}>
                  {item.num} — PRINCIPLE
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: "400", color: "#f9f9fb", margin: "14px 0 12px 0", letterSpacing: "-0.2px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#8e8e93", fontSize: "13.5px", lineHeight: "1.7", margin: 0, fontFamily: "sans-serif" }}>
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
        borderTop: "1px solid rgba(255, 255, 255, 0.05)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: "20px",
        color: "#636366", 
        fontSize: "10px", 
        letterSpacing: "2px",
        boxSizing: "border-box",
        textAlign: "center",
        fontFamily: "sans-serif"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none", transition: "color 0.3s" }}>EXPLORE</a>
        </div>
      </footer>
    </div>
  );
}