import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./shop.css";

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

export default function Shop() {
    TabTitle("Apply for Shop Establishment Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Apply for Shop Establishment Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            Contact our professionals to obtain shop establishment registration online for your business and shop
                            establishment license is required for all the shops running in India!!
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
                    Get in touch with us acquire various licenses, registrations,
                    and certifications
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="flex  h-full w-full">
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
                                    "Benefit",
                                    "Establishment",
                                    "Process",
                                    "Documents",
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
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Benefit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        What is Shop Establishment
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Constitution"
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
                <div className="h-full sm:w-3/4 px-5 sm:px-9 py-2">
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">ABOUT SHOP ESTABLISHMENT REGISTRATION</h2>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Meaning of shop
                        </h3>
                        <p className="my-3">
                            A place where any trade or business is carried and services are rendered to customers.
                            It
                            includes offices or warehouses for the purpose of trade.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Objective
                        </h3>
                        <p className="my-3">
                            Aim of Shop establishment is to govern and improve the working conditions of shop &
                            offices
                            and rights of the workers, like wages, leaves, holidays & work hours, etc.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Who required
                        </h3>
                        <p className="my-3">
                            It is mandatory for all business entities other than factories regulated by the
                            Factories
                            Act, 1948 to register under shopex.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Validity
                        </h3>
                        <p className="my-3">
                            Shop establishment certificate is valid for a certain period. This varies from State to
                            State. The owner shall apply for the renewal after expiry.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Gumasta Licence
                        </h3>
                        <p className="my-3">
                            According to the Maharashtra Shops and Establishment Act 1948, the shop establishment
                            certificate is known as Gumasta License.
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            E-Karmik
                        </h3>
                        <p className="my-3">
                            As per the Karnataka Shops and Commercial Establishments Act, 1961, the shop
                            establishment
                            license is referred to as e-Karmik.
                        </p>
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="mx-auto aspect-video w-3/5 my-8" />

                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>
                    </div>

                    <div className="my-12" id="Benefit">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            KEY BENEFITS OF SHOP ESTABLISHMENT REGISTRATION
                        </h2>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            KEY BENEFITS OF SHOP ESTABLISHMENT REGISTRATION <br /><br />
                            The significance of an obtaining Shop
                            Establishment Certificate can never be ignored as it emphasizes on the following aspects:
                        </h3>
                        <ul>
                            <li className="arrow">Regulation of working hours.</li>
                            <li className="arrow">Prevention of child labour</li>
                            <li className="arrow">Separate regulations regarding employment of female staff.</li>
                            <li className="arrow">Proper guidelines for record-keeping </li>
                            <li className="arrow">Fixed opening and closing time</li>
                            <li className="arrow">Intervals for rest & lunch</li>
                            <li className="arrow">Rules regarding Weekly-offs, working condition and wages</li>
                            <li className="arrow">Important measures such as hygiene & sanitation, lighting and ventilation, safety precautions
                                and hazard management</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Establishment">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            WHAT IS SHOP ESTABLISHMENT KNOWN AS IN DIFFERENT STATES?
                        </h2>
                        <p className="my-2">
                            Shop Establishment registration is known by different names in various states. For instance, in Delhi
                            it is known as Delhi Shopex, in Bihar it is known as Trade License, in Maharashtra it is known as
                            Gumasta License, and e-Karmik in Karnataka.
                        </p>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process of SHOPEX Registration
                        </h2>
                        <ul>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-1:</b> Upload the necessary Documents on our web portal.</li>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-2:</b> Choose the appropriate Package and Pay online with various payments modes
                                available..</li>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-3:</b> On placing order, your application will be assigned to one of our dedicated
                                professionals. .</li>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-4:</b> Our professional team will prepare your shop establishment application..</li>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-5:</b> Obtain shop establishment license from the labour department.</li>
                            <li className="arrow"> <b className="text-[#9D3E55]">Step-6:</b> Provide shop establishment certificate over the mail.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Documents Required For Shop Establishment License
                        </h3>
                        <ul>
                            <li className="arrow"> Passport size photo</li>
                            <li className="arrow"> Aadhaar card</li>
                            <li className="arrow">Proof of Business Address</li>
                            <li className="arrow">Details of the employees and manager of the business</li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Why is Shop Establishment
                                        a better option for me?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    If you have
                                    limited funds and want to get into fewer legal compliances for acting upon your
                                    business idea solely, Shop Establishment is the most suitable way to do start a sole
                                    proprietor business. Besides, you can easily grow your business over a period of
                                    time with lesser restrictions...
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How to get a shop
                                        establishment license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You need to
                                    provide a requisite document for obtaining shop establishment certificate or
                                    license. Our professional team shall submit the application with your documents and
                                    make follow up with government officials and obtain the certificate for you.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How much is the validity
                                        of the shop establishment certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The shop
                                    establishment certificate validity period depends upon the state under which the
                                    business entity is operating. In some states validity is lifetime and some states
                                    range from 1 year to 5 years. After that, the owner of the shop has to apply for the
                                    renewal of his shop establishment license or certificate.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can i open current bank account with shop establishment certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, Shop establishment certificate considered as a valid proof of you are doing
                                    business in the name of entity mentioned in the certificate and almost all bank
                                    accept shop establishment certificate as a documentary proof.
                                    <br /><br />
                                    We still advise you to verify from respective bank
                                    officials before applying for
                                    shop establishment registration.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much time does it
                                    take to get a Gumasta License in Mumbai?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                If there are
                                    proper documentation and error-free application, it will hardly take 10 days to
                                    complete the verification process and issue the shop establishment license..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Whom to inform in case of
                                    change of any information in shop establishment registration application?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                In case you need
                                    to change any detail in your application for shop establishment certificate, you
                                    need to file a modification application with updated details of the organisation...
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