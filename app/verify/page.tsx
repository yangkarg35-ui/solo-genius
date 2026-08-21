'use client';
import { useState } from 'react';

export default function ApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    track: '', // 'creative-music' or 'genius-learning'
    currentState: '',
    friction: [] as string[],
    improvementMethod: '',
    desiredResult: '',
    transformationPriority: '',
    commitment: '',
    fitStatement: '',
    finalReason: '',
  });

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: string, value: string) => {
    setFormData(prev => {
      const currentList = prev[field as keyof typeof prev] as string[];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      } else {
        if (currentList.length >= 3) return prev; // Max 3 choices for friction
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Telegram API route
      await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCurrentStep(10);
    }
  };

  return (
    <div style={{
      backgroundColor: "#02040a",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        padding: "20px 32px",
        width: "100%",
        backgroundColor: "rgba(2, 4, 10, 0.95)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src="/logo.png" 
            alt="Solo Genius Logo" 
            style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.5)" }}
          />
          <span style={{ fontSize: "12px", fontWeight: "700", color: "#ffffff", letterSpacing: "3px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
        </div>

        <div style={{ display: "flex", gap: "24px", fontSize: "11px", fontWeight: "500", letterSpacing: "2px", color: "#888888", flexWrap: "wrap", alignItems: "center" }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/explore" style={{ color: "inherit", textDecoration: "none" }}>EXPLORE</a>
          <a href="/verify" style={{ color: "inherit", textDecoration: "none" }}>VERIFY</a>
        </div>

        <div>
          <span style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.03) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            padding: "9px 18px",
            borderRadius: "1px",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            color: "#D4AF37",
          }}>
            PRIVATE APPLICATION
          </span>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px 80px",
        boxSizing: "border-box"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "720px",
          backgroundColor: "rgba(10, 14, 23, 0.75)",
          backgroundImage: "linear-gradient(145deg, rgba(212,175,55,0.03) 0%, transparent 100%)",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          borderRadius: "4px",
          padding: "45px 40px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.05)",
          boxSizing: "border-box",
          backdropFilter: "blur(10px)"
        }}>
          
          {/* OPENING VIEW */}
          {currentStep === 1 && !isSubmitted && (
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                SOLO GENIUS — APPLICATION
              </span>
              <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: "700", letterSpacing: "2px", color: "#ffffff", margin: "0 0 20px 0" }}>
                BECOME MORE CAPABLE.
              </h1>
              <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.8", letterSpacing: "0.5px", maxWidth: "540px", margin: "0 auto 36px" }}>
                A private application for people who are serious about developing their ability to learn, think, create and perform.
              </p>
              <button 
                onClick={handleNext}
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #aa8c2c 100%)",
                  border: "none",
                  borderRadius: "2px",
                  padding: "16px 36px",
                  color: "#030712",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(212, 175, 55, 0.2)"
                }}
              >
                [ BEGIN APPLICATION ]
              </button>
            </div>
          )}

          {/* STEP 01 — INTENTION */}
          {currentStep === 2 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 01 — INTENTION</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 24px" }}>What are you here to develop?</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {[
                  { id: 'creative-music', title: '① CREATIVE MUSIC', desc: 'I want to develop my musical ability and turn my instrument into a tool for expression and creation.' },
                  { id: 'genius-learning', title: '② GENIUS LEARNING', desc: 'I want to develop how I learn, think, create and solve problems.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('track', item.id)}
                    style={{
                      padding: "20px",
                      borderRadius: "2px",
                      border: formData.track === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.track === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ fontSize: "12px", fontWeight: "700", color: "#D4AF37", letterSpacing: "1.5px", marginBottom: "6px" }}>{item.title}</div>
                    <div style={{ fontSize: "12.5px", color: "#9ca3af", lineHeight: "1.5" }}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.track} style={{ ...navBtnStyle, opacity: formData.track ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 02 — CURRENT STATE */}
          {currentStep === 3 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 02 — CURRENT STATE</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 24px" }}>Where are you now?</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {formData.track === 'creative-music' ? [
                  { id: 'beginning', label: '① BEGINNING — I can play basic things but still depend heavily on guidance.' },
                  { id: 'developing', label: '② DEVELOPING — I can play songs independently but my ability feels limited.' },
                  { id: 'capable', label: '③ CAPABLE — I can play confidently but struggle with deeper musical understanding or creation.' },
                  { id: 'advanced', label: '④ ADVANCED — I can perform/create, but I want to develop a much higher level of musical intelligence.' }
                ] : [
                  { id: 'beginning', label: '① BEGINNING — I mostly depend on others or existing content to learn.' },
                  { id: 'developing', label: '② DEVELOPING — I can learn independently but my system isn\'t consistent.' },
                  { id: 'capable', label: '③ CAPABLE — I can learn independently but want stronger thinking and application.' },
                  { id: 'advanced', label: '④ ADVANCED — I already learn effectively and want to operate at a much higher level.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('currentState', item.id)}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "2px",
                      border: formData.currentState === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.currentState === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.currentState === item.id ? "#ffffff" : "#9ca3af",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.currentState} style={{ ...navBtnStyle, opacity: formData.currentState ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 03 — THE FRICTION */}
          {currentStep === 4 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 03 — THE FRICTION</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 6px" }}>What currently limits your progress?</h2>
              <p style={{ fontSize: "11px", color: "#888", letterSpacing: "1px", marginBottom: "20px" }}>Choose up to 3.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px", maxHeight: "360px", overflowY: "auto" }}>
                {formData.track === 'creative-music' ? [
                  { id: 'direction', label: '① DIRECTION — I don\'t know what I should practice next.' },
                  { id: 'progress', label: '② PROGRESS — I practice, but my progress is slower than expected.' },
                  { id: 'application', label: '③ APPLICATION — I understand concepts but struggle to use them.' },
                  { id: 'understanding', label: '④ MUSICAL UNDERSTANDING — I can play music but don\'t deeply understand why it works.' },
                  { id: 'creation', label: '⑤ CREATION — I can reproduce music but struggle to create my own.' },
                  { id: 'taste', label: '⑥ TASTE — I want to develop stronger musical taste and judgment.' },
                  { id: 'feedback', label: '⑦ FEEDBACK — I don\'t have a reliable way to identify my weaknesses.' },
                  { id: 'learning', label: '⑧ LEARNING — I consume a lot of information but don\'t turn enough of it into ability.' }
                ] : [
                  { id: 'direction', label: '① DIRECTION — I don\'t know what I should learn next.' },
                  { id: 'retention', label: '② RETENTION — I learn things but forget them.' },
                  { id: 'application', label: '③ APPLICATION — I understand information but struggle to use it.' },
                  { id: 'thinking', label: '④ THINKING — I want to reason more clearly and critically.' },
                  { id: 'research', label: '⑤ RESEARCH — I struggle to find and evaluate reliable information.' },
                  { id: 'creativity', label: '⑥ CREATIVITY — I want to generate better ideas and original solutions.' },
                  { id: 'system', label: '⑦ SYSTEM — I don\'t have a reliable personal learning system.' },
                  { id: 'adaptation', label: '⑧ ADAPTATION — I want to become more capable of adapting in an AI-driven world.' }
                ].map((item) => {
                  const isSelected = formData.friction.includes(item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleMultiSelect('friction', item.id)}
                      style={{
                        padding: "14px 18px",
                        borderRadius: "2px",
                        border: isSelected ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                        backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                        cursor: "pointer",
                        fontSize: "12px",
                        color: isSelected ? "#ffffff" : "#9ca3af"
                      }}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={formData.friction.length === 0} style={{ ...navBtnStyle, opacity: formData.friction.length > 0 ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 04 — WHAT HAVE YOU BEEN DOING? */}
          {currentStep === 5 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 04 — WHAT HAVE YOU BEEN DOING?</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 24px" }}>How are you currently trying to improve?</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {[
                  '① SELF-STUDY',
                  '② YOUTUBE / ONLINE CONTENT',
                  '③ ONLINE COURSES',
                  '④ PRIVATE TEACHER / COACH',
                  '⑤ BOOKS / ARTICLES',
                  '⑥ AI TOOLS',
                  '⑦ PERSONAL PRACTICE SYSTEM',
                  '⑧ I DON\'T HAVE A CONSISTENT SYSTEM YET'
                ].map((item) => (
                  <div 
                    key={item}
                    onClick={() => handleSelect('improvementMethod', item)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.improvementMethod === item ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.improvementMethod === item ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.improvementMethod === item ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.improvementMethod} style={{ ...navBtnStyle, opacity: formData.improvementMethod ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 05 — THE RESULT */}
          {currentStep === 6 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 05 — THE RESULT</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 6px" }}>What do you want to be able to do that you cannot do today?</h2>
              <p style={{ fontSize: "11px", color: "#D4AF37", letterSpacing: "1px", marginBottom: "20px" }}>ဒီနေရာက အရေးကြီးဆုံး။</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px", maxHeight: "360px", overflowY: "auto" }}>
                {formData.track === 'creative-music' ? [
                  { id: 'play', label: '① PLAY — Play music with greater control and confidence.' },
                  { id: 'understand', label: '② UNDERSTAND — Understand music deeply rather than simply reproduce it.' },
                  { id: 'analyze', label: '③ ANALYZE — Hear, analyze and understand why music works.' },
                  { id: 'create', label: '④ CREATE — Create my own musical ideas and compositions.' },
                  { id: 'arrange', label: '⑤ ARRANGE — Transform ideas into complete musical arrangements.' },
                  { id: 'express', label: '⑥ EXPRESS — Use music as my own form of creative expression.' },
                  { id: 'master', label: '⑦ MASTER — Develop a significantly higher level of musical ability.' }
                ] : [
                  { id: 'learn', label: '① LEARN — Learn new subjects independently.' },
                  { id: 'remember', label: '② REMEMBER — Retain and retrieve what I learn.' },
                  { id: 'think', label: '③ THINK — Think more clearly and make better judgments.' },
                  { id: 'solve', label: '④ SOLVE — Solve unfamiliar problems independently.' },
                  { id: 'create', label: '⑤ CREATE — Generate original ideas and solutions.' },
                  { id: 'adapt', label: '⑥ ADAPT — Learn and adapt faster in a changing world.' },
                  { id: 'master', label: '⑦ MASTER — Build a personal system for continuous mastery.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('desiredResult', item.id)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.desiredResult === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.desiredResult === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.desiredResult === item.id ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.desiredResult} style={{ ...navBtnStyle, opacity: formData.desiredResult ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 06 — TRANSFORMATION PRIORITY */}
          {currentStep === 7 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 06 — TRANSFORMATION PRIORITY</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 6px" }}>Which matters most to you?</h2>
              <p style={{ fontSize: "11px", color: "#D4AF37", letterSpacing: "1px", marginBottom: "20px" }}>People don't buy Guitar. People buy Identity.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {[
                  { id: 'skill', label: '① SKILL — I want stronger capability.' },
                  { id: 'independence', label: '② INDEPENDENCE — I want to stop depending on others for my progress.' },
                  { id: 'creativity', label: '③ CREATIVITY — I want to create rather than simply consume.' },
                  { id: 'mastery', label: '④ MASTERY — I want to reach a level most people never reach.' },
                  { id: 'identity', label: '⑤ IDENTITY — I want to become a different kind of person through what I learn.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('transformationPriority', item.id)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.transformationPriority === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.transformationPriority === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.transformationPriority === item.id ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.transformationPriority} style={{ ...navBtnStyle, opacity: formData.transformationPriority ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 07 — COMMITMENT */}
          {currentStep === 8 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 07 — COMMITMENT</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 24px" }}>How serious are you about this transformation?</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {[
                  { id: 'exploring', label: '① EXPLORING — I\'m interested and want to understand Solo Genius.' },
                  { id: 'ready', label: '② READY — I\'m actively looking for a serious solution.' },
                  { id: 'committed', label: '③ COMMITTED — I\'m ready to invest time, effort and resources into my development.' },
                  { id: 'all-in', label: '④ ALL IN — This is an important transformation I am prepared to prioritize.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('commitment', item.id)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.commitment === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.commitment === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.commitment === item.id ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.commitment} style={{ ...navBtnStyle, opacity: formData.commitment ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 08 — FIT */}
          {currentStep === 9 && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 08 — FIT</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 6px" }}>Which statement describes you best?</h2>
              <p style={{ fontSize: "11px", color: "#D4AF37", letterSpacing: "1px", marginBottom: "20px" }}>Solo Genius Customer Fit Filter</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {[
                  { id: '1', label: '① I want someone to simply teach me what to do.' },
                  { id: '2', label: '② I want a structured system that guides me.' },
                  { id: '3', label: '③ I want to understand the system and eventually operate independently.' },
                  { id: '4', label: '④ I want to be challenged to think, create and develop beyond conventional learning.' }
                ].map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleSelect('fitStatement', item.id)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.fitStatement === item.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.fitStatement === item.id ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.fitStatement === item.id ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button onClick={handleNext} disabled={!formData.fitStatement} style={{ ...navBtnStyle, opacity: formData.fitStatement ? 1 : 0.4 }}>NEXT</button>
              </div>
            </div>
          )}

          {/* STEP 09 — FINAL */}
          {currentStep === 10 && !isSubmitted && (
            <div>
              <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "8px" }}>STEP 09 — FINAL</span>
              <h2 style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "1px", margin: "0 0 24px" }}>Why Solo Genius?</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                {[
                  '① I want a different way to learn.',
                  '② I want deeper understanding, not just information.',
                  '③ I want to become more independent.',
                  '④ I want to develop my creative ability.',
                  '⑤ I want a system that turns learning into real capability.',
                  '⑥ I want to become the person capable of creating my own path.'
                ].map((item) => (
                  <div 
                    key={item}
                    onClick={() => handleSelect('finalReason', item)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "2px",
                      border: formData.finalReason === item ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: formData.finalReason === item ? "rgba(212, 175, 55, 0.08)" : "rgba(3, 7, 18, 0.6)",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: formData.finalReason === item ? "#ffffff" : "#9ca3af"
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handlePrev} style={navBtnStyle}>BACK</button>
                <button 
                  onClick={handleSubmit} 
                  disabled={!formData.finalReason || isSubmitting}
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #aa8c2c 100%)",
                    border: "none",
                    borderRadius: "2px",
                    padding: "14px 28px",
                    color: "#030712",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    opacity: formData.finalReason && !isSubmitting ? 1 : 0.4
                  }}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 10 — APPLICATION RESULT / STATUS */}
          {isSubmitted && (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <span style={{ color: "#34d399", fontSize: "11px", fontWeight: "700", letterSpacing: "3px", display: "block", marginBottom: "12px" }}>
                ✦ APPLICATION RECEIVED
              </span>
              <h2 style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "1.5px", margin: "0 0 16px" }}>
                Your responses have been received.
              </h2>
              <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.7", maxWidth: "500px", margin: "0 auto 30px" }}>
                Solo Genius reviews every application based on fit, commitment and transformation potential.
              </p>

              <div style={{
                backgroundColor: "rgba(3, 7, 18, 0.9)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                borderRadius: "2px",
                padding: "24px",
                margin: "0 auto 30px",
                maxWidth: "400px"
              }}>
                <div style={{ fontSize: "10px", color: "#888", letterSpacing: "2px", marginBottom: "8px" }}>APPLICATION STATUS</div>
                <div style={{ fontSize: "16px", fontWeight: "700", color: "#D4AF37", letterSpacing: "3px" }}>UNDER REVIEW</div>
              </div>

              {/* ENROLLMENT SECTION (Revealed/Simulated for Selective Luxury Vibe) */}
              <div style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "24px",
                marginTop: "20px"
              }}>
                <div style={{ fontSize: "11px", color: "#888", letterSpacing: "2px", marginBottom: "10px" }}>💰 ENROLLMENT (UPON APPROVAL)</div>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", letterSpacing: "2px", marginBottom: "20px" }}>
                  {formData.track === 'creative-music' ? 'CREATIVE MUSIC' : 'GENIUS LEARNING'} — $500
                </div>
                <a href="/" style={{
                  display: "inline-block",
                  background: "transparent",
                  border: "1px solid #D4AF37",
                  color: "#D4AF37",
                  padding: "12px 24px",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textDecoration: "none",
                  borderRadius: "2px"
                }}>
                  RETURN TO HOME
                </a>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer style={{ 
        padding: "30px 40px", 
        borderTop: "1px solid rgba(255, 255, 255, 0.06)", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        flexWrap: "wrap",
        gap: "15px",
        color: "#6b7280", 
        fontSize: "10px", 
        letterSpacing: "2px",
        boxSizing: "border-box"
      }}>
        <p style={{ margin: 0 }}>© 2026 SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>ABOUT</a>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>HOME</a>
        </div>
      </footer>
    </div>
  );
}

const navBtnStyle = {
  background: "transparent",
  border: "1px solid rgba(212, 175, 55, 0.4)",
  borderRadius: "2px",
  padding: "10px 20px",
  color: "#D4AF37",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "2px",
  cursor: "pointer",
};