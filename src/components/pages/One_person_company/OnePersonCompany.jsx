import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import OnePersonImg from "./imgs/One Person Company Image.png"
import StatutoryImg from "./imgs/Statutory Auditor Appointment.svg"
import AnnualImg from "./imgs/Annual Return.svg"
import incomeImg from "./imgs/Income Tax Filing.svg"
import CommencementImg from "./imgs/Commencement of Business.svg"
import BoardImg from "./imgs/Board Meeting.svg"
import Bookkeeping from "./imgs/Bookkeeping.svg"
import { TabTitle } from "../../Utillity";
import "./OnePersonCompany.css";

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
const OnePersonCompany = () => {
    TabTitle("One Person Company Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">One Person Company Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Do you want to be the sole shareholder of your firm and enjoy complete ownership of your business?
                        </p>
                        <p>
                            We will assist you in building your own OPC in less than 10-15 working days
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
                    Our OPC incorporation packages start from ₹7,999/- all-inclusive
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>
            <div className="my-12 mx-4 md:ml-28">
                <h2 className="text-3xl text-[#560216] font-bold my-4">What Is An OPC ?</h2>
                <p>Section 2(62) of Companies Act defines a one-person company as a company that has only one person as to its member. So, an OPC is effectively a company that has only one shareholder as its member.</p>
                <p>If there is only one promoter/founder, One Person Company (OPC) is the best way to start a company. OPC is one of the significant milestones of the Companies Act, 2013, introduced to encourage self-employment.</p>
                <p>An OPC gives the advantage of limited liability to entrepreneurs, whereby the liability of the member will be limited to the unpaid subscription money. This benefit is not available in case of a sole proprietorship.</p>
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
                                    "Advantages",
                                    "Checklist",
                                    "Steps",
                                    "Requisite",
                                    "Compliances",
                                    "Incorporating",
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
                                        href="#Advantages"
                                    >
                                        Advantages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Checklist"
                                    >
                                        Checklist
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Steps"
                                    >
                                        Steps To Incorporate An One P..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Requisite"
                                    >
                                        Requisite Documents
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Compliances"
                                    >
                                        Compliances Post Company Fo...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Incorporating"
                                    >
                                        Incorporating An One Person...
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
                        <h2 className="text-3xl text-[#560216] font-bold my-4">An Overview</h2>
                        <p className="my-2">
                            One person company (‘OPC’) is a fairly new concept in India introduced in the Companies Bill 2013. OPC is a hybrid form of Proprietorship and Company form of business. OPC supports entrepreneurs who are capable of starting a venture on their own by giving them the freedom to create a single person economic entity. The biggest advantage of OPC is that it requires only one person who will act as a member, shareholder, and a director and thus the entrepreneur does not have to face the problem of finding another partner.
                        </p>

                    </div>



                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages
                        </h2>

                        <ul className="">
                            <li className="arrow">Minimum 1 member.</li>
                            <li className="arrow">Minimum 1 director & maximum 15 directors.</li>
                            <li className="arrow">Only 1 shareholder and hence, full control.</li>
                            <li className="arrow">Separate Legal entity status.</li>
                            <li className="arrow">Limited Liability of member and perpetual succession.</li>
                            <li className="arrow">Exempt from holding an annual general meeting or extraordinary general meetings.</li>
                            <li className="arrow">Cash flow statement not required to be filed.</li>
                            <li className="arrow">Lesser compliance requirements.</li>
                            <li className="arrow">No minimum Paid up capital.</li>
                            <li className="arrow">Builds credibility due to Corporate structure.</li>
                        </ul>
                    </div>


                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read: How To Register A Company In India: A Step By Step Guide  </h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>

                    <div className="my-12" id="Checklist">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Checklist
                        </h2>

                        <ul className="">
                            <li className="arrow">Only a natural person who is a Resident Indian-Citizen can incorporate OPC.</li>
                            <li className="arrow">Legal entities like Company or LLP cannot incorporate an OPC.</li>
                            <li className="arrow">The minimum authorised capital is Rs 1,00,000.</li>
                            <li className="arrow">A nominee must be appointed by the promoter during incorporation.</li>
                            <li className="arrow">Businesses involved in financial activities cannot be incorporated as a OPC.</li>
                            <li className="arrow">OPC must be converted to a private limited company when paid-up share capital exceeds Rs. 50 lakh or turnover crosses Rs. 2 crore.</li>
                            <li className="arrow">A minor is not allowed to be a member of an OPC.</li>
                            <li className="arrow">A person cannot form more than 1 OPC.</li>
                            <li className="arrow">Limitation in Conversion i.e OPC cannot be Converted into Section 8 Company as per Companies Act, 2013.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Steps To Incorporate An One Person Company
                        </h2>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 1: </span>Apply for DSC (Digital Signature Certificate) & DIN (Digital Signature Certificate).</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 2: </span>Apply for the name availability.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 4: </span>Filing of documents</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 3:</span>Apply for PAN, TAN, and bank account.</p>

                        <img className="h-96" src={OnePersonImg} alt="" />
                    </div>


                    <div className="my-12" id="Requisite">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Requisite Documents
                        </h2>
                        <p className="text-[#9D3E55] text-lg font-semibold">For Directors</p>
                        <p>Identify the director and submit their documents as given to the below.</p>
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">Identity Proof</li>
                                <p>- PAN (Indian Nationals) or Passport (Foreign nationals) And</p>
                                <p>- Passport / Driver’s License / Election ID / Ration Card / Aadhar ID</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Address Proof</li>
                                <p>- Bank Statement / Electricity Bill / Mobile Bill(latest 1 month old)</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Passport size photographs</li>
                                <p>For Registered Office</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Rent Agreement & NOC</li>
                                <p>Registered document of the title of the premises or notarized copy of lease/ rent agreement in the name of the company along with a copy of rent paid receipt not older than one month.</p>
                                <p>NOC from Landlord to use the premises by the company as its registered office.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Address Proof</li>
                                <p>Utility bills like telephone, gas, electricity, etc. showing the address of the premises in the name of the owner (latest 1 month old)</p>
                            </div>
                            <li className="text-[#9D3E55] arrow text-lg font-semibold">For Nominee</li>
                            <div className="my-2">
                                <li className="arrow">Identity Proof</li>
                                <p>Pan card / Aadhaar card/ Passport / Driving license</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Address Proof</li>
                                <p>Electricity bill/ Bank Statement / Mobile bill (latest 1 month old)</p>
                            </div>
                        </ul>
                    </div>

                    <div className="my-12" id="Compliances">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Compliances Post Company Formation
                        </h2>
                        <p>
                        All companies registered in India are required to comply with various rules and regulations. Failure to comply can lead to penalty or disqualification of the directors.
                        </p>
                        <p>We at ICI can help you in maintaining Statutory compliances for your company at a very affordable price point.</p>
                        <div className="my-12">
                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={StatutoryImg} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Statutory Auditor Appointment</p>
                                    <p>The board of directors must appoint a practicing Chartered Accountant as their auditor within 30 days of incorporation.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={AnnualImg} alt="" />
                                <div className="flex flex-col"> 
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Annual Return</p>
                                    <p>OPC must file their annual return in forms AOC-4 and MGT-7 on or before 31st October.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={incomeImg} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Income Tax Filing</p>
                                    <p>OPC must file their Annual income tax return each year on or before 30th September.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read:How To Save More Taxes Using An Income Tax Calculator?</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>

                    <div className="my-12" id="Compliances">
                        
                        <div className="my-12">
                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={CommencementImg} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Statutory Auditor Appointment</p>
                                    <p>The board of directors must appoint a practicing Chartered Accountant as their auditor within 30 days of incorporation.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={BoardImg} alt="" />
                                <div className="flex flex-col"> 
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Annual Return</p>
                                    <p>OPC must file their annual return in forms AOC-4 and MGT-7 on or before 31st October.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={Bookkeeping} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Income Tax Filing</p>
                                    <p>OPC must file their Annual income tax return each year on or before 30th September.</p>
                                </div>
                            </div>
                        </div>
                        <p>In addition to the above, GST registration, GST return filing, TDS return filing and other labour law compliances would be required for an OPC - based on the sales turnover and various other criteria.</p>
                    </div>

                     
                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read: What’s The Difference Between Sole Proprietorship And OPC?</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>


                    <div className="mt-auto sm:w-4/5" id="Procedure">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">
                        Incorporating An One Person Company
                        </h2>

                        <p>At ICI, we will help you start your own OPC in less than 10-15 working days, subject to government processing times, and availability of all documents.</p>
                        <p>Following the steps listed below to start your own Company,</p>

                        <ul className="my-2">
                            <li className="arrow">Submit a request by clicking here.</li>
                            <li className="arrow">Our Corporate Manager (CM) will get in touch with you to collect your documents along with a simple checklist.</li>
                            <li className="arrow">Submit the filled checklist along-with your documents for verification. Your documents will be verified by our team of expert’s here at ICI and we shall take the process further. The CM shall keep you informed throughout the process.</li>
                            <li className="arrow">Once your documents along with the Checklist are submitted and verified, we shall proceed with the application of your DSC and DIN. In parallel to the DSC application, the application for name reservation shall be submitted to the MCA. You may suggest up to 3-4 names of your choice. The suggested name must conform to the naming standards as per MCA, and the name of the OPC must end or include the words (OPC).</li>
                            <li className="arrow">We will draft the MOA (Memorandum of association) and AOA (Articles of association). We will file the incorporation documents with MCA in part B of a form called “SPICe Plus (SPICe +)” along with the subscription statement. Usually, MCA approves the forms within 4-5 days once filed and issues Incorporation Certificate with CIN.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a. What is a One Person Company(OPC) and how is it different from an private limited company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    One Person Company is a relatively new form of business entity. A private limited company can be formed with a minimum of two directors and shareholders. The directors and shareholders can be the same individuals however, One person company has no requirement of minimum two shareholders. It allows a single entrepreneur/person to get his business registered as a company and get limited liability protection.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. Who is the nominee in the OPC?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    A nominee is a person who, in the event of death or disability of the subscriber of the One Person Company, shall assume his position. Memorandum of Association of One Person Company will mandatorily prescribe the name of the nominee.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c. Can my husband/wife be appointed as a nominee for my One Person Company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes. You can appoint your husband/wife as a nominee, provided that he or she holds a PAN in his or her name.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d. Can a nominee be changed after incorporating the company ?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes. A nominee can be changed at any time with due intimation to the Registrar.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. Is there any threshold limit for an OPC to mandatorily get converted into either private or public company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    In case the paid-up share capital of an OPC exceeds 50 lakh rupees or its average annual turnover of immediately preceding three consecutive financial years exceeds two crore rupees, then the OPC has to mandatorily convert itself into a private or public company.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f. What is Director Identification No. (DIN)?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    DIN is allotted by the Central Government to any person intending to be a Director of a company. It is an 8-digit unique identification number which has lifetime validity. DIN is specific to a person, which means even if he is a director in 2 or more companies, he has to obtain only 1 DIN.
                                    </p>
                                    <p>Whenever a return, an application, or any information related to a company will be submitted under any law, the director signing such return, application or information will mention his DIN underneath his signature.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    g. Is Foreign Direct Investment allowed for One Person Company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    FDI is not allowed for an OPC
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    h. Can OPC become a member of another Private Limited company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, the Act has not laid down any restriction for OPC to become a member of another Private Limited Company.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    i. Whether an OPC can be converted into a Private/Public Limited Company and vice versa?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    An OPC can be easily converted into a Public or Private Limited Company.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    j. Do you have to be present in person to incorporate a One Person Company in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    No, OPC incorporation is a completely online process.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    k. Does OPC have any tax advantage?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    There is no specific tax advantage. Like any other form of company, OPC has to pay Corporate tax at a rate of 30% (concessional rates subject to certain conditions). Other tax provisions like MAT would continue to apply as they apply to any other forms of company.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    l. Can I use my residential address as the registered office address for my company?

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, you can show your own residential or rented home address as the registered office address of the Company. If you take a place for rent, and the bills are in the owner’s name, a ‘No Objection Certificate’ is required from the owner of the property.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Still Confused?</AccordionItemButton>
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
        </>
    );
}

export default OnePersonCompany