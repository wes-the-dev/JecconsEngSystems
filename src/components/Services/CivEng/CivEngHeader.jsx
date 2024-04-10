import civEngHeaderImg from '../../../assets/images/civil-eng-images/civ-eng-header.png'

const CivEngHeader = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-8 mb-[100px]">
        <h2 className="text-[40px] mb-2">Civil Engineering</h2>
        <p className="text-[24px] mb-[60px]">Real Estate, Installation, Design, Construction and Project Management</p>
        <div className="civ-eng-header-img mb-11">
            <img className='w-[100%]' src={civEngHeaderImg} alt="engineers working at the site" />
        </div>

        <div className="civ-header-text mb-6  ">
            <p className=' mb-6 '>
                Civil Engineering is not just a profession, it&apos;s a passion. It&apos;s about transforming landscapes with real estate ventures that inspire. From the installation of infrastructure to the intricate design process, every detail matters. It&apos;s the symphony of construction that brings blueprints to life. And overseeing it all is project management - the art of ensuring every piece falls perfectly into place. Civil Engineering - where creativity meets practicality, and ideas become reality.
            </p>
            <div className="civ-eng-enquire-text-btn flex gap-3 items-center">
                <p>Do you like to learn more about this service we offer, click the button.</p>
                <div className="civ-eng-enquire-btn text-[#661A2B]  px-4 py-2 border-[1px] border-[#661A2B] rounded-[4px]">
                    <span>Enquire</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default CivEngHeader