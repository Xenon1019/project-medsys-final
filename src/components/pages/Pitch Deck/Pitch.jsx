import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
// import trustImg from "./imgs/Trust Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Pitch.css";

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
const Trust = () => {
  TabTitle("Registration of a Trust - medsysconsultancy.com");

  return (
    <>
      <pagesHeader />
      <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
            <h1 className="text-5xl font-semibold">Pitch Deck</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              Pitch Deck is key to open Investor Treasure.<br></br> Impress Your
              Investors and Build your financing resources and get the actual
              results with the aid of our Pitch Deck Services.
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
          Contact us for more information related to licence and registration{" "}
        </div>

        <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
          <a href="tel:+91 70204 38881">Call Now!</a>
        </button>
      </div>

      <div className="mt-auto sm:w-4/5 px-5 mx-auto">
        <h2 className="text-3xl text-[#560216] font-bold my-8">
          What is Pitch Deck?
        </h2>
        <p className="mb-10">
          A pitch deck is often a presentation of the company's business plan
          that demonstrates the company's business model, statistics,
          competitive analysis, team and funding requirements. It's a 15-20
          slide description of your company concept that includes the most
          important details.<br></br>
          <br></br> A successful Pitch Deck for startups is one that makes the
          company and its potential clear to individuals who are interested.
          Investors, banks, joint venture partners and even high-profile techies
          are all possible targets.<br></br>
          <br></br> It will include information on the founding team's
          background, the company plan, a brief market study, and financial
          projections. Before agreeing to another meeting, the majority of VCs,
          PE companies, and banks request a copy of your Pitch Deck and Business
          Plan and Project Report.<br></br>
          <br></br> Even if you don't intend to seek external funding, creating
          a Pitch Deck for Startups will help you figure out where your company
          is going in the long run.
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
                  "How",
                  "Components",
                  "Advantages",
                  "Dos",
                  "Step",
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
                    How Pitch Deck can help your S..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Components"
                  >
                    Components of Pitch Deck for S..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Advantages"
                  >
                    Advantages of having Pitch D..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Dos"
                  >
                    Do’s and Don’ts for Pitch..
                  </a>
                </li>

                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Step"
                  >
                    Step by step Timeline for Onlin..
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
              A pitch deck can be used by startups and entrepreneurs to present
              investors a comprehensive yet quick overview about the startup
              business model. The goal of a pitch deck for startups is to spark
              the enthusiasm of investors to invest in startup companies. It
              also focuses on attracting the attention for further meetings and
              raising capital.
            </p>
          </div>

          <div className="my-12" id="How">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              How Pitch Deck can help your startup?
            </h2>
            <ul>
              <li className="arrow">
                Narrate the tale of your concept to establish an instant
                connection.
              </li>
              <li className="arrow">
                Bring your brand to life and help banks and investors make more
                informed decisions about your company{" "}
              </li>
              <li className="arrow">
                Assists you in obtaining equity funding and may be business
                loans{" "}
              </li>
              <li className="arrow">
                Demonstrate to stakeholders in a concise manner the company
                concept, revenue model, profitability, and market credibility of
                your organization.{" "}
              </li>
            </ul>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className="my-12" id="Components">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Components of Pitch Deck for Startups
            </h2>
            <h3 className="text-[#9D3E55] font-semibold ">COMPANY PROFILE </h3>
            <p className="mb-5">
              Giving an overview of the Company and its products and services is
              critical for every startups' pitch deck. The Company's
              Purpose/Vision Your company's goal and vision must be clearly
              stated. In the end, it all comes down to this: "why?"
            </p>

            <h3 className="text-[#9D3E55] font-semibold ">
              PROBLEM & SOLUTION{" "}
            </h3>
            <p className="mb-5">
              Describe the problem existing in the market and how your product
              or service is solving Unique & Attractivesuch a problem.
            </p>

            <h3 className="text-[#9D3E55] font-semibold ">USP </h3>
            <p className="mb-5">
              Pitch Deck must convince why and how your solution is unique and
              not yet available in the market.
            </p>

            <h3 className="text-[#9D3E55] font-semibold ">
              MARKET VALIDATION{" "}
            </h3>
            <p className="mb-5">
              In order to prove strengths of the business, pitch deck for
              startups must display the market size for the product / service
              you are offering.
            </p>

            <h3 className="text-[#9D3E55] font-semibold ">TRACTION </h3>
            <p className="mb-5">
              Pitch Deck must show month-to-month increase in sales and
              customers. The objective is to alleviate potential investors'
              anxiety about taking on financial risk. An easy-to-read summary of
              key metrics, such as user count and earnings turnover ratio for
              the past year or so can be included on this slide.
            </p>
            <h3 className="text-[#9D3E55] font-semibold ">
              COMPETITIVE ANALYSIS{" "}
            </h3>
            <p className="mb-5">
              This slide in pitch deck for startups includes information about
              what differentiates your services or products from other companies
              or alternatives in the market.
            </p>
            <h3 className="text-[#9D3E55] font-semibold ">TEAMS </h3>
            <p className="mb-5">
              A company's core team's knowledge, experience and ability to
              develop and sell a product will be emphasized by this slide in the
              pitch deck for startups. Identifying and mentioning the most
              important teammates (and co-founders, if necessary) in the pitch
              deck and describing how their skills and past experience may
              assist develop the company's competitive edge is essential.
            </p>
            <h3 className="text-[#9D3E55] font-semibold ">
              FUNDING REQUIREMENT{" "}
            </h3>
            <p className="mb-5">
              One of the most common mistakes made by entrepreneurs when
              creating their pitch deck is not remembering to include the
              financial requirements for growing the business. It's critical to
              include the information, as well as a breakdown of how the money
              will be utilized to help the business achieve its objectives. This
              explanation will help investors develop the much-needed trust.
            </p>
          </div>

          <div className="my-12" id="Advantages">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Advantages of having Pitch Deck for Startups
            </h2>
            <p>
              Pitch Deck for startups articulates their prospects for success in
              a clear and concise manner for the benefit of banks, venture
              capitalists and other financial backers.<br></br>
              <br></br>
            </p>
            <p>
              As a computer geek who is skilled with technology but not skilled
              at presenting data in a way that businessmen can understand,
              you'll need a pitch deck to get the funds for your startup.
              <br></br>
              <br></br>
            </p>
            <p>
              Pitch Deck for startups can become an interactive media hub,
              making it ideal for small businesses. You can provide your
              customers with a single point of reference for all of your
              company's news and announcements.<br></br>
              <br></br>
            </p>
            <p>
              With hundreds of charts, graphs, shapes, feature films, and
              symbols that are crafted to perfection, you'll be able to turn any
              message into an easy-to-understand visual.<br></br>
              <br></br>
            </p>
            <p>
              Startup entrepreneurs and investors alike benefit greatly from the
              use of pitch decks. A strong pitch deck should have owners think
              critically about all aspects of their firm and clarify their own
              thoughts before delivering to investors.<br></br>
              <br></br>
            </p>
          </div>

          <div className="my-12" id="Dos">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Do’s and Don’ts for Pitch Deck for Startups
            </h2>
            <p className="text-[#9D3E55] text-lg font-semibold">
              DO’S FOR PITCH DECK FOR STARTUPS
            </p>
            <ul className="ml-5 mb-5">
              <li className="arrow">
                Prepare a captivating introduction to wow the viewers in the
                starting.
              </li>
              <li className="arrow">
                Set a time restriction for your presentation and stick to a
                15-20 slide limit.
              </li>
              <li className="arrow">
                Given that you now possess all pertinent facts, strive to be
                authentic and passionate for your pitch deck presentation.
              </li>
              <li className="arrow">
                Leave enough flexibility, space and time for any questions or
                remarks that may arise.
              </li>
              <li className="arrow">
                Must rehearse the pitch and prepare in advance to hone the
                content and presenting technique.
              </li>
              <li className="arrow">
                Assume the questions and write down or prepare all the answers
                possible.
              </li>
              <li className="arrow">
                Conduct your pitch deck in front of a group of individuals you
                can trust and who will give you constructive criticism. Keep
                practicing until you achieve mastery.
              </li>
              <li className="arrow">
                Be sure to double- and even triple-check your pitch deck for
                startups in advance.
              </li>
              <li className="arrow">
                Along with all the ideas offered above, be able to feel
                comfortable with your enterprise.
              </li>
            </ul>

            <p className="text-[#9D3E55] text-lg font-semibold">
              DON’TS FOR PITCH DECK FOR STARTUPS{" "}
            </p>
            <ul className="ml-5">
              <li className="arrow">
                Don't be nervous during the presentation and make your body
                language confident.
              </li>
              <li className="arrow">
                There's no need to get dragged down in the obvious information
                of the pitch deck.
              </li>
              <li className="arrow">
                Slides that are very verbose should be avoided.
              </li>
              <li className="arrow">
                Avoid rushing through the presentations. Ensure that the slides
                are visible to the audience.
              </li>
              <li className="arrow">
                Tell a narrative and let your thoughts flow freely. Don't be too
                confined to only certain points.
              </li>
              <li className="arrow">
                A follow-up may take care of providing further financial
                information, so don't go overboard with pitch deck for startups.
              </li>
              <li className="arrow">
                You must not have a sloppy design, terrible graphics, or an
                unprofessional appearance of pitch deck for startups.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Step">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Step by step Timeline for Online Pitch Deck for Startups
            </h2>
            <ul className="">
              <li className="arrow">
                Our Professionals talk to startup founders and understand
                business model and vision
              </li>
              <li className="arrow">
                Prepare PPT design based on brand name and logo theme.
              </li>
              <li className="arrow">
                Prepare financial projections based on business model.
              </li>
              <li className="arrow">
                Share draft and finalize Pitch Deck PPT Slides.
              </li>
              <li className="arrow">Deliver 15-20 Pages Pitch Deck.</li>
            </ul>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why is Pitch Deck for Startups Important?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Entrepreneurs utilize a pitch deck as their initial point of
                    contact when contacting potential investors, whether by
                    email or in person. It serves as a startup's sales pitch to
                    potential investors, helping them grasp the complexities of
                    the venture in a way that is familiar to them.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  What are investors looking for in a Pitch Deck?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Information about your company's founders, the problem you 
                    are seeking to solve with the product or service, the traction they have already gained in the market and the rivals, 
                    as well as information about your business plan, should all be included in a pitch deck for startups.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  How crucial is the design of a pitch deck?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Design is critical for conveying your message — fundamental thought, marketing, and customer experience are all impacted by design. It also lends a professional aspect to a startup.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  Which members of the startup team should I highlight in my Pitch Deck?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  You should list your founders and any other team members who have a direct connection to your company, but don't list your whole team. Thus, Directors and managers who have a direct effect on the performance of the organization must be mentioned.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  What should never be included in Pitch Deck for startups?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Everything you don't want the public to know such as Trade Secrets, anything that asks for an investment, etc.
                  </p>
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

export default Trust;
