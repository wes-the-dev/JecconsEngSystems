import { Link } from "react-router-dom"
import environEngImg from '../../../assets/images/env_eng_home.png'
import environEngIcon from '../../../assets/images/services_icons/env_engicon.png'

const EnvEngHome = () => {
  return (
    <div className="env-eng-home flex justify-between gap-10 mb-28 max-[1000px]:mb-10">
        <Link to = "/env-eng-services" className='w-[50%] max-[1000px]:w-[100%]'>
            <div className="env-eng-summ cursor-pointer flex flex-col gap-4 max-[1000px]:w-[100%] h-fit my-auto">
                <div className="service-home-number max-[1000px]:hidden">
                    <span className='text-[180px] leading-10'>03</span>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="env-eng-summ-title flex gap-3 max-[1000px]:justify-center max-[650px]:justify-start items-center">
                        <img className='w-[44px] h-[44px]' src={environEngIcon} alt="environ-engineering-icon" />
                        <span className='text-[32px] max-[1100px]:text-[28px] max-[650px]:text-[22px]'>Environmental Engineering</span> 
                    </div>
                    <div className="env-eng-home-img w-[100%] min-[1001px]:hidden flex justify-center">
                        <img src={environEngImg} alt="engineers with a windmill model" />
                    </div>
                    <span className=' text-[19px] max-[650px]:text-[17px]'>
                    At JECCONS, we provide Environmental Engineering services that ensure projects not only comply with regulations but also contribute positively to the environment. We offer Waste Management Solutions, Environmental Impact Assessments, Remediation Services with Sustainable Design
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
        
        <div className="env-eng-home-img w-[50%] max-[1000px]:hidden flex justify-end">
            <img src={environEngImg} alt="engineers with a windmill model" />
        </div>
    </div>
  )
}

export default EnvEngHome