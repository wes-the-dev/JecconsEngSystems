// import NavMenu from "../Global/NavMenu"
import { Link } from "react-router-dom"

function Hero() {



  return (
    <section className="heroSection max-[650px]:overflow-hidden pt-10">
        {/* <NavMenu /> */}
        
        <div className="heroMain min-[851px]:pb-[220px] max-[1060px]:w-[100%] max-[850px]:pt-[20px] max-[850px]:pb-[45px]">

          <div className="jecconsPhrase my-auto max-[1060px]:mx-[50px] max-[770px]:mx-5">
            <span className=" text-white max-[430px]:text-[30px]">
            Engineering the Future with Excellence and British Standards.
            </span>
            <div className="expPhrase max-[430px]:text-[16px]">
              <p className="">JECCONS Engineering Systems Ltd is a with over 35 years of experience in various engineering fields. Their team, trained in Britain, adheres to British standards.</p>

              <p>
                We have the required professional competence to deliver engineering services  to international standards. Having been certified and registered with BPP, DPR, NIPEX as qualified Oil and Gas Engineering service providers in over 85 service codes for International Oil Companies (IOCs).
              </p>

              <Link to="/about-us">
                <div className="learnMoreBtn max-[850px]:px-[16px] max-[850px]:py-[4px] max-[850px]:text-[18px]">
                  <span>Learn more</span>
                </div>
              </Link>
              
              
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