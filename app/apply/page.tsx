'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const tuitionFee = 500; // USD 500 Standard Pricing

  // Form State Architecture
  const [formData, setFormData] = useState({
    intention: '',
    currentMusicState: '',
    currentLearningState: '',
    frictionPoints: [] as string[],
    currentMethod: '',
    desiredResult: '',
    transformationPriority: '',
    commitmentLevel: '',
    customerFit: '',
    whySoloGenius: '',
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: '',
    ageRange: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appReference, setAppReference] = useState('');

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMultiSelect = (field: 'frictionPoints', item: string) => {
    setFormData((prev) => {
      const list = prev[field];
      if (list.includes(item)) {
        return { ...prev, [field]: list.filter((i) => i !== item) };
      } else {
        if (list.length >= 3) return prev;
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
        body: JSON.stringify({ ...formData, appReference: refCode, tuitionFee: `USD ${tuitionFee}` }),
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
                  BECOME MORE CAPABLE.
                </div>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: "700", letterSpacing: "-1px", color: "#FFFFFF", margin: "0 0 16px 0", lineHeight: "1.15" }}>
                  Private Application
                </h1>
                <p style={{ color: "#A1A1AA", fontSize: "15px", lineHeight: "1.6", margin: "0 0 24px 0", maxWidth: "580px" }}>
                  A private application for people who are serious about developing their ability to learn, think, create and perform.
                </p>
                <div style={{ display: "inline-block", padding: "6px 12px", backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "4px", fontSize: "11px", color: "#D4AF37", letterSpacing: "1px" }}>
                  PRIVATE ASSESSMENT • SOLO GENIUS STANDARD (USD 500)
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
                {currentStep < 10 ? `0${currentStep}` : currentStep}/10
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              <AnimatePresence mode="wait">
                
                {/* STEP 01 — INTENTION */}
                {currentStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 01</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>What are you here to develop?</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        { id: 'CREATIVE MUSIC', title: '① CREATIVE MUSIC', desc: 'I want to develop my musical ability and turn my instrument into a tool for expression and creation. (ဂီတစွမ်းရည်ကို မြှင့်တင်ချင်ပြီး ဖန်တီးသူဘဝသို့ ကူးပြောင်းချင်သူများအတွက်)' },
                        { id: 'GENIUS LEARNING', title: '② GENIUS LEARNING', desc: 'I want to develop how I learn, think, create and solve problems — especially if you face difficulties in studying or building systems. (လေ့လာသင်ယူရာမှာ၊ အချက်အလက်မှတ်သားရာမှာ ဒါမှမဟုတ် ကိုယ်ပိုင်စနစ်တည်ဆောက်ရာမှာ အခက်အခဲရှိနေသူများအတွက်)' }
                      ].map((item) => {
                        const isSelected = formData.intention === item.id;
                        return (
                          <div key={item.id} onClick={() => updateField('intention', item.id)} style={{ padding: "16px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", transition: "all 0.2s ease" }}>
                            <div style={{ fontSize: "12px", fontWeight: "700", color: isSelected ? "#D4AF37" : "#FFFFFF", letterSpacing: "1px", marginBottom: "4px" }}>{item.title}</div>
                            <div style={{ fontSize: "12px", color: "#A1A1AA", lineHeight: "1.5" }}>{item.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 02 — CURRENT STATE */}
                {currentStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 02</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>Where are you now?</h2>
                    </div>
                    {formData.intention === 'CREATIVE MUSIC' ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ fontSize: "11px", color: "#D4AF37", letterSpacing: "1.5px", fontWeight: "700" }}>CREATIVE MUSIC STATE</div>
                        {[
                          { id: 'BEGINNING', label: '① BEGINNING — အခြေခံတီးနိုင်ပေမယ့် လမ်းညွှန်မှုအမြဲလိုနေသေးတယ်။' },
                          { id: 'DEVELOPING', label: '② DEVELOPING — သီချင်းတွေကို တစ်ယောက်တည်း တီးနိုင်ပေမယ့် တိုးတက်မှု အားနည်းနေတယ်။' },
                          { id: 'CAPABLE', label: '③ CAPABLE — ယုံကြည်မှုရှိရှိ တီးနိုင်ပေမယ့် ဂီတသဘောတရားနဲ့ ဖန်တီးမှုပိုင်းမှာ အားနည်းချက်ရှိတယ်။' },
                          { id: 'ADVANCED', label: '④ ADVANCED — ကျွမ်းကျင်စွာ တီးခတ်/ဖန်တီးနိုင်ပြီး ပိုမိုမြင့်မားတဲ့ ဉာဏ်ရည်ပိုင်းကို တည်ဆောက်ချင်တယ်။' }
                        ].map((opt) => {
                          const isSelected = formData.currentMusicState === opt.id;
                          return (
                            <div key={opt.id} onClick={() => updateField('currentMusicState', opt.id)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {opt.label}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ fontSize: "11px", color: "#D4AF37", letterSpacing: "1.5px", fontWeight: "700" }}>GENIUS LEARNING STATE</div>
                        {[
                          { id: 'BEGINNING', label: '① BEGINNING — အခြားသူများရဲ့ လမ်းညွှန်မှုနဲ့ ကွန်တెంట్‌များကို အဓိက အမှီပြုနေရတယ်။' },
                          { id: 'DEVELOPING', label: '② DEVELOPING — ကိုယ်တိုင်လေ့လာနိုင်ပေမယ့် စနစ်တကျ မဖြစ်သေးဘူး။' },
                          { id: 'CAPABLE', label: '③ CAPABLE — တစ်သီးပုဂ္ဂလ လေ့လာနိုင်ပေမယ့် စဉ်းစားတွေးခေါ်မှုနဲ့ အသုံးချမှုကို ပိုကောင်းချင်တယ်။' },
                          { id: 'ADVANCED', label: '④ ADVANCED — ထိရောက်စွာ လေ့လာတတ်ပြီး အဆင့်အတန်းမြင့်မားစွာ လုပ်ကိုင်လိုတယ်။' }
                        ].map((opt) => {
                          const isSelected = formData.currentLearningState === opt.id;
                          return (
                            <div key={opt.id} onClick={() => updateField('currentLearningState', opt.id)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {opt.label}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STEP 03 — THE FRICTION */}
                {currentStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 03</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>What currently limits your progress?</h2>
                      <p style={{ color: "#A1A1AA", fontSize: "12px", margin: 0 }}>အများဆုံး ၃ ခု ရွေးချယ်ပါ။</p>
                    </div>
                    {formData.intention === 'CREATIVE MUSIC' ? (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                        {[
                          '① DIRECTION — ရှေ့ဆက်ဘာလေ့ကျင့်ရမလဲ မသိတာ။',
                          '② PROGRESS — လေ့ကျင့်ပေမယ့် မျှော်လင့်ထားတာထက် တိုးတက်မှု နှေးကွေးနေတာ။',
                          '③ APPLICATION — သဘောတရားတွေကို နားလည်ပေမယ့် လက်တွေ့မသုံးတတ်တာ။',
                          '④ MUSICAL UNDERSTANDING — သီချင်းတီးနိုင်ပေမယ့် ဘာကြောင့်ကောင်းလဲ အနက်ရှိုင်း မသိတာ။',
                          '⑤ CREATION — အခြားသူတီးတာကို ပြန်တီးနိုင်ပေမယ့် ကိုယ်ပိုင်ဖန်တီးဖို့ ခက်ခဲတာ။',
                          '⑥ TASTE — ဂီတအရသာနဲ့ စဉ်းစားဆုံးဖြတ်နိုင်စွမ်းကို မြှင့်တင်ချင်တာ။',
                          '⑦ FEEDBACK — ကိုယ့်ရဲ့အားနည်းချက်ကို တိကျစွာ ထောက်ပြပေးမယ့်သူ မရှိတာ။',
                          '⑧ LEARNING — သတင်းအချက်အလက်တွေ စားသုံးပေမယ့် စွမ်းရည်အဖြစ် မပြောင်းနိုင်တာ။'
                        ].map((item) => {
                          const isSelected = formData.frictionPoints.includes(item);
                          return (
                            <div key={item} onClick={() => toggleMultiSelect('frictionPoints', item)} style={{ padding: "12px 14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {isSelected ? "✓ " : "+ "} {item}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                        {[
                          '① DIRECTION — ရှေ့ဆက်ဘာလေ့လာရမလဲ မသိတာ။',
                          '② RETENTION — သင်ယူထားတာတွေကို ပြန်မေ့သွားတာ။',
                          '③ APPLICATION — အချက်အလက်တွေကို သိပေမယ့် လက်တွေ့မသုံးတတ်တာ။',
                          '④ THINKING — ပိုမိုရှင်းလင်းပြတ်သားစွာနဲ့ ဝေဖန်ပိုင်းခြား စဉ်းစားချင်တာ။',
                          '⑤ RESEARCH — ယုံကြည်စိတ်ချရတဲ့ အချက်အလက်ရှာဖွေဖို့ အခက်အခဲရှိတာ။',
                          '⑥ CREATIVITY — အကြံဉာဏ်ကောင်းတွေနဲ့ မူပိုင်ဖြေရှင်းချက်တွေ ထုတ်လုပ်ချင်တာ။',
                          '⑦ SYSTEM — တိကျခိုင်မာတဲ့ ကိုယ်ပိုင်လေ့လာမှု စနစ်မရှိတာ။',
                          '⑧ ADAPTATION — AI ခေတ်ကြီးထဲမှာ ပိုမိုမြန်ဆန်စွာ လိုက်လျောညီထွေဖြစ်ချင်တာ။'
                        ].map((item) => {
                          const isSelected = formData.frictionPoints.includes(item);
                          return (
                            <div key={item} onClick={() => toggleMultiSelect('frictionPoints', item)} style={{ padding: "12px 14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {isSelected ? "✓ " : "+ "} {item}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STEP 04 — WHAT HAVE YOU BEEN DOING? */}
                {currentStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 04</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>How are you currently trying to improve?</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {[
                        '① ကိုယ်တိုင်လေ့လာခြင်း (Self-Study)',
                        '② YouTube / အွန်လိုင်းကွန်တెంట్‌များ',
                        '③ အွန်လိုင်းသင်တန်းများ',
                        '④ ကိုယ်ပိုင်ဆရာ / ကိုယ်ရေးကိုယ်တာ Coach',
                        '⑤ စာအုပ်များ / ဆောင်းပါးများ',
                        '⑥ AI ကိရိယာများအသုံးပြုခြင်း',
                        '⑦ ကိုယ်ပိုင်လေ့ကျင့်မှုစနစ်',
                        '⑧ တိကျတဲ့စနစ် မရှိသေးပါ'
                      ].map((method) => {
                        const isSelected = formData.currentMethod === method;
                        return (
                          <div key={method} onClick={() => updateField('currentMethod', method)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "11px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600", textAlign: "center" }}>
                            {method}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 05 — THE RESULT */}
                {currentStep === 5 && (
                  <motion.div key="step5" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 05</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>What do you want to be able to do that you cannot do today?</h2>
                    </div>
                    {formData.intention === 'CREATIVE MUSIC' ? (
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                          { id: 'PLAY', label: '① PLAY — ဂီတကို ထိန်းချုပ်နိုင်စွမ်းအပြည့်နဲ့ ယုံကြည်မှုရှိရှိ တီးခတ်နိုင်ခြင်း။' },
                          { id: 'UNDERSTAND', label: '② UNDERSTAND — ရိုးရိုးပြန်တီးတာထက် ဂီတသဘောတရားကို အနက်ရှိုင်း နားလည်ခြင်း။' },
                          { id: 'ANALYZE', label: '③ ANALYZE — ကြားရုံနဲ့ ဂီတအလုပ်လုပ်ပုံကို စဉ်းစားဆန်းစစ်နိုင်ခြင်း။' },
                          { id: 'CREATE', label: '④ CREATE — ကိုယ်ပိုင်ဂီတအကြံဉာဏ်နဲ့ ဖန်တီးမှုများ ပြုလုပ်နိုင်ခြင်း။' },
                          { id: 'ARRANGE', label: '⑤ ARRANGE — အကြံဉာဏ်များကို အပြီးသတ် ဂီတအဆင်အပြင်အဖြစ် ဖန်တီးခြင်း။' },
                          { id: 'EXPRESS', label: '⑥ EXPRESS — ကိုယ့်ရဲ့ ဖန်တီးဖော်ပြလိုမှုကို ဂီတဖြင့် တိုက်ရိုက်ထုတ်ဖော်ခြင်း။' },
                          { id: 'MASTER', label: '⑦ MASTER — ပိုမိုမြင့်မားတဲ့ ဂီတစွမ်းရည် အဆင့်အတန်းသို့ ရောက်ရှိခြင်း။' }
                        ].map((opt) => {
                          const isSelected = formData.desiredResult === opt.id;
                          return (
                            <div key={opt.id} onClick={() => updateField('desiredResult', opt.id)} style={{ padding: "12px 14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {opt.label}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {[
                          { id: 'LEARN', label: '① LEARN — အသစ်အဆန်းများကို တစ်သီးပုဂ္ဂလ လေ့လာတတ်ခြင်း။' },
                          { id: 'REMEMBER', label: '② REMEMBER — သင်ယူခဲ့သမျှကို မှတ်မိသိမ်းဆည်းပြီး လိုအပ်ချိန်ထုတ်သုံးနိုင်ခြင်း။' },
                          { id: 'THINK', label: '③ THINK — ပိုမိုကောင်းမွန်စွာ စဉ်းစားတွေးခေါ်ပြီး မှန်ကန်သော ဆုံးဖြတ်ချက်ချနိုင်ခြင်း။' },
                          { id: 'SOLVE', label: '④ SOLVE — မရင်းနှီးသော ပြဿနာများကို ကိုယ်တိုင်ဖြေရှင်းနိုင်ခြင်း။' },
                          { id: 'CREATE', label: '⑤ CREATE — မူပိုင်အကြံဉာဏ်နဲ့ ဖြေရှင်းချက်အသစ်များ ဖန်တီးခြင်း။' },
                          { id: 'ADAPT', label: '⑥ ADAPT — အပြောင်းအလဲမြန်သော ကမ္ဘာကြီးထဲတွင် လျင်မြန်စွာ လိုက်လျောညီထွေဖြစ်ခြင်း။' },
                          { id: 'MASTER', label: '⑦ MASTER — စဉ်ဆက်မပြတ် တိုးတက်စေမယ့် ကိုယ်ပိုင်စနစ် တည်ဆောက်ခြင်း။' }
                        ].map((opt) => {
                          const isSelected = formData.desiredResult === opt.id;
                          return (
                            <div key={opt.id} onClick={() => updateField('desiredResult', opt.id)} style={{ padding: "12px 14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                              {opt.label}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STEP 06 — TRANSFORMATION PRIORITY */}
                {currentStep === 6 && (
                  <motion.div key="step6" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 06</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>Which matters most to you?</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        { id: 'SKILL', label: '① SKILL — ပိုမိုခိုင်မာသော စွမ်းရည် (Capability)' },
                        { id: 'INDEPENDENCE', label: '② INDEPENDENCE — တိုးတက်မှုအတွက် အခြားသူအပေါ် မှီခိုနေရခြင်းမှ ကင်းဝေးခြင်း' },
                        { id: 'CREATIVITY', label: '③ CREATIVITY — ရိုးရိုးစားသုံးသူဘဝမှ ဖန်တီးသူဘဝသို့ ကူးပြောင်းခြင်း' },
                        { id: 'MASTERY', label: '④ MASTERY — လူအများစု မရောက်နိုင်သော အဆင့်အတန်းသို့ ရောက်ရှိခြင်း' },
                        { id: 'IDENTITY', label: '⑤ IDENTITY — သင်ယူမှုမှတစ်ဆင့် ထူးခြားသော လူတစ်ဦးအဖြစ် ပြောင်းလဲခြင်း' }
                      ].map((opt) => {
                        const isSelected = formData.transformationPriority === opt.id;
                        return (
                          <div key={opt.id} onClick={() => updateField('transformationPriority', opt.id)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                            {opt.label}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 07 — COMMITMENT */}
                {currentStep === 7 && (
                  <motion.div key="step7" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 07</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>How serious are you about this transformation?</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        { id: 'EXPLORING', label: '① EXPLORING — စိတ်ဝင်စားပြီး Solo Genius အကြောင်းကို လေ့လာနေဆဲပါ။' },
                        { id: 'READY', label: '② READY — တိကျခိုင်မာတဲ့ ဖြေရှင်းချက်တစ်ခုကို တက်ကြွစွာ ရှာဖွေနေပါတယ်။' },
                        { id: 'COMMITTED', label: '③ COMMITTED — ကိုယ့်တိုးတက်မှုအတွက် အချိန်၊ ကြိုးစားအားထုတ်မှုနဲ့ ရင်းနှီးမြှုပ်နှံဖို့ အသင့်ရှိပါတယ်။' },
                        { id: 'ALL IN', label: '④ ALL IN — ဒါဟာ ကျွန်တော့်ရဲ့ အဓိက ဦးစားပေး အသွင်ကူးပြောင်းမှု ဖြစ်ပါတယ်။' }
                      ].map((opt) => {
                        const isSelected = formData.commitmentLevel === opt.id;
                        return (
                          <div key={opt.id} onClick={() => updateField('commitmentLevel', opt.id)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                            {opt.label}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 08 — FIT */}
                {currentStep === 8 && (
                  <motion.div key="step8" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 08</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>Which statement describes you best?</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        { id: 'SIMPLE_TEACH', label: '① ဘာလုပ်ရမယ်ဆိုတာကို တစ်စုံတစ်ဦးက ရိုးရိုးရှင်းရှင်း သင်ပြပေးတာကို လိုချင်တယ်။' },
                        { id: 'STRUCTURED_SYSTEM', label: '② ကိုယ့်ကို လမ်းပြပေးမယ့် တည်ဆောက်ထားတဲ့ စနစ်တစ်ခု လိုအပ်တယ်။' },
                        { id: 'OPERATE_INDEPENDENTLY', label: '③ စနစ်ကို နားလည်ပြီး အနာဂတ်မှာ ကိုယ်တိုင် ရပ်တည်လုပ်ကိုင်နိုင်ချင်တယ်။' },
                        { id: 'CHALLENGE_BEYOND', label: '④ သာမန်သင်ယူမှုထက် ကျော်လွန်ပြီး စဉ်းစားဖို့၊ ဖန်တီးဖို့နဲ့ စိန်ခေါ်ခံရဖို့ အသင့်ရှိတယ်။' }
                      ].map((opt) => {
                        const isSelected = formData.customerFit === opt.id;
                        return (
                          <div key={opt.id} onClick={() => updateField('customerFit', opt.id)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                            {opt.label}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 09 — FINAL (REASON) */}
                {currentStep === 9 && (
                  <motion.div key="step9" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 09</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>Why Solo Genius?</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        '① လေ့လာမှုပြုလုပ်ရန် လုံးဝကွဲပြားသော နည်းလမ်းကို လိုချင်လို့ပါ။',
                        '② သတင်းအချက်အလက်သက်သက်မဟုတ်ဘဲ အနက်ရှိုင်းဆုံး နားလည်မှုကို လိုချင်လို့ပါ။',
                        '③ ပိုမိုလွတ်လပ်ပြီး ကိုယ်ပိုင်ရပ်တည်နိုင်စွမ်းရှိသူ ဖြစ်လာချင်လို့ပါ။',
                        '④ ကိုယ့်ရဲ့ ဖန်တီးနိုင်စွမ်းရည်ကို အမြင့်ဆုံး မြှင့်တင်ချင်လို့ပါ။',
                        '⑤ သင်ယူမှုကို စစ်မှန်သော စွမ်းရည်အဖြစ် ပြောင်းလဲပေးမယ့် စနစ်လိုချင်လို့ပါ။',
                        '⑥ ကိုယ်ပိုင်လမ်းကြောင်းကို ဖန်တီးနိုင်စွမ်းရှိတဲ့ လူတစ်ယောက် ဖြစ်လာချင်လို့ပါ။'
                      ].map((reason) => {
                        const isSelected = formData.whySoloGenius === reason;
                        return (
                          <div key={reason} onClick={() => updateField('whySoloGenius', reason)} style={{ padding: "14px", backgroundColor: isSelected ? "rgba(212, 175, 55, 0.08)" : "rgba(255, 255, 255, 0.02)", border: `1px solid ${isSelected ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}`, borderRadius: "4px", cursor: "pointer", fontSize: "12px", color: isSelected ? "#D4AF37" : "#A1A1AA", fontWeight: "600" }}>
                            {reason}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 10 — TRANSMISSION / CREDENTIALS */}
                {currentStep === 10 && (
                  <motion.div key="step10" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "2px" }}>STEP 10 — TRANSMISSION & TUITION BREAKDOWN</span>
                      <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF", margin: "6px 0 8px 0", letterSpacing: "-0.5px" }}>Private credentials & Admission Summary</h2>
                    </div>

                    {/* Pricing Summary Box */}
                    <div style={{ backgroundColor: "rgba(212, 175, 55, 0.04)", border: "1px solid rgba(212, 175, 55, 0.2)", borderRadius: "6px", padding: "16px 20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", color: "#D4AF37", fontWeight: "700", letterSpacing: "1.5px" }}>PROGRAM TIER</span>
                        <span style={{ fontSize: "11px", color: "#FFFFFF", fontWeight: "600" }}>Solo Genius Standard</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                        <span style={{ fontSize: "11px", color: "#D4AF37", fontWeight: "700", letterSpacing: "1.5px" }}>TUITION FEE</span>
                        <span style={{ fontSize: "16px", color: "#D4AF37", fontWeight: "700" }}>USD 500</span>
                      </div>
                      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "10px", fontSize: "11px", color: "#A1A1AA", lineHeight: "1.5" }}>
                        * လျှောက်လွှာ အတည်ပြုပြီးပါက ကျွန်ုပ်တို့၏ Team ဘက်မှ <strong style={{ color: "#FFFFFF" }}>၂၄ နာရီအတွင်း</strong> သင်၏ လိပ်စာ/ဆက်သွယ်ရန်သို့ တိုက်ရိုက် ဆက်သွယ်ပေးမည် ဖြစ်ပါသည်။
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Full Legal Name *</label>
                        <input type="text" required value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} placeholder="ဥပမာ - Kyaw Zin Win" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Preferred Alias</label>
                        <input type="text" value={formData.preferredName} onChange={(e) => updateField('preferredName', e.target.value)} placeholder="ဥပမာ - Alex" style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Secure Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="name@domain.com" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Direct Phone / Telegram *</label>
                        <input type="text" required value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="@handle သို့မဟုတ် +95..." style={inputStyle} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={labelStyle}>Location / City *</label>
                        <input type="text" required value={formData.city} onChange={(e) => updateField('city', e.target.value)} placeholder="ဥပမာ - Yangon, Myanmar" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Age Tier *</label>
                        <select required value={formData.ageRange} onChange={(e) => updateField('ageRange', e.target.value)} style={{ ...inputStyle, backgroundColor: "#0D0D0F", color: formData.ageRange ? "#F4F4F5" : "#71717A" }}>
                          <option value="" disabled>အသက်အုပ်စု ရွေးပါ</option>
                          <option value="Under 20">အသက် ၂၀ အောက်</option>
                          <option value="20-25">၂၀ - ၂၅ နှစ်</option>
                          <option value="26-35">၂၆ - ၃၅ နှစ်</option>
                          <option value="36-45">၃၆ - ၄၅ နှစ်</option>
                          <option value="46+">၄၆ နှစ်နှင့်အထက်</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation Controls */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "24px" }}>
                {currentStep > 1 ? (
                  <button type="button" onClick={handleBack} style={{ backgroundColor: "transparent", color: "#A1A1AA", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "11px 24px", borderRadius: "2px", fontSize: "11px", fontWeight: "600", letterSpacing: "1.5px", cursor: "pointer", transition: "all 0.2s ease" }}>
                    BACK
                  </button>
                ) : <div />}

                {currentStep < totalSteps ? (
                  <button type="submit" style={{ backgroundColor: "#FFFFFF", color: "#09090B", border: "none", padding: "12px 30px", borderRadius: "2px", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", cursor: "pointer", transition: "opacity 0.2s ease" }}>
                    NEXT STEP
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} style={{ backgroundColor: "#D4AF37", color: "#09090B", border: "none", padding: "12px 36px", borderRadius: "2px", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1, transition: "all 0.2s ease" }}>
                    {isSubmitting ? "TRANSMITTING PROFILE..." : "SUBMIT APPLICATION"}
                  </button>
                )}
              </div>
            </form>
          </>
        )}

        {/* Submission Success State */}
        {isSubmitted && (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(212, 175, 55, 0.1)", border: "1px solid rgba(212, 175, 55, 0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto", color: "#D4AF37", fontSize: "20px" }}>
              ✓
            </div>
            <span style={{ color: "#D4AF37", fontSize: "10px", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase" }}>
              ADMISSION PROTOCOL ACTIVE
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF", margin: "10px 0 16px 0", letterSpacing: "-0.5px" }}>
              Application Received
            </h2>
            <p style={{ color: "#A1A1AA", fontSize: "14px", lineHeight: "1.6", maxWidth: "480px", margin: "0 auto 30px auto" }}>
              သင့်ရဲ့ လျှောက်လွှာကို အောင်မြင်စွာ လက်ခံရရှိပါပြီ။ Solo Genius Team ဘက်မှ သင်၏ အချက်အလက်များကို စိစစ်ပြီး <strong style={{ color: "#FFFFFF" }}>၂၄ နာရီအတွင်း</strong> တိုက်ရိုက် ပြန်လည်ဆက်သွယ်ပေးပါမည်။
            </p>
            
            <div style={{ display: "inline-block", backgroundColor: "rgba(13, 13, 15, 0.9)", border: "1px solid rgba(212, 175, 55, 0.25)", borderRadius: "4px", padding: "16px 28px", marginBottom: "32px", textAlign: "left", width: "100%", maxWidth: "400px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", marginBottom: "8px", fontSize: "11px" }}>
                <span style={{ color: "#71717A" }}>APPLICATION STATUS</span>
                <span style={{ color: "#D4AF37", fontWeight: "600", letterSpacing: "1px" }}>UNDER REVIEW</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", marginBottom: "8px", fontSize: "11px" }}>
                <span style={{ color: "#71717A" }}>PROGRAM TIER</span>
                <span style={{ color: "#FFFFFF", fontWeight: "600" }}>Solo Genius Standard (USD 500)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", fontSize: "11px" }}>
                <span style={{ color: "#71717A" }}>REFERENCE</span>
                <span style={{ color: "#FFFFFF", fontWeight: "600", letterSpacing: "1px" }}>{appReference}</span>
              </div>
            </div>

            <div>
              <a href="/" style={{ display: "inline-block", backgroundColor: "transparent", color: "#D4AF37", border: "1px solid rgba(212, 175, 55, 0.5)", padding: "12px 28px", borderRadius: "2px", fontSize: "11px", fontWeight: "600", letterSpacing: "1.5px", textDecoration: "none", transition: "all 0.2s ease" }}>
                RETURN TO SOLO GENIUS
              </a>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

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