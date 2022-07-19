import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./dsc.css";


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
                        <h1 className="text-5xl font-semibold">Digital Signature Certificate</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            In today’s world, physical signatures are tough to come by, so why wait? Keep your work going by having a DSC and being able to sign from anywhere.
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
                    Our Digital Signature Certificate Packages Start From ₹1,999/- All-Inclusive
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="mt-auto sm:w-4/5 px-5 mx-auto">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    What Is A Digital Signature Certificate (DSC)?
                </h2>
                <div>
                    <p className="my-2">
                        Form CSR-1 is for the ‘Registration of Entities for undertaking CSR Activities’. All entities planning CSR
                        projects must submit this form to the MCA portal.
                    </p>
                    <ul>
                        <li className="arrow">
                            Digital Signature Certificates (DSC) are the digital substitute (i.e. electronic format) of
                            physical or paper certificates that proves as a source to authenticate the identity of the signer of a
                            document
                            or the sender of a message, and also assure that the original content of the document or statement that has
                            been sent is unchanged.
                        </li>
                        <li className="arrow">Hence, a digital certificate is also presented electronically to ensure one’s identity to
                            access information or services or to sign particular documents which are done digitally.</li>
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
                                    'Where',
                                    'Classes',
                                    'Documents',
                                    'Process',
                                    'Help',
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
                                        Why Is It Required
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Where Can The DSC Be Used?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Classes Of DSC
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
                                        Process Flow
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        How Will We Help You?
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
                            Why Is It Required?
                        </h2>
                        <ul>
                            <li className="arrow">To authenticate your identity electronically as the sender of the message</li>
                            <li className="arrow">To encrypt your data such that only the intended recipient can access it</li>
                            <li className="arrow">To equip your online transactions with a high level of security</li>
                            <li className="arrow">To ensure complete privacy of the information exchanged using a DSC</li>
                            <li className="arrow">To assure the recipient that the information has not been changed in transit</li>
                            <li className="arrow">To reduce the cost and time of signing the hard copy documents physically and scanning them to send them
                                via Email</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Where">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Where Can The DSC Be Used?
                        </h2>
                        <ul>
                            <li className="arrow">To communicate digitally signed and encrypted documents and emails</li>
                            <li className="arrow">For carrying out protected web-based transactions, or to recognize other associates of web-based
                                transactions</li>
                            <li className="arrow">In e-Tendering, eProcurement, MCA (e-filing), Income Tax (e-filing income tax returns) Applications and
                                also in many other applications</li>
                            <li className="arrow">For signing important documents in MS Word, MS Excel and PDF formats</li>
                        </ul>
                        <RelatedRead>
                            Related Read:Income Tax Returns (ITR) AY 2021-22: Which ITR Form Should You File?
                        </RelatedRead>
                    </div>

                    <div className="my-12" id="Classes">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Classes Of DSC
                        </h2>
                        <p className="my-3">DSC consist of three classes and each class is differentiated as per the level of security:</p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Class I
                        </h3>
                        <p className="my-2">
                            These DSCs furnish to the purpose where the risk is minimal. The class I signature is stored in the
                            software.
                            However, this only verifies the Name and E-mail ID of an individual and hence it can be used by Companies
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Class II
                        </h3>
                        <p className="my-2">
                            These DSCs are used to sign documents containing moderate risk. The class II signature is installed on a
                            hardware cryptographic device.
                            This class of DSC is required by Companies for filing Income tax returns
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Class III
                        </h3>
                        <p className="my-2">
                            These DSCs are the highest and most secure form of DSC and used where the data Compromise risk is at the
                            extreme level.
                            For obtaining Class III DSCs, the person himself has to appear before the certifying authority (CA). In
                            this class also, the signature is installed in a hardware cryptographic device
                        </p>
                        <p className="my-2">
                            An individual or entity who intends to participate in Online auctions or apply for e-Tenders
                            requires Class III DSC.
                        </p>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Identity Proof</h3>
                            <li className="arrow">Applicant’s PAN card</li>
                            <li className="arrow">Driving License</li>
                            <li className="arrow">Passport</li>
                            <li className="arrow">Post office ID Card</li>
                            <li className="arrow">Bank A/c Passbook with attached photograph and duly signed by an individual and attested by concerned
                                bank officials</li>
                            <li className="arrow">Photo identity card issued by the Ministry of Home Affairs of Centre/State Governments</li>
                            <li className="arrow">Any Government-issued photo ID card bearing the signatures of the individual</li>
                        </ul><br />
                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">Address Proof (Any one)</h3>
                            <li className="arrow">Aadhar Card</li>
                            <li className="arrow">Voter ID Card</li>
                            <li className="arrow">Driving License (DL)/Registration Certificate (RC)</li>
                            <li className="arrow">Electricity Bill (Not older than 3 Months)</li>
                            <li className="arrow">Water Bill (Not older than 3 Months).</li>
                            <li className="arrow">Property Tax/ Corporation/ Municipal Corporation Receipt</li>
                            <li className="arrow">Latest Bank Statement signed by the bank (Not older than 3 Months)</li>
                            <li className="arrow">VAT Tax/Service Tax/Sales Tax registration certificate</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process Flow
                        </h2>
                        <p> Digital Signature Certificates application procedure comprises of three Stages:</p><br />

                        <p>Stage 1 – Filling up of application</p>

                        <p>Stage 2 – Payment / Document Submission</p>

                        <p>Stage 3 – Download of the certificate</p>
                        <ul>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Stage 1 - Filling The Application</li>
                            </h3>
                            <p>Online Digital Signature Certificate application will be required to be filled based on the usage type,
                                user Type, Certificate class etc</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Stage 2 - Payment/Document Submission</li>
                            </h3>
                            <p className="my-2">
                                At this stage, after filling up the online application, payment will be made using payment gateway.
                                Further, the documents can be submitted either making a courier to
                                e-Mudhra or selecting a “Pick-up at doorstep” service (subject to availability of the facility in your
                                city/town)</p>
                            <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                                <li className="arrow">Stage 3 - Download Certificate</li>
                            </h3>
                            <p className="my-2">
                                After successful verification of the documents, an Email containing certificate download
                                credentials will be received.
                                Using such credentials, a digital signature certificate (DSC) will be downloaded onto the token or browser
                            </p>
                        </ul>
                    </div>

                    <div className="my-12" id="Help">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How Will We Help You?
                        </h2>
                        <ul>
                            <li className="arrow">Submit a service request by clicking here</li>
                            <li className="arrow">Our expert team will contact you to know your requirement and with a simple checklist</li>
                            <li className="arrow">Fill in the checklist</li>
                            <li className="arrow">Submit the documents</li>
                            <li className="arrow">Our expert team will verify the documents</li>
                            <li className="arrow">Application for DSC will be filed with the authority</li>
                            <li className="arrow">DSC granted</li><br />
                        </ul>
                        <p className="my-3">
                            Throughout the process, our dedicated manager will keep you updated on the progress of the
                            application
                        </p>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is a digital signature legally valid?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, the Information Technology Act of 2000 in India has provided legal validity to the use of digital signature.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long will it take for the application to be
                                        processed?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    DSC issuance would require approximately 5 business days from the date of applying/application
                                    for DSC.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Why do I need to submit the documents for obtaining DSC?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    A Digital Signature Certificate holds almost the same importance in the digital world as your
                                    Passport or PAN card holds in the physical world.
                                    Therefore, all data displayed on your Digital Signature Certificate needs to be verified before
                                    issuing the certificate.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can a person hold two digital signatures, say one for personal
                                        use and another one for office use?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, a person can hold two Digital Signature Certificates (DSC) and it depends on him which he
                                    wants to use for official purposes and which for personal purposes.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What will be the validity of the digital signature
                                        certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You can apply for a digital signature certificate having 1 year or 2 years validity from the date
                                    of issuance as per your convenience.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can a digital signature be forged?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, it is secure and has already been applied online for authentication. Thus it is more secure
                                    than an ordinary hand-written signature and practically impossible to forge a digital signature..
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