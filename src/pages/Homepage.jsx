import Hero from '../components/Homepage/Hero'
import PastWorksHm from '../components/Homepage/PastWorksHm'
import WhatWeDo from '../components/Homepage/WhatWeDo'
import ServicesHome from '../components/Homepage/ServicesHome'
import CompanyBrief from '../components/Homepage/CompanyBrief'
import SafetyPolicy from '../components/Homepage/SafetyPolicy'
import Footer from '../components/Global/Footer'

// import projectTile from '../assets/images/project_title_tiles/title_tile1.png'


function Homepage () {
  return (
    <div>
      
      <Hero />
  
      <PastWorksHm />
    
      <WhatWeDo />

      <ServicesHome />

      {/* <CompanyBrief />

      <SafetyPolicy />
      
      <Footer /> */}
    </div>
  )
}

export default Homepage