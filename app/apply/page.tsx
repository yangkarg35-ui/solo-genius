'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function ApplyPage() {
const [currentStep, setCurrentStep] = useState(1);
const totalSteps = 10;
// Form State Architecture mapped to the 10 diagnostic steps
const [formData, setFormData] = useState({
// Step 01
intention: '', // 'CREATIVE MUSIC' | 'GENIUS LEARNING'
// Step 02
currentState: '',
// Step 03
friction: [] as string[], // up to 3
// Step 04
currentMethod: '',
// Step 05
desiredResult: '',
// Step 06
transformationPriority: '',
// Step 07
commitment: '',
// Step 08
customerFit: '',
// Step 09
whySoloGenius: '',
// Step 10: Contact details for secure dispatch
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
if (list.length >= 3) return prev; // Max 3 limit rule
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
const refCode = SG-APP-${randomId};
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
{/* Minimal Header */}
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

<span style={{ color: '#71717A', fontSize: '11px' }}>/
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


<a
href="/"
style={{
color: '#A1A1AA',
fontSize: '11px',
textDecoration: 'none',
letterSpacing: '1.5px',
fontWeight: '500',
transition: 'color 0.2s ease',
}}
>
BACK TO SOLO GENIUS
  {/* Main Container */}
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
        <div
          style={{
            display: 'inline-block',
            padding: '6px 12px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            fontSize: '11px',
            color: '#D4AF37',
            letterSpacing: '1px',
          }}
        >
          PRIVATE ASSESSMENT PROTOCOL
        </div>
      </motion.div>
    )}

    {/* Subtle Progress Indicator */}
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

    {/* Form Steps Engine */}
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
        {/* STEP 01 — INTENTION */}
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
                      transition: 'all 0.2s ease',
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

        {/* STEP 02 — CURRENT STATE */}
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
              <p style={{ color: '#71717A', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Track: {formData.intention || 'CREATIVE MUSIC'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              {formData.intention === 'GENIUS LEARNING' ? (
                [
                  { id: 'BEGINNING', title: '① BEGINNING', desc: 'I mostly depend on others or existing content to learn.' },
                  { id: 'DEVELOPING', title: '② DEVELOPING', desc: 'I can learn independently but my system isn’t consistent.' },
                  { id: 'CAPABLE', title: '③ CAPABLE', desc: 'I can learn independently but want stronger thinking and application.' },
                  { id: 'ADVANCED', title: '④ ADVANCED', desc: 'I already learn effectively and want to operate at a much higher level.' },
                ]
              ) : (
                [
                  { id: 'BEGINNING', title: '① BEGINNING', desc: 'I can play basic things but still depend heavily on guidance.' },
                  { id: 'DEVELOPING', title: '② DEVELOPING', desc: 'I can play songs independently but my ability feels limited.' },
                  { id: 'CAPABLE', title: '③ CAPABLE', desc: 'I can play confidently but struggle with deeper musical understanding or creation.' },
                  { id: 'ADVANCED', title: '④ ADVANCED', desc: 'I can perform/create, but I want to develop a much higher level of musical intelligence.' },
                ]
              ).map((state) => {
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
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1px', marginBottom: '4px' }}>
                      {state.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{state.desc}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 03 — THE FRICTION */}
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
                What currently limits your progress?
              </h2>
              <p style={{ color: '#A1A1AA', fontSize: '12px', margin: 0 }}>Choose up to 3 options ({formData.friction.length}/3 selected).</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {formData.intention === 'GENIUS LEARNING' ? (
                [
                  { id: 'DIRECTION', label: '① DIRECTION — I don’t know what I should learn next.' },
                  { id: 'RETENTION', label: '② RETENTION — I learn things but forget them.' },
                  { id: 'APPLICATION', label: '③ APPLICATION — I understand information but struggle to use it.' },
                  { id: 'THINKING', label: '④ THINKING — I want to reason more clearly and critically.' },
                  { id: 'RESEARCH', label: '⑤ RESEARCH — I struggle to find and evaluate reliable information.' },
                  { id: 'CREATIVITY', label: '⑥ CREATIVITY — I want to generate better ideas and original solutions.' },
                  { id: 'SYSTEM', label: '⑦ SYSTEM — I don’t have a reliable personal learning system.' },
                  { id: 'ADAPTATION', label: '⑧ ADAPTATION — I want to become more capable of adapting in an AI-driven world.' },
                ]
              ) : (
                [
                  { id: 'DIRECTION', label: '① DIRECTION — I don’t know what I should practice next.' },
                  { id: 'PROGRESS', label: '② PROGRESS — I practice, but my progress is slower than expected.' },
                  { id: 'APPLICATION', label: '③ APPLICATION — I understand concepts but struggle to use them.' },
                  { id: 'MUSICAL UNDERSTANDING', label: '④ MUSICAL UNDERSTANDING — I can play music but don’t deeply understand why it works.' },
                  { id: 'CREATION', label: '⑤ CREATION — I can reproduce music but struggle to create my own.' },
                  { id: 'TASTE', label: '⑥ TASTE — I want to develop stronger musical taste and judgment.' },
                  { id: 'FEEDBACK', label: '⑦ FEEDBACK — I don’t have a reliable way to identify my weaknesses.' },
                  { id: 'LEARNING', label: '⑧ LEARNING — I consume a lot of information but don’t turn enough of it into ability.' },
                ]
              ).map((item) => {
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
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isSelected ? '✓ ' : '+ '} {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 04 — WHAT HAVE YOU BEEN DOING? */}
        {currentStep === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 04 — WHAT HAVE YOU BEEN DOING?
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                How are you currently trying to improve?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {[
                '① SELF-STUDY',
                '② YOUTUBE / ONLINE CONTENT',
                '③ ONLINE COURSES',
                '④ PRIVATE TEACHER / COACH',
                '⑤ BOOKS / ARTICLES',
                '⑥ AI TOOLS',
                '⑦ PERSONAL PRACTICE SYSTEM',
                '⑧ I DON’T HAVE A CONSISTENT SYSTEM YET',
              ].map((method) => {
                const isSelected = formData.currentMethod === method;
                return (
                  <div
                    key={method}
                    onClick={() => updateField('currentMethod', method)}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: isSelected ? '#D4AF37' : '#D4D4D8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {method}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 05 — THE RESULT */}
        {currentStep === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 05 — THE RESULT
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                What do you want to be able to do that you cannot do today?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {formData.intention === 'GENIUS LEARNING' ? (
                [
                  { id: 'LEARN', label: '① LEARN — Learn new subjects independently.' },
                  { id: 'REMEMBER', label: '② REMEMBER — Retain and retrieve what I learn.' },
                  { id: 'THINK', label: '③ THINK — Think more clearly and make better judgments.' },
                  { id: 'SOLVE', label: '④ SOLVE — Solve unfamiliar problems independently.' },
                  { id: 'CREATE', label: '⑤ CREATE — Generate original ideas and solutions.' },
                  { id: 'ADAPT', label: '⑥ ADAPT — Learn and adapt faster in a changing world.' },
                  { id: 'MASTER', label: '⑦ MASTER — Build a personal system for continuous mastery.' },
                ]
              ) : (
                [
                  { id: 'PLAY', label: '① PLAY — Play music with greater control and confidence.' },
                  { id: 'UNDERSTAND', label: '② UNDERSTAND — Understand music deeply rather than simply reproduce it.' },
                  { id: 'ANALYZE', label: '③ ANALYZE — Hear, analyze and understand why music works.' },
                  { id: 'CREATE', label: '④ CREATE — Create my own musical ideas and compositions.' },
                  { id: 'ARRANGE', label: '⑤ ARRANGE — Transform ideas into complete musical arrangements.' },
                  { id: 'EXPRESS', label: '⑥ EXPRESS — Use music as my own form of creative expression.' },
                  { id: 'MASTER', label: '⑦ MASTER — Develop a significantly higher level of musical ability.' },
                ]
              ).map((item) => {
                const isSelected = formData.desiredResult === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => updateField('desiredResult', item.id)}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: isSelected ? '#D4AF37' : '#D4D4D8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 06 — TRANSFORMATION PRIORITY */}
        {currentStep === 6 && (
          <motion.div
            key="step6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 06 — TRANSFORMATION PRIORITY
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                Which matters most to you?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {[
                { id: 'SKILL', title: '① SKILL', desc: 'I want stronger capability.' },
                { id: 'INDEPENDENCE', title: '② INDEPENDENCE', desc: 'I want to stop depending on others for my progress.' },
                { id: 'CREATIVITY', title: '③ CREATIVITY', desc: 'I want to create rather than simply consume.' },
                { id: 'MASTERY', title: '④ MASTERY', desc: 'I want to reach a level most people never reach.' },
                { id: 'IDENTITY', title: '⑤ IDENTITY', desc: 'I want to become a different kind of person through what I learn.' },
              ].map((item) => {
                const isSelected = formData.transformationPriority === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => updateField('transformationPriority', item.id)}
                    style={{
                      padding: '14px 16px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1px', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 07 — COMMITMENT */}
        {currentStep === 7 && (
          <motion.div
            key="step7"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 07 — COMMITMENT
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                How serious are you about this transformation?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {[
                { id: 'EXPLORING', title: '① EXPLORING', desc: 'I’m interested and want to understand Solo Genius.' },
                { id: 'READY', title: '② READY', desc: 'I’m actively looking for a serious solution.' },
                { id: 'COMMITTED', title: '③ COMMITTED', desc: 'I’m ready to invest time, effort and resources into my development.' },
                { id: 'ALL IN', title: '④ ALL IN', desc: 'This is an important transformation I am prepared to prioritize.' },
              ].map((item) => {
                const isSelected = formData.commitment === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => updateField('commitment', item.id)}
                    style={{
                      padding: '14px 16px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: '700', color: isSelected ? '#D4AF37' : '#FFFFFF', letterSpacing: '1px', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 08 — FIT */}
        {currentStep === 8 && (
          <motion.div
            key="step8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 08 — FIT
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                Which statement describes you best?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {[
                { id: '1', desc: '① I want someone to simply teach me what to do.' },
                { id: '2', desc: '② I want a structured system that guides me.' },
                { id: '3', desc: '③ I want to understand the system and eventually operate independently.' },
                { id: '4', desc: '④ I want to be challenged to think, create and develop beyond conventional learning.' },
              ].map((item) => {
                const isSelected = formData.customerFit === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => updateField('customerFit', item.id)}
                    style={{
                      padding: '14px 16px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: isSelected ? '#D4AF37' : '#D4D4D8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item.desc}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 09 — FINAL */}
        {currentStep === 9 && (
          <motion.div
            key="step9"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 09 — FINAL
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                Why Solo Genius?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              {[
                '① I want a different way to learn.',
                '② I want deeper understanding, not just information.',
                '③ I want to become more independent.',
                '④ I want to develop my creative ability.',
                '⑤ I want a system that turns learning into real capability.',
                '⑥ I want to become the person capable of creating my own path.',
              ].map((item) => {
                const isSelected = formData.whySoloGenius === item;
                return (
                  <div
                    key={item}
                    onClick={() => updateField('whySoloGenius', item)}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: isSelected ? '#D4AF37' : '#D4D4D8',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 10 — CONTACT & DISPATCH */}
        {currentStep === 10 && (
          <motion.div
            key="step10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div>
              <span style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2px' }}>
                STEP 10 — CONTACT DETAILS
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', margin: '6px 0 4px 0', letterSpacing: '-0.5px' }}>
                Where should we send your review status?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
                  placeholder="How to address you"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
                <label style={labelStyle}>Phone / Telegram *</label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+95... or handle"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>City / Country *</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                placeholder="Your location"
                style={inputStyle}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      {!isSubmitted && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
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
                padding: '11px 24px',
                borderRadius: '2px',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
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
                color: '#09090B',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '2px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
              }}
            >
              NEXT STEP
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#D4AF37',
                color: '#09090B',
                border: 'none',
                padding: '12px 36px',
                borderRadius: '2px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              {isSubmitting ? 'TRANSMITTING PROFILE...' : 'SUBMIT APPLICATION'}
            </button>
          )}
        </div>
      )}
    </form>

    {/* Submission Success State with Luxury Status */}
    {isSubmitted && (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', padding: '40px 0' }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
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
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          APPLICATION STATUS
        </span>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#FFFFFF',
            margin: '10px 0 16px 0',
            letterSpacing: '-0.5px',
          }}
        >
          UNDER REVIEW
        </h2>
        <p
          style={{
            color: '#A1A1AA',
            fontSize: '14px',
            lineHeight: '1.6',
            maxWidth: '480px',
            margin: '0 auto 30px auto',
          }}
        >
          Your responses have been received. Solo Genius reviews every application based on fit, commitment and transformation potential.
        </p>

        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(13, 13, 15, 0.9)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '4px',
            padding: '16px 28px',
            marginBottom: '32px',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '40px',
              marginBottom: '6px',
              fontSize: '11px',
            }}
          >
            <span style={{ color: '#71717A' }}>APPLICATION STATUS</span>
            <span style={{ color: '#D4AF37', fontWeight: '600', letterSpacing: '1px' }}>UNDER REVIEW</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '40px',
              fontSize: '11px',
            }}
          >
            <span style={{ color: '#71717A' }}>REFERENCE</span>
            <span style={{ color: '#FFFFFF', fontWeight: '600', letterSpacing: '1px' }}>
              {appReference}
            </span>
          </div>
        </div>

        <div>
          <a
            href="/"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#D4AF37',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              padding: '12px 28px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
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
transition: 'border-color 0.2s ease',
};