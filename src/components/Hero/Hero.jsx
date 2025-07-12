import React, { useState, useEffect } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa'
import { Play } from 'lucide-react'
import heroLight from '../../assets/logoLightMode.png'
import heroDark from '../../assets/logoDarkMode.png'
import './Hero.css'

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.body.classList.contains('dark')
    setDarkMode(isDark)

    const observer = new MutationObserver(() => {
      const dark = document.body.classList.contains('dark')
      setDarkMode(dark)
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Social Icons & Scroll */}
        <div className="hero-socials">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaPinterestP />
          </a>
          <div className="social-scroll">
            <div className="scroll-dot" />
            <div className="scroll-line" />
            <div className="scroll-text">SCROLL</div>
          </div>
        </div>

        {/* Textual Content */}
        <div className="hero-left">
          <div className="tagline">
            <div className="tagline-line"></div>
            <div className="tagline-dot"></div>
            <div className="tagline-text">Innovative Ideas</div>
          </div>
          <h1 className="hero-heading">
            We Offer You <span className="red">A</span> <br />
            <span className="red">Digital</span> Platform
            <span className="red">.</span>
          </h1>
          <p className="hero-desc">
            Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor
            posuere. Nisl purus in mollis nunc sed id semper egestas quis ips.
          </p>
          <div className="hero-buttons">
            <div className="get-started">
              <div className="get-line"></div>
              <div className="get-dot"></div>
              <span>Get Started</span>
            </div>
            <div className="view-video">
              <div className="video-circle">
                <Play className="play-icon" />
              </div>
              <span>View Video</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hero-right">
          <img
            src={darkMode ? heroDark : heroLight}
            alt="Hero"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
