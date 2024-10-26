import dclmLogo from '../../assets/images/portfolio logos/dclm_logo.png'
import nipexLogo from '../../assets/images/portfolio logos/Nipex_logo.png'
import cbnLogo from '../../assets/images/portfolio logos/Central_Bank_of_Nigeria_logo.png'
import nnpcLogo from '../../assets/images/portfolio logos/Nigerian_National_Petroleum_Company_logo2.png'
import unlilagLogo from '../../assets/images/portfolio logos/unilag_logo.png'
import npaLogo from '../../assets/images/portfolio logos/Nigerian-Ports-Authority-3.png'
import snhLogo from '../../assets/images/portfolio logos/SNH-LOGO0.png'
import nspmLogo from '../../assets/images/portfolio logos/nspm_logo.png'
import { useEffect, useRef } from 'react'


function PastWorksHm() {

  const logosRef = useRef(null)
  const callback =([entry])=>{
    if(entry.isIntersecting) logosRef.current.classList.add('display-logos')
  }


  useEffect(()=>{
    const options ={
      rootMargin: '-60px',
    }
    const observeLogos = new IntersectionObserver(callback, options)
    observeLogos.observe(logosRef.current)
  }, [logosRef])

  return (
    <section ref={logosRef} className="opacity-0 pastWorks w-[100%] border-b-[1px] border-b-[#B7B7B7]">
          <div>
            <img src={dclmLogo} alt="dclm-logo" />
          </div>
          <div>
            <img src={nipexLogo} alt="dclm-logo" />
          </div>
          <div>
            <img src={cbnLogo} alt="dclm-logo" />

          </div>
          <div>
            <img src={nnpcLogo} alt="dclm-logo" />

          </div>
          <div>
            <img src={unlilagLogo} alt="dclm-logo" />
          </div>
          <div>
            <img src={npaLogo} alt="dclm-logo" />
          </div>
          <div>
            <img src={snhLogo} alt="dclm-logo" />
          </div>
          <div>
            <img src={nspmLogo} alt="dclm-logo" />
          </div>
    </section>
  )
}

export default PastWorksHm