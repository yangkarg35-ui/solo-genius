'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function AboutContent() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.OctahedronGeometry(1.8, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.05,
      roughness: 0.02,
      transmission: 0.98,
      ior: 2.417,
      thickness: 1.5,
      specularIntensity: 1.0,
      envMapIntensity: 2.0,
    });

    const diamond = new THREE.Mesh(geometry, material);
    scene.add(diamond);

    const frontLight = new THREE.DirectionalLight(0xffffff, 3);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 5, 30);
    blueLight.position.set(-5, 5, -5);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xD4AF37, 5, 30);
    goldLight.position.set(5, -5, -5);
    scene.add(goldLight);

    camera.position.z = 4.5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.8;

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
      position: "relative",
      overflowX: "hidden",
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
          <a href="/about" style={{ color: "#ffffff", textDecoration: "none" }}>Overview</a>
          <a href="/explore" style={{ color: "#d1d5db", textDecoration: "none" }}>Explore</a>
        </div>
        <a href="#" style={{ backgroundColor: "#D4AF37", color: "#030712", padding: "6px 12px", borderRadius: "9999px", fontSize: "12px", fontWeight: "600", textDecoration: "none" }}>Try it now</a>
      </nav>

      {/* Main Content */}
      <main style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        padding: "80px 60px",
        gap: "60px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <h2 style={{ fontSize: "18px", color: "#D4AF37", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600", marginBottom: "10px" }}>
            About Solo Genius Musical School
          </h2>
          <h1 style={{ fontSize: "64px", fontWeight: "700", letterSpacing: "-1.5px", lineHeight: "1.1", marginBottom: "30px", color: "#ffffff" }}>
            The sound of<br/>the future.
          </h1>
          <p style={{ color: "#d1d5db", fontSize: "21px", lineHeight: "1.6", marginBottom: "40px", maxWidth: "600px" }}>
            Solo Genius Musical School is a private, exclusive ecosystem designed to elevate your musical taste, technical mastery, and structural thinking.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a 
              href="/explore"
              style={{
                backgroundColor: "#D4AF37",
                color: "#030712",
                fontWeight: "600",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontSize: "17px",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
              }}
            >
              Explore Features
            </a>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div ref={mountRef} style={{ width: "400px", height: "400px" }}></div>
        </div>
      </main>

      <footer style={{ padding: "40px 60px", borderTop: "1px solid #1f2937", textAlign: "center", color: "#9ca3af", fontSize: "12px" }}>
        Copyright © 2026 Solo Genius Musical School. All rights reserved.
      </footer>
    </div>
  );
}