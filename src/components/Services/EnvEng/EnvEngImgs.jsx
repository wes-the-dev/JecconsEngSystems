import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'

const EnvEngImgs = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-10 mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="elect-eng-services-imgs grid">
            <div className="fumigation-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FUMIGATION</span>
            </div>

            <div className="waste-management-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>WASTE MANAGEMENT</span>
            </div>

            <div className="erotion-control-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>EROSION/LAND SLIDE CONTROL</span>
            </div>

            
        </div>
    </div>
  )
}

export default EnvEngImgs