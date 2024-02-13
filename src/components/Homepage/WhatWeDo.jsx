// import servicesImg from '../../assets/images/services_homepg.png'
import civEngIcon from '../../assets/images/services_icons/icon.png'
import electIcon from '../../assets/images/services_icons/electicon.png'
import envEngIcon from '../../assets/images/services_icons/env_engicon.png'
import mechEngIcon from '../../assets/images/services_icons/mech_engicon.png'
import oilAndGasIcon from '../../assets/images/services_icons/oil_gasicon.png'

function WhatWeDo() {
  return (
    <section className="servicesHomePg">
        {/* <div className='whoWeAreSummHomePg max-[1170px]:h-[560px] max-[1000px]:h-[300px] max-[1060px]:mx-[50px]  mx-[100px] '>
          <div className='whoWeAreSummHomePgImg w-[100%]'>
            <img className='servImgMain max-[1000px]:w-[80%] max-[1170px]:-top-10' src={servicesImg} alt="a-man-surveying" />
            <img className='servImg max-[1000px]:w-[80%]' src={servicesImg} alt="a-man-surveying" />
          </div>
          <div className="whoWeAreSummText w-[50%] max-[1170px]:gap-2 flex flex-col justify-center gap-4">
            <h3 className='font-extrabold'>Who we are</h3>
            <h2 className=' max-[1350px]:text-[30px] max-[1090px]:text-[20px] text-[50px]'>Engineering Excellence, Building Futures</h2>
            <p className='max-[1090px]:text-[16px] text-[18px]'>
            JECCONS ENGINEERING SYSTEM is an engineering and construction firm specializing in safety, water, energy, maintenance and construction. We provide services to several relevant sectors of Nigerian economy such as water, energy, security manufacturing, oil and gas with our cache of international professionals and experts. JECCONS ENGINEERING name has been synonymous with excellence and quality in all its relevant industries.
            </p>
          </div>

        </div> */}

        <div className="expSumm max-[1060px]:px-[50px] px-[100px]">
            <div className="projectNum">
              <div className='projNumExact'>
                <span className='projNumExactHide max-[950px]:text-[40px]'>100+</span>
                <span className='projNumExactVis max-[950px]:text-[40px]'>100+</span>
                
              </div>
              <div className=' max-[950px]:mt-[18px]'>
                <p className='max-[950px]:text-[14px]'>COMPLETED</p>
                <span className='text-[30px] max-[950px]:text-[20px]'>Projects</span>
              </div>
            </div>

            <div className="projectNum">
              <div className='projNumExact'>
                <span className='projNumExactHide max-[950px]:text-[40px]'>30+</span>
                <span className='projNumExactVis max-[950px]:text-[40px]'>30+</span>
                
              </div>
              <div className= 'max-[950px]:mt-[18px]'>
                <p className='max-[950px]:text-[14px]'>years of</p>
                <span className='text-[30px] max-[950px]:text-[20px]'>Experience</span>
              </div>
            </div>

            <div className="projectNum">
              <div className='projNumExact'>
                <span className='projNumExactHide max-[950px]:text-[40px]'>50+</span>
                <span className='projNumExactVis max-[950px]:text-[40px]'>50+</span>
              </div>
              <div className= 'max-[950px]:mt-[18px]'>
                <p className='max-[950px]:text-[14px]'>certified </p>
                <span className='text-[30px] max-[950px]:text-[20px]'>Professionals</span>
              </div>
            </div>
        </div>

        <div className="servSummHomePgWrap px-[100px] pt-[74px] pb-14 font-['Cabinet']">
        <div className="serviceSummHomePg mb-14">
          <div className="amazingServ">
            <h3>Amazing Services</h3>
            <span>Skilled in engineering, we cover rehab to replacements, managing everything from foundations to stormwater.</span>
            <div className="fullServBtn">
              <span>Learn More</span>
            </div>
          </div>
          <div className="civEngServHomePg bg-white rounded-lg w-[30%] drop-shadow-[5px_5px_10px_rgba(214,214,214,0.986)] drop px-5 py-8">
              <div className='mb-8'>
                <img src={civEngIcon} alt="civil-eng-icon"  />
              </div>
              <h4 className=' font-medium text-[22px] mb-6'>Civil Engineering</h4>
                <p>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                <div className="learnMoreServ flex justify-between mt-6">
                  <span className=' font-medium'>LEARN MORE</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* filter: drop-shadow(4px 4px 14px #787878); */}

                </div>
          </div>
          <div className="electEngHomePg bg-white rounded-lg w-[30%] drop-shadow-[5px_5px_10px_rgba(214,214,214,0.986)] drop px-5 py-8">
              <div className='mb-8'>
                <img src={electIcon} alt="civil-eng-icon"  />
              </div>
              <h4 className=' font-medium text-[22px] mb-6'>Electrical Engineering</h4>
                <p>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                <div className="learnMoreServ flex justify-between mt-6">
                  <span className=' font-medium'>LEARN MORE</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* filter: drop-shadow(4px 4px 14px #787878); */}

                </div>
          </div>
          
        </div>
        <div className="servSummHomePg2 flex justify-between">
          <div className="envEngHomePg  bg-white rounded-lg w-[30%] drop-shadow-[5px_5px_10px_rgba(214,214,214,0.986)] drop px-5 py-8">
              <div className='mb-8'>
                <img src={envEngIcon} alt="civil-eng-icon"  />
              </div>
              <h4 className=' font-medium text-[22px] mb-6'>Environmental Engineering</h4>
                <p>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                <div className="learnMoreServ flex justify-between mt-6">
                  <span className=' font-medium'>LEARN MORE</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* filter: drop-shadow(4px 4px 14px #787878); */}

                </div>
          </div>
          <div className="mechEngHomePg bg-white rounded-lg w-[30%] drop-shadow-[5px_5px_10px_rgba(214,214,214,0.986)] drop px-5 py-8">
              <div className='mb-8'>
                <img src={mechEngIcon} alt="civil-eng-icon"  />
              </div>
              <h4 className=' font-medium text-[22px] mb-6'>Mechanical Engineering</h4>
                <p>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                <div className="learnMoreServ flex justify-between mt-6">
                  <span className=' font-medium'>LEARN MORE</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* filter: drop-shadow(4px 4px 14px #787878); */}

                </div>
          </div>
          <div className="oilAndGasServHomePg bg-white rounded-lg w-[30%] drop-shadow-[5px_5px_10px_rgba(214,214,214,0.986)] drop px-5 py-8">
              <div className='mb-8'>
                <img src={oilAndGasIcon} alt="civil-eng-icon"  />
              </div>
              <h4 className=' font-medium text-[22px] mb-6'>Oil and Gas</h4>
                <p>JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria.</p>
                <div className="learnMoreServ flex justify-between mt-6">
                  <span className=' font-medium'>LEARN MORE</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4299 5.93005L20.4999 12.0001L14.4299 18.0701" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* filter: drop-shadow(4px 4px 14px #787878); */}

                </div>
          </div>
          </div>
        </div>
        
      </section>
  )
}

export default WhatWeDo