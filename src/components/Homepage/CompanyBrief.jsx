
function CompanyBrief() {
  return (
    <div className="bg-[#F6F6F6] px-[60px] py-20 font-['PP-Telegraf'] text-[var(--primary-red)] flex justify-between max-[770px]:px-5 max-[770px]:py-10">
        <div className="completed-projects-brief flex gap-2 items-center">
            <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px]">
                100+
            </span>
            <div className="flex flex-col gap-0">
                <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px]">COMPLETED</span>
                <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px]">Projects</span>
            </div>
        </div>
        <div className="years-experience-hm flex gap-2 items-center">
            <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px]"> 40  </span>
            <div className="flex flex-col gap-0">
                <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px]">YEARS OF</span>
                <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px]">Experience</span>
            </div>
        </div>

        <div className="cert-professionals flex gap-2 items-center">
            <span className="text-[56px] max-[1100px]:text-[50px] max-[900px]:text-[40px]">
                50+            </span>
            <div className="flex flex-col gap-0">
                <span className="text-[20px] max-[1100px]:text-[16px] max-[900px]:text-[14px]">CERTIFIED</span>
                <span className="text-[30px] font-bold max-[1100px]:text-[26px] max-[900px]:text-[20px]">Professionals</span>
            </div>
        </div>
    </div>
  )
}

export default CompanyBrief