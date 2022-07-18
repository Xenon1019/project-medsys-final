import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./startup.css";


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

export default function Startup() {
    TabTitle("Startup India Scheme - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Startup India Scheme</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            The Startup India campaign is a welcome initiative to boost entrepreneurship in India. It promotes bank
                            financing, simplifies the incorporation process and grants exemptions to startups. But, you need to
                            qualify as an “Eligible Startup” to avail all these benefits!!
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
                    What Is A Startup India Scheme?
                </h2>

                <p className="my-2">
                    Startup India Scheme is an initiative by the Government of India for generation of employment and
                    wealth creation. The goal of Startup India is the development and innovation of products and services
                    and
                    increasing the employment rate in India .
                </p>
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
                                    "Benefit",
                                    "Checklist",
                                    "Process",
                                    "Update",
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
                                        Benefit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Checklist
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
                                        Recent update
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
                        <p className="my-2">
                            The Startup India Scheme is an initiative by the government of India aimed at
                            encouraging the development and innovation of products and services and the creation of
                            employment opportunities across the country. One of the goals of the scheme has been simplifying
                            how to register a startup in India by reducing regulatory burdens and allowing them to focus on
                            their core business while keeping compliance costs low and also providing multiple benefits,
                            aside from the massive networking opportunities provided by the bi-annual startup festivals held
                            by the Government of India both domestically and internationally.
                        </p>
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className="aspect-video w-3/5 my-4 mx-auto" />

                    </div>

                    <div className="my-12" id="Benefit">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of Startup India Scheme
                        </h2>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">Income Tax Benefits</h3>
                        <p className="my-2">
                            Startups are now given an Income tax exemption for a period
                            of three years from the date of
                            incorporation provided they are certified as such by the Inter-Ministerial Board of
                            Certification. Also, upon obtaining recognition from the DPIIT (Department for Promotion of
                            Industry and Internal Trade), and if the aggregate amount of paid-up share capital and share
                            premium of the startup after the proposed issuing of shares, if any, does not exceed INR 25
                            Crore, the startup will also be exempt from capital gains tax under Section 56 of Income
                        </p>
                        <br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">Financial Benefits</h3>
                        <p className="my-2">
                            Startups are given a rebate on intellectual property rights (IPR) costs of 80% on patents and 50%
                            on Tradmark  and are actively assisted by
                            government-provided facilitators who aid with
                            protecting and commercializing the IPRs. The examination and disposal of the IPR applications
                            are also fast-tracked. The government will also pay the fees of the facilitators.
                        </p>
                        <br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">Registration Benefits</h3>
                        <p className="my-2">
                            Startup registration in India is still extremely complex, with incorporation and registration
                            being considered more difficult than the actual running of a business due to the arduousness of
                            the requirements. Under the scheme, the Startup India Hub, a portal to create networking
                            opportunities and assistance for startups, has been created with a problem-solving window being
                            provided by the government under the scheme.
                        </p><br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">Funding Benefits</h3>
                        <p className="my-2">
                            Certain states provide seed funding to startups certified under the scheme. To know about your
                            state and the requirements in place, Click here
                        </p><br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg"> Regulatory Benefits</h3>
                        <p className="my-2">
                            Under the Startup India Scheme, startups are allowed to self-certify compliance for six
                            labour laws and three environmental laws through a simple online procedure. For labour laws, no
                            inspections will be conducted for a period of 5 years unless there is a credible and verifiable
                            complaint of violation, filed in writing, and approved by an official who is at least one level
                            senior to the inspecting officer. In the case of environmental laws, startups that fall under
                            the ‘white category’ (as defined by the Central Pollution Control Board) would be able to
                            self-certify compliance, and only random checks would be carried out in such cases
                        </p>
                        <br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg"> Public Procurement Benefits</h3>
                        <p className="my-2">
                            Once your startup is certified by the Inter-Ministerial Board of Certification and a DIPP
                            (Department of Industrial Policy and Promotion) number has been issued to you, you can get
                            listed as a seller on the Government of India’s e-procurement portal – Government e-Marketplace
                            – and have the inside track on all Government of India Ministries/Departments/Public Sector
                            undertakings subject to your ability to meet quality and technical requirements. Certified
                            startups will also be entitled to exemptions on the earnest money deposit in your bid as well as
                            in terms of the requirements regarding prior turnover and experience.
                        </p>
                        <br />
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg"> Faster Exit Benefits</h3>
                        <p className="my-2">T
                            he government has initiated provisions making winding down operations easier by appointing
                            an insolvency professional to fast-track the closure of operations and facilitate the sale of
                            goods as well as paying creditors, all while recognising limited liability. Startups with a
                            simple debt structure or those meeting the criteria outlined under this scheme will be able to
                            achieve a complete exit within 90 days.
                        </p><br />

                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Checklist">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Checklist under the Startup India Scheme
                        </h2>
                        <p className="my-2">An organisation will be eligible under the scheme if</p>
                        <ul>
                            <li className="arrow">
                                It is incorporated as a private limited company or registered as a partnership firm or a
                                limited liability partnership in India
                            </li>
                            <li className="arrow">
                                It has been less than ten years from the date of its incorporation/registration
                            </li>
                            <li className="arrow">
                                Its turnover for any of the financial years since incorporation/registration has not
                                exceeded INR 100 Crores
                            </li>
                            <li className="arrow">
                                It is funded by an incubation fund, angel fund, or private equity fund that is registered
                                with the Securities and Exchange Board of India (SEBI)
                            </li>
                            <li className="arrow">
                                It has obtained a patron guarantee from the Indian Patent and Trademark Office
                            </li>
                            <li className="arrow">
                                It has a recommendation letter from an incubator
                            </li>
                            <li className="arrow">
                                It has a recommendation letter from an incubator
                            </li>
                            <li className="arrow">
                                It is working towards the innovation, development, or improvement of products or processes
                                or services, or if it is a scalable business model with a high potential for employment
                                generation or wealth creation
                            </li>
                        </ul>
                    </div>

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process to Register under the Scheme
                        </h2>
                        <p className="my-2">
                            The most important step is to register the company as one of only three possible types of
                            entities:
                        </p>
                        <ul>
                            <li className="arrow">
                                Private Limited Company, registered under the Ministry of Corporate Affairs and regulated by
                                the Companies Act, 2013 and the Companies Incorporation Rules, 2014. This type of structure
                                allows directors to be separate from the shareholders and provides limited liability for the
                                shareholders with certain restrictions on ownership. To know more about registering a
                                private limited company, please click here..</li>
                            <li className="arrow">
                                Partnership Firm, registered under the partnership firm act, is a structure where the
                                founders are subject to a partnership deed with the conditions outlined and registered with
                                the registrar of firms. Under this structure, the partners have unlimited liability, which
                                means they are personally liable for the debts of the business. However, low costs, ease of
                                setting up, and minimal compliance requirements make it the easier option for businesses
                                that are unlikely to take on any debt. To know more about registering a partnership firm,
                                please click here..</li>
                            <li className="arrow">
                                Limited Liability Partnership (LLP) registered under the Limited Liability Partnership Act,
                                2008 is a structure wherein a partnership firm takes on the characteristics of a private
                                limited company in terms of facilities such as limited liability and transferability. The
                                LLP structure was introduced into India in 2009 to provide a form of business that is easy
                                to maintain and to help owners by providing them with limited liability. To know more about
                                registering an LLP, please click here.</li>
                            <li className="arrow">
                                Once registered, click here and follow the steps outlined to be recognised by the DPIIT as a
                                startup under the Startup India Scheme, including uploading whatever documents they might
                                request and providing the information requested, such as registration/incorporation number,
                                representatives, directors/partners, address, date of incorporation, and so on.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Update">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Recent Updates
                        </h2>
                        <p className="my-2">
                            Startup India Scheme, Records A 60% Rise For Startup Registrations In The Year 2020 FromThe
                            Previous Year:
                        </p>
                        <h3 className="my-2 text-[#9D3E55] font-bold text-lg">Dec 16 2020</h3>
                        <p className="my-2">
                            Prime Minister Modi’s Startup India Scheme recently crossed the 40,000-mark for registered
                            startups, as recognized by the Department for Promotion of Industry and Internal Trade (DPIIT).
                            The total number for 2020 stands at 40,729, as per the latest Government data, which is a 63.4%
                            increase from 24,927 startups registered in 2019 (as recognized by DPIIT).
                        </p>
                    </div>


                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the legal definition of a startup in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Only
                                    A startup defined as an entity that is headquartered in India, which was opened less than 10 years ago and has an annual turnover of less than ₹100 crores (US$14 million).
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long does it take for a startup to be successful?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Most small businesses take at least 2 to 3 years to be profitable and become truly successful once they've hit the 7 to 10-year mark. Most small businesses take years to be successful, despite the overnight success of companies like Facebook..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How much time is needed for setting up a private limited company in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    If you have all the documents in order, it will take no longer than 15 days. However, this is dependent on the workload of the registrar..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the eligibility of designated partners/partners in an LLP?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Any individual, or even a company or an LLP, can become a partner. However, only an individual can become a ‘designated partner’ in an LLP.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What kind of start-ups commonly register LLPs?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Typically, only start-ups that will not be looking for venture capital funding register LLPs. This is because venture capitalists only invest in private and public limited companies..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is it cheaper to run an LLP than a private limited company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, it is much cheaper to run an LLP than a private limited company, particularly in your early start-up days. This is because many compliances, such as an audit, apply to LLPs only after their turnover is sizable. Most LLPs spend about half as much as a private limited company in their first year on registrations and compliance work..
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Which industry is the best in India for a startup?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    According to the Economic Times, as of 2020, the top-earning businesses in India are from the financial services, transport and support services, aerospace, defence, and security services, technology services, and health and education services.
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