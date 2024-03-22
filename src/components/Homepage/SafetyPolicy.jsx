import safetyPolicyImg from '../../assets/images/safety_policyimg.png'
import safetyPolicyImgMobile from '../../assets/images/safety_policyimgmobile.png'

function SafetyPolicy() {
  return (
    <section className=" safetyPolicy pl-[60px] max-[1100px]:pl-[30px] max-[1000px]:px-[60px] max-[770px]:px-5 flex justify-between gap-12 max-[1020px]:gap-8 font-['PP-Telegraf']">
      <div className="safety-policy-text py-6 flex flex-col gap-8 justify-center w-[50%] max-[1000px]:w-[100%] max-[1200px]:gap-3">
        <h3 className='font-bold text-[var(--primary-red)]'>Our Safety Policy</h3>
        <h3 className='text-[36px] max-[1200px]:text-[30px] max-[650px]:text-[24px] font-bold'>Engineering Safety, Building Trust</h3>
        <div className="safety-policy-img flex justify-center w-[100%] min-[1001px]:hidden">
          <img src={safetyPolicyImgMobile} alt="a health personnel" />
        </div>
        <p className='text-[20px] max-[1020px]:text-justify max-[650px]:text-[18px]'>JECCONS ENGINEERING SYSTEMS LTD is committed to the provision of safe working environment for the company&apos;s employees, subcontractors, local communities and others affected by its operations. Jeccons Engineering conducts its operations such as to minimize damage to personnel and the environment Federal Statutory Regulations and client&apos;s HSE policy...</p>
        <div className="about-hm-learn-more-btn max-[1200px]:mt-3 flex gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-fit text-[var(--primary-red)] font-bold rounded-[100px] ">
          <span>Learn about policy</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </div>
      </div>
      <div className="safety-policy-img flex justify-end w-[50%] max-[1000px]:hidden">
        <img src={safetyPolicyImg} alt="a health personnel" />
      </div>
    </section>
  )
}

export default SafetyPolicy