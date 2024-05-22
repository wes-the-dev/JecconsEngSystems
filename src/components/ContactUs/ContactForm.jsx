
function ContactForm() {
  return (
    <div className='flex justify-center pb-44'>
        <div className="contact-form-main rounded-xl bg-white w-[70%]  px-20 py-[72px] -mt-[120px] ">
            <form action="#" method="post">

                <select className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4 mb-9" name="message-type" id="message-type">
                    <option value="general-inquiries">General Inquiries</option>
                    <option value="get-quote">Get a Quote</option>
                    <option value="request-inspection">Request Inspection</option>
                </select>

                <div className="form-subject mb-7">
                    <span>Subject:</span>
                    <h3 className="text-[28px] text-[var(--primary-red)]">General Inquiries</h3>
                </div>

                <div className="form-details">
                    <div className="contact-company-name mb-4">
                        <p className="mb-3">Company Name</p>
                        <input className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4" type="text" name="full-name" id="full-name" placeholder="Company Name" />
                    </div>

                    <div className="contact-fullname mb-4">
                        <p className="mb-3">Full Name</p>
                        <input className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4" type="text" name="full-name" id="full-name" placeholder="Full Name" />
                    </div>

                    <div className="contact-email mb-4">
                        <p className="mb-3">Email Address</p>
                        <input className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4" type="text" name="full-name" id="full-name" placeholder="Email address" />
                    </div>

                    <div className="contact-enquiry_message mb-7">
                        <p className="mb-3">Message</p>
                        {/* <input className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4" type='' name="full-name" id="full-name" placeholder="Message" /> */}
                        <textarea className="w-[100%] border-[1px] rounded-xl border-[#CFCFCF] p-4" name="contact-message_enquiry" id="contact-message_enquiry">Message</textarea>
                    </div>
                </div>

                <button className="flex w-[100%] py-4 rounded-xl bg-[#FAFAED] justify-center gap-3" type="submit">

                    <span>Send</span>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2901 8.16999L5.70015 2.06999C2.95015 0.619985 -0.0398548 3.54999 1.35015 6.32999L2.97015 9.56998C3.42015 10.47 3.42015 11.53 2.97015 12.43L1.35015 15.67C-0.0398548 18.45 2.95015 21.37 5.70015 19.93L17.2901 13.83C19.5701 12.63 19.5701 9.36999 17.2901 8.16999Z" stroke="#29166F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </button>


            </form>
        </div>
    </div>
  )
}

export default ContactForm