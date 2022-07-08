import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './ngoDarpan.css';
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
                <h1>NGO Darpan Registration</h1> <br />
                <p>NGOs work towards good causes and the government supports them with many exemptions and relaxations. To be eligible for these,
                    an NGO is required to be enrolled on the government’s registry of NGOs: Darpan.
                    Medsys specialises in a seamless Darpan registration so your organisation can focus on what it does.</p><br />

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
            <p>Contact us to know more about how we can help you with NGO Darpan</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>

        <div id="ngo-darpan-info">
            <h1 className="heading">NGO Darpan Registration</h1>
            <div className="boxx1">
                <span>
                    <p>NGOs work towards good causes and the government supports them with many exemptions and relaxations.
                        To be eligible for these, an NGO is required to be enrolled on the government’s registry of NGOs: Darpan.
                        Medsys specialises in a seamless Darpan registration so your organisation can focus on what it does.</p>
                </span>
                <ul id="list">
                    <li className="arroww1"><b>STEP 1:</b>
                        <h4 style={{ color: '#9D3E55', paddingLeft: '75px' }}>Right Entity Selection</h4>
                    </li>
                    <p style={{ paddingLeft: '75px' }}>Our experts will guide you on which entity is best suited for you.</p>
                    <li className="arroww1"> <b>STEP 2:</b>
                        <h4 style={{ color: '#9D3E55', paddingLeft: '75px' }}>Online Paperwork</h4>
                    </li>
                    <p style={{ paddingLeft: '75px' }}>We address all your queries regarding the process and assist you in gathering all
                        the necessary documents.</p>
                    <li className="arroww1"><b>STEP 3:</b>
                        <h4 style={{ color: '#9D3E55', paddingLeft: '75px' }}>Registration </h4>
                    </li>
                    <p style={{ paddingLeft: '75px' }}>We complete the registration process on your behalf and make the necessary
                        filings.</p>

                </ul>
            </div>
        </div>
    </>);

}

function NGODarpan() {
    TabTitle('NGO Darpan Registration - medsysconsultancy.com');

    return (<>
        <Header />

        <section className="main-content">
            <div className="left" id="lefty">
                <div id="activeTableContentaa" style={{ height: 'auto' }}>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-overview',
                        'content-advantages',
                        'content-checklist',
                        'content-docs-req',
                        'content-plc',
                        'content-howto',
                        'content-faq',
                    ]}>
                    <li> <a className="tabanchor" href="#overview">Overview</a></li>
                    <li> <a className="tabanchor" href="#advantages">Advantages</a></li>
                    <li> <a className="tabanchor" href="#checklist">Checklist</a></li>
                    <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                    <li> <a className="tabanchor" href="#process">How to Register?</a></li>
                    <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact" style={{ marginTop: 'auto', marginLeft: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

            </div>

            <div className="right1">
                <div className="necessity" id="overview" style={{ fontSize: '1rem' }}>
                    <div className="necessity" id="content-overview">
                        <h1 id="overview">Overview</h1>
                        <br />
                        <p className="gap">The NGO Darpan is a service provided by NITI Aayog that allows VOs (village organisations)
                            and NGOs (non-government organisations)
                            to be eligible for new government schemes and grants. This platform works with the NIC and NITI Aayog to
                            strengthen the relationship between the government and non-profit organisations.
                            <br /><br />
                            Furthermore, completing the NGO Darpan registration process provides greater responsibility and
                            credibility to non-profit organisations. The portal has evolved and fully matured into an e-governance
                            application that
                            helps create a more transparent and healthy relationship between NGOs and the government.
                            Apart from that, any NGO/VO registered as a society/trust/private non-profit under Section 25 of the
                            Companies Act, 2013 or 1956 may apply for NGO Darpan registration.
                        </p>

                    </div>


                    <br /><br />
                    <div className="ICI necessity" id='content-advantages'>
                        <h1>Advantages</h1>
                        <br />
                        <ul>
                            <li>Assists NGOs and other VOs in interacting and engaging with government departments.</li>
                            <li>Obtain a unique ID to help the NGO's credibility and goodwill</li>
                            <li> Department and Ministry websites collaborate with NGO Darpan to share critical information.</li>
                            <li> Up-to-date information on new schemes, projects, and the status of previous initiatives.</li>
                            <li id="checklist"> Contributes to the creation of a database or repository of information about VOs/NGOs.
                            </li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI necessity" id='content-checklist'>
                        <h1>Checklist</h1><br />
                        <br />
                        <p>The organisation should be registered as Section 8 company, public charitable trust, or society.</p>

                        <br />
                        <h3>Time Taken:</h3>
                        <p>NGO Darpan is usually registered within 1 week from the date of submission of documents. In case there is
                            objection raised, that may lead to delays.</p>
                        <br />
                        <h3>Eligibility:</h3>
                        <p id="documents">Any VO/NGO registered as a trust/society/private limited nonprofit company under
                            Section-25 Company of the Indian Companies Act, 1956 is eligible to register under NGO Darpan.</p>
                        <br />
                    </div>

                    <br /><br />
                    <div className="ICI necessity" id="content-docs-req">
                        <h1>Documents Required</h1>
                        <br />
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

                        </ul>
                    </div>


                    <div className="plc" id="content-plc">
                        <p>Related Read:Copyright Vs. Patent Vs. Trademark: Which One Is Right For You?</p>
                        <button type="submit" className="button"> <a href="">CLICK HERE</a></button>
                    </div>
                    <p id="process"></p>
                    <br /><br />

                    <div className="ICI necessity" id="content-howto">
                        <h1>How to Register?</h1>
                        <br />
                        <p>The government now requires NGOs and VOs to complete their Darpan registration online. To be eligible for
                            FCRA registration and to apply for other government grants,
                            the NGOs will need the NGO certificate or a unique ID. Here's a quick overview of the NGO Darpan
                            procedure.</p>
                        <ul>
                            <li>
                                <b>Step 1:</b> Visit the NGO Darpan’s official website
                            </li>
                            <li>
                                <b>Step 2:</b> Click on the ‘sign up’ button and create a user ID and password
                            </li>
                            <li>
                                <b>Step 3:</b> Then, select registration and fill out all of the necessary information about your NGO
                            </li>
                            <li>
                                <b>Step 4:</b> During this step, you will be required to provide basic contact information as well as
                                information about your PAN card
                            </li>
                            <li>
                                <b>Step 5:</b> Once you receive OTP on your registered mobile number, you can use it for verification
                                and password generation
                            </li>
                            <li>
                                <b>Step 6:</b> Log in using and choose the appropriate industry, fill in the achievements section and
                                enter the address
                            </li>
                            <li>
                                <b id="faq">Step 7:</b> Finally, click on the ‘submit’ button.
                            </li>

                        </ul><br />

                    </div>


                    <div className="faq necessity" id="content-faq">
                        <h1>FAQs</h1>
                        <br /><br />


                        <FAQItem number={0} ques="Is it mandatory for an NGO to do NGO Darpan Registration?"
                            answer={`Completing NGO Darpan Registration is mandatory in order to possess any credibility as a
            non-profit organisation and to be eligible for new government schemes and grants.`} />
                        <FAQItem number={1} ques="Do I have to be physically present during the process?"
                            answer={`The process is 100% online. So, it doesn’t require your physical presence at any stage.
            Relax in the comfort of your home while we take care of everything.`} />
                        <FAQItem number={2} ques="How long does it take to get the Darpan registration done?"
                            answer={`NGO Darpan is usually registered within
            1 week from the date of submission of docubuttonments.`} />
                        <FAQItem number={3} ques="What is the validity of the Darpan registration?"
                            answer={`Darpan registration is a one-time requirement. You have to register only once and it doesn’t need
            any renewals.`} />
                        <FAQItem number={4} ques="How much does it cost for NGO registration?"
                            answer={`You can easily register your NGO with Medsys starting ₹3999/- only.`} />
                        <FAQItem number={5} ques="What are the best practices in NGO darpan?"
                            answer={`Some of the best practices are: Understand the constituents for your grant proposal Target your efforts towards relevant grant proposals and agencies Keep an eye out for medium-sized businesses and funding agencies Highlight your internal evaluation and reporting systems in grant proposals Explain your internal systems in grant proposals.`} />
                        <FAQItem number={6} ques="Still Confused?"
                            answer={`Speak to our experts who shall
            solve all your
            doubts.
            Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default NGODarpan;