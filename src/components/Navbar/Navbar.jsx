// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logoLight from '../../assets/logolightmode.png'
import logoDark from '../../assets/logodarkmode.png'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  // Set initial dark mode state based on body class
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Mobile actions */}
        <div className="navbar-actions mobile-only">
          <button
            className="dark-toggle mobile-only"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div
            className="hamburger-icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="active" onClick={closeMenu}>
            HOME
          </a>
          <a href="/" onClick={closeMenu}>
            BRANDING
          </a>
          <a href="/" onClick={closeMenu}>
            DIGITAL-MARKETING
          </a>
          <a href="/" onClick={closeMenu}>
            DEVELOPMENT
          </a>
          {/* <a href="#" onClick={closeMenu}>CONTACT US</a> */}
        </nav>

        {/* CTA Button - Desktop Only */}
        <button
          className="navbar-cta desktop-only"
          onClick={() => window.open('https://wa.me/917838649867', '_blank')}
        >
          <span className="cta-content">WhatsApp Now</span>
        </button>
        {/* Desktop dark mode toggle */}
        <button
          className="dark-toggle desktop-only"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FaSun style={{ fontSize: '22px' }} />
          ) : (
            <FaMoon style={{ fontSize: '22px' }} />
          )}
        </button>
      </div>
    </header>
  )
}

export default Navbar
