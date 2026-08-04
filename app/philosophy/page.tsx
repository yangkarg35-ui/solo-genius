'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function PhilosophyPage() {
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

      {/* Main Philosophy Content */}
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
              Core Principles
            </h2>
            <h1 style={{ fontSize: "48px", fontWeight: "700", letterSpacing: "-1px", lineHeight: "1.1" }}>
              Our Philosophy
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
            At Yang Karg, we believe that music is not the destination—it is the medium through which people discover who they can become.
          </p>
          <p>
            Learning an instrument is valuable, but mastering an instrument alone is not our goal. Our purpose is to help individuals develop the habits, thinking, discipline, creativity, and confidence that remain long after the final note has been played.
          </p>
          <p style={{ color: "#ffffff", fontWeight: "600", borderLeft: "4px solid #D4AF37", paddingLeft: "15px" }}>
            We believe that true education changes identity before it changes performance.
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "#9ca3af" }}>
            <li>Technique can be taught.</li>
            <li>Knowledge can be memorized.</li>
            <li>But originality must be cultivated.</li>
          </ul>
          <p>
            Every lesson, every exercise, and every creative challenge is designed to develop independent thinkers rather than imitation performers. We encourage students to ask questions, experiment without fear, and create work that reflects their own perspective instead of copying others.
          </p>
          <p>
            We also believe that excellence is built through consistency rather than intensity. Small improvements, repeated over time, create extraordinary results. Mastery is not an event; it is a lifelong process of refinement.
          </p>
          <p>
            Technology is embraced as a tool, never as a replacement for human creativity. We use modern systems, research, and artificial intelligence to accelerate learning, while keeping authentic artistic expression at the center of everything we do.
          </p>
          <p>
            Our standards are intentionally high. We value depth over speed, quality over quantity, and long-term growth over short-term recognition. Success is not measured only by technical ability, but by the ability to think independently, solve creative problems, and contribute meaningful work to the world.
          </p>
          <p style={{ color: "#D4AF37", fontWeight: "700", fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
            Yang Karg exists to build creators—not followers.
          </p>
          <p>
            Our mission is to help every student leave with more than musical skills. We want them to leave with a stronger identity, a clearer creative voice, and the confidence to build a meaningful career and life through their craft.
          </p>
          <p style={{ fontStyle: "italic", color: "#9ca3af", textAlign: "center", marginTop: "10px" }}>
            This is the philosophy that guides every decision we make.
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