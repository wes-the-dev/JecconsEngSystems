import safetyPolicyImg from '../../assets/images/safety_policyimg.png'

function SafetyPolicy() {
  return (
    <section className=" safetyPolicy pl-[60px] flex justify-between gap-12 font-['PP-Telegraf']">
      <div className="safety-policy-text flex flex-col gap-8 justify-center w-[50%]">
        <h3 className='font-bold text-[var(--primary-red)]'>Our Safety Policy</h3>
        <h3 className='text-[36px]'>Engineering Safety, Building Trust</h3>
        <p className='text-[20px]'>JECCONS ENGINEERING SYSTEMS LTD is committed to the provision of safe working environment for the company&apos;s employees, subcontractors, local communities and others affected by its operations. Jeccons Engineering conducts its operations such as to minimize damage to personnel and the environment Federal Statutory Regulations and client&apos;s HSE policy...</p>
        <div className="about-hm-learn-more-btn flex gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-fit text-[var(--primary-red)] font-bold rounded-[100px] ">
          <span>Learn about policy</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </div>
      </div>
      <div className="safety-policy-img w-[50%]">
        <img src={safetyPolicyImg} alt="a health personnel" />
      </div>
    </section>
  )
}

export default SafetyPolicy