import React from 'react'
import LogoDesignWork from './works/LogoDesignWork'
import BrandIdentityWork from './works/BrandIdentityWork'
import PackagingDesignWork from './works/PackagingDesignWork'
import RebrandingWork from './works/RebrandingWork'
import './ServiceWorkRenderer.css'

const ServiceWorkRenderer = ({ selectedService }) => {
  const renderWork = () => {
    switch (selectedService) {
      case 'Logo Design':
        return <LogoDesignWork />
      case 'Brand Identity':
        return <BrandIdentityWork />
      case 'Packaging Design':
        return <PackagingDesignWork />
      case 'Rebranding':
        return <RebrandingWork />
      default:
        return null
    }
  }

  return (
    <section className="branding-work">
      <h2>{selectedService} - Our Work</h2>
      {renderWork()}
    </section>
  )
}

export default ServiceWorkRenderer
