import React from 'react'
import './DevelopmentServices.css'

const services = [
  { title: 'Web Development' },
  { title: 'App Development' },
  { title: 'API Development' },
  { title: 'CMS Development' }
]

const DevelopmentServices = ({ selected, onSelect }) => {
  return (
    <section className="development-services">
      <h2>Our Development Services</h2>
      <div className="dev-services-grid">
        {services.map((service) => (
          <button
            key={service.title}
            className={`dev-service-card ${selected === service.title ? 'active' : ''}`}
            onClick={() => onSelect(service.title)}
          >
            {service.title}
          </button>
        ))}
      </div>
    </section>
  )
}

export default DevelopmentServices
