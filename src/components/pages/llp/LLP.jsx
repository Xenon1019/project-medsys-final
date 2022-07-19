import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import { RelatedRead } from "../common";
import "./llp.css";
import ContactForm from "../../ContactForm";

import benefits from "./imgs/Benefits of LLP Image.png"
import steps from "./imgs/Steps to Incorporate LLP Image.png"
import kyc from "./imgs/DIR-3 KYC.svg";
import form8 from "./imgs/Form 8.svg";
import form11 from "./imgs/Form 11.svg";
import itr from "./imgs/Income Tax Return.svg";
import annualReturn from "./imgs/MCA Annual Return.svg";
import accounting from "./imgs/Accounting and Book Keeping.svg";

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

export default function LLP() {
    TabTitle("Limited Liability Partnership - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Limited Liability Partnership</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Get LLP Registration done by Medsys! Our professionals are knowledgeable about the legislation and have
                            assisted companies like yours in forming LLPs. Contact one of our advisors right away!!
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
            <div className="flex justify-center items-center gap-11 px-4 bg-black text-white h-20">
                <div className="text-xl my-auto">
                    Get in touch with us acquire various licenses, registrations, and certifications
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="mt-auto sm:w-4/5 px-5 mx-auto">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    What Is A LLP?
                </h2>

                <p className="my-2">
                    LLP is an alternate Corporate Business vehicle that provides the benefits of limited liability ( one partner
                    is not responsible or liable for another partners misconduct or negligence)
                    and allows its members the flexibility of organising their internal structure as a partnership based on a
                    mutually arrived agreement.LLP is one of the easiest types of companies to embed and manage in India. <br /><br />Ease
                    of incorporation and simple compliance procedures have made LLPs a preferred choice among small businesses and
                    professionals.
                </p>
            </div>

            <div className="flex h-full w-full">
                <div className="sm:w-1/4 hidden md:block">
                    <div className="flex flex-col sticky top-40 ml-4 my-12 p-9">
                        <div className="bg-white rounded-xl p-5">
                            <h2 className="text-2xl text-[#560216] font-bold text-center">
                                Table Of Contents
                            </h2>
                            <hr className="bg-[#560216]" />
                            <Scrollspy
                                items={[
                                    "Overview",
                                    "Difference",
                                    "Advantage",
                                    "Checklist",
                                    "Steps",
                                    "Documents",
                                    "Compliances",
                                    "Incorporate",
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
                                        href="#How"
                                    >
                                        Difference b/w
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Advantages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Checklist
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Constitution"
                                    >
                                        Steps to Incorporate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        Documents Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Compliances"
                                    >
                                        Compliances Post LLP Formation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Applicability"
                                    >
                                        Incorporating An LLP Company
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
                <div className=" h-full sm:w-3/4 px-5 sm:px-9 py-2">
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2">
                            Limited Liability Partnership (LLP) is governed by the Limited Liability Partnership Act, 2008,
                            and combines the benefits
                            of a partnership firm with that of a private limited company.LLP is an alternate Corporate Business vehicle
                            that provides the benefits of
                            limited liability but allows its members the flexibility of organising their internal structure as a
                            partnership based on mutually arrived agreement. It was intended to bridge the gap between the Companies Act
                            and the Partnership Act, 1932. LLP was introduced to provide a type of business that is easy to maintain and
                            operate. It also helps the owners by limiting their liability. Since its inception in 2010, LLP has been
                            widely accepted as a business venture in India.
                        </p>
                        <iframe className="my-5 aspect-video w-3/4 mx-auto" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    </div>

                    <div className="my-12" id="Difference">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How Is LLP Different From Partnership Firm And Private Limited Company?
                        </h2>
                        <table id="table1" border="1" cellspacing="0" class="non-huf-table hidden sm:block">
                            <tr>
                                <th>Sr.No</th>
                                <th>Basis</th>
                                <th>Partnership Firm</th>
                                <th>Private Limited Company</th>
                                <th>Limited Liability Partnership</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Prevailing Law</td>
                                <td>Partnership is governed by ‘The Indian Partnership Act, 1932’.</td>
                                <td>Companies are governed by ‘Companies Act, 2013’.</td>
                                <td>Limited Liability Partnerships are governed by ‘The Limited Liability Partnership Act, 2008</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Capital Required</td>
                                <td>No minimum capital requirement.</td>
                                <td>No minimum capital requirement.</td>
                                <td>No minimum capital requirement.</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Time of Registration</td>
                                <td>5-7 working days. Partnership Registration
                                    letter is received after a year.</td>
                                <td>12-15 working days.</td>
                                <td>10-12 working days.</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td> Name of Entity</td>
                                <td>Any name as per choice.</td>
                                <td>Name to contain ‘Private Limited’ in case of
                                    Private Company as a suffix.</td>
                                <td>Name to contain ‘Limited Liability
                                    Partnership’ or ‘LLP’ as a suffix.</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td>Registration</td>
                                <td>Registration is optional.</td>
                                <td>Registration with the Registrar of ROC
                                    compulsory.</td>
                                <td>Registration with the Registrar of LLP
                                    compulsory.</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td> Cost of Formation</td>
                                <td>The Cost of Formation is negligible. However,
                                    the cost of registered Partnership cost as good as registration cost of LLP.</td>
                                <td>Minimum Statutory fee for incorporation of
                                    Company is Relatively High.</td>
                                <td>The cost of Formation is comparatively lesser
                                    than the cost of formation of Company and more than the formation of Partnership firm.</td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td>Perpetual Succession</td>
                                <td>Does not enjoy perpetual succession.</td>
                                <td>It has perpetual succession and members may
                                    come and go.</td>
                                <td>It has perpetual succession and partners may
                                    come and go.</td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td>Number of Members</td>
                                <td>Minimum 2 and Maximum 20.</td>
                                <td>2 to 200 members in case of Private Company.
                                </td>
                                <td>Minimum 2 partners and there is no limitation
                                    of maximum number of partners.</td>
                            </tr>
                            <tr>
                                <td>9.</td>
                                <td> Liability of Partners/Members</td>
                                <td>Unlimited. Partners are severally and jointly
                                    liable for actions of other partners and the firm and liability extend to their personal assets.</td>
                                <td>Generally limited to the amount required to be
                                    paid up on each share.</td>
                                <td>Limited, to the extent their contribution
                                    towards LLP, except in case of intentional fraud or wrongful act of omission or commission by the
                                    partner.</td>
                            </tr>
                            <tr>
                                <td>10.</td>
                                <td> Annual Filing</td>
                                <td>No return is required to be filed with the
                                    Registrar of Firms.</td>
                                <td>Annual Financial Statement and Annual Return
                                    is required to be filed with the Registrar of Companies every year.</td>
                                <td>Annual Statement of accounts and Solvency &
                                    Annual Return is required to be filed with the Registrar of Companies every year.</td>
                            </tr>
                            <tr>
                                <td>11.</td>
                                <td>Audit of accounts</td>
                                <td>Partnership firms are only required to have
                                    tax audit of their accounts as per the provisions of the Income Tax Act.</td>
                                <td>Companies are required to get their accounts
                                    audited annually as per the provisions of the Companies Act, 2013.</td>
                                <td>All LLP except for those having turnover less
                                    than Rs.40 Lacs or Rs.25 Lacs contribution in any financial year are required to get their accounts
                                    audited annually as per the provisions of LLP Act 2008.</td>
                            </tr>

                        </table>

                        <p className="my-2">
                            One should choose the type of organization based on their needs. For example if one wants to raise funds,
                            then registering a company is more beneficial than registering an LLP.
                        </p>

                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Advantage">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages Of Starting a LLP
                        </h2>

                        <ul className="">
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    Separate Legal Entity
                                </h3>
                                <p>
                                    LLP enjoys the advantages of a separate legal identity within the meaning of
                                    the law, which clearly
                                    states that company assets and liabilities are not partner assets and liabilities.
                                </p>
                            </li>

                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    Limited Liability of Partners
                                </h3>
                                <p>
                                    The partners of an LLP are not liable to bring any further personal
                                    contribution for settlement of
                                    dues of the company, over and above their capital contribution.
                                </p>
                            </li>
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    Perpetual Succession
                                </h3>
                                <p>
                                    Like a company, its existence continues even after the exit/retirement/death
                                    of partners.
                                </p>
                            </li>
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    No Minimum Capital
                                </h3>
                                <p>
                                    No minimum capital is required for LLP incorporation. It can be even
                                    registered with Rs. 1,000 as total
                                    capital contribution from a partner.
                                </p>
                            </li>
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    Simple procedures for transfer of Ownership
                                </h3>
                                <p>
                                    The interest in limited partnerships has no influence on their existence, as
                                    they can be easily transferred
                                    through the introduction of a new designated partner in the LLP and are independent legal entities.
                                </p>
                            </li>
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    Audit is not compulsory
                                </h3>
                                <p>
                                    LLPs having a capital amount of lower than Rs. 25 lakh and turnover below Rs.
                                    40 lakh per year do not require
                                    any formal audits.
                                </p>
                            </li>
                            <li className="arrow">
                                <h3 className="text-xl inline text-[#9D3E55] font-bold my-2">
                                    LLP Tax Benefits
                                </h3>
                                <p>
                                    Various taxes such as dividend distribution tax and alternative minimum tax
                                    are also exempt.
                                    The LLP tax rates are low compared to companies.
                                </p>
                            </li>
                        </ul>
                        <img src={benefits} alt="" className="my-6 mx-auto" />

                    </div>

                    <div className="my-12" id="Checklist">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Checklist
                        </h2>
                        <p>
                            As per LLP Act, 2008, for registering an LLP in India, the below conditions have to be met:
                        </p>
                        <ul className="">
                            <li className="arrow">Minimum 2 partners are required to form an LLP, and at least one designated partner should be an Indian resident.</li>
                            <li className="arrow">
                                If the partner is a body corporate, then it should nominate a natural person as an authorized person.
                            </li>
                            <li className="arrow">No minimum capital requirement for an LLP.</li>
                            <li className="arrow">LLPs registered office does not have to be a trading location. Even the rental premise will work as a
                                registered office.</li>
                            <li className="arrow">
                                All the designated partners should have a Designated Partner Identification Number (DPIN) and a Digital
                                Signature Certificate (DSC).
                            </li>
                        </ul>

                        <RelatedRead>
                            Related Read:How To Choose Between A Private Ltd. Company And LLP?
                        </RelatedRead>
                    </div>

                    <div className="my-12" id="Steps">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Steps to Incorporate An LLP
                        </h2>
                        <ul className="">
                            <li className="arrow"><b>Step 1:</b> Apply for DSC and name approval.</li>
                            <li className="arrow"><b>Step 2:</b>Filing of documents.</li>
                            <li className="arrow"><b>Step 3:</b>Registration of LLP Deed.</li>
                            <li className="arrow"><b>Step 4:</b> Apply for PAN, TAN, and bank account.</li>
                        </ul>

                        <img src={steps} className="my-4 mx-auto" />
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>

                        <h3 className="my-2 text-[#9D3E55] font-bold">For Designated Partners</h3>
                        <div className="px-4">
                            <p className="my-2">Identify the 2 directors (or more) and submit their documents as given below</p>
                            <ul className="">
                                <li className="arrow">
                                    Identity Proof <br />
                                    - PAN (Indian Nationals) or Passport (Foreign nationals) And <br />
                                    - Passport / Driver’s License / Election ID / Ration Card / Aadhar ID
                                </li>

                                <li className="arrow">
                                    Proof of Residence <br />
                                    - Bank Statement / Electricity Bill / Mobile Bill (Not Later than 2 months)
                                </li>
                                <li className="arrow">
                                    Passport size photographs
                                </li>
                            </ul>
                        </div>
                        <h3 className="my-2 text-[#9D3E55] font-bold">For Registered Office</h3>
                        <div className="px-4">
                            <ul className="">
                                <li className="arrow">
                                    A document in the title of the company's property, or a notarized copy of the rental agreement
                                    representing the company and a copy of the rental payment receipt within one months
                                </li>
                                <li className="arrow">
                                    NOC from Landlord to use the premises by the company as its registered office.
                                </li>
                                <li className="arrow">
                                    Electricity bills for phone, gas, electricity, etc., showing the address of the building
                                    on behalf of the owner or document, within two months.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="my-12" id="Compliances">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Compliances Post LLP Formation
                        </h2>
                        <p>
                            Post receipt of LLPIN Number from the Registrar of companies, the LLP has to register the respective LLP
                            Deed with the Registrar of Companies within 30 days of Incorporation of LLP.
                        </p><br />
                        <p>
                            All LLPs registered in India must comply with different rules and regulations like annual filing at the MCA
                            portal, KYC of designated partner, etc. Failure to do this may result in partner penalties or
                            disqualification.
                        </p> <br />
                        <p>
                            We at ICI will help you in maintaining statutory compliances for your LLP at a very affordable price point.
                        </p><br />
                        <p>
                            The following are the compliances that an LLP must complete each year:-
                        </p>
                        <ul className="">

                            <li className="my-3 flex flex-row">
                                <img src={itr} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Income Tax Return
                                    </h3>
                                    <p>
                                        All LLPs registered in India are required to file an income tax return every year regardless of
                                        income or profit. LLP must file an income tax
                                        return using Form ITR 5 from the income tax website with the digital signature of the designated
                                        partner.
                                    </p>
                                </div>
                            </li>

                            <li className="my-3 flex flex-row">
                                <img src={annualReturn} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        MCA Annual Return
                                    </h3>
                                    <p>
                                        LLP must submit two MCA annual declarations per fiscal year.
                                    </p>
                                </div>
                            </li>

                            <RelatedRead>
                                Related Read:How To Choose Between A Private Ltd. Company And LLP?
                            </RelatedRead>

                            <li className="my-3 flex flex-row">
                                <img src={form8} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Form 8
                                    </h3>
                                    <p>
                                        It is submitted within 30 days from the end of 6 months of the financial year together with the
                                        prescribed fees. Form 8 has 2 parts –
                                        <br />Part A – Statement of Solvency.
                                        <br />Part B – Statement of Accounts, Statement of Income and Expenditure
                                    </p>
                                </div>
                            </li>

                            <li className="my-3 flex flex-row">
                                <img src={form11} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Form 11
                                    </h3>
                                    <p>
                                        Form 11 contains the number of partners, the total number of partners, the total number of
                                        donations received from all partners, company data as partners and details on the partner overview.
                                        All LLPs must submit this form within 60 days of the end of the financial year at the prescribed
                                        price
                                    </p>
                                </div>
                            </li>

                            <li className="my-3 flex flex-row">
                                <img src={kyc} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        DIR-3 KYC
                                    </h3>
                                    <p>
                                        DIR-3 KYC is Compliance applicable to all the persons holding DPIN . According to Rule 12A of
                                        Companies (Appointment and Qualification of a Directors) Rules, 2014, every Individual who is a
                                        designated partner having Designated Person
                                        Identification Number (DPIN) has to file Form DIR-3 KYC or DIR-3 KYC WEB as applicable on the MCA
                                        portal.
                                    </p>
                                </div>
                            </li>

                            <li className="my-3 flex flex-row">
                                <img src={accounting} alt="" className="hidden sm:inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Accounting and Book Keeping
                                    </h3>
                                    <p>
                                        All LLPs must maintain a proper accounting of their operations on a cash or accrual basis each
                                        year. The account must be kept in the registered office according to the double-entry bookkeeping
                                        system.
                                        For a LLP with sales of more than Rs. 40 Lakh or capital of Rs. 25 Lakh or more, an auditor must
                                        audit the account.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="font-bold my-3 text-[#560216]">
                            In addition to the above, GST registration, GST returns filing, TDS return filing, and
                            other labour law compliances would be required for the LLP - based on the sales turnover and various other
                            criteria.
                        </p>
                    </div>

                    <div className="my-12" id="Incorporate">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Incorporating An LLP Company At Medsys
                        </h2>

                        <p>
                            The average time to complete LLP registration is approximately 10-15 business days, depending
                            on government processing time and customer documentation submission.
                        </p>
                        <br />
                        <p>You can start LLP by following the steps below.</p>
                        <ul>

                            <li className="arrow">Submit a request by clicking here.</li>
                            <li className="arrow">
                                Our Corporate Manager (CM) will get in touch with you to collect your documents along with a simple
                                checklist.</li>
                            <li className="arrow">Submit the filled checklist along with your documents for verification. Our ICI team of experts will
                                validate and process your documents. The CM shall keep you informed throughout the process.
                            </li>
                            <li className="arrow">After sending and confirming the documents with the checklist, we shall proceed with the application of
                                your DSC . In parallel to the The DSC application and name reservation application must be submitted to
                                the MCA. Requests for name approval will be processed by the MCA within 24-72 hours. You can suggest up to
                                3-4 selected names.
                            </li>
                            <li className="arrow">On obtaining the name approval and the digital signatures, all the incorporation documents for the
                                registration of the LLP are drafted and sent to the Partners for signature.
                            </li>
                            <li className="arrow">The signed company formation documents are sent to the MCA together with the company formation form ,
                                DIN registration and the required documents of the LLP. The approval by the MCA takes 2-5 working days.
                            </li>
                            <li className="arrow">Upon approval, we will assist LLP in obtaining PAN and TAN and to begin opening a bank account on behalf
                                of LLP.</li>
                            <li className="arrow">At the same time, we would create an LLP Deed. All LLP partners must sign the LLP Deed on stamp
                                paper. This deed shall determine the mutual rights and duties amongst the partners, and between the LLP
                                and the partners.
                                <br />
                                The signed LLP partnership certificate will be verified and uploaded to the MCA portal within 30 days of
                                establishment to complete the LLP registration process.
                            </li>

                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the Eligibility to become a
                                        designated partner in an LLP?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Only Individual can act as a
                                        designated Partner. However, LLP, Companies can become partners in the LLP acting through its
                                        authorised Representative.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        I am an NRI. Can I start an LLP
                                        business in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Yes, non-resident Indians and
                                        foreigners can open an LLP business in India. At least one of the LLP’s designated partners must be
                                        an Indian citizen.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is an LLP Agreement?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>The LLP agreement exists between
                                        the partner and the LLP in relation to the relationship between the individual partners of LLP. LLP
                                        contracts typically
                                        consist of management guidelines, new partner involvement, policy development strategies, and more.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is it cheaper to operate an LLP than a
                                        limited liability company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Yes. In particular, many
                                        conformances, such as testing, apply to LLP only at large turnovers. Most LLPs spend about half of
                                        their limited
                                        liability company in registration and compliance activities in the first year.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I become an LLP partner?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    A person who signs the “Founding
                                    Document” at the time the LLP is established becomes a partner of the LLP. After incorporation,
                                    new partners can be admitted to the LLP as per the conditions and requirements of the LLP Agreement.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many partners do I need to
                                        integrate LLP?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    At least two people are required
                                    to install LLP. LLP requires at least two partners and can have a maximum of any number of partners.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long is the incorporation of LLP
                                        valid?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    After the foundation, LLP
                                    remains active as long as the annual compliance is regularly observed. If you fail to meet your
                                    annual compliance,
                                    your LLP may be idle and will be removed from your registry after some time.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is DPIN?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Designated Partner
                                        Identification Number (DPIN) is a unique identification number assigned to all existing and proposed
                                        designated partners of an LLP.
                                        It is mandatory that all current or proposed designated partners have a DPIN. DPIN never expires and
                                        a person can have only one DPIN.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is DPIN?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Designated Partner
                                        Identification Number (DPIN) is a unique identification number assigned to all existing and proposed
                                        designated partners of an LLP.
                                        It is mandatory that all current or proposed designated partners have a DPIN. DPIN never expires and
                                        a person can have only one DPIN.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can partners withdraw or be removed
                                        from the LLP?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The partner remains the partner
                                    of LLP even after all rights have been transferred to LLP unless otherwise specified in the LLP
                                    agreement and with the consent of all the Partners.
                                    Partners can also withdraw from LLP. It is possible to remove a partner from an LLP to whom an LLP
                                    contract applies.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can I register the office address as a
                                        home address?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, you can display the address
                                    of your house or apartment building as the address of the company headquarters. As soon as the
                                    company is set up, stable, and ready for operation,
                                    you can change the address of your registered office by notifying the ROC office. If you are on rent
                                    and the invoice is in the name of the owner, then a ‘No Objection Certificate’ is required.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Does the partner have to be physically
                                        present during this process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, the complete process will be
                                    carried online. ICI has developed Standard Operating Processes (SOPs) that deliver the entire
                                    business registration exercise online in a seamless way..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the LLP tax rate? Is the
                                        dividend distribution tax (DDT) applicable?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Tax applies to LLP at 30% (plus
                                    applicable surcharge and cess) on the net profit of the firm. There is no distribution tax
                                    applicable on such already taxed profits.
                                    Partners can withdraw such profit after tax from their current account and won’t be taxable in their
                                    personal capacity
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Still Confused?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Speak to our experts who shall solve all your doubts. Call
                                        us at +91 70204 38881 or Mail us at
                                        medsysconsultancy@gmail.com
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
};