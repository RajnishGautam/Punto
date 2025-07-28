import VideoSection from '../components/Home/Video/Video'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import WhyUs3DCards from '../components/Home/Whyus/Whyus'
import PartnersMarquee from '../components/Home/PartnersMarquee/PartnersMarquee'
import OurServices from '../components/Home/Ourservices/Ourservices'
const Home = () => {
  return (
    <div>
      <VideoSection />
      <WhyUs3DCards />
      <PartnersMarquee />
      <OurServices />
      <HeroWithVideo />
    </div>
  )
}

export default Home
