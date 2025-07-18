import React from 'react'
import './BrandingServices.css'

const services = ['Logo Design', 'Brand Identity', 'Packaging Design', 'Rebranding']

const BrandingServices = ({ selectedService, onChange }) => (
  <section className="branding-services">
    <h2>Our Branding Services</h2>
    <div className="branding-services-grid">
      {services.map((service) => (
        <button
          key={service}
          className={`branding-service-btn ${selectedService === service ? 'active' : ''}`}
          onClick={() => onChange(service)}
        >
          {service}
        </button>
      ))}
    </div>
  </section>
)

export default BrandingServices
