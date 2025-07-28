import React, { useState } from 'react'
import DevelopmentLanding from './DevelopmentLanding'
import WebServices from './WebServices'
import AppServices from './AppServices'
import HeroWithVideo from '../common/Contactsection/Contactsection'
const DevelopmentSection = () => {

  return (
    <div>
      <DevelopmentLanding />
      <WebServices />
      <AppServices />
      <HeroWithVideo />
    </div>
  )
}

export default DevelopmentSection
