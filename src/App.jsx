import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Branding from './pages/branding'
import DigitalMarketing from './pages/marketing'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Development from './pages/develoment'
import './App.css' // Assuming CSS is here

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/digital-marketing" element={<DigitalMarketing/>} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
