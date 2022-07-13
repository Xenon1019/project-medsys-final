import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './isoCertification.css';
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';
import isoImage from './ISO documents.png';

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
                <span className="accordion__icon"><i className="fa fa-plus"></i></span>
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
                <h1>Apply online ISO Certificaton</h1> <br />
                <p>Get a quick online ISO Certification for your business. Medsys helps you in the entire process of securing ISO Certification in India. ISO 9001, ISO 14001, ISO 27001, ISO 45000, ISO 50001 and many more….</p><br />

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


function ISOCertification() {
    TabTitle('ISO Certification - medsysconsultancy.com');
    return (<>
        <Header />

        <section className="main-content">
            <div className="left" id="lefty">
                <div id="activeTableContentaa" style={{ height: 'fit-content' }}>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-overview',
                        'content-about',
                        'content-iaf',
                        'content-help',
                        'content-useful',
                        'content-best',
                        'content-categories',
                        'content-process',
                        'content-docs',
                        'content-attachments',
                        'content-faq'
                    ]}>
                        <li> <a className="tabanchor" href="#overview">Overview</a></li>
                        <li> <a className="tabanchor" href="#importance">About ISO Certification</a></li>
                        <li> <a className="tabanchor" href="#laws">What is IAF? </a></li>
                        <li> <a className="tabanchor" href="#eligibility"> ISO in Business expansion</a></li>
                        <li> <a className="tabanchor" href="#form">ISO 9001 To Small Business</a></li>
                        <li> <a className="tabanchor" href="#checklist">Best ISO for my Business</a></li>
                        <li> <a className="tabanchor" href="#category">Categories of ISO</a></li>
                        <li> <a className="tabanchor" href="#attachment">Process Flow </a></li>
                        <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                        <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact" style={{ marginTop: 'auto', marginLeft: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

            </div>


            <div className="right1 necessity">

                <div className="necessity" id="content-overview">
                    <h1>Overview</h1>
                    <br />
                    <p className="gap">The International Organization for Standardization is a worldwide autonomous body for setting
                        various global standards for quality management.
                        It comprises of representative standardization organizations from various nations.
                        Established in 1947, the ISO frames and promotes worldwide industrial and commercial standards.
                        <br />
                    </p>
                    <p id="importance"></p>

                </div>
                <br /><br />

                <div className="ICI necessity" id="content-about">
                    <h1>About ISO Certification</h1>
                    <br />

                    <ul>

                        <h3>Set of Standards</h3>
                        <p>The International Organization for Standardization's ISO series describes set of standards for a
                            Quality Management System based on the process model.</p>
                        <br />
                        <h3>Customer Satisfaction</h3>
                        <p>ISO certification emphasis on achieving customer satisfaction for any general product or service.</p>
                        <br />
                        <h3>Ensure Quality</h3>
                        <p>A certified quality management system demonstrates entity commitment to quality product and/or services and
                            customer satisfaction.</p>
                        <br />
                        <h3>Fulfill Tender Eligibility</h3>
                        <p>ISO certification an essential requirement before carrying on business with a new vendor & eligibility to
                            enter global markets.</p>
                        <br />
                        <h3> Increase Business</h3>
                        <p>ISO certification helps business entity winning private & public contracts.</p>
                        <br />
                        <h3>Operational Efficiency</h3>
                        <p id="laws">ISO certification helps in build customer satisfaction & improve operational efficiency within
                            the organization.</p>

                    </ul>
                </div>
                <br /><br />
                <div className="necessity" id="content-iaf">
                    <h1>What is IAF?</h1>
                    <br />
                    <p className="gap">IAF stands for International Accreditation Forum. IAF is the world most recognised association of
                        global Accreditation bodies and
                        that are responsible for conformity assessment in various fields of quality management systems. An ISO
                        Certification issued by IAF member accreditation body carries more value and recognition in the world.
                        Even though, Government authorities prefer it for fulfilling eligibility criteria of government tenders.
                        <br />

                    </p>
                    <p id="eligibility"></p>
                </div>
                <br /><br />
                <div className="necessity" id="content-help">
                    <h1>How does ISO Certification help in Business expansion?</h1>
                    <br />
                    <p className="gap">It’s become very difficult to grab a global buyer outside the country local boundaries for the
                        indigenous product. In today’s competitive global market, the buyers are looking for a top-notch quality
                        product with 0% defect. Here ISO certification play vital role to expand your business global presence.
                        ISO Certification logo ensure buyers a international quality of product before making an order. This way, ISO
                        certification can help you to enter the global markets easily.
                        <br />

                    </p>
                    <p id="form"></p>
                </div>

                <br /><br />
                <div className="necessity" id="content-useful">
                    <h1>How is ISO 9001 Usefull to small Businesses?</h1>
                    <br />
                    <p className="gap">Evidently, the most recent version of ISO 9001, i.e. ISO 9001:2015 is much lucrative for small
                        and medium enterprises.
                        There are innumerable benefits for small businesses such as
                        <br />
                        The ISO 9001:2015 standard throws light on the results and is less rigid in terms of paperwork.
                        <br />
                        This ISO certification standard is highly flexible and can be easily adaptable by small enterprises,
                        especially those dealing with providing services.<br />
                        ISO certification 9001:2015 provides all relevant guidelines for organizational growth rather than merely
                        focusing on how to run your business.<br />
                        As a matter of fact, many small businesses are now adopting ISO certification 9001 due to its simplicity.<br />
                        Besides, it is more helpful in achieving desired results that can be noticed by target customers. Find out
                        more on ISO certification…
                    </p><br />
                    <h3>Can I implement ISO 9001 QMS without hiring a consultant?</h3>
                    <p>Yes, absolutely. In fact, there are many benefits to implementing ISO 9001 without a consultant, not just the
                        obvious one: cost.
                        Today being cost effective is a goal for every business, an ISO 9000 Consultant is a luxury that many
                        companies want to avoid. But how can you be responsible for implementing ISO certification 9001, if you have
                        not done it before?
                        Yes you can do it, if you get an ISO certification 9001 implementation effective tools. We offer procedures,
                        forms, a quality manual and tutorial videos developed by highly experienced ISO 9001 consultant in a wide
                        range of industries.
                        Our ISO 9001 implementation kit can be a very cost-effective alternative, rather than hiring ISO 9000 QMS
                        consultant for implementation.</p>
                    <br />
                    <br />
                    <h3 id="checklist">Can I be certified with multiple ISO standards at a same time?</h3>
                    <p> Yes, you can get ISO Certification under multiple ISO Standards. This way, you will get additional
                        recognition in the market.
                        The ISO 9001 standard has been harmonized with other standards such as ISO 14001 and ISO 27001, which means
                        they have similar requirements clauses. For example both ISO 9001 and ISO 27001 require management reviews,
                        internal audits, Document Control procedure, etc.
                        With the appropriate analysis and planning, your organization could save time and money by combining these
                        steps to avoid redundancy.
                    </p>
                </div>
                <br /><br />
                <div className="necessity" id='content-best'>
                    <h1>Which ISO Certification best for my business?</h1>
                    <br />
                    <p className="gap">There are different kind of ISO Certification Standards which focus on different aspect of
                        business or organisational activity. ISO 9001 focus quality management system which helps organisation to
                        enhance customer satisfaction with
                        company product and services. Similarly ISO 14001 focus on environmental management and so on.
                        Before obtaining ISO certification, you must have look into your entire business process thoroughly and
                        analysis which part or parts of the process you desire to standardized with ISO standards. Accordingly choose
                        the ISO certification.
                        <br />

                    </p>

                    <p id="category"></p>
                </div>

                <br /><br />
                <div className="ICI necessity" id="content-categories">
                    <h1>Broad Categories of ISO Certification Standards</h1>
                    <br />

                    <ul>

                        <li><b>ISO 9001</b> ensure company product & services meets customer expectations and enhance customer
                            satisfaction.</li>
                        <li><b>ISO 14001</b> maps out a framework that an organization can follow to set up an effective environmental
                            management system.</li>
                        <li><b>OHSAS 18001</b> allows a company to show their customers that company has effective health and safety
                            management system.</li>
                        <li><b>ISO 22000</b> allows a company to show their customers that company has effective food safety
                            management.</li>
                        <li><b>ISO 20000</b> allows demonstrating excellence and prove best practice in IT & improvement in the
                            delivery of IT services.</li>
                        <li><b>ISO 27001 </b> describes a best practice of company who involves in the information security management
                            system (ISMS).</li>
                        <li><b>CE Marking</b> on any brand is a manufacturer's affirmation that the product has complied with the
                            necessary requirements of the applicable European health, safety, and environmental protection benchmark.
                        </li>
                        <li><b>ISO 50001</b> describes best energy management practices which outline using energy
                            efficiently helps organizations save
                            money as well as helping to conserve resources and tackle climate change.</li>
                    </ul>
                </div>
                <br /><br />
                <div className="ICI necessity" id="content-process">
                    <h1>Process Flow</h1>
                    <br />
                    <ul>

                        <h3>
                            <li>Step 1</li>
                        </h3>
                        <p>Upload the required documents & information to our web portal.</p>
                        <h3>
                            <li>Step 2 </li>
                        </h3>
                        <p>Consult our business advisor regarding various accreditation body and standards.</p>
                        <h3>
                            <li>Step 3 </li>
                        </h3>
                        <p>Our professional will verify the validity of documents & Information provided.</p>
                        <h3>
                            <li>Step 4</li>
                        </h3>
                        <p>On Confirmation, make online payment with different payments modes available.</p>
                        <h3>
                            <li>Step 5</li>
                        </h3>
                        <p>Carry ISO Consultancy, Documentation and Implementation.</p>
                        <h3>
                            <li>Step 6</li>
                        </h3>
                        <p id="documents">On successful audit, Independent certification body shall issue ISO certificate</p>
                    </ul>

                </div>
                <br /><br />
                <div className="ICI necessity" id="content-docs">
                    <h1>Documents Required</h1>
                    <br />

                    <ul>
                        <h3>
                            <li>Business Registration Proof</li>
                        </h3>
                        <p>A document proof of business required such as certificate of incorporation, GST certificate, MSME
                            certificate, Trademark certificate, etc.</p>
                        <h3>
                            <li>Letter Head or Visiting Card</li>
                        </h3>
                        <p>A Letter Head or Visiting Card of the business required for which you are looking for ISO certification.
                        </p>
                        <h3>
                            <li>Sales and Purchase Invoice</li>
                        </h3>
                        <p id="attachment">A Sale and Purchase Invoice evidencing the nature of business activity for which you’re
                            securing ISO certification.</p>
                    </ul><br />
                </div>
                <img src={isoImage} style={{ paddingLeft: '100px' }} />
                <br /><br />
                <div className="ICI necessity" id="content-attachments">
                    <h1>Attachments Required for Filing Form CSR-1</h1>
                    <br />
                    <ul>
                        <li>Company CSR policy</li>
                        <li>Company CSR report</li>
                        <li>Company sustainability report</li>
                        <li>Details of subsidiary(s)</li>
                        <li id="faq">Details of other entity(s).</li>
                    </ul>
                </div>

                <br /><br />

                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />

                    <FAQItem number={0} ques={"What is ISO?"}
                        answer={`ISO Stands for International Standards of Organization.
                        ISO is an independent, non-governmental international organization with a membership of 162 national
                        standard bodies`} />

                    <FAQItem number={1} ques={"What are the benefits of ISO certification?"}
                        answer={`The ISO standards have their own benefits under their particular domain within every industry.
                        However, the common benefits of ISO certifications involve enhanced quality efficiency, tapping of
                        market potential, ease in fulfilling eligibility for tenders, high level of client satisfaction a and
                        increased morale of employees.
                        By having a recognized management standard it tells your customers that you are keen to meet their
                        expectations.`} />

                    <FAQItem number={2} ques={"What is the criteria for ISO 9001 certification?"}
                        answer={`Any business entity can obtain ISO certification registration whether it is small, medium or big
                        enterprises.`} />

                    <FAQItem number={3} ques={"What is the process of getting ISO certified?"}
                        answer={`In order to obtain ISO certificate, you need to hire a consultant or professional for proper
                        documentation of your organisation process and to
                        get proper staff training to comply ISO standards. Then your business will be awarded ISO 9001 2015
                        certification.`} />

                    <FAQItem number={4} ques={"What is the key distinction between various accreditation bodies giving ISO certificates?"}
                        answer={`There isn’t any difference between accreditation bodies, all of them are providing ISO Certification
                        The only difference you can mark is of market recognition, branding, and their prices. `} />

                    <FAQItem number={5} ques={"How much time it will take in getting final certificate?"}
                        answer={`On providing the correct documents and information of business you can obtain the final certificate
                        within 7-45 working Days.`} />

                    <FAQItem number={6} ques={"Will my business details listed on accreditation body website?"}
                        answer={`Yes, we will make sure that your complete company details shall be published over accreditation body
                        website on after obtaining ISO certification`} />

                    <FAQItem number={7} ques={"What is the validity of ISO certificate?"}
                        answer={`Generally ISO certificate will be valid for 3 years subject to surveillance`} />

                    <FAQItem number={8} ques={"What is the authenticity of the certificate you provide?"}
                        answer={`Once your business gets ISO certified, the company details shall be published over an accreditation
                        body’s website this will ensure the authenticity of the certificate`} />

                    <FAQItem number={9} ques={"Where do I check that I am an ISO 9001 certified entity?"}
                        answer={`When your business entity gets ISO 9001 certified you will receive a certificate bearing a unique
                        certificate number, i.e. ISO 9001.
                        Using such unique number over accreditation’s body website you can verify that your business is an ISO
                        9001 certified entity `} />

                    <FAQItem number={10} ques={"Do you provide this service in my town?"}
                        answer={`Yes, we can assist you in obtaining an ISO certificate in India through various well know
                        accreditation body exist in India.`} />

                    <FAQItem number={11} ques={"What is the cost of getting ISO Certified?"}
                        answer={`The cost of obtaining an ISO certificate in India depends upon various aspects, including in
                        accreditation body from which
                        you want to be ISO certified, nature of the business, size of organisation, level of ISO 9001
                        Compliance, etc`} />

                    <FAQItem number={12} ques={"What is the ISO 9001 2015 certification cost?"}
                        answer={`ISO certification 9001 cost vary body to body. Ask our adviser for best prevailing rate for get ISO
                        Certificate.`} />

                    <FAQItem number={13} ques={"Still Confused?"}
                        answer={`Speak to our experts who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />

                </div>
            </div>

        </section >
    </>);
}

export default ISOCertification;