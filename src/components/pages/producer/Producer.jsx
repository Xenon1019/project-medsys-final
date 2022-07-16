import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./Producer.css"
import ContactForm from "../../ContactForm";


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
const Producer = () => {
  TabTitle('Farmer Producer Organisation Registration - medsysconsultancy.com');
  return (
    <div className='font-serif'>
    <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="">
            <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                <h2 className='text-5xl font-bold '>Farmer Producer Organisation Registration</h2>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p className='text-lg mr-20'>A PO is a collective of farmers (and non-farmers) who are the primary producers of a product (an agricultural produce or a manufactured product). It, therefore, can work as a platform to facilitate better access to government services, like PDS, MNREGA, Scholarships and Pensions, etc.!!</p>
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
        <div className="text-xl my-auto">Get in touch with us acquire various licenses, registrations, and certifications</div>
        <div>
          <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
        </div>
      </div>
      <div className='mx-4 md:mx-40 my-20'>
        <h2 className='text-3xl text-[#560216] font-bold my-8'>How To Register A Producer Company</h2>
        <div>
          <div className='my-2'>
            <h2 className='text-lg font-bold text-[#9D3E55]'>Name Reservation</h2>
            <h2 className=''><span className='text-[#9D3E55] font-semibold mr-2'>  Step:1</span>We help you with your company’s name reservation. We ensure the name should have the words ‘PRODUCER COMPANY’ at the end.</h2>
          </div>
          <div className='my-2'>
            <h2 className='text-lg font-bold text-[#9D3E55]'>DSCs & DIN</h2>
            <h2 className=''><span className='text-[#9D3E55] font-semibold mr-2'>  Step:1</span>We help you get 5 DSCs and 1 DIN.</h2>
          </div>
          <div className='my-2'>
            <h2 className='text-lg font-bold text-[#9D3E55]'>Drafting & Filing</h2>
            <h2 className=''><span className='text-[#9D3E55] font-semibold mr-2'>  Step:1</span>We draft and file the documents required for your company registration (MoA, AoA, PAN & TAN).</h2>
          </div>

        </div>

      </div>
      <div className="flex  h-full w-full">
        <div className="sm:w-1/4 hidden md:block">
          <div className="flex flex-col sticky top-40 ml-4 my-12 p-9">
            <div className="bg-white rounded-xl p-5">
              <h2 className="text-2xl text-[#560216] font-bold text-center">Table Of Contents</h2>
              <hr className='bg-[#560216]' />
              <Scrollspy items={[
                'Overview',
                'Producer',
                'Documents',
                'Advantages',
                'Registration',
                'Recent',
                'FAQs'
              ]} className="flex flex-col p-8" currentClassName="content-scroll-view" >
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Overview'>Overview</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Producer'>Producer Companies</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Documents'>Documents Required</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Advantages'>Advantages</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Registration'>Registration process</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#Recent'>Recent update</a> </li>
                <li className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1'><a href='#FAQs'>FAQs</a></li>
              </Scrollspy>
              </div>
          </div>
        </div>
        <div className='h-full sm:w-3/4 px-5 sm:px-9 py-2 '>

          <div className='my-12' id="Overview">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
            <p>A Producer Company was introduced in India with the Companies Act, 2013. It gives persons engaged in activities related to producing (what has been grown or produced, particularly by farming) the opportunity to form a company. A producer company can be formed by 10 or more producers (persons involved in, or in activities related to, produce or growth), two or more producer institutions or a combination of 10 or more producers and producer institutions. Such a company can only have equity capital, require a minimum of five directors and an authorised capital of Rs. 5 lakh. The procedure for forming a Producer company is similar to the one for forming a private limited company.</p>
          </div>
          <div className='h-full'>
            <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
          </div>


          <div className='my-12' id="Producer">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Types of Producer Companies
            </h2>
            <div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Production Businesses</h2>
                <p>The main functions of producer companies are production, procurement or manufacture of any primary produce for its members (for further sale) and to others.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Marketing Businesses</h2>
                <p>Even a business involved in the marketing or promotion of primary produce or provision of educational services to members and others can constitute itself as a producer company.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Technical Service Businesses</h2>
                <p>Any business offering technical assistance to producers, providing training and educational services or conducting research and development can register as a producer company.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Businesses</h2>
                <p>Any business financing producer activities, be it in the production, marketing or development domain, can register itself as a producer company.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Infrastructure Businesses</h2>
                <p>Businesses involved in providing infrastructure to producers, whether in the form of electricity, water resources, irrigation techniques, land utilisation, or consultation with regard to the same, may constitute themselves as a producer company.</p>
              </div>
            </div>
          </div>



          <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
            <h2 className='text-md md:text-xl font-bold text-[#560216]'>Related Read:How To Register A Company In India: A Step By Step Guide</h2>
            <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
          </div>




          <div className='my-12' id="Documents">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Documents Required for Producer Company Registration</h2>
            <ul className=''>
              <h2 className='text-[#9D3E55] font-semibold'>TO BE SUBMITTED BY DIRECTORS & SHAREHOLDERS</h2>
              <li className='arrow'>Scanned copy of PAN Card or Passport (Foreign Nationals & NRIs)</li>
              <li className='arrow'>Scanned copy of Voter's ID/Passport/Driver's License</li>
              <li className='arrow'>Scanned copy of Latest Bank Statement/Telephone or Mobile Bill/Electricity or Gas Bill</li>
              <li className='arrow'>Passport-size Photograph</li>
              <li className='arrow'>Specimen signature (blank document with signature [directors only])</li>
            </ul>
            <p>Note: Any one of the directors must self-attest the first three documents. In case of foreign nationals and NRIs, all the documents must be notarised (if currently in India or a non-Commonwealth country) or apostilled (if in a Commonwealth country).</p>
          </div>


          <div className='my-12' id="Advantages">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Advantages of a Producer Company
            </h2>
            <div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Limited Liability</h2>
                <p>All businesses can run the risk of not being able to repay their liabilities. It is a necessary evil. In this event, a sole proprietor (or individual producer) would be personally liable for all the debts of the business. The members of a producer company, on the other hand, have unlimited liability as the company is an entity in itself. Therefore, only the amount invested in the business would be lost; the personal property of the directors would be safe.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Economies Of Scale</h2>
                <p>Only 15% of India's farmers own over two acres of land. The majority of farmers are, therefore, unable to safely unlock the advantages that come with economies of scale. With a producer company, multiple farmers can work as a collective and lower costs, reduce risk and even get access to better credit facilities. This enables better planning and bargaining power with buyers.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Better Management</h2>
                <p>Rather than a single farmer managing the entire business, work within a producer company can be divided between its directors. The entity is managed by the Board of Management, which has a tenure of five years. Also, a Producer company has a separate legal existence, which means that it isn't affected by the death of any of its members.</p>
              </div>

            </div>
          </div>

          <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
            <h2 className='text-md md:text-xl font-bold text-[#560216]'>Related Read:How To Register A Company In India: A Step By Step Guide</h2>
            <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
          </div>


          <div className='my-12' id="Registration">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Farmer Producer Company Registration Process
            </h2>
            <div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>5 Business Days</h2>
                <p>A minimum of five directors must apply for a DSC, which is necessary to file the company registration documents. For this, you will only need to provide a few scanned documents and details; our representatives will fill the form and submit it online.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>7 Business Days</h2>
                <p>As soon as we apply for the DSC, we will prepare the SPICe i.e. INC-32 documents. These documents will take around a week to prepare, and will include the name for your company, the Memorandum of Association (MoA) and Articles of Association (AoA). Once these documents are prepared satisfactorily, they will be submitted to the RoC.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>10 TO 15 Business Days</h2>
                <p>Depending on the workload of the RoC, the documents will be approved in 10 to 15 days. Once approved, the Certificate of Incorporation will be mailed to your registered office address. With this document, you can apply for a Permanent Account Number (PAN) and Tax Account Number (TAN), both of which are necessary for opening a bank account in the name of the busines</p>
              </div>

            </div>
          </div>


          <div className='my-12' id="Recent">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Recent Updates
            </h2>
            <div>
              <h2 className='text-lg font-bold text-[#9D3E55]'>Nashik-based Sahyadri Farmers Producer Company (FPC) is set to launch its 1’st Incubation Centre.</h2>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>October 17, 2020</h2>
                <p>In response to the tremendous growth of start-up ecosystems as a result of incubation centres in India, the Nashik-based Sahyadri FPC will launch its own with the assistance of other partners. The government will further nurture FPC by achieving profitability and optimal growth.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>08th April: Extending Help to Farmers</h2>
                <p>Amid COVID-19 and lockdown, a producer company of Kadur, Karnataka has come forth and helped farmers sell their produce in the local market.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>16th April: 81 Farmer Producer Companies ensuring uninterrupted supplies</h2>
                <p>81 Farmer Producer Companies with the approval of the State Horticulture Department of Haryana are engaged in supplying fruits and vegetables from their member farms to end-consumers in their respective areas.</p>
              </div>

            </div>
          </div>





          <div className='my-12' id="FAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    a. Do I need to be physically present during this process?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    This isn't required. The entire process is now automated and handled online. You will receive the DIN numbers and Certificate of Incorporation by e-mail from Ministry of Corporate Affairs (MCA)..
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    b. How much time is needed for setting up a producer company in India?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Expect it to take 35 to 40 days to complete the entire procedure. This will, however, depend on whether you have all your papers in order and the workload of the RoC.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    b. How much time is needed for setting up a producer company in India?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Expect it to take 35 to 40 days to complete the entire procedure. This will, however, depend on whether you have all your papers in order and the workload of the RoC.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    c. What are the rules for picking a name for a producer company?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Every company has two parts to its name. The first part is unique. For example, 'WIPRO' or 'MERCEDES-BENZ'. The second part describes the business activity of the company. For example, 'Legal Solutions' or 'Technologies'. This second part must be as descriptive as possible. The name of the company must end with 'Producer Company Limited'..
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    d. What documents need to be submitted to start a producer company??
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Most importantly, all directors must have an identity and address proof and rights to practice on the property they are operating on. The owner of the registered office will also need to submit an NoC, stating that the company may operate from that location.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    e. What is a Digital Signature Certificate?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>A person who signs the “Founding Document” at the time the LLP is established becomes a partner of the LLP. After incorporation, new partners can be admitted to the LLP as per the conditions and requirements of the LLP AgreementA Digital Signature Certificate, or DSC, is issued by six certifying authorities in India (such as e-Mudhra and n-Code). It is nothing but an electronic version of a physical signature. It can be used to verify documents in the company registration process..</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    f. Will my producer company have a continuous existence?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>All companies are legal entities by themselves. Therefore, they have a continuous existence. The only way a producer company can cease to exist (other than shutting it down voluntarily) is if the annual compliances are not met or if the creditors/courts force its closure.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    g. Will the books of a producer company need auditing?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Yes, a producer company must have its books audited from its very first year. And in case turnover crosses Rs. 5 crore, it must employ a full-time company secretary to manage its affairs..</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  )
}

export default Producer