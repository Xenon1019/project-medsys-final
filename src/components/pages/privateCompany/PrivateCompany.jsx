import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './privateCompany.css';

import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';
import incomeTaxFilling from './Income Tax Filing.svg'
import meeting from './Meeting of the Board of Directors.svg'
import dinKyc from './DIN KYC.svg'
import annualReturn from './Annual Return.svg'
import bookkeeping from './Bookkeeping.svg'
import commencement from './Commencement of Business.svg'
import auditorAppointment from './Statutory Auditor Appointment.svg'


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
                <h1>Private Limited Company</h1> <br />
                <p>Private Limited Company is said to be India’s most famous type of corporate entity.
                    Here’s why: No minimum amount of capital!</p><br />
                <p>Get in touch with us to establish your own Private Limited Company!</p><br />

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

        <div id="private-info">
            <h1 className="heading">What Is Private Limited Company?</h1>
            <div className="boxx1">
                <span>
                    <p>Private Limited Company registration is the most popular legal structure option for businesses in India. A
                        private limited company can have a minimum of two members and a maximum of fifty members.
                        The directors of a private limited company have limited liability to creditors. In a case of default,
                        banks/creditors can only sell company’s assets but not personal assets of directors. If you want to start a
                        company in India then make sure your company is registered as Company Registration should be your first
                        priority.
                        It is very important to register your company as a registered company have multiple advantages from easy to
                        register to easy to dissolve.</p>
                </span>


            </div>
        </div>
    </>);

}

function PrivateCompany() {
    TabTitle('Private Limited Company - medsysconsultancy.com');

    return (<>
        <Header />

        <section className="main-content">
            <div className="left" id="lefty">
                <div>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-overview',
                        'content-advantages',
                        'content-checklist',
                        'content-steps',
                        'content-docs',
                        'content-compliances',
                        'content-incorporate',
                        'content-faq',

                    ]}>
                        <li> <a className="tabanchor" href="#overview">Overview</a></li>
                        <li> <a className="tabanchor" href="#advantages">Advantages Of MSME</a></li>
                        <li> <a className="tabanchor" href="#checklist">Checklist</a></li>
                        <li> <a className="tabanchor" href="#steps">Steps To Incorporate </a></li>
                        <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                        <li> <a className="tabanchor" href="#compliances">Compliances </a></li>
                        <li> <a className="tabanchor" href="#incorporating">Incorporating A PLC</a></li>
                        <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact" style={{ marginTop: 'auto', marginBottom: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>

            </div>


            <div className="right1 necessity" id="overview" style={{ fontSize: '1rem' }}>
                <div className="necessity" id="content-overview">
                    <h1 id="overview">Overview</h1>
                    <br />
                    <p className="gap">Private Limited Company is a type of organization wherein the ownership and management are
                        separate. The capital of a company is provided by a group of individuals known as shareholders who entrust
                        the responsibility of managing the company in the hands of individuals known as the Board of Directors.
                        These forms of organizations are closely held, usually by family, friends, and relatives. Private limited
                        companies may issue shares and can have a maximum of 200 shareholders and their shares cannot be traded on
                        public exchanges, but they can get their shares listed if needed by converting to a public limited company.
                        It is governed by the Ministry of Corporate Affairs (MCA) and regulated by the Companies Act, 2013.

                    </p>
                    <p id="advantages"></p>

                </div>
                <br /><br />
                <div className="ICI" id="content-advantages">
                    <h1>Advantages Of MSME</h1>
                    <br />
                    <p>Registering a company offers many benefits because it makes the business genuine and authentic. The key
                        benefits of a private limited company are</p>
                    <br />
                    <h4>Separate Legal Existence</h4>
                    <p>Its legal existence is different from the shareholders/members. It can own property, incur debts, borrow
                        money, have a bank account, employee people, enter into contracts, etc.</p>
                    <br />
                    <h4>Perpetual Succession</h4>
                    <p>The organization's existence continues despite the death, bankruptcy, insanity, change in membership or an
                        exit from the business of any owner or member, or any transfer of stock, etc.</p>
                    <br />
                    <h4>Limited Liability to Shareholders</h4>
                    <p>Shareholders are not liable personally for any of the debts of the company, other than the amount already
                        invested in the company.</p>
                    <br />
                    <h4>Easy Transferability of Ownership</h4>
                    <p>The ownership represented by shares, can be easily transferred to any other legal entity or person in India
                        or abroad in part or whole.</p>
                    <br />
                    <h4>Other Benefits</h4>
                    <p>-Best structure for fundraising.</p>
                    <p>-Foreigners and NRIs can also act as director.</p>
                    <p id="checklist">-Enhanced brand Image and improvement of credibility.</p>

                    <br />
                </div>
                <br /><br />
                <div className="ICI" id="content-checklist">
                    <h1>Checklist</h1>

                    <ul>&emsp;
                        <li>Determining eligibility and obtaining registration as a MSME</li>
                        <li>Debt Financing

                            <p>Calculation of loan eligibility</p>
                            <p>Syndication of loan from existing lenders</p>
                            <p>Restructuring of outstanding loans with existing lenders</p>
                            <p id="steps">Refinancing of outstanding loans with another lender</p>

                        </li>

                    </ul>
                </div>

                <div className="plc">
                    <p>Related Read: How To Register A Company In India: A Step By Step Guide</p>
                    <button type="submit"> <a href="">CLICK HERE</a></button>
                </div>
                <br /><br />
                <div className="ICI" id="content-steps">
                    <h1>Steps To Incorporate A Private Limited Company</h1>

                    <br />
                    <ul id="AD">
                        <li><b>Step 1:</b> Apply for DSC (Digital Signature Certificate) of the directors.
                        </li>
                        <li><b>Step 2:</b> Application for name reservation.
                        </li>
                        <li><b>Step 3:</b> Filing of verified documents along with E-MOA and E-AOA on the MCA portal to register a
                            private limited company in form SPICE +
                            wherein application for various registration as listed below along with application for Incorporation is
                            done.
                        </li><br />
                        <table id="table1" border="1" cellspacing="0" className="non-huf-table">
                            <tr>
                                <th>Sr.No</th>
                                <th>Particulars</th>
                                <th>Mandatory/ Non Mandatory</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Director Identification Number<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td> 2.</td>
                                <td>PAN<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>TAN<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Professional Tax Registration<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Opening of Bank Account<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td> ESIC<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td> GSTIN<br /></td>
                                <td>Not Mandatory<br /></td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td> EPFO Registration<br /></td>
                                <td>Mandatory<br /></td>
                            </tr>

                        </table>
                        <li><b>Step 4:</b> Obtain Certificate of incorporation.
                        </li>
                        <li><b>Step 5:</b> Conduct First Board Meeting within 30 days of Incorporation.
                        </li>
                        <li><b>Step 6:</b> The subscription money is required to be deposited in the company’s bank account within
                            180 days and the statement of such deposit is required to be uploaded
                            at
                            MCA portal post which one can obtain Certificate to commence business.
                        </li>
                    </ul><br />
                    <p><b id="documents">Note:</b> No Company can begin its operations, without obtaining Certificate to commence
                        business.</p>
                    <br />
                </div>
                <br /><br />
                <div className="ICI" id="content-docs">
                    <h1>Documents Required</h1>
                    <br />

                    <ul>
                        <h3>For Directors and Shareholders </h3>Identify the 2 directors and shareholders (or more) and submit their
                        documents as given below:
                        <li><b>Identity Proof</b>

                            <p>PAN (Indian Nationals) or Passport (Foreign nationals) And</p>
                            <p> Passport / Driver’s License / Election ID / Ration Card / Aadhar ID</p>
                        </li>
                        <li><b>Proof of Residence</b>

                            <p>Bank Statement* / Electricity Bill / Mobile Bill (Any one) Not older than 2 months</p>
                            *if the person has resided at the present address for less than one year, then previous residential
                            address must also be submitted
                        </li>
                        <li><b>Passport size photographs</b></li>
                        <li><b>Director’s educational qualification certificate</b></li><br />
                        <h3>For Registered Office </h3>
                        <li>Registered document of title of premises or notarised copy of lease/rent agreement in the company's name
                            along with a copy of rent paid receipt not older than one month.
                        </li>
                        <li>NOC from landlord to use the premises by the company as its registered office.
                        </li>
                        <li id="compliances">Utility bills like telephone, gas, electricity, etc. showing the address of the
                            premises in the name of the owner, which is not older than two months.
                        </li>
                    </ul>
                </div>
                <br /><br />
                <div className="plc">
                    <p>Related Read:How To Choose Between A Private Ltd. Company And LLP?</p>
                    <button type="submit"> <a href="">CLICK HERE</a></button>
                </div>
                <br /><br />
                <div className="ICI" id="content-compliances">
                    <h1>Compliances Post Company Formation</h1>
                    <br />
                    <p>All companies registered in India are required to comply with various rules and regulations like conduct of
                        Board Meetings, Annual filings, KYC compliance of Director etc. Failure to comply shall lead to penalties or
                        disqualification of the directors.
                        We will help you in maintaining Statutory compliances for your Company at a very affordable price point.</p>
                    <ul>
                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={auditorAppointment} alt="" />
                                </td>
                                <td>
                                    <h3>Statutory Auditor Appointment</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>The board of directors must appoint a practicing
                                        Chartered Accountant as their auditor within 30 days of incorporation.</p>
                                </td>
                            </tr>
                        </table>

                        <table className=" necessity-image">
                            <tr>
                                <td rowspan="2"><img src={meeting} alt="" style={{ aspectRation: '1', width: '120px' }} /></td>
                                <td>
                                    <h3>Meeting of the Board of Directors</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Minimum of 4 board meetings in a calendar year (at least once in every quarter). The gap between 2
                                        consecutive meetings should not exceed 120 days. For small companies with turnover of not more than
                                        Rs.
                                        2 crores, a minimum of 2 meetings must be held in each financial year.</p>
                                </td>
                            </tr>
                        </table>
                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={commencement} alt="" style={{ aspectRation: '1', width: '120px' }} /></td>
                                <td>
                                    <h3>Commencement of Business</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Businesses established after November 2, 2018 must obtain a business start certificate within 180
                                        days from the date of establishment. A declaration needs to be submitted by directors
                                        that the subscribers have contributed to the capital mentioned in the MOA.</p>
                                </td>
                            </tr>
                        </table>
                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={incomeTaxFilling} alt="" /></td>
                                <td>
                                    <h3>Income Tax Filing</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>A company must file an income tax return each financial year on or before 30th September of the
                                        successive year</p>
                                </td>
                            </tr>
                        </table>

                    </ul>
                    <br />
                    <div className="plc">
                        <p>Related Read:How To Save More Taxes Using An Income Tax Calculator?</p>
                        <button type="submit"> <a href="">CLICK HERE</a></button>
                    </div>
                    <br />
                    <ul>
                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={annualReturn} alt="" /></td>
                                <td>
                                    <h3>Annual Return</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>A company must file an annual return with the MCA for each financial year in forms AOC-4 and MGT-7
                                        on or before 31st October of the successive year.</p>
                                </td>
                            </tr>
                        </table>

                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={dinKyc} alt="" style={{ aspectRation: '1', width: '70px' }} /></td>
                                <td>
                                    <h3>DIN KYC</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>The DIN KYC procedure must be completed for each financial year for the directors of the company on
                                        or before 30th April of the successive year.<br />
                                        Other than these mandatory compliances, other compliances need to be done depending on the company's
                                        timeline. ICI also assists in increasing authorized capital, changing registered office, change in
                                        directors, and others.</p>
                                </td>
                            </tr>
                        </table>
                        <table className="necessity-image">
                            <tr>
                                <td rowspan="2"><img src={bookkeeping} alt="" style={{ aspectRation: '1', width: '80px' }} /></td>
                                <td>
                                    <h3>Bookkeeping</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p id="incorporating">Every company shall prepare and keep at its registered office books of account
                                        and other relevant books and papers and financial statements for every financial year.
                                        They must be maintained on an accrual basis and follow the double entry system of accounting.</p>
                                </td>
                            </tr>
                        </table>

                    </ul>
                </div>
                <br /><br />
                <div className="ICI" id="content-incorporate">
                    <h1>Incorporating A Private Limited Company</h1>
                    <br />
                    <p>At India Company Incorporation, we will help you start your own Private Limited company in less than 10-15
                        working days, subject to government processing times, and availability of all documents.</p>
                    <br />
                    <p>Following the steps listed below to start your own Company,</p>
                    <ul>
                        <li>
                            Submit a request by clicking here.
                        </li>
                        <li> Our Corporate Manager (CM) will get in touch with you to collect your documents along with a simple
                            checklist.</li>
                        <li> Submit the filled checklist along with your documents for verification. Your documents will be verified
                            by our team of experts here at ICI, and we shall take the process further. The CM shall keep you informed
                            throughout the process.</li>
                        <li> Once your documents along with the checklist are submitted and verified, we shall proceed with the
                            application of your DSC and DIN. In parallel to the DSC application, the application for name reservation
                            shall be submitted to the MCA. Applications for name approval are processed by the MCA in 24-72 hours.
                            You may suggest up to 3-4 names of your choice.</li>
                        <li>
                            We will draft the MOA and AOA and file the incorporation documents with MCA in part B of a form
                            called “SPICe Plus(SPICe+)" along with the subscription statement. Usually, MCA approves the forms within
                            4-5 days once filed and issues the Incorporation Certificate with CIN.
                        </li>
                        <li id="faq">
                            Once the approval is obtained, the company would be incorporated.
                        </li>
                    </ul>
                </div>
                <br /><br />
                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />
                    <FAQItem number={0} ques="What is the Director Identification Number (DIN) and where is DIN
                    Used?"
                        answer={`The central government issues a DIN to anyone who intends to be a director of the company. It is an
                        eight-digit unique identification number which has lifetime validity. DIN is person-specific which
                        means that even if he is a director in 2 or more companies, he/she has to obtain only 1 DIN. If a
                        return, application, or information about the company is required by law,
                        the director who signs the return, application, or information will request a DIN under his
                        signature.`} />
                    <FAQItem number={1} ques="What is a Digital Signature Certificate (DSC)?"
                        answer={`A digital signature certificate (DSC) contains information about the user’s name, email address,
                        pin code, country, date of issuance of the certificate, and name of the certifying authority. It is
                        used to prove your identity,
                        to access information or services on the Internet, or to sign certain documents digitally.`} />
                    <FAQItem number={2} ques="What is MOA and AOA?"
                        answer={`The Memorandum of Association (MOA) states the main and ancillary objects of the proposed company.
                        The Articles of Association (AOA)
                        contains the rules and procedures for the routine conduct of the proposed company.`} />
                    <FAQItem number={3} ques="What is an Authorized Capital?"
                        answer={`Authorized capital is the maximum amount of share capital for which a company can issue shares.
                        Authorized capital can be increased by the company at any time with shareholders’ approval.`} />
                    <FAQItem number={4} ques="What is the Paid-up capital?"
                        answer={`The Paid-up capital of a company is the amount of money for which shares were issued to the
                        shareholder and for which payment was made by shareholders. Paid-up capital will always
                        be less than the authorized capital as the company can not issue shares above its authorized
                        capital.`} />
                    <FAQItem number={5} ques="Do you need to be physically present during the procedure?"
                        answer={`No, registering a new company is a complete online process. All documents are stored
                        electronically, so you don’t need to be physically present.
                        Please send a scanned copy of the required documents and forms.`} />
                    <FAQItem number={6} ques="What is the cost to run a private limited company?"
                        answer={`These can be divided into four categories: The costs of establishing a private limited company,
                        the costs of accounting and auditing, the costs of compliance, and other costs.`} />
                    <FAQItem number={7} ques="Is it compulsory to Audit Company’s book?"
                        answer={`Yes, an auditor must be appointed within 30 days of setting up a private limited company.
                        Non-compliance fees can be in the hundreds of rupees,
                        so compliance is important for private limited companies.`} />
                    <FAQItem number={8} ques="Who can be a member of a private limited company?"
                        answer={`Any individual or organization can become a member of a private limited company including
                        NRI/foreigners. Nonetheless, the individual must be 18+ in age and should hold a valid PAN card.`} />
                    <FAQItem number={9} ques="Can directors of private limited companies become office/salaried
                    employees?"
                        answer={`Yes, directors can be paid for by private limited companies. If these conditions are allowed, you
                        will need to verify your employment contract. In many cases, the employers are quite comfortable
                        with the fact that their employee is a director in another company.`} />
                    <FAQItem number={10} ques="Can NRIs/Foreigners become directors in a private limited
                    company?"
                        answer={`Yes, NRIs and foreigners can be directors of a private limited liability company. You must apply
                        and receive a DIN from the Ministry of Corporate Affairs (MCA). You can also be the majority
                        shareholder of the company.
                        The only requirement is that at least one director be established in India.`} />
                    <FAQItem number={11} ques="Can I register a company at my home address?"
                        answer={`Yes, you can register your company at your home address. For this you will need to present a
                        service invoice.`} />
                    <FAQItem number={12} ques="Can you convert existing private limited into LLP?"
                        answer={`Yes, by filing Form 18 (Application and Statement for conversion of a private company/ unlisted
                        public company into limited liability partnership (LLP).
                        Also, Form 17 needs to be filed along with Form 2 (Incorporation document and subscriber’s
                        statement).`} />
                    <FAQItem number={13} ques="Still Confused?"
                        answer={`Speak to our experts who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />
                </div>
            </div>
        </section>
    </>);
}

export default PrivateCompany;