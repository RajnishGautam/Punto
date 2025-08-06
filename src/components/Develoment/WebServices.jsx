import React, { useState, useEffect, useRef } from 'react'
import './WebServices.css'

const WebServices = () => {
  const [visibleWebdevCards, setVisibleWebdevCards] = useState(new Set())
  const [hoveredWebdevCard, setHoveredWebdevCard] = useState(null)
  const sectionRef = useRef(null)

  const services = [
    {
      id: 1,
      title: 'Custom WebSites',
      description:
        'Scalable, high-performance web applications built with cutting-edge technologies',
      features: [
        'React/Vue.js',
        'Node.js Backend',
        'Cloud Integration',
        'Real-time Features',
      ],
      icon: '🚀',
      color: '#00D4FF',
    },
    {
      id: 2,
      title: 'E-Commerce Solutions',
      description:
        'Complete online stores with seamless payment integration and inventory management',
      features: [
        'Payment Gateway',
        'Inventory System',
        'Admin Dashboard',
        'Mobile Optimized',
      ],
      icon: '🛒',
      color: '#00D4FF',
    },
    {
      id: 3,
      title: 'Progressive Web Apps',
      description:
        'Fast, reliable web apps that work offline and provide native app-like experience',
      features: [
        'Offline Capability',
        'Push Notifications',
        'App-like Feel',
        'Cross-Platform',
      ],
      icon: '📱',
      color: '#00D4FF',
    },
    {
      id: 4,
      title: 'Enterprise Solutions',
      description:
        'Large-scale web applications designed for enterprise-level performance and security',
      features: [
        'Microservices',
        'High Security',
        'Scalable Architecture',
        'API Integration',
      ],
      icon: '🏢',
      color: '#00D4FF',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const webdevCardId = parseInt(entry.target.dataset.webdevCardId)
            setVisibleWebdevCards((prev) => new Set([...prev, webdevCardId]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const webdevCards = sectionRef.current?.querySelectorAll(
      '.service-webdevcard'
    )
    webdevCards?.forEach((webdevCard) => observer.observe(webdevCard))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="web-services-section" ref={sectionRef}>
      <div className="matrix-bg">
        {[...Array(100)].map((_, i) => (
          <div key={i} className={`matrix-char char-${i % 10}`}>
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="title-line">Web Development Services</span>
          </h2>
          <p className="services-subtitle">
            Crafting digital experiences that push the boundaries of what's
            possible
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-webdevcard ${visibleWebdevCards.has(service.id) ? 'visible' : ''} ${hoveredWebdevCard === service.id ? 'hovered' : ''}`}
              data-webdev-card-id={service.id}
              onMouseEnter={() => setHoveredWebdevCard(service.id)}
              onMouseLeave={() => setHoveredWebdevCard(null)}
              style={{
                '--service-color': service.color,
                '--delay': `${index * 0.2}s`,
              }}
            >
              <div className="webdevcard-glow"></div>
              <div className="webdevcard-content">
                <div className="service-icon">
                  <span className="icon-emoji">{service.icon}</span>
                  <div className="icon-pulse"></div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>

              <div className="webdevcard-hover-overlay">
                <div className="overlay-content">
                  <h4>Ready to start?</h4>
                  <a
                    href="https://wa.me/917838649867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-cta"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-bottom-cta">
          <div className="cta-contentweb">
            <h3>Ready to Transform Your Web Presence?</h3>
            <p>Let's create something extraordinary together</p>
            <a
              href="https://wa.me/917838649867"
              target="_blank"
              rel="noopener noreferrer"
              className="main-cta-button"
            >
              <span>Start Your Web Project</span>
              <div className="button-particles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`particle-${i}`}></div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebServices
