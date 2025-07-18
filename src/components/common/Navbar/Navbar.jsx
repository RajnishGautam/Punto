import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import MoonSunToggle from './MoonSunToggle'
import logoLight from '../../../assets/logolightmode.png'
import logoDark from '../../../assets/logodarkmode.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains('dark')
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="logo-img"
          />
        </div>

        <div className="navbar-actions mobile-only">
          <MoonSunToggle
            darkMode={darkMode}
            onToggle={toggleDarkMode}
            className="mobile-only"
          />
          <div
            className="hamburger-icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            onClick={closeMenu}
            className={location.pathname === '/' ? 'active' : ''}
          >
            HOME
          </Link>

          <Link
            to="/branding"
            onClick={closeMenu}
            className={location.pathname === '/branding' ? 'active' : ''}
          >
            BRANDING
          </Link>

          <Link
            to="/digital-marketing"
            onClick={closeMenu}
            className={location.pathname === '/digital-marketing' ? 'active' : ''}
          >
            DIGITAL MARKETING
          </Link>

          <Link
            to="/development"
            onClick={closeMenu}
            className={location.pathname === '/development' ? 'active' : ''}
          >
            DEVELOPMENT
          </Link>
        </nav>

        <button
          className="navbar-cta desktop-only"
          onClick={() => window.open('https://wa.me/917838649867', '_blank')}
        >
          <span className="cta-content">WhatsApp Now</span>
        </button>

        <MoonSunToggle
          darkMode={darkMode}
          onToggle={toggleDarkMode}
          className="desktop-only"
        />
      </div>
    </header>
  )
}

export default Navbar
