import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import trustImg from "./imgs/Trust Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Trust.css";

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
    <pagesHeader/>
      <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
            <h1 className="text-5xl font-semibold">Registration of a Trust</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              Trust implies the transfer of a property (cash, shares or valuable
              asset) from the owner to another person. There are two types of
              trusts – Private and Public. A private trust is formed for the
              benefit of a group of people. Public trust is formed for the
              benefit of the general public.
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
          Contact us to know more about Trust Registration
        </div>
        
          <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
            <a href="tel:+91 70204 38881">Call Now!</a>
          </button>
        
      </div>

      <div className="mt-auto sm:w-4/5 px-5 mx-auto">
        <h2 className="text-3xl text-[#560216] font-bold my-8">
          How To Register A Section 8 Company?
        </h2>

        <ul className="my-2">
          <p className="">
            Trust Registration requires important documents like trust deed and
            rental agreement. Our service experts help you with the complete
            procedure for the formation of trust while taking care of all the
            legal intricacies
          </p>
          <div>
            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
              {" "}
              Step 1:{" "}
            </li>
            <p className="my-4">
              We address all your queries about Trust registration online
            </p>
          </div>
          <div>
            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
              {" "}
              Step 2:{" "}
            </li>
            <p className="my-4">
              We help you get the entire process of filing and registration
              completed.
            </p>
          </div>
          <div>
            <li className="text-[#9D3E55] mr-2 arrow text-lg font-semibold">
              {" "}
              Step 3:{" "}
            </li>
            <p className="my-4">
              We help you with the post-registration formalities and
              compliances.
            </p>
          </div>
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
                    How to Register a Trust
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Content"
                  >
                    Content of the Trust Deed
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
                    href="#Constitution"
                  >
                    Constitution of the Trust
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Why"
                  >
                    Why register a trust?
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Compliances"
                  >
                    Trust Compliances
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Applicability"
                  >
                    Applicability of tax exemption
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
              Public Trust is the most convenient way of starting a
              non-governmental organization or NGO. A trust functions on the
              objective of eradicating poverty, providing education to the
              underprivileged and offering medical relief apart from the
              generalized aim of promoting arts, science and literature. It is
              to be noted that trusts are irrevocable which means they cannot be
              amended or terminated without the permission of the court.
              Vakilsearch helps in providing you with the trust registration
              certificate with a few documents like a deed of trust, rental
              agreement, etc.
            </p>
            <p className="">
              In India, there are no specific laws to govern the public trust,
              however, some states like Maharashtra and Tamil Nadu have their
              own public trust Act.
            </p>
          </div>

          <div className="my-12" id="How">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              How to Register a Trust
            </h2>
            <p className="my-2">
              Medsys helps you in providing with the trust registration online
              through very simple steps. As an initial step in registering the
              trust, the founder of the trust or the “Author of the Trust” or
              the “Settlor of the Trust” has to figure out in a document the
              objectives of the trust and the manner in which the trustees have
              to work towards achieving the goals of the Trust. This document
              that contains all such details is called a Trust Deed, which is
              also called a deed of trust.
            </p>
            <p className="">
              Once this is made, thereafter, an application for registration of
              the trust shall be moved before the Registrar of Trust along with
              the Trust Deed or a deed of trust. The appropriate jurisdiction
              for registration of the trust is usually where the registered
              office of the trust is located.
            </p>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className="my-12" id="Content">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Content of the Trust Deed
            </h2>
            <p>
              The trust deed is the primary and the most essential document of
              the trust which states the reason for forming a trust, its
              functions, to its working, and until its closure. Following are
              the important clauses in the Trust Deed:
            </p>
            <ul className="">
              <li className="arrow">Name of the trust</li>
              <li className="arrow">The registered office of the trust</li>
              <li className="arrow">Area of operation of the trust</li>
              <li className="arrow">Objectives of the trust</li>
              <li className="arrow">Details of the Author of the Trust</li>
              <li className="arrow">Corpus/Assets of the Trust</li>
              <li className="arrow">Details of the Board of Trustees</li>
              <li className="arrow">
                Quorum of the Board with their qualification, terms and tenure
              </li>
              <li className="arrow">
                Powers and functions of the Managing Trustee and other Trustees
              </li>
              <li className="arrow">
                Closure and amendment of the trust deed and the applicability of
                the Act
              </li>
            </ul>
          </div>

          <div className="my-12" id="Documents">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Documents Required for trust registration certificate
            </h2>
            <p>
              To get your trust registration certificate, you should require the
              following documents during the registration of the Trust:
            </p>
            <ul className="">
              <li className="arrow">A completely drafted trust deed</li>
              <li className="arrow">
                Proof of registered office - (Rental Agreement or ownership
                document)
              </li>
              <li className="arrow">ID proof of the Founder of the Trust</li>
              <li className="arrow">Two witnesses</li>
            </ul>
            <img src={trustImg} alt="" />
          </div>
          <div className="my-12" id="Constitution">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Constitution of the Trust
            </h2>
            <p>
              The Trust constitutes the Board of Trustees. The Board constitutes
              the following:
            </p>
            <ul className="">
              <li className="arrow">Author/Founder/Settlor of the trust</li>
              <li className="arrow">Managing trustee(s)</li>
              <li className="arrow">Other trustees</li>
              <p>
                The quorum of the Board of Trustees shall not exceed a maximum
                of 21 members.
              </p>
            </ul>
          </div>

          <div className="my-12" id="Why">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Why register a trust?
            </h2>
            <ul className="">
              <li className="arrow">
                As per the Public Trust Act of all states, registration of Trust
                is mandatory if it involves charitable purpose or when there is
                a transfer of immovable property in the name of the trust.
              </li>
              <li className="arrow">
                Only registered trust is eligible for tax exemptions provided
                under Section 12 A and 80G of the Income Tax Act.
              </li>
              <li className="arrow">
                Registering a trust adds more credibility to the same as it
                involves public money in the form of donations.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Compliances">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Trust Compliances
            </h2>
            <p>A trust shall after its registration shall do the following:</p>
            <ul className="">
              <li className="arrow">Obtain PAN card</li>
              <li className="arrow">Book Keeping and Accounts</li>
              <li className="arrow">Annual IT filings</li>
              <li className="arrow">
                Shops and Establishment License - in case of employment
              </li>
              <li className="arrow">
                Professional Tax Registration - if applicable
              </li>
              <li className="arrow">GST registration - if applicable</li>
            </ul>
          </div>

          <div className="my-12" id="Applicability">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Applicability of tax exemption
            </h2>
            <p>
              There is a general notion that trust need not have to pay tax as
              they work towards the welfare of the public at large. But this is
              not true. A trust, like any other legal entity, is liable to pay
              tax. In order to be exempted from tax, trust is required to obtain
              certification for the said exemptions such as Section 12 A, 80G
              etc. from the Income Tax authorities.
            </p>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can the property of the Trust be sold?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Trustees do not have the right to sell the property,
                    however, the trust properties can be sold after obtaining
                    prior permission from the appropriate civil court.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    In what other ways an NGO can be registered in India?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The answer to this question is yes. Government employees or
                    officers can be part of NGOs provided the NGO is not
                    anti-government. There are a few rules too that these people
                    have to follow, one of them is to make sure that the NGO is
                    not profit making and the member must not draw any salary
                    from the NGO.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Are government employees or officers allowed to be members
                    of NGO?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Government employees or officers can be part of NGOs,
                    provided the NGO is not working towards any anti-government
                    activities or programmes. The intended members should ensure
                    the particular organization is not profit making and that
                    its members do not draw any salary from the NGO.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the procedure for closure of a trust?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The trust is usually irrevocable in nature. For reasons like
                    disqualification of trustees, absence of trustees,
                    mismanagement of the trust, the trust can be merged with a
                    trust having similar objective with the permission of the
                    court.
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
