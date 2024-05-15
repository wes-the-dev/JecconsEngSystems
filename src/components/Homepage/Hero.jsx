// import NavMenu from "../Global/NavMenu"
import { Link } from "react-router-dom"

function Hero() {

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 80);
  }

  return (
    <section className="heroSection max-[650px]:overflow-hidden pt-10">
        {/* <NavMenu /> */}
        
        <div className="heroMain min-[851px]:pb-[220px] max-[1060px]:w-[100%] max-[850px]:pt-[20px] max-[850px]:pb-[45px]">

          <div className="jecconsPhrase my-auto max-[1060px]:mx-[50px] max-[770px]:mx-5">
            <span className=" text-white max-[430px]:text-[30px]">
            Engineering the Future with Excellence and British Standards.
            </span>
            <div className="expPhrase max-[430px]:text-[16px]">
              <p className="">JECCONS Engineering Systems Ltd is an indigenous firm with practicing records that span over a period of more than 38 years, specializing in Civil, Mechanical, Electrical and Environmental, Engineering services. We have the required professional competence to deliver engineering services  to international standards. Having been certified and registered with BPP, DPR, NIPEX as qualified Oil and Gas Engineering service providers in over 85 service codes for International Oil Companies (IOCs).</p>

              {/* specializing in Civil, Mechanical, Electrical and Environmental, Engineering services. With a crop of British-trained Engineers in our employ as foundation staff, our work standard and ethics naturally conforms to British standards in all ramifications. */}

              <p>
                
              </p>

              <Link to="about-us" onClick={refreshPage} className="w-fit block">
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