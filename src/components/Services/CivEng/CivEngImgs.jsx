import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'
// import plumbNetworksImg from '../../../assets/images/civil-eng-images/plumbing-networks.png'

const CivEngImgs = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-10 mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="civ-eng-services-imgs grid">
            <div className="real-estate-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>REAL ESTATE</span>
            </div>

            <div className="pumbling-networks-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>PLUMBING NETWORKS</span>
            </div>

            <div className="bridge-construction-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>BRIDGE CONSTRUCTION</span>
            </div>

            <div className="flowstation-pipework-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>FLOWSTATION PIPEWORK</span>
            </div>

            <div className="building-erection-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>BUILDING ERECTION</span>
            </div>

            <div className="site-preparation-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>SITE PREPARATION</span>
            </div>

            <div className="hydroplant-construction-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>HYDROPOWER PLANT CONSTRUCTION</span>
            </div>

            <div className="erosion-control-img border-b-[10px] border-[#661A2B] relative">
                <img className='invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5 max-[950px]:bottom-4 max-[950px]:left-3 max-[950px]:text-[14px]'>EROSION CONTROL</span>
            </div>
        </div>
    </div>
  )
}

export default CivEngImgs