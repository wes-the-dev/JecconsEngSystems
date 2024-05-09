import './index.css'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import ServicesMain from './pages/Services/ServicesMain'
import CivEng from './pages/Services/CivEng'
import SecureSafe from './pages/Services/SecureSafe'
import ElectEng from './pages/Services/ElectEng'
import EnvEng from './pages/Services/EnvEng'
import MechEng from './pages/Services/MechEng'
import Portfolio from './pages/Portfolio'
import NavMenu from "./components/Global/NavMenu";
import Footer from "./components/Global/Footer";

function App() {
  
  const [isOpen, setOpen] = useState(false);
  const handleMobileMenu = () => setOpen(isOpen => !isOpen)

  return (
    <Router>

        <div className='min-[851px]:hidden absolute mt-4 h-[150px] z-40 ml-[50px] max-[770px]:ml-5'>
          <Hamburger onClick = {() => handleMobileMenu()} toggled={isOpen} toggle={setOpen} />
        </div>
        <NavMenu handleMobileMenu={isOpen}  />
        <Routes>
            <Route path='/' element ={<Homepage />} />
            <Route path='/about-us' element ={<AboutUs />} />
            <Route path='/services' element ={<ServicesMain />} />
            <Route path='/civil-eng-services' element ={<CivEng />} />
            <Route path='/secure-safe-services' element ={<SecureSafe />} />
            <Route path='/elect-eng-services' element ={<ElectEng />} />
            <Route path='/env-eng-services' element ={<EnvEng />} />
            <Route path='/mech-eng-services' element ={<MechEng />} />
            <Route path='/our-portfolio' element ={<Portfolio />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App