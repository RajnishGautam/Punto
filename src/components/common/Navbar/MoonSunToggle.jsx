import React from 'react'
import './MoonSunToggle.css'

const MoonSunToggle = ({ darkMode, onToggle, className = '' }) => {
  return (
    <div
      className={`moon-sun-toggle ${darkMode ? 'day' : ''} ${className}`}
      onClick={onToggle}
      aria-label="Toggle Dark Mode"
    >
      <div className={`celestial-body ${darkMode ? 'sun' : 'moon'}`}></div>
    </div>
  )
}

export default MoonSunToggle