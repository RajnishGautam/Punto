import React, { useState } from 'react'
import DevelopmentLanding from '../components/Develoment/DevelopmentLanding'
import DevelopmentServices from '../components/Develoment/DevelopmentServices'
import WebDevWork from '../components/Develoment/Works/WebDevWork'
import AppDevWork from '../components/Develoment/Works/AppDevWork'
import APIDevWork from '../components/Develoment/Works/APIDevWork'
import CMSDevWork from '../components/Develoment/Works/CMSDevWork'

const Development = () => {
  const [selectedService, setSelectedService] = useState('Web Development')

  const renderWorkComponent = () => {
    switch (selectedService) {
      case 'Web Development':
        return <WebDevWork />
      case 'App Development':
        return <AppDevWork />
      case 'API Development':
        return <APIDevWork />
      case 'CMS Development':
        return <CMSDevWork />
      default:
        return null
    }
  }

  return (
    <div>
      <DevelopmentLanding />
      <DevelopmentServices selected={selectedService} onSelect={setSelectedService} />
      {renderWorkComponent()}
    </div>
  )
}

export default Development
