import civEngImg from '../../assets/images/civ_eng_home.png'
import civEngIcon from '../../assets/images/services_icons/civ_engicon.png'

import electEngImg from '../../assets/images/elect_eng_home.png'
import electEngIcon from '../../assets/images/services_icons/electicon.png'

import environEngImg from '../../assets/images/env_eng_home.png'
import environEngIcon from '../../assets/images/services_icons/env_engicon.png'

import mechEngImg from '../../assets/images/mech_eng_home.png'
import mechEngIcon from '../../assets/images/services_icons/mech_engicon.png'

import oilGasImg from '../../assets/images/oil_gas_home.png'
import oilGasIcon from '../../assets/images/services_icons/oil_gasicon.png'

import safeSecureImg from '../../assets/images/safe_secure_home.png'
import safeSecureIcon from '../../assets/images/services_icons/safe_secureicon.png'

const ServicesHome = () => {
  return (
    <div className='services-home-page pb-16 pt-24 max-[1000px]:pt-10 px-[60px] max-[770px]:px-5 font-[PP-Telegraf]'>
        

        <div className="civil-eng-home flex justify-between gap-10 mb-28">

            <div className="civ-eng-summ cursor-pointer flex flex-col gap-4 w-[45%] max-[1000px]:items-center max-[1000px]:w-[100%] h-fit my-auto">
                <div className="service-home-number max-[1000px]:hidden">
                    <span className='text-[180px] leading-10'>01</span>
                </div>

                <div className="flex flex-col gap-4 max-[1000px]:items-center">
                    <div className="civ-eng-summ-title flex gap-3">
                        <img src={civEngIcon} alt="civil-engineering-icon" />
                        <span className='text-[32px]'>Civil Engineering</span> 
                    </div>
                    <div className="civ-eng-home-img w-[55%] max-[1000px]:w-[100%] max-[1000px]:flex max-[1000px]:justify-center min-[1001px]:hidden justify-end">
                        <img className='' src={civEngImg} alt="engineers working on site" />
                    </div>
                    <span className=' text-[19px] max-[1000px]:text-justify'>
                        Our Civil Engineering team at JECCONS, is dedicated to designing and constructing the infrastructure that shapes our world. From bridges to skyscrapers, our projects stand as testaments to innovation and durability.
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between max-[1000px]:w-[200px] max-[1000px]:justify-start]">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
            <div className="civ-eng-home-img w-[55%] max-[1000px]:hidden flex justify-end">
                <img className='' src={civEngImg} alt="engineers working on site" />
            </div>
        </div>

        {/* <div className="elect-eng-home flex gap-6 items-center justify-between mb-28">
            
            <div className="elect-eng-home-img flex items-center w-[50%]">
                <img src={electEngImg} alt="engineers working on site" />
            </div>

            <div className="elect-eng-summ cursor-pointer flex flex-col gap-4 w-[50%] my-auto h-fit">
                <div className='service-home-number'>
                    <span className='text-[180px] leading-10'>02</span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="elect-eng-summ-title flex gap-3">
                        <img src={electEngIcon} alt="elect-engineering-icon" />
                        <span className='text-[32px]'>Electrical Engineering</span> 
                    </div>
                    <span className=' text-[19px]'>
                        At JECCONS, we offer comprehensive electrical engineering services tailored to meet the demands of modern infrastructure and technology. Our team of skilled professionals specializes in the design, development, and implementation of innovative electrical systems that power progress.
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
        </div> */}

        {/* <div className="env-eng-home flex justify-between gap-10 mb-28">

            <div className="env-eng-summ cursor-pointer flex flex-col gap-4 w-[50%] h-fit my-auto">
                <div className="service-home-number">
                    <span className='text-[180px] leading-10'>03</span>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="env-eng-summ-title flex gap-3">
                        <img src={environEngIcon} alt="environ-engineering-icon" />
                        <span className='text-[32px]'>Environmental Engineering</span> 
                    </div>
                    <span className=' text-[19px]'>
                    At JECCONS, we provide Environmental Engineering services that ensure projects not only comply with regulations but also contribute positively to the environment. We offer Waste Management Solutions, Environmental Impact Assessments, Remediation Services with Sustainable Design
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
            <div className="env-eng-home-img w-[50%] flex justify-end">
                <img src={environEngImg} alt="engineers with a windmill model" />
            </div>
        </div> */}

        {/* <div className="mech-eng-home flex gap-6 items-center justify-between mb-28">
            
            <div className="mech-eng-home-img flex items-center w-[50%]">
                <img src={mechEngImg} alt="an engineer working" />
            </div>

            <div className="mech-eng-summ cursor-pointer flex flex-col gap-4 w-[50%] my-auto h-fit">
                <div className='service-home-number'>
                    <span className='text-[180px] leading-10'>04</span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="mech-eng-summ-title flex gap-3">
                        <img src={mechEngIcon} alt="mech-engineering-icon" />
                        <span className='text-[32px]'>Mechanical Engineering</span> 
                    </div>
                    <span className=' text-[19px]'>
                        At JECCONS, we offer comprehensive electrical engineering services tailored to meet the demands of modern infrastructure and technology. Our team of skilled professionals specializes in the design, development, and implementation of innovative electrical systems that power progress.
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
        </div> */}

        {/* <div className="oil-gas-home flex justify-between gap-10 mb-28">

            <div className="oil-gas-summ cursor-pointer flex flex-col gap-4 w-[50%] h-fit my-auto">
                <div className="service-home-number">
                    <span className='text-[180px] leading-10'>05</span>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="oil-gas-summ-title flex gap-3">
                        <img src={oilGasIcon} alt="oil-gas-icon" />
                        <span className='text-[32px]'>Oil and Gas</span> 
                    </div>
                    <span className=' text-[19px]'>
                        JECCONS offers a comprehensive suite of Oil and Gas services, ensuring operational excellence and safety in one of the world’s most vital industries.
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
            <div className="oil-gas-home-img w-[50%] flex justify-end">
                <img src={oilGasImg} alt="a distribution station" />
            </div>
        </div> */}

        {/* <div className="safe-secure-home flex gap-6 items-center justify-between mb-28">
            
            <div className="safe-secure-home-img flex items-center w-[50%]">
                <img src={safeSecureImg} alt="an engineer installing a security camera" />
            </div>

            <div className="safe-secure-summ cursor-pointer flex flex-col gap-4 w-[50%] my-auto h-fit">
                <div className='service-home-number'>
                    <span className='text-[180px] leading-10'>06</span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="mech-eng-summ-title flex gap-3">
                        <img src={safeSecureIcon} alt="safe-secure-icon" />
                        <span className='text-[32px]'>Safety and Security</span> 
                    </div>
                    <span className=' text-[19px]'>
                        At JECCONS, we offer comprehensive electrical engineering services tailored to meet the demands of modern infrastructure and technology. Our team of skilled professionals specializes in the design, development, and implementation of innovative electrical systems that power progress.
                    </span>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[20px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[50%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </div>
                
            </div>
        </div> */}
    </div>
  )
}

export default ServicesHome