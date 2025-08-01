import VideoSection from '../components/Home/Video/Video'
import HeroWithVideo from '../components/common/Contactsection/Contactsection'
import WhyUs3DCards from '../components/Home/Whyus/Whyus'
import PartnersMarquee from '../components/Home/PartnersMarquee/PartnersMarquee'
import OurServices from '../components/Home/Ourservices/Ourservices'
import TeamSection from '../components/Home/TeamSection/TeamSection'
const Home = () => {
  return (
    <div>
      <VideoSection />
      <WhyUs3DCards />
      <PartnersMarquee />
      <OurServices />
      <TeamSection />
      <HeroWithVideo />
    </div>
  )
}

export default Home
