import MechEngHeadImg from '../../../assets/images/mech-eng-images/mech-eng-header.png'

const MechEngHead = () => {
  return (
    <div className="px-[60px] max-[700px]:px-5 max-[700px]:mb-8 mb-[100px]">
        <h2 className="text-[40px] mb-2">Mechanical Engineering</h2>
        <p className="text-[24px] mb-[60px]">Services are professionally and practically standard</p>
        <div className="mech-eng-header-img mb-11">
            <img className='w-[100%]' src={MechEngHeadImg} alt="engineers working at the site" />
        </div>

        <div className="mech-eng-text mb-6 ">
            <p className='mb-5'>Our Mechanical Engineering Systems are designed with a commitment to excellence and practicality at their core. These systems are the result of rigorous research, development, and testing processes, ensuring that they meet and exceed industry standards. Our team of professional engineers brings a wealth of experience and knowledge to the table, enabling us to deliver services that are not only technically proficient, but also practically applicable. We understand that every client and project has unique needs and challenges, and we&apos;re dedicated to providing solutions that are tailored to meet those specific requirements. Our systems are robust, reliable, and efficient, designed to deliver optimal performance while minimizing maintenance needs. We believe in the power of engineering to transform and improve lives, and we&apos;re committed to delivering services that uphold this belief. With our Mechanical Engineering Systems, you&apos;re not just getting a service, you&apos;re investing in quality, reliability, and the peace of mind that comes with knowing you&apos;re in capable hands.</p>

            <div className="mech-eng-enquire-text-btn flex gap-3 items-center">
                <p>Do you like to learn more about this service we offer, click the button.</p>
                <div className="mech-eng-enquire-btn text-[#661A2B]  px-4 py-2 border-[1px] border-[#661A2B] rounded-[4px]">
                    <span>Enquire</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default MechEngHead