import React from 'react'
import DigitalMarketingLanding from './DigitalMarketingLanding'
import DigitalMarketingServices from './DigitalMarketingServices'
import SEOSection from './SEOSection'
import SocialMediaSection from './SocialMediaSection'
import EmailMarketingSection from './EmailMarketingSection'
import DigitalAdsSection from './DigitalAdsSection'
import './DigitalMarketing.css'

const DigitalMarketingSection = () => (
  <div>
    <DigitalMarketingLanding />
    <DigitalMarketingServices />
    <SEOSection />
    <SocialMediaSection />
    <EmailMarketingSection />
    <DigitalAdsSection />
  </div>
)

export default DigitalMarketingSection
