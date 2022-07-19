import React from "react";
import bussinessLogo from "./business logo.jpeg";
import starLogo from "./star logo.jpeg";
import smileLogo from "./smile logo.jpeg";
import bg from "./bg.png";
// import trustImg from "./imgs/Trust Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import "./privateCompany.css";

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
  TabTitle("Private Limited Company - medsysconsultancy.com");

  return (
    <>
      <pagesHeader />
      <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
            <h1 className="text-5xl font-semibold">Private Limited Company</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>
              Private Limited Company is said to be India’s most famous type of
              corporate entity. Here’s why: No minimum amount of capital!
            </p>
            <br />
            <p>
              Get in touch with us to establish your own Private Limited
              Company!
            </p>
            <br />
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
          Contact us to know more about Registration
        </div>

        <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
          <a href="tel:+91 70204 38881">Call Now!</a>
        </button>
      </div>

      <div className="mt-auto sm:w-4/5 px-5 mx-auto">
        <h2 className="text-3xl text-[#560216] font-bold my-8">
          What Is Private Limited Company?
        </h2>

        <p>
          Private Limited Company registration is the most popular legal
          structure option for businesses in India. A private limited company
          can have a minimum of two members and a maximum of fifty members. The
          directors of a private limited company have limited liability to
          creditors. In a case of default, banks/creditors can only sell
          company’s assets but not personal assets of directors. If you want to
          start a company in India then make sure your company is registered as
          Company Registration should be your first priority. It is very
          important to register your company as a registered company have
          multiple advantages from easy to register to easy to dissolve.
        </p>
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
                  "Overview",
                  "Advantages",
                  "Checklist",
                  "incorporate",
                  "Documents",
                  "Compliances",
                  "PLC",
                  "FAQs"
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
                    href="#Advantages"
                  >
                    Advantages Of MSME
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#Checklist"
                  >
                    Checklist
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#incorporate"
                  >
                    Steps To Incorporate
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
                    href="#Compliances"
                  >
                    Compliances
                  </a>
                </li>
                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#PLC"
                  >
                    Incorporating A PLC
                  </a>
                </li>

                <li>
                  <a
                    className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                    href="#How"
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
              Private Limited Company is a type of organization wherein the
              ownership and management are separate. The capital of a company is
              provided by a group of individuals known as shareholders who
              entrust the responsibility of managing the company in the hands of
              individuals known as the Board of Directors. These forms of
              organizations are closely held, usually by family, friends, and
              relatives. Private limited companies may issue shares and can have
              a maximum of 200 shareholders and their shares cannot be traded on
              public exchanges, but they can get their shares listed if needed
              by converting to a public limited company. It is governed by the
              Ministry of Corporate Affairs (MCA) and regulated by the Companies
              Act, 2013.
            </p>
          </div>

          <div className="my-12" id="Advantages">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Advantages Of MSME
            </h2>
            <h3 className="text-lg ">
              Registering a company offers many benefits because it makes the
              business genuine and authentic.<br></br>
              The key benefits of a private limited company are:
            </h3>

            <h3 className="text-[#9D3E55] font-semibold text-lg pt-4">
              Separate Legal Existence
            </h3>
            <p>
              Its legal existence is different from the shareholders/members. It
              can own property, incur debts, borrow money, have a bank account,
              employee people, enter into contracts, etc.
            </p>

            <h3 className="text-[#9D3E55] font-semibold text-lg pt-4">
              Perpetual Succession
            </h3>
            <p>
              The organization's existence continues despite the death,
              bankruptcy, insanity, change in membership or an exit from the
              business of any owner or member, or any transfer of stock, etc.
            </p>

            <h3 className="text-[#9D3E55] font-semibold text-lg pt-4">
              Limited Liability to Shareholders
            </h3>
            <p>
              Shareholders are not liable personally for any of the debts of the
              company, other than the amount already invested in the company.
            </p>

            <h3 className="text-[#9D3E55] font-semibold text-lg pt-4">
              Easy Transferability of Ownership
            </h3>
            <p>
              The ownership represented by shares, can be easily transferred to
              any other legal entity or person in India or abroad in part or
              whole.
            </p>

            <h3 className="text-[#9D3E55] font-semibold text-lg pt-4">
              Other Benefits
            </h3>
            <ul>
              <li className="arrow">Best structure for fundraising.</li>
              <li className="arrow">
                Foreigners and NRIs can also act as director.
              </li>
              <li className="arrow">
                Enhanced brand Image and improvement of credibility.
              </li>
            </ul>
          </div>

          <div className="my-12" id="Checklist">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Checklist
            </h2>

            <ul className="">
              <li className="arrow">
                Determining eligibility and obtaining registration as a MSME
              </li>
              <li className="arrow">Debt Financing</li>
              <ul>
                <li className="arrow ml-5">Calculation of loan eligibility</li>
                <li className="arrow ml-5">
                  Syndication of loan from existing lenders
                </li>
                <li className="arrow ml-5">
                  Restructuring of outstanding loans with existing lenders
                </li>
                <li className="arrow ml-5">
                  Refinancing of outstanding loans with another lender
                </li>
              </ul>
            </ul>

            <section className="profile container w-4/5 mt-5">
              <div className="inner">
                <div className="left">
                  <h3 className="text-white font-semibold">
                    Related Read: How To Register A Company In India: A Step By
                    Step Guide
                  </h3>
                </div>
                <div className="right" download="">
                  <a href="">
                    <input type="button" value="Click Here" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="my-12" id="incorporate">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Steps To Incorporate A Private Limited Company
            </h2>
            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 1</h3>
            <p className="pb-4">
              Apply for DSC (Digital Signature Certificate) of the directors.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 2</h3>
            <p className="pb-4">Application for name reservation.</p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 3</h3>
            <p className="pb-4">
              Filing of verified documents along with E-MOA and E-AOA on the MCA
              portal to register a private limited company in form SPICE +
              wherein application for various registration as listed below along
              with application for Incorporation is done.
            </p>

            <table
              id="table1"
              border="1"
              cellspacing="0"
              className="non-huf-table hidden lg:block"
            >
              <tr>
                <th>Sr.No</th>
                <th>Particulars</th>
                <th>Mandatory/ Non Mandatory</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>
                  Director Identification Number
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td> 2.</td>
                <td>
                  PAN
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  TAN
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  Professional Tax Registration
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>
                  Opening of Bank Account
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>6.</td>
                <td>
                  {" "}
                  ESIC
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>7.</td>
                <td>
                  {" "}
                  GSTIN
                  <br />
                </td>
                <td>
                  Not Mandatory
                  <br />
                </td>
              </tr>
              <tr>
                <td>8.</td>
                <td>
                  {" "}
                  EPFO Registration
                  <br />
                </td>
                <td>
                  Mandatory
                  <br />
                </td>
              </tr>
            </table>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 4</h3>
            <p className="pb-4">Obtain Certificate of incorporation.</p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 5</h3>
            <p className="pb-4">
              Conduct First Board Meeting within 30 days of Incorporation.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Step 6</h3>
            <p className="pb-4">
              {" "}
              The subscription money is required to be deposited in the
              company’s bank account within 180 days and the statement of such
              deposit is required to be uploaded at MCA portal post which one
              can obtain Certificate to commence business.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">Note</h3>
            <p className="pb-4">
              {" "}
              No Company can begin its operations, without obtaining Certificate
              to commence business.
            </p>
          </div>

          <div className="my-12" id="Documents">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Documents Required
            </h2>
            <h3 className="text-[#9D3E55] text-lg font-semibold">
              For Directors and Shareholders
            </h3>
            <p className="pb-4">
              Identify the 2 directors and shareholders (or more) and submit
              their documents as given below:
            </p>

            <ul>
              <li className=" text-[#9D3E55] text-lg font-semibold arrow">
                Identity Proof
              </li>
              <ul>
                <li className="arrow ml-5">
                  PAN (Indian Nationals) or Passport (Foreign nationals) And
                </li>
                <li className="arrow ml-5">
                  Passport / Driver’s License / Election ID / Ration Card /
                  Aadhar ID
                </li>
              </ul>
              <li className=" text-[#9D3E55] text-lg font-semibold arrow">
                Proof of Residence
              </li>
              <ul>
                <li className="arrow ml-5">
                  Bank Statement* / Electricity Bill / Mobile Bill (Any one).
                  Not older than 2 months
                </li>
                <p className="ml-5">
                  *if the person has resided at the present address for less
                  than one year, then previous residential address must also be
                  submitted
                </p>
              </ul>

              <li className=" text-[#9D3E55] text-lg font-semibold arrow">
                Passport size photographs
              </li>

              <li className=" text-[#9D3E55] text-lg font-semibold arrow">
                Director’s educational qualification certificate
              </li>
            </ul>
            <h3 className="text-[#9D3E55] text-lg font-semibold pt-5">
              For Registered Office
            </h3>
            <ul>
              <li className="arrow ">
                Registered document of title of premises or notarised copy of
                lease/rent agreement in the company's name along with a copy of
                rent paid receipt not older than one month.
              </li>

              <li className="arrow ">
                NOC from landlord to use the premises by the company as its
                registered office.{" "}
              </li>

              <li className="arrow ">
                Utility bills like telephone, gas, electricity, etc. showing the
                address of the premises in the name of the owner, which is not
                older than two months.{" "}
              </li>
            </ul>

            <section className="profile container w-4/5 mt-5">
              <div className="inner">
                <div className="left">
                  <h3 className="text-white font-semibold">
                    Related Read:How To Choose Between A Private Ltd. Company
                    And LLP?
                  </h3>
                </div>
                <div className="right" download="">
                  <a href="">
                    <input type="button" value="Click Here" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="my-12" id="Compliances">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Compliances Post Company Formation
            </h2>
            <p>
              All companies registered in India are required to comply with
              various rules and regulations like conduct of Board Meetings,
              Annual filings, KYC compliance of Director etc. Failure to comply
              shall lead to penalties or disqualification of the directors. We
              will help you in maintaining Statutory compliances for your
              Company at a very affordable price point.
            </p>
            <h3 className="text-[#9D3E55] text-lg font-semibold pt-5">
              Statutory Auditor Appointment
            </h3>
            <p className="pb-4">
              The board of directors must appoint a practicing Chartered
              Accountant as their auditor within 30 days of incorporation.{" "}
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">
              Meeting of the Board of Directors
            </h3>
            <p className="pb-4">
              Minimum of 4 board meetings in a calendar year (at least once in
              every quarter). The gap between 2 consecutive meetings should not
              exceed 120 days. For small companies with turnover of not more
              than Rs. 2 crores, a minimum of 2 meetings must be held in each
              financial year.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">
              Commencement of Business
            </h3>
            <p className="pb-4">
              Businesses established after November 2, 2018 must obtain a
              business start certificate within 180 days from the date of
              establishment. A declaration needs to be submitted by directors
              that the subscribers have contributed to the capital mentioned in
              the MOA.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">
              Income Tax Filing
            </h3>
            <p className="pb-4">
              A company must file an income tax return each financial year on or
              before 30th September of the successive year.
            </p>

            <section className="profile container w-4/5 mt-5">
              <div className="inner">
                <div className="left">
                  <h3 className="text-white font-semibold">
                    Related Read:How To Save More Taxes Using An Income Tax
                    Calculator?
                  </h3>
                </div>
                <div className="right" download="">
                  <a href="">
                    <input type="button" value="Click Here" />
                  </a>
                </div>
              </div>
            </section>

            <h3 className="text-[#9D3E55] text-lg font-semibold">
              Annual Return
            </h3>
            <p className="pb-4">
              A company must file an annual return with the MCA for each
              financial year in forms AOC-4 and MGT-7 on or before 31st October
              of the successive year.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">DIN KYC</h3>
            <p className="pb-4">
              The DIN KYC procedure must be completed for each financial year
              for the directors of the company on or before 30th April of the
              successive year. Other than these mandatory compliances, other
              compliances need to be done depending on the company's timeline.
              ICI also assists in increasing authorized capital, changing
              registered office, change in directors, and others.
            </p>

            <h3 className="text-[#9D3E55] text-lg font-semibold">
              Bookkeeping
            </h3>
            <p className="pb-4">
              Every company shall prepare and keep at its registered office
              books of account and other relevant books and papers and financial
              statements for every financial year. They must be maintained on an
              accrual basis and follow the double entry system of accounting.
            </p>
          </div>

          <div className="my-12" id="PLC">
            <h2 className="text-3xl text-[#560216] font-bold my-4">
              Incorporating A Private Limited Company
            </h2>
            <p className="pb-4">
              At India Company Incorporation, we will help you start your own
              Private Limited company in less than 10-15 working days, subject
              to government processing times, and availability of all documents.{" "}
            </p>
            <p>Following the steps listed below to start your own Company,</p>
            <ul>
              <li className="arrow">Submit a request by clicking here.</li>
              <li className="arrow">
                Our Corporate Manager (CM) will get in touch with you to collect
                your documents along with a simple checklist.
              </li>
              <li className="arrow">
                Submit the filled checklist along with your documents for
                verification. Your documents will be verified by our team of
                experts here at ICI, and we shall take the process further. The
                CM shall keep you informed throughout the process.
              </li>

              <li className="arrow">
                Once your documents along with the checklist are submitted and
                verified, we shall proceed with the application of your DSC and
                DIN. In parallel to the DSC application, the application for
                name reservation shall be submitted to the MCA. Applications for
                name approval are processed by the MCA in 24-72 hours. You may
                suggest up to 3-4 names of your choice.
              </li>

              <li className="arrow">
                We will draft the MOA and AOA and file the incorporation
                documents with MCA in part B of a form called “SPICe
                Plus(SPICe+)" along with the subscription statement. Usually,
                MCA approves the forms within 4-5 days once filed and issues the
                Incorporation Certificate with CIN.
              </li>

              <li className="arrow">
                Once the approval is obtained, the company would be
                incorporated.
              </li>
            </ul>
          </div>

          <div className="my-12" id="FAQs">
            <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the Director Identification Number (DIN) and where
                    is DIN Used?"{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The central government issues a DIN to anyone who intends to
                    be a director of the company. It is an eight-digit unique
                    identification number which has lifetime validity. DIN is
                    person-specific which means that even if he is a director in
                    2 or more companies, he/she has to obtain only 1 DIN. If a
                    return, application, or information about the company is
                    required by law, the director who signs the return,
                    application, or information will request a DIN under his
                    signature.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is a Digital Signature Certificate (DSC)?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    A digital signature certificate (DSC) contains information
                    about the user’s name, email address, pin code, country,
                    date of issuance of the certificate, and name of the
                    certifying authority. It is used to prove your identity, to
                    access information or services on the Internet, or to sign
                    certain documents digitally.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is MOA and AOA?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Memorandum of Association (MOA) states the main and
                    ancillary objects of the proposed company. The Articles of
                    Association (AOA) contains the rules and procedures for the
                    routine conduct of the proposed company.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is an Authorized Capital?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Authorized capital is the maximum amount of share capital
                    for which a company can issue shares. Authorized capital can
                    be increased by the company at any time with shareholders’
                    approval.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the Paid-up capital?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Paid-up capital of a company is the amount of money for
                    which shares were issued to the shareholder and for which
                    payment was made by shareholders. Paid-up capital will
                    always be less than the authorized capital as the company
                    can not issue shares above its authorized capital.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you need to be physically present during the procedure?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No, registering a new company is a complete online process.
                    All documents are stored electronically, so you don’t need
                    to be physically present. Please send a scanned copy of the
                    required documents and forms.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the cost to run a private limited company?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    These can be divided into four categories: The costs of
                    establishing a private limited company, the costs of
                    accounting and auditing, the costs of compliance, and other
                    costs.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is it compulsory to Audit Company’s book?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, an auditor must be appointed within 30 days of setting
                    up a private limited company. Non-compliance fees can be in
                    the hundreds of rupees, so compliance is important for
                    private limited companies.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Who can be a member of a private limited company?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Any individual or organization can become a member of a
                    private limited company including NRI/foreigners.
                    Nonetheless, the individual must be 18+ in age and should
                    hold a valid PAN card.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can directors of private limited companies become
                    office/salaried employees?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, directors can be paid for by private limited companies.
                    If these conditions are allowed, you will need to verify
                    your employment contract. In many cases, the employers are
                    quite comfortable with the fact that their employee is a
                    director in another company.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can NRIs/Foreigners become directors in a private limited
                    company?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, NRIs and foreigners can be directors of a private
                    limited liability company. You must apply and receive a DIN
                    from the Ministry of Corporate Affairs (MCA). You can also
                    be the majority shareholder of the company. The only
                    requirement is that at least one director be established in
                    India.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I register a company at my home address?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, you can register your company at your home address. For
                    this you will need to present a service invoice.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can you convert existing private limited into LLP?{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, by filing Form 18 (Application and Statement for
                    conversion of a private company/ unlisted public company
                    into limited liability partnership (LLP). Also, Form 17
                    needs to be filed along with Form 2 (Incorporation document
                    and subscriber’s statement).
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
      <ContactForm />
    </>
  );
};

export default Trust;
