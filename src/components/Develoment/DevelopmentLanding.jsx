// src/components/Development/DevelopmentLanding.jsx

import React, { useState, useEffect, useRef, Suspense } from 'react';
import './DevelopmentLanding.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// ===============================
// ✅ DeveloperModel Component
// ===============================
function DeveloperModel({ mouse, isHovered }) {
  const ref = useRef();

  // ✅ Load 3D GLB model
  const { scene } = useGLTF('/models/me sitting in office chair.glb');

  // ✅ Set your desired initial rotation here
  const initialRotation = useRef({ x: 0, y: 3.4, z: 0 });

  // ✅ Control model rotation on every frame
  useFrame(() => {
    if (!ref.current) return;

    if (isHovered.current) {
      // 👉 If hovered: rotate based on mouse movement
      ref.current.rotation.y = initialRotation.current.y + mouse.current.x * 0.5;
      ref.current.rotation.x = initialRotation.current.x + mouse.current.y * 0.2;
    } else {
      // 👉 If not hovered: smooth return to initial rotation
      ref.current.rotation.x += (initialRotation.current.x - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (initialRotation.current.y - ref.current.rotation.y) * 0.05;
      ref.current.rotation.z += (initialRotation.current.z - ref.current.rotation.z) * 0.05;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[1.7, 1.7, 2]}            // ✅ You can control model size here
      position={[0, -1.0, 0]}      // ✅ Control vertical positioning here
    />
  );
}

// ===============================
// ✅ Main DevelopmentLanding Component
// ===============================
const DevelopmentLanding = () => {
  const developmentHeroRef = useRef(null);      // Full section ref
  const rightSideRef = useRef(null);            // Right-side canvas area ref
  const mouseRef = useRef({ x: 0, y: 0 });       // Normalized mouse position
  const isHovered = useRef(false);              // Track if mouse is over 3D area
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // For spotlight

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = rightSideRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      // 👉 Check if mouse is inside right-side area
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHovered.current = true;

        // Normalize mouse coordinates from -1 to 1
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseRef.current = { x, y };
      } else {
        isHovered.current = false;
      }

      // Update spotlight position (only visual)
      const fullRect = developmentHeroRef.current?.getBoundingClientRect();
      if (fullRect) {
        setMousePosition({
          x: e.clientX - fullRect.left,
          y: e.clientY - fullRect.top,
        });
      }
    };

    // Add global mousemove listener
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="development-hero-section" ref={developmentHeroRef}>
      {/* === Background Particles === */}
      <div className="development-hero-bg-animation"></div>
      <div className="development-particles-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`development-particle particle-${i % 5}`} />
        ))}
      </div>

      <div className="development-hero-content">
        {/* === LEFT TEXT AREA === */}
        <div className="development-hero-left">
          <div className="development-hero-text loaded">
            <h1 className="development-hero-title">
              <span className="gradient-text">We Don't Just Build,</span><br />
              <span className="neon-text">We Create Digital Magic.</span>
            </h1>
            <div className="development-hero-subtitle">
              <span className="typewriter">
                Transforming Ideas into Extraordinary Digital Experience...
              </span>
            </div>
            <p className="development-hero-description">
              Step into the future of web development where creativity meets cutting-edge technology.
              We craft immersive digital solutions that don't just meet expectations—they redefine them.
            </p>
            <div className="development-hero-cta">
              <button className="neon-button primary">
                <span>Start Your Journey</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
        </div>

        {/* === RIGHT 3D MODEL CANVAS AREA === */}
        <div className="development-hero-right" ref={rightSideRef}>
          <div className="development-hero-3d-container">
            {/* ✨ Floating Spotlight Following Mouse */}
            <div
              className="development-floating-spotlight"
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
              }}
            ></div>

            {/* ✅ R3F CANVAS */}
            <div className="development-3d-canvas-wrapper">
              <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <DeveloperModel mouse={mouseRef} isHovered={isHovered} />
                  <Environment preset="city" />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
              </Canvas>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="development-geometric-shapes">
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              <div className="shape-3"></div>
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              <div className="shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentLanding;
