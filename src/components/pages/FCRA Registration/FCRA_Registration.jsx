import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import apendaImg from "./imgs/FCRA Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./FCRA.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
const points = [
    {
        head: "Business Served",
        icon: bussinessLogo,
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
const FCRA_Registration = () => {
    TabTitle("FCRA Registration - medsysconsultancy.com");

    return (
        <>
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">FCRA Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            The primary objective of FCRA registration is to legalize the receipt of any foreign contribution by domestic entities and for ensuring the proper utilization of such funds for the specified purpose.
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
            <div className="flex justify-between items-center px-16 bg-black text-white h-20">
                <div className="text-2xl">
                    Contact us for more information related to license and registration
                </div>
                <div>
                    <button className="bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600">
                        CALL NOW!
                    </button>
                </div>
            </div>



            <div className="flex bg-[#f6d5dd] h-full w-full">
                <div className="sm:w-1/4 hidden md:block">
                    <div className="flex flex-col sticky top-40 ml-4 my-12">
                        <div className="bg-white rounded-xl p-5">
                            <h2 className="text-3xl text-[#560216] font-bold text-center">
                                Table Of Contents
                            </h2>
                            <hr className="bg-[#560216]" />
                            <Scrollspy
                                items={[
                                    "Overview",
                                    "Benefits",
                                    "Who",
                                    "Documents",
                                    "Procedure",
                                    "Penalties",
                                    "Types",
                                    "Non",
                                    "Brief",
                                    "Cancellation",
                                    "Revised",
                                    "FAQs",
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Overview"
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Benefits"
                                    >
                                        Benefits of FCRA Registration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Who"
                                    >
                                        Who are Eligible for FCRA R..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Documents Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Procedure"
                                    >
                                        Procedure
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        What are the Penalties for Viola..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Compliances"
                                    >
                                        What are the Types of Registra..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Non"
                                    >
                                        Non-Eligible Entities for Apply...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Brief"
                                    >
                                        Brief on Renewal of FCRA Li..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Cancellation"
                                    >
                                        Cancellation/Suspension of FC..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Revised"
                                    >
                                        Revised Conditions under FC...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#FAQs"
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </Scrollspy>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f6d5dd] h-full sm:w-3/4 px-5 py-4 ">
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2">
                            All the Charitable trust, societies and Section 8 Company that receives foreign contribution or donation from foreign resources shall apply for FCRA Registration. FCRA registration is done under the Foreign Contribution Regulation Act, 2010. FCRA stands for Foreign Contribution Regulation Act. The Foreign Contribution Regulation Act, 2010 was enacted with a view to:-
                        </p>
                        <div>
                            <p className="arrow">Balance the acceptance and utilization of foreign contribution or foreign hospitality by established individual associations or companies.</p>
                            <p className="arrow">Bar on the acceptance and utilization of foreign hospitality or foreign contribution for any activities adverse to national interest and for matters related to therewith or incidental thereto.</p>
                            <p>The certificate of FCRA Registration is issued by the government authority and it is mandatory to obtain the FCRA registration certificate before acquiring or receiving any foreign contribution grants by any registered trust, social institutions, and NGOs.</p>
                        </div>
                    </div>


                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Benefits">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of FCRA Registration
                        </h2>
                        <ul className="">
                            <li className="arrow">Helps those organizations which work for the benefit and better of the public and are involved in the social work.</li>
                            <li className="arrow">If the organizations are registered under FCRA, it helps the organization lawfully in receiving the foreign contribution or government aids.</li>
                            <li className="arrow">An entity registered under FCRA can receive donations from Foreign bodies.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Who">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Who are Eligible for FCRA Registration?
                        </h2>
                        <p>The Below-mentioned entities are eligible for FCRA Registration:-</p>
                        <ul className="">
                            <li className="arrow">Section-8 companies registered under the Companies Act.</li>
                            <li className="arrow">Trust registered under the Indian Trust Act</li>
                            <li className="arrow">Societies registered under the Indian Society Registration Act</li>
                            <li className="arrow">The entity must not be prohibited in any form by the provision of the FCRA.</li>
                            <li className="arrow">Foreign contribution accepted by the trust shall not risk the life or safety of any individual or shall not resultin any offense.</li>
                            <li className="arrow">The NPO for registration must have charitable objectives to serve the society by promoting health, education, economic development, promotion of art, culture, religion, sports, etc.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <p>
                            Below-mentioned documents are required for FCRA Registration:-
                        </p>
                        <ul className="">
                            <li className="arrow">Self-attested copy of incorporation certificate, trust deed, or any other certificate hold by such entity</li>
                            <li className="arrow">Particulars of Non-Profit Organization along with the PAN.</li>
                            <li className="arrow">Copy of MOA & AOA of institutions,</li>
                            <li className="arrow">Impression of the chief judiciary (It shall be in JPG From)</li>
                            <li className="arrow">A detailed report on activities of the preceding 3 years.</li>
                            <li className="arrow">Audited copy of financial statement, P&L account, Income-Expenditure details, and cash flow statement of the preceding3 years.</li>
                            <li className="arrow">Certified true copies of the resolution passed by a governing body authorized by Non- profit organization.</li>
                            <li className="arrow">Certificate obtained under section 12 AB of Income Tax Act.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Procedure">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Procedure
                        </h2>
                        <p>To apply for FCRA Registration, below- mentioned steps are required:-</p>
                        <img className="mx-auto my-3" src={apendaImg} alt="" />
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">CRA Online Portal</li>
                                <p>The first step is to access the online portal of FCRA.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Click On The Forms</li>
                                <p>Based on the type of registration, an applicant needs to click on:-</p>
                                <p>1. Based on the type of registration, an applicant needs to click on:-</p>
                                <p>2. Application for FCRA Prior Permission-Form FC – 3B.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Creating The Username And Password</li>
                                <p>The next step is to apply online. Once the applicant chooses ‘Apply Online’ option, the next step is to create a username and password by clicking on the ‘Sign-Up’ option.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Login Respective Account</li>
                                <p>Once an applicant creates a user ID and password, the message regarding the same is displayed on the screen, and the applicant may log in to the account. Once the account is logged in by the applicant, the screen will reflect “I am applying for” from which FCRA Registration has to be chosen. An applicant shall select ‘Apply Online’ following which “Proceed Registration” has to be selected.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Start The New Registration Procedure</li>
                                <p>The next step that will reflect, in the title bar is FC-3 that is to be clicked on to start the new registration procedure.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Providing The Relevant Details</li>
                                <p>1. The next step is to fill in the relevant details in the form along with the requisite documents. Along with that below-mentioned criteria is required to follow-</p>
                                <p>2. An applicant needs to select The Executive Committee option from the menu bar. The particulars will be filled in the Executive Committee form.</p>
                                <p>3. The applicant can add/delete/edit the details by entering “Add details of Key Functionary”.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Providing The Relevant Details</li>
                                <p>Once the above-mentioned criteria along with the details are filled, the applicant shall provide the bank details that includes:-</p>
                                <p>1. Bank name,</p>
                                <p>2. Account number,</p>
                                <p>3. IFSC Code and</p>
                                <p>4. Address of the bank.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Uploading Documents In PDF Format</li>
                                <p>Once the applicant fills in the bank details, all the required documents are to be uploaded in PDF format. Also, the place and date need to be entered after which the final submission is done.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Making The Payment</li>
                                <p>The next and final step is to make the online payment by clicking on the respective button. Further, no alterations can be made in the said form once the payment is made, and the form is submitted.</p>
                                <p>Note-Once the FCRA registration is granted by the authority, the registration remains valid for 3 years.</p>
                            </div>


                        </ul>
                    </div>

                    <div className="my-12" id="Penalties">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What are the Penalties for Violation of FCRA?
                        </h2>
                        <p className="my-2">Violation of FCRA can attract various penalties which could be as under:-</p>
                        <ul className="">
                            <li className="arrow">Seizure and confiscation of foreign contribution receipts.</li>
                            <li className="arrow">Penalty upto 5 times the value of the foreign contribution spent.</li>
                            <li className="arrow">Inspection and seizure of accounts and records</li>
                        </ul>
                    </div>


                    <div className="my-12" id="Types">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What are the Types of Registration Under FCRA 2010?
                        </h2>
                        <p>There two ways in which an applicant can obtain registration as per FCRA 2010, those are as follows:-</p>
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">Normal Registration</li>
                                <p>1. The applicant must be registered under:-</p>
                                <p>2. The Societies Registration Act, 1860 or</p>
                                <p>1. The applicant must be registered under:-</p>
                                <p>3. The Indian Trusts Act, 1882 or</p>

                                <p>Incorporated under Section 8 Company as per the Companies Act, 2013 or any such Act as may be prescribed.</p>
                                <p>An applicant must have made appropriate contributions by endeavoring activities in its chosen field for the benefit of society.</p>
                                <p>Must have spent a minimum of Rs. 15 lakhs in the last 3 years towards achieving its objectives.</p>
                                <p>Submission of the financial statements of the last 3 years that are duly audited by qualified Chartered Accountants.</p>
                                <p>If an entity that is newly registered,likely to receive the foreign contributions, then approval can be made to the Ministry of Home Affairs via the Prior Permission (PP) method.</p>

                            </div>
                            <div className="my-2">
                                <div className="my-2">

                                    <li className="arrow">Prior Permission Registration</li>
                                    <p>The Prior Permission Registration is preferably suited for those institutions that are newly registered and are likely to receive foreign contributions. Prior Permission is granted for receiving the specific amount from a specific donor for carrying out specific projects. The Non-profit organization must be registered:-</p>
                                    <p>1. Based on the type of registration, an applicant needs to click on:-</p>
                                    <p>2. Application for FCRA Prior Permission-Form FC – 3B.</p>
                                    <p>3. Incorporated as Section 8 Company as per the Companies Act, 2013 or any such Act as may be required.</p>
                                </div>
                                <p>Submit a particular commitment letter from the contributor to the Ministry of Home Affairs which indicates (1) Amount of contribution given, and (2) Aim for which it is proposed to be given.</p>
                                <div className="my-2">
                                    <p>If in case, the Indian recipient organization and foreign donor organization have common members, the following conditions need to be met:-</p>
                                    <p>1. The Chief Functionary of the Indian entity cannot be part of the contributor entity.</p>
                                    <p>2. At least 51% of the members/office-bearers of the governing body of the Indian recipient entity should not be employees/members of the foreign contributor entity.</p>
                                    <p>3. Where the foreign contributor is an individual:-</p>
                                    <p>I- That individual cannot be the Chief Functionary of the Indian organization.</p>
                                    <p>II- At least 51% of office bearers/members of the governing body of the recipient entity should not be the family members and close relatives of the donor.</p>
                                </div>
                            </div>
                            
                        </ul>
                    </div>

                    <div className="my-12" id="Non">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Non-Eligible Entities for Applying FCRA Registration
                        </h2>
                        <p>
                        Following entities are not allowed to be granted FCRA registration:-
                        </p>
                        <img className="mx-auto my-3" src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">The applicant is fictitious or Benami.</li>
                            <li className="arrow">Applicant against whom prosecution is conducted for indulging in any unfair activity</li>
                            <li className="arrow">An applicant who has been convicted or prosecuted for any communal tension made in any area of specified district or any part of the country</li>
                            <li className="arrow">Entity has engaged in any violent activities</li>
                            <li className="arrow">Has utilized foreign contribution for its personal use</li>
                            <li className="arrow">Any entity de-bared for accepting any foreign receipt or foreign grant under any provision of law.</li>
                            <li className="arrow">Any such acceptance of foreign grant that affects prejudicially:=</li>
                            <p>1. The sovereignty of India</p>
                            <p>2. Public Interest</p>
                            <p>3. Relationship with any state.</p>
                        </ul>
                    </div>
                    <div className="my-12" id="Objective">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Brief on Renewal of FCRA License
                        </h2>
                        <p className="my-2">FCRA registration remains valid for five years, which can be renewed by applying for the renewal. An entity shall apply for renewal within the following timelines:</p>
                        <ul>
                            <li className="arrow">At least six months before the date when the license is getting lapsed.</li>
                            <li className="arrow">At least 12 months before the date when registration lapses, in cases the entity is operating on a multi-year project.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Cancellation">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Cancellation/Suspension of FCRA Registration
                        </h2>
                        <p>
                        In case authorities are of the view that registered entity is not operating as per the provisions of law and its license needs to be cancelled, such authority can do so by giving the notice to the concerned entity. Following are the few reasons that can be considered while cancelling the license:
                        </p>
                        <img className="mx-auto my-3" src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">NGO fails to comply with the provisions of the Foreign Contribution (Regulation) Act.</li>
                            <li className="arrow">If the entity fails to submit an annual return within the due date</li>
                            <li className="arrow">In case any inquiry is made for any allegation imposed against such organization for any wrongdoing in operations, and such allegation proved to be true</li>
                            <li className="arrow">Contribution received is not utilized for the attainment of the main object of entity neither for achieving the purpose stated during FCRA registration application</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Revised">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Revised Conditions under FCRA Amendment Rules 2020
                        </h2>
                        <p>The Home Ministry has notified the Foreign Contribution (Regulation) (Amendment) Rules, 2020. The amendment has made many changes to the the Foreign Contribution (Regulation) Rules, 2011. Recently, the Ministry had amended The Foreign Contribution (Regulation) Act, 2010 by notifying the Foreign Contribution (Regulation) Amendment Act, 2020 and had notified the procedure for opening & operating the designated FCRA Account</p>
                        <ul className="">
                            <li className="arrow">One of the significant amendment is revised conditions for FCRA registration. As per new condition for FCRA Registration, the institution seeking FCRA registration should be in existence for three years and must have spent a minimum amount of rupees fifteen lakh on its core activities for the benefit of society during the last three financial years.</li>
                            <li className="arrow">Also, criteria have been prescribed for a person seeking prior permission for receipt of specific amount from a specific donor for carrying out specific activities or projects.</li>
                            <li className="arrow">It has been provided that if application for renewal of FCRA registration is not received or not accompanied by requisite fee before the expiry of the validity of the certificate of registration, the validity of the certificate of registration shall be deemed to have ceased from the date of completion of the period of five years from the date of the grant of certificate of registration. In such cases the amount of foreign contribution lying unutilized in the FCRA Account shall vest with the prescribed authority.</li>
                            <li className="arrow">Ministry of Home Affairs has extended the date of validity of the registration certificates issued under the Foreign Contribution (Regulation) Act (FCRA), 2010 expiring between September 29, 2020 and May 31, 2021, till May 31 this year.</li>
                            <li className="arrow">MHA in its latest notification said that it is mandated to administer the FCRA and the Section 12(6) of the Act provides that the certificate granted shall be valid for a period of five years from the date of its issue."</li>
                            <li className="arrow">FCRA registration of NGO is compulsory if the organization getting funding from foreign source. Strict punishment including cancellation can be done if NGOs found guilty of violating norms.</li>
                        </ul>
                    </div>
                    
                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a. What Documents are Required for Prior permission registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="my-2">Initials of Chief Functionary in JPG format.</p>
                                    <p className="my-2">Certified copy of the Trust Deed or Registration Certificate of the Association.</p>
                                    <p className="my-2">Duly signed a letter of commitment from Donor.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. Can FCRA registration be renewed?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    FCRA Registration certificate once granted remains valid for a period of 5 years. To keep the registration valid, an application for renewal of FCRA registration can be made 6 months prior to the date of expiry.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c. Whether donation given by an individual of Indian origin and having foreign nationality is treated as 'foreign contribution'?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes. donation given by an individual of Indian origin and having foreign nationalityis treated as foreign contribution.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d. Can foreign contribution be received in rupees?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, any donation received from ‘foreign source’ in Rupees or foreign currency is construed as ‘foreign contribution’ under law.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. Whether income or any other income earned from foreign contribution be considered foreign contribution?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, any income or any other income earned from foreign contribution be considered foreign contribution.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f. Can a foreign contribution be mixed with Local Receipts?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    No, Foreign contribution cannot be utilized or mixed with the Local receipts.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    g. Whether infusion of foreign share capital in a company registered under section 8 of the Companies Act 2013, attracts the provision of FCRA, 2010?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, infusion of foreign share capital in a company registered under Section 8 of the Companies Act 2013,is treated as Foreign contribution.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    h. What are the different types of FCRA Registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>FCRA registration is categorized into the following two types:</p>
                                    <p>Proper FCRA registration</p>
                                    <p>Proper Permission for FCRA registration</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    i. What is the compliance required after FCRA Registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                   <p>After the receipt of FCRA License, the entity must file an annual return in prescribed form FC-4 online through the official website of https://fcraonline.nic.in along with following documents certified by chartered Accountant shall be annexed with FC-4:</p>
                                   <p>Scanned copy Income Statement</p>
                                   <p>Scanned copy of Balance Sheet</p>
                                   <p>Statement of the foreign receipt</p>
                                   <p>Payments and expenditure incurred by an entity</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    j. What is the due date of filing an annual return by the FCRA registered entity?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    FC-4 is the annual compliance filed within the end of 9 months from the end of the financial year, i.e., this shall be filed on or before the 31st day of December every year.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        k. Still Confused?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        <ContactForm />
        </>
    );
}

export default FCRA_Registration