import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import ServicesMain from './pages/Services/ServicesMain'
import CivEng from './pages/Services/CivEng'
import SecureSafe from './pages/Services/SecureSafe'
import ElectEng from './pages/Services/ElectEng'
import EnvEng from './pages/Services/EnvEng'
import MechEng from './pages/Services/MechEng'
import NavMenu from "./components/Global/NavMenu";
import Footer from "./components/Global/Footer";

function App() {
  return (
    <Router>
        <NavMenu />
        <Routes>
            <Route path='/' element ={<Homepage />} />
            <Route path='/about-us' element ={<AboutUs />} />
            <Route path='/services' element ={<ServicesMain />} />
            <Route path='/civil-eng-services' element ={<CivEng />} />
            <Route path='/secure-safe-services' element ={<SecureSafe />} />
            <Route path='/elect-eng-services' element ={<ElectEng />} />
            <Route path='/env-eng-services' element ={<EnvEng />} />
            <Route path='/mech-eng-services' element ={<MechEng />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App