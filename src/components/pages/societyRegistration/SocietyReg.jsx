import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./societyReg.css";

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
    TabTitle("Online Society Registration India - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Online Society Registration India</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            Registration of society is required to promote the fine arts, science, literature, or knowledge sharing for a purposeful matter or for charity.
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
                    Contact us to know more about Society Registration
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="mt-auto sm:w-4/5 px-5 mx-auto">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    How To Register A Section 8 Company?
                </h2>
                <div>
                    <p className="my-2">
                        Trust Registration requires important documents like trust deed and
                        rental agreement. Our service experts help you with the complete
                        procedure for the formation of trust while taking care of all the
                        legal intricacies
                    </p>
                    <ul>
                        <div>
                            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
                                {" "}
                                Step 1:{" "}
                            </li>
                            <p className="my-4">
                                We address all your queries about Trust registration online
                            </p>
                        </div>
                        <div>
                            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
                                {" "}
                                Step 2:{" "}
                            </li>
                            <p className="my-4">
                                We help you get the entire process of filing and registration
                                completed.
                            </p>
                        </div>
                        <div>
                            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
                                {" "}
                                Step 3:{" "}
                            </li>
                            <p className="my-4">
                                We help you with the post-registration formalities and
                                compliances.
                            </p>
                        </div>
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
                                    'Process',
                                    'Compliances',
                                    'Documents',
                                    'Tax',
                                    'Why',
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
                                        Online Registration Process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Society compliances
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
                                        Applicability of tax exemption
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Why Medsys
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
                            A society is an organization in which a group of individuals with similar interest
                            come together to perform some functions. The said societies are governed by the Societies Registration Act
                            of 1860 and the said act is amended by the respective states.
                            The societies are registered and governed as per the said act. Registration of society is required to
                            promote the fine arts, science, literature, or knowledge sharing for a purposeful matter or for charity.
                            On the other hand, society is also formed for the maintenance of a residential or commercial complex or for
                            creating the Apartment Association.
                        </p>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Online Society Registration-Process
                        </h2>
                        <p className="my-3">
                            For registering a society, the following criteria must be fulfilled:
                        </p>
                        <ul>

                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Members:</b>Minimum of seven members for a state society and a minimum of eight members from eight
                                different states (one in Delhi) compulsory</li>
                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Jurisdiction:</b>Where the registered office of the society is situated. Before the District
                                Registrar in the particular area. For example, Charity Commissioner in Maharashtra.</li>
                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Governing Act:</b>The societies are governed by the Societies Registration Act of 1986.</li>
                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Property management: </b>The property of the society vests in the name of the society and the same
                                can be sold as per the terms mentioned in the bye-laws of the society. (e.g., approval from the Executive
                                Committee Member)</li>

                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Dissolution or closure: </b>Dissolution as per the bye-laws of the society, upon dissolution and
                                after settlement of all debts and liabilities, the funds and property
                                of the society may not be distributed among the members of the society, rather, the remaining funds and
                                property must be given or transferred to some other society, preferably one with similar objects.</li>
                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Board: </b> Executive Committee(President, Secretary, Vice President, Treasurer), General Body (All
                                members)</li>
                            <li className="arrow"><b className="font-bold text-[#9d3e55] mr-2">Annual compliance: </b>Societies must file annually, with the Registrar of Societies,
                                a list of the names, addresses and occupations of their managing committee members.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Compliances">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Society compliances
                        </h2>
                        <p className="my-3">
                            A trust shall after its registration shall do the following:
                        </p>
                        <ul>

                            <li className="arrow">Obtain PAN card</li>
                            <li className="arrow">Open a bank account</li>
                            <li className="arrow">Bookkeeping and accounts</li>
                            <li className="arrow">Annual IT filings</li>
                            <li className="arrow">Professional tax registration, if applicable</li>
                            <li className="arrow">GST registration, if applicable</li>
                            <li className="arrow">Compliance with the Registrar of Firm - Filing of AGM resolution, accounts to be
                                disclosed and member list to be filed with the Registrar of Firms.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required for trust registration certificate
                        </h2>
                        <ul>
                            <li className="arrow">PAN Card</li>
                            <li className="arrow">Residence Proof</li>
                            <li className="arrow">Memorandum of Association</li>
                            <li className="arrow">Article of Association</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Tax">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Applicability of tax exemption
                        </h2>
                        <p className="my-2">
                            There is a general notion that society need not pay tax as they work towards the welfare of the
                            public at large. But this is not true.
                            A society, like any other legal entity, is liable to pay tax. In order to be exempted from tax, a society is
                            required to obtain certification for
                            the said exemptions such as Section 12 A, 80G etc. from the income tax authorities.
                        </p>
                    </div>


                    <div className="my-12" id="Why">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Why Medsys For Online Registration
                        </h2>
                        <ul>
                            <li className="arrow">A full consultation to understand your requirement and to explain you the process from end to end</li>
                            <li className="arrow">All the paperwork needed to apply for a society registration, we will keep you informed about the entire
                                process and progress</li>
                            <li className="arrow">We help you with all the processes and procedures needed for registering your society</li>
                        </ul>
                    </div>


                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is there any maximum limit for the number of members in the
                                        society?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No. The society can any have any number of members. There is no prescribed upper limit
                                    according to the Societies Registration Act. However, there needs to be a minimum of 7 members.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        In what other ways an NGO can be registered in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Based on the cause and objectives, NGOs can be registered online as Trust or Section 8 companies.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Are government employees or officers allowed to be members of
                                        NGO?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes. Government employees or officers can be part of NGOs, provided the NGO is not working towards
                                    any anti-government activities or programmes.
                                    The intended members should ensure the
                                    particular organization is not profit making and that its members do not draw any salary from the
                                    NGO.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How is the property of the society managed?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The property of the society vests in the name of the society and the same can be sold as per the
                                    terms mentioned
                                    in the bye-laws of the society. (e.g., approval from the Executive Committee Member)
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