import teamPhoto from '../../assets/images/about-us-main-hero.png'

function AboutUsHero() {
  return (
    <>
        <div className='aboutUs pt-[115px] pb-20 px-[60px] mb-[100px]'>
            <h1 className='text-[40px]'>WHO WE ARE</h1>
            <p className='text-lg mb-9'> JECCONS ENGINEERING SYSTEMS LTD. is one of the renown leading Engineering Construction Companies reputed for her extensive and wide range of renowned experienced British Engineers. The company commenced operations in 1984 as &quot;JAMES-CHIGS CONSTRUCTION COMPANY&quot; later became incorporated as limited liability Company in 1991 as &quot;JECCONS ENGINEERING SYSTEMS LTD&quot; with RC: 163354.</p>
            <div className="team-photo">
              <img className='w-[100%]' src={teamPhoto} alt="engineers during site preparation" />
            </div>
        </div>
        
    </>
    
  )
}

export default AboutUsHero