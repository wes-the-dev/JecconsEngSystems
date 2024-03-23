import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element ={<Homepage />} />
        <Route path='/about-us' element ={<AboutUs />} />
      </Routes>
    </Router>
    {/* <Homepage /> */}
  </React.StrictMode>,
)
