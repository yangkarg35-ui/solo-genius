'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function StudentWorksPage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(220, 220);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.OctahedronGeometry(1.6, 0);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.02,
      transmission: 0.95,
      ior: 2.417,
      thickness: 1.2,
      specularIntensity: 1.0,
      envMapIntensity: 2.0,
    });

    const gem = new THREE.Mesh(geometry, material);
    scene.add(gem);

    const frontLight = new THREE.DirectionalLight(0xffffff, 3);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 4, 20);
    blueLight.position.set(-4, 4, -4);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xD4AF37, 4, 20);
    goldLight.position.set(4, -4, 4);
    scene.add(goldLight);

    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const categories = [
    { title: "Original Compositions", desc: "Music written from the student's own ideas, emotions, and creative voice." },
    { title: "Fingerstyle Arrangements", desc: "Personal interpretations of existing music that demonstrate musical understanding and artistic decision-making." },
    { title: "Performances", desc: "Live and recorded performances that showcase confidence, expression, and technical development." },
    { title: "Creative Projects", desc: "Assignments and experimental works designed to challenge imagination, problem-solving, and originality." },
    { title: "Professional Portfolios", desc: "A curated collection of each student's strongest work, prepared for freelance opportunities, collaborations, and future creative careers." }
  ];

  return (
    <div style={{
      backgroundColor: "#030712",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 60px",
        width: "100%",
        backgroundColor: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "17px", fontWeight: "600", color: "#ffffff", letterSpacing: "1px" }}>
            SOLO GENIUS
          </span>
        </div>

        <div style={{ display: "flex", gap: "30px", fontSize: "14px", color: "#d1d5db" }}>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>Overview</a>
          <a href="/explore" style={{ color: "#D4AF37", fontWeight: "600", textDecoration: "none" }}>Explore</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Music</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Account</a>
        </div>
        <a href="#" style={{ backgroundColor: "#D4AF37", color: "#030712", padding: "6px 12px", borderRadius: "9999px", fontSize: "12px", fontWeight: "600", textDecoration: "none" }}>Access Hub</a>
      </nav>

      {/* Main Student Works Content */}
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "80px 40px",
        width: "100%",
        flexGrow: 1
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px", gap: "30px" }}>
          <div>
            <h2 style={{ color: "#D4AF37", textTransform: "uppercase", fontSize: "14px", letterSpacing: "2px", marginBottom: "10px", fontWeight: "600" }}>
              Evidence of Growth
            </h2>
            <h1 style={{ fontSize: "48px", fontWeight: "700", letterSpacing: "-1px", lineHeight: "1.1" }}>
              Student Works
            </h1>
          </div>
          <div ref={mountRef} style={{ width: "220px", height: "220px", flexShrink: 0 }}></div>
        </div>

        <div style={{
          backgroundColor: "rgba(17, 24, 39, 0.6)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          borderRadius: "20px",
          padding: "50px",
          color: "#d1d5db",
          fontSize: "18px",
          lineHeight: "1.8",
          display: "flex",
          flexDirection: "column",
          gap: "25px"
        }}>
          <p>
            Every project tells a story. Not simply of what a student has learned, but of who they have become through the process of creating.
          </p>

          <p style={{ color: "#ffffff", fontWeight: "600", borderLeft: "4px solid #D4AF37", paddingLeft: "15px" }}>
            At Yang Karg, we believe that meaningful education should produce meaningful work. Every composition, arrangement, performance, and portfolio reflects months of curiosity, discipline, experimentation, and refinement.
          </p>

          <p>
            <strong style={{ color: "#D4AF37" }}>Student Works</strong> is where learning becomes visible. It is a collection of original ideas, creative solutions, and personal expression developed throughout each student's journey. Rather than measuring success by grades alone, we celebrate the ability to think independently, solve creative problems, and produce work with purpose.
          </p>

          <h3 style={{ color: "#D4AF37", fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
            Within this collection, you will discover a wide range of creative outcomes:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "10px 0" }}>
            {categories.map((c, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(3, 7, 18, 0.4)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "#D4AF37", fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{c.title}</h4>
                <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: "1.6" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ color: "#D4AF37", fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
            Case Studies
          </h3>
          <p>
            Behind every finished project is a learning process. These case studies document how students approached challenges, developed ideas, refined their work, and arrived at meaningful creative outcomes.
          </p>

          <div style={{ background: "rgba(212, 175, 55, 0.05)", padding: "25px", borderRadius: "12px", border: "1px solid rgba(212, 175, 55, 0.2)", marginTop: "15px" }}>
            <p style={{ color: "#ffffff", fontWeight: "600", marginBottom: "15px" }}>Every project represents more than technical progress:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "#d1d5db" }}>
              <li>It represents courage to create.</li>
              <li>Discipline to improve.</li>
              <li>Curiosity to explore.</li>
              <li>And the confidence to share original work with the world.</li>
            </ul>
          </div>

          <p style={{ fontStyle: "italic", color: "#9ca3af", marginTop: "10px" }}>
            Student Works is not a gallery of perfect performances. It is evidence of continuous growth.
          </p>

          <p style={{ color: "#D4AF37", fontWeight: "700", fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
            Because at Yang Karg, the ultimate achievement is not simply learning music.<br/>
            It is becoming a creator whose work carries originality, purpose, and lasting value.
          </p>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="/explore" style={{ color: "#D4AF37", textDecoration: "none", fontSize: "15px", fontWeight: "600" }}>
            ← Back to Explore
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "30px 60px", borderTop: "1px solid #1f2937", textAlign: "center", color: "#6b7280", fontSize: "12px" }}>
        Copyright © 2026 Solo Genius Musical School. All rights reserved.
      </footer>
    </div>
  );
}