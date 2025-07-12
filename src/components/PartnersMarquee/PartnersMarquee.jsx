import React, { useEffect, useState } from 'react'
import './PartnersMarquee.css'

const partners = [
  {
    id: 1,
    name: 'Lemon Tree Hotels',
    logo: '/images/lemontree.png',
    info: 'Hospitality Partner',
  },
  {
    id: 2,
    name: 'Philips India',
    logo: '/images/philips.png',
    info: 'Marketing',
  },
  { id: 3, name: 'Skoda', logo: '/images/skoda.png', info: 'Digital Partner' },
  {
    id: 4,
    name: 'Mahindra',
    logo: '/images/mahindra.png',
    info: 'Research & Development',
  },
  {
    id: 5,
    name: 'Mamaearth',
    logo: '/images/mamaearth.png',
    info: ' Website Branding',
  },
  { id: 6, name: 'Kbeauty', logo: '/images/k_beauty.png', info: 'Branding' },
  { id: 7, name: 'Nykaa', logo: '/images/nykaa.png', info: 'E-Commerce sales' },
  {
    id: 8,
    name: 'BlueStone',
    logo: '/images/bluestone.png',
    info: 'Affliate Partner',
  },
  {
    id: 9,
    name: 'Dot & Key',
    logo: '/images/dot&key skincare.png',
    info: 'Branding',
  },
  {
    id: 10,
    name: 'prana',
    logo: '/images/prana.png',
    info: 'Development & Marketing',
  },
  {
    id: 11,
    name: 'Demac Dubai',
    logo: '/images/damac.png',
    info: 'Channel Partner',
  },
  { id: 12, name: 'Sketchers', logo: '/images/skechers.png', info: 'Branding' },
  {
    id: 11,
    name: 'Playbox',
    logo: '/images/PlayBox.png',
    info: 'Digital Partner',
  },
  {
    id: 12,
    name: 'Bonn',
    logo: '/images/skechers.png',
    info: 'Marketing Partner',
  },
  { id: 13, name: 'Alp', logo: '/images/ALP.png', info: 'Digital Partner' },
]

const PartnersMarquee = () => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = (id) => {
    if (isMobile) {
      setActiveTooltip((prev) => (prev === id ? null : id))
    }
  }

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => {
              const uniqueId = `${partner.id}-${index}`
              return (
                <div
                  key={uniqueId}
                  className={`partner-item ${activeTooltip === uniqueId ? 'active' : ''}`}
                  onClick={() => handleClick(uniqueId)}
                >
                  <div className="partner-logo">
                    <img src={partner.logo} alt={partner.name} />
                    <div
                      className={`partner-tooltip ${activeTooltip === uniqueId ? 'visible' : ''}`}
                    >
                      {partner.info}
                    </div>
                  </div>
                  {/* <span className="partner-name">{partner.name}</span> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersMarquee
