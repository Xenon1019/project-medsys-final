import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './startup.css'
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
                <h1>Startup India Scheme</h1> <br />
                <p>The Startup India campaign is a welcome initiative to boost entrepreneurship in India. It promotes bank
                    financing, simplifies the incorporation process and grants exemptions to startups. But, you need to
                    qualify as an “Eligible Startup” to avail all these benefits!!</p><br />

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
            <p>Contact us to know more about Society Registration</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>

        <div id="startup-info"  >
            <h1 className="heading">What Is A Startup India Scheme?</h1>
            <div className="boxx1">
                <p>Startup India Scheme is an initiative by the Government of India for generation of employment and
                    wealth creation. The goal of Startup India is the development and innovation of products and services
                    and

                    increasing the employment rate in India .
                </p>

            </div>
        </div>
    </>);

}

export default function Startup() {
    TabTitle('Startup India Scheme - medsysconsultancy.com');

    return (<>
        <Header />

        <section className="main-content">
            <div className="left" id="lefty">
                <div id="activeTableContentaa h-fit">
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view"
                        items={[
                            'overview',
                            'content',
                            'content-checklist',
                            'process',
                            'eligibility',
                            'faq',
                        ]}>
                        <li> <a className="tabanchor" href="#overview ">Overview</a></li>
                        <li> <a className="tabanchor" href="#content">Benefit </a></li>
                        <li> <a className="tabanchor" href="#laws">Checklist </a></li>
                        <li> <a className="tabanchor" href="#process">Process</a></li>

                        <li> <a className="tabanchor" href="#eligibility">Recent update</a></li>

                        <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact"><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

            </div>


            <div className="right1 necessity" id="Overview">
                <div className="necessity">
                    <h1 id="overview">Overview</h1>
                    <br />
                    <p className="gap">The Startup India Scheme is an initiative by the government of India aimed at
                        encouraging the development and innovation of products and services and the creation of
                        employment opportunities across the country. One of the goals of the scheme has been simplifying
                        how to register a startup in India by reducing regulatory burdens and allowing them to focus on
                        their core business while keeping compliance costs low and also providing multiple benefits,
                        aside from the massive networking opportunities provided by the bi-annual startup festivals held
                        by the Government of India both domestically and internationally.

                        <br />
                    </p>


                </div><br />
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">

                </iframe>
                <br /><br />

                <div className="ICI necessity" id="content">
                    <h1> Benefits of Startup India Scheme</h1><br />
                    <h3>Income Tax Benefits</h3>
                    <p>Startups are now given an Income tax exemption for a period
                        of three years from the date of
                        incorporation provided they are certified as such by the Inter-Ministerial Board of
                        Certification. Also, upon obtaining recognition from the DPIIT (Department for Promotion of
                        Industry and Internal Trade), and if the aggregate amount of paid-up share capital and share
                        premium of the startup after the proposed issuing of shares, if any, does not exceed INR 25
                        Crore, the startup will also be exempt from capital gains tax under Section 56 of Income
                    </p>
                    <br />
                    <h3>Financial Benefits</h3>
                    <p>Startups are given a rebate on intellectual property rights (IPR) costs of 80% on patents and 50%
                        on Tradmark and are actively assisted by
                        government-provided facilitators who aid with
                        protecting and commercializing the IPRs. The examination and disposal of the IPR applications
                        are also fast-tracked. The government will also pay the fees of the facilitators.
                    </p>
                    <br />
                    <h3> Registration Benefits</h3>
                    <p>Startup registration in India is still extremely complex, with incorporation and registration
                        being considered more difficult than the actual running of a business due to the arduousness of
                        the requirements. Under the scheme, the Startup India Hub, a portal to create networking
                        opportunities and assistance for startups, has been created with a problem-solving window being
                        provided by the government under the scheme.
                    </p><br />
                    <h3> Funding Benefits</h3>
                    <p>Certain states provide seed funding to startups certified under the scheme. To know about your
                        state and the requirements in place, Click here
                    </p><br />
                    <h3> Regulatory Benefits</h3>
                    <p>Under the Startup India Scheme, startups are allowed to self-certify compliance for six
                        labour laws and three environmental laws through a simple online procedure. For labour laws, no
                        inspections will be conducted for a period of 5 years unless there is a credible and verifiable
                        complaint of violation, filed in writing, and approved by an official who is at least one level
                        senior to the inspecting officer. In the case of environmental laws, startups that fall under
                        the ‘white category’ (as defined by the Central Pollution Control Board) would be able to
                        self-certify compliance, and only random checks would be carried out in such cases
                    </p><br />
                    <h3> Public Procurement Benefits</h3>
                    <p>Once your startup is certified by the Inter-Ministerial Board of Certification and a DIPP
                        (Department of Industrial Policy and Promotion) number has been issued to you, you can get
                        listed as a seller on the Government of India’s e-procurement portal – Government e-Marketplace
                        – and have the inside track on all Government of India Ministries/Departments/Public Sector
                        undertakings subject to your ability to meet quality and technical requirements. Certified
                        startups will also be entitled to exemptions on the earnest money deposit in your bid as well as
                        in terms of the requirements regarding prior turnover and experience.
                    </p><br />
                    <h3> Faster Exit Benefits</h3>
                    <p>The government has initiated provisions making winding down operations easier by appointing
                        an insolvency professional to fast-track the closure of operations and facilitate the sale of
                        goods as well as paying creditors, all while recognising limited liability. Startups with a
                        simple debt structure or those meeting the criteria outlined under this scheme will be able to
                        achieve a complete exit within 90 days.
                    </p><br />

                </div>
                <br /><br />
                <div className="plc">
                    <p>Related Read:How To Register A Company In India: A Step By Step Guide</p>
                    <button type="submit" className="button">
                        <a href="">CLICK HERE</a></button>
                </div>
                <br /><br />
                <div className="ICI" id="content-checklist">
                    <h1 id="laws">Checklist under the Startup India Scheme</h1>

                    <br />
                    <p>An organisation will be eligible under the scheme if</p>
                    <ul>


                        <li>It is incorporated as a private limited company or registered as a partnership firm or a
                            limited liability partnership in India</li>

                        <br />

                        <li>It has been less than ten years from the date of its incorporation/registration </li>

                        <br />

                        <li>Its turnover for any of the financial years since incorporation/registration has not
                            exceeded INR 100 Crores</li>

                        <br />

                        <li>It is funded by an incubation fund, angel fund, or private equity fund that is registered
                            with the Securities and Exchange Board of India (SEBI)</li>

                        <br />

                        <li>It has obtained a patron guarantee from the Indian Patent and Trademark Office</li>

                        <br />

                        <li>It has a recommendation letter from an incubator</li>

                        <br />

                        <li>It has a recommendation letter from an incubator</li>

                        <br />
                        <li>It is working towards the innovation, development, or improvement of products or processes
                            or services, or if it is a scalable business model with a high potential for employment
                            generation or wealth creation</li>
                    </ul>
                </div><br /><br />
                <div id="process" className="ICI">
                    <h1>Process to Register under the Scheme</h1>
                    <br />
                    <p>The most important step is to register the company as one of only three possible types of
                        entities:</p>
                    <br />
                    <ul>

                        <li>Private Limited Company, registered under the Ministry of Corporate Affairs and regulated by
                            the Companies Act, 2013 and the Companies Incorporation Rules, 2014. This type of structure
                            allows directors to be separate from the shareholders and provides limited liability for the
                            shareholders with certain restrictions on ownership. To know more about registering a
                            private limited company, please click here..</li><br />
                        <li>Partnership Firm, registered under the partnership firm act, is a structure where the
                            founders are subject to a partnership deed with the conditions outlined and registered with
                            the registrar of firms. Under this structure, the partners have unlimited liability, which
                            means they are personally liable for the debts of the business. However, low costs, ease of
                            setting up, and minimal compliance requirements make it the easier option for businesses
                            that are unlikely to take on any debt. To know more about registering a partnership firm,
                            please click here..</li><br />
                        <li>Limited Liability Partnership (LLP) registered under the Limited Liability Partnership Act,
                            2008 is a structure wherein a partnership firm takes on the characteristics of a private
                            limited company in terms of facilities such as limited liability and transferability. The
                            LLP structure was introduced into India in 2009 to provide a form of business that is easy
                            to maintain and to help owners by providing them with limited liability. To know more about
                            registering an LLP, please click here.</li><br />
                        <li>Once registered, click here and follow the steps outlined to be recognised by the DPIIT as a
                            startup under the Startup India Scheme, including uploading whatever documents they might
                            request and providing the information requested, such as registration/incorporation number,
                            representatives, directors/partners, address, date of incorporation, and so on.</li>
                    </ul>
                </div><br /><br />


                <div className="ICI necessity" id="eligibility">
                    <h1 id="eligibility">Recent Updates</h1>
                    <br />
                    <b>
                        <p>Startup India Scheme, Records A 60% Rise For Startup Registrations In The Year 2020 FromThe
                            Previous Year:</p>
                    </b>
                    <br />
                    <h3>Dec 16 2020</h3>
                    <p>Prime Minister Modi’s Startup India Scheme recently crossed the 40,000-mark for registered
                        startups, as recognized by the Department for Promotion of Industry and Internal Trade (DPIIT).
                        The total number for 2020 stands at 40,729, as per the latest Government data, which is a 63.4%
                        increase from 24,927 startups registered in 2019 (as recognized by DPIIT).</p>
                </div>
                <br /><br />

                <div className="faq" id="faq">
                    <h1>FAQs</h1>
                    <br /><br /><br />

                    <FAQItem number={0} ques={"What is the legal definition of a startup in India?"}
                        answer={`Only
                        A startup defined as an entity that is headquartered in India, which was
                        opened less than 10 years ago and has an annual turnover of less than ₹100
                        crores (US$14 million).`} />
                    <FAQItem number={1} ques={`How long does it take for a startup to be
                                            successful?`}
                        answer={`Most small businesses take at least 2 to 3 years to be profitable and become
                        truly successful once they've hit the 7 to 10-year mark. Most small
                        businesses take years to be successful, despite the overnight success of
                        companies like Facebook..`} />
                    <FAQItem number={2} ques={`How much time is needed for setting up a private limited company in
                                            India?`}
                        answer={`If you have all the documents in order, it will take no longer than 15 days.
                        However, this is dependent on the workload of the registrar..`} />
                    <FAQItem number={3} ques={`What is the eligibility of designated partners/partners in an LLP?`}
                        answer={`Any individual, or even a company or an LLP, can become a partner. However,
                        only an individual can become a ‘designated partner’ in an LLP.`} />
                    <FAQItem number={4} ques={`What kind of start-ups commonly register
                                            LLPs?`}
                        answer={`Typically, only start-ups that will not be looking for venture capital
                        funding register LLPs. This is because venture capitalists only invest in
                        private and public limited companies..`} />
                    <FAQItem number={5} ques={`Is it cheaper to run an LLP than a private
                                            limited company?`}
                        answer={`Yes, it is much cheaper to run an LLP than a private limited company,
                        particularly in your early start-up days. This is because many compliances,
                        such as an audit, apply to LLPs only after their turnover is sizable. Most
                        LLPs spend about half as much as a private limited company in their first
                        year on registrations and compliance work..`} />
                    <FAQItem number={6} ques={`Which industry is the best in India for a
                                            startup?`}
                        answer={`According to the Economic Times, as of 2020, the top-earning businesses in
                        India are from the financial services, transport and support services,
                        aerospace, defence, and security services, technology services, and health
                        and education services.`} />
                    <FAQItem number={7} ques={`Still
                                            Confused?`}
                        answer={`Speak to our experts
                        who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />


                </div>
            </div>

        </section>

    </>);
}

