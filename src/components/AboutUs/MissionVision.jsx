import missionImg from '../../assets/images/mission-img.png'

const MissionVision = () => {
  return (
        <div className="mission-vision-value px-[60px] max-[770px]:px-5 mb-[100px] flex items-center justify-between gap-6 max-[850px]:flex-col">
            <div className="mission-vision-img w-[50%] max-[850px]:w-[100%]">
                <img className='w-[100%]' src={missionImg} alt="an engineer in an industrial plant" />
            </div>
            <div className="mission-vision-text flex flex-col justify-center w-[50%] max-[850px]:w-[100%]">
                <div className="our-mission mb-8 max-[950px]:mb-4">
                    <h3 className='text-[var(--primary-red)] text-[20px] max-[1200px]:text-[18px] '>Our Mission</h3>
                    <p className='text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[17px]'>Deploying prompt ICT driven solutions for Client&apos;s maximum benefits with the underlying core values of Jeccons Engineering Systems.</p>
                </div>

                <div className="our-vision mb-8 pt-8 max-[950px]:mb-4 max-[950px]:pt-4 border-t-[1px] border-[#B7B7B7] ">
                    <h3 className='text-[var(--primary-red)] text-[20px] max-[1200px]:text-[18px]'>Our Vision</h3>
                    <p className='text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[17px]'>To provide Sound Engineering Services based on rectitude, promptitude and in all exactitude in conformity with international standards.</p>
                </div>

                <div className="core-values pt-8 max-[950px]:pt-4 border-t-[1px] border-[#B7B7B7] ">
                    <h3 className='text-[var(--primary-red)] text-[20px] max-[1200px]:text-[18px]'>Core Values</h3>
                    <p className='text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[17px]'>Our CORE VALUES are safe work ethics, integrity, prompt deployment of ICT-driven solution to client&apos;s benefits and track record of customers&apos; goodwill.</p>
                </div>
            </div>
        </div>
  )
}

export default MissionVision