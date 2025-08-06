import React, { useState, useEffect } from 'react'
import './BrandingLanding.css'
import videoLight from '../../assets/videolightmode.mp4' // ⬅️ Add to your assets
import videoDark from '../../assets/videodarkmode.mp4' // ⬅️ Add to your assets
import metaLogo from '../../assets/meta.png' // ⬅️ Add to your assets
import googleLogo from '../../assets/google.png' // ⬅️ Add to your assets

const VideoSection = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="video-section">
      <div className="video-container">
        <video
          className="background-video"
          src={darkMode ? videoDark : videoLight}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Partners Logo Overlay */}
        <div className="partners-overlay">
          <div className="partners-logos">
            <img src={metaLogo} alt="Meta" />
            <img src={googleLogo} alt="Google" />
          </div>
          <p className="mainpartners-title">Our Partners</p>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
