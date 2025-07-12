import Hero from '../components/Hero/Hero'
import VideoSection from '../components/Video/Video'
import Footer from '../components/Footer/Footer'
import HeroWithVideo from '../components/Contactsection/Contactsection'
import WhyUs3DCards from '../components/Whyus/Whyus'
import PartnersMarquee from '../components/PartnersMarquee/PartnersMarquee'
const Home = () => {
  return (
    <div>
      <VideoSection />
      <WhyUs3DCards />
      <PartnersMarquee />
      <HeroWithVideo />
      {/*Contact section with video */}
      <Footer />
    </div>
  )
}

export default Home
