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
                <p>Head Branch: 7dot It Solutions</p>
                <p>Lucknow, Chandigarh</p>
              </div>
              <p className="contact-item">
                Phone: <a href="tel:+917838649867">+91 7838649867</a>
              </p>
              <p className="contact-item">
                Phone: <a href="tel:+526643669369">+52 6643669369</a>
              </p>
              <p className="contact-item">
                Mail: <a href="mailto:hello@punto7x.com">hello@punto7x.com</a>
              </p>
            </div>
          </div>

          {/* Career Section */}
          <div className="career-section">
            <h3 className="contactsection-title">Career</h3>
            <ul className="career-list">
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8yzZGlyXUPrcmm4rrJd-RtnQ4K8WXnpfkVT6XFL7duDtYNg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internship
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8yzZGlyXUPrcmm4rrJd-RtnQ4K8WXnpfkVT6XFL7duDtYNg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8yzZGlyXUPrcmm4rrJd-RtnQ4K8WXnpfkVT6XFL7duDtYNg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Time
                </a>
              </li>
            </ul>
          </div>
           
          {/* Blog Page Section*/}
          <div className="blogs-section">
            <h3 className="contactsection-title">Blog</h3>
            <ul className="blogs-list">
              <li>
                <a href="/blog/1">
                  Read Our Blogs
                </a>
              </li>
            </ul>
          </div>
          {/* Services Section */}
          <div className="services-section">
            <h3 className="contactsection-title">Services</h3>
            <ul className="services-list">
              <li>
                <a href="/digital-marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="/branding">UI & UX Designing</a>
              </li>
              <li>
                <a href="/branding">Branding & Identity</a>
              </li>
              <li>
                <a href="/development">Website Development</a>
              </li>
               <li>
                <a href="/development">Mobile App Development</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
