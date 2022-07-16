import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Ngo.css";

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
const Ngo_Registration = () => {
    TabTitle("NGO Registration Under Section 80G & Section 12A - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">NGO Registration Under Section 80G & Section 12A</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            NGOs are established for good causes, and the government provides tax exemptions to assist them with raising funds. Now is the time to register your NGO under Sections 80G and 12A in order to avail of those benefits for your NGO.
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
                    Contact us for more information related to licence and registration
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

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
                                    "Introduction",
                                    "Re-validation",
                                    "12A",
                                    "80G",
                                    "FAQs",
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Introduction"
                                    >
                                        Introduction
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Re-validation"
                                    >
                                        Re-validation Under Sections...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#12A"
                                    >
                                        Registration Under 12A:
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#80G"
                                    >
                                        Registration Under 80G:
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
                    <div className="my-12" id="What">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Introduction</h2>
                        <p className="my-2">
                            NGOs primarily rely on donations to support their functioning. To claim those tax exemptions (available to both donors and recipients), NGOs are to register under Section 80G and Section 12A of the Income Tax Act. The process is complicated and time-consuming, and it can be difficult for non-professionals to do it.
                        </p>
                        <p>Moreover, recent changes have mandated that all the NGOs who have already registered under these 2 sections re-register under sections 80G and 12A to continue enjoying those tax benefits. Further, if an NGO seeks CSR funding, they are required to register using Form CSR-1.</p>
                    </div>



                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Re-validation">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Re-validation Under Sections 12A and 80G
                        </h2>
                        <p>
                            The goal of a well- structured business plan provides the roadmap of the business with as much information as possible about what’s needed to reach its goals. Its helps to determine:
                        </p>
                        <ul className="">
                            <div>
                                <p className="text-[#9D3E55] arrow text-lg font-semibold">Time Taken:</p>
                                <p className="">The overall process may take up to three months, where the application shall be made within 1 week from the date of submission of documents. It holds a 5-year validity and requires renewal every 5 years.</p>
                            </div>
                            <div>
                                <p className="text-[#9D3E55] arrow text-lg font-semibold">Documents Required:</p>
                                <p className="arrow">Registered trust deed/society registration certificate/incorporation certificate</p>
                                <p className="arrow">Self-certified copies of audited annual accounts for the preceding three financial years</p>
                                <p className="arrow">NGO DARPAN ID (if receiving government grants)</p>
                                <p className="arrow">FCRA ID (if receiving foreign donations)</p>
                                <p className="arrow">Self-certified copy of the certification previously obtained under 12A and 80G</p>
                                <p className="arrow">A note on the activities of the applicant.</p>
                            </div>


                        </ul>
                    </div>

                    <div className="my-12" id="12A">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Registration Under 12A:
                        </h2>
                        <p>As registration under Section 12A is for tax exemption, an NGO which has not registered under this cannot enjoy the privilege of tax exemption and would have to pay taxes just as any normal registered company would during the year.</p>
                        <p className="text-[#9D3E55] text-lg font-semibold">How to Register Under Section 12A</p>
                        <p>All charitable trusts, societies, and Section 8 Companies, except private or family trusts, are eligible to register under Section 12A. But, before registration under 12A and 80G, an NGO has to first register with NGO Darpan, a register maintained by the Government of India, and then be registered under the Income Tax Act (This is not compulsory, it is an option available to trusts. A charitable organisation without Darpan can also apply for 12A and 80G) by following the steps mentioned below.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 1: </span>An application has to be filed in Form 10A with the Commissioner of Income Tax - Exemption</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 2: </span>The required documents need to be submitted</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 3: </span>Once the documents are submitted, the application will be reviewed by the Commissioner, who might ask for additional information</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 4: </span>If everything is found to be satisfactory, the registration will be completed soon after, else it will be rejected.</p>

                        <p className="text-[#9D3E55] text-lg font-semibold">Benefits:</p>
                        <ul>
                            <li className="arrow">80G certification enhances the prospects and credibility of any organisation</li>
                            <li className="arrow">Donors reap the benefits of less taxable incomes</li>
                            <li className="arrow">Possibility of attracting more donors</li>
                            <li className="arrow">Eligibility to get government funds</li>
                            <li className="arrow">NGO owners can seek foreign contributions without many hassles</li>
                        </ul>

                    </div>

                    <div className="my-12" id="80G">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Registration Under 80G:
                        </h2>
                        <p>As per Section 80G of the Income Tax Act, if an NGO gets an 80G certification then it’s donors will be allowed to reduce the amount of donation made from its total Income (proportion of deduction allowed depends on the type of organisation), thus being incentivised to contribute some part of their disposable income towards good causes.</p>
                        <p className="text-[#9D3E55] text-lg font-semibold">How to Register Under Section 80G</p>
                        <p>Any NGO that wants to register under Section 80G has to be duly registered and should be working specifically towards charitable objectives.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 1: </span>An application has to be filed in Form 10A with the Commissioner of Income Tax – Exemption.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 2: </span>Important documents are to be submitted</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 3: </span>Upon submission, the documents would be reviewed by the Commissioner. If required, he may ask for additional documents or information and the same have to be provided within the timeframe to avoid rejection</p>

                        <p className="text-[#9D3E55] text-lg font-semibold">Benefits:</p>
                        <ul>
                            <li className="arrow">Provision to gain grants from governments and international organisations.</li>
                            <li className="arrow">Registration certificate serves as valid proof of the purpose of the NGO and its operations.</li>
                            <li className="arrow">All NGOs, be they trusts, companies, or societies, are eligible to avail exclusion from taxes</li>
                            <li className="arrow">FCRA registration benefits.</li>
                            <p>New terms of Registration and Re-registration under Section 80G and 12A</p>
                            <li className="arrow">Newly established trusts applying for income tax registration will be given provisional registration for three years. It becomes due for renewal either upon commencement of activities or upon completion of 3 years.</li>
                            <li className="arrow">For Re-Registration, the tenure will be revalidated by income tax authorities for a period of 5 years and renewal will fall due upon completion of 5 years.</li>
                        </ul>

                    </div>






                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        a. What is the timeline involved for the new 12A and 80G registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        For new 12A and 80G registrations, they can be filed immediately upon incorporation.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        b. When can a trust apply for 12A and 80G?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We can apply for 12A and 80G soon after the Trust is registered. If in case the customer is applying after a year or two then their ITR is required.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        c. Do I have to be physically present during the process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        The process is 100% online. So, it doesn’t require your physical presence at any stage. Relax in the comfort of your home while we take care of everything.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        d. Can we apply for 12A and 80G separately?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes, you can apply for them separately in which case you have to apply for 12A first. However, doing them together is easier.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        e. How to check if my NGO is eligible for 80G registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        All government-approved organizations and trusts are eligible for 80G registration. To check, visit www.incometaxindia.gov.in and check for your organization/trust.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        f. What is the validity of the new 80G and 12A registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Earlier, 80G and 12A registrations were valid for the lifetime of an organisation. Now, in the case of provisional registration, the validity of 80G and 12A registrations has been kept at 3 years, or for 3 years from the commencement of activities, whichever is earlier and, in case of re-validation, the validity is 5 years.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Still Confused?
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
        </>
    );
}

export default Ngo_Registration