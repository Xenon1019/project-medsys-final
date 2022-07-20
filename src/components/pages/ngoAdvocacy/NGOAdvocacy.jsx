import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./ngoAdvocacy.css";


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

export default function NGOAdvocacy() {
    TabTitle("NGO Advocacy - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Complications in NGO Compliance?</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            NGO compliance can be stressful especially when the laws relating to it are updated.
                            Work for your mission uninterrupted while our experts take care of your compliance tasks. Get our NGO compliance service now..
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
                                    'Eligibility',
                                    'Registration',
                                    'Section',
                                    'FAQs',
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Overview"
                                    >
                                        NGO Darpan Registration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Revalidation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Section 8
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
                    <div className="my-12" id="Eligibility">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            NGO Darpan Registration
                        </h2>
                        <p className="my-3">
                            NGO Darpan is a service provided by NITI Aayog that allows VOs (village organisations) and NGOs
                            (non-government organisations) to be eligible for new government schemes and grants.
                            Furthermore, completing NGO Darpan Registration is mandatory in order to possess any credibility as a
                            non-profit organisation.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            TIME TAKEN
                        </h3>
                        <p className="my-3">
                            NGO Darpan is usually registered within 1 week from the date of submission of documents.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Documents Required
                        </h3>
                        <ul>
                            <li className="arrow">Copy of the registration certificate as a PDF or JPG</li>
                            <li className="arrow">Pan Card of NGO</li>
                            <li className="arrow">PAN and Aadhaar card copies of 3 members in the executive committee</li>
                            <li className="arrow">Name of NGO/VO</li>
                            <li className="arrow">NGO address</li>
                            <li className="arrow">Registration number</li>
                            <li className="arrow">Date of registration</li>
                            <li className="arrow">Details of three members who are on the executive committee</li>
                            <li className="arrow">Details about funding from the government and chief area of working</li>
                            <li className="arrow">For more information about the NGO Darpan Registration, click here.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Registration">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            NGO Registration/Revalidation Under Section 80G and Section 12A
                        </h2>
                        <p className="my-3">
                            NGOs primarily rely on donations to support their functioning. To make these funds exempt from taxation, NGOs
                            are to register under Section 80G and Section 12A of the Income Tax Act. This cannot be obtained without
                            Darpan registration.
                        </p>
                        <p className="my-3">
                            80G registration helps you receive donations and enables you to issue exemption certificates to those who have
                            contributed to your NGO. Whereas, 12A registration exempts your NGO's excess income over expenditure from
                            income tax purview.
                        </p>
                        <p className="my-3">
                            Moreover, recent changes have mandated that all the NGOs who have already registered under these 2 sections
                            get re-validated under sections 80G and 12A to continue enjoying those tax benefits.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            TIME TAKEN
                        </h3>
                        <p className="my-3">
                            The overall process may take up to three months, where the application shall be made within 1 week from the
                            date of submission of documents. The registration has to be revalidated every 5 years.
                            The re-application has to be made six months before the date of expiry of the registration.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Documents Required
                        </h3>
                        <ul>
                            <li className="arrow"> Copy of the registration certificate as a PDF or JPG</li>
                            <li className="arrow"> Pan Card of NGO</li>
                            <li className="arrow"> PAN and Aadhaar card copies of 3 members in the executive committee</li>
                            <li className="arrow"> Name of NGO/VO</li>
                            <li className="arrow"> NGO address</li>
                            <li className="arrow"> Registration number</li>
                            <li className="arrow"> Date of registration</li>
                            <li className="arrow"> Details of three members who are on the executive committee</li>
                            <li className="arrow"> Details about funding from the government and chief area of working.</li>
                            <li className="arrow"> For more information about the NGO Darpan Registration, click here.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Section">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Section 8 Companies Annual Compliances
                        </h2>
                        <p className="my-3">
                            If you are a Section 8 company, you can opt for our annual compliance package designed specifically for
                            Section 8 companies.
                            The primary list of compliance tasks that are required and will be done for you under the package are listed
                            below:
                        </p>
                        <p className="my-3">
                            Other compliance activities are available on request.
                        </p>

                        <ul>
                            <li className="arrow">Appointment of an auditor</li>
                            <li className="arrow">Maintenance of a register</li>
                            <li className="arrow">Convening statutory meetings</li>
                            <li className="arrow">Report by directors</li>
                            <li className="arrow">Financial statements of the company</li>
                            <li className="arrow">Tax returns</li>
                            <li className="arrow"> Filing of financial statements</li>
                            <li className="arrow">Filing returns</li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I apply for a Psara license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Steps for apply for Psara license
                                    First, arrange the required documentation.
                                    Second, Sign MoU with a certified training institute
                                    Third, file application in form 1
                                    Fourth, complete the formalities regarding police verification
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Who can apply for Psara?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Indian national or citizen of such other nation as the Central Gov. may, by Official Gazette, specify; Individual who have attained 18 years of
                                    age but has not exceeded the age of 65 years; Individuals who duly satisfy the agency about his antecedents & character.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is Psara license mandatory for security agency?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    PSARA license is a legal mandate for conducting the business of private security in India. Such businesses facilitate
                                    trained security guards to various organizations across the country.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the validity of the PSARA License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Typically, a PSARA license comes with a validity of 5 years which can be extended further by filing the relevant application online.
                                    However, in the states like Chhattisgarh & Uttarakhand, it is valid for one year only.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the Government fee for PSARA Licence?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The government fees payable can be divided into the given categories:

                                    For one district -- Rs. 5,000/-
                                    For 2 to 5 districts in a state -- Rs. 10,000/-.
                                    For the entire state -- Rs. 25,000/-.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the role of Supervisor so appointed by the Private security agency in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Supervisors are liable to administer the agency’s operation and all the affairs related to security guards.
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the provisions regarding the License renewal?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The application pertaining to license renewal must be filed 45 days prior to the expiration date.
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is the grant of PSARA license is done on the state-wise basis?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, the grant of PSARA license is done on the state-wise basis.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        List down some key documentations for obtaining PSARA license in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    MOA, GST registration, MoU with training institute, PF and ESIC Registration, so and so forth.
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