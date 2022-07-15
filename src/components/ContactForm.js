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
                                <option value="selection">Startup Recognition</option>
                                <option value="selection">Business Plan</option>
                                <option value="selection">Digital Marketing</option>
                                <option value="selection">Startup Proposal</option>
                                <option value="selection">Pitch Deck</option>
                                <option value="selection">CSR-1 Registration</option>
                                <option value="selection">IEC Certification</option>
                                <option value="selection">Design Registration</option>
                                <option value="selection">Patent Registration</option>
                                <option value="selection">ISO Certification</option>
                                <option value="selection">GeM registration</option>
                                <option value="selection">NIDHI Company</option>
                                <option value="selection">TAN</option>
                                <option value="selection">Trust Registration</option>
                                <option value="selection">Barcode</option>
                                <option value="selection">Section 8 Registration</option>
                                <option value="selection">12A & 80G Registration</option>
                                <option value="selection">NGO Darpan</option>
                                <option value="selection">Pitch Deck</option>
                                <option value="selection">CSR funding</option>
                                <option value="selection">Startup India Certification</option>
                                <option value="selection">annual report</option>
                                <option value="selection">copyright</option>
                                <option value="selection">GST</option>
                                <option value="selection">One person company</option>
                                <option value="selection">Drug license</option>
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
