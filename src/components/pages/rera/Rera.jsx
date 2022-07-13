import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import benefitsofRERA from "./imgs/Benefits of RERA Registration Image.png";
import procedure from "./imgs/Procedure for RERA Registration Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Rera.css";

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
            <h1 className="text-5xl font-semibold">RERA Registration</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              Are you planning to get a RERA registration, what are you waiting
              for?
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
                  "Benefits",
                  "Eligible",
                  "Documents",
                  "Procedure",
                  "Penalties",
                  "Types",
                  "Entities",
                  "Renewal",
                  "Cancellation",
                  "Revised",
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
                    href="#Benefits"
                  >
                    Benefits of FCRA Registration
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Eligible"
                  >
                    Who are Eligible for FCRA Reg..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Documents"
                  >
                    Documents Required
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
                    href="#Penalties"
                  >
                    What are the Penalties for Viola..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Types"
                  >
                    What are the Types of Registra..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Entities"
                  >
                    Non-Eligible Entities for Apply...
                  </a>
                </li>

                {/* <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Renewal"
                  >
                    Brief on Renewal of FCRA Li..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Cancellation"
                  >
                    Cancellation/Suspension of FC..
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Revised"
                  >
                    Revised Conditions under FC...
                  </a>
                </li> */}

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
              RERA Registration is a registration covered under the Real Estate
              (Regulation & Development) Act. RERA stands for Real Estate
              Regulatory Authority which was established to regularize the
              problems that subsist in the real estate sector. Before
              Advertising, Marketing, Book, sells or, offers for sale or, invite
              persons to invest in any plot, apartment, or building is it
              mandatory to get the RERA registration. It is done in order to
              accompany with the bellow mentioned dependability, which are as
              follows:-
            </p>
            <ul className="">
              <li className="arrow">Ensures Transparency</li>
              <li className="arrow">
                Accountability (By minimizing the chance of fraud).
              </li>
              <li className="arrow">
                Provides the benefit and maintains the interest of the promoter
                and purchaser.<br></br>
                <br></br> The RERA Act is implemented at the state level, and
                the authorities governing the act are responsible for below
                mentioned things:-
                <ul className="ml-5">
                  <li className="arrow">
                    Registration and related approvals for the registration
                    under RERA of commercial properties and residential flats.
                  </li>
                  <li className="arrow">
                    Regulating the sale and purchase transactions of real estate
                    properties.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="my-12" id="Benefits">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              What are the Benefits of Obtaining the RERA Registration?
            </h2>
            <p className="my-2">
              Below-mentioned are the benefits of obtaining the RERA
              Registration:-
            </p>
            <ul>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Timely Possession Of The Property:
                </h3>
                <p>
                  RERA was introduced to provide transparency and accountability
                  towards the purchaser. RERA Registration helps the promoter in
                  providing the estimated date of completion of the project and
                  other related information. However, in case of failure, there
                  will be huge penalties imposed on the promoter.
                </p>
              </li>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Increased Compliances Reduces The Fraud
                </h3>
                <p>
                  Under RERA Registration, the promoter, and the agent has to
                  comply with various compliances that help in reducing the
                  fraud.{" "}
                </p>
              </li>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Enhances Trustworthiness
                </h3>
                <p>
                  RERA registration helps the promoter and agent in enhancing
                  the trustworthiness. The main reason behind this is that the
                  buyers prefer to deal with the builders having RERA
                  registration.{" "}
                </p>
              </li>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Clearance Of Assured License
                </h3>
                <p>
                  Under RERA Registration, it is mandatory to have the requisite
                  licenses before selling a unit. Hence the buyers cannot be now
                  attracted to fraudulent plans.{" "}
                </p>{" "}
              </li>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Complaints Handling
                </h3>
                <p>
                  All complaints or grievances raised by the buyers are directly
                  entertained under RERA.
                </p>
              </li>
              <li className="arrow">
                <h3 className="text-[#9D3E55] font-semibold ">
                  Proper Disclosure Of Projects And Activities Involved
                </h3>
                <p>
                  With the help of RERA Registration, all the compliances are
                  performed in such a way (including disclosure of projects and
                  activities that helps the buyers in obtaining the proper
                  disclosure of projects.
                </p>
              </li>
            </ul>
            <img className="mt-10 mx-auto" src={benefitsofRERA}></img>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className="my-12" id="Eligible">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              What is the Checklist on the Applicability of RERA Registration?
            </h2>

            <ul className="">
              <li className="arrow">
                It applies on the promoter, projects, and real estate agents.
              </li>
              <li className="arrow">
                It applies on commercial, residential, and plotted development.
              </li>
              <li className="arrow">
                It applies on any builder who wants to develop a property
                (Whether commercial or residential) on land that is more than
                500 sq. meters or the number of proposed apartments in all
                phases is more than 8 shall mandatorily obtain the RERA
                Registration.
              </li>
              <li className="arrow">
                It applies on the agents that are engaged in selling and
                purchasing the properties shall take the RERA registration
                certificate.
              </li>
              <li className="arrow">
                RERA Registration Certificate remains valid throughout the
                State. It applies to the Parties to the transaction.
              </li>
              <li className="arrow">Types of Properties, and Area</li>
            </ul>
          </div>

          <div className="my-12" id="Documents">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Documents Required
            </h2>
            <p>
              The documents required for RERA registration depend on who is
              getting registered under RERA i.e. the promoter or the Agent. Here
              is the list of documents required for RERA Registration:-
              Documents Required For Promoter Registration:
            </p>
            <ul className="">
              <li className="arrow">Id and address proof of the promoter.</li>
              <li className="arrow">Photographs</li>
              <li className="arrow">PAN Number</li>
              <li className="arrow">Email id</li>
              <li className="arrow">
                Commencement Certificate along with the Sanction Plan
              </li>
              <li className="arrow">Layout Plan</li>
              <li className="arrow">Location details of the project.</li>
              <li className="arrow">
                The plan of action works to be executed in the project.
              </li>
              <li className="arrow">
                Availability of Parking slots in the real estate project.
              </li>
              <li className="arrow">
                Legal title deeds considering the title of the promoter of the
                land on which the project is proposed.
              </li>
              <li className="arrow">
                Particulars of previous project experience of the promoter, if
                any. The particulars shall include:-
                <ul>
                  <li className="arrow ml-5">
                    Name and status of the project.
                  </li>
                  <li className="arrow ml-5">
                    Name and status of the project.
                  </li>
                  <li className="arrow ml-5">
                    Any delay in its completion. Additional Documents Are
                    Required If In Case Of Promotor As Company:
                  </li>
                  <li className="arrow ml-5">Certificate of Incorporation</li>
                  <li className="arrow ml-5">CIN / TAN number</li>
                  <li className="arrow ml-5">
                    Memorandum of Association and Articles of Association.
                  </li>
                  <li className="arrow ml-5">
                    The Audited balance sheet of 3 financial years along with
                    the Audited report and director’s report of the preceding 3
                    years.
                  </li>
                  <li className="arrow ml-5">
                    Particulars of directors/chairperson or any other authorized
                    person. Documents Required For Real Estate Agent
                    Registration{" "}
                  </li>
                  <li className="arrow ml-5">
                    Id and address proof of the applicant{" "}
                  </li>
                  <li className="arrow ml-5">Photographs </li>
                  <li className="arrow ml-5">
                    Particulars of real estate agent Company (that includes
                    name, registered address, Byelaws, MOA, AOA, and type of
                    company.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="my-12" id="Procedure">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Procedure{" "}
            </h2>
            <p>
              The process of RERA Registration is done state-wise and hence
              varies from state to state. The process of registration is online,
              and the application is filed from the official website of the
              state in which registration is required to be done.<br></br>
              <br></br>
            </p>
            <p>
              Every real estate Promoter/agent is required to make an
              application for RERA registration to their respective state. An
              application shall be submitted along with the above-mentioned
              documents and fees as prescribed by the law.<br></br>
              <br></br>
            </p>
            <p>
              After application renewal, the state authority will grant a RERA
              registration for the respective state as applied for. However, in
              case of discrepancies, the authority may even reject the
              application. It is also provided that, before rejecting the
              application, the applicant will be provided an opportunity of
              being heard.<br></br>
              <br></br>
            </p>
            <p>
              Note- The authorities shall issue the RERA registration number,
              along with the certificate, within 30 days from the date of
              registration. However, if the applicant does receive any revert
              from the authority, consider that the application to be accepted.
              <br></br>
              <br></br>
            </p>
            <p>
              The Below-Mentioned Procedure Is To Be Followed To Obtain The RERA
              Registration-<br></br>
              <br></br>
            </p>
            <img className="mt-10 mx-auto" src={procedure}></img>
            <h3 className="text-[#9D3E55] font-semibold mt-10">
              Filing The RERA Registration Form{" "}
            </h3>
            <p>
              The applicant shall make an application in the respective form
              (Varies from state to state) to the authority along with the
              requisite details and documents. The website for RERA registration
              is http://rera.(Respective state).gov.in
            </p>

            <h3 className="text-[#9D3E55] font-semibold ">
              Submission Of Requisite Documents{" "}
            </h3>
            <p>
              The application form shall be submitted along with the requisite
              documents. After document submission, the applicant shall pay the
              fees either by the way of:-
              <ul>
                <li className="arrow ml-5">Demand draft or,</li>
                <li className="arrow ml-5">
                  Bankers cheque is drawn on any scheduled bank or,{" "}
                </li>
                <li className="arrow ml-5">
                  Online payment to the real estate regulatory authority is
                  calculated in the schedule.
                </li>
              </ul>
            </p>
            <h3 className="text-[#9D3E55] font-semibold ">
              Acceptance Or Rejection By The Authority{" "}
            </h3>
            <p>
              The authority will either accept or reject the application within
              30 days of receipt of such application form. In case no revert is
              provided, it will be considered as acceptance from the authority.
            </p>
            <h3 className="text-[#9D3E55] font-semibold ">
              Issuance Of Registration Certificate{" "}
            </h3>
            <p>
              The authority shall issue a registration certificate to the
              promoter or the agent.
            </p>
          </div>

          <div className="my-12" id="Penalties">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              What Penalties are Applicable under the RERA Act?
            </h2>
            <ul className="">
              <li className="arrow">
                If the agent commits any default, he shall be liable for a
                penalty of Rs 10000 per day that can extend to 5% of the cost of
                the plot or building.
              </li>
              <li className="arrow">
                In case any unfair trade practices are conducted by the agent,
                he shall be liable for punishment by way of 1-year imprisonment.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Types">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Which RERA Projects are Not Required to be Registered under the
              RERA Act?
            </h2>
            <p>
              Below mentioned projects are not required to be registered under
              the RERA Act:-
            </p>
            <ul className="">
              <li className="arrow">
                Where the area of the land does not exceed 500 square meters or
                the number of apartments does not exceed 8 (eight).
              </li>
              <li className="arrow">
                Where the work involved is restricted only to:-
                <ul>
                  <li className="arrow ml-5">Renovation or</li>
                  <li className="arrow ml-5">Repair or Re-development </li>
                  <li className="arrow ml-5">
                    Also, it does not involve marketing, advertising, selling,
                    or new allotment of any apartment, plot, or building.
                  </li>
                </ul>
              </li>
              <li className="arrow">
                Where the Promoter has obtained a completion certificate for a
                Real estate project before the commencement of RERA.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Entities">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Under what Circumstances the RERA Registration can be Revoked?
            </h2>
            <p>
              RERA specifies various compliances concerning real estate project.
              If the promoter or the agent has not complied with the rules and
              regulations, the registration of an already registered real estate
              project may Further, the Authority may revoke a registration based
              on a complaint received or Suo moto by the Authority by giving 30
              days' notice in writing to the Promoter of such real estate
              project explaining the basis of proposed revocation and directing
              the registration holder to show cause as to why the registration
              should not be revoked.
            </p>
            <p>
              Further, the Authority may revoke a registration based on a
              complaint received or Suo moto by the Authority by giving 30 days'
              notice in writing to the Promoter of such real estate project
              explaining the basis of proposed revocation and directing the
              registration holder to show cause as to why the registration
              should not be revoked.
              <ul>
                <li className="arrow ml-5">
                  Default is done by the promoter under RERA.
                </li>
                <li className="arrow ml-5">
                  If the Promotor breaches any terms and conditions of the
                  approval granted by the Authority.{" "}
                </li>
                <li className="arrow ml-5">
                  Default is done by the promoter under RERA.
                </li>
                <li className="arrow ml-5">
                  If the Promotor is engaged in any kind of unfair practice or
                  irregularities.
                </li>
                <li className="arrow ml-5">
                  If the Promoter is involved in any fraudulent practices.
                </li>
              </ul>
            </p>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Why is RERA needed in India?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The real estate sector plays an important role in fulfilling
                    the demands of house & infrastructure development. This
                    sector has increased at a fast pace in recent times,
                    creating the need for the establishment of professional and
                    certain standards to bring unregulated operations within the
                    framework of the law. In the absence of any regulating
                    mechanism for consumer protection, builders exploit the
                    innocent customer by indulging in unfair & unethical
                    practices that required the certain body to be in place, and
                    thus Real Estate Regulation Act is introduced as a saviour.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>What is RERA?</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    RERA stands for Real Estate (Regulation and Development)
                    Act, 2016 which as formulated to supervise the real estate
                    sector in India.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the objectives of RERA?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The objectives of the RERA, 2016 are as follows;</p>
                  <ul>
                    <li>
                      Establish the Real Estate Regulatory Authority (RERA)
                    </li>
                    <li>
                      Promote transparency and efficiency in the sale of real
                      estate projects
                    </li>
                    <li>
                      Also, care for the consumers in the real estate sector
                    </li>
                    <li>
                      Establish an adjudging mechanism for speedy dispute
                      settlement
                    </li>
                    <li>
                      Set up the Appellate Tribunal to listen to appeals from
                      the decisions, directions or orders of the RERA
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the penal provisions under RERA?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In case the promoter is found guilty of any fraud shall be
                    liable to pay the penalty up to 10% of the project cost and
                    imprisonment of up to 3 years.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is there any certification for registration of a trust?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    There is no specific certificate for a trust registration.
                    On the other hand, getting the trust deed registered with
                    the appropriate authorities would suffice.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the government fee for project registration under
                    RERA?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Fees of RERA registration of projects varies from state to
                    state depending upon the state of applicant. For more
                    information, you may please visit the respective state’s
                    RERA website.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the agent registration fees payable under RERA?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Like promoter registration, agent fee also varies as per
                    state to state. For more information, you may please visit
                    the respective state’s RERA website.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    When was the RERA Bill passed?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The RERA bill was drafted in 2013 and was passed in the
                    Rajya Sabha on 10th March 2016 and by the Lok Sabha on 15th
                    March 2016. Furthermore, the act came into force on 1st May
                    2016.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is the RERA Act applicable in all states of India?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Yes, the RERA Act is applicable in all states of India.</p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is the RERA Act applicable to both residential and
                    commercial projects?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Initially, only residential projects were covered in the
                    bill, but afterwards commercial projects including shops,
                    buildings and offices were included in it through various
                    amendments.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Does real estate developers need to obtain multiple
                    registrations if their project is developed in different
                    phases?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, developers need to obtain multiple registrations. Each
                    phase of such a project will be considered as a standalone
                    real estate project and the developer needs to obtain
                    separate registration for each phase.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do RERA cover purchase and rental agreements?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No, RERA does not cover rental or purchase agreements or any
                    other agreement in any form.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the consequences if the developer fails to deliver
                    within the stipulated validity period?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The validity of a project is estimated by the developer/
                    builder. Therefore they are accountable for completing the
                    project on time to prevent any losses or legal penalties.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can RERA Registration be extended?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    RERA Registration can only be extended in case of a natural
                    calamity such as flood, drought, fire, etc. or in case of a
                    war. Such extensions will be applicable for a period of one
                    year.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can the RERA Registration revoke?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In case the department receives any complaint against a
                    builder/ developer and is satisfied that they are not
                    complying with any of regulations, then it may revoke the
                    registration.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the validity of RERA Registration?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Basically, the RERA Registration is valid for a period of
                    five years referred to as the period of the project
                    completion.
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
