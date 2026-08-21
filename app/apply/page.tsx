'use client';

import React, { useState } from 'react';

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;

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
    personalThesis: '', // Added deep qualitative input
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: '',
    ageRange: '',
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
        backgroundColor: '#050507',
        color: '#F4F4F5',
        minHeight: '100vh',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Minimal Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 48px',
          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
          maxWidth: '1200px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img
            src="/logo.png"
            alt="Solo Genius Logo"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(212, 175, 55, 0.5)',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#FFFFFF',
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
            }}
          >
            Solo Genius
          </span>
          <span style={{ color: '#52525B', fontSize: '11px' }}>/</span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: '500',
              color: '#D4AF37',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
            }}
          >
            Private Assessment
          </span>
        </div>
        <a
          href="/"
          style={{
            color: '#A1A1AA',
            fontSize: '10px',
            textDecoration: 'none',
            letterSpacing: '2px',
            fontWeight: '500',
            transition: 'color 0.2s ease',
          }}
        >
          BACK TO SOLO GENIUS
        </a>
      </header>

      {/* Main Container */}
      <main
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '70px 24px 120px 24px',
          boxSizing: 'border-box',
        }}
      >
        {!isSubmitted && currentStep === 1 && (
          <div style={{ marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                color: '#D4AF37',
                textTransform: 'uppercase',
                fontSize: '10px',
                letterSpacing: '3.5px',
                fontWeight: '600',
                marginBottom: '14px',
              }}
            >
              SOLO GENIUS — PRIVATE SELECTION
            </div>
            <h1
              style={{
                fontSize: 'clamp(34px, 5vw, 48px)',
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
                color: '#94A3B8',
                fontSize: '15px',
                lineHeight: '1.7',
                margin: '0',
                maxWidth: '600px',
              }}
            >
              An exclusive diagnostic protocol designed strictly for individuals pursuing absolute mastery in music, thinking, and creation.
            </p>
          </div>
        )}

        {/* Progress Indicator */}
        {!isSubmitted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '48px' }}>
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
                      backgroundColor: isPassed || isActive ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)',
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
                letterSpacing: '1.5px',
                minWidth: '40px',
                textAlign: 'right',
              }}
            >
              {currentStep < 10 ? `0${currentStep}` : currentStep}/10
            </div>
          </div>
        )}

        {/* Form Body */}
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
          {/* STEP 01 — INTENTION */}
          {!isSubmitted && currentStep === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 01 — INTENTION
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  What domain are you here to master?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                {[
                  {
                    id: 'CREATIVE MUSIC',
                    title: '① CREATIVE MUSIC',
                    desc: 'I want to command my instrument and build an uncompromising foundation in modern musical theory and expression.',
                  },
                  {
                    id: 'GENIUS LEARNING',
                    title: '② GENIUS LEARNING',
                    desc: 'I want to engineer my mental models, cognitive architecture, and autonomous problem-solving capabilities.',
                  },
                ].map((item) => {
                  const isSelected = formData.intention === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => updateField('intention', item.id)}
                      style={{
                        padding: '24px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: isSelected ? '0 0 25px rgba(212, 175, 55, 0.08)' : 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                      }}
                    >
                      {/* Luxury Radio Indicator */}
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1.5px', marginBottom: '8px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '14px', color: '#94A3B8', lineHeight: '1.6' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 02 — CURRENT STATE */}
          {!isSubmitted && currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 02 — CURRENT STATE
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  Evaluate your current standing ({formData.intention || 'General'})
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                {formData.intention === 'CREATIVE MUSIC' ? (
                  [
                    { id: 'BEGINNING', title: '① BEGINNING', desc: 'Functional mechanics, yet heavily dependent on standard guidance.' },
                    { id: 'DEVELOPING', title: '② DEVELOPING', desc: 'Capable of independent execution, but hitting structural boundaries.' },
                    { id: 'CAPABLE', title: '③ CAPABLE', desc: 'Confident execution, missing deep theoretical integration and composition fluency.' },
                    { id: 'ADVANCED', title: '④ ADVANCED', desc: 'Performing at high levels, seeking elite intelligence and absolute refinement.' },
                  ]
                ) : (
                  [
                    { id: 'BEGINNING', title: '① BEGINNING', desc: 'Relying heavily on external frameworks and fragmented learning.' },
                    { id: 'DEVELOPING', title: '② DEVELOPING', desc: 'Independent acquisition, lacking a unified execution engine.' },
                    { id: 'CAPABLE', title: '③ CAPABLE', desc: 'Strong output, seeking advanced synthesis and higher leverage.' },
                    { id: 'ADVANCED', title: '④ ADVANCED', desc: 'Operating autonomously, pursuing peak intellectual and strategic mastery.' },
                  ]
                ).map((state) => {
                  const isSelected = formData.currentState === state.id;
                  return (
                    <div
                      key={state.id}
                      onClick={() => updateField('currentState', state.id)}
                      style={{
                        padding: '18px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1px', marginBottom: '4px' }}>
                          {state.title}
                        </div>
                        <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.5' }}>{state.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 03 — THE FRICTION */}
          {!isSubmitted && currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 03 — THE FRICTION
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  Identify your primary constraints (Select up to 3)
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {formData.intention === 'CREATIVE MUSIC' ? (
                  [
                    { id: 'DIRECTION', label: '① DIRECTION — Absence of absolute tactical clarity for progression.' },
                    { id: 'PROGRESS', label: '② PROGRESS — Diminished return on hours invested.' },
                    { id: 'APPLICATION', label: '③ APPLICATION — Theoretical knowledge failing to convert into live execution.' },
                    { id: 'MUSICAL UNDERSTANDING', label: '④ MUSICAL UNDERSTANDING — Surface performance lacking deep architectural comprehension.' },
                    { id: 'CREATION', label: '⑤ CREATION — Inability to reliably synthesize original compositions.' },
                    { id: 'TASTE', label: '⑥ TASTE — Stagnant artistic discrimination and nuance.' },
                    { id: 'FEEDBACK', label: '⑦ FEEDBACK — Lacking a high-resolution mirror to expose structural flaws.' },
                    { id: 'LEARNING', label: '⑧ LEARNING — Information consumption unaligned with true mastery.' },
                  ]
                ) : (
                  [
                    { id: 'DIRECTION', label: '① DIRECTION — Unclear trajectory for high-leverage skill acquisition.' },
                    { id: 'RETENTION', label: '② RETENTION — Signal decay and rapid loss of complex concepts.' },
                    { id: 'APPLICATION', label: '③ APPLICATION — Friction in deploying mental models to real-world scenarios.' },
                    { id: 'THINKING', label: '④ THOUGH-PROCESS — Lack of razor-sharp first-principles reasoning.' },
                    { id: 'RESEARCH', label: '⑤ RESEARCH — Noise pollution and inability to source premier intelligence.' },
                    { id: 'CREATIVITY', label: '⑥ CREATIVITY — Linear ideation instead of asymmetric leverage.' },
                    { id: 'SYSTEM', label: '⑦ SYSTEM — Absence of a permanent operational learning engine.' },
                    { id: 'ADAPTATION', label: '⑧ ADAPTATION — Slow calibration speed in a high-velocity environment.' },
                  ]
                ).map((item) => {
                  const isSelected = formData.friction.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleFrictionSelect(item.id)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      {/* Checkbox Style Luxury Indicator */}
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '3px',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                          color: '#D4AF37',
                          fontSize: '10px',
                          fontWeight: 'bold',
                        }}
                      >
                        {isSelected ? '✓' : ''}
                      </div>
                      <div>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 04 — CURRENT METHOD */}
          {!isSubmitted && currentStep === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 04 — CURRENT PROTOCOL
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  How do you currently attempt to solve this?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  '① UNSTRUCTURED SELF-STUDY',
                  '② FRAGMENTED YOUTUBE / PUBLIC MEDIA',
                  '③ CONVENTIONAL ONLINE COURSES',
                  '④ PRIVATE INSTRUCTORS / COACHES',
                  '⑤ LITERATURE AND RESEARCH',
                  '⑥ AI LEVERAGE',
                  '⑦ AD-HOC PERSONAL ROUTINES',
                  '⑧ LACKING ANY COHERENT SYSTEM',
                ].map((method) => {
                  const isSelected = formData.currentMethod === method;
                  return (
                    <div
                      key={method}
                      onClick={() => updateField('currentMethod', method)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>{method}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 05 — THE TARGET RESULT */}
          {!isSubmitted && currentStep === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 05 — THE DESIRED OUTCOME
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  What specific capability must you possess?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {formData.intention === 'CREATIVE MUSIC' ? (
                  [
                    '① COMMAND — Absolute technical execution with effortless precision.',
                    '② ARCHITECTURE — Total comprehension of harmonic structures.',
                    '③ AUDITORY ACUMEN — Instantaneous aural identification and analysis.',
                    '④ SYNTHESIS — Autonomous generation of sophisticated compositions.',
                    '⑤ ARRANGEMENT — Flawless translation of raw concepts into full arrangements.',
                    '⑥ EXPRESSION — Total alignment between internal voice and instrument.',
                    '⑦ ELITE MASTERY — Reaching tier-one musical execution.',
                  ]
                ) : (
                  [
                    '① AUTONOMY — Complete self-directed capability in any domain.',
                    '② RETENTION — Permanent cognitive encoding and retrieval.',
                    '③ STRATEGY — Flawless analytical judgment under ambiguity.',
                    '④ EXECUTION — Asymmetric problem-solving efficiency.',
                    '⑤ INVENTION — Generation of high-value intellectual property.',
                    '⑥ VELOCITY — Unmatched speed of paradigm adoption.',
                    '⑦ SOVEREIGNTY — Building a personal engine for lifelong mastery.',
                  ]
                ).map((item) => {
                  const isSelected = formData.desiredResult === item;
                  return (
                    <div
                      key={item}
                      onClick={() => updateField('desiredResult', item)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 06 — TRANSFORMATION PRIORITY */}
          {!isSubmitted && currentStep === 6 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 06 — CORE LEVERAGE
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  What is your absolute highest priority?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  '① CAPABILITY — Raw, undeniable skill.',
                  '② INDEPENDENCE — Total eradication of external reliance.',
                  '③ GENIUS CREATION — Producing original masterworks.',
                  '④ ELITE STATUS — Operating in the top fraction of one percent.',
                  '⑤ IDENTITY SHIFT — Becoming structurally transformed.',
                ].map((item) => {
                  const isSelected = formData.transformationPriority === item;
                  return (
                    <div
                      key={item}
                      onClick={() => updateField('transformationPriority', item)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 07 — COMMITMENT */}
          {!isSubmitted && currentStep === 7 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 07 — CONVICTION
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  What is your level of commitment?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  '① CURIOUS — Evaluating the architecture of Solo Genius.',
                  '② ACTIVE SEARCH — Seeking a premier, uncompromising solution.',
                  '③ COMMITTED — Prepared to deploy heavy capital and deep focus.',
                  '④ UNCOMPROMISING — Treating this as a non-negotiable life pillar.',
                ].map((item) => {
                  const isSelected = formData.commitment === item;
                  return (
                    <div
                      key={item}
                      onClick={() => updateField('commitment', item)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 08 — FIT */}
          {!isSubmitted && currentStep === 8 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 08 — ALIGNMENT
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  Which archetype aligns with your expectations?
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                {[
                  '① I require standard hand-holding and direct instructions.',
                  '② I need a structured curriculum to follow passively.',
                  '③ I want to master the system to execute entirely on my own.',
                  '④ I demand rigorous intellectual challenge and high-end sovereignty.',
                ].map((item) => {
                  const isSelected = formData.customerFit === item;
                  return (
                    <div
                      key={item}
                      onClick={() => updateField('customerFit', item)}
                      style={{
                        padding: '16px 20px',
                        backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(15, 15, 18, 0.6)',
                        border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.07)'}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: isSelected ? '#D4AF37' : '#D4D4D8',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        }}
                      >
                        {isSelected && (
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#D4AF37',
                            }}
                          />
                        )}
                      </div>
                      <div>{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 09 — WRITTEN ESSAY THESIS (Added Qualitative Depth) */}
          {!isSubmitted && currentStep === 9 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 09 — QUALITATIVE THESIS
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 4px 0', letterSpacing: '-0.5px' }}>
                  State your primary objective or artistic conviction.
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0' }}>
                  Briefly articulate what drives you to seek admission into Solo Genius. (Be direct and precise).
                </p>
              </div>

              <div>
                <textarea
                  rows={5}
                  value={formData.personalThesis}
                  onChange={(e) => updateField('personalThesis', e.target.value)}
                  placeholder="Write your thesis here... (e.g., I am building an uncompromising path in musical creation and require deep architectural systems rather than surface tutorials.)"
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(10, 10, 12, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '16px',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    lineHeight: '1.6',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 10 — DISPATCH DETAILS */}
          {!isSubmitted && currentStep === 10 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px' }}>
                  STEP 10 — TRANSMISSION
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '8px 0 0 0', letterSpacing: '-0.5px' }}>
                  Private credentials for review dispatch
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Full Name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Alias</label>
                  <input
                    type="text"
                    value={formData.preferredName}
                    onChange={(e) => updateField('preferredName', e.target.value)}
                    placeholder="Alias"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Secure Email *</label>
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
                  <label style={labelStyle}>Direct Phone / Telegram *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="@handle or +95..."
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Location / City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    placeholder="City, Country"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Age Tier</label>
                  <select
                    value={formData.ageRange}
                    onChange={(e) => updateField('ageRange', e.target.value)}
                    style={{ ...inputStyle, backgroundColor: '#0A0A0C', color: formData.ageRange ? '#F4F4F5' : '#71717A' }}
                  >
                    <option value="" disabled>Select bracket</option>
                    <option value="Under 20">Under 20</option>
                    <option value="20-25">20-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {!isSubmitted && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '48px',
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                paddingTop: '28px',
              }}
            >
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#A1A1AA',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '12px 28px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  BACK
                </button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#050507',
                    border: 'none',
                    padding: '13px 32px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    cursor: 'pointer',
                  }}
                >
                  PROCEED
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#050507',
                    border: 'none',
                    padding: '13px 40px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SUBMIT APPLICATION'}
                </button>
              )}
            </div>
          )}
        </form>

        {/* Submission Success State */}
        {isSubmitted && (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                color: '#D4AF37',
                fontSize: '20px',
              }}
            >
              ✓
            </div>
            <span
              style={{
                color: '#D4AF37',
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '3.5px',
                textTransform: 'uppercase',
              }}
            >
              PROTOCOL ENCRYPTED & DISPATCHED
            </span>
            <h2
              style={{
                fontSize: '30px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: '12px 0 16px 0',
                letterSpacing: '-0.5px',
              }}
            >
              APPLICATION LOGGED
            </h2>
            <p
              style={{
                color: '#94A3B8',
                fontSize: '14px',
                lineHeight: '1.7',
                maxWidth: '480px',
                margin: '0 auto 36px auto',
              }}
            >
              Your diagnostic transmission has been securely logged. Solo Genius evaluates dossiers individually based on exclusivity and fit.
            </p>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(10, 10, 12, 0.9)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '6px',
                padding: '20px 32px',
                marginBottom: '36px',
                textAlign: 'left',
                minWidth: '320px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', marginBottom: '10px', fontSize: '11px' }}>
                <span style={{ color: '#71717A' }}>DOSSIER STATUS</span>
                <span style={{ color: '#D4AF37', fontWeight: '600', letterSpacing: '1.5px' }}>QUEUED FOR REVIEW</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', fontSize: '11px' }}>
                <span style={{ color: '#71717A' }}>REFERENCE CODE</span>
                <span style={{ color: '#FFFFFF', fontWeight: '600', letterSpacing: '1.5px' }}>{appReference}</span>
              </div>
            </div>
            <div>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                RETURN TO SOLO GENIUS
              </a>
            </div>
          </div>
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
  letterSpacing: '2px',
  marginBottom: '8px',
  textTransform: 'uppercase',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(10, 10, 12, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '4px',
  padding: '14px 16px',
  color: '#FFFFFF',
  fontSize: '13px',
  outline: 'none',
  boxSizing: 'border-box',
};