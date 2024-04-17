import civEng from '../../../assets/images/services_icons/civ_engicon_main.png'
import electEng from '../../../assets/images/services_icons/elect_engicon_main.png'
import envEng from '../../../assets/images/services_icons/env_engicon_main.png'
import mechEng from '../../../assets/images/services_icons/mech_engicon_main.png'
import oilGas from '../../../assets/images/services_icons/oil_gasicon_main.png'
import safeSecure from '../../../assets/images/services_icons/safe_secureicon_main.png'
import advancedSols from '../../../assets/images/services_icons/advanced_soleicon_main.png'
import { Link } from 'react-router-dom'
import SecureSafe from '../../../pages/Services/SecureSafe'

const ServicesSet = () => {
  return (
    <div className=" px-[100px] max-[770px]:px-5 -mt-20">
        <div className="services-set-wrap m-auto">

            <div className="civil-eng-link px-5 py-8 min-[900px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={civEng} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Civil Engineering</h3>
                <p className='mb-6'>Our Civil Engineering team at JECCONS, is dedicated to designing and constructing the infrastructure that shapes our world. From bridges to skyscrapers, our projects stand as testaments to innovation and durability.</p>
                
                <Link to = "/civil-eng-services">
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[18px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </Link>
                
            </div>

            <div className="elect-eng-link px-5 py-8 min-[1300px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={electEng} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Electrical Engineering</h3>
                <p className='mb-6'>At JECCONS, we offer comprehensive electrical engineering services tailored to meet the demands of modern infrastructure and technology.</p>
                
                <Link to = "/elect-eng-services">
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[18px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </Link>
                

            </div>

            <div className="env-eng-link px-5 py-8 max-[900px]:mr-0 max-[1300px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={envEng} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Environmental Engineering</h3>
                <p className='mb-6'>At JECCONS, we provide Environmental Engineering services that ensure projects not only comply with regulations but also contribute positively to the environment.</p>
                
                <Link to ="/env-eng-services">
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[18px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </Link>
                
                
            </div>

            <div className="mech-eng-link px-5 py-8 min-[1300px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={mechEng} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Mechanical Engineering</h3>
                <p className='mb-6'>At JECCONS Mechanical Engineering services are at the forefront of innovation, designing systems and components that drive industry and improve quality of life.</p>
                
                <Link to = "/mech-eng-services">
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[18px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </Link>
                
                
            </div>

            <div className="oil-gas-link px-5 py-8 min-[900px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={oilGas} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Oil and Gas</h3>
                <p className='mb-6'>JECCONS offers a comprehensive suite of Oil and Gas services, ensuring operational excellence and safety in one of the world’s most vital industries.</p>
                <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                    <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                        <span className='text-[18px]'>LEARN MORE</span>
                        <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                        </div>
                    </div>
                    <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    

                </div>
                
            </div>

            <div className="safety-security-link px-5 py-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={safeSecure} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Safety and Security</h3>
                <p className='mb-6'>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                
                <Link to='/secure-safe-services'>
                    <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                        <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                            <span className='text-[18px]'>LEARN MORE</span>
                            <div className="learn-more-service-hm-text-slash bg-[var(--primary-red)] absolute top-[45%] h-[2px] w-[100%]">

                            </div>
                        </div>
                        <svg className='service-hm-learn-svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="#661A2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        

                    </div>
                </Link>
                
                
            </div>

            <div className="advanced-sols-link  px-5 py-8 min-[900px]:mr-8 mb-8 bg-white rounded-xl">
                <div className="eng-service-icon p-4 mb-8 w-fit rounded-lg bg-[#DBDBE0]">
                    <img className=' w-6 h-6 ' src={advancedSols} alt="civil-eng-icon" />
                </div>
                <h3 className='text-[22px] mb-6'>Advanced Solutions</h3>
                <p className='mb-6'>Safety and Security are paramount at JECCONS. We provide services that protect assets, infrastructure, and people.</p>
                <div className="learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between">
                    <div className="learn-more-service-hm-text overflow-x-hidden relative w-fit">
                        <span className='text-[18px]'>LEARN MORE</span>
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
    </div>
  )
}

export default ServicesSet