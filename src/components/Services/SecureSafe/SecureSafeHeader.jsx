import safeSecureHeadImg from '../../../assets/images/secure-safety-images/safe-secure-head.png'


const SecureSafeHeader = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-8 mb-[100px]">
        <h2 className="text-[40px] mb-2">Safety and Security</h2>
        <p className="text-[24px] mb-[60px]">Safety and security equipment</p>
        <div className="secure-safety-header-img mb-11">
            <img className='w-[100%]' src={safeSecureHeadImg} alt="engineers working at the site" />
        </div>

        <div className="secure-safety-text mb-6  ">
            <p className=' mb-6 '>
                JECCONS engineering supplies and installs high-quality fire fighting equipment and fire extinguisher across Nigeria. Our products are from companies and brands that have been certified by organizations such as UL, FM, BSI, LPCB and Global Mark. All fire fighting equipment provided or installed by JECCONS will enhance the overall safety of your property. Have you asked yourself ‘where can I get the best fire fighting and safety equipment? If your search is ‘to get the best fire fighting and safety equipment’ , JECCONS ENGINEERING is the company to choose.
            </p>
            <div className="secure-safety-enquire-text-btn flex gap-3 items-center">
                <p>Do you like to learn more about this service we offer, click the button.</p>
                <div className="civ-eng-enquire-btn text-[#661A2B]  px-4 py-2 border-[1px] border-[#661A2B] rounded-[4px]">
                    <span>Enquire</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default SecureSafeHeader