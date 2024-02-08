import Hero from '../components/Homepage/Hero'
import PastWorksHm from '../components/Homepage/PastWorksHm'
import WhatWeDo from '../components/Homepage/WhatWeDo'
import SafetyPolicy from '../components/Homepage/SafetyPolicy'
import { Footer } from '../components/Global/Footer'
// import projectTile from '../assets/images/project_title_tiles/title_tile1.png'


export const Homepage = () => {
  return (
    <div>
      
      <Hero />
  
      <PastWorksHm />

      
      <WhatWeDo />

      {/* <section className="projSummHomePg pl-[100px] pt-20 pb-[45px] bg-[#29166F] text-white font-['Cabinet]">
          <h2 className=' text-[56px] font-bold mb-12'>PROJECTS</h2>
          <div className='projTiles w-[100%] flex gap-7 overflow-hidden'>
              <div className='w-[30%]'>
                <img src={projectTile} alt="someone-working" />
                <p className='text-[18px] font-bold leading-6 mt-5'>Nigerian Tincan Ports</p>
                <p className='text-[28px] font-bold leading-[37px]'>Fire/ Burglary Detection Systems and Thunder Arrestors</p>
                <p className='text-[18px] italic leading-6'>Lagos</p>
              </div>

              <div className='w-[30%]'>
                <img src={projectTile} alt="someone-working" />
                <p className='text-[18px] font-bold leading-6 mt-5'>Nigerian Tincan Ports</p>
                <p className='text-[28px] font-bold leading-[37px]'>Fire/ Burglary Detection Systems and Thunder Arrestors</p>
                <p className='text-[18px] italic leading-6'>Lagos</p>
              </div>

              <div className='w-[30%]'>
                <img src={projectTile} alt="someone-working" />
                <p className='text-[18px] font-bold leading-6 mt-5'>Nigerian Tincan Ports</p>
                <p className='text-[28px] font-bold leading-[37px]'>Fire/ Burglary Detection Systems and Thunder Arrestors</p>
                <p className='text-[18px] italic leading-6'>Lagos</p>
              </div>

              <div className='w-[30%]'>
                <img src={projectTile} alt="someone-working" />
                <p className='text-[18px] font-bold leading-6 mt-5'>Nigerian Tincan Ports</p>
                <p className='text-[28px] font-bold leading-[37px]'>Fire/ Burglary Detection Systems and Thunder Arrestors</p>
                <p className='text-[18px] italic leading-6'>Lagos</p>
              </div>

              <div className='w-[30%]'>
                <img src={projectTile} alt="someone-working" />
                <p className='text-[18px] font-bold leading-6 mt-5'>Nigerian Tincan Ports</p>
                <p className='text-[28px] font-bold leading-[37px]'>Fire/ Burglary Detection Systems and Thunder Arrestors</p>
                <p className='text-[18px] italic leading-6'>Lagos</p>
              </div>
          </div>

      </section> */}

      <SafetyPolicy />
      
      <Footer />
    </div>
  )
}
