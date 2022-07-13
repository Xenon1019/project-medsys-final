import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from "../../Utillity";
import "./fcra.css";
import businessLogo from "./business logo.jpeg";
import smileLogo from "./smile logo.jpeg";
import starLogo from "./star logo.jpeg";
import fcraReg from "./FCRA Registration Page Image.png";

function numberToLetter(num) {
    let ascii = "a".charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}

function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div
            className={
                "accordion__item" + (activated ? " accordion__item--active" : "")
            }
        >
            <button
                className="accordion__btn"
                onClick={() => {
                    toggle(!activated);
                }}
            >
                <span className="accordion__caption">

                    {numberToLetter(props.number) + ". " + props.ques}
                </span>
                <span className="accordion__icon">
                    <i className="fa fa-plus"></i>
                </span>
            </button>

            <div className="accordion__content">
                <p>{props.answer}</p>
            </div>
        </div>
    );
}

function Header() {
    return (
        <>
            <div
                className="application"
                style={{
                    display: "flex",
                    marginTop: "0rem",
                }}
            >
                <div className="header-left-content">
                    <h1>FCRA Registration</h1> <br />
                    <p>
                        The primary objective of FCRA registration is to legalize the receipt of any foreign contribution by domestic
                        entities and for ensuring the proper utilization of such funds for the specified purpose
                    </p>
                    <br />
                    <br />
                    <ul>
                        <li>

                            <img src={businessLogo} alt="" /> <b>Business Served</b>
                        </li>
                        <li>

                            <img src={starLogo} alt="" />
                            <b>9.6/10 Unfiltered Customer ratings</b>
                        </li>
                        <li>

                            <img src={smileLogo} alt="" />
                            <b>Satisfaction or Money Back Guarntee</b>
                        </li>
                    </ul>
                </div>

                <div className="header-right-content">
                    <form action="">
                        <input type="text" name="" placeholder="Full Name" required />
                        <br />
                        <input type="email" name="" placeholder="Email ID" required />
                        <br />
                        <input type="tel" name="" placeholder="Phone No." required /> <br />
                        <button type="submit">

                            <a href="#">Request a Callback</a>
                        </button>
                    </form>
                </div>
            </div>

            <div className="top-footer">
                <p>
                    Contact us for more information related to License and Registration
                </p>
                <button type="submit">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>
            </div>
        </>
    );
}

export default function FCRAReg() {
    TabTitle("Apeda Registration - medsysconsultancy.com");

    return (
        <>
            <Header />

            <section className="main-content">
                <div className="left" id="lefty">
                    <div>
                        <h1>Table Of Contents</h1>
                        <hr />
                        <Scrollspy currentClassName='content-scroll-view'
                            items={[
                                'content-overview',
                                'content-benfits',
                                'content-eligible',
                                'content-docs',
                                'content-procedure',
                                'content-penalities',
                                'content-types',
                                'content-non-eligible',
                                'content-renewal',
                                'content-cancellation',
                                'content-revised',
                                'content-faq',
                            ]}>
                            <li> <a href="#necessity">Overview </a></li>
                            <li> <a href="#benefits">Benefits of FCRA Registration</a></li>
                            <li> <a href="#advantages">Who are Eligible for FCRA R..</a></li>
                            <li> <a href="#services">Documents Required</a></li>
                            <li> <a href="#procedure">Procedure</a></li>
                            <li> <a href="#obj">What are the Penalties for Viola..</a></li>
                            <li> <a href="#fun">What are the Types of Registra..</a></li>
                            <li> <a href="#cert">Non-Eligible Entities for Apply...</a></li>
                            <li> <a href="#doc">Brief on Renewal of FCRA Li..</a></li>
                            <li> <a href="#cancel">Cancellation/Suspension of FC..</a></li>
                            <li> <a href="#rev">Revised Conditions under FC...</a></li>
                            <li><a href="#faq">FAQs</a> </li>
                        </Scrollspy>
                        <br />
                    </div>
                    <button type="submit" id="contact" style={{ marginTop: 'auto', marginLeft: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

                </div>



                <div className="right1" id="necessity">
                    <div className="ICI" id='content-overview'>
                        <h1 id="overview">Overview</h1>
                        <br />
                        <p className="gap">All the Charitable trust, societies and Section 8 Company that receives foreign contribution or
                            donation from foreign resources shall apply for FCRA Registration. FCRA registration is done under the Foreign
                            Contribution Regulation Act, 2010. FCRA stands for Foreign Contribution Regulation Act. The Foreign
                            Contribution Regulation Act, 2010 was enacted with a view to:-
                        </p>
                        <ul>
                            <li>Balance the acceptance and utilization of foreign contribution or foreign hospitality by established
                                individual associations or companies.</li>
                            <li>Bar on the acceptance and utilization of foreign hospitality or foreign contribution for any activities
                                adverse to national interest and for matters related to therewith or incidental thereto.</li>
                            <p>The certificate of FCRA Registration is issued by the government authority and it is mandatory to obtain
                                the FCRA registration certificate before acquiring or receiving any foreign contribution grants by any
                                registered trust, social institutions, and NGOs.</p>
                            <br id="benefits" />
                        </ul>



                    </div>
                    <br /><br />
                    <div className="ICI" id='content-benfits'>
                        <h1>Benefits of FCRA Registration</h1>

                        <ul>
                            <li>Helps those organizations which work for the benefit and better of the public and are involved in the
                                social work.</li>
                            <li>If the organizations are registered under FCRA, it helps the organization lawfully in receiving the
                                foreign contribution or government aids.</li>
                            <li id="advantages">An entity registered under FCRA can receive donations from Foreign bodies.</li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI" id='content-eligible'>

                        <h1>Who are Eligible for FCRA Registration?</h1>
                        <br />
                        <p>The Below-mentioned entities are eligible for FCRA Registration:-
                        </p>
                        <ul>
                            <li>Section-8 companies registered under the Companies Act.</li>
                            <li>Trust registered under the Indian Trust Act</li>
                            <li>Societies registered under the Indian Society Registration Act</li>
                            <li>The entity must not be prohibited in any form by the provision of the FCRA.</li>
                            <li>Foreign contribution accepted by the trust shall not risk the life or safety of any individual or shall
                                not resultin any offense.</li>
                            <li id="services">The NPO for registration must have charitable objectives to serve the society by promoting
                                health, education, economic development, promotion of art, culture, religion, sports, etc.</li>

                        </ul>

                    </div>
                    <br /><br />
                    <div className="ICI" id='content-docs'>
                        <h1>Documents Required</h1>
                        <br />
                        <p>Below-mentioned documents are required for FCRA Registration:-</p>

                        <ul>
                            <li>Self-attested copy of incorporation certificate, trust deed, or any other certificate hold by such entity
                            </li>
                            <li>Particulars of Non-Profit Organization along with the PAN.</li>
                            <li>Copy of MOA & AOA of institutions,</li>
                            <li>Impression of the chief judiciary (It shall be in JPG From)</li>
                            <li>A detailed report on activities of the preceding 3 years.</li>
                            <li>Audited copy of financial statement, P&L account, Income-Expenditure details, and cash flow statement of
                                the preceding3 years.</li>
                            <li>Certified true copies of the resolution passed by a governing body authorized by Non- profit organization.
                            </li>
                            <li id="procedure">Certificate obtained under section 12 AB of Income Tax Act.</li>

                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI" id='content-procedure'>
                        <h1>Procedure</h1>
                        <br />
                        <p>To apply for FCRA Registration, below- mentioned steps are required:-</p>
                        <img src={fcraReg} alt="" style={{ paddingLeft: '200px', paddingTop: '28px', height: '350px' }} />
                        <ul>
                            <li>CRA Online Portal</li>
                            <p>The first step is to access the online portal of FCRA.</p>
                            <li>Click On The Forms</li>
                            <p>Based on the type of registration, an applicant needs to click on:-</p>
                            <p>1. Based on the type of registration, an applicant needs to click on:-</p>
                            <p>2. Application for FCRA Prior Permission-Form FC – 3B.</p>
                            <li>Creating The Username And Password</li>
                            <p>The next step is to apply online. Once the applicant chooses ‘Apply Online’ option, the next step is to
                                create a username and password by clicking on the ‘Sign-Up’ option.</p>
                            <li>Login Respective Account</li><br />
                            <p>Once an applicant creates a user ID and password, the message regarding the same is displayed on the
                                screen,
                                and the applicant may log in to the account. Once the account is logged in by the applicant,
                                the screen will reflect “I am applying for” from which FCRA Registration has to be chosen.
                                An applicant shall select ‘Apply Online’ following which “Proceed Registration” has to be selected.</p>
                            <li>Start The New Registration Procedure</li>
                            <br />
                            <p>The next step that will reflect, in the title bar is FC-3 that is to be clicked on to start the new
                                registration procedure.</p>
                            <li>Providing The Relevant Details</li>
                            <p>1. The next step is to fill in the relevant details in the form along with the requisite documents. Along
                                with that below-mentioned criteria is required to follow-</p>
                            <p>2. An applicant needs to select The Executive Committee option from the menu bar. The particulars will be
                                filled in the Executive Committee form. </p>
                            <p>3. The applicant can add/delete/edit the details by entering “Add details of Key Functionary”.</p>
                            <li>Providing The Bank Details</li>
                            <br />
                            <p>Once the above-mentioned criteria along with the details are filled, the applicant shall provide the bank
                                details that includes:-</p>
                            <p>1. Bank name,</p>
                            <p>2. Account number,</p>
                            <p>3. IFSC Code and</p>
                            <p>4. Address of the bank.</p>
                            <li>Uploading Documents In PDF Format</li>
                            <br />
                            <p>Once the applicant fills in the bank details, all the required documents
                                are to be uploaded in PDF format. Also, the place and date need to be entered after which the
                                final submission is done.</p>
                            <li>Making The Payment</li>
                            <p>The next and final step is to make the online payment by clicking on the respective button. Further, no
                                alterations can be made in the said form once the payment is made, and the form is submitted.</p>
                        </ul>
                        <br />
                        <p id="obj">Note-Once the FCRA registration is granted by the authority, the registration remains valid for 3
                            years.</p>

                    </div>

                    <br /><br />
                    <div className="ICI" id='content-penalities'>

                        <h1>What are the Penalties for Violation of FCRA?</h1>
                        <br />
                        <p>Violation of FCRA can attract various penalties which could be as under:-</p>
                        <ul>
                            <li>Seizure and confiscation of foreign contribution receipts.</li>
                            <li>Penalty upto 5 times the value of the foreign contribution spent.</li>
                            <li id="fun">Inspection and seizure of accounts and records</li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI" id='content-types'>
                        <h1>What are the Types of Registration Under FCRA 2010?</h1>
                        <br />
                        <p>There two ways in which an applicant can obtain registration as per FCRA 2010, those are as follows:-</p>
                        <ul>
                            <li>Normal Registration</li>
                            <p>1. The applicant must be registered under:-</p>
                            <p>2. The Societies Registration Act, 1860 or</p>
                            <p>3. The Indian Trusts Act, 1882 or</p>
                            <br />
                            <p>Incorporated under Section 8 Company as per the Companies Act, 2013 or any such Act as may be prescribed.
                            </p>
                            <p>An applicant must have made appropriate contributions by endeavoring activities in its chosen field for the
                                benefit of society.</p>
                            <p>Must have spent a minimum of Rs. 15 lakhs in the last 3 years towards achieving its objectives.</p>
                            <p>Submission of the financial statements of the last 3 years that are duly audited by qualified Chartered
                                Accountants.</p>
                            <p>If an entity that is newly registered,likely to receive the foreign contributions, then approval can be
                                made to the Ministry of Home Affairs via the Prior Permission (PP) method.</p>
                            <li>Prior Permission Registration</li>
                            <br />
                            <p>The Prior Permission Registration is preferably suited for those
                                institutions that are newly registered and are likely to receive foreign contributions.
                                Prior Permission is granted for receiving the specific amount from a specific donor for
                                carrying out specific projects. The Non-profit organization must be registered:-</p>
                            <p>1. Under the Societies Registration Act, 1860 or,</p>
                            <p>2. The Indian Trusts Act, 1882 or,</p>
                            <p>3. Incorporated as Section 8 Company as per the Companies Act, 2013 or any such Act as may be required.</p>
                            <br />
                            <p>Submit a particular commitment letter from the contributor to the Ministry of Home Affairs
                                which indicates (1) Amount of contribution given, and (2) Aim for which it is proposed to be given.</p>
                            <br />
                            <p>If in case, the Indian recipient organization and foreign donor organization have common members,
                                the following conditions need to be met:-</p>
                            <p>1. The Chief Functionary of the Indian entity cannot be part of the contributor entity.</p>
                            <p>2. At least 51% of the members/office-bearers of the governing body of the Indian recipient entity should
                                not be employees/members of the foreign contributor entity.</p>
                            <p>3. Where the foreign contributor is an individual:-</p>
                            <p>I- That individual cannot be the Chief Functionary of the Indian organization.</p>
                            <p id="cert">II- At least 51% of office bearers/members of the governing body of the recipient entity should
                                not be the family members and close relatives of the donor.</p>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI" id='content-non-eligible'>
                        <h1>Non-Eligible Entities for Applying FCRA Registration</h1>
                        <br />
                        Following entities are not allowed to be granted FCRA registration:-
                        <ul>
                            <li>The applicant is fictitious or Benami.</li>
                            <li>Applicant against whom prosecution is conducted for indulging in any unfair activity</li>
                            <li>An applicant who has been convicted or prosecuted for any communal tension made in any area of specified
                                district or any part of the country</li>
                            <li>Entity has engaged in any violent activities</li>
                            <li>Has utilized foreign contribution for its personal use</li>
                            <li>Any entity de-bared for accepting any foreign receipt or foreign grant under any provision of law.</li>
                            <li>Any such acceptance of foreign grant that affects prejudicially:=</li>
                            <p>1. The sovereignty of India</p>
                            <p>2. Public Interest</p>
                            <p id="doc">3. Relationship with any state.</p>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="ICI" id='content-renewal'>
                        <h1>Brief on Renewal of FCRA License</h1>
                        <br />
                        <p>FCRA registration remains valid for five years, which can be renewed by applying for the renewal.
                            An entity shall apply for renewal within the following timelines:</p>
                        <ul>
                            <li>At least six months before the date when the license is getting lapsed.</li>
                            <li id="cancel">At least 12 months before the date when registration lapses, in cases the entity is operating
                                on a multi-year project.</li>
                        </ul>

                    </div>
                    <br /><br />
                    <div className="ICI" id='content-cancellation'>
                        <h1>Cancellation/Suspension of FCRA Registration</h1>
                        <br />
                        <p> In case authorities are of the view that registered entity is not operating as per the provisions of law and
                            its license needs
                            to be cancelled, such authority can do so by giving the notice to the concerned entity.
                            Following are the few reasons that can be considered while cancelling the license:</p>
                        <ul>
                            <li>NGO fails to comply with the provisions of the Foreign Contribution (Regulation) Act.</li>
                            <li>If the entity fails to submit an annual return within the due date</li>
                            <li>In case any inquiry is made for any allegation imposed against such organization for
                                any wrongdoing in operations, and such allegation proved to be true</li>
                            <li id="rev">Contribution received is not utilized for the attainment of the main object of entity
                                neither for achieving the purpose stated during FCRA registration application</li>

                        </ul>

                    </div>
                    <br /><br />
                    <div className="ICI" id='content-revised'>
                        <h1>Revised Conditions under FCRA Amendment Rules 2020</h1>
                        <br />
                        <p> The Home Ministry has notified the Foreign Contribution (Regulation) (Amendment) Rules, 2020. The amendment
                            has made many changes to the the Foreign Contribution (Regulation) Rules, 2011. Recently, the Ministry had
                            amended The Foreign Contribution (Regulation) Act, 2010 by notifying the Foreign Contribution (Regulation)
                            Amendment Act, 2020 and had notified the procedure for opening & operating the designated FCRA Account</p>
                        <ul>
                            <li>One of the significant amendment is revised conditions for FCRA registration.
                                As per new condition for FCRA Registration, the institution seeking FCRA registration should be in existence
                                for three years and must have spent a minimum amount of rupees fifteen lakh on its core activities for the
                                benefit of society during the last three financial years.</li>

                            <li>Also, criteria have been prescribed for a person seeking prior permission for receipt
                                of specific amount from a specific donor for carrying out specific activities or projects. </li>

                            <li>It has been provided that if application for renewal of FCRA registration is not received or not
                                accompanied
                                by requisite fee before the expiry of the validity of the certificate of registration, the validity of the
                                certificate of registration shall be deemed to have ceased from the date of completion of the period of five
                                years from the date of the grant of certificate of registration. In such cases the amount of foreign
                                contribution lying unutilized in the FCRA Account shall vest with the prescribed authority.

                            </li>

                            <li>Ministry of Home Affairs has extended the date of validity of the registration certificates
                                issued under the Foreign Contribution (Regulation) Act (FCRA), 2010 expiring between September 29, 2020 and
                                May 31, 2021, till May 31 this year.
                            </li>
                            <li>MHA in its latest notification said that it is mandated to administer the
                                FCRA and the Section 12(6) of the Act provides that the certificate granted shall be valid for a period of
                                five years from the date of its issue."
                            </li>
                            <li id="faq">FCRA registration of NGO is compulsory if the organization getting funding from foreign source.
                                Strict punishment including cancellation can be done if NGOs found guilty of violating norms.</li>

                        </ul>

                    </div>
                    <br /><br />
                    <div className="faq" id='content-faq'>
                        <h1>FAQs</h1>
                        <br /><br />

                        <FAQItem number={0} ques={`What Documents are Required for Prior permission
                  registration?`}
                            answer={`Initials of Chief Functionary in JPG format.
                            Certified copy of the Trust Deed or Registration Certificate of the Association.Duly signed a letter of commitment from Donor.`} />
                        <FAQItem number={1} ques={`Can FCRA registration be renewed?`}
                            answer={`FCRA Registration certificate once granted remains valid for a period of 5 years. To keep the
                            registration valid, an application for renewal of FCRA registration can be made 6 months prior to the
                            date of expiry.`} />
                        <FAQItem number={2} ques={`Whether donation given by an individual of Indian origin and having
                  foreign nationality is treated as 'foreign contribution'?`}
                            answer={`Yes. donation given by an individual of Indian origin and having foreign nationalityis treated as
                            foreign contribution.`} />
                        <FAQItem number={3} ques={`Can foreign contribution be received in rupees?`}
                            answer={`Yes, any donation received from ‘foreign source’ in Rupees or foreign currency is construed as
                            ‘foreign contribution’ under law.`} />
                        <FAQItem number={4} ques={`Whether income or any other income earned from foreign contribution
                  be considered foreign contribution?`}
                            answer={`Yes, any income or any other income earned from foreign contribution be considered foreign
                            contribution.`} />
                        <FAQItem number={5} ques={`Can a foreign contribution be mixed with Local Receipts?`}
                            answer={`No, Foreign contribution cannot be utilized or mixed with the Local receipts.`} />
                        <FAQItem number={6} ques={`Whether infusion of foreign share capital in a company registered
                  under section 8 of the Companies Act 2013, attracts the provision of FCRA, 2010?`}
                            answer={`Yes, infusion of foreign share capital in a company registered under Section 8 of the Companies Act
                            2013,is treated as Foreign contribution.`} />
                        <FAQItem number={7} ques={`What are the different types of FCRA Registration?`}
                            answer={`FCRA registration is categorized into the following two types:
                            Proper FCRA registration and 
                            Proper Permission for FCRA registration`} />
                        <FAQItem number={8} ques={`What is the compliance required after FCRA Registration?`}
                            answer={`After the receipt of FCRA License, the entity must file an annual
                            return in prescribed form FC-4 online through the official website of https://fcraonline.nic.in along
                            with following
                            documents certified by chartered Accountant shall be annexed with FC-4:
                            Scanned copy Income Statement
                            Scanned copy of Balance Sheet
                            Statement of the foreign receipt
                            Payments and expenditure incurred by an entity`} />
                        <FAQItem number={9} ques={`What is the due date of filing an annual return by the FCRA
                  registered entity?`}
                            answer={`FC-4 is the annual compliance filed within the end of 9 months from the end of the financial year,
                            i.e.,
                            this shall be filed on or before the 31st day of December every year.`} />
                        <FAQItem number={10} ques={`Still Confused?`}
                            answer={`
                            solve all your
                            doubts.
                            Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />


                    </div>
                </div>
            </section>

        </>);
}