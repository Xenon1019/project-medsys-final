import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
// import trustImg from "./imgs/Trust Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./CSR_1.css";

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
            <h1 className="text-5xl font-semibold">
              CSR-1 Registration for NGOs
            </h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              NGOs seeking CSR funding cannot receive any without registering
              with the MCA by filing Form CSR-1. Let Medsys handle it for you
              and corporate CSR funding will make your social goals a reality!
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
      <div className="flex justify-center items-center px-4 gap-7 bg-black text-white h-20">
        <div className="text-xl my-auto">
          Form CSR-1 Filing at just ₹1999/- (inclusive of all taxes)
        </div>

        <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
          <a href="tel:+91 70204 38881">Call Now!</a>
        </button>
      </div>

      <div className="mt-auto sm:w-4/5 px-5 mx-auto">
        <h2 className="text-3xl text-[#560216] font-bold my-8">
          How Does CSR-1 Registration Work For You?
        </h2>

        <ul className="my-2">
          <p className="">
            Form CSR-1 is for the ‘Registration of Entities for undertaking CSR
            Activities’. All entities planning CSR projects must submit this
            form to the MCA portal.
          </p>
          <div>
            <li className="text-[#9D3E55] mr-2 arrow  font-semibold">
              {" "}
              Step 1: Online Documentation{" "}
            </li>
            <p className="my-4">
              We address all your queries regarding the process and assist you
              in digitally verifying all your documents.{" "}
            </p>
          </div>
          <div>
            <li className="text-[#9D3E55] mr-2 arrow  font-semibold">
              {" "}
              Step 2: Registration{" "}
            </li>
            <p className="my-4">
              We complete the registration process on your behalf, make the
              necessary filings and submit it to the MCA.
            </p>
          </div>
        </ul>
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
                  "How",
                  "Content",
                  "Documents",
                  "Constitution",
                  "Why",
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
                    Importance of CSR-1
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Content"
                  >
Laws Associated With CSR                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Documents"
                  >
                    Eligibility Criteria for NGOs
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Constitution"
                  >
                    Filing of Form for CSR Funding
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Why"
                  >
                    Checklist
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Compliances"
                  >
                    Documents Required
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Applicability"
                  >
                   Attachments Required for Filing
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
              It has now been made mandatory for NGOs to register in order to
              undertake CSR activities funded by companies and corporations. To
              receive CSR funding, all NGOs must register with the central
              government by submitting Form CSR-1. This requirement permits the
              effective monitoring of CSR spending in the country.
            </p>
          </div>

          <div className="my-12" id="How">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              What is CSR-1?
            </h2>
            <p className="my-2">
              CSR-1 is a registration form that is filed in order to get CSR
              funding. The Ministry of Corporate Affairs made it mandatory that
              all entities undertaking Corporate Social Responsibility (CSR)
              have to file eForm CSR-1 for all their CSR projects. This form is
              signed and submitted digitally after verification by a Chartered
              Accountant (CA), Company Secretary (CS) or Certified Management
              Accountant (CMA). This is done to monitor CSR spending in the
              country.
            </p>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className="my-12" id="Content">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Importance of CSR-1
            </h2>

            <ul className="">
              <li className="arrow ">
                It boosts the public image of the entity.
              </li>
              <li className="arrow ">
                It boosts the public image of the entity.
              </li>
              <li className="arrow ">
                CSR activities become hassle-free.
              </li>
              <li className="arrow ">
                Securing funding from corporate has fewer legal hurdles.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Documents">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Laws Associated With CSR Registration{" "}
            </h2>
            <p>
              The laws related to the filing of eForm CSR-1 is according to
              Section 135 of the Companies Act 2013 and the Companies (Corporate
              Social Responsibility Policy) Rules, 2014.
            </p>

            {/* <img src={trustImg} alt="" /> */}
          </div>
          <div className="my-12" id="Constitution">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Eligibility Criteria for NGOs
            </h2>
            <p>
              NGOs can be eligible for CSR registration if they match the
              following criteria:
            </p>
            <ul className="">
              <li className="arrow ">
                The NGO is to be registered as a section 8 company registered
                under Section 12A and 80G of the IncomeTax Act. It should have
                at least 3 years of experience in undertaking charitable
                activities.
              </li>
              <li className="arrow ">
                It should be a registered public trust registered under Section
                12A and 80G of the Income Tax Act. It should have at least 3
                years of experience in undertaking charitable activities.
              </li>
              <li className="arrow ">
                It should be a registered society registered under Section 12A
                and 80G of the Income Tax Act. It should have at least 3 years
                of experience in undertaking charitable activities.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Why">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Filing of Form for CSR Funding
            </h2>
            <p>
              As per Rule 4(2) of the CSR Amendment Rules, 2021 the following
              procedure is to be followed:
            </p>
            <ul className="">
              <li className="arrow ">
                The entity has to electronically file the form CSR-1 with the
                Registrar in order to register itself with the Central
                Government.
              </li>
              <li className="arrow ">
                As mentioned earlier, it has to be digitally verified by a CA,
                CS or CMA.
              </li>
              <li className="arrow ">
                On submission, a unique CSR registration number will be
                generated.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Compliances">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Checklist
            </h2>
            <p>
              Section 8 companies, public charitable trusts, or societies
              registered under section 12A and 80 G of the Income Tax Act.
            </p>
            <h3 className="text-[#9D3E55] mt-3 text-xl font-semibold">
              Time taken:
            </h3>
            <p className="mt-4">
              CSR-1 registration is usually done within 1 week from the date of
              submission of all documents. We will file the Form CSR-1 on behalf
              of your organisation.
            </p>
          </div>

          <div className="my-12" id="docs">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Documents Required
            </h2>
            <ul className="">
              <li className="arrow ">Copy of PAN card of the NGO.</li>
              <li className="arrow ">Mail ID and mobile number.</li>
              <li className="arrow ">
                Details of governing body members{" "}
              </li>

              <li className="arrow ">
                Copy of registration certificate{" "}
              </li>

              <li className="arrow ">
                Copy of 12A & 80G exemption certificate{" "}
              </li>

              <li className="arrow ">NGO Darpan ID </li>

              <li className="arrow ">
                Digital signature of the authorised person with their PAN{" "}
              </li>
            </ul>
          </div>
          <div className="my-12" id="attachments">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Attachments Required for Filing Form CSR-1
            </h2>
            <ul className="">
              <li className="arrow ">Company CSR policy</li>
              <li className="arrow ">Company CSR report</li>
              <li className="arrow ">Company sustainability report </li>

              <li className="arrow ">Details of subsidiary(s) </li>

              <li className="arrow ">Details of other entity(s). </li>
            </ul>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is it mandatory for an NGO to do CSR-1 registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, it is mandatory for an NGO to do CSR-1 as soon as
                    possible if they seek CSR funding. If they don’t seek CSR
                    funding this isn’t essential.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How long does it take to get the CSR-1 registration done?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    CSR-1 registration gets done within 1 week from the date of
                    submission of all the documents properly.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do I have to be physically present during the process?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The process is 100% online. So, it doesn’t require your
                    physical presence at any stage. Relax in the comfort of your
                    home while we take care of everything.
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
                    us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              
            </Accordion>
          </div>

          <contact_footer></contact_footer>
        </div>
      </div>
    </>
  );
};

export default Trust;
