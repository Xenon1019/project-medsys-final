import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./barcode.css";

import ean13 from "./imgs/EAN-13.png";
import upcA from "./imgs/UPC-A.png"
import barcodeImage3 from "./imgs/Barcode Page Image 3.png";
import barcodeImage1 from "./imgs/Barcode Page Image 1.png";

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

export default function Barcode() {
    TabTitle("Barcode Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Barcode Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Barcode required to make product identification and fast billing.
                            Our professionals can assist you in obtaining GS1 as well as EAN 13 barcodes registration for your products.
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
                    Contact us for more information related to license and registration
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
                                    "Overview",
                                    "Compulsory",
                                    "Benefits",
                                    "Efficiency",
                                    "Types",
                                    "Howto",
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
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        Is Barcode Registration Compu...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Benefits of International Barcod..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        How Barcode Enhance Busin...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Constitution"
                                    >
                                        Types of Barcode
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        How to obtain Barcode Registr...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        Documents Required for Barco...
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
                        <h2 className="text-3xl text-[#560216] font-bold my-4">What is Barcode?</h2>
                        <p className="my-2">
                            Barcodes are vertical lines representation that can be scanned
                            electronically to fetch the product details faster. </p>
                        <p class="my-2">Barcode is used to encode the product details instantly such as product numbers, serial numbers,
                            and batch numbers. A barcode on product plays a vital role in the supply chain,
                            enabling all participants’ like Manufacturers, transporter, wholesaler to identify
                            products easily.
                        </p>

                        <p class="my-2">In addition to that, a barcode on products plays a vital role in a supply chain, supermarkets,
                            transportation, hospitals, and fast-moving retails chains.</p>
                        <p class="my-2">EAN-13 is the most commonly used type of barcode that has 13 numeric digits. UPC-A barcode is a
                            superset of 12 numeric digits.</p>
                        <img src={barcodeImage1} alt="" className="my-4 w-[300px]
                        mx-auto"/>
                    </div>

                    <div className="my-12" id="Compulsory">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Is Barcode Registration Compulsory?
                        </h2>
                        <p className="my-2">
                            Barcode registration is not a government mandatory requirement. A retail barcode will work fine even without registration
                            because stores enter the barcode number and link it to their billing or inventory software on an
                            individual basis.
                        </p>
                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Benefits">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of International Barcode Registration
                        </h2>
                        <p className="my-3">
                            We do not just provide barcode ownership to you. We ensure registration of EAN 13 & UPC barcode on an international barcode database along with product details.
                            Barcode registration enables visibility on google search for the barcode number affix on the product. On registration, Barcode scanning will return product information from an international database to the readers online.
                        </p>
                    </div>

                    <div className="my-12" id="Efficiency">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How Barcode Enhance Business Efficiency?
                        </h2>
                        <ul>
                            <li className="arrow">Eliminates Error</li>
                            <p className="mx-5">Barcode removes the chance of human errors. A barcode scan is fast and accurate and takes much less time than manual data entry.</p>
                            <li className="arrow"> Cost-effective & convenient</li>
                            <p className="mx-5"> Barcodes are really cost effective, easy to obtain and print, moreover they can also be customized.</p>
                            <li className="arrow">Detailed information</li>
                            <p className="mx-5">The Barcode contains all the relevant details of the product such as product numbers, serial numbers, and batch numbers and also ensures the genuineness of the product.</p>
                            <li className="arrow">Inventory control</li>
                            <p className="mx-5">Barcode registration saves the time of all supply chain Participants and makes easy for the product to move anywhere in lesser time.</p>
                            <li className="arrow">Saves time</li>
                            <p className="mx-5">Barcode registration saves a lot of time. All anyone just needs to do is scan the barcode affixed on the product and refer to the details thereof.
                            </p>
                            <li className="arrow">Better decision making</li>
                            <p className="mx-5">The consumers rely on Barcode scanned product information which is more accurate. This leads to immediate decision-making. </p>
                        </ul>
                    </div>

                    <div className="my-12" id="Types">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Types of Barcode
                        </h2>

                        <ul>
                            <li className="arrow">EAN-13</li>
                            <p className="ml-5">International Article Number previously called European Article Number. EAN-13 is the 13-digit barcode generally used in Europe, India and other nations.</p>
                            <img src={ean13} alt="" className="m-auto my-4" />
                            <li className="arrow">UPC-A</li>
                            <p className="ml-5">Universal Product Code or UPC-A is a 12-digit barcode generally used in US, Canada, UK, Australia and New Zealand.</p>
                            <img src={upcA} alt="" className="m-auto my-4" />

                        </ul>
                    </div>

                    <div className="my-12" id="Howto">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How to obtain Barcode Registration?
                        </h2>
                        <ul>
                            <li className="arrow">Upload the required documents & business details to our web portal.</li>
                            <li className="arrow">Consult our business advisor about a product for which seeking Barcode registration.</li>
                            <li className="arrow">Choose Package and Pay online with different payments modes available</li>
                            <li className="arrow">On placing an order, your application shall be assigned to one of our dedicated professional.</li>
                            <li className="arrow">After documents & information scrutiny, our team will file an application for product barcode registration.</li>
                            <li className="arrow">On successful barcode registration, we will provide barcodes and certificate.</li>

                        </ul>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required for Barcode Registration
                        </h2>
                        <ul>
                            <li className="arrow">Company Pan Card</li>
                            <p className="ml-5">A copy of PAN Card of the company is required as Proof of authentication of the business entity.</p>
                            <li className="arrow">Business Registration Proof</li>
                            <p className="ml-5">Such as GST registration, partnership deed, certificate of incorporation, shop establishment certificate, FSSAI license, etc.</p>
                            <li className="arrow">Canceled Cheque</li>
                            <p className="ml-5">A Cancelled Cheque is mandatory to be submitted for verifying bank account details.</p>
                            <li className="arrow">Audited Financial Statement</li>
                            <p className="ml-5">In order to ascertain the previous year's annual turnover of the business entity, last year's Audited Financial Statement is necessary.</p>
                            <li className="arrow">Product Details</li>
                            <p className="ml-5">Such as product number, serial number, batch number, MRP of the product.
                            </p>
                            <li className="arrow">Company Letterhead</li>
                            <p className="ml-5">Letter for requesting the allotment of barcode on the company letterhead must be submitted.</p>
                        </ul>
                        <img src={barcodeImage3} className="mx-auto w-[300px] my-3" alt="" />
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are different kinds of Barcodes?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p >Broadly there are 2 main kinds of Barcodes:
                                        <br /><br />
                                        EAN (European Article Number) Barcodes <br />
                                        UPC (Universal Product Code) Barcodes</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is GS1 Barcode?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    GS1 Barcodes are the coded symbols that carry
                                    information about a product which is saved in a machine readable format. GS Barcodes can be easily scanned
                                    using laser or camera device such as lightpen. Unlike manual data entry, which is a long, tedious and
                                    erroneous process, barcodes help in automatic data reading which is 100% accurate.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I register a Barcode?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Barcode is used to scan the product details instantly such as product numbers, serial numbers, and batch numbers. For the Barcode Registration process, E-StratupIndia professionals assist you to register in an easy and simple way.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How much does it cost for a barcode?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    There are different packages available that
                                    depend on how much quantity you want. Also, there is some barcode registration fee that adds to its cost.
                                    So, Barcode Registration cost varies on the turnover of the business, and the number of barcodes
                                    obtained and the period of subscription. Contact Our professionals for more details.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What type of information is there in GS1 Barcodes?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    GS1 barcodes carry the following type of information: <br /><br />
                                    Manufacturer details <br />
                                    Batch/lot number, <br />
                                    Expiry dates for food safety <br /><br />
                                    Apart from that GS1 barcode also carry Identification Keys, about physical objects like products, assets, shipments, or services and locations at any point in the supply chain.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can we get International barcode?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, you can get International barcode by applying for the same through the International Barcodes Network (IBN).
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are Benefits of GS1 Barcodes?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    GS1 barcode provides the following benefits to a business: <br /><br />

                                    Quick and precise data tracking anytime anywhere. <br />
                                    Less stock-holding and less waste <br />
                                    Greater responsiveness to trade customers and consumers <br />
                                    The ability to automate warehousing <br />
                                    Better control over distribution and storage <br />
                                    Fewer errors in the recognition of goods <br />
                                    Improved company to company communications throughout the supply chain <br />
                                    One standard for use with all trading partners, therefore no conflicting demands.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do I need to physically present for the process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, You don’t need to be physically present for the process, Medsys is an online catering platform all you need is internet connection in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at the remotest location of India.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will you provide this service in my town?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes Medsys is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many barcode is required is and when?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p >A separate barcode is compelled for each product variant like shape, size, colour, variety, flavour, weight, every manufacturer or retailer while applying the bar code has to identify the product as unique according to the criteria described below: <br /><br />
                                        * New product <br />
                                        * New product variant (shape, style, colour, flavour) <br />
                                        * Change of name <br />
                                        * Major product description change</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many barcodes do I need for one product?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    It is usually necessary to have a different
                                    EAN-13 barcode for each different product variation (each different size, colour, design etc). Specific products,
                                    such as greeting cards or postcards, sometimes use just one barcode number.
                                </AccordionItemPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do barcodes expire?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    As we know,  GS-1 Barcode requires renewal.
                                    Barcode furnishes the UPC, the Universal Product Code. It tells what is the product, the manufacturer, and the
                                    package size. But that does not contain an expiration date.
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