import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
// import trustImg from "./imgs/Trust Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./tan.css";
import ContactForm from "../../ContactForm";

import online from "./imgs/ONLINE.svg";
import offline from "./imgs/OFFLINE.svg";

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
            <h1 className="text-5xl font-semibold">TAN Application</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              If you want to save money on taxes, get a TAN for your company.
              Let’s get you started
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
          Get In Touch With Us To File Your Tan Application
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
                  "TAN",
                  "Apply",
                  "Purpose",
                  "Required",
                  "Help",
                  "FAQs",
                ]}
                className="flex flex-col p-2 gap-3 text-center"
                currentClassName="content-scroll-view"
              >
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#TAN"
                  >
                    What Is TAN?
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Apply"
                  >
                    Who Can Apply For TAN?
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Purpose"
                  >
                    Purpose Of TAN{" "}
                  </a>
                </li>

                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Required"
                  >
                    Documents Required
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Help"
                  >
                    How Can We Help You?
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
          <div className="my-12" id="TAN">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              What Is TAN?
            </h2>
            <p className="my-2">
              Tax Deduction and Collection Account Number- a 10-digit
              alphanumeric number issued by the Income Tax Department of India
              to the person who is required to deduct TDS/TCS while making
              payment such as salary, commission, rent, contractual expenses,
              professional fees, etc.
            </p>
          </div>

          <div className="my-12" id="Apply">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Who Can Apply For TAN? Can Register Under MSME?
            </h2>
            <p className="my-2">
              Any person who makes payments such as salary, rent, commission,
              contractual expenses, etc. and is liable to deduct TDS/TCS as per
              provisions of Income Tax Act, 1961, shall apply for TAN. This may
              include Individuals,HUF, Limited liability partnership,
              Partnership firms, Company, Associates of firms, Local authority
              or Trust. Note: The provision for obtaining TAN does not apply to
              the person who is required to deduct TDS as per section 194-IA
              (i.e. sale proceeds received by the individual in respect of
              building or land.
            </p>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className="my-12" id="Purpose">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Purpose Of TAN
            </h2>
            <p>
              As per provision of Income Tax Act, 1961, persons responsible for
              deducting or collecting tax at source must apply for a TAN number
              and must quote TAN on all the following documents:
            </p>
            <ul className="">
              <li className="arrow ">
                Challans for depositing TDS/TCS to Government.{" "}
              </li>
              <li className="arrow ">TDS/TCS Certificates </li>
              <li className="arrow ">TDS & TCS returns </li>
              <li className="arrow ">
                Statement of financial transactions/reportable accounts.{" "}
              </li>
              <li className="arrow ">
                Other documents as may be suggested Related.
              </li>
            </ul>
            <section className="profile container w-4/5 mt-5">
                <div className="inner">
                    <div className="left">
                        <h3 className="text-white font-semibold">Related Read:How To Save More Taxes Using An Income Tax Calculator?</h3>
                    </div>
                    <div className="right" download="">
                        <a href="">
                            <input type="button" value="Click Here" />
                        </a>
                    </div>
                </div>
            </section>
          </div>

          <div className="my-12" id="Required">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Documents Required
            </h2>
            <div className="mb-4">
              <h3 className="text-[#9D3E55] text-lg font-semibold">
                Application made offline:{" "}
              </h3>
              <p>
                No additional documents are required to submit along with the
                application.
              </p>
            </div>
            <div className="mb-2">
              <h3 className="text-[#9D3E55] text-lg font-semibold">
                Application made online:{" "}
              </h3>
              <p>
              After filing the online application under Form 49B, the applicant only requires to send the signed acknowledgement to NSDL.
              </p>
            </div>
          </div>

          <div className="my-12" id="How">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              How Can We Help You?
            </h2>
            <p>
              The application for TAN can also be made online for which our team
              will complete the procedure for you:
            </p>
            <ul className="">
              <li className="arrow ">
                Submit a service request by clicking here
              </li>
              <li className="arrow ">
                Our expert team will contact you with a simple checklist.
              </li>
              <li className="arrow ">Fill and submit the checklist.</li>

              <li className="arrow ">
                Our team experts will verify, and an application for TAN will be
                filed with the authority.{" "}
              </li>
              <li className="arrow ">
                TAN allotted Throughout the process, our dedicated manager will
                keep you updated on the progress of the application.
              </li>
            </ul>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is a separate TAN required for TCS?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No, a TAN allotted to person serves the requirement of both,
                    i.e. TDS and TCS. Hence a separate TAN for TCS is not
                    required by a person.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Who allots TAN? </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Income Tax Department of India is solely responsible for
                    allotting TAN to companies or employers based on the
                    application submitted to Tax Information Network or at TIN
                    Facilitation Centres. These Centres are managed by National
                    Securities Depository Limited (NSDL).
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is it to wrong to have PAN but not TAN?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The purposes of PAN and TAN are entirely different, and
                    hence they cannot be used interchangeably. Further, a PAN
                    holder is not required to obtain TAN till the time he is
                    liable to deduct TDS/TCS (other than under section 194-IA),
                    however, a person needs to obtain a PAN if he wants to apply
                    for TAN.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    If my company has several branches/divisions, do I require
                    to obtain separate TANs for all of them?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. You will be required to apply for TANs for all
                    branches/divisions if the person/authority responsible for
                    collecting TDS/TCS is different. Details such as the name of
                    the division/branch, location, designation of the
                    accountable person deducting TDS/TCS, etc. should be
                    disclosed in the forms when applying for TAN.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can a taxpayer hold more than one TAN?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    It is illegal to possess or use more than one TAN. Different
                    branches/ divisions of an entity may, however, have separate
                    TAN. However, different branches/divisions of a business
                    entity may have their separate TAN. In case, more than one
                    TAN has been allotted, TAN that has been used regularly
                    shall be used, and other TAN(s) shall immediately be
                    surrendered for cancellation.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is it necessary to have a different TAN if a deductor
                    deducts tax from different types of payments like salary,
                    interest, dividend etc?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No, a TAN allotted can be used for any
                    deductions/collections of tax.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Still have doubts?</AccordionItemButton>
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

          <contact_footer></contact_footer>
        </div>
        
      </div>

      <ContactForm></ContactForm>
    </>
  );
};

export default Trust;
