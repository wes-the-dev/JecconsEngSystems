import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'
// import plumbNetworksImg from '../../../assets/images/civil-eng-images/plumbing-networks.png'

const SecureSafeImgs = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-10 mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="secure-safety-services-imgs grid">
            <div className="fire-extinguisher-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FIRE EXTINGUISHER</span>
            </div>

            <div className="fire-hoses-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>PLUMBING NETWORKS</span>
            </div>

            <div className="firehose-reels-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FIRE HOSE REELS</span>
            </div>

            <div className="reel-cabinets-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>REEL CABINETS</span>
            </div>

            <div className="fire-hydrants-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FIRE HYDRANTS</span>
            </div>

            <div className="valves-rises-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>VALVES & RISERS</span>
            </div>

            <div className="fire-doors-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FIRE DOORS</span>
            </div>

            <div className="detectors-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>DETECTORS</span>
            </div>

            <div className="ai-cctv-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>AI CCTV</span>
            </div>
        </div>
    </div>
  )
}

export default SecureSafeImgs