import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'


const ElectEngImgs = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-10 mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="elect-eng-services-imgs grid">
            <div className="hydroelectric-plant-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>HYDROELECTRIC PLANTS</span>
            </div>

            <div className="gas-turbines-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>GAS TURBINES</span>
            </div>

            <div className="generators-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>GENERATORS</span>
            </div>

            <div className="windmill-generators-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>WINDMILL GENERATORS</span>
            </div>

            <div className="solar-energy-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>SOLAR ENERGY</span>
            </div>

            <div className="sub-stations-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>SUB-STATIONS</span>
            </div>

            <div className="high-transmission-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>HIGH TRANSMISSION</span>
            </div>

            <div className="earthing-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>EARTHING</span>
            </div>

            <div className="control-switch-room-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>CONTROL/SWITCH ROOM</span>
            </div>

            <div className="voltage-current-transformers-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>VOLTAGE/CURRENT TRANSFORMERS</span>
            </div>

            <div className="thunder-arrestors-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>THUNDER ARRESTORS</span>
            </div>

            <div className="traffic-control-lightening-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>TRAFFIC CONTROL LIGHTENING</span>
            </div>
        </div>
    </div>
  )
}

export default ElectEngImgs