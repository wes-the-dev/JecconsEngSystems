import electEngHeadImg from '../../../assets/images/elect-eng-images/elect-eng-header.png'

const ElectEngHead = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-8 mb-[100px]">
        <h2 className="text-[40px] mb-2">Electrical Engineering</h2>
        <p className="text-[24px] mb-[60px]">Energy and Power</p>
        <div className="elect-eng-header-img mb-11">
            <img className='w-[100%]' src={electEngHeadImg} alt="engineers working at the site" />
        </div>

        <div className="elect-eng-text mb-6 ">
            <p className=''>
            JECCONS ENGINEERING provides Design and construction of Power Generation Stations, Central Stations (CS), RECEIVING Stations (RS), Sub Station and Services Stations (SS), Upgrading of Power Stations to Extra – High Voltage Stations, Manual / Automatic High Voltage Control System Equipment, Generation, Transmission and Distribution of Electric Energy of several MEGAWATTS. Utilizing Turbine/ Shaft Engine, Thunder / Lightning Prevention Systems / Massive Earthing Systems to Achieve Very Low Impedance & High Conductivity.
            </p>
            <p className='mb-6'>
              We also supply, install and maintain Solar Energy Systems, Automatic Load Shading System Panels, Power Factor Correction Banks, Manual / Automatic High Voltage Control System Equipment and Traffic Control Lightning Systems
            </p>
            <div className="elect-eng-enquire-text-btn flex gap-3 items-center">
                <p>Do you like to learn more about this service we offer, click the button.</p>
                <div className="elect-eng-enquire-btn text-[#661A2B]  px-4 py-2 border-[1px] border-[#661A2B] rounded-[4px]">
                    <span>Enquire</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ElectEngHead