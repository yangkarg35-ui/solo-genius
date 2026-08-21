'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

  // Form State Architecture mapped to the 10 diagnostic steps
  const [formData, setFormData] = useState({
    intention: '', 
    currentState: '',
    friction: [] as string[], 
    currentMethod: '',
    desiredResult: '',
    transformationPriority: '',
    commitment: '',
    customerFit: '',
    whySoloGenius: '',
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appReference, setAppReference] = useState('');

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFrictionSelect = (item: string) => {
    setFormData((prev) => {
      const list = prev.friction;
      if (list.includes(item)) {
        return { ...prev, friction: list.filter((i) => i !== item) };
      } else {
        if (list.length >= 3) return prev;
        return { ...prev, friction: [...list, item] };
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
    <div
      style={{
        backgroundColor: '#09090B',
        color: '#F4F4F5',
        minHeight: '100vh',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          maxWidth: '1100px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(212, 175, 55, 0.4)',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#FFFFFF',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Solo Genius
          </span>
          <span style={{ color: '#71717A', fontSize: '11px' }}>/</span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: '500',
              color: '#D4AF37',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Application
          </span>
        </div>
        <a
          href="/"
          style={{
            color: '#A1A1AA',
            fontSize: '11px',
            textDecoration: 'none',
            letterSpacing: '1.5px',
            fontWeight: '500',
          }}
        >
          BACK TO SOLO GENIUS
        </a>
      </header>

      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '60px 24px 100px 24px',
          boxSizing: 'border-box',
        }}
      >
        {!isSubmitted && currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '40px', textAlign: 'left' }}
          >
            <div
              style={{
                color: '#D4AF37',
                textTransform: 'uppercase',
                fontSize: '10px',
                letterSpacing: '3px',
                fontWeight: '600',
                marginBottom: '12px',
              }}
            >
              SOLO GENIUS — APPLICATION
            </div>
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 44px)',
                fontWeight: '700',
                letterSpacing: '-1px',
                color: '#FFFFFF',
                margin: '0 0 16px 0',
                lineHeight: '1.15',
              }}
            >
              BECOME MORE CAPABLE.
            </h1>
            <p
              style={{
                color: '#A1A1AA',
                fontSize: '15px',
                lineHeight: '1.6',
                margin: '0 0 24px 0',
                maxWidth: '580px',
              }}
            >
              A private application for people who are serious about developing their ability to learn, think, create and perform.
            </p>
          </motion.div>
        )}

        {!isSubmitted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNum = index + 1;
              const isActive = currentStep === stepNum;
              const isPassed = currentStep > stepNum;
              return (
                <div key={index} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div
                    style={{
                      height: '2px',
                      width: '100%',
                      backgroundColor: isPassed || isActive ? '#D4AF37' : 'rgba(255, 255, 255, 0.1)',
                      transition: 'background-color 0.4s ease',
                    }}
                  />
                </div>
              );
            })}
            <div
              style={{
                fontSize: '11px',
                color: '#71717A',
                fontWeight: '600',
                letterSpacing: '1px',
                minWidth: '35px',
                textAlign: 'right',
              }}
            >
              {currentStep < 10 ? `0${currentStep}` : currentStep}/10
            </div>
          </div>
        )}

        <form
          onSubmit={
            currentStep === totalSteps
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  handleNext();
                }
          }
        >
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                    STEP 01 — INTENTION
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 8px 0', letterSpacing: '-0.5px' }}>
                    What are you here to develop?
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  {[
                    {
                      id: 'CREATIVE MUSIC',
                      title: '① CREATIVE MUSIC',
                      desc: 'I want to develop my musical ability and turn my instrument into a tool for expression and creation.',
                    },
                    {
                      id: 'GENIUS LEARNING',
                      title: '② GENIUS LEARNING',
                      desc: 'I want to develop how I learn, think, create and solve problems.',
                    },
                  ].map((item) => {
                    const isSelected = formData.intention === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => updateField('intention', item.id)}
                        style={{
                          padding: '18px 20px',
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1px', marginBottom: '6px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '13px', color: '#A1A1AA', lineHeight: '1.5' }}>
                          {item.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                    STEP 02 — CURRENT STATE
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 8px 0', letterSpacing: '-0.5px' }}>
                    Where are you now?
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  {[
                    { id: 'BEGINNING', title: '① BEGINNING', desc: 'Starting out or dependent on guidance.' },
                    { id: 'DEVELOPING', title: '② DEVELOPING', desc: 'Can practice independently but facing bottlenecks.' },
                    { id: 'CAPABLE', title: '③ CAPABLE', desc: 'Confident execution but seeking deeper creation.' },
                    { id: 'ADVANCED', title: '④ ADVANCED', desc: 'High operator wanting absolute mastery.' },
                  ].map((state) => {
                    const isSelected = formData.currentState === state.id;
                    return (
                      <div
                        key={state.id}
                        onClick={() => updateField('currentState', state.id)}
                        style={{
                          padding: '14px 16px',
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontSize: '11px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', marginBottom: '4px' }}>
                          {state.title}
                        </div>
                        <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{state.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                    STEP 03 — THE FRICTION
                  </span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                    What currently limits your progress? (Max 3)
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {[
                    { id: 'DIRECTION', label: '① DIRECTION — Lack of precise path.' },
                    { id: 'RETENTION', label: '② RETENTION — Forgetting or slow recall.' },
                    { id: 'APPLICATION', label: '③ APPLICATION — Theory doesn’t translate to action.' },
                    { id: 'THINKING', label: '④ THINKING — Surface-level problem solving.' },
                    { id: 'CREATIVITY', label: '⑤ CREATIVITY — Stuck imitating instead of creating.' },
                    { id: 'SYSTEM', label: '⑥ SYSTEM — Lack of personal execution engine.' },
                  ].map((item) => {
                    const isSelected = formData.friction.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleFrictionSelect(item.id)}
                        style={{
                          padding: '12px 14px',
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: isSelected ? '#D4AF37' : '#D4D4D8',
                        }}
                      >
                        {isSelected ? '✓ ' : '+ '} {item.label}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 04 — METHOD</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>How are you currently trying to improve?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Self-Study / Books', '② YouTube / Random Media', '③ Standard Online Courses', '④ Private Coaching', '⑤ No Consistent System Yet'].map((method) => {
                    const isSelected = formData.currentMethod === method;
                    return (
                      <div key={method} onClick={() => updateField('currentMethod', method)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {method}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 05 — THE RESULT</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>What do you want to master next?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Independent Mastery & Problem Solving', '② Deep Creative Expression', '③ Flawless Technical Execution', '④ Complete System Architecture'].map((item) => {
                    const isSelected = formData.desiredResult === item;
                    return (
                      <div key={item} onClick={() => updateField('desiredResult', item)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 6 && (
              <motion.div key="step6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 06 — PRIORITY</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>Which matters most to you?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Pure Skill Depth', '② Complete Independence', '③ Creative Originality', '④ Long-term System Building'].map((item) => {
                    const isSelected = formData.transformationPriority === item;
                    return (
                      <div key={item} onClick={() => updateField('transformationPriority', item)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 7 && (
              <motion.div key="step7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 07 — COMMITMENT</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>How serious are you about this transformation?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Exploring options', '② Actively seeking solution', '③ Fully committed to execute', '④ All-in priority'].map((item) => {
                    const isSelected = formData.commitment === item;
                    return (
                      <div key={item} onClick={() => updateField('commitment', item)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 8 && (
              <motion.div key="step8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 08 — FIT</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>Which statement describes you best?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Want someone to give exact steps', '② Want structured operational frameworks', '③ Want to master the system and operate independently', '④ Want high-end rigorous challenge'].map((item) => {
                    const isSelected = formData.customerFit === item;
                    return (
                      <div key={item} onClick={() => updateField('customerFit', item)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 9 && (
              <motion.div key="step9" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 09 — ALIGNMENT</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>Why Solo Genius?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {['① Want uncompromising technical standard', '② Value high-end private methodology', '③ Reject superficial fluff for core mechanics', '④ Ready to build exceptional mastery'].map((item) => {
                    const isSelected = formData.whySoloGenius === item;
                    return (
                      <div key={item} onClick={() => updateField('whySoloGenius', item)} style={{ padding: '12px 14px', backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)', border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: '4px', cursor: 'pointer', fontSize: '12px', color: isSelected ? '#D4AF37' : '#D4D4D8' }}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {currentStep === 10 && (
              <motion.div key="step10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>STEP 10 — DISPATCH</span>
                  <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0' }}>Where should we send your review status?</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" required value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} placeholder="Legal Name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred Name</label>
                    <input type="text" value={formData.preferredName} onChange={(e) => updateField('preferredName', e.target.value)} placeholder="Preferred" style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="name@domain.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / Telegram *</label>
                    <input type="text" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="+95..." style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>City / Country *</label>
                  <input type="text" required value={formData.city} onChange={(e) => updateField('city', e.target.value)} placeholder="Location" style={inputStyle} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!isSubmitted && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '24px' }}>
              {currentStep > 1 ? (
                <button type="button" onClick={handleBack} style={{ backgroundColor: 'transparent', color: '#A1A1AA', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '11px 24px', borderRadius: '2px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>
                  BACK
                </button>
              ) : <div />}

              {currentStep < totalSteps ? (
                <button type="submit" style={{ backgroundColor: '#FFFFFF', color: '#09090B', border: 'none', padding: '12px 30px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                  NEXT STEP
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#D4AF37', color: '#09090B', border: 'none', padding: '12px 36px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                  {isSubmitting ? 'TRANSMITTING...' : 'SUBMIT APPLICATION'}
                </button>
              )}
            </div>
          )}
        </form>

        {isSubmitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#FFFFFF', margin: '10px 0 16px 0' }}>UNDER REVIEW</h2>
            <p style={{ color: '#A1A1AA', fontSize: '14px', marginBottom: '30px' }}>Your profile has been safely dispatched.</p>
            <div style={{ display: 'inline-block', backgroundColor: '#0D0D0F', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '16px 28px', borderRadius: '4px' }}>
              <span style={{ color: '#D4AF37', fontWeight: '600' }}>Reference: {appReference}</span>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: '#D4AF37',
  fontSize: '10px',
  fontWeight: '600',
  letterSpacing: '1.5px',
  marginBottom: '8px',
  textTransform: 'uppercase',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(13, 13, 15, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  padding: '12px 14px',
  color: '#FFFFFF',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
};