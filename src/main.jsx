import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import NavMenu from "./components/Global/NavMenu";
import Footer from "./components/Global/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Routes>
        <Route path='/' element ={<Homepage />} />
        <Route path='/about-us' element ={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>,
)
