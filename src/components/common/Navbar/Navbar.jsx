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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Handle overlay click to close menu
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu()
    }
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src={darkMode ? logoDark : logoLight}
              alt="Logo"
              className="logo-img"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links desktop-only">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              HOME
            </Link>

            <Link
              to="/branding"
              className={location.pathname === '/branding' ? 'active' : ''}
            >
              BRANDING
            </Link>

            <Link
              to="/digital-marketing"
              className={
                location.pathname === '/digital-marketing' ? 'active' : ''
              }
            >
              DIGITAL-MARKETING
            </Link>

            <Link
              to="/development"
              className={location.pathname === '/development' ? 'active' : ''}
            >
              DEVELOPMENT
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions desktop-only">
            <button
              className="navbar-contact"
              onClick={() =>
                window.open('https://wa.me/917838649867', '_blank')
              }
            >
              <span className="contact-content">WhatsApp Now</span>
            </button>

            <MoonSunToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          </div>

          {/* Mobile Actions */}
          <div className="navbar-actions mobile-only">
            <MoonSunToggle darkMode={darkMode} onToggle={toggleDarkMode} />

            <div
              className="hamburger-icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <FaBars />
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      >
        <button
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        <div className="mobile-menu-content">
          <nav className="mobile-menu-links">
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
              className={
                location.pathname === '/digital-marketing' ? 'active' : ''
              }
            >
              DIGITAL-MARKETING
            </Link>

            <Link
              to="/development"
              onClick={closeMenu}
              className={location.pathname === '/development' ? 'active' : ''}
            >
              DEVELOPMENT
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
