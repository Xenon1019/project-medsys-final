import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./drugLicense.css";


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

export default function DrugLicense() {
    TabTitle("Drug License - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Drug License</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            The authority issue the Food License to that business who is engaged in activities involving food or related
                            products for human consumption and
                            lays down the rules  regulations which has to be adhered to by Food Business Operators in India.
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
                    Drug License Registration at just ₹14999/- (inclusive of all taxes)
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
                                    'Forms',
                                    'Documents',
                                    'Process',
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
                                        Forms Of Drug License
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
                                        Registration Process
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
                            Drug license is an authorization granted by the authority under the Drugs and Cosmetic Act 1940 so as to perform the business of drugs/ medicines or cosmetics.
                            The Drug license is issued through the State Drugs Standard Control Organization or the Central Drug Standard Control Organization.
                        </p>
                        <p className="my-3">
                            The government has set down stringent laws and guidelines for the manufacturing and distribution of drugs and medicines within India. The registration of Drug License and everything identified
                            with drugs is directed by the Drugs and Cosmetics Act 1940. Control is practiced over drugs from the raw material stage amid manufacture, sale, and distribution and up to the time it is given on
                            to a patient or buyer by a Pharmacist in the retail drug store, hospital or a dispensary. Drug license is requisite to be taken for a wide range of drugs or cosmetics business which includes allopathic, homeopathic, ayurvedic or Unani drugs and so forth. The act also covers the Pharmacist's actions, hospital or dispensary utilization of drugs.
                            The act covers the Ayurvedic and Unani drugs likewise in it.
                        </p>
                    </div>

                    <div className="my-12" id="Forms">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Forms for Drug License for sale and wholesale of Drugs:
                        </h2>
                        <p className="my-3">
                            Drugs have varieties of categories, and for various categories, the different license is mandatory to obtain, by filing various forms as given underneath:-
                        </p>
                        <ul>
                            <li className="arrow">FORM 20 is for the sale of Allopathic drugs.</li>
                            <li className="arrow">FORM 20-A is for the sale of Restricted Allopathic drugs.</li>
                            <li className="arrow">FORM-20-B is for wholesale of Allopathic drugs.</li>
                            <li className="arrow">Form 20-C is for the sale of Homoeopathic medicines by retail.</li>
                            <li className="arrow">Form 21 is for Sale of Allopathic drugs specified in Sch C & C (1).</li>
                            <li className="arrow">Form 21-B is for wholesale of Allopathic drugs specified in Sch C & C(1).</li>
                            <li className="arrow">Form 21-A is for the retail sale of restricted Allopathic drugs specified in Schedule C (I).</li>
                            <li className="arrow">Form 20-F is for the retail sale of drugs specified in Sch. 'X'.</li>
                            <li className="arrow">Form 20-G is for wholesale of drugs Specified in Sch. 'X'.</li>
                            <li className="arrow">Form 20 BB & Form 21 BB R-62- D R  is for Sale of Drugs from motor vehicles (1) Drugs other than those specified
                                in Schedule C&C (1) (2) Drugs specified in Schedule C&C (1).</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <p className="my-3">
                            The lists of documents required for Drug License are:
                        </p>

                        <ul>
                            <li className="arrow">The corporation’s constitution (AOA/MOA).</li>
                            <li className="arrow">The photograph identity proof of sole proprietor, partner or their director.</li>
                            <li className="arrow">The papers of the owned property where the commerce would be carried out.</li>
                            <li className="arrow">For rented property, a copy of the rent agreement is required.</li>
                            <li className="arrow">The key plan and the site plan of the particular premises.</li>
                            <li className="arrow">Drug storage sometimes needs to be in the cold chain, therefore the particulars and invoice of the refrigerator in use.</li>
                            <li className="arrow">An affidavit relating to compliance with MPD 2021 and if premises are situated on DDA residential flat or building or a plot then their affidavit.</li>
                            <li className="arrow">An additionally exhaustive document is required for a registered pharmacist.</li>
                            <li className="arrow">Qualification proof in the form of degrees as well as certificates or mark sheets ( wholesale license).</li>
                            <li className="arrow">The certificate of registration with the state pharmacy council depending on the region.</li>
                            <li className="arrow">An appointment letter as well as biodata ( wholesale license).</li>
                            <li className="arrow">Any other additional wholesale documents for wholesale Drug License competent person.</li>
                            <li className="arrow">Any type of experience certificate ( wholesale license).</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Registration Process
                        </h2>
                        <p className="my-2">
                            The process for obtaining a Drug license is-
                        </p>
                        <ul>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 1:</span> Online application filling for the drug License, with the payment of a government fee.
                                The scanned copy of each and every document is uploaded at the time of filing the application.
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 2:</span> On receipt of the application, the drug inspector would visit personally the shop for verifying the documents and the accuracy of the information provided.
                            </li>
                            <li className="arrow">
                                <span className=" text-[#9d3e55] font-bold">Step 3:</span> On successful completion of the Inspection personal interview for by the inspector or such competent individual and depending on verification of every information and documents provided is correct the controller of drugs issues the Drug License.
                            </li>
                        </ul>
                        <p className="my-3">
                            The Drug Regulatory Body has made it compulsory for its authorities to attend as well as grant the licenses, whether retail or wholesale, within a period of 30 days, in the event that they satisfy all the necessary eligibility criteria.
                        </p>
                        <p className="my-3">
                            We at Medsys provide meticulous assistance to the clients in correctly filing the drug registration as per the rules.
                        </p>
                        <p className="my-3">
                            Medsys is a professional tech-based online and legal service that helps clients to simplify the procedures of all kinds of drug license registration, license, implementation,
                            tax concerns, and any additional legal compliances and services related to the pharmaceutical business in India.
                        </p>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is drug license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Drug License is an authorization from the government of India towards dealing with drugs.
                                    There are 2 types of license, the retail license and wholesale license  for drug distribution or sale in India.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is it necessary to obtain drug license beforeÂ the commencement of the drug business?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, before you start any business dealing in drugs, whether it is Allopathic Drugs, Ayurvedic Medicine, Homeopathy or Unani, to manufacture, distribute or sell the drugs,
                                    it is compulsory to obtain a license as per the nature of business by applying towards the controller of the drugs and cosmetics
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        For the grant of a drug license, does my shop be located at commercial premises?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Licenses for the sale of drugs could be granted only at premises which are commercial premises or other premises independent of residence,
                                    also recognized as mixed land use. The State drug office issues guidance which may be referred for this purpose.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are different types of Licenses Issued for the Pharmaceutical Business?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    There are various licenses, for instance,\nDrug Manufacturing License Wholesale Drug License,\nRetail Drug License,\nImport of Drugs or Cosmetics\nImport of Medical Equipment\nExport of Medicines etc
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the main purpose of obtaining a drug license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The main purpose of the Drugs and Cosmetic Act is to make sure the safety, efficiency, and conformity of the drugs as well as
                                    cosmetics sold in India towards the state quality standards for which certain restrictions have been provided under the Act.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I renew my drug license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You can submit the completed application with the following enclosures in the office of Drug Licensing Authority of your district within 15 days of online registration for renewal:

                                    Duly filled Form 19/19A/19AA/19C.
                                    Original Treasury challan after depositing the requisite fees.
                                    Original affidavit of proprietor/authorized partner/authorized director or authorized person of Pvt Ltd or Ltd Company or Trust or Society regarding no change in Name of the firm, Constitution(in case of Proprietorship or Partnership firm), premises since granting of the license.
                                    Documents related to Registered Pharmacist.
                                    Copy of Diploma Pharmacy; Registration Certificate from Pharmacy Council of a particular state; Copy of renewal of Registration; Copy of Appointment and Joining Letter.
                                    Original affidavit of Pharmacist.
                                    Documents related to a Competent Person (For wholesale licenses).
                                    Copy of Educational qualification certificate(s) including the High School Certificate.
                                    If the competent person is a registered pharmacist then all the documents as enlisted.
                                    Original affidavit of Competent Person.
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