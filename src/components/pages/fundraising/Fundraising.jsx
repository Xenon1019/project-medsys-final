import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./fundraising.css";


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

export default function Fundraising() {
    TabTitle("Fundraising - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Fundraising</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Guidance from legal experts <br />
                            Dedicated compliance team <br />
                            Presentation features that make you stand out.
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
                    Contact us for more information
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
                                    "Overview",
                                    "Howto",
                                    "Process",
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
                                        How to raise funds for startup?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Content"
                                    >
                                        Process of Fundraising for Busi..
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
                            During the early stages of a startup, the management team may not be fully formed;
                            products might still be in the developmental phase or testing phase; patents may not
                            yet have been granted; and even the website might still be in the design stage. In
                            such cases, the entrepreneurs will usually start to seek startup funding through accelerators,
                            angels, and venture capitalists to grow their business.</p> <br />
                        <p className="my-2">
                            Startup funding covers incorporation, website designing, and so on according to the needs.
                            Securing capital investment which is also called fundraising could be a significant turning
                            point for an entrepreneur. Medsys will help you discover various startup fundraising ideas.
                            Fundraising online and fundraising offline can fetch you more money depending on the fundraising
                            ideas.</p>
                    </div>

                    <div className="my-12" id="Howto">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How to raise funds for startup?
                        </h2>
                        <p className="my-2">
                            Fundraising happens in multiple stages:</p>
                        <p className="my-2">
                            Seed round (commonly called seed funding): As the name suggests, the company gets ‘seeded’ with the initial funds
                            to conceptualize the business idea and to bring it to the market. At this stage, the business
                            may not even have working prototypes set and could still be working towards developing the product.</p>
                        <br />
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">Series A:</b>
                            Once the company develops the product or service and begins
                            to gain traction, it starts looking out to venture capitalists for the next round of funding, to aid
                            in its early stage of growth.</p>
                        <br />
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">Series B:</b>
                            By this time, the business would have established a working
                            business model and gained some credibility in the industry. Now, with the potential to
                            grow further, additional capital would be required to expand operations and reach more customers.</p>
                        <br />
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">Series C:</b>
                            This round of funding happens when the company has proved its mettle in the industry
                            and is on the lookout for expansion of the customer base in new markets, targeting acquisitions,
                            and looking at innovation on other types of products. This may also be the last stage in a
                            company’s growth cycle after which it might go for an initial public offer (IPO).</p>
                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Process">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Process of Fundraising for Business
                        </h2>
                        <p className="my-2">
                            Medsys helps ambitious entrepreneurs and early-stage companies with best-in-class fundraising service to scale up their business. Our experts can be instrumental in getting your business off the ground.</p>
                        <br />
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">We Write -</b>
                            Just tell us about yourself and what you're working on, and we'll put it all together in your pitch deck</p>
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">We Design -</b>
                            Our design specialists will make sure your pitch deck reflects your brand's image and concept</p>
                        <p className="my-2"><b className="text-[#9D3E55] font-bold mr-2">We Deliver -</b>
                            Within 14 business days, you'll receive your completed pitch deck.</p>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion allowZeroExpanded={true}>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long will it take to raise money?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Once an investor has expressed interest in investing
                                    in your company and a term sheet is signed, closure of the investment process could take
                                    anywhere between 3-6 months on average. Note that this is only indicative and actual timelines
                                    could vary.

                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        On what grounds my firm will be evaluated?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    While each fund takes into consideration
                                    multiple factors before finally making an investment decision, in our experience, some key factors
                                    are - good traction indicators, size and nature of market (many investors feel 4 wheeler ride
                                    sharing market is too competitive at the moment for example), and prior experience of entrepreneurs.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will my company’s information remain confidential?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes. We take client confidentiality very seriously, and would be fine executing a non-disclosure agreement if the client requires.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        My firm is registered in the US. Can I still try to seek funds through Medsys?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Yes, we can definitely help you with your pitch deck and connect you to investors who are looking at US based businesses.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What qualifies as the best Pitch deck?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Key information that investors are looking for needs to be conveyed to them in a succinct manner, without glossing over any important data.
                                    Examples of good decks can be found for free online, to get a better understanding of what needs
                                    to be included, format to follow, etc. - Uber, Airbnb etc.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many days it will take to get the pitch deck ready from Medsys?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The deck should be ready in 15-20 days from the date on which
                                    information collection is completed. Keep in mind that we do a second iteration free of cost once
                                    the client has the chance to go through the first draft and provide inputs.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I know which product or service would generate interest among investors?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Not all investors would look into all business channels. Thorough market research with enhanced
                                    networking will help you. For further guidance, you can reach out to investor aggregators like
                                    Medsys.
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How do I convince them that my solution genuinely solves a need gap or problem?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You will have to present a pitch deck that states how your solution uniquely solves the need or the gap. For more information on how to draft
                                    your pitch deck and highlight your unique solution please contact Medsys and ask for your free
                                    funding consultation today. Our investor connect is one of the best in India.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I do fundraising online?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    At Medsys, we help determined and aspiring entrepreneurs like you to find the fundraisers to develop your business to reach the next stage.
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
        </>
    );
};