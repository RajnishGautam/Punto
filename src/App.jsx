import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Branding from './pages/branding'
import DigitalMarketing from './pages/marketing'
import Development from './pages/development'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import ScrollToTop from './components/common/ScrollToTop' // ✅ Corrected name
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* ✅ Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/development" element={<Development />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
