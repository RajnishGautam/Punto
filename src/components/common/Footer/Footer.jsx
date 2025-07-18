// src/components/Footer/Footer.jsx
import React, { useState, useEffect } from 'react'
import './Footer.css'
import logoLight from '../../../assets/logolightmode.png'
import logoDark from '../../../assets/logodarkmode.png'

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.body.classList.contains('dark'))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    setDarkMode(document.body.classList.contains('dark'))

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Main Grid */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="brand-logo">
              <img
                src={darkMode ? logoDark : logoLight}
                alt="Footer Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="brand-description">Your digital partner</p>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="contactsection-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <p>Head Branch : 7dot It Solutions </p>
                <p>Lucknow, Chandigarh </p>
              </div>
              <p className="contact-item">Phone: +91 7838649867</p>
              <p className="contact-item">Phone: +52 6643669369</p>
              <p className="contact-item">Mail:hello@punto7x.com </p>
            </div>
          </div>

          {/* Career Section */}
          <div className="career-section">
            <h3 className="contactsection-title">Career</h3>
            <ul className="career-list">
              <li>Intern</li>
              <li>Part Time</li>
              <li>Full Time</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="services-section">
            <h3 className="contactsection-title">Services</h3>
            <ul className="services-list">
              <li>
                <a href="/Marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="/Branding">UI & UX Designing</a>
              </li>
              <li>
                <a href="/Branding">Branding & Identity</a>
              </li>
              <li>
                <a href="/Development">Mobile App Development</a>
              </li>
              {/* <li>
                <a href="/Development">Web Design & Development</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
