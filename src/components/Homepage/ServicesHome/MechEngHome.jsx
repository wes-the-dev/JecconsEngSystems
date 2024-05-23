import { Link } from "react-router-dom"

import mechEngImg from '../../../assets/images/mech_eng_home.png'
import mechEngIcon from '../../../assets/images/services_icons/mech_engicon.png'

const MechEngHome = () => {
  return (
    <div className="mech-eng-home flex gap-6 items-center justify-between mb-28 max-[1000px]:mb-10">
        
        <div className="mech-eng-home-img flex items-center w-[50%] max-[1000px]:hidden">
            <img src={mechEngImg} alt="an engineer working" />
        </div>

        <Link to = "/mech-eng-services" className='w-[50%] max-[1000px]:w-[100%]'>
            <div className="mech-eng-summ cursor-pointer flex flex-col gap-4 max-[1000px]:w-[100%] my-auto h-fit">
                <div className='service-home-number max-[1000px]:hidden'>
                    <span className='text-[180px] leading-10'>04</span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="mech-eng-summ-title flex gap-3 items-center max-[1000px]:justify-center max-[650px]:justify-start">
                        <img className='w-[44px] h-[44px]' src={mechEngIcon} alt="mech-engineering-icon" />
                        <span className='text-[32px] max-[1100px]:text-[28px] max-[650px]:text-[22px]'>Mechanical Engineering</span> 
                    </div>
                    <div className="mech-eng-home-img flex items-center max-[1000px]:justify-center w-[100%] min-[1001px]:hidden">
                        <img src={mechEngImg} alt="an engineer working" />
                    </div>
                    <span className='text-[19px] max-[650px]:text-[17px] min-[650px]:text-justify'>
                        JECCONS&apos;s Mechanical Engineering services are at the forefront of innovation, designing systems and components that drive industry and improve quality of life.
                    </span> 
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between max-[1000px]:justify-center max-[1000px]:gap-5">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
        </Link>
        
    </div>
  )
}

export default MechEngHome