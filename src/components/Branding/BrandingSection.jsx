import React, { useState } from 'react'
import BrandingLanding from './BrandingLanding'
import BrandingServices from './BrandingServices'
import ServiceWorkRenderer from './ServiceWorkRenderer'
import './BrandingSection.css'

const BrandingSection = () => {
  const [selectedService, setSelectedService] = useState('Logo Design')

  return (
    <div className="branding-section">
      <BrandingLanding />
      <BrandingServices selectedService={selectedService} onChange={setSelectedService} />
      <ServiceWorkRenderer selectedService={selectedService} />
    </div>
  )
}

export default BrandingSection
