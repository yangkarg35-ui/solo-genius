'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setScreenshot(URL.createObjectURL(file));
  };

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your API logic here
    setTimeout(() => { setIsLoading(false); setIsConfirmed(true); }, 1500);
  };

  const manifestoItems = [
    { num: "01", title: "Mastery", desc: "We believe mastery cannot be rushed." },
    { num: "02", title: "Originality", desc: "We believe originality is more valuable than imitation." },
    { num: "03", title: "Understanding", desc: "We believe deep understanding outlasts memorization." },
    { num: "04", title: "Systems", desc: "We believe great creators are built through systems." },
    { num: "05", title: "Quality", desc: "We believe quality is remembered long after speed is forgotten." },
    { num: "06", title: "Discipline", desc: "We believe creativity is a discipline." },
    { num: "07", title: "Transformation", desc: "We believe learning should transform the way you think." },
    { num: "08", title: "Identity", desc: "We believe music is the medium to discover your identity." }
  ];

  return (
    <div style={{ backgroundColor: "#030712", color: "#ffffff", minHeight: "100vh", fontFamily: "-apple-system, sans-serif" }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", position: "fixed", top: 0, width: "100%", zIndex: 100, backgroundColor: "rgba(3, 7, 18, 0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(212, 175, 55, 0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.png" style={{ width: "32px", height: "32px", borderRadius: "50%" }} />
          <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "2.5px" }}>SOLO GENIUS</span>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: "11px", fontWeight: "500", letterSpacing: "1.5px", color: "#9ca3af" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "#D4AF37", textDecoration: "none" }}>VERIFY</a>
        </div>
        <button onClick={() => setIsModalOpen(true)} style={{ background: "transparent", border: "1px solid rgba(212,175,55,0.5)", padding: "8px 16px", fontSize: "10px", fontWeight: "700", letterSpacing: "2px", color: "#D4AF37", cursor: "pointer" }}>
          APPLY FOR ENROLLMENT
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "130px 20px" }}
      >
        <h1 style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: "800", color: "#ffffff", margin: "0 0 20px 0" }}>
          Become The Creator<br /><span style={{ color: "#D4AF37" }}>You Were Designed To Be</span>
        </h1>
      </motion.section>

      {/* Manifesto Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "90px 20px" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {manifestoItems.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              style={{ backgroundColor: "rgba(11, 15, 25, 0.75)", border: "1px solid rgba(212, 175, 55, 0.2)", borderRadius: "4px", padding: "24px" }}
            >
              <h3 style={{ color: "#D4AF37", fontSize: "10px" }}>{item.num} — PRINCIPLE</h3>
              <p style={{ fontSize: "13px", color: "#9ca3af" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(3, 7, 18, 0.9)", backdropFilter: "blur(12px)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{ backgroundColor: "#0b0f19", border: "1px solid rgba(212, 175, 55, 0.4)", padding: "24px", maxWidth: "520px", width: "100%", borderRadius: "6px" }}
            >
              <button onClick={() => setIsModalOpen(false)} style={{ float: "right", background: "none", border: "none", color: "#fff" }}>✕</button>
              {/* Form Content goes here */}
              <h2 style={{ color: "#fff" }}>Enrollment Form</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}