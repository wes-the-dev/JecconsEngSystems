import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"

import civEngImg from '../../../assets/images/civ_eng_home.png'
import civEngIcon from '../../../assets/images/services_icons/civ_engicon.png'

const CivEngHome = () => {

    const refHorizontalNumber = useRef(null)
    const refHorizontalHeader = useRef(null)
    const refHorizontalText = useRef(null)
    const refHorizontalButton = useRef(null)
    const refLeft = useRef(null)
    const refRight = useRef(null)

    const imageCallback =([entry])=>{
        if(entry.isIntersecting)refRight.current.classList.add('display-from-right')
    }

    const textFullCallback =([entry])=>{
        if(entry.isIntersecting)refLeft.current.classList.add('display-from-left')
    }

    const headerNumCallback =([entry])=>{
        if(entry.isIntersecting){
        refHorizontalNumber.current.classList.add('display-from-horizontal')
        
        }
    }

    const headerTextCallback =([entry])=>{
        if(entry.isIntersecting){
        refHorizontalHeader.current.classList.add('display-from-horizontal')
        }
    }
    const textCallback=([entry])=>{
        if(entry.isIntersecting){
        refHorizontalText.current.classList.add('display-from-horizontal')
        }
    }
    const learnBtnCallback=([entry])=>{
        if(entry.isIntersecting){
        refHorizontalButton.current.classList.add('display-from-horizontal')
        }
    }


    useEffect(()=>{
        const imageOptions ={
            rootMargin: '-40px'
            
        }
        const observeImage = new IntersectionObserver(imageCallback, imageOptions)

        const observeTextFull = new IntersectionObserver(textFullCallback, imageOptions)
        const observeHeaderNum = new IntersectionObserver(headerNumCallback, imageOptions)
        const observeHeaderText = new IntersectionObserver(headerTextCallback, imageOptions)
        const observeText = new IntersectionObserver(textCallback, imageOptions)
        const observeLearnBtn = new IntersectionObserver(learnBtnCallback, imageOptions)
        
        observeImage.observe(refRight.current)
        observeTextFull.observe(refLeft.current)
        observeHeaderNum.observe(refHorizontalNumber.current)
        observeHeaderText.observe(refHorizontalHeader.current)
        observeText.observe(refHorizontalText.current)
        observeLearnBtn.observe(refHorizontalButton.current)

    }, [refRight, refLeft, refHorizontalNumber, refHorizontalHeader, refHorizontalText, refHorizontalButton])


  return (

    <div className="civil-eng-home flex justify-between gap-10 max-[1000px]:mb-10 mb-28">
        <Link to="/civil-eng-services" className='w-[50%] max-[1000px]:w-[100%]'>
            <div ref={refLeft} className="civ-eng-summ cursor-pointer flex flex-col gap-4 w-[max] max-[1000px]:items-center max-[1000px]:w-[100%] h-fit my-auto">
                <div ref={refHorizontalNumber} className="opacity-0 translate-y-[20%] service-home-number max-[1000px]:hidden">
                    <span className='text-[180px] leading-10'>01</span>
                </div>

                <div className="flex flex-col gap-4">
                    <div ref={refHorizontalHeader} className="opacity-0 translate-y-[20%] civ-eng-summ-title flex max-[1000px]:justify-center items-center max-[650px]:justify-start gap-3">
                        <img className='w-[44px] h-[44px]' src={civEngIcon} alt="civil-engineering-icon" />
                        <span className='text-[32px] max-[1100px]:text-[28px] max-[650px]:text-[22px]'>Civil Engineering</span> 
                    </div>
                    <div className="civ-eng-home-img max-[1000px]:w-[100%] max-[1000px]:flex max-[1000px]:justify-center min-[1001px]:hidden justify-end">
                        <img className='' src={civEngImg} alt="engineers working on site" />
                    </div>
                    <span ref={refHorizontalText} className='opacity-0 translate-y-[20%] text-[19px] max-[650px]:text-[17px] min-[650px]:text-justify'>
                        Our Civil Engineering team at JECCONS, is dedicated to designing and constructing the infrastructure that shapes our world. From bridges to skyscrapers, our projects stand as testaments to innovation and durability.
                    </span>
                    <div ref={refHorizontalButton} className="opacity-0 translate-y-[20%] learn-more-services-home-btn cursor-pointer overflow-x-hidden text-[var(--primary-red)] flex justify-between max-[1000px]:justify-center max-[1000px]:gap-5 ">
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

        <div ref={refRight} className="opacity-0 translate-x-[20%] civ-eng-home-img w-[50%] max-[1000px]:hidden flex justify-end">
            <img className='' src={civEngImg} alt="engineers working on site" />
        </div>
    </div>
  )
}

export default CivEngHome