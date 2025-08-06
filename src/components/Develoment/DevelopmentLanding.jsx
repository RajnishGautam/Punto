import React, { useState, useEffect, useRef, Suspense } from 'react'

import './DevelopmentLanding.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'

// ===============================
// ✅ DeveloperModel Component
// ===============================
function DeveloperModel({ mouse, isHovered, scale }) {
  const ref = useRef()
  const { scene } = useGLTF('/models/mesittinginofficechair.glb')
  const initialRotation = useRef({ x: 0, y: 3.4, z: 0 })

  useFrame(() => {
    if (!ref.current) return
    if (isHovered.current) {
      ref.current.rotation.y = initialRotation.current.y + mouse.current.x * 0.5
      ref.current.rotation.x = initialRotation.current.x + mouse.current.y * 0.2
    } else {
      ref.current.rotation.x +=
        (initialRotation.current.x - ref.current.rotation.x) * 0.05
      ref.current.rotation.y +=
        (initialRotation.current.y - ref.current.rotation.y) * 0.05
      ref.current.rotation.z +=
        (initialRotation.current.z - ref.current.rotation.z) * 0.05
    }
  })

  return (
    <primitive ref={ref} object={scene} scale={scale} position={[0, -1.0, 0]} />
  )
}

// ===============================
// ✅ Main DevelopmentLanding Component
// ===============================
const DevelopmentLanding = () => {
  const developmentHeroRef = useRef(null)
  const rightSideRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const isHovered = useRef(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // ✅ Responsive model scale
  const [modelScale, setModelScale] = useState([1.7, 1.7, 2])

  useEffect(() => {
    const updateScale = () => {
      const isMobile = window.innerWidth < 768
      setModelScale(isMobile ? [2, 2, 2] : [1.7, 1.7, 2])
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = rightSideRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHovered.current = true
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
        mouseRef.current = { x, y }
      } else {
        isHovered.current = false
      }

      const fullRect = developmentHeroRef.current?.getBoundingClientRect()
      if (fullRect) {
        setMousePosition({
          x: e.clientX - fullRect.left,
          y: e.clientY - fullRect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="development-hero-section" ref={developmentHeroRef}>
      <div className="development-particles-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`development-particle particle-${i % 5}`} />
        ))}
      </div>

      <div className="development-hero-content loaded">
        {/* Left Side Text */}
        <div className="development-text-content">
          <h1 className="development-hero-title">
            <span className="gradient-text">We Don't Just Build,</span>
            <br />
            <span className="neon-text">We Create Digital Magic.</span>
          </h1>
          <div className="development-hero-subtitle">
            <span className="typewriter">
              Transforming Ideas into Extraordinary Digital Experience
            </span>
          </div>
          <div className="development-hero-cta">
            <a
              href="https://wa.me/917838649867"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button primary"
            >
              <span>Start Your Journey</span>
              <div className="button-glow"></div>
            </a>
          </div>
        </div>

        {/* Right Side / 3D Model */}
        <div className="development-hero-right" ref={rightSideRef}>
          <div className="development-hero-3d-container">
            <div
              className="development-floating-spotlight"
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              }}
            ></div>
            <div className="development-3d-canvas-wrapper">
              <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <DeveloperModel
                    mouse={mouseRef}
                    isHovered={isHovered}
                    scale={modelScale}
                  />
                  {/* ✅ Custom HDR environment added below */}
                  <Environment
                    files="/hdr/potsdamer_platz_1k.hdr"
                    background={false}
                  />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentLanding
