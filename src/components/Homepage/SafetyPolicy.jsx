import safetyPolicyImg from '../../assets/images/safety_policyimg.png'

function SafetyPolicy() {
  return (
    <section className="safetyPolicy mt-16 px-[100px] mb-32 flex justify-between gap-12">
        <div className="safetyPolicyText w-[50%]">
        <h3 className=' mt-20 mb-8 font-bold text-[28px] text-[#29166F]'>Our Safety Policy</h3>
        <p className=' leading-[38px] text-[22px]'>JECCONS ENGINEERING SYSTEMS LTD is committed to the provision of safe working environment for the company`s employees, subcontractors, local communities and others affected by its operations. Jeccons Engineering conducts its operations such as to minimize damage to personnel and the environment Federal Statutory Regulations and client`s HSE policy...</p>

        <div className="learnPolicy mt-8">
        <span>Learn about policy </span>
        </div>
        </div>
        <div className="safetyPolicyImg w-[50%]">
        <img src={safetyPolicyImg} alt="a worker taking measurement" />
        </div>
  </section>
  )
}

export default SafetyPolicy