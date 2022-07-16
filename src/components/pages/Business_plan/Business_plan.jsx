import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Business.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import ContactForm from "../../ContactForm";
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
const Business_plan = () => {
    TabTitle("Business Plan - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Business Plan</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            To make the best impression on investors or banks, a well-Structured business plan is essential with a clear and brief message.
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
                    Contact us to know more about registration and license
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
                                    "What",
                                    "Why",
                                    "Advantages",
                                    "Factors",
                                    "How",
                                    "Procedure",
                                    "Compliances",
                                    "Applicability",
                                    "FAQs",
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#What"
                                    >
                                        What is a Business plan?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        Why Business Plan?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Advantages"
                                    >
                                        Advantages of Business Plan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Factors"
                                    >
                                        Factors to be considered
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#How"
                                    >
                                        How we prepare a business plan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Procedure"
                                    >
                                        Procedure
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
                    <div className="my-12" id="What">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">What is a Business plan?</h2>
                        <p className="my-2">
                            For any Business, A business plan is an essential document that contains information about the business model, operations, market analysis, financial performance, competitor analysis, and human resources. A plan provides a roadmap for the business. For a startup or any business, a business plan is a written document of your business’s future that tells what you plan to do and how you plan to do it. To make the best impression on investors and banks, a well-structured business plan is very important with a clear and brief message.
                        </p>
                        <p>An effective business plan provides angel investment for startups.</p>

                        <p className="">
                            For making a plan for products or services, Startup prepares them as part of the startup process of business for angle investment while existing businesses often prepare it when they want to change direction or strategy of a business. For seeking funding, a plan is required by all startups because it serves as the business roadmap and also attracts an angel investor.
                        </p>
                        <p>Medsys is a team of experienced professionals who help you to prepare well-drafted plans for your business with clear and concise concepts.</p>
                        <p>Medsys will help you to prepare a business plan from the comfort of your home, offering you services that are very specialized and tailored for each individual.</p>
                        <p>Get a free Consultation for Business plan preparation with Our Top Rated Experts with a simple registration.</p>
                    </div>



                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Why">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Why you Need a Business Plan?
                        </h2>
                        <p>
                            The goal of a well- structured business plan provides the roadmap of the business with as much information as possible about what’s needed to reach its goals. Its helps to determine:
                        </p>
                        <ul className="">
                            <li className="arrow">The funding amount needed to start the business</li>
                            <li className="arrow">The equipment or facilities needed for operation</li>
                            <li className="arrow">Competitor analysis</li>
                            <li className="arrow">Know your Customer</li>
                            <li className="arrow">Staffing needed</li>
                            <li className="arrow">Industry Analysis</li>
                            <li className="arrow">Startup Expenses</li>
                            <li className="arrow">Angle Investment for startup etc</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages of Business Plan Preparation
                        </h2>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Outside Funding- </span>A well-drafted plan attracts investors. You just need to show your well-structured plan with a clear and concise message. A well-structured plan is a milestone to get funding from investors.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Understanding your market- </span>A plan has a key feature of comprehensive market analysis where you see your industry analysis, target market, and competitors. You can learn from someone’s mistakes and earn benefits from doing your work in the right direction with less time and less funding.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Focus on your Business Strategies:</span>A plan helps you to choose the best strategies for your business. You can decide your task which you tackle first.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Decide your Financial Numbers: </span>A well-drafted plan contains financial projections for your business and also it has initial funding requirements. A Plan also helps you decide your financial needs.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Roadmap of whole Business: </span>A plan is an essential document that contains information about the business model, operations, market analysis, financial performance, competitor analysis, and human resources. A plan provides a roadmap for the business.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Set Your Goals: </span>A well-written plan sets milestones of your business. You can work towards the key goals you want to achieve.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Angel Investor: </span>A well-drafted plan is essential for startups. A well-drafted plan provides angel investors for startup. They give him wings to fly higher.</p>
                    </div>


                    <div className="my-12" id="Factors">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Factors to be considered before preparing Business Plan
                        </h2>
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">Product</li>
                                <p>1. What Customer's want?</p>
                                <p>2. What other products or services capitalize on your existing network of relationships?</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Promotion</li>
                                <p>1. How can you grow your existing customer’s awareness of your product, so they help you grow?</p>
                                <p>2. How can you Network your way to new people and new potential Customers?</p>
                                <p>3. Can you Make use of social media and other new online tools for outreach and conversation?</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Place</li>
                                <p>1. What other geographic areas make sense to serve own business?</p>
                                <p>2. Do you have personal international contacts that would help you to explore a global market?</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Presentation</li>
                                <p>1. Paper Presentation of plans.</p>
                                <p>2. Reliable Model</p>
                                <p>3. Terminal Value( Show plan to investors)</p>
                                <p>4. Plan of different types of Customers</p>
                            </div>
                            <div className="my-2">
                                <li className="text-[#9D3E55] arrow text-lg font-semibold">Always Put Customer first in any Business Plan</li>
                                <p>Put the customer first and know your customer needs and benefits as you offer your product or service, this will give your business plan new wings to fly.</p>
                                <p>Always consider How much the product or service costs, and how you deliver it to the customer in their favor.</p>
                            </div>



                        </ul>
                    </div>

                    <div className="my-12" id="How">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How we prepare a business plan for your business?
                        </h2>
                        <p>
                            A well- researched, well-drafted and brief business plan guides and informs everything the new business does.
                        </p>
                        <p>A well prepared business plan consists:</p>
                        <ul className="">
                            <li className="arrow">Executive Summary</li>
                            <li className="arrow">Business Description</li>
                            <li className="arrow">Product or Service Description</li>
                            <li className="arrow">Mission Statement</li>
                            <li className="arrow">Market Analysis</li>
                            <li className="arrow">Operations plan</li>
                            <li className="arrow">SWOT analysis(Strengths, Weakness, Opportunities, Strengths)</li>
                            <li className="arrow">Management Team & Organization</li>
                            <li className="arrow">Financial Plan</li>
                            <li className="arrow">Startup Expenses & Capitalization</li>
                            <li className="arrow">Competitive Analysis</li>
                            <li className="arrow">Customer Analysis</li>
                            <li className="arrow">Industry Analysis</li>
                            <li className="arrow">Appendices</li>
                            <li className="arrow">Refining the Plan</li>
                            <p>
                                Want to know more, get a free Consultation for Business plan preparation with Our Top Rated Experts with simple registration.
                            </p>
                        </ul>
                    </div>

                    <div className="mt-auto sm:w-4/5" id="Procedure">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">
                        Procedure for Business Plan Preparation

                        </h2>

                        <ul className="my-2">
                            <p className="">
                            Medsys is a team of experienced professionals that help you to prepare a well-drafted plan for your business with a clear and concise concept.
                            </p>
                            <div>
                                <li className="text-[#9D3E55] arrow text-lg font-semibold">
                                    Step 1-Understanding your business:
                                </li>
                                <p className="my-4">
                                Before preparing your plan, our Experts will work with you to understand your business, your goals, your future plans, and the fund requirement.
                                </p>
                            </div>
                            <div>
                                <li className="text-[#9D3E55] arrow text-lg font-semibold">
                                    Step 2 – Drafting Business Plan: 
                                </li>
                                <p className="my-4">
                                Based on our understanding and receiving all the information we need, our experienced experts will begin drafting your plan with a clear and concise message which impress your investors or partner you show it to.
                                </p>
                            </div>
                            <div>
                                <li className="text-[#9D3E55] arrow text-lg font-semibold">
                                    Step 3- Business Plan Finalization:
                                </li>
                                <p className="my-4">
                                Once your plan is drafted, you can provide your comments or inputs to finalize and after accepting your inputs, we prepare a final Business plan for your business that will impress your investors and define the successful roadmap of your business.
                                </p>
                            </div>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a. How many people are required to form a private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Minimum 2 people are required to incorporate a private limited company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. How much time it will take to form private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    From the date of submission of complete required documents, it will take approximately 14 working days to deliver certificate of incorporation in your hand
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c. Who can be a director of a company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Any person who attends the age of 18 can be director of the company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d. Is there any address proof required/mandatory for private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes to incorporate your company latest utility bill along with NOC from property owner in favor of company is required
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. How many shareholders can be there in a private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Minimum 2 and Maximum 200 shareholders can be added in the company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f. How many directors can be there in private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Minimum 2 Maximum 15 directors can manage the show of a company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    g. What is a DSC?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    DSC stands for Digital Signature Certificate. It is basically a pen drive containing your signature in a digital form and is password protected.It is mandatorily required to sign the various incorporation applications by directors and shareholders digitally. It is only issued by government authorized agencies.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    h. What are MOA and AOA?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    MOA and AOA are charter documents of the company. It defines the business objectives and rules & regulations of the company. It is drafted by our professionals and delivers to you along with Certificate of incorporation
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    i. Will you provide this service in my town?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes Medsys is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    j. I am into a job? Can I start my own company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes you can, but do check your employment agreement before starting, it must be having a proper authorization of it
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Still Confused?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </>
    );
}

export default Business_plan