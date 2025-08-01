import React, { useState } from 'react'
import BrandingLanding from "./BrandingLanding"
import LogoDesignWork from './LogoDesignWork'
import HeroWithVideo from '../common/Contactsection/Contactsection'

const BrandingSection = () => {
  return (
    <div>
      <BrandingLanding />
      <LogoDesignWork />
      <HeroWithVideo />
    </div>
  )
}

export default BrandingSection
