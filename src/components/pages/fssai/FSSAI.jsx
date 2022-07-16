import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./fssai.css";


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

export default function FSSAI() {
    TabTitle("FSSAI License - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">FSSAI License</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Connect with Medsys to get your license without tedious paperwork and legal hassles.
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
                                    "Overview",
                                    "Functions",
                                    "Advantage",
                                    "Mandatory",
                                    "Documents",
                                    "Process",
                                    "Penalties",
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
                                        Key Functions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Advantages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Who are mandatory
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
                                        href="#Why"
                                    >
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#FAQs"
                                    >
                                        Penalties
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
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2">
                            FSSAI (Food Safety and Standards Authority of India) is a premier government body that underpins
                            standards for the selling, packaging, or storage of food items in India.
                            To ensure utmost food safety, the FSSAI has mandated every food business operator to secure an applicable food
                            license. FSSAI functions under the aegis of the Ministry of Health and Family
                            Welfare and the Government of India.
                            FSSAI outlines various guidelines and standards in accordance with the Food Safety and Standards Act,
                            2006.<br /><br />
                        </p>
                        <p className="my-2">FSSAI Basic Registration generally covers the small FBOs. It is entirely distinct from the FSSAI central and
                            state license. FSSAI Basic registration can be secured electronically by
                            filling the FSSAI registration form on an electronic system known as Food Licensing & Registration System
                            (FLRS).
                        </p>

                        <p className="my-2">
                            FLRS also enables the applicant to track the submitted application during the processing
                            stage. Almost, 35 States/Union Territories have been granted a license/registration certification
                            electronically.
                            The FSSAI license is usually granted for a timeframe ranging from 1-5 years.
                            The license holder should renew their certification before thirty days of the expiration date via the FLRS
                            portal.</p>
                    </div>

                    <div className="my-12" id="Functions">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Key Functions performed by FSSAI in India
                        </h2>
                        <ul>
                            <li className="arrow">Outlining rules and regulations pertaining to food safety and awareness</li>
                            <li className="arrow">Granting food licenses to eligible food businesses</li>
                            <li className="arrow">Setting out procedures & norms for food testing labs</li>
                            <li className="arrow">Facilitating recommendations to GOI in outlining new policies</li>
                            <li className="arrow">Collecting data related to contaminants in food articles</li>
                            <li className="arrow">Identifying the potential risks in the food sector or supply chain of food</li>
                            <li className="arrow">Conducting an on-site inspection of the premises dealing with food processing or manufacturing</li>
                            <li className="arrow">Leveraging rapid alert system for speedy detection of problems with food items available to masses</li>
                        </ul>
                        <p className="my-2">
                            FSAAI has underpinned a stringent operating framework for proprietary food units as most of them operate
                            without any regulations.
                            The authority has not allowed these entities to function without legal consent. It is vital for entities in the food sector regardless
                            of their scope of operation and annual turnover to register with FSSAI.
                        </p>

                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Advantage">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages of Securing an FSSAI Basic Registration
                        </h2>
                        <p>
                            Despite being a legal compulsion the FSSAI Basic Registration renders dozens of benefits to the Food business operators.
                            The common benefits of securing FSSAI Basic Registration include</p>
                        <ul>
                            <li className="arrow">Ensure better customer retention</li>
                            <li className="arrow">Instill trust among the target consumer</li>
                            <li className="arrow">Allow the business to thrive without legal hassles</li>
                            <li className="arrow">Ensure business expansion and better earning</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Mandatory">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Who are mandatory to secure the FSSAI Basic Registration?
                        </h2>
                        <p>
                            The FSSAI basic registration is mandatory for small businesses generating turnover fewer than Rs.12
                            lakhs/annum. Apart from this fundamental
                            criterion, the following businesses are also mandatory to secure this registration.
                        </p>

                        <table border="1" cellspacing="0" class="non-huf-table my-6 hidden sm:block" id="table1">
                            <tr>
                                <th>Items/Dealers</th>
                                <th>Capacity</th>

                            </tr>
                            <tr>
                                <td>Milk</td>
                                <td>500 litres per day</td>
                            </tr>
                            <tr>
                                <td>Milk solids</td>
                                <td>2.5 Metric Ton (MT) per annum</td>
                            </tr>
                            <tr>
                                <td>Vegetable oil or the process</td>
                                <td>Turnover of up to 100 kg or ltr per day.</td>
                            </tr>
                            <tr>
                                <td>Meat processing production</td>
                                <td>More than 100 kgs per day or 30 MT per day.</td>
                            </tr>
                            <tr>
                                <td>Slaughtering capacity</td>
                                <td>Less than 2 large animals or 10 small animals or 50 poultry birds per day.</td>
                            </tr>
                            <tr>
                                <td>Food units other than the above mentioned</td>
                                <td> 100 ltr/Kg per day.</td>
                            </tr>
                            <tr>
                                <td>Cold storage</td>
                                <td>The yearly turnover of up to Rs.12 lakhs.</td>
                            </tr>
                            <tr>
                                <td>Wholesalers</td>
                                <td>The yearly turnover of up to Rs.12 lakhs.</td>
                            </tr>
                            <tr>
                                <td>Retailers</td>
                                <td>The yearly turnover of up to Rs.12 lakhs.</td>
                            </tr>
                            <tr>
                                <td>Distributors</td>
                                <td>The yearly turnover of up to Rs.12 lakhs.</td>
                            </tr>
                            <tr>
                                <td>Suppliers</td>
                                <td>The yearly turnover of up to Rs.12 lakhs.</td>
                            </tr>
                            <tr>
                                <td>Dhaba owners</td>
                                <td>Rs.12 lakhs turnover per annum.</td>
                            </tr>
                            <tr>
                                <td>Clubs/Canteen</td>
                                <td>Rs.12 lakhs turnover per annum.</td>
                            </tr>
                            <tr>
                                <td>Hotels/Restaurant</td>
                                <td>Rs.12 lakhs turnover per annum.</td>
                            </tr>
                            <tr>
                                <td>Transporters</td>
                                <td>Rs.12 lakhs turnover per annum.</td>
                            </tr>
                        </table>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required
                        </h2>
                        <ul>

                            <li className="arrow">Photo identity of the FBO</li>
                            <li className="arrow">Identity proof such as a Voter Id, Ration Card, PAN Card, DL, Aadhaard Card, Passport, Senior Citizen
                                Card, etc.</li>
                            <li className="arrow">List of proposed food articles</li>
                            <li className="arrow">Form-B (duly filled and approved by the applicant)</li>
                            <li className="arrow">Partnership Deed/ Certificate of Incorporation (COI)/ Memorandum of Association(MOA)/ Articles of
                                Association (AOA)</li>
                            <li className="arrow">Proof of the business place such as a lease or rental agreement</li>
                            <li className="arrow">Food safety management system (FSMS) plan</li>
                            <li className="arrow">Supporting dossiers (if any0 such as NOC of Panchayat/ Municipality, health NOC</li>
                            <li className="arrow">List of raw materials suppliers</li>
                            <li className="arrow">Form IX</li>
                            <li className="arrow">Water test report facilitated by certified NABL certified lab.</li>
                            <li className="arrow">Import-export code (aka IEC) granted by DGFT</li>
                            <li className="arrow">List of machines and equipment present at the facility</li>
                            <li className="arrow">List of directors and Partners list</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process
                        </h2>
                        <ul>
                            <li className="arrow">
                                Every petty FBO shall register themselves with the Registering Authority (RA) by furnishing a registration
                                form (Form A) under schedule 2 of these regulations along with standard fee as cited in Schedule 3.
                            </li>
                            <li className="arrow">
                                The petty food manufacturer shall comply with underlying hygiene & safety norms cited in Part I of
                                Schedule 4 of these norms &
                                facilitate a self-attested document cum declaration of adherence to these norms with the form in the format cited in Annexure-1 under Schedule.
                            </li>
                            <li className="arrow">
                                The Registering Authority (RA) shall consider the application form and may either accord registration or
                                revoke it with concrete
                                reasons to be recorded in written or grant notification for inspection, within seven days of receipt of a registration form.
                            </li>
                            <li className="arrow">
                                In the case of an inspection being executed, the registration shall be accorded by the RA after being satisfied with the underlying conditions for safety, hygiene, and sanitary of the premises as cited in Part II of Schedule $ within the timeframe of 30 days.
                            </li><br />
                            <p className="mx-3">
                                If registration is not accorded or revoked, or inspection does not take place within 7 days cited in above
                                sub-regulation (3) or no decision is communicated within thirty days timeframe as cited in the above
                                sub-regulation (4), the business owner may commence its business undertaking, provided that it will be
                                incumbent on the FBOs to meet any improvement directed by the RA even later.</p>
                            <br />
                            <p className="mx-3 mb-2">
                                Provided that registration shall not be refused without giving the applicant an opportunity of being heard
                                and for reasons to be recorded in writing.</p>
                            <li className="arrow">
                                The Registering Authority (RA) shall accord a registration certificate & a photo identification card,
                                which shall be displayed at a business place at all times or cart or vehicle or any other place where the individual carries the food business in case of Petty Food Business.
                            </li>
                            <li className="arrow">
                                The Registering Authority (RA) or any institution authorized for this purpose shall inspect
                                the registered business place at least once a year.
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="Penalties">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Penalties
                        </h2>
                        <p className="my-2">
                            If an FBO is found guilty of undertaking business activities without a valid FSSAI license,
                            he/she may confront the jail term for a specified timeframe along with a monetary fine of up to 5 lakhs.</p>
                        <p className="my-2 text-[#9D3E55] font-bold text-xl mt-5">
                            FSS Act encloses the given penal provisions against the actions that are punishable offenses:</p>
                        <ul>

                            <li className="arrow">
                                Any individual trading non-branded food article, either himself or via a third party that functions
                                independently, shall be subjected to a penalty of up to 5 lakhs.
                            </li>
                            <li className="arrow">
                                In this scenario, any individual selling low-quality food articles, either himself or via a third party
                                that functions independently, shall be held accountable to face the underlying penalties.
                            </li>
                            <li className="arrow">
                                If individual trading, marketing, storing, or importing food items available to masses, either himself or
                                by an individual is found with an
                                extraneous matter, the FSSAI penalty for such parties is up to Rs 1 lakhs.
                            </li>
                            <li className="arrow">
                                If an individual, either himself or via a third party that functions independently manufactures or
                                processes food items meant for masses
                                under unsafe and unhygienic conditions shall be held accountable to face a penalty of Rs 1 lakhs.
                            </li>
                            <li className="arrow">
                                In severe cases where the consumer has encountered the life-death scenario due to the substandard
                                food article, the fine may go up to
                                Rs 5 lakh for the defaulter.
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I register for FSSAI
                                        basic?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    FSSAI registration process is
                                    commenced by filing an application in form A with the Food and Safety Department via the FoSCoS
                                    portal.
                                    During application filing, the candidates are required to upload the aforementioned documents in the
                                    prescribed format.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can I sell online with basic FSSAI
                                        registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, basic FSSAI registration also
                                    encompasses FBOs functioning in the online landscape.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What are the documents required for FSSAI
                                        Licence?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Common documents required to apply
                                    for Basic FSSAI registration include Voted ID, Aahaar Card, DL, Health NOC, business owner’s
                                    photographs, etc..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many days it will take to get FSSAI
                                        registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The Licensing authority usually
                                    takes around a week or so to grant the Basic FSSAI registration from the date of application
                                    submission.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        When FSSAI is required?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    FSSAI License/ Registration refers
                                    to the fundamental legal consent required for conducting food business in India.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Does homemade food require FSSAI
                                        Licence?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    All food business operators,
                                    including online food operators, are mandated to register with FSSAI. Any contravention to this
                                    requirement would provoke significant penalties.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I legally sell my homemade
                                        food?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Once you secure the applicable
                                    food license, you will become eligible to sell homemade food in India
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do I need a license to sell food from my
                                        home?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Business owners operating from
                                    their residential premises are also mandated to register with FSSAI.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What certificates do I need to sell
                                        food?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Applicable FSSAI license, trade
                                    license, Fire NOC, etc.
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