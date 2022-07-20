import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./fssai_central.css";


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

export default function DSC() {
    TabTitle("FSSAI Central License - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Central FSSAI License</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            The authority issue the Food License to that business who is engaged in activities involving food or related
                            products for human consumption and
                            lays down the rules & regulations which has to be adhered to by Food Business Operators in India.
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
                                    'Overview',
                                    'Roles',
                                    'Needs',
                                    'Benefits',
                                    'Documents',
                                    'Process',
                                    'Validity',
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
                                        Role of FSSAI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Who Needs Central FSSAI
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
                                        Documents Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Validity & Renewal
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
                            FSSAI is a leading government agency that works for the well-being of the masses by implementing
                            relevant food safety norms.
                            Its ultimate objective is to formulate various guidelines and norms to incentivize food safety awareness in
                            India. Also, this institution keeps a constant
                            tap on entities involved in the supply chain of food, right from production to selling. Consumer awareness is
                            something that FSSAI takes very seriously.
                            And that is why it often rolled out various initiatives and keep the masses informed about substandard and
                            low-quality foods.
                            FSSAI formulates food safety norms and various other guidelines in view of the Food Safety and Standard Act,
                            2006.
                        </p>
                    </div>

                    <div className="my-12" id="Roles">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Role of Food Safety Standard Authority of India
                        </h2>
                        <ul>
                            <li className="arrow">Formulating guidelines and norms for the food sector</li>
                            <li className="arrow">Launching initiatives nationwide to create food safety awareness among the masses </li>
                            <li className="arrow">Granting mandatory food license and registration to food business operators</li>
                            <li className="arrow">Facilitating recommendations to GOI in outlining new policies</li>
                            <li className="arrow">Rolling out directions and guidelines in view of FSS Act, 2006 for the entities operating in the food sector</li>
                            <li className="arrow">Taking legal actions against food businesses allegedly involved in illicit practices such as food adulteration</li>
                        </ul>
                        <p className="my-3">
                            FSSAI has underpinned stringent norms for proprietary food units as the majority of them conduct their
                            operation without any norms.
                            FSSAI has mandated these facilities to secure FSSAI licenses without any exception.
                            As per the FSSAI, unregistered proprietary food units are not allowed to continue their business operation
                            without a valid food license.
                        </p>
                        <p className="my-3">
                            FSSAI has rolled the mandatory provisions for FBO and regulation of manufacturing, storage,
                            sale, & distribution process to ensure utmost food safety and hygiene.
                            The authority has also set up a legitimate information network for the awareness of the masses to secure valid
                            information related to food safety and hygiene.
                        </p>
                    </div>

                    <div className="my-12" id="Needs">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What is an FSSAI Central License and who needs it?
                        </h2>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            FSSAI Central Licence is legal consent granted by FSSAI to the food businesses which have:
                        </h3>
                        <ul>
                            <li className="arrow">Annual turnover greater than Rs 20 crores or; </li>
                            <li className="arrow">Various units running in multiple states or;</li>
                            <li className="arrow">Monthly or annual production greater than the prescribed threshold limit,</li>
                        </ul>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Apart from this basic criteria, FSSAI Central License also encompasses the following:
                        </h3>
                        <ul>
                            <li className="arrow">Dairy facilities producing milk solid with an annual production of 50000 liters or 2500 megaton </li>
                            <li className="arrow">Processing facilities producing vegetable oil with a daily production volume of 2 MT</li>
                            <li className="arrow">Slaughter facility with a daily capacity of:
                                <p className="pl-4">50 large animals</p>
                                <p className="pl-4">150 small animals </p>
                                <p className="pl-4"> 1000 poultry birds</p>
                            </li>
                            <li className="arrow">Meat processing facility having daily production capacity of 50 KG or 150 megatons</li>
                            <li className="arrow">Food processing facility having a daily production of 2 megaton</li>
                            <li className="arrow">Food business shipping food article abroad</li>
                            <li className="arrow">Facilities are having a refrigerator facility or cold storage having a storage capacity of 1000 megatons
                                or more.</li>
                            <li className="arrow">Wholesalers involved with the food business have a yearly turnover of more than Rs 30 crore</li>
                            <li className="arrow">Retailers & distributors of food articles having an annual turnover of more than Rs 20 crores</li>
                            <li className="arrow">A business dealing with catering service or food marketing having a yearly turnover of more than Rs 20
                                crores</li>
                            <li className="arrow">Restaurants, eating house having annual turnover of INR 20 Crore</li>
                            <li className="arrow">Food catering services operating in government-based agencies</li>
                            <li className="arrow">Food catering services in establishments working under the aegis of government, includes seaport
                                and airport as well</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Benefits">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of FSSAI Centra License
                        </h2>
                        <ul>
                            <li className="arrow">Improves Business Credibility overtime</li>
                            <li className="arrow">Allows businesses to a build large customer base</li>
                            <li className="arrow">Gives competitive advantage by keeping unregistered entities unfunctional.</li>
                            <li className="arrow">Creates chances for business expansion and growth</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Fundamental documents required for securing Central FSSAI License  Process Flow
                        </h2>

                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Following is the listicle of fundamental documents required to be submitted at the time of application
                            filing for central FSSAI license
                        </h3>

                        <ul>
                            <li className="arrow">Form B (duly filled and signed by the applicant)</li>
                            <li className="arrow">Floor plan of the production or processing facility, reflecting key areas with accurate measurements</li>
                            <li className="arrow">In case the applicant seeking registration for a company, a complete list of key management personal such
                                as name, residential proof.</li>
                            <li className="arrow">Copy of MOA, AOA & COI is necessary ( if the license seeker is a private limited company, OPC, and Public
                                limited company) </li>
                            <li className="arrow">A complete list of partners reflecting their name, contact detail, address, etc, along with a partnership
                                deed copy (In case the license seeker is a partnership firm)</li>
                            <li className="arrow">List of serving members in a co-operative society (In case the license seeker is a co-operative society)
                            </li>
                            <li className="arrow">Copy of a trust deed as well as the record of trustees ( if case the license seeker is a registered trust)
                            </li>
                            <li className="arrow">Utility bills (electricity bill, rent agreement, registry) of the business place for address proof</li>
                            <li className="arrow">Food Safety Management Plan (FSMS) or identical protocol in place</li>
                            <li className="arrow">Name & the list of machines present at the plant</li>
                            <li className="arrow">List of active raw material suppliers</li>
                            <li className="arrow">No objection certificate accorded by the concerned local authorities</li>
                            <li className="arrow">Tourism certificate accorded by the ministry of tourism (if the license seeker is a hotel owner)</li>
                            <li className="arrow">IEC certificate accorded by DGFT (Directorate General of Foreign Trade) (if the license
                                seeker intended to ship food articles abroad)</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Step-by-Step Process for Securing Central FSSAI License
                        </h2>

                        <p className="my-3">
                            The FSSAI License is primarily granted based on the scope of operation and production volume. The typical
                            steps involved in securing a State Food license include
                        </p>

                        <ul>
                            <li>
                                <h3 className="text-xl text-[#9d3e55] font-bold my-4">Step-1: Application Filing via Form B</h3>
                                <p>First, the license seeker is required to file Form B with the licensing authority. While doing so, the
                                    applicant has to keep basic turnover criteria in the mind.</p>
                            </li>

                            <li>
                                <h3 className="text-xl text-[#9d3e55] font-bold my-4">Step-2: Applicant scrutiny by FSSAI’s officials</h3>
                                <p>Once submitted, the application accompanied by requested documents will be sent to the concerned officials
                                    for in-depth scrutiny.</p>
                            </li>

                            <li>
                                <h3 className="text-xl text-[#9d3e55] font-bold my-4">Step-3: On-site inspection by FSSAI’s official of the business place</h3>
                                <p>In this step, the FSSAI will send the designated officials to the business place to determine the level of
                                    compliance recommended by FSSAI
                                    Any non-conformity in this regard could increase the chances of application cancellation.</p>
                            </li>

                            <li>
                                <h3 className="text-xl text-[#9d3e55] font-bold my-4">Step-4: Approval of application and grant of the application</h3>
                                <p>Once the licensing authority approved the application, the certificate would find its way to the license
                                    seeker in a few days. After getting the certification, the business owner can commence their business
                                    operation at full throttle.</p>
                            </li>
                        </ul>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Note: Displaying the Certificate at the business place is another legal mandate for the
                            license holder.
                        </h3>
                    </div>

                    <div className="my-12" id="Validity">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Validity and the Renewal of Central FSSAI license
                        </h2>
                        <p className="my-3">
                            The Central FSSAI license comes with a flexible validity duration ranging from 1-5 years. The cost of the
                            license would increase in accordance with the validity period.
                            As far as the renewal is concerned, the central FSSAI license should be renewed before the 30 days of the
                            expiration date, or else the penalties would be levied. The process of renewal for a food license
                            is as simple as applying for the new license.
                            While filing the renewal application, the applicant needs to upload the following documents
                        </p>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I get a central FSSAI
                                        license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    First, you need to file Form B
                                    available on the FSSAI’s official portal.

                                    During filing, you need to upload some key documents including firm registration, floor plan, and
                                    members
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Who needs a FSSAI central license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    As per the basic criteria set out
                                    by FSSAI, a business with an annual turnover of more than 20 crore needs to get this license.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I convert my FSSAI license to
                                        Central?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The formal request for such
                                    license conversion can be made on the FSSAI’s official portal..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the cost of an FSSAI Central
                                        License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The basic government cost for
                                    securing FSSAI Central License has been capped at Rs 7000 for one year.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Who gives FSSAI Central License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Food Safety Standards Authority of
                                    India
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Which are the three types of FSSAI
                                        license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    FSSAI Basic Registration, FSSAI
                                    State Licence, and Central FSSAI license
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long does it take to get a Central
                                        FSSAI License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    FSSAI Central license can take a
                                    time period of 30 days.
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