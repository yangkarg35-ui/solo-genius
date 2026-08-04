'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function CurriculumPage() {
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

    const geometry = new THREE.DodecahedronGeometry(1.6, 0);
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

  const domains = [
    { title: "Foundation", desc: "Students establish the essential principles of music, learning, and disciplined practice. This stage builds the habits required for long-term growth." },
    { title: "Musical Language", desc: "Music is approached as a language rather than a collection of isolated techniques. Students develop fluency in rhythm, harmony, melody, ear training, and music theory, allowing them to understand why music works—not simply how to perform it." },
    { title: "Creative Development", desc: "Knowledge becomes creativity through experimentation. Students learn composition, improvisation, arrangement, creative thinking, and problem-solving while developing their own artistic voice." },
    { title: "Professional Practice", desc: "Creative ability gains value when it can be applied professionally. Students build portfolios, prepare for freelance opportunities, communicate with clients, manage creative projects, and understand the fundamentals of working as independent professionals." },
    { title: "Personal Growth", desc: "Great creators continue developing beyond technical ability. Throughout the curriculum, students cultivate discipline, consistency, critical thinking, collaboration, and lifelong learning habits that extend beyond music." },
    { title: "Capstone Projects", desc: "Every stage of learning culminates in meaningful work. Students complete original projects that demonstrate not only what they know, but how they think, create, and solve problems. These projects become part of a professional portfolio that reflects their unique creative identity." }
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

      {/* Main Curriculum Content */}
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
              Architectural Systems
            </h2>
            <h1 style={{ fontSize: "48px", fontWeight: "700", letterSpacing: "-1px", lineHeight: "1.1" }}>
              Curriculum
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
            At Yang Karg, a curriculum is more than a sequence of lessons. It is a carefully designed system that transforms knowledge into understanding, understanding into skill, and skill into meaningful creative work.
          </p>

          <p style={{ color: "#ffffff", fontWeight: "600", borderLeft: "4px solid #D4AF37", paddingLeft: "15px" }}>
            Our curriculum is built to develop not only musicians, but independent creators who can continue learning long after the program is complete.
          </p>

          <p>
            Rather than separating theory from practice, every module connects knowledge with real-world application. Students are encouraged to understand concepts, experiment with ideas, create original work, and reflect on their progress throughout the learning process.
          </p>

          <h3 style={{ color: "#D4AF37", fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
            The curriculum is organized into six interconnected learning domains:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "10px 0" }}>
            {domains.map((d, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(3, 7, 18, 0.4)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h4 style={{ color: "#D4AF37", fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>{idx + 1}. {d.title}</h4>
                <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: "1.6" }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontStyle: "italic", color: "#9ca3af", marginTop: "15px" }}>
            Our curriculum is designed as a continuous learning journey rather than a fixed destination. Each module builds upon the previous one, allowing students to progress from understanding to application, from application to creation, and from creation to professional contribution.
          </p>

          <div style={{ background: "rgba(212, 175, 55, 0.05)", padding: "25px", borderRadius: "12px", border: "1px solid rgba(212, 175, 55, 0.2)", marginTop: "15px", textAlign: "center" }}>
            <p style={{ color: "#d1d5db", marginBottom: "10px" }}>Because true education is not measured by the number of lessons completed.</p>
            <p style={{ color: "#ffffff", fontWeight: "700", fontSize: "20px" }}>It is measured by the person a learner becomes.</p>
          </div>

          <p style={{ color: "#D4AF37", fontWeight: "700", fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
            At Yang Karg, the curriculum exists to support that transformation.
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