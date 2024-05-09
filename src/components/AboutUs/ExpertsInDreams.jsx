import expertsImg from '../../assets/images/experts-in-dreams.png'

const ExpertsInDreams = () => {
  return (
    <div className='experts-in-dreams flex justify-between gap-6'>
        <div className="experts-in-dreams-text flex flex-col gap-8 max-[1000px]:gap-4 justify-center pl-[60px] max-[1000px]:px-[60px] max-[770px]:px-5 max-[1000px]:py-[40px] w-[50%] max-[1000px]:w-[100%]">
            <h3 className='text-[32px] max-[600px]:text-[26px] font-bold '>We are experts in building dreams</h3>
            <div className="experts-in-dreams-img min-[1001px]:hidden w-[100%]">
              <img src={expertsImg} alt="" />
          </div>
            <p className='text-[20px]'>Utilizing our expertise in structural, civil, and mechanical engineering, we handle everything from rehabilitation and maintenance to repairs or replacements. We&apos;ve got your back whether it&apos;s foundations, walls, floor slabs, complex roofing, manhole drainage, or storm water diversion.</p>
            <div className="about-hm-learn-more-btn max-[1200px]:mt-3 flex gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-fit text-[var(--primary-red)] text-[18px] font-bold rounded-[100px] ">
                <span>Let&apos;s talk</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>
        </div>
        <div className="experts-in-dreams-img flex max-[1000px]:hidden justify-end w-[50%]">
            <img src={expertsImg} alt="" />
        </div>
    </div>
  )
}

export default ExpertsInDreams