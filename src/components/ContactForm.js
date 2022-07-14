import React from 'react'

export default function ContactForm() {
    return (
        <>
            <section className="form container sm:w-4/5">
                <div className="wrapper">
                    <div className="left">
                        <h5 className="top-heading ">Contact Us</h5>
                        <h1 className='font-bold'>Please Get In Touch</h1>
                        <p>Schedule a free consultaion with our executives for your <br /> Startups Needs</p>
                        <h6>For any Queries regarding your startup and legal advice*</h6>
                        <form action="#">
                            <label for="name">Your name</label>
                            <input type="text" id="name" name="fullname" placeholder="" />
                            <label for="email">Your email</label>
                            <input type="text" id="email" name="eamil" placeholder="" />
                            <label for="name">Your phone</label>
                            <input type="text" id="phone" name="fullname" placeholder="" />
                            <select name="selection" id="selection">
                                <option value="selection">Subject</option>
                                <option value="selection">AGNi</option>
                                <option value="selection">BIS</option>
                                <option value="selection">Digital Marketing</option>
                                <option value="selection">GeM</option>
                                <option value="selection">Government Grants and Funding</option>
                                <option value="selection">IEC Certification</option>
                                <option value="selection">Industrial Land Banking </option>
                                <option value="selection">Intellectual Property Rights</option>
                                <option value="selection">ISO Certification</option>
                                <option value="selection">MSME Loans</option>
                                <option value="selection">Nidhi Prayas Yojna</option>
                                <option value="selection">NSIS</option>
                                <option value="selection">Pitch Deck</option>
                                <option value="selection">Seed Fund</option>
                                <option value="selection">Startup India Certification</option>
                                <option value="selection">TReDS</option>
                                <option value="selection">Udyam Certification</option>
                                <option value="selection">Venture Capitalist</option>
                            </select>
                            <button>SEND NOW</button>
                        </form>

                    </div>
                    <div className="right">
                        <img src="/assets/img/contactHeader/headerImg/4.svg" alt="" idth="300px" />
                    </div>
                </div>
            </section>
        </>
    )
}
