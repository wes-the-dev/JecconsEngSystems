import CivEngHome from './ServicesHome/CivEngHome'
import ElectEngHome from './ServicesHome/ElectEngHome'
import EnvEngHome from './ServicesHome/EnvEngHome'
import MechEngHome from './ServicesHome/MechEngHome'
import OilGasHome from './ServicesHome/OilGasHome'
import SecureSafeHome from './ServicesHome/SecureSafeHome'

const ServicesHome = () => {
    
  return (
        <div className='services-home-page pb-5 pt-24 max-[1000px]:pt-10 px-[60px] max-[770px]:px-5 font-[PP-Telegraf]'>
            <CivEngHome />
            <ElectEngHome/>
            <EnvEngHome />
            <MechEngHome /> 
            <OilGasHome />      
            <SecureSafeHome />
    </div>
  )
}
export default ServicesHome