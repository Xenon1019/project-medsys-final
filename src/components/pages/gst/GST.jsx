import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./gst.css";
import gst from "./imgs/gst.jpg";

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

export default function GST() {
    TabTitle("GST Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Easy Online GST Registration @ Only ₹399</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p className="my-2">
                            GST Registration in 7 business days
                        </p>
                        <p className="my-2">
                            Enjoy hassle-free processing as Medeasy lays the groundwork for your business!!
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

            <div className="mt-auto sm:w-4/5 px-5 mx-auto pb-10">
                <h2 className="text-3xl text-[#560216] font-bold my-8">
                    How Does GST Registration Work For You?
                </h2>

                <p className="my-2">
                    Any business offering sale of goods with annual turn over of 40 lacs or service with annual
                    turn over of 20 lacs would require the registration for GST and have a valid GST Number.
                </p>
                <ul>
                    <li className="arrow">
                        <b className="font-bold text-[#560216] text-lg pr-3">Step 1:</b>We help you get a Secure GST Identification Number.
                    </li>
                    <li className="arrow">
                        <b className="font-bold text-[#560216] text-lg pr-3">Step 2:</b>We make it easy for you to get your GST from the comfort of your own home.
                    </li>
                    <li className="arrow">
                        <b className="font-bold text-[#560216] text-lg pr-3">Step 3:</b>We will file your returns and complete all other compliances as and when
                        required..
                    </li>
                </ul>
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
                                    "Overview",
                                    "Components",
                                    "Rates",
                                    "GST",
                                    "Documents",
                                    "Application",
                                    "Return",
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
                                        Components
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Tax Rates
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        GST Return
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
                                        GST application
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#FAQs"
                                    >
                                        Return filling
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
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2 mb-4">
                            Launched on July 1 2017, the Goods & Services Tax (GST) applies to all Indian service
                            providers (including freelancers), traders and manufacturers. A variety of Central taxes like
                            Service Tax, Excise Duty, CST and state taxes like Entertainment Tax, Luxury Tax, Octroi, VAT
                            are absorbed in one tax – GST, implemented on 01.07.2017. GST is to be charged at every step of
                            the supply chain, with full set-off benefits available. The procedure for GST is entirely online
                            and requires no manual intervention..
                        </p>
                        <p className="my-4">
                            Every product goes through multiple stages along the supply chain, which includes the purchasing
                            of raw materials, manufacturing, sale to the wholesaler, selling to the retailer and then the
                            final sale to the consumer. Interestingly, GST will be levied on all of these 3 stages. Let’s
                            say if a product is produced in West Bengal but is being consumed in Uttar Pradesh, the entire
                            revenue will go to Uttar Pradesh.
                        </p>
                        <p className="my-4">
                            Also, taxpayers with a turnover of less than Rs.1.5 crore can choose composition scheme to get
                            rid of tedious GST formalities and pay GST at a fixed rate of turnover.
                        </p>
                    </div>

                    <div className="my-12" id="Components">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What are the components of GST?
                        </h2>
                        <p className="my-2 mb-4">
                            What are the components of GST?
                            GST will have 3 tax components, which includes a central component (Central Goods and
                            Services Tax or CGST) and a state component (State Goods and Services Tax or SGST) where
                            centre and state will levy GST on all entities, i.e. when a transaction happens within a
                            state. Inter-state transactions will attract the Integrated Goods and Services Tax (IGST),
                            to be levied by the centre, i.e. when a transaction happens one state to another.
                        </p>
                        <br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            What is the input tax credit?</h3>
                        <p className="my-3">
                            Input tax credit lets you reduce your tax you have already paid on inputs and pay the
                            remaining amount at the time of paying tax.
                        </p>
                        <p className="my-3">
                            You pay taxes on the purchase when a product is purchased from a registered seller, and
                            when you sell the product, you too collect the tax. With input credit, you can adjust
                            the taxes paid at the time of purchase with the amount of tax on sales (output tax) and
                            pay the balance liability of tax, i.e. tax on sale minus tax on the purchase.
                        </p><br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">
                            Who needs a GST Registration?</h3>
                        <p className="my-2">
                            Every business or corporation that are involved in the buying and selling and good of
                            services have to register for GST. It is mandatory for companies whose turnover is more
                            than Rs.20 lakhs (for supply of services) and Rs. 40 lakhs ( for supply of goods) yearly
                            to register for a GST.
                        </p>
                        <p className="my-3">
                            All businesses making interstate outward supplies of goods have to register for a GST
                            too. The same applies to businesses making taxable supplies on behalf of other taxable
                            persons, example Agents and Brokers.
                        </p>
                        <p className="my-3">
                            Also, as per the recent notification, e-commerce sellers/aggregators need not register
                            if total sales are less than Rs.20 lakhs.
                        </p><br />
                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Rates">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What are the GST tax rates?
                        </h2>
                        <ul>
                            <li className="arrow">Items that are considered basic necessities come under exempt list i.e. they are not
                                taxed.
                            </li>
                            <li className="arrow">
                                Household necessities and life-saving drugs etc. are taxed at 5%.
                            </li>

                            <li className="arrow">
                                Products like computers and processed food are taxed at 12%.
                            </li>
                            <li className="arrow">
                                Hair oil, toothpaste and soaps, capital goods, industrial intermediaries and
                                services are taxed at 18%.
                            </li>

                            <li className="arrow">Luxury items are taxed at 28%.</li>
                        </ul>
                        <p className="my-2">
                            You can see the tax rates for all the products
                            here:https://cbec-gst.gov.in/gst-goods-services-rates.html.
                        </p>
                        <p className="my-2">
                            Check out the GST calculator which comes in handy to calculate the Goods and Service
                            Tax using different slabs.
                            What is a GST</p>

                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="mx-auto aspect-video w-3/5 my-5" />

                    </div>

                    <div className="my-12" id="GST">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What is a GST Return?
                        </h2>
                        <p className="my-2">
                            A GST returns is a document containing details of income that is required to be filed as per
                            the law with the tax authorities. Under the GST law, a taxpayer has to submit two returns on
                            a monthly basis and one such return annually. All returns have to be filed online. Please
                            note that there is no provision for revising the returns. All invoices for the previous tax
                            period that went unreported must be included in the current month.
                        </p>
                        <p className="my-2">
                            Under GST, a registered dealer has to file GST returns that include: Purchases, Sales,
                            Output, GST (On sales) and Input tax credit (GST paid on purchases).
                        </p>
                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            What is GSTIN?
                        </h3>
                        <p className="my-2">
                            GSTIN is a unique identification number given to each GST taxpayer. To verify a GSTIN number
                            a person who has a GST number can log onto the GST portal.
                        </p>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            What is the GSTN (Goods and Service Tax Network)?
                        </h3>
                        <p className="my-2">
                            The Goods and Service Tax Network (or GSTN) is section 8 (non-profit), non-government,
                            private limited company. GSTN is a one-stop solution for all your indirect tax requirements.
                            GSTN is responsible for maintaining Indirect Taxation platform for GST to help you prepare,
                            file, rectify returns and make payments of your indirect tax liabilities.
                        </p>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <p className="my-2">
                            The list of documents required for registration of GST for various business are as follows:
                        </p>
                        <ul>
                            <h3 className="my-2 text-[#9D3E55] font-bold text-lg mt-3">Proprietorship</h3>
                            <li className="arrow">PAN Card and address proof of proprietor</li>
                            <h3 className="my-2 text-[#9D3E55] font-bold text-lg mt-3">LLP</h3>
                            <li className="arrow">PAN Card of LLP</li>
                            <li className="arrow">LLP Agreement</li>
                            <li className="arrow">Partners’ names and address proof</li>
                            <h3 className="my-2 text-[#9D3E55] font-bold text-lg mt-3">Private Limited Company</h3>
                            <li className="arrow">Certificate of Incorporation</li>
                            <li className="arrow"> PAN Card of Company</li>
                            <li className="arrow">Articles of Association, AOA</li>
                            <li className="arrow">Memorandum of Association, MOA</li>
                            <li className="arrow">Resolution signed by board members</li>
                            <li className="arrow">Identity and address proof of director</li>
                            <li className="arrow">Digital Signature</li>
                            <h3 className="my-2 text-[#9D3E55] font-bold text-lg mt-3">The following can be shown as proof of address of a director:-</h3>
                            <li className="arrow">Passport</li>
                            <li className="arrow">Voter Identity Card</li>
                            <li className="arrow">Aadhar Card</li>
                            <li className="arrow">Ration Card</li>
                            <li className="arrow">Telephone or Electricity Bill</li>
                            <li className="arrow">Driving License</li>
                            <li className="arrow">Bank Account Statement</li>
                        </ul>
                        <p className="my-2">
                            Add what works as identity proof, One can use a PAN Card, Aadhar Card as identity proof. For
                            address proof, any of the director’s can show their voters ID, passport, telephone bill,
                            electricity bill and telephone bill.
                        </p>
                    </div>

                    <div className="my-12" id="Application">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Preparation of GST application
                        </h2>
                        <p className="my-2">
                            One of our GST representatives will collect all the required documents and process the GST
                            application through the iCFO platform.
                        </p>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            Application Filing
                        </h3>
                        <p className="my-2 mb-4">
                            Once all the documents are collected, the application will be processed and filed. Then
                            immediately the ARN number will be issued.
                        </p>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            GST Registration Certificate
                        </h3>
                        <p className="my-2 mb-4">
                            The GST registration certificate and GSTIN will be issued upon verification of GST
                            application and other mandatory documents by the GST officer. Be aware that no hard copies
                            of the certificate will be issued and the GST registration certificate can be downloaded
                            from the GST Portal.
                        </p>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            Penalties For Failure To GST Registration
                        </h3>
                        <p className="my-2 mb-4">
                            As per the Section 122 of the CGST act, in India, there is a direct penalty for all those
                            taxable persons who fail to register for GST.
                        </p>
                        <h3 className="my-4 text-[#9D3E55] font-bold text-lg">
                            Voluntary Registration Under GST (for Companies With A Turnover Below Rs.20 Lakhs)
                        </h3>
                        <p className="my-2">
                            Any small business with turnover less than 20 lakh can voluntarily register for GST even
                            though it is not compulsory by law. Voluntary GST registration has its own advantages and
                            some of them are:
                        </p>
                        <ul>
                            <li className="arrow">Take input credit: In GST, there is a flow of input credit right from
                                manufacturers of the goods till the consumers, across the country. Input credit
                                means a taxpayer while paying tax on output can deduct the tax that has already been
                                paid on inputs and pay only the remaining amount. Voluntarily registered businesses
                                can increase their margins and profits through this.</li>
                            <li className="arrow">Do inter-state selling with no restrictions: SMEs can increase the scope of
                                their businesses and find prospective customers and explore online platforms</li>
                            <li className="arrow">Register on e-commerce websites: SMEs can widen their market by registering
                                through e-commerce sites.</li>
                            Have a competitive advantage compared to other businesses.
                        </ul>
                    </div>

                    <div className="my-12" id="Return">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            GST Return Filing
                        </h2>
                        <p className="my-2">
                            A GST Return Filing is a return document that contains details of the income of the
                            taxpayer. It has to be filed with the GST administrative authority. The document is used tax
                            authorities to calculate the tax liability of a GST taxpayer. A GST Return Filing form has
                            to include the following details.
                        </p>
                        <ul>
                            <li className="arrow">
                                Output GST (On sales)
                            </li>
                            <li className="arrow">Sales</li>
                            <li className="arrow">
                                Input tax credit (GST paid on purchases)
                            </li>
                            <li className="arrow">Purchases</li>
                        </ul>
                        <p className="my-2">
                            For filing a GST Return, you need to have GST compliant sales and purchase invoices
                            attached.
                        </p>
                        <img src={gst} alt="" className="mx-auto my-3 sm:w-[400px] aspect-auto" />
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the types
                                        of GST registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    There are four GST types namely
                                    <ul className="pl-3">
                                        <li className="arrow"> Integrated Goods and Services Tax (IGST)</li>
                                        <li className="arrow">State Goods and Services Tax (SGST)</li>
                                        <li className="arrow">Central Goods and Services Tax (CGST), and</li>
                                        <li className="arrow">Union Territory Goods and Services Tax (UTGST).</li>       
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the steps
                                        to download GST registration certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Here are the steps to download the GST registration certificate:
                                    <ul className="pl-3">
                                        <li className="arrow">Login to the GST portal</li>
                                        <li className="arrow"> {`Go to ‘Services’ > ‘User Services’ > ‘View/ Download Certificate`}
                                        </li>
                                        <li className="arrow"> GST registration certificate</li>
                                        <li className="arrow"> Click on the ‘Download’ icon</li>
                                        <li className="arrow"> Open the downloaded PDF document and take a printout</li>
                                    </ul>
                                    <p className="my-4">
                                        Display the printed certificate prominently at all your places of
                                        business in the State or UT.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the benefits of GST registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Listed are the benefits of GST registration:</p>
                                    <ul className="pl-3">
                                        <li className="arrow">Eliminates the cascading effect of tax</li>
                                        <li className="arrow">Composition scheme for small business</li>
                                        <li className="arrow">Simple and easy online procedure</li>
                                        <li className="arrow">Defined treatment for e-commerce operators</li>
                                        <li className="arrow">The number of compliances is lesser</li>
                                        <li className="arrow">Improved efficiency of logistics</li>
                                        <li className="arrow">The unorganised sector is regulated under GST.</li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Does GST apply to all businesses?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, GST
                                    applies to all service providers, manufacturers and traders. It extends to
                                    any dealers, bloggers and writers, import-export businesses, all kinds of
                                    startups and companies, whether they are LLPs, proprietorships,
                                    partnerships, or private limited companies.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many days will
                                        it take to get a GST number?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    GST
                                    registration usually takes between 5-7 working days.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can I apply for
                                        multiple GST registrations?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    No, there
                                    are
                                    no such provisions to check if the work has been copied by any third party.
                                    However, you can do a thorough search on the Internet to check if there is
                                    anything similar to yours.If a business operates in more than one state, the
                                    taxpayer must register for GST in each state separately. For example, if an
                                    automobile company sells in both Karnataka and Tamil Nadu, it must apply for
                                    GST registrations separately in both states.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        I Can I be
                                        voluntarily registered under GST?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="my-2">
                                        Yes, even if your annual turnover does not exceed the threshold limit (40/20
                                        lakhs), you can voluntarily register for GST.</p>
                                    <p className="my-2">
                                        Registering for GST not only helps you get your business recognised as a
                                        legal registrant, but it also allows you to take advantage of a variety of
                                        benefits, such as the ability to raise GST invoices, take advantage of input
                                        tax credits, and much more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the
                                        threshold limit for GST registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Businesses involved in the sale of goods whose turnover exceeds ₹40 lakhs
                                    (₹20 lakhs for north-eastern and hill states) are required to register as a
                                    normal taxable person. For service providers, the threshold is ₹20 lakhs
                                    (₹10 lakhs for north-eastern and hill states).
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Why is there a
                                        delay in GST registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="my-2">
                                        Delays in GST registration are expected due to many reasons such as:
                                    </p>
                                    <ul className="pl-3">
                                        <li className="arrow"> The officials send a clarification notice to submit additional
                                            documents</li>
                                        <li className="arrow"> Due to errors in documents such as name mismatches</li>
                                        <li className="arrow"> Aadhaar not being linked to the mobile number</li>
                                    </ul>
                                    <p className="my-2">The list is not exhaustive, but it is basically due to induced
                                        errors.</p>
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the
                                        composition scheme under GST?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="my-2">
                                        The composition scheme was introduced to reduce the compliance
                                        burden on small taxpayers and it allows them to file quarterly
                                        returns instead of monthly returns.
                                    </p>
                                    <p className="my-2">
                                        Any taxpayer whose aggregate turnover is less than 1.5 crores
                                        is eligible to opt for the scheme.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is the process with Medsys fully online?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, the process for GST registration is online completely. You can do
                                    everything in the personalised dashboard we provide for you.
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What happens once the GST registration process is over?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Once the GST registration process is over successfully, you will get a GST
                                    registration certificate and a valid GSTIN. You become eligible to claim the
                                    input tax credit and you can start filing GST returns.

                                    We can take care of your GST filings if you want. Just like the registration
                                    process, we make filing easy and comfortable..
                                </AccordionItemPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is an E-way Bill?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    EWay Bill is an Electronic Waybill a GST registered person should get for
                                    movement of goods in a vehicle whose value exceeds Rs. 50,000. You can do
                                    e-Way bill registration through e-Way Bill Portal
                                    (https://ewaybillgst.gov.in/).
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long can I wait to register under GST?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Any person should get a GST registration within 30 days from the date on
                                    which they become liable to register.
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