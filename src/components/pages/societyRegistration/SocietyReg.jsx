import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './societyReg.css';
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';
import bg from "./bg.png";

function numberToLetter(num) {
    let ascii = 'a'.charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}

const points = [
    {
      head: "Business Served",
      icon: businessLogo,
    },
    {
      head: "9.6/10 Unfiltered Customer ratings",
      icon: starLogo,
    },
    {
      head: "Satisfaction or Money Back Guarantee",
      icon: smileLogo,
    },
  ];

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
        

        <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
            <h1 className="text-5xl font-semibold">Online Society Registration India</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
            Registration of society is required to promote the fine arts, science, literature, or knowledge sharing for a purposeful matter or for charity.
            </p>
          </div>
          <div className="sm:w-2/3 mx-auto text-lg p-5 text-rose-200">
            {points.map((p) => (
              <div className="flex gap-3 py-2">
                <div>
                <img className="h-7 w-7" src={p.icon} alt="" />
                </div>
                <div>{p.head}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-3 py-9">
          <form className="mx-auto sm:w-2/3 bg-white p-6 px-6 rounded-md">
            <div className="flex flex-col text-gray-600 py-2">
              <label>Full Name</label>
              <input
                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                type="text"
              />
            </div>
            <div className="flex flex-col text-gray-600 py-2">
              <label>Phone Number</label>
              <input
                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                type="number"
              />
            </div>
            <div className="flex flex-col text-gray-600 py-2">
              <label>E-mail</label>
              <input
                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                type="e-mail"
              />
            </div>
            <button className="w-3/4 py-2 mt-5 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
              Request a Callback
            </button>
          </form>
        </div>
      </div>

        <div className="top-footer">
            <p>Contact us to know more about Society Registration</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>

        <div id="society-regInfo">
            <h1 className="heading">How To Register A Trust Online?</h1>
            <div className="boxx1">
                <p>Trust Registration requires important documents like trust deed and rental agreement. Our service experts help
                    you with the complete procedure for the formation of trust while taking care of all the legal intricacies</p>
                <ul id="list">
                    <li className="arroww1"><b>STEP 1:</b> </li>
                    <p style={{ paddingLeft: '75px' }}>We address all your queries about Trust registration online</p>
                    <li className="arroww1"> <b>STEP 2:</b></li>
                    <p style={{ paddingLeft: '75px' }}>We help you get the entire process of filing and registration completed.</p>
                    <li className="arroww1"><b>STEP 3:</b></li>
                    <p style={{ paddingLeft: '75px' }}>We help you with the post-registration formalities and compliances.</p>

                </ul>


            </div>

        </div>
    </>);

}

function SocietyReg() {
    TabTitle('Online Society Registration - medsysconsultancy.com');

    return (<>
        <Header />


        <section className="main-content">
            <div className="left" id="lefty">
                <div id="activeTableContentaa" style={{ height: 'auto' }}>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-overview',
                        'content-process',
                        'content-compliances',
                        'content-docs',
                        'content-tax',
                        'content-why-medsys',
                        'content-faq',
                    ]}>
                        <li> <a className="tabanchor" href="#overview">Overview </a></li>

                        <li> <a className="tabanchor" href="#process">Online Registration Process</a></li>

                        <li> <a className="tabanchor" href="#compliance">Society compliances</a></li>

                        <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                        <li> <a className="tabanchor" href="#exemption">Applicability of tax exemption</a></li>
                        <li> <a className="tabanchor" href="#reg">Why Medsys</a></li>
                        <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>

                <button type="submit" id="contact" style={{ marginTop: 'auto', mariginLeft: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

            </div>

            <div className="right1 necessity" id="overview" style={{fontSize:'1rem'}}>
                <div className="necessity" id="content-overview">
                    <h1 id="overview">Overview</h1>
                    <br />
                    <p className="gap" id="process">A society is an organization in which a group of individuals with similar interest
                        come together to perform some functions. The said societies are governed by the Societies Registration Act
                        of 1860 and the said act is amended by the respective states.
                        The societies are registered and governed as per the said act. Registration of society is required to
                        promote the fine arts, science, literature, or knowledge sharing for a purposeful matter or for charity.
                        On the other hand, society is also formed for the maintenance of a residential or commercial complex or for
                        creating the Apartment Association.
                    </p>

                </div>

                <div className="ICI necessity" id="content-process">
                    <h1>Online Society Registration-Process</h1>
                    <br />
                    <p>For registering a society, the following criteria must be fulfilled:</p>
                    <ul>

                        <li><b>Members:</b>Minimum of seven members for a state society and a minimum of eight members from eight
                            different states (one in Delhi) compulsory</li>
                        <li><b>Jurisdiction:</b>Where the registered office of the society is situated. Before the District
                            Registrar in the particular area. For example, Charity Commissioner in Maharashtra.</li>
                        <li><b>Governing Act:</b>The societies are governed by the Societies Registration Act of 1986.</li>
                        <li><b>Property management: </b>The property of the society vests in the name of the society and the same
                            can be sold as per the terms mentioned in the bye-laws of the society. (e.g., approval from the Executive
                            Committee Member)</li>

                        <li><b>Dissolution or closure: </b>Dissolution as per the bye-laws of the society, upon dissolution and
                            after settlement of all debts and liabilities, the funds and property
                            of the society may not be distributed among the members of the society, rather, the remaining funds and
                            property must be given or transferred to some other society, preferably one with similar objects.</li>
                        <li><b>Board: </b> Executive Committee(President, Secretary, Vice President, Treasurer), General Body (All
                            members)</li>
                        <li><b id="compliance">Annual compliance: </b>Societies must file annually, with the Registrar of Societies,
                            a list of the names, addresses and occupations of their managing committee members.</li>


                    </ul>
                </div>

                <br /><br />
                <div className="ICI necessity" id="content-compliances">
                    <h1>Society compliances</h1>
                    <br />
                    <p>A trust shall after its registration shall do the following:</p>
                    <ul>

                        <li>Obtain PAN card</li>
                        <li>Open a bank account</li>
                        <li>Bookkeeping and accounts</li>
                        <li>Annual IT filings</li>
                        <li>Professional tax registration, if applicable</li>
                        <li>GST registration, if applicable</li>
                        <li id="documents">Compliance with the Registrar of Firm - Filing of AGM resolution, accounts to be
                            disclosed and member list to be filed with the Registrar of Firms.</li>
                    </ul>
                </div>

                <br /><br />
                <div className="ICI necessity" id="content-docs">
                    <h1>Documents Required for trust registration certificate</h1>
                    <br />
                    <ul>

                        <li>PAN Card</li>
                        <li>Residence Proof</li>
                        <li>Memorandum of Association</li>
                        <li>Article of Association</li>
                    </ul>

                </div>
                <br />

                <p id="exemption"></p>
                <br /><br /><br />

                <div className="necessity" id="content-tax">
                    <h1>Applicability of tax exemption</h1>
                    <br />
                    <p className="gap">There is a general notion that society need not pay tax as they work towards the welfare of the
                        public at large. But this is not true.
                        A society, like any other legal entity, is liable to pay tax. In order to be exempted from tax, a society is
                        required to obtain certification for
                        the said exemptions such as Section 12 A, 80G etc. from the income tax authorities.
                    </p>
                    <p id="reg"></p>

                </div>

                <br /><br />
                <div className="ICI necessity" id="content-why-medsys">
                    <h1>Why Medsys For Online Registration</h1><br />

                    <ul>
                        <li>A full consultation to understand your requirement and to explain you the process from end to end</li>
                        <li>All the paperwork needed to apply for a society registration, we will keep you informed about the entire
                            process and progress</li>
                        <li id="faq">We help you with all the processes and procedures needed for registering your society</li>

                    </ul>
                    <br />
                </div>
                <br /><br />

                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />

                    <FAQItem number={0} ques="Is there any maximum limit for the number of members in the
                    society?"
                        answer={`No. The society can any have any number of members. There is no prescribed upper limit
                        according to the Societies Registration Act. However, there needs to be a minimum of 7 members.`} />
                    <FAQItem number={1} ques="In what other ways an NGO can be registered in India?"
                        answer={`Based on the cause and objectives, NGOs can be registered online as Trust or Section 8 companies.`} />
                    <FAQItem number={2} ques="Are government employees or officers allowed to be members of
                    NGO?"
                        answer={`Yes. Government employees or officers can be part of NGOs, provided the NGO is not working towards
                        any anti-government activities or programmes.
                        The intended members should ensure the
                        particular organization is not profit making and that its members do not draw any salary from the
                        NGO.`} />
                    <FAQItem number={3} ques="How is the property of the society managed?"
                        answer={`The property of the society vests in the name of the society and the same can be sold as per the
                        terms mentioned
                        in the bye-laws of the society. (e.g., approval from the Executive Committee Member)`} />
                    <FAQItem number={4} ques="Still Confused?"
                        answer={`Speak to our experts who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />
                    
                </div>
            </div>
        </section>
    </>);
}

export default SocietyReg;