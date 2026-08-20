'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Form State Architecture
  const [formData, setFormData] = useState({
    // Step 1: About You
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: '',
    ageRange: '',
    // Step 2: Where You Are
    experienceLevel: '',
    currentFocus: '',
    biggestChallenge: '',
    previousAttempts: '',
    // Step 3: Where You Want To Go
    desiredAreas: [] as string[],
    primaryGoalFocus: '',
    desiredCapabilities: '',
    transformationWhy: '',
    twelveMonthVision: '',
    // Step 4: How You Learn
    learningEnvironments: [] as string[],
    weeklyCommitment: '',
    progressObstacles: '',
    // Step 5: Your Experience
    valuedTraits: [] as string[],
    exceptionalExperienceExpectation: '',
    institutionExpectations: '',
    // Step 6: Final Details
    discoverySource: '',
    programInterest: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appReference, setAppReference] = useState('');

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMultiSelect = (field: 'desiredAreas' | 'learningEnvironments' | 'valuedTraits', item: string) => {
    setFormData((prev) => {
      const list = prev[field];
      if (list.includes(item)) {
        return { ...prev, [field]: list.filter((i) => i !== item) };
      } else {
        return { ...prev, [field]: [...list, item] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomId = Math.floor(100000 + Math.random() * 900000);
    const refCode = `SG-APP-${randomId}`;
    setAppReference(refCode);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, appReference: refCode }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        console.error('Failed to transmit data to Telegram');
      }
    } catch (err) {
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      backgroundColor: "#09090B",
      color: "#F4F4F5",
      minHeight: "100vh",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      boxSizing: "border-box",
      overflowX: "hidden"
    }}>
      {/* Minimal Header */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 40px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        maxWidth: "1100px",
        margin: "0 auto",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(212, 175, 55, 0.4)" }}
          />
          <span style={{ fontSize: "11px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "3px", textTransform: "uppercase" }}>
            Solo Genius
          </span>
          <span style={{ color: "#71717A", fontSize: "11px" }}>/</span>
          <span style={{ fontSize: "10px", fontWeight: "500", color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase" }}>
            Application
          </span>
        </div>
        <a
          href="/"
          style={{
            color: "#A1A1AA",
            fontSize: "11px",
            textDecoration: "none",
            letterSpacing: "1.5px",
            fontWeight: "500",
            transition: "color 0.2s ease"
          }}
        >
          BACK TO SOLO GENIUS
        </a>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px 100px 24px", boxSizing: "border-box" }}>
        {!isSubmitted && (
          <>
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: "50px", textAlign: "left" }}
              >
                <div style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "10px", letterSpacing: "3px", fontWeight: "600", marginBottom: "12px" }}>
                  SOLO GENIUS • PRIVATE EDUCATION
                </div>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: "700", letterSpacing: "-1px", color: "#FFFFFF", margin: "0 0 16px 0", lineHeight: "1.15" }}>
                  Begin Your Creative Development
                </h1>
                <p style={{ color: "#A1A1AA", fontSize: "15px", lineHeight: "1.6", margin: "0 0 24px 0", maxWidth: "580px" }}>
                  Tell us where you are, where you want to go, and what kind of environment helps you grow.
                </p>
                <div style={{ display: "inline-block", padding: "6px 12px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "4px", fontSize: "11px", color: "#D4AF37", letterSpacing: "1px" }}>
                  APPLICATION · APPROX. 3–5 MINUTES
                </div>
              </motion.div>
            )}

            {/* Subtle Progress Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              {Array.from({ length: totalSteps }).map((_, index) => {
                const stepNum = index + 1;
                const isActive = currentStep === stepNum;
                const isPassed = currentStep > stepNum;
                return (
                  <div key={index} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div style={{
                      height: "2px",
                      width: "100%",
                      backgroundColor: isPassed || isActive ? "#D4AF37" : "rgba(255, 255, 255, 0.1)",
                      transition: "background-color 0.4s ease"
                    }} />
                  </div>
                );
              })}
              <div style={{ fontSize: "11px", color: "#71717A", fontWeight: "600", letterSpacing: "1px", minWidth: "35px", textAlign: "right" }}>
                0{currentStep}/0{totalSteps}
              </div>
            </div>
          </>
        )}

        {/* Form Steps */}
        <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          <AnimatePresence mode="wait">
            
            {/* STEP 1: ABOUT YOU */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>01</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    About You
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    Help us understand who we are welcoming into the Solo Genius environment.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="Your legal name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Name</label>
                    <input
                      type="text"
                      value={formData.preferredName}
                      onChange={(e) => updateField('preferredName', e.target.value)}
                      placeholder="How you prefer to be addressed"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="name@domain.com"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / Contact *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="+95... or Telegram"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>City / Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      placeholder="Your current location"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Age Range</label>
                    <select
                      value={formData.ageRange}
                      onChange={(e) => updateField('ageRange', e.target.value)}
                      style={{ ...inputStyle, backgroundColor: "#0D0D0F", color: formData.ageRange ? "#F4F4F5" : "#71717A" }}
                    >
                      <option value="" disabled>Select age range</option>
                      <option value="Under 20">Under 20</option>
                      <option value="20-25">20-25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-45">36-45</option>
                      <option value="46+">46+</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: WHERE YOU ARE */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>02</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    Where You Are
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    Where would you describe yourself right now?
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>Current Experience Level *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px" }}>
                    {['BEGINNER', 'SOME EXPERIENCE', 'INTERMEDIATE', 'ADVANCED', 'PROFESSIONAL'].map((level) => {
                      const isSelected = formData.experienceLevel === level;
                      return (
                        <div
                          key={level}
                          onClick={() => updateField('experienceLevel', level)}
                          style={{
                            padding: "14px 12px",
                            backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)",
                            border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: "4px",
                            textAlign: "center",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            color: isSelected ? "#D4AF37" : "#D4D4D8",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {level}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>What are you currently learning, creating, or working on? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.currentFocus}
                    onChange={(e) => updateField('currentFocus', e.target.value)}
                    placeholder="Describe your active projects or daily focus..."
                    style={textareaStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>What is the biggest challenge you are currently trying to solve? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.biggestChallenge}
                    onChange={(e) => updateField('biggestChallenge', e.target.value)}
                    placeholder="The primary bottleneck in your growth..."
                    style={textareaStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>What have you already tried?</label>
                  <textarea
                    rows={2}
                    value={formData.previousAttempts}
                    onChange={(e) => updateField('previousAttempts', e.target.value)}
                    placeholder="Courses, methods, or approaches you have tested previously..."
                    style={textareaStyle}
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3: WHERE YOU WANT TO GO */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>03</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    Where You Want To Go
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    Define your trajectory and the capabilities you wish to unlock.
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>What would you most like to become better at? (Select all that apply)</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px" }}>
                    {['MUSIC', 'CREATIVITY', 'THINKING', 'BUSINESS', 'MARKETING', 'CONTENT CREATION', 'FINANCE', 'LEARNING SYSTEMS'].map((area) => {
                      const isSelected = formData.desiredAreas.includes(area);
                      return (
                        <div
                          key={area}
                          onClick={() => toggleMultiSelect('desiredAreas', area)}
                          style={{
                            padding: "12px",
                            backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)",
                            border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            color: isSelected ? "#D4AF37" : "#D4D4D8",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {isSelected ? "✓ " : "+ "} {area}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>What would you like to be able to do that you cannot do today? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.desiredCapabilities}
                    onChange={(e) => updateField('desiredCapabilities', e.target.value)}
                    placeholder="Artistic, technical, or intellectual capabilities..."
                    style={textareaStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Why does this matter to you? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.transformationWhy}
                    onChange={(e) => updateField('transformationWhy', e.target.value)}
                    placeholder="The underlying drive and personal conviction..."
                    style={textareaStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>If your development goes exceptionally well, what would be different 12 months from now?</label>
                  <textarea
                    rows={2}
                    value={formData.twelveMonthVision}
                    onChange={(e) => updateField('twelveMonthVision', e.target.value)}
                    placeholder="Your 12-month transformation milestone..."
                    style={textareaStyle}
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 4: HOW YOU LEARN */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>04</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    How You Learn
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    Determine your optimal conditions for intellectual and practical assimilation.
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>What kind of learning environment helps you perform at your best? (Select all that apply)</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                    {['STRUCTURED CURRICULUM', 'PRACTICAL PROJECTS', 'DIRECT FEEDBACK', 'MENTORSHIP', 'INDEPENDENT STUDY', 'A COMBINATION'].map((env) => {
                      const isSelected = formData.learningEnvironments.includes(env);
                      return (
                        <div
                          key={env}
                          onClick={() => toggleMultiSelect('learningEnvironments', env)}
                          style={{
                            padding: "12px",
                            backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)",
                            border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            color: isSelected ? "#D4AF37" : "#D4D4D8",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {isSelected ? "✓ " : "+ "} {env}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>How much time can you realistically dedicate to your development each week? *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "10px" }}>
                    {['UNDER 2 HOURS', '2-5 HOURS', '5-10 HOURS', '10+ HOURS'].map((time) => {
                      const isSelected = formData.weeklyCommitment === time;
                      return (
                        <div
                          key={time}
                          onClick={() => updateField('weeklyCommitment', time)}
                          style={{
                            padding: "12px",
                            backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)",
                            border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: "4px",
                            textAlign: "center",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            color: isSelected ? "#D4AF37" : "#D4D4D8",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {time}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>What usually prevents you from making progress?</label>
                  <textarea
                    rows={3}
                    value={formData.progressObstacles}
                    onChange={(e) => updateField('progressObstacles', e.target.value)}
                    placeholder="Distractions, lack of structure, time constraints, etc..."
                    style={textareaStyle}
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 5: YOUR EXPERIENCE */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>05</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    Your Experience & Standards
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    We value rigor, privacy, and absolute clarity. Tell us what matters to you.
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>What do you value most in a private learning environment? (Select all that apply)</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "10px" }}>
                    {['PRIVACY', 'PERSONAL FEEDBACK', 'STRUCTURE', 'FLEXIBILITY', 'HIGH-QUALITY RESOURCES', 'DIRECT MENTORSHIP', 'COMMUNITY', 'PROGRESS TRACKING', 'PERSONALIZATION'].map((trait) => {
                      const isSelected = formData.valuedTraits.includes(trait);
                      return (
                        <div
                          key={trait}
                          onClick={() => toggleMultiSelect('valuedTraits', trait)}
                          style={{
                            padding: "12px",
                            backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)",
                            border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`,
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            color: isSelected ? "#D4AF37" : "#D4D4D8",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {isSelected ? "✓ " : "+ "} {trait}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>What would make an educational experience feel exceptional to you? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.exceptionalExperienceExpectation}
                    onChange={(e) => updateField('exceptionalExperienceExpectation', e.target.value)}
                    placeholder="Depth of instruction, intellectual resonance, quality of design..."
                    style={textareaStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>What do you expect from an institution you choose to invest your time and attention in? *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.institutionExpectations}
                    onChange={(e) => updateField('institutionExpectations', e.target.value)}
                    placeholder="Standards, integrity, uncompromising commitment to quality..."
                    style={textareaStyle}
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 6: FINAL DETAILS */}
            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>06</span>
                  <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>
                    Final Details & Review
                  </h2>
                  <p style={{ color: "#A1A1AA", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                    Concluding administrative details before transmitting your profile for review.
                  </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>How did you first discover Solo Genius? *</label>
                    <select
                      required
                      value={formData.discoverySource}
                      onChange={(e) => updateField('discoverySource', e.target.value)}
                      style={{ ...inputStyle, backgroundColor: "#0D0D0F", color: formData.discoverySource ? "#F4F4F5" : "#71717A" }}
                    >
                      <option value="" disabled>Select discovery channel</option>
                      <option value="Search">Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Friend">Friend</option>
                      <option value="Content">Content</option>
                      <option value="Website">Website</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Primary Program Interest *</label>
                    <select
                      required
                      value={formData.programInterest}
                      onChange={(e) => updateField('programInterest', e.target.value)}
                      style={{ ...inputStyle, backgroundColor: "#0D0D0F", color: formData.programInterest ? "#F4F4F5" : "#71717A" }}
                    >
                      <option value="" disabled>Select primary area</option>
                      <option value="Elite Music & Harmony">Elite Music & Harmony</option>
                      <option value="Creative Architecture">Creative Architecture</option>
                      <option value="Digital Systems & Business">Digital Systems & Business</option>
                      <option value="Complete Ecosystem Access">Complete Ecosystem Access</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Is there anything else you would like us to know?</label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => updateField('additionalNotes', e.target.value)}
                    placeholder="Optional final comments or context..."
                    style={textareaStyle}
                  />
                </div>

                {/* Review Summary Box */}
                <div style={{ backgroundColor: "rgba(13, 13, 15, 0.9)", border: "1px solid rgba(212, 175, 55, 0.2)", borderRadius: "4px", padding: "20px", marginTop: "10px" }}>
                  <h3 style={{ color: "#D4AF37", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
                    Application Summary
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "12px", color: "#A1A1AA" }}>
                    <div>Applicant: <strong style={{ color: "#FFFFFF" }}>{formData.fullName || "-"}</strong></div>
                    <div>Contact: <strong style={{ color: "#FFFFFF" }}>{formData.email || "-"}</strong></div>
                    <div>Location: <strong style={{ color: "#FFFFFF" }}>{formData.city || "-"}</strong></div>
                    <div>Level: <strong style={{ color: "#FFFFFF" }}>{formData.experienceLevel || "-"}</strong></div>
                    <div>Program: <strong style={{ color: "#FFFFFF" }}>{formData.programInterest || "-"}</strong></div>
                    <div>Commitment: <strong style={{ color: "#FFFFFF" }}>{formData.weeklyCommitment || "-"}</strong></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          {!isSubmitted && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "24px" }}>
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    backgroundColor: "transparent",
                    color: "#A1A1AA",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    padding: "11px 24px",
                    borderRadius: "2px",
                    fontSize: "11px",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  BACK
                </button>
              ) : <div />}

              {currentStep < totalSteps ? (
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#09090B",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "2px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease"
                  }}
                >
                  NEXT STEP
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#D4AF37",
                    color: "#09090B",
                    border: "none",
                    padding: "12px 36px",
                    borderRadius: "2px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "all 0.2s ease"
                  }}
                >
                  {isSubmitting ? "TRANSMITTING PROFILE..." : "SUBMIT APPLICATION"}
                </button>
              )}
            </div>
          )}
        </form>

        {/* Submission Success State */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", padding: "40px 0" }}
          >
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(212, 175, 55, 0.1)", border: "1px solid rgba(212, 175, 55, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto", color: "#D4AF37", fontSize: "20px" }}>
              ✦
            </div>
            <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase" }}>
              ADMISSION PROTOCOL ACTIVE
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF", margin: "10px 0 16px 0", letterSpacing: "-0.5px" }}>
              Application Received
            </h2>
            <p style={{ color: "#A1A1AA", fontSize: "14px", lineHeight: "1.6", maxWidth: "480px", margin: "0 auto 30px auto" }}>
              Thank you for taking the time to introduce yourself to Solo Genius. Your application has been dispatched securely and will be reviewed as part of our private admission process.
            </p>
            <div style={{ display: "inline-block", backgroundColor: "rgba(13, 13, 15, 0.9)", border: "1px solid rgba(212, 175, 55, 0.25)", borderRadius: "4px", padding: "16px 28px", marginBottom: "32px", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", marginBottom: "6px", fontSize: "11px" }}>
                <span style={{ color: "#71717A" }}>APPLICATION STATUS</span>
                <span style={{ color: "#D4AF37", fontWeight: "600", letterSpacing: "1px" }}>RECEIVED</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", fontSize: "11px" }}>
                <span style={{ color: "#71717A" }}>APPLICATION REFERENCE</span>
                <span style={{ color: "#FFFFFF", fontWeight: "600", letterSpacing: "1px" }}>{appReference}</span>
              </div>
            </div>
            <div>
              <a
                href="/"
                style={{
                  display: "inline-block",
                  backgroundColor: "transparent",
                  color: "#D4AF37",
                  border: "1px solid rgba(212, 175, 55, 0.5)",
                  padding: "12px 28px",
                  borderRadius: "2px",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                RETURN TO SOLO GENIUS
              </a>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

// Reusable Styles
const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#D4AF37",
  fontSize: "10px",
  fontWeight: "600",
  letterSpacing: "1.5px",
  marginBottom: "8px",
  textTransform: "uppercase"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(13, 13, 15, 0.8)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "4px",
  padding: "12px 14px",
  color: "#FFFFFF",
  fontSize: "13px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease"
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(13, 13, 15, 0.8)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "4px",
  padding: "12px 14px",
  color: "#FFFFFF",
  fontSize: "13px",
  outline: "none",
  boxSizing: "border-box",
  resize: "vertical",
  fontFamily: "Inter, sans-serif",
  transition: "border-color 0.2s ease"
};