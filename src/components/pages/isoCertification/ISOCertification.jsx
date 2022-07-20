import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./isoCertification.css";

import isoImage from './imgs/ISO documents.png';


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

export default function ISOCertification() {
    TabTitle("ISO Certification - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Apply online ISO Certificaton</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            Get a quick online ISO Certification for your business. Medsys helps you in the entire process of securing ISO Certification in India. ISO 9001, ISO 14001, ISO 27001, ISO 45000, ISO 50001 and many more….
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
                    For more information regarding ISO Certification Filing
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
                                    'About',
                                    'IAF',
                                    'Help',
                                    'Useful',
                                    'Categories',
                                    'Process',
                                    'Documents',
                                    'Attachments',
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
                                        About ISO Certification
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        What is IAF?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        ISO in Business expansion
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        ISO 9001 To Small Business
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Best ISO for my Business
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Categories of ISO
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Process Flow
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
                            The International Organization for Standardization is a worldwide autonomous body for setting
                            various global standards for quality management.
                            It comprises of representative standardization organizations from various nations.
                            Established in 1947, the ISO frames and promotes worldwide industrial and commercial standards.
                        </p>
                    </div>

                    <div className="my-12" id="About">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            About ISO Certification
                        </h2>

                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Set of Standards</h3>
                            <p>The International Organization for Standardization's ISO series describes set of standards for a
                                Quality Management System based on the process model.</p>
                            <br />
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Customer Satisfaction</h3>
                            <p>ISO certification emphasis on achieving customer satisfaction for any general product or service.</p>
                            <br />
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Ensure Quality</h3>
                            <p>A certified quality management system demonstrates entity commitment to quality product and/or services and
                                customer satisfaction.</p>
                            <br />
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Fulfill Tender Eligibility</h3>
                            <p>ISO certification an essential requirement before carrying on business with a new vendor & eligibility to
                                enter global markets.</p>
                            <br />
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4"> Increase Business</h3>
                            <p>ISO certification helps business entity winning private & public contracts.</p>
                            <br />
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Operational Efficiency</h3>
                            <p>ISO certification helps in build customer satisfaction & improve operational efficiency within
                                the organization.</p>
                        </ul>
                    </div>

                    <div className="my-12" id="IAF">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What is IAF?
                        </h2>
                        <p className="my-3">
                            IAF stands for International Accreditation Forum. IAF is the world most recognised association of
                            global Accreditation bodies and
                            that are responsible for conformity assessment in various fields of quality management systems. An ISO
                            Certification issued by IAF member accreditation body carries more value and recognition in the world.
                            Even though, Government authorities prefer it for fulfilling eligibility criteria of government tenders.
                        </p>
                    </div>

                    <div className="my-12" id="Help">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How does ISO Certification help in Business expansion?
                        </h2>
                        <p className="my-3">
                            It’s become very difficult to grab a global buyer outside the country local boundaries for the
                            indigenous product. In today’s competitive global market, the buyers are looking for a top-notch quality
                            product with 0% defect. Here ISO certification play vital role to expand your business global presence.
                            ISO Certification logo ensure buyers a international quality of product before making an order. This way, ISO
                            certification can help you to enter the global markets easily.
                        </p>
                    </div>

                    <div className="my-12" id="Useful">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How is ISO 9001 Usefull to small Businesses?
                        </h2>
                        <p className="my-3">
                            Evidently, the most recent version of ISO 9001, i.e. ISO 9001:2015 is much lucrative for small
                            and medium enterprises.
                            There are innumerable benefits for small businesses such as
                            <br />
                            The ISO 9001:2015 standard throws light on the results and is less rigid in terms of paperwork.
                            <br />
                            This ISO certification standard is highly flexible and can be easily adaptable by small enterprises,
                            especially those dealing with providing services.<br />
                            ISO certification 9001:2015 provides all relevant guidelines for organizational growth rather than merely
                            focusing on how to run your business.<br />
                            As a matter of fact, many small businesses are now adopting ISO certification 9001 due to its simplicity.<br />
                            Besides, it is more helpful in achieving desired results that can be noticed by target customers. Find out
                            more on ISO certification…
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Can I implement ISO 9001 QMS without hiring a consultant?
                        </h3>
                        <p className="my-3">
                            Yes, absolutely. In fact, there are many benefits to implementing ISO 9001 without a consultant, not just the
                            obvious one: cost.
                            Today being cost effective is a goal for every business, an ISO 9000 Consultant is a luxury that many
                            companies want to avoid. But how can you be responsible for implementing ISO certification 9001, if you have
                            not done it before?
                            Yes you can do it, if you get an ISO certification 9001 implementation effective tools. We offer procedures,
                            forms, a quality manual and tutorial videos developed by highly experienced ISO 9001 consultant in a wide
                            range of industries.
                            Our ISO 9001 implementation kit can be a very cost-effective alternative, rather than hiring ISO 9000 QMS
                            consultant for implementation.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Can I be certified with multiple ISO standards at a same time?
                        </h3>
                        <p className="my-3">
                            Yes, you can get ISO Certification under multiple ISO Standards. This way, you will get additional
                            recognition in the market.
                            The ISO 9001 standard has been harmonized with other standards such as ISO 14001 and ISO 27001, which means
                            they have similar requirements clauses. For example both ISO 9001 and ISO 27001 require management reviews,
                            internal audits, Document Control procedure, etc.
                            With the appropriate analysis and planning, your organization could save time and money by combining these
                            steps to avoid redundancy.
                        </p>
                    </div>

                    <div className="my-12" id="Best">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Which ISO Certification best for my business?
                        </h2>
                        <p className="my-3">
                            There are different kind of ISO Certification Standards which focus on different aspect of
                            business or organisational activity. ISO 9001 focus quality management system which helps organisation to
                            enhance customer satisfaction with
                            company product and services. Similarly ISO 14001 focus on environmental management and so on.
                            Before obtaining ISO certification, you must have look into your entire business process thoroughly and
                            analysis which part or parts of the process you desire to standardized with ISO standards. Accordingly choose
                            the ISO certification.
                        </p>
                    </div>

                    <div className="my-12" id="Categories">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Broad Categories of ISO Certification Standards
                        </h2>
                        <ul>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 9001</b> ensure company product & services meets customer expectations and enhance customer
                                satisfaction.</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 14001</b> maps out a framework that an organization can follow to set up an effective environmental
                                management system.</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">OHSAS 18001</b> allows a company to show their customers that company has effective health and safety
                                management system.</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 22000</b> allows a company to show their customers that company has effective food safety
                                management.</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 20000</b> allows demonstrating excellence and prove best practice in IT & improvement in the
                                delivery of IT services.</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 27001 </b> describes a best practice of company who involves in the information security management
                                system (ISMS).</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">CE Marking</b> on any brand is a manufacturer's affirmation that the product has complied with the
                                necessary requirements of the applicable European health, safety, and environmental protection benchmark.
                            </li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold">ISO 50001</b> describes best energy management practices which outline using energy
                                efficiently helps organizations save
                                money as well as helping to conserve resources and tackle climate change.</li>
                        </ul>
                    </div>


                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process Flow
                        </h2>
                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 1</li>
                            </h3>
                            <p>Upload the required documents & information to our web portal.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 2 </li>
                            </h3>
                            <p>Consult our business advisor regarding various accreditation body and standards.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 3 </li>
                            </h3>
                            <p>Our professional will verify the validity of documents & Information provided.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 4</li>
                            </h3>
                            <p>On Confirmation, make online payment with different payments modes available.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 5</li>
                            </h3>
                            <p>Carry ISO Consultancy, Documentation and Implementation.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Step 6</li>
                            </h3>
                        </ul>
                    </div>


                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documentes Required
                        </h2>
                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Business Registration Proof</li>
                            </h3>
                            <p className="my-3">A document proof of business required such as certificate of incorporation, GST certificate, MSME
                                certificate, Trademark certificate, etc.</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Letter Head or Visiting Card</li>
                            </h3>
                            <p className="my-3">A Letter Head or Visiting Card of the business required for which you are looking for ISO certification.
                            </p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Sales and Purchase Invoice</li>
                            </h3>
                            <p className="my-3">A Sale and Purchase Invoice evidencing the nature of business activity for which you’re
                                securing ISO certification.</p>
                        </ul>

                        <img src={isoImage} className="mx-auto my-4" />
                    </div>

                    <div className="my-12" id="Attachments">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Attachments Required for Filing Form CSR-1
                        </h2>
                        <ul>
                            <li className="arrow">Company CSR policy</li>
                            <li className="arrow">Company CSR report</li>
                            <li className="arrow">Company sustainability report</li>
                            <li className="arrow">Details of subsidiary(s)</li>
                            <li className="arrow">Details of other entity(s).</li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is ISO?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    ISO Stands for International Standards of Organization.
                                    ISO is an independent, non-governmental international organization with a membership of 162 national
                                    standard bodies
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the benefits of ISO certification?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The ISO standards have their own benefits under their particular domain within every industry.
                                    However, the common benefits of ISO certifications involve enhanced quality efficiency, tapping of
                                    market potential, ease in fulfilling eligibility for tenders, high level of client satisfaction a and
                                    increased morale of employees.
                                    By having a recognized management standard it tells your customers that you are keen to meet their
                                    expectations.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the criteria for ISO 9001 certification?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Any business entity can obtain ISO certification registration whether it is small, medium or big
                                    enterprises.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the process of getting ISO certified?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    In order to obtain ISO certificate, you need to hire a consultant or professional for proper
                                    documentation of your organisation process and to
                                    get proper staff training to comply ISO standards. Then your business will be awarded ISO 9001 2015
                                    certification.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the key distinction between various accreditation bodies giving ISO certificates?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    There isn’t any difference between accreditation bodies, all of them are providing ISO Certification
                                    The only difference you can mark is of market recognition, branding, and their prices.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How much time it will take in getting final certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    On providing the correct documents and information of business you can obtain the final certificate
                                    within 7-45 working Days.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will my business details listed on accreditation body website?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>Yes, we will make sure that your complete company details shall be published over accreditation body
                                    website on after obtaining ISO certification
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the validity of ISO certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Generally ISO certificate will be valid for 3 years subject to surveillance
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the authenticity of the certificate you provide?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Once your business gets ISO certified, the company details shall be published over an accreditation
                                    body’s website this will ensure the authenticity of the certificate
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Where do I check that I am an ISO 9001 certified entity?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    When your business entity gets ISO 9001 certified you will receive a certificate bearing a unique
                                    certificate number, i.e. ISO 9001.
                                    Using such unique number over accreditation’s body website you can verify that your business is an ISO
                                    9001 certified entity
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do you provide this service in my town?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, we can assist you in obtaining an ISO certificate in India through various well know
                                    accreditation body exist in India.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the cost of getting ISO Certified?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The cost of obtaining an ISO certificate in India depends upon various aspects, including in
                                    accreditation body from which
                                    you want to be ISO certified, nature of the business, size of organisation, level of ISO 9001
                                    Compliance, etc
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the ISO 9001 2015 certification cost?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    ISO certification 9001 cost vary body to body. Ask our adviser for best prevailing rate for get ISO
                                    Certificate.
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