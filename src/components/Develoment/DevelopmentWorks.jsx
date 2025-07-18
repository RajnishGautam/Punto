import React from 'react'
import WebDevWork from './works/WebDevWork'
import AppDevWork from './works/AppDevWork'
import EcommerceWork from './works/EcommerceWork'
import CustomSolutionsWork from './works/CustomSolutionsWork'

const DevelopmentWork = ({ selectedService }) => {
  switch (selectedService) {
    case 'Web Development':
      return <WebDevWork />
    case 'App Development':
      return <AppDevWork />
    case 'E-commerce Development':
      return <EcommerceWork />
    case 'Custom Solutions':
      return <CustomSolutionsWork />
    default:
      return null
  }
}

export default DevelopmentWork
