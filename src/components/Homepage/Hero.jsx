import NavMenu from "../Global/NavMenu"
function Hero() {
  return (
    <section className="heroSection max-[650px]:overflow-hidden">
        <NavMenu />

        <div className="heroMain max-[1060px]:w-[100%] max-[850px]:mt-[-35px] max-[850px]:pb-[45px]">
          <div className="jecconsPhrase max-[1060px]:mx-[50px]">
            <span className=" text-white max-[430px]:text-[30px]">
            Engineering the Future with Excellence and British Standards.
            </span>
            <div className="expPhrase max-[430px]:text-[16px]">
              <p className="">JECCONS Engineering Systems Ltd is a with 27 years of experience in various engineering fields. Their team, trained in Britain, adheres to British standards.</p>

              {/* <div className="learnMoreBtn max-[850px]:px-[16px] max-[850px]:py-[4px] max-[850px]:text-[18px]">
                <span>Learn more</span>
              </div> */}
              
            </div>
            
          </div>
          <div className="heroJeccons  max-[850px]:text-[100px] max-[1060px]:left-2">
            <span>JECCONS</span>
            
          </div>
          
          
        </div>
      </section>
  )
}

export default Hero