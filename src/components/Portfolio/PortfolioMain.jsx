import nnpcLogo from '../../assets/images/portfolio logos/Nigerian_National_Petroleum_Company_logo2.png'
import cbnLogo from '../../assets/images/portfolio logos/Central_Bank_of_Nigeria_logo.png'
import dclmLogo from '../../assets/images/portfolio logos/dclm_logo.png'
import nipexLogo from '../../assets/images/portfolio logos/Nipex_logo.png'

const PortfolioMain = () => {
  return (
    <div className="portfolio-main ">
        <table className="w-[90%] border-collapse border-0 m-auto" >
            <tr className=" border-y-[1px] border-y-[#B7B7B7] py-7 " >
                <th className=" py-7 font-normal ">COMPANY</th>
                <th className=" font-normal ">WORK DESCRIPTION</th>
                <th className=" font-normal ">LOCATION</th>
                <th></th>
            </tr>

            <tr className=" border-y-[1px] border-y-[#B7B7B7] ">
                <td className=' flex justify-center py-7'><img src={nnpcLogo} alt="NNPC Logo" /> </td>
                <td className='text-center'>Water Treatment/Filtration System, Sewage Systems</td>
                <td>36 Gerrard/TEXACO Close, Ikoyi</td>
                <td>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V4C10.75 3.30964 11.3096 2.75 12 2.75Z" fill="#222222"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z" fill="#222222"/>
                    </svg>
                </td>
            </tr>

            <tr className=" border-y-[1px] border-y-[#B7B7B7] ">
                <td className=' flex justify-center py-7'><img src={cbnLogo} alt="CBN Logo" /> </td>
                <td className='text-center'>Automatic Fire Detection Systems.</td>
                <td>Abuja</td>
                <td>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V4C10.75 3.30964 11.3096 2.75 12 2.75Z" fill="#222222"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z" fill="#222222"/>
                    </svg>
                </td>
            </tr>

            <tr className=" border-y-[1px] border-y-[#B7B7B7] ">
                <td className=' flex justify-center py-7'><img src={dclmLogo} alt="DCLM Logo" /> </td>
                <td className='text-center'>CCTV/Burglary Detection Systems and Design of Automatic Fire Hydrant Systems. </td>
                <td>Gbagada, Lagos</td>
                <td>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V4C10.75 3.30964 11.3096 2.75 12 2.75Z" fill="#222222"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z" fill="#222222"/>
                    </svg>
                </td>
            </tr>

            <tr className=" border-y-[1px] border-y-[#B7B7B7] ">
                <td className=' flex justify-center py-7'><img src={nipexLogo} alt="nipex Logo" /> </td>
                <td className='text-center'>Plant House. Automated Water Treatment Plant</td>
                <td>Bayo Kuku, Ikoyi, Lagos</td>
                <td>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V4C10.75 3.30964 11.3096 2.75 12 2.75Z" fill="#222222"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z" fill="#222222"/>
                    </svg>
                </td>
            </tr>

        </table>

        <div className="load-more-porfolio-btn mx-auto mt-5 px-[60px]">
            <span>Load More</span>
        </div>  

        <div className="talk-more-link flex justify-center mt-20 py-20 gap-20">
            <span className='text-[36px]'>We are experts in building dreams</span>
            <div className="about-hm-learn-more-btn max-[1200px]:mt-3 flex gap-[10px] border-transparent py-[18.5px] px-8 bg-[#E5E5E5] w-fit text-[var(--primary-red)] text-[18px] font-bold rounded-[100px] ">
                    <span>Let&apos;s talk</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M20 12H4" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="#661A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

            </div>
        </div>
        
    </div>
  )
}

export default PortfolioMain