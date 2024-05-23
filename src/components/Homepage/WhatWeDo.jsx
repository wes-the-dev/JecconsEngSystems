import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import aboutJecconsImg from '../../assets/images/aboutjecchm.png'

function WhatWeDo() {

  const aboutJeccImgRef = useRef(null)
  const aboutJeccHeader1 = useRef(null)
  const aboutJeccHeader2 = useRef(null)
  const aboutJeccTextRef = useRef(null)
  const aboutJeccLearnMoreBtn = useRef(null)

  const aboutHmImgCallback =([entry])=>{
    if(entry.isIntersecting){
      aboutJeccImgRef.current.classList.add('display-about-home-image')
  }}

  const aboutHeader1Callback =([entry])=>{
    if(entry.isIntersecting){
      aboutJeccHeader1.current.classList.add('display-about-text')
  }}

  const aboutHeader2Callback =([entry])=>{
    if(entry.isIntersecting){
      aboutJeccHeader2.current.classList.add('display-about-text')
  }}

  const aboutTextCallback =([entry])=>{
    if(entry.isIntersecting){
      aboutJeccTextRef.current.classList.add('display-about-text')
  }}

  const aboutLearnBtnCallback =([entry])=>{
    if(entry.isIntersecting){
      aboutJeccLearnMoreBtn.current.classList.add('display-about-text')
  }}

  useEffect(()=>{
    const aboutHmOptions = {
      rootMargin: '-40px'
    }
    const aboutObserver = new IntersectionObserver(aboutHmImgCallback, aboutHmOptions);
    const aboutHeader1Observer = new IntersectionObserver(aboutHeader1Callback);
    const aboutHeader2Observer = new IntersectionObserver(aboutHeader2Callback);
    const aboutTextObserver = new IntersectionObserver(aboutTextCallback);
    const aboutLearnBtnObserver = new IntersectionObserver(aboutLearnBtnCallback);

    aboutObserver.observe(aboutJeccImgRef.current);
    aboutHeader1Observer.observe(aboutJeccHeader1.current);
    aboutHeader2Observer.observe(aboutJeccHeader2.current);
    aboutTextObserver.observe(aboutJeccTextRef.current);
    aboutLearnBtnObserver.observe(aboutJeccLearnMoreBtn.current);

  }, [aboutJeccImgRef, aboutJeccHeader1, aboutJeccHeader2, aboutJeccTextRef, aboutJeccLearnMoreBtn])

  return (
    <section className="aboutJecconsHm py-6 px-12 max-[770px]:px-5 flex gap-6 border-b-[#B7B7B7] border-[1px] max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-5">
      <div ref={aboutJeccImgRef} className="aboutJeccImg opacity-0 -translate-x-[30%] w-[50%] max-[1000px]:w-[100%] max-[1000px]:flex max-[1000px]:justify-center">
        <img src={aboutJecconsImg} alt="engineers examining a drawing" />

      </div>
      <div className="about-jeccons-details-home w-[50%] font-[PP-Telegraf] flex flex-col gap-8 justify-center max-[1000px]:w-[100%] max-[1000px]:gap-2 max-[1000px]:items-center">
        <h3 ref={aboutJeccHeader1} className='opacity-0 -translate-y-[30%] font-bold text-[var(--primary-red)]'>About Jeccons</h3>
        <h2 ref={aboutJeccHeader2} className='opacity-0 -translate-y-[30%] text-[36px] max-[770px]:text-center font-bold'>Engineering Excellence, Building Futures</h2>
        <span ref={aboutJeccTextRef} className='opacity-0 -translate-y-[30%] max-[770px]:text-justify'>
        JECCONS ENGINEERING SYSTEM is an engineering and construction firm specializing in safety, water, energy, maintenance and construction. We provide services to several relevant sectors of Nigerian economy such as water, energy, security manufacturing, oil and gas with our cache of international professionals and experts. JECCONS ENGINEERING name has been synonymous with excellence and quality in all its relevant industries.
        </span>
        <Link ref={aboutJeccLearnMoreBtn} className='opacity-0 -translate-y-[30%] w-max' to="/about-us">
          <div className=" about-hm-learn-more-btn flex items-center gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-max text-[var(--primary-red)] font-bold rounded-[100px]  text-[18px] max-[1032px]:px-6 max-[1032px]:py-[16px] max-[1032px]:text-[14px] max-[1000px]:mt-[15px]">
            <span>Learn More</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>
        </Link>
        
      </div>
    </section>
  )
}

export default WhatWeDo