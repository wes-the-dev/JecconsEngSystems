import teamPhoto from '../../assets/images/about-us-main-hero.png'

function AboutUsHero() {
  return (
    <>
        <div className='aboutUs pt-[115px] pb-20 max-[600px]:pb-10 px-[60px] mb-[100px] max-[950px]:mb-[40px] max-[770px]:px-5'>
            <h1 className='text-[40px] max-[770px]:text-[32px] max-[770px]:font-bold'>WHO WE ARE</h1>
            <p className='text-lg mb-9 max-[500px]:text-[15px]'> JECCONS ENGINEERING SYSTEMS LTD. is one of the renown leading Engineering Construction Companies reputed for her extensive and wide range of renowned experienced British Engineers. The company commenced operations in 1984 as &quot;JAMES-CHIGS CONSTRUCTION COMPANY&quot; later became incorporated as limited liability Company in 1991 as &quot;JECCONS ENGINEERING SYSTEMS LTD&quot; with RC: 163354.</p>
            <div className="team-photo">
              <img className='w-[100%]' src={teamPhoto} alt="engineers during site preparation" />
            </div>
        </div>
        
    </>
    
  )
}

export default AboutUsHero