'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const goldGlowHover = {
    hover: {
      scale: 1.02,
      boxShadow: '0px 0px 20px rgba(212, 175, 55, 0.4)',
      borderColor: '#D4AF37',
      transition: { duration: 0.3 },
    },
  };

  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#F5F5F7', minHeight: '100vh', fontFamily: "'Cinzel', 'Inter', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. Header & Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(10, 10, 10, 0.8)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.png" alt="Solo Genius Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '2px', color: '#D4AF37' }}>SOLO GENIUS</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {['Curriculum', 'Manifesto', 'Identity'].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} style={{ color: '#A1A1A6', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px', transition: 'color 0.3s' }}>
              {item}
            </a>
          ))}
          <a href="/verify" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', border: '1px solid #D4AF37', padding: '8px 16px', borderRadius: '2px' }}>
            VERIFY STUDENT
          </a>
        </div>
      </motion.nav>

      {/* 2. Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', position: 'relative' }}
      >
        <motion.p variants={fadeInUp} style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
          Private Exclusive Circle
        </motion.p>
        
        <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '300', letterSpacing: '3px', lineHeight: '1.2', maxWidth: '900px', marginBottom: '25px' }}>
          FOR THE <span style={{ color: '#D4AF37', fontStyle: 'italic', fontWeight: '600' }}>0.000833%</span> WHO DEMAND ABSOLUTE MASTERY
        </motion.h1>

        <motion.p variants={fadeInUp} style={{ color: '#A1A1A6', fontSize: '1.1rem', maxWidth: '650px', lineHeight: '1.8', marginBottom: '40px' }}>
          Silent, technical, and uncompromising guitar harmony logic. We do not teach the crowd; we craft the elite solitary genius.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', border: 'none', padding: '18px 42px', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer', borderRadius: '2px' }}
          >
            REQUEST ACCESS
          </motion.button>
        </motion.div>
      </motion.section>

      {/* 3. The Brand Manifesto */}
      <section id="manifesto" style={{ padding: '100px 20px', backgroundColor: '#050505', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', letterSpacing: '3px', color: '#D4AF37', marginBottom: '10px' }}>THE MANIFESTO</motion.h2>
            <motion.div variants={fadeInUp} style={{ width: '50px', height: '1px', backgroundColor: '#D4AF37', margin: '0 auto' }}></motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
          >
            {[
              { title: 'NO WASTED TALK', desc: 'Direct, high-end technical connection. No ego, no fluff, no stage theatricals. Pure architectural chord theory.' },
              { title: 'STATUS & BELONGING', desc: 'A silent, mysterious network reserved exclusively for those who value precise artistic execution over popular approval.' },
              { title: 'CREATIVE MASTERPIECE', desc: 'Transforming foundational rhythm mechanics and numeric chord degree steps into absolute artistic dominance.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                custom={idx}
                style={{ backgroundColor: '#0F0F10', border: '1px solid rgba(212, 175, 55, 0.15)', padding: '40px 30px', borderRadius: '4px', cursor: 'default' }}
              >
                <h3 style={{ fontSize: '1.1rem', letterSpacing: '2px', color: '#F5F5F7', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: '#8E8E93', fontSize: '0.95rem', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Founder / Systemic Identity Section */}
      <section id="identity" style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}
        >
          <motion.div variants={fadeInUp} style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '400px', border: '1px solid #D4AF37', position: 'absolute', top: '15px', left: '15px', zIndex: 0 }}></div>
            <img 
              src="/owner.jpg" 
              alt="Solo Genius System" 
              style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'relative', zIndex: 1, filter: 'grayscale(100%) contrast(120%)' }} 
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p style={{ color: '#D4AF37', fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>SYSTEM DESIGNER</p>
            <h2 style={{ fontSize: '2.2rem', letterSpacing: '2px', marginBottom: '20px' }}>ARCHITECT OF HARMONY</h2>
            <p style={{ color: '#A1A1A6', lineHeight: '1.8', marginBottom: '20px', fontSize: '0.95rem' }}>
              We dismantle standard rote memorization and rebuild musical comprehension from raw structural chord degree pathways, aural mapping, and tactile precision.
            </p>
            <p style={{ color: '#A1A1A6', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Designed specifically for high-performers who treat time as their most non-renewable asset.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. Footer */}
      <footer style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)', padding: '40px 20px', textAlign: 'center', backgroundColor: '#050505' }}>
        <p style={{ color: '#6E6E73', fontSize: '0.8rem', letterSpacing: '1px' }}>
          &copy; {new Date().getFullYear()} SOLO GENIUS MUSICAL SCHOOL. ALL RIGHTS RESERVED.
        </p>
      </footer>

      {/* 6. Application Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: '#0F0F10', border: '1px solid #D4AF37', padding: '40px', maxWidth: '500px', width: '100%', borderRadius: '4px', position: 'relative' }}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: '15px', right: '20px', backgroundColor: 'transparent', border: 'none', color: '#A1A1A6', fontSize: '1.5rem', cursor: 'pointer' }}
              >
                &times;
              </button>
              
              <h3 style={{ color: '#D4AF37', fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '10px' }}>PRIVATE ADMISSION</h3>
              <p style={{ color: '#A1A1A6', fontSize: '0.85rem', marginBottom: '25px', lineHeight: '1.5' }}>
                Please provide your contact details. Admission is subject to strict review.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert('Application submitted under review.'); }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#F5F5F7', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '8px' }}>FULL NAME</label>
                  <input type="text" required style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #2C2C2E', padding: '12px', color: '#F5F5F7', borderRadius: '2px', outline: 'none' }} />
                </div>
                
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', color: '#F5F5F7', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '8px' }}>DIRECT EMAIL</label>
                  <input type="email" required style={{ width: '100%', backgroundColor: '#050505', border: '1px solid #2C2C2E', padding: '12px', color: '#F5F5F7', borderRadius: '2px', outline: 'none' }} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  style={{ width: '100%', backgroundColor: '#D4AF37', color: '#0A0A0A', border: 'none', padding: '14px', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer', borderRadius: '2px' }}
                >
                  SUBMIT APPLICATION
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}