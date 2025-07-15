import React, { useState, useEffect } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa'
import videoLight from '../../assets/contactvideolight.mp4'
import videoDark from '../../assets/contactvideodark.mp4'
import './Contactsection.css'

const HeroWithVideo = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )

  const [showSuccess, setShowSuccess] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    // Remove spaces from phone, keep + and digits only
    const phoneRaw = formData.get('phone').trim()
    const phone = phoneRaw.replace(/\s+/g, '')
    const message = formData.get('message').trim()

    if (!name || !email || !phone) {
      alert('Please fill all required fields: Name, Email, and Phone Number.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }

    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number with optional country code.')
      return
    }

    try {
      const response = await fetch('https://contactformproxy.onrender.com/submit-form', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()
      if (result.result === 'success') {
        setShowSuccess(true)
        e.target.reset()
        setTimeout(() => {
          setShowSuccess(false)
        }, 3000)
      } else {
        alert('Submission failed, please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('Error occurred while submitting the form.')
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Social Icons */}
        <div className="hero-socials">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaWhatsapp /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <div className="social-scroll">
            <div className="scroll-dot" />
            <div className="scroll-line" />
            <div className="scroll-text">SCROLL</div>
          </div>
        </div>

        {/* Text Content */}
        <div className="hero-left">
          <div className="tagline">
            <div className="tagline-line"></div>
            <div className="tagline-dot"></div>
            <div className="tagline-text">Get In Touch</div>
          </div>

          <p className="hero-desc">
            We'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="+91 9999999999" required />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows="5"
            ></textarea>
            <button type="submit" className="submit-button">Get A Call</button>
          </form>

          {showSuccess && (
            <div className="popup-message">
              ✅ Thank you! We have received your message.
            </div>
          )}
        </div>

        {/* Video */}
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
