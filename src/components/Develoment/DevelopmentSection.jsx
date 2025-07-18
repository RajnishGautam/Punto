import React, { useState } from 'react'
import DevelopmentLanding from './DevelopmentLanding'
import DevelopmentServices from './DevelopmentServices'
import DevelopmentWork from './DevelopmentWork'
import './DevelopmentSection.css'

const DevelopmentSection = () => {
  const [selectedService, setSelectedService] = useState('Web Development')

  return (
    <div>
      <DevelopmentLanding />
      <DevelopmentServices selectedService={selectedService} setSelectedService={setSelectedService} />
      <DevelopmentWork selectedService={selectedService} />
    </div>
  )
}

export default DevelopmentSection
