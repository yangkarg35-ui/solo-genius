'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function MethodPage() {
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

    const geometry = new THREE.IcosahedronGeometry(1.6, 0);
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

  const steps = [
    { num: "1", title: "Understand", desc: "Every lesson begins by exploring the principle behind the skill. Students learn not only what to do, but why it works." },
    { num: "2", title: "Practice", desc: "Knowledge becomes ability through deliberate practice. Each exercise is designed with a clear objective, measurable progress, and consistent repetition." },
    { num: "3", title: "Apply", desc: "Students immediately use what they have learned in practical musical situations. Theory becomes action, and technique becomes expression." },
    { num: "4", title: "Create", desc: "Creation is at the center of our method. Students compose, arrange, improvise, and solve creative challenges instead of relying only on repetition." },
    { num: "5", title: "Reflect", desc: "Growth requires awareness. Students review their work, identify strengths and weaknesses, receive feedback, and continuously refine their thinking." },
    { num: "6", title: "Share", desc: "Learning reaches its highest value when it creates impact. Students build portfolios, publish projects, collaborate with others, and develop the confidence to present their work professionally." }
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

      {/* Main Method Content */}
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
              Framework & Process
            </h2>
            <h1 style={{ fontSize: "48px", fontWeight: "700", letterSpacing: "-1px", lineHeight: "1.1" }}>
              Our Method
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
            At Yang Karg, we do not believe that learning begins with information. We believe it begins with understanding.
          </p>
          
          <div style={{ color: "#ffffff", fontWeight: "600", borderLeft: "4px solid #D4AF37", paddingLeft: "15px", margin: "10px 0" }}>
            Our method is built on a simple principle:<br/>
            <span style={{ color: "#D4AF37" }}>Learn deeply. Practice deliberately. Create authentically.</span>
          </div>

          <p>
            Rather than asking students to memorize songs or imitate performers, we guide them to understand the ideas behind music. Every concept is connected to a reason, every technique to a purpose, and every exercise to a real creative outcome.
          </p>

          <h3 style={{ color: "#D4AF37", fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
            Our learning process follows a continuous cycle of growth:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "10px 0" }}>
            {steps.map((s, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(3, 7, 18, 0.4)", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#D4AF37", fontWeight: "700", fontSize: "16px", marginRight: "10px" }}>{s.num}. {s.title}</span>
                <p style={{ color: "#9ca3af", fontSize: "16px", marginTop: "8px", lineHeight: "1.6" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontStyle: "italic", color: "#9ca3af", marginTop: "15px" }}>
            This cycle repeats throughout every stage of the learning journey, allowing each new skill to build upon the previous one.
          </p>

          <div style={{ background: "rgba(212, 175, 55, 0.05)", padding: "25px", borderRadius: "12px", border: "1px solid rgba(212, 175, 55, 0.2)", marginTop: "15px" }}>
            <p style={{ color: "#ffffff", fontWeight: "600", marginBottom: "15px" }}>Our method develops more than technical ability:</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "#d1d5db" }}>
              <li>It develops creative thinking.</li>
              <li>It develops problem-solving.</li>
              <li>It develops discipline.</li>
              <li>It develops originality.</li>
            </ul>
          </div>

          <p>
            Music is the environment where these qualities are practiced, but the transformation extends far beyond music itself.
          </p>

          <p style={{ color: "#D4AF37", fontWeight: "700", fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
            At Yang Karg, our goal is not simply to produce skilled musicians.<br/>
            Our goal is to develop creators who can think independently, adapt continuously, and build meaningful work throughout their lives.
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