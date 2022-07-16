import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./pan.css";

import commencement from "./imgs/Commencement of Business.svg";
import claims from "./imgs/Easy Claims for Income Tax.svg";
import filingITR from "./imgs/Filing Income Tax Return.svg";
import tds from "./imgs/Lower TDS rate.svg";
import bankAccount from "./imgs/Mandatory to open a bank account.svg";
import proof from "./imgs/Valid Identity Proof.svg";

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

export default function PAN() {
    TabTitle("PAN Application - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">PAN Application</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        Paying taxes and launching a business is only possible by a Pan Card. Why wait when you can receive a PAN card
                        at Medsys instantly?
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
                    Contact Us To Help You With Your Pan Application
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

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
                                    "Benefit",
                                    "Documents",
                                    "Help",
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
                                        Benefit Of PAN
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Documents
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        How We Can Help You?
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
                    <div className="my-12" id="Benefit">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Necessity & Benefit Of PAN</h2>
                        <ul>
                            <li className="my-3 flex flex-row">
                                <img src={proof} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Valid Identity Proof
                                    </h3>
                                    <p>
                                        The vital feature of PAN is that it serves as an identity proof through the nation. PAN is also
                                        allotted to Companies,
                                        Partnerships firms, LLPs and even non-residents who are liable to pay tax to the Indian Government
                                    </p>
                                </div>
                            </li>
                            <li className="my-3 flex flex-row">
                                <img src={tds} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Lower TDS rate applicability
                                    </h3>
                                    <p>
                                        Availability of PAN may also reduce the rate of TDS applicable to the payments you receive. Such as:
                                        If the individual has not linked his
                                        PAN with his bank account, and the annual interest earnings on savings deposits are more than Rs.
                                        40,000/- then the bank would deduct 20% TDS instead of 10%
                                    </p>
                                </div>
                            </li>
                            <li className="my-3 flex flex-row">
                                <img src={claims} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Easy claims for Income tax refund
                                    </h3>
                                    <p>
                                        At times, the TDS from a taxpayer’s income is more than the actual tax liability. To claim the excess
                                        tax paid, the taxpayer must have PAN linked to his bank account
                                    </p>
                                </div>
                            </li>
                            <li className="my-3 flex flex-row">
                                <img src={filingITR} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Filing Income Tax Return
                                    </h3>
                                    <p>
                                        All eligible individuals and entities expected to file an income tax return are required to obtain
                                        PAN to file their tax returns
                                    </p>
                                </div>
                            </li>
                            <RelatedRead>
                                Related Read:Income Tax Returns (ITR) AY 2021-22: Which ITR Form Should You File?
                            </RelatedRead>
                            <li className="my-3 flex flex-row">
                                <img src={commencement} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Commencement of Business
                                    </h3>
                                    <p>
                                        ITo start a business, an organization or any other entity is mandatorily required to have a PAN
                                        registered in the name of its entity.
                                        Tax Registration Number (TRN) required for a business which is obtained only if the entity has a PAN
                                    </p>
                                </div>
                            </li>
                            <li className="my-3 flex flex-row">
                                <img src={bankAccount} alt="" className="inline aspect-square w-18 mr-5" />
                                <div>
                                    <h3 className="font-bold text-[#560216] my-2">
                                        Mandatory for opening a Bank account
                                    </h3>
                                    <p>
                                        All banks have made it mandatory for individuals and corporations to hold a PAN to
                                        open and operate a savings/current bank account in its name
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents
                        </h2>
                        <h3 className="my-2 font-bold text-[#9D3E55] text-xl">
                            Documents Required For Individual And Hindu Undivided Family (HUF)
                        </h3>
                        <h3 className="my-2 font-bold text-[#9D3E55] text-l">
                            Proof of Identity (Anyone)
                        </h3>
                        <ul>
                            <li className="arrow">Voter ID</li>
                            <li className="arrow">Aadhaar card</li>
                            <li className="arrow">Passport</li>
                            <li className="arrow">Driving License</li>
                            <li className="arrow">Ration card</li>
                            <li className="arrow">Pensioner card having a photograph</li>
                            <li className="arrow">
                                Original Identity Certificate signed by the Member of Parliament or Member of Legislative Assembly
                            </li>
                        </ul>
                        <h3 className="my-2 font-bold text-[#9D3E55] text-l">
                            Proof of Address (Anyone)
                        </h3>
                        <ul>
                            <li className="arrow">Electricity bill (not older than 3 months)</li>
                            <li className="arrow"> Passport</li>
                            <li className="arrow">Broadband connection bill (not older than 3 months)</li>
                            <li className="arrow">Bank account statement</li>
                            <li className="arrow"> Voter ID card with photograph</li>
                            <li className="arrow"> Post office passbook indicating the address of the applicant</li>
                            <li className="arrow"> Credit card statement</li>
                            <li className="arrow"> Latest order for property tax assessment</li>
                            <li className="arrow"> Driving license</li>
                            <li className="arrow"> Domicile certificate issued by Government</li>
                            <li className="arrow">Aadhar card</li>
                        </ul>
                        <h3 className="my-2 font-bold text-[#9D3E55] text-l">
                            Proof of Date of Birth (Anyone)
                        </h3>
                        <ul>
                            <li className="arrow">Birth Certificate</li>
                            <li className="arrow"> Passport</li>
                            <li className="arrow">Driving License</li>
                            <li className="arrow">Marriage Certificate (issued by Registrar of Marriages)</li>
                            <li className="arrow">Pension payment order</li>
                        </ul>
                        <h3 className="my-2 font-bold text-[#9D3E55] text-l">
                            Documents Required In Case Other Than Individual And HUF (I.E. Firms, Companies, BOI,
                            AOP, Trust, Limited Liability Partnership, Etc.)
                        </h3>
                        <table id="table1" border="1" cellspacing="0" class="non-huf-table my-4">
                            <tr>
                                <th >Sr.No</th>
                                <th >Type of Applicant</th>
                                <th >Documents</th>
                            </tr>
                            <tr>
                                <td >1.</td>
                                <td > Partnership firm</td>
                                <td >Copy of Partnership deed or certificate of
                                    registration issued by Registrar of firms</td>
                            </tr>
                            <tr>
                                <td >2.</td>
                                <td >Limited Liability Partnership(LLP)</td>
                                <td >Registration Certificate copy issued by
                                    Registrar of LLPs</td>
                            </tr>
                            <tr>
                                <td >3.</td>
                                <td >Company</td>
                                <td >Copy of certificate of registration as issued by
                                    Registrar of Companies</td>
                            </tr>
                            <tr>
                                <td >4.</td>
                                <td >Association of Persons (Trust)</td>
                                <td >Deed of Trust and Certificate of Registration
                                    Number issued by Charity Commissioner</td>
                            </tr>
                            <tr>
                                <td >5.</td>
                                <td >AOP, BOI, Local Authority or Artificial
                                    Juridical Person </td>
                                <td >Agreement Certificate of Registration Number
                                    Document originating from any Central/State Government establishing Identity and address of such person.
                                </td>
                            </tr>
                        </table>
                        <RelatedRead>
                            Related Read:How To Choose Between A Private Ltd. Company And LLP?
                        </RelatedRead>
                    </div>


                    <div className="bg-[#f6d5dd] h-full sm:w-3/4 px-5 sm:px-9 py-2">
                        <div className="my-12" id="Help">
                            <h2 className="text-3xl text-[#560216] font-bold my-4">How We Can Help You?</h2>

                            <h3 className="my-2 font-bold text-[#9D3E55] text-xl">
                                The Application For PAN Can Also Be Made Online For Which Our Team Will Complete The
                                Procedure For You:
                            </h3>
                            <br /><br />

                            <ul>
                                <li className="arrow"> Submit a service request by clicking here</li>
                                <li className="arrow">Our expert team will contact you with a simple checklist</li>
                                <li className="arrow">Fill in the checklist and submit the required documents</li>
                                <li className="arrow">Our team experts will verify the documents</li>
                                <li className="arrow">Application for PAN will be filed with the authority</li>
                                <li className="arrow">PAN allotted</li>
                            </ul>
                            <p className="my-3">
                                Throughout the process, our dedicated manager will keep you updated on the progress of the application
                            </p>
                        </div>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the validity of PAN?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    A valid PAN has validity for
                                    life-time throughout India. It is not affected by change/modification in address or
                                    change of Assessing Officer etc. However, any change/modification in the PAN database should be
                                    intimated to the
                                    Tax Department by furnishing the data in the form for “Request for New PAN Card or/ and Changes or
                                    Correction in PAN Data”.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can a person have more than a single PAN
                                        (i.e. more than one PAN)?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, if a PAN is allotted to a
                                    person, then he cannot apply for another PAN. A penalty of Rs. 10,000/- is liable
                                    to be imposed under Section 272B​ of the Income-tax Act, 1961 for holding more than one PAN at a time.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is it mandatory to file Income tax
                                        returns after obtaining PAN?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, it is not mandatory for an
                                    individual to file an Income tax return till the time you become liable to file the return under
                                    Section 139 of Income Tax Act, 1961.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do I need to submit my original
                                        documents?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, you may not be required to
                                    submit your original documents. However, if you are applying for a PAN offline, you will need to carry
                                    your original documents as they may require verifying the copies.
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