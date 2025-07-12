import React, { useState, useEffect } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa'
import { Play } from 'lucide-react'
import videoLight from '../../assets/contactvideolight.mp4'
import videoDark from '../../assets/contactvideodark.mp4'
import './Contactsection.css' // Reuse existing styles

const HeroWithVideo = () => {
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
            <FaWhatsapp />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedin />
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
            <div className="tagline-text">Get In Touch</div>
          </div>

          <p className="hero-desc">
            We'd love to hear from you. Fill out the form and our team will get
            back to you shortly.
          </p>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              console.log('submit')
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <textarea
              name="message"
              placeholder="Your Message(Optional)"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Video in place of image */}
        <div className="hero-right">
          <video
            className="hero-video"
            src={darkMode ? videoDark : videoLight}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  )
}

export default HeroWithVideo
