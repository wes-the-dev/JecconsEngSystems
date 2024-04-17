import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'

const MechEngImgs = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-10 mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="elect-eng-services-imgs grid">
            <div className="borehole-drilling-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>BOREHOLE DRILLING</span>
            </div>

            <div className="dreding-services-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>DREDING SERVICES</span>
            </div>

            <div className="hydro-powerplant-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>HYDRO-POWER PLANT</span>
            </div>

            <div className="sewage-system-plant-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>SEWAGE SYSTEM PLANT</span>
            </div>

            <div className="osmosis-plant-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>OSMOSIS PLANT</span>
            </div>

            <div className="water-treatment-plant-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>WATER TREATMENT PLANT</span>
            </div>

            <div className="piling-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>PILING</span>
            </div>

            <div className="braithwaith-tanks-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>BRAITHWAITH TANKS</span>
            </div>

            <div className="waterways-cleaning-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>WATERWAYS CLEANING</span>
            </div>

            <div className="underground-tanks-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>UNDERGROUND TANKS</span>
            </div>

            <div className="auto-hydrant-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>AUTO HYDRANT SYSTEMS</span>
            </div>

            <div className="oil-water-pipe-network-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>OIL/WATER PIPE NETWORK</span>
            </div>
        </div>
    </div>
  )
}

export default MechEngImgs