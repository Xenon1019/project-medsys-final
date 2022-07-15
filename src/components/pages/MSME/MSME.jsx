import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./msme.css";

import msmeReg from "./imgs/MSME Registration.svg";
import msmePage from "./imgs/MSME Page Image.png";

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

export default function MSME() {
    TabTitle("MSME Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">MSME Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Why not establish your own small business if you’re tired of working for others? Get your business
                            registered right away with a professional touch.
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
                    Our MSME Registration packages start from ₹499/- all-inclusive
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="mt-auto sm:w-4/5 px-5 mx-auto">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    What Is MSME?
                </h2>

                <p className="my-2">
                    Government announced an INR 20 lac crore package!! What is in it for me?
                </p>
                <ul className="px-2">
                    <li className="arrow">
                        Need guidance on registration as a MSME?
                    </li>
                    <li className="arrow">
                        Need guidance on registration as a MSME?
                    </li>
                    <li className="arrow">
                        Confused about benefits available to you from the Government?
                    </li>
                    <li className="arrow">
                        Don’t know how to avail a benefit? Are these the questions on your mind?
                    </li>
                </ul>
                <p className="my-3 mb-8">
                    Don’t worry! We are here to help! We have listed the various benefits available to MSMEs like you and
                    the
                    related assistance we can provide!
                </p>
            </div>

            <div className="flex bg-[#f6d5dd] h-full w-full">
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
                                    "Services",
                                    "Steps",
                                    "Process",
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
                                        Who Can Register Under MSM..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Advantages Of MSME
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Services Offered By ICI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Constitution"
                                    >
                                        Documents Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        Process Flow
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
                <div className="bg-[#f6d5dd] h-full sm:w-3/4 px-5 sm:px-9 py-2">
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2">
                            MSME stands for Medium, Small and Micro Enterprises which is governed by the MSME
                            Act. MSMEs are considered as the backbone of our economy because when this sector grows,
                            the whole economy of the country grows and flourishes.
                            The government, therefore, has taken various steps to resolve the financing and cash flow
                            situation faced by the MSME sector.
                            MSME sector has created approximately 11 crore jobs across the country and contributes 29% to
                            the Indian GDP which is even expected to grow more in the future given the government’s “Make in
                            India” initiative.

                            The MSME sector was established to promote, develop and facilitate the competitiveness of
                            smaller businesses in the economy.
                            A business, whether in the manufacturing line or the service line, can register under the MSME
                            act. It is not mandatory to take registration under MSME but it is advantageous for a business
                            to get itself registered under MSME,
                            because it provides various benefits in terms of setting up of business, credit facilities,
                            loans, taxation etc.
                        </p>
                    </div>

                    <div className="my-12" id="Difference">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Who Can Register Under MSME?
                        </h2>
                        <p className="my-2">
                            Any manufacturing enterprise or service rendering enterprises can register themselves as
                            a micro,
                            small and medium enterprise if they satisfy the composite threshold limit mentioned below :-
                        </p>


                        <table id="table1" border="1" cellspacing="0" className="non-huf-table">
                            <tr>
                                <th>Classification</th>
                                <th>Micro</th>
                                <th>Small</th>
                                <th>Medium</th>
                            </tr>
                            <tr>
                                <td  >Investment and  Turnover</td>
                                <td >less than 1 crore
                                    and
                                    less than 5 crore</td>
                                <td >less than 10 crore
                                    and
                                    less than 50 crore
                                </td>
                                <td >
                                    less than 50 crore
                                    and
                                    less than 250 crore
                                </td>

                            </tr>

                        </table>


                        <div class="plc my-2">
                            <p>Related Read: Government Schemes Introduced To Boost MSME In 2021</p>
                            <button type="submit" class="button"> <a href="">CLICK HERE</a></button>
                        </div>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Advantage">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages Of MSME
                        </h2>

                        <ul>
                            <li className="arrow">
                                Under the MSME Credit Scheme, MSMEs registered under GST can get 2% interest subvention from the
                                Government for incremental loans upto Rs. 1 crore (Budget 2019)
                            </li>
                            <li className="arrow">
                                More than 2900 specialized MSME branches of PSU banks to provide credit to MSME sectors</li>
                            <li className="arrow">
                                A fund of funds with a corpus of INR 10,000 crore is to be set aside for equity investment
                                into MSME
                            </li>
                            <li className="arrow">
                                Collateral free loans of INR 3 trillion</li>
                            <li className="arrow">
                                Working capital in the form of subordinated debts which shall be treated as quasi equity and
                                fully guaranteed by Credit Guarantee Scheme Trust for Medium and Small Entrepreneurs
                            </li>
                            <li className="arrow">
                                Only Indian companies (including MSMEs) to participate in Government tenders up to INR 200
                                crores thereby disallowing global tenders in this regard

                            </li>
                            <li className="arrow">
                                MSME receivables to be settled by Government agencies within 45 days to enable better
                                liquidity and working capital management</li>
                            <li className="arrow">
                                Relief under the Insolvency and Bankruptcy Code such as :-</li>
                            <li className="arrow">
                                Minimum threshold to initiate insolvency proceedings raised to INR 1 crore
                            </li>
                            <li className="arrow">
                                Suspension of fresh initiation of insolvency proceedings up to 1 year
                            </li>
                            <li className="arrow">
                                Exclusion of COVID-19 related debt from the definition of ‘default’ for triggering
                                insolvency proceedings
                            </li>
                            <li className="arrow">
                                Statutory PF contribution reduced to 10% from existing 12% and the extension of Government Sponsorship of EPF extended under Pradhan Mantri Garib Kalyan Yojana (PMGKY) to applicable entities
                            </li>
                            <li className="arrow">
                                Online market linkages to compensate for cancelled trade fairs</li>
                            <li className="arrow">
                                Various tax rebates and MAT credit allowed to be carried forward for 15 years (Instead of 10 Years)</li>
                            <li className="arrow">
                                Various Government schemes and subsidies to boost the MSME Sector such as Zero defect Zero
                                effect, Incubation, Credit linked capitalsubsidy scheme, women entrepreneurship and more, to modernize the sector, improve product and quality make it more competitive among its global peers
                            </li>
                            <li className="arrow">
                                50% subsidy on patent registration
                            </li>
                        </ul>

                    </div>

                    <div className="my-12" id="Services">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Services Offered By ICI
                        </h2>
                        <ul>
                            <li className="arrow">Determining eligibility and obtaining registration as a MSME</li>
                            <li className="arrow">Debt Financing

                                <p className="arrow">Calculation of loan eligibility</p>
                                <p className="arrow">Syndication of loan from existing lenders</p>
                                <p className="arrow">Restructuring of outstanding loans with existing lenders</p>
                                <p className="arrow">Refinancing of outstanding loans with another lender</p>

                            </li>
                            <li className="arrow">Invoice Financing through TReDS
                                <p className="arrow">Registration under TreDS</p>
                                <p className="arrow">Assistance in availing TReDS on an invoice basis</p>
                            </li>
                            <li className="arrow">Equity Financing
                                <p className="arrow">Determining viability and growth potential of company</p>
                                <p className="arrow">Collateral preparation for showcase</p>
                                <p className="arrow">Assistance in due diligence, negotiation and documentation</p>
                            </li>
                            <li className="arrow">Certification and preparing cash flow forecast for government tenders</li>
                            <li className="arrow">Assistance in registration under e-markets</li>
                            <li className="arrow">Analysis of government agency dues and assistance in follow up for recovery</li>
                            <li className="arrow">Mapping the benefits available to your company and assistance in availing the
                                said benefits under various sectoral reliefs provided by the government
                            </li>
                            <li className="arrow">In case of the Insolvency and Bankruptcy Code (IBC), calculation of debtor’s
                                ageing and suggestions for alternative recovery methods for outstanding debtors
                            </li>
                            <li className="arrow">Payroll services and Provident Fund filing</li>
                            <li className="arrow">Assistance in determining the amount of TDS and TDS return filing</li>
                            <li className="arrow">Income tax return filing, GST return filing, assistance in recovery of refunds and assistance in assessment and notices received from the Income Tax or GST department
                            </li>
                            <li className="arrow">Corporate secretarial services for Companies Act compliance</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Steps">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <ul>
                            Please provide us the following information and we
                            can get back to you with a range of benefits available:
                            <li className="arrow">
                                Brief profile of your company and business
                            </li>
                            <li className="arrow">
                                Financial statements of FY 18-19 and FY 17-18</li>
                            <li className="arrow">
                                Provisional/Audited financial statements for FY 19-20</li>
                            <li className="arrow">
                                Income tax returns for FY 18-19 and FY 17-18</li>
                        </ul>
                        <div class="plc my-2">
                            <p>Related Read:Income Tax Returns (ITR) AY 2021-22: Which ITR Form Should You File?</p>
                            <button type="submit" class="button"> <a href="">CLICK HERE</a></button>
                        </div>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process Flow
                        </h2>
                        <ul>
                            <li className="arrow">
                                Click here to raise a service request
                            </li>
                            <li className="arrow"> Once we receive your service request, our MSME team will connect with you with
                                a simple checklist and a list of documents. (As mentioned Above)
                            </li>
                            <li className="arrow"> Our MSME team will review & verify the documents provided by you and list down the
                                benefits that your business is eligible for and the services that we can offer.
                            </li>
                            <li className="arrow"> Based on this preliminary discussion & verification, we can help you leverage
                                your business by providing top notch services as per your business needs.
                            </li>
                        </ul>
                        <img src={msmePage} alt="" className="my-6 mx-auto w-[400px] h-[400px]" />
                    </div>


                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Who can apply for MSME
                                        registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Both
                                    existing as well as new
                                    businesses who
                                    satisfy the above threshold condition can apply for MSME registration.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the validity of the
                                        Registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    As long as the business is
                                    ethical, functioning
                                    and financially healthy, there is no expiry date for the registration.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        I am a trader of iron and steel. Can I
                                        register under MSME?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, a trader is not covered in
                                    the definition of
                                    MSME because trading companies act as middlemen between manufacturer and customer, and there is
                                    hardly any innovation and capital investment.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        I have multiple branches/ manufacturing
                                        units across India. Do I
                                        need to get separate MSME registration for each location?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, a single MSME registration
                                    is valid for all
                                    branches/ units of the same business. However, one must furnish the details of multiple branches/
                                    units.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the businesses which have been
                                        specifically excluded
                                        from the coverage of MSME?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        <li className="my-1"> Forest and Logging</li>
                                        <li className="my-1">Fishing and Aquaculture</li>
                                        <li className="my-1">Wholesale, Retail Trade, and repair of motor vehicle and motorcycles</li>
                                        <li className="my-1">Wholesale Trade except for motor vehicles and motorcycles</li>
                                        <li className="my-1"> Retail Trade except for motor vehicles and motorcycles</li>
                                        <li className="my-1">Activities of households as employees for domestic personnel</li>
                                        <li className="my-1">Undifferentiated goods and services-producing activities of private households for their own
                                        </li>
                                        <li className="my-1">Activities of extraterritorial organizations and bodies</li>

                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is TReDS?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    TReDS stands for Trade
                                    Receivables electronic
                                    Discount System. It is an online mechanism through which trade receivables of MSMEs can be financed
                                    by
                                    various financiers and also enables
                                    discounting of Invoices raised against large corporates, thereby reducing the pressure on working
                                    capital needs.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are E-Markets?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    E-Markets are virtual trade
                                    fairs and exhibitions
                                    to revive businesses, promote exports and recognition.
                                    For any query Write to us at info@indiacompanyincorporation.com or call us @+91 9643 203 209.
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