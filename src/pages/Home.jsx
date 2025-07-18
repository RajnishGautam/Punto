import VideoSection from '../components/Home/Video/Video'
// import Footer from '../components/common/Footer/Footer'
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
      {/*Contact section with video */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
