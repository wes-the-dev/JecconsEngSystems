import aboutJecconsImg from '../../assets/images/aboutjecchm.png'

function WhatWeDo() {
  return (
    <section className="aboutJecconsHm py-6 px-12 flex gap-6 border-b-[#B7B7B7] border-[1px]">
      <div className="aboutJeccImg w-[50%]">
        <img src={aboutJecconsImg} alt="engineers examining a drawing" />

      </div>
      <div className="about-jeccons-details-home w-[50%] font-[PP-Telegraf] flex flex-col gap-8 justify-center ">
        <h3 className='font-bold  text-[var(--primary-red)]'>About Jeccons</h3>
        <h2 className='text-[36px] '>Engineering Excellence, Building Futures</h2>
        <span>
        JECCONS ENGINEERING SYSTEM is an engineering and construction firm specializing in safety, water, energy, maintenance and construction. We provide services to several relevant sectors of Nigerian economy such as water, energy, security manufacturing, oil and gas with our cache of international professionals and experts. JECCONS ENGINEERING name has been synonymous with excellence and quality in all its relevant industries.
        </span>
        <div className="about-hm-learn-more-btn flex gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-fit text-[var(--primary-red)] font-bold rounded-[100px] ">
          <span>Learn More</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </div>
      </div>
    </section>
  )
}

export default WhatWeDo