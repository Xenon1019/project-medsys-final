import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./ngoDarpan.css";


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { RelatedRead } from "../common";
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

export default function DSC() {
    TabTitle("Digital Signature Certificate - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">NGO Darpan Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            NGOs work towards good causes and the government supports them with many exemptions and relaxations. To be eligible for these,
                            an NGO is required to be enrolled on the government’s registry of NGOs: Darpan.
                            Medsys specialises in a seamless Darpan registration so your organisation can focus on what it does.
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
                    Contact us to know more about how we can help you with NGO Darpan
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="mt-auto sm:w-4/5 px-5 mx-auto">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    NGO Darpan Registration
                </h2>
                <div>
                    <p className="my-2">
                        NGOs work towards good causes and the government supports them with many exemptions and relaxations.
                        To be eligible for these, an NGO is required to be enrolled on the government’s registry of NGOs: Darpan.
                        Medsys specialises in a seamless Darpan registration so your organisation can focus on what it does.
                    </p>
                    <ul>
                        <li className="arrow">
                            <span className="text-lg text-[#9d3e55] font-bold my-4">
                                Right Entity Selection
                            </span>
                            <p className="my-2 pl-4">
                                Our experts will guide you on which entity is best suited for you.
                            </p>
                        </li>
                        <li className="arrow">
                            <span className="text-lg text-[#9d3e55] font-bold my-4">
                                Online Paperwork
                            </span>
                            <p className="my-2 pl-4">
                                We address all your queries regarding the process and assist you in gathering all
                                the necessary documents.
                            </p>
                        </li>
                        <li className="arrow">
                            <span className="text-lg text-[#9d3e55] font-bold my-4">
                                Registration
                            </span>
                            <p className="my-2 pl-4">
                                We complete the registration process on your behalf and make the necessary
                                filings.
                            </p>
                        </li>
                    </ul>
                </div>
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
                                    'Overview',
                                    'Advantages',
                                    'Checklist',
                                    'Documents',
                                    'Howto',
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
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Advantages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Checklist
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Documents Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        How to Register?
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
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Overview
                        </h2>
                        <p className="my-3">
                            The NGO Darpan is a service provided by NITI Aayog that allows VOs (village organisations)
                            and NGOs (non-government organisations)
                            to be eligible for new government schemes and grants. This platform works with the NIC and NITI Aayog to
                            strengthen the relationship between the government and non-profit organisations.
                        </p>
                        <p className="my-3">
                            Furthermore, completing the NGO Darpan registration process provides greater responsibility and
                            credibility to non-profit organisations. The portal has evolved and fully matured into an e-governance
                            application that
                            helps create a more transparent and healthy relationship between NGOs and the government.
                            Apart from that, any NGO/VO registered as a society/trust/private non-profit under Section 25 of the
                            Companies Act, 2013 or 1956 may apply for NGO Darpan registration.
                        </p>
                    </div>

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages
                        </h2>
                        <ul>
                            <li className="arrow">Assists NGOs and other VOs in interacting and engaging with government departments.</li>
                            <li className="arrow">Obtain a unique ID to help the NGO's credibility and goodwill</li>
                            <li className="arrow"> Department and Ministry websites collaborate with NGO Darpan to share critical information.</li>
                            <li className="arrow"> Up-to-date information on new schemes, projects, and the status of previous initiatives.</li>
                            <li className="arrow"> Contributes to the creation of a database or repository of information about VOs/NGOs.
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="Checklist">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Checklist
                        </h2>
                        <p className="my-3">
                            The organisation should be registered as Section 8 company, public charitable trust, or society.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Time Taken:
                        </h3>
                        <p className="my-2">
                            NGO Darpan is usually registered within 1 week from the date of submission of documents. In case there is
                            objection raised, that may lead to delays.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Eligibility:
                        </h3>
                        <p className="my-2">
                            Any VO/NGO registered as a trust/society/private limited nonprofit company under
                            Section-25 Company of the Indian Companies Act, 1956 is eligible to register under NGO Darpan.
                        </p>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
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
                        </ul>
                        <RelatedRead>
                            Related Read:Copyright Vs. Patent Vs. Trademark: Which One Is Right For You?
                        </RelatedRead>
                    </div>

                    <div className="my-12" id="Howto">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How to Register?
                        </h2>
                        <p className="my-2">
                            The government now requires NGOs and VOs to complete their Darpan registration online. To be eligible for
                            FCRA registration and to apply for other government grants,
                            the NGOs will need the NGO certificate or a unique ID. Here's a quick overview of the NGO Darpan
                            procedure.
                        </p><br />
                        <ul>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 1:</span> Visit the NGO Darpan’s official website
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 2:</span> Click on the ‘sign up’ button and create a user ID and password
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 3:</span> Then, select registration and fill out all of the necessary information about your NGO
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 4:</span> During this step, you will be required to provide basic contact information as well as
                                information about your PAN card
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 5:</span> Once you receive OTP on your registered mobile number, you can use it for verification
                                and password generation
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 6:</span> Log in using and choose the appropriate industry, fill in the achievements section and
                                enter the address
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 7:</span> Finally, click on the ‘submit’ button.
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is it mandatory for an NGO to do NGO Darpan Registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Completing NGO Darpan Registration is mandatory in order to possess any credibility as a
                                    non-profit organisation and to be eligible for new government schemes and grants.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do I have to be physically present during the process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The process is 100% online. So, it doesn’t require your physical presence at any stage.
                                    Relax in the comfort of your home while we take care of everything.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long does it take to get the Darpan registration done?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    NGO Darpan is usually registered within
                                    1 week from the date of submission of documents.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the validity of the Darpan registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Darpan registration is a one-time requirement. You have to register only once and it doesn’t need
                                    any renewals.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How much does it cost for NGO registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You can easily register your NGO with Medsys starting ₹3999/- only.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the best practices in NGO darpan?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Some of the best practices are: Understand the constituents for your grant proposal Target your efforts towards relevant grant proposals and agencies Keep an eye out for medium-sized businesses and funding agencies Highlight your internal evaluation and reporting systems in grant proposals Explain your internal systems in grant proposals.
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