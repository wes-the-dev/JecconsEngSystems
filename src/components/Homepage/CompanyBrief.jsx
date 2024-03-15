
function CompanyBrief() {
  return (
    <div className="bg-[#F6F6F6] px-[60px] py-20 font-['PP-Telegraf'] text-[var(--primary-red)] flex justify-between">
        <div className="completed-projects-brief flex gap-3
        ">
            <span className="text-[56px]">
                100+
            </span>
            <div className="flex flex-col gap-1">
                <span className="text-[20px]">COMPLETED</span>
                <span className="text-[30px] font-bold">Projects</span>
            </div>
        </div>
        <div className="years-experience-hm flex gap-3">
            <span className="text-[56px]">
                40            </span>
            <div className="flex flex-col gap-1">
                <span className="text-[20px]">YEARS OF</span>
                <span className="text-[30px] font-bold">Experience</span>
            </div>
        </div>

        <div className="cert-professionals flex gap-3">
            <span className="text-[56px]">
                50+            </span>
            <div className="flex flex-col gap-1">
                <span className="text-[20px]">CERTIFIED</span>
                <span className="text-[30px] font-bold">Professionals</span>
            </div>
        </div>
    </div>
  )
}

export default CompanyBrief