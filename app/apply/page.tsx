'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// DATA STRUCTURE & CONFIGURATION (WITH GOLD & BLACK LUXURY VIBE)
// ==========================================

interface QuestionOption {
  id: string;
  title: string;
  desc?: string;
}

interface QuestionStep {
  id: number;
  key: string;
  eyebrow: string;
  question: string;
  instruction?: string;
  type: 'single' | 'multi' | 'custom_text' | 'identity_verify';
  maxSelections?: number;
  placeholder?: string;
  options: {
    universal?: QuestionOption[];
    music?: QuestionOption[];
    genius?: QuestionOption[];
  };
}

const FORM_STEPS: QuestionStep[] = [
  {
    id: 1,
    key: 'intention',
    eyebrow: 'STEP 01 — INTENTION',
    question: 'What are you here to develop?',
    instruction: 'Choose the transformation that matters most to you.',
    type: 'single',
    options: {
      universal: [
        { id: 'CREATIVE MUSIC', title: 'CREATIVE MUSIC', desc: 'Develop your musical ability and turn your instrument into a tool for expression, understanding and creation.' },
        { id: 'GENIUS LEARNING', title: 'GENIUS LEARNING', desc: 'Develop how you learn, think, create and solve problems independently.' }
      ]
    }
  },
  {
    id: 2,
    key: 'currentState',
    eyebrow: 'STEP 02 — CURRENT STATE',
    question: 'Where are you now?',
    type: 'single',
    options: {
      music: [
        { id: 'BEGINNING', title: '01 — BEGINNING', desc: 'I can play basic things but still depend heavily on guidance.' },
        { id: 'DEVELOPING', title: '02 — DEVELOPING', desc: 'I can play songs independently but my ability feels limited.' },
        { id: 'CAPABLE', title: '03 — CAPABLE', desc: 'I can play confidently but struggle with deeper musical understanding or creation.' },
        { id: 'ADVANCED', title: '04 — ADVANCED', desc: 'I can perform or create, but I want to develop a much higher level of musical intelligence.' }
      ],
      genius: [
        { id: 'BEGINNING', title: '01 — BEGINNING', desc: 'I mostly depend on others or existing content to learn.' },
        { id: 'DEVELOPING', title: '02 — DEVELOPING', desc: 'I can learn independently but my system isn\'t consistent.' },
        { id: 'CAPABLE', title: '03 — CAPABLE', desc: 'I can learn independently but want stronger thinking and application.' },
        { id: 'ADVANCED', title: '04 — ADVANCED', desc: 'I already learn effectively and want to operate at a much higher level.' }
      ]
    }
  },
  {
    id: 3,
    key: 'friction',
    eyebrow: 'STEP 03 — THE FRICTION',
    question: 'What currently limits your progress?',
    instruction: 'Choose up to 3.',
    type: 'multi',
    maxSelections: 3,
    options: {
      music: [
        { id: 'DIRECTION', title: '01 — DIRECTION', desc: 'I don\'t know what I should practice next.' },
        { id: 'PROGRESS', title: '02 — PROGRESS', desc: 'I practice, but my progress is slower than expected.' },
        { id: 'APPLICATION', title: '03 — APPLICATION', desc: 'I understand concepts but struggle to use them.' },
        { id: 'MUSICAL UNDERSTANDING', title: '04 — MUSICAL UNDERSTANDING', desc: 'I can play music but don\'t deeply understand why it works.' },
        { id: 'CREATION', title: '05 — CREATION', desc: 'I can reproduce music but struggle to create my own.' },
        { id: 'TASTE', title: '06 — TASTE', desc: 'I want to develop stronger musical taste and judgment.' },
        { id: 'FEEDBACK', title: '07 — FEEDBACK', desc: 'I don\'t have a reliable way to identify my weaknesses.' },
        { id: 'LEARNING', title: '08 — LEARNING', desc: 'I consume a lot of information but don\'t turn enough of it into ability.' }
      ],
      genius: [
        { id: 'DIRECTION', title: '01 — DIRECTION', desc: 'I don\'t know what I should learn next.' },
        { id: 'RETENTION', title: '02 — RETENTION', desc: 'I learn things but forget them.' },
        { id: 'APPLICATION', title: '03 — APPLICATION', desc: 'I understand information but struggle to use it.' },
        { id: 'THINKING', title: '04 — THINKING', desc: 'I want to reason more clearly and critically.' },
        { id: 'RESEARCH', title: '05 — RESEARCH', desc: 'I struggle to find and evaluate reliable information.' },
        { id: 'CREATIVITY', title: '06 — CREATIVITY', desc: 'I want to generate better ideas and original solutions.' },
        { id: 'SYSTEM', title: '07 — SYSTEM', desc: 'I don\'t have a reliable personal learning system.' },
        { id: 'ADAPTATION', title: '08 — ADAPTATION', desc: 'I want to become more capable of adapting in an AI-driven world.' }
      ]
    }
  },
  {
    id: 4,
    key: 'customFrictionDetail',
    eyebrow: 'STEP 04 — REALITY DIAGNOSIS',
    question: 'Describe your core bottleneck in your own words.',
    instruction: 'Be precise. What specifically breaks down when you try to improve?',
    type: 'custom_text',
    placeholder: 'Write your precise bottleneck here (e.g. I practice daily, but I am just copying patterns without deep structural understanding...)',
    options: { universal: [] }
  },
  {
    id: 5,
    key: 'methodsTried',
    eyebrow: 'STEP 05 — CURRENT METHOD',
    question: 'How are you currently trying to improve?',
    instruction: 'Select all that apply.',
    type: 'multi',
    options: {
      universal: [
        { id: 'SELF-STUDY', title: 'SELF-STUDY' },
        { id: 'YOUTUBE / ONLINE CONTENT', title: 'YOUTUBE / ONLINE CONTENT' },
        { id: 'ONLINE COURSES', title: 'ONLINE COURSES' },
        { id: 'PRIVATE TEACHER / COACH', title: 'PRIVATE TEACHER / COACH' },
        { id: 'BOOKS / ARTICLES', title: 'BOOKS / ARTICLES' },
        { id: 'AI TOOLS', title: 'AI TOOLS' },
        { id: 'PERSONAL PRACTICE SYSTEM', title: 'PERSONAL PRACTICE SYSTEM' },
        { id: 'I DON\'T HAVE A CONSISTENT SYSTEM YET', title: 'I DON\'T HAVE A CONSISTENT SYSTEM YET' }
      ]
    }
  },
  {
    id: 6,
    key: 'desiredResult',
    eyebrow: 'STEP 06 — DESIRED CAPABILITY',
    question: 'What do you want to be able to do that you cannot do today?',
    type: 'single',
    options: {
      music: [
        { id: 'PLAY', title: 'PLAY', desc: 'Play music with greater control and confidence.' },
        { id: 'UNDERSTAND', title: 'UNDERSTAND', desc: 'Understand music deeply rather than simply reproduce it.' },
        { id: 'ANALYZE', title: 'ANALYZE', desc: 'Hear, analyze and understand why music works.' },
        { id: 'CREATE', title: 'CREATE', desc: 'Create my own musical ideas and compositions.' },
        { id: 'ARRANGE', title: 'ARRANGE', desc: 'Transform ideas into complete musical arrangements.' },
        { id: 'EXPRESS', title: 'EXPRESS', desc: 'Use music as my own form of creative expression.' },
        { id: 'MASTER', title: 'MASTER', desc: 'Develop a significantly higher level of musical ability.' }
      ],
      genius: [
        { id: 'LEARN', title: 'LEARN', desc: 'Learn new subjects independently.' },
        { id: 'REMEMBER', title: 'REMEMBER', desc: 'Retain and retrieve what I learn.' },
        { id: 'THINK', title: 'THINK', desc: 'Think more clearly and make better judgments.' },
        { id: 'SOLVE', title: 'SOLVE', desc: 'Solve unfamiliar problems independently.' },
        { id: 'CREATE', title: 'CREATE', desc: 'Generate original ideas and solutions.' },
        { id: 'ADAPT', title: 'ADAPT', desc: 'Learn and adapt faster in a changing world.' },
        { id: 'MASTER', title: 'MASTER', desc: 'Build a personal system for continuous mastery.' }
      ]
    }
  },
  {
    id: 7,
    key: 'transformationPriority',
    eyebrow: 'STEP 07 — TRANSFORMATION PRIORITY',
    question: 'Which matters most to you?',
    type: 'single',
    options: {
      universal: [
        { id: 'SKILL', title: 'SKILL', desc: 'I want stronger capability.' },
        { id: 'INDEPENDENCE', title: 'INDEPENDENCE', desc: 'I want to stop depending on others for my progress.' },
        { id: 'CREATIVITY', title: 'CREATIVITY', desc: 'I want to create rather than simply consume.' },
        { id: 'MASTERY', title: 'MASTERY', desc: 'I want to reach a level most people never reach.' },
        { id: 'IDENTITY', title: 'IDENTITY', desc: 'I want to become a different kind of person through what I learn.' }
      ]
    }
  },
  {
    id: 8,
    key: 'commitmentLevel',
    eyebrow: 'STEP 08 — COMMITMENT',
    question: 'How serious are you about this transformation?',
    type: 'single',
    options: {
      universal: [
        { id: 'EXPLORING', title: 'EXPLORING', desc: 'I\'m interested and want to understand Solo Genius.' },
        { id: 'READY', title: 'READY', desc: 'I\'m actively looking for a serious solution.' },
        { id: 'COMMITTED', title: 'COMMITTED', desc: 'I\'m ready to invest time, effort and resources into my development.' },
        { id: 'ALL IN', title: 'ALL IN', desc: 'This is an important transformation I am prepared to prioritize.' }
      ]
    }
  },
  {
    id: 9,
    key: 'customerFit',
    eyebrow: 'STEP 09 — FIT',
    question: 'Which statement describes you best?',
    type: 'single',
    options: {
      universal: [
        { id: 'FIT_1', title: '01', desc: 'I want someone to simply teach me what to do.' },
        { id: 'FIT_2', title: '02', desc: 'I want a structured system that guides me.' },
        { id: 'FIT_3', title: '03', desc: 'I want to understand the system and eventually operate independently.' },
        { id: 'FIT_4', title: '04', desc: 'I want to be challenged to think, create and develop beyond conventional learning.' }
      ]
    }
  },
  {
    id: 10,
    key: 'whySoloGenius',
    eyebrow: 'STEP 10 — WHY SOLO GENIUS',
    question: 'What are you looking for?',
    instruction: 'Select one or more.',
    type: 'multi',
    options: {
      universal: [
        { id: 'WHY_1', title: 'I want a different way to learn.' },
        { id: 'WHY_2', title: 'I want deeper understanding, not just information.' },
        { id: 'WHY_3', title: 'I want to become more independent.' },
        { id: 'WHY_4', title: 'I want to develop my creative ability.' },
        { id: 'WHY_5', title: 'I want a system that turns learning into real capability.' },
        { id: 'WHY_6', title: 'I want to become the person capable of creating my own path.' }
      ]
    }
  },
  {
    id: 11,
    key: 'applicantIdentity',
    eyebrow: 'STEP 11 — PRIVATE REGISTRATION',
    question: 'How should Solo Genius contact you if accepted?',
    instruction: 'Provide your credentials for private review.',
    type: 'identity_verify',
    options: { universal: [] }
  }
];

export default function SoloGeniusApplication() {
  const [stepState, setStepState] = useState<'welcome' | 'form' | 'complete'>('welcome');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [formData, setFormData] = useState({
    intention: '',
    currentState: '',
    friction: [] as string[],
    customFrictionDetail: '',
    methodsTried: [] as string[],
    desiredResult: '',
    transformationPriority: '',
    commitmentLevel: '',
    customerFit: '',
    whySoloGenius: [] as string[],
    applicantName: '',
    applicantEmail: ''
  });

  const totalSteps = FORM_STEPS.length;
  const currentStep = FORM_STEPS[currentStepIndex];

  const getOptions = (step: QuestionStep) => {
    if (step.options.universal) return step.options.universal;
    return formData.intention === 'GENIUS LEARNING' ? step.options.genius : step.options.music;
  };

  const handleSelect = (key: string, value: string, type: string, max?: number) => {
    if (type === 'single') {
      setFormData(prev => ({ ...prev, [key]: value }));
    } else if (type === 'multi') {
      setFormData(prev => {
        const list = (prev[key as keyof typeof prev] as string[]) || [];
        if (list.includes(value)) {
          return { ...prev, [key]: list.filter(item => item !== value) };
        } else {
          if (max && list.length >= max) return prev;
          return { ...prev, [key]: [...list, value] };
        }
      });
    }
  };

  const isStepValid = () => {
    const val = formData[currentStep.key as keyof typeof formData];
    if (currentStep.type === 'identity_verify') {
      return Boolean(formData.applicantName.trim() && formData.applicantEmail.includes('@'));
    }
    if (Array.isArray(val)) return val.length > 0;
    return Boolean(val && String(val).trim().length > 0);
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStepState('complete');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStepState('welcome');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      backgroundColor: '#070709',
      color: '#F4F4F5',
      minHeight: '100vh',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '32px 48px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#D4AF37', letterSpacing: '3px', textTransform: 'uppercase' }}>
            SOLO GENIUS
          </span>
          <span style={{ color: '#52525B', fontSize: '11px' }}>/</span>
          <span style={{ fontSize: '10px', fontWeight: '500', color: '#A1A1AA', letterSpacing: '2px', textTransform: 'uppercase' }}>
            PRIVATE APPLICATION
          </span>
        </div>
        {stepState === 'form' && (
          <div style={{ fontSize: '11px', color: '#D4AF37', fontWeight: '600', letterSpacing: '2px' }}>
            {currentStepIndex + 1 < 10 ? `0${currentStepIndex + 1}` : currentStepIndex + 1} — {totalSteps < 10 ? `0${totalSteps}` : totalSteps}
          </div>
        )}
      </header>

      <main style={{
        maxWidth: '720px',
        width: '100%',
        margin: '0 auto',
        padding: '50px 24px 100px 24px',
        boxSizing: 'border-box',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {stepState === 'welcome' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'left', maxWidth: '640px' }}
          >
            <div style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '3px', fontWeight: '600', marginBottom: '16px' }}>
              SOLO GENIUS — EXCLUSIVE SELECTION
            </div>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 56px)', fontWeight: '700', letterSpacing: '-1.5px', color: '#FFFFFF', margin: '0 0 20px 0', lineHeight: '1.1' }}>
              Become more capable.
            </h1>
            <p style={{ color: '#A1A1AA', fontSize: '15px', lineHeight: '1.6', margin: '0 0 40px 0', maxWidth: '520px', fontWeight: '400' }}>
              A private application for individuals willing to invest deep effort into developing their absolute autonomy, thinking, and creative capability.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setStepState('form')}
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#070709',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '2px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
                }}
              >
                BEGIN APPLICATION
              </button>
              <span style={{ color: '#71717A', fontSize: '12px', letterSpacing: '0.5px' }}>
                Requires intentional reflection (4–6 mins)
              </span>
            </div>
          </motion.div>
        )}

        {stepState === 'form' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
              <div>
                <div style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '2.5px', marginBottom: '10px', textTransform: 'uppercase' }}>
                  {currentStep.eyebrow}
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '600', color: '#FFFFFF', margin: '0 0 8px 0', letterSpacing: '-0.75px', lineHeight: '1.2' }}>
                  {currentStep.question}
                </h2>
                {currentStep.instruction && (
                  <p style={{ color: '#8E8E93', fontSize: '13px', margin: 0, letterSpacing: '0.5px' }}>
                    {currentStep.instruction}
                  </p>
                )}
              </div>

              {/* Options Type */}
              {(currentStep.type === 'single' || currentStep.type === 'multi') && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {getOptions(currentStep).map((opt) => {
                    const isSelected = currentStep.type === 'single'
                      ? formData[currentStep.key as keyof typeof formData] === opt.id
                      : ((formData[currentStep.key as keyof typeof formData] as string[]) || []).includes(opt.id);

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelect(currentStep.key, opt.id, currentStep.type, currentStep.maxSelections)}
                        style={{
                          padding: '18px 20px',
                          backgroundColor: isSelected ? 'rgba(212, 175, 55, 0.06)' : 'rgba(255, 255, 255, 0.015)',
                          border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                          borderRadius: '3px',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: opt.desc ? '4px' : '0',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '13px', fontWeight: '600', color: isSelected ? '#FFFFFF' : '#D4D4D8', letterSpacing: '0.5px' }}>
                            {opt.title}
                          </span>
                          {isSelected && (
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4AF37', boxShadow: '0 0 8px #D4AF37' }} />
                          )}
                        </div>
                        {opt.desc && (
                          <span style={{ fontSize: '12px', color: isSelected ? '#C5A059' : '#8E8E93', lineHeight: '1.5' }}>
                            {opt.desc}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Custom Reflection Text */}
              {currentStep.type === 'custom_text' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <textarea
                    rows={5}
                    value={formData.customFrictionDetail}
                    onChange={(e) => setFormData(prev => ({ ...prev, customFrictionDetail: e.target.value }))}
                    placeholder={currentStep.placeholder}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '3px',
                      padding: '16px',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                  <span style={{ fontSize: '11px', color: '#D4AF37', fontStyle: 'italic', opacity: 0.8 }}>
                    * Your personal reflection is reviewed manually by Solo Genius analysts.
                  </span>
                </div>
              )}

              {/* Identity Verify */}
              {currentStep.type === 'identity_verify' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '11px', color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase' }}>Full Name / Alias</label>
                    <input
                      type="text"
                      value={formData.applicantName}
                      onChange={(e) => setFormData(prev => ({ ...prev, applicantName: e.target.value }))}
                      placeholder="e.g. Alexander Vance"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '3px',
                        padding: '14px 16px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '11px', color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase' }}>Secure Email Address</label>
                    <input
                      type="email"
                      value={formData.applicantEmail}
                      onChange={(e) => setFormData(prev => ({ ...prev, applicantEmail: e.target.value }))}
                      placeholder="e.g. vance@domain.com"
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '3px',
                        padding: '14px 16px',
                        color: '#FFFFFF',
                        fontSize: '14px',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '11px', color: '#D4AF37', fontStyle: 'italic', opacity: 0.8 }}>
                    * Private communications and review decisions are transmitted solely through this channel.
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '24px' }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#A1A1AA',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '11px 22px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    cursor: 'pointer'
                  }}
                >
                  BACK
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  style={{
                    backgroundColor: isStepValid() ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)',
                    color: isStepValid() ? '#070709' : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    cursor: isStepValid() ? 'pointer' : 'not-allowed',
                    boxShadow: isStepValid() ? '0 0 15px rgba(212, 175, 55, 0.2)' : 'none'
                  }}
                >
                  {currentStepIndex === totalSteps - 1 ? 'SUBMIT APPLICATION' : 'CONTINUE'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {stepState === 'complete' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'left', maxWidth: '560px' }}
          >
            <div style={{ color: '#D4AF37', fontSize: '10px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              APPLICATION STATUS
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
              Your application is complete.
            </h1>
            <p style={{ color: '#A1A1AA', fontSize: '14px', lineHeight: '1.6', margin: '0 0 32px 0' }}>
              Thank you, {formData.applicantName || 'Applicant'}. Your profile and personal diagnostics have been securely logged.
            </p>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '3px',
              padding: '24px',
              marginBottom: '36px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '12px' }}>
                <span style={{ color: '#71717A', letterSpacing: '1px' }}>STATUS</span>
                <span style={{ color: '#D4AF37', fontWeight: '600', letterSpacing: '1px' }}>UNDER MANUAL REVIEW</span>
              </div>
              <p style={{ color: '#8E8E93', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                Solo Genius reviews applications based on fit, genuine friction depth, commitment level, and transformation potential. Expect a direct decision via email.
              </p>
            </div>

            <div>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  padding: '12px 28px',
                  borderRadius: '2px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textDecoration: 'none'
                }}
              >
                RETURN TO SOLO GENIUS
              </a>
            </div>
          </motion.div>
        )}
      </main>

      <footer style={{
        padding: '24px 48px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        color: '#52525B',
        fontSize: '10px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
      }}>
        <span>Solo Genius Private System</span>
        <span style={{ color: '#D4AF37' }}>All Rights Reserved</span>
      </footer>
    </div>
  );
}