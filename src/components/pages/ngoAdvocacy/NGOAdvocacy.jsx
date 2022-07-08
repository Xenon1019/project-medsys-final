import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './ngoAdvocacy.css';
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';

function numberToLetter(num) {
    let ascii = 'a'.charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}

function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div className={'accordion__item' + (activated ? ' accordion__item--active' : '')}>
            <button className="accordion__btn"
                onClick={() => {
                    toggle(!activated);
                }}>
                <span className="accordion__caption" > {numberToLetter(props.number) + '. ' + props.ques}</span>
                <span className="ccordion__icon"><i className="fa fa-plus"></i></span>
            </button>

            <div className="accordion__content">
                <p >{props.answer}</p>
            </div>
        </div>);
}

function Header() {
    return (<>
        <div className="application" style={
            {
                display: 'flex',
                marginTop: '0rem',
            }}>
            <div className="header-left-content">
                <h1>Complications in NGO Compliance?</h1> <br />
                <p>NGO compliance can be stressful especially when the laws relating to it are updated.
                    Work for your mission uninterrupted while our experts take care of your compliance tasks. Get our NGO compliance service now..</p><br />

                <br />
                <ul>
                    <li> <img src={businessLogo} alt="" /> <b>Business Served</b></li>
                    <li> <img src={starLogo} alt="" /> <b>9.6/10 Unfiltered Customer ratings</b></li>
                    <li> <img src={smileLogo} alt="" /> <b>Satisfaction or Money Back Guarntee</b></li>
                </ul>
            </div>

            <div className="header-right-content">
                <form action="">
                    <input type="text" name="" placeholder="Full Name" required /> <br />
                    <input type="email" name="" placeholder="Email ID" required /> <br />
                    <input type="tel" name="" placeholder="Phone No." required /> <br />
                    <button type="submit"> <a href="#">Request a Callback</a></button>
                </form>
            </div>
        </div>

        <div className="top-footer">
            <p>For more information regarding ISO Certification Filing</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>
    </>);

}

function NGOAdvocacy() {
    TabTitle('NGO Advocacy - medsysconsultancy.com');

    return (<>
        <Header />


        <section className="main-content">
            <div className="left" id="lefty">
                <div id="activeTableContentaa" style={{height:'auto'}}>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-eligibility',
                        'content-ngo-reg',
                        'content-companies',
                        'content-faq',
                    ]}>
                    <li> <a className="tabanchor" href="#eligibility">NGO Darpan Registration </a></li>

                    <li> <a className="tabanchor" href="#reg">Revalidation</a></li>

                    <li> <a className="tabanchor" href="#sec8">Section 8</a></li>

                    <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact" style={{marginTop:'auto',mariginLeft:'auto'}}><a href="#contactus"><b style={{color:'white'}}> CONTACT US </b></a></button>

            </div>

            <div className="right1 necessity" id="overview" style={{fontSize:'1rem'}}>

                <div className="ICI necessity" id="content-eligibility">
                    <h1>NGO Darpan Registration</h1>
                    <br />
                    <p>NGO Darpan is a service provided by NITI Aayog that allows VOs (village organisations) and NGOs
                        (non-government organisations) to be eligible for new government schemes and grants.
                        Furthermore, completing NGO Darpan Registration is mandatory in order to possess any credibility as a
                        non-profit organisation.</p>
                    <br />
                    <p><b>TIME TAKEN</b></p>
                    <p>NGO Darpan is usually registered within 1 week from the date of submission of documents.</p><br />
                    <b>Documents Required</b>

                    <ul>
                        <li>Copy of the registration certificate as a PDF or JPG</li>
                        <li>Pan Card of NGO</li>
                        <li>PAN and Aadhaar card copies of 3 members in the executive committee</li>
                        <li>Name of NGO/VO</li>
                        <li>NGO address</li>
                        <li>Registration number</li>
                        <li>Date of registration</li>
                        <li>Details of three members who are on the executive committee</li>
                        <li>Details about funding from the government and chief area of working</li>
                        <li id="reg">For more information about the NGO Darpan Registration, click here.</li>
                    </ul>
                    <br />


                </div>


                <br /><br />
                <div className="ICI necessity" id="content-ngo-reg">
                    <h1>NGO Registration/Revalidation Under Section 80G and Section 12A</h1>
                    <br />
                    <p>NGOs primarily rely on donations to support their functioning. To make these funds exempt from taxation, NGOs
                        are to register under Section 80G and Section 12A of the Income Tax Act. This cannot be obtained without
                        Darpan registration.
                        <br />
                        80G registration helps you receive donations and enables you to issue exemption certificates to those who have
                        contributed to your NGO. Whereas, 12A registration exempts your NGO's excess income over expenditure from
                        income tax purview.
                        <br />
                        Moreover, recent changes have mandated that all the NGOs who have already registered under these 2 sections
                        get re-validated under sections 80G and 12A to continue enjoying those tax benefits.
                    </p>
                    <br />
                    <p><b>TIME TAKEN</b></p>
                    <p>The overall process may take up to three months, where the application shall be made within 1 week from the
                        date of submission of documents. The registration has to be revalidated every 5 years.
                        The re-application has to be made six months before the date of expiry of the registration.</p><br />
                    <b>Documents Required</b>

                    <ul>
                        <li> Copy of the registration certificate as a PDF or JPG</li>
                        <li> Pan Card of NGO</li>
                        <li> PAN and Aadhaar card copies of 3 members in the executive committee</li>
                        <li> Name of NGO/VO</li>
                        <li> NGO address</li>
                        <li> Registration number</li>
                        <li> Date of registration</li>
                        <li> Details of three members who are on the executive committee</li>
                        <li> Details about funding from the government and chief area of working.</li>
                        <li id="sec8"> For more information about the NGO Darpan Registration, click here.</li>

                    </ul>
                    <br />


                </div>


                <br /><br />
                <div className="ICI necessity" id="content-companies">
                    <h1>Section 8 Companies Annual Compliances</h1>
                    <br />
                    <p>If you are a Section 8 company, you can opt for our annual compliance package designed specifically for
                        Section 8 companies.
                        The primary list of compliance tasks that are required and will be done for you under the package are listed
                        below:</p>
                    <p>Other compliance activities are available on request.</p>

                    <ul>
                        <li>Appointment of an auditor</li>
                        <li>Maintenance of a register</li>
                        <li>Convening statutory meetings</li>
                        <li>Report by directors</li>
                        <li>Financial statements of the company</li>
                        <li>Tax returns</li>
                        <li> Filing of financial statements</li>
                        <li id="faq">Filing returns</li>
                    </ul>
                    <br />


                </div>

                <br /><br />

                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />


                    <FAQItem number={0} ques={"How do I apply for a Psara license?"}
                        answer={`Steps for apply for Psara license

            First, arrange the required documentation.
            Second, Sign MoU with a certified training institute
            Third, file application in form 1
            Fourth, complete the formalities regarding police verification`} />
                    <FAQItem number={1} ques={"Who can apply for Psara?"}
                        answer={`Indian national or citizen of such other nation as the Central Gov. may, by Official Gazette, specify; Individual who have attained 18 years of 
            age but has not exceeded the age of 65 years; Individuals who duly satisfy the agency about his antecedents & character.`} />
                    <FAQItem number={2} ques={"Is Psara license mandatory for security agency?"}
                        answer={`PSARA license is a legal mandate for conducting the business of private security in India. Such businesses facilitate
            trained security guards to various organizations across the country.`} />
                    <FAQItem number={3} ques={"What is the validity of the PSARA License?"}
                        answer={`Typically, a PSARA license comes with a validity of 5 years which can be extended further by filing the relevant application online. 
            However, in the states like Chhattisgarh & Uttarakhand, it is valid for one year only.`} />
                    <FAQItem number={4} ques={"What is the Government fee for PSARA Licence?"}
                        answer={`The government fees payable can be divided into the given categories:

            For one district -- Rs. 5,000/-
            For 2 to 5 districts in a state -- Rs. 10,000/-.
            For the entire state -- Rs. 25,000/-.`} />
                    <FAQItem number={5} ques={"What is the role of Supervisor so appointed by the Private security agency in India?"}
                        answer={`Supervisors are liable to administer the agency’s operation and all the affairs related to security guards.`} />
                    <FAQItem number={6} ques={"What are the provisions regarding the License renewal?"}
                        answer={`The application pertaining to license renewal must be filed 45 days prior to the expiration date.`} />
                    <FAQItem number={7} ques={"Is the grant of PSARA license is done on the state-wise basis?"}
                        answer={`Yes, the grant of PSARA license is done on the state-wise basis.`} />
                    <FAQItem number={8} ques={"List down some key documentations for obtaining PSARA license in India?"}
                        answer={`MOA, GST registration, MoU with training institute, PF and ESIC Registration, so and so forth.`} />
                    <FAQItem number={9} ques={"Still Confused?"}
                        answer={`Speak to our experts who shall
            solve all your
            doubts.
            Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />

                </div>
            </div>

        </section >
    </>);
}

export default NGOAdvocacy