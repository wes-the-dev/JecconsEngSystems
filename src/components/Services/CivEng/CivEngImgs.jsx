import realEstateImg from '../../../assets/images/civil-eng-images/real-estate.png'
// import plumbNetworksImg from '../../../assets/images/civil-eng-images/plumbing-networks.png'

const CivEngImgs = () => {
  return (
    <div className="px-[60px] mb-[100px]">
        <h3 className="text-[24px] mb-7 text-[#661A2B]">Services</h3>
        <div className="civ-eng-services-imgs grid">
            <div className="real-estate-img border-b-[10px] border-[#661A2B] relative">
                <span className='font-bold text-white absolute bottom-8 left-5'>REAL ESTATE</span>
            </div>

            <div className="pumbling-networks-img border-b-[10px] border-[#661A2B] relative">
                <span className='font-bold text-white absolute bottom-8 left-5'>PLUMBING NETWORKS</span>
            </div>

            <div className="bridge-construction-img border-b-[10px] border-[#661A2B] relative">
                <img className=' invisible' src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5'>BRIDGE CONSTRUCTION</span>
            </div>

            <div className="flowstation-pipework-img border-b-[10px] border-[#661A2B] relative">
                {/* <img src={realEstateImg} alt="an estate from bird view" /> */}
                <span className='font-bold text-white absolute bottom-8 left-5'>FLOWSTATION PIPEWORK</span>
            </div>

            <div className="building-erection-img border-b-[10px] border-[#661A2B] relative">
                <img src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5'>BUILDING ERECTION</span>
            </div>

            <div className="site-preparation-img border-b-[10px] border-[#661A2B] relative">
                <img src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5'>SITE PREPARATION</span>
            </div>

            <div className="hydroplant-construction-img border-b-[10px] border-[#661A2B] relative">
                <img src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5'>HYDROPOWER PLANT CONSTRUCTION</span>
            </div>

            <div className="erosion-control-img border-b-[10px] border-[#661A2B] relative">
                <img src={realEstateImg} alt="an estate from bird view" />
                <span className='font-bold text-white absolute bottom-8 left-5'>EROSION CONTROL</span>
            </div>
        </div>
    </div>
  )
}

export default CivEngImgs