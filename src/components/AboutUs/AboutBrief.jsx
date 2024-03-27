
const AboutBrief = () => {
  return (
    <div>
        <div className="px-[60px] font-['PP-Telegraf'] text-[var(--black)] flex justify-between max-[770px]:px-5 max-[380px]:px-3">
            <div className="completed-projects-brief flex gap-2 items-center">
                <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px] max-[650px]:text-[30px] max-[550px]:text-[20px] max-[430px]:text-[16px]">
                    100+
                </span>
                <div className="flex flex-col gap-0">
                    <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px] max-[550px]:text-[12px] max-[430px]:text-[10px]">COMPLETED</span>
                    <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px] max-[650px]:text-[16px] max-[550px]:text-[12px] max-[430px]:text-[10px]">Projects</span>
                </div>
            </div>
            <div className="years-experience-hm flex gap-2 items-center">
                <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px] max-[650px]:text-[30px] max-[550px]:text-[20px] max-[430px]:text-[16px]"> 40  </span>
                <div className="flex flex-col gap-0">
                    <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px] max-[550px]:text-[12px] max-[430px]:text-[10px]">YEARS OF</span>
                    <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px] max-[650px]:text-[16px] max-[550px]:text-[12px] max-[430px]:text-[10px]">Experience</span>
                </div>
            </div>

            <div className="cert-professionals flex gap-2 items-center">
                <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px] max-[650px]:text-[30px] max-[550px]:text-[20px] max-[430px]:text-[16px]">
                    50+            </span>
                <div className="flex flex-col gap-0">
                    <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px] max-[550px]:text-[12px] max-[430px]:text-[10px]">CERTIFIED</span>
                    <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px] max-[650px]:text-[16px] max-[550px]:text-[12px] max-[430px]:text-[10px]">Professionals</span>
                </div>
            </div>
        </div>

        <div className="technicians-certs py-28 mx-32 mb-[100px] ">
            <p className="text-center text-[32px]">
            Our Technical Directors, Engineers and Technicians are professionally qualified and registered with recognised professional bodies, nationally and internationally.
            </p>
        </div>

        <div className="global-dedicated-infinite-scroll py-14 border-y-[1px] border-x-[#B7B7B7] ">
            
        </div>
    </div>
  )
}

export default AboutBrief