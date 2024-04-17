import envEngHeadImg from '../../../assets/images/env-eng-images/env-eng-header.png'

const EnvEngHeader = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-8 mb-[100px]">
        <h2 className="text-[40px] mb-2">Environmental Engineering</h2>
        <p className="text-[24px] mb-[60px]">Environmental and waste management</p>
        <div className="env-eng-header-img mb-11">
            <img className='w-[100%]' src={envEngHeadImg} alt="engineers working at the site" />
        </div>

        <div className="env-eng-text mb-6 ">
            <h3>Environmental Consultancy Services</h3>
            <p className='mb-5'>We conduct extensive environmental consultancy services in core areas like: Environmental Impact Assessment EIA, Conservation Procedures and Techniques; Afforestation, etc. we also advice on safe climate change mitigation practices in Industrial operation.</p>

            <h3>Waste Management Engineering Consultancy Service</h3>
            <p className='mb-5'>We consult in all facets of Engineering on waste management. We also engage in the installation and operation of waste management & treatment facilities such as: Thermal Desorption Units (TDU’s), Incinerators, Recycling Plants, Compactors, Oil Spill Control/Clean-up, degreasing, all hazardous and non-hazardous waste handling, Tank cleaning, solids control, water and soil based mud handling etc</p>

            <h3>Fumigation and Pest Control Consultancy Services:</h3>
            <p className='mb-5'>We engage in very effective and high quality fumigation and sanitation of office and industrial premises, oil & gas installations, hospital premises etc</p>

            <h3>Erosion / Land Slide Control</h3>
            <p className='mb-5'>
                We effectively construct reliable erosion control drainages, channels and barricades
            </p>
            <div className="env-eng-enquire-text-btn flex gap-3 items-center">
                <p>Do you like to learn more about this service we offer, click the button.</p>
                <div className="env-eng-enquire-btn text-[#661A2B]  px-4 py-2 border-[1px] border-[#661A2B] rounded-[4px]">
                    <span>Enquire</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default EnvEngHeader