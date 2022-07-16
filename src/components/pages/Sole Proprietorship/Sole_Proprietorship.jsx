import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import SoleProprietorshipPage from "./imgs/Sole Proprietorship Page.png"
import Accounting from "./imgs/Accounting and Book Keeping.svg"
import Tax from "./imgs/Tax Audit.svg"
import Income from "./imgs/Income Tax Returns.svg"
import GST from "./imgs/GST Registrations and returns.svg"
import MSME from "./imgs/MSME Registration.svg"
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import GreenTick from "./imgs/green tick.png"
import ContactForm from "../../ContactForm";
import "./Sole.css";

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
const Sole_Proprietorship = () => {
    TabTitle("Sole Proprietorship - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Sole Proprietorship</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Want to run your business without the hassle of any partners, shareholders, etc?
                        </p>
                        <p>
                            Start a Sole Proprietorship with the help of ICI today!
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
                    Our Sole Proprietorship incorporation packages start from ₹5,549/- all-inclusive
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>
            <div className="my-12 mx-4 md:ml-28">
                <h2 className="text-3xl text-[#560216] font-bold my-4">What Is A Sole Proprietorship?</h2>
                <p>A sole proprietorship firm is a type of business entity that is owned, controlled and managed by an individual person. A sole proprietor has complete control and decision-making power over the business.</p>
                <p>Sole proprietorship businesses typically require less paperwork and are easier to maintain than partnerships or corporations. The business owner is responsible for the debts and liabilities, and the accounting and record keeping methods are usually simple and straightforward. In simple words, sole proprietorship is one man business organisation.</p>
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
                                    "Advantages",
                                    "Disadvantages",
                                    "Checklist",
                                    "Steps",
                                    "Requisite",
                                    "Compliances",
                                    "Help",
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
                                        An Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Advantages"
                                    >
                                        Advantages
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Disadvantages"
                                    >
                                        Disadvantages
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
                                        href="#Steps"
                                    >
                                        Steps To Incorporate A Sole Pr..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Requisite"
                                    >
                                        Requisite Documents
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Compliance"
                                    >
                                        Compliance Required By Sole P..
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Help"
                                    >
                                        How Can We Help?
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
                        <h2 className="text-3xl text-[#560216] font-bold my-4">An Overview</h2>
                        <p className="my-2">
                            The Indian government has not established any separate rules and regulations for a sole proprietorship, and there is no registration process. The registration of the business can therefore only be identified on the basis of the tax registration required in the company. These tax registrations may include a GST registration and / or an SSI / MSME registration that must be obtained on behalf of the owner to determine that the owner runs the company as a sole proprietorship. It’s a good option for those who want to provide a platform to their business idea and try out something they want to do with minimal investment.
                        </p>

                    </div>



                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Advantages
                        </h2>

                        <ul className="">
                            <li className="text-[#9D3E55] arrow text-lg font-semibold ">Quick Decision Making</li>
                            <p>The promoter has complete and direct control over all decision making which ensures quicker business decisions and hence, faster execution.</p>
                            <li className="arrow">Easy to Start and Inexpensive</li>
                            <p>The process for starting a sole proprietorship firm is easier compared to other business structures and can be completed within 1 working day. Registration is cheaper than all other types of organization. Due to the minimum requirement to comply with the rules, current costs and staffing requirements, the running costs and manpower costs are low.</p>
                            <li className="arrow">Tax Benefits</li>
                            <p>The benefits of sole proprietorship is that it prevents double taxation of the firm. You will file returns and pay taxes only in your personal name. There are no separate income tax returns to be filed and no tax to be paid by the firm. The business is taxed at the personal income tax rate instead of the corporate tax rate. This leads to enormous tax savings.</p>
                        </ul>
                    </div>

                    <div className="my-12" id="Advantages">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Disadvantages
                        </h2>

                        <ul className="">
                            <li className="text-[#9D3E55] arrow text-lg font-semibold ">Unlimited Liabilty</li>
                            <p>This means in case the business assets are not sufficient to pay of the business liabilities, then personal assets of sole proprietor would be sold to pay off the liability.</p>
                            <li className="arrow">Transferability</li>
                            <p>Any license or registration obtained in the name of the proprietorship cannot be transferred to any other person or entity.</p>
                            <li className="arrow">No perpetual succession</li>
                            <p>A sole proprietorship firm has no separate legal existence. It is dissolved upon the death of a proprietor.</p>
                            <li className="arrow">Raising of Funds</li>
                            <p>A sole proprietorship cannot raise capital by selling stock. The difficulty of raising funds forces the owner to rely on his own savings and loans from friends and family.</p>
                        </ul>
                    </div>


                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read: What’s The Difference Between Sole Proprietorship And OPC? </h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>

                    <div className="my-12" id="Checklist">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Checklist
                        </h2>

                        <div className="md:flex justify-around">
                            <div className="flex flex-col justify-center items-center bg-white p-4 mx-4 my-4 rounded-lg">
                                <img className="h-20 " src={GreenTick} alt="" />
                                <p>Sole Proprietor must be a Indian Citizen</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white p-4 mx-4 my-4 rounded-lg">
                                <img className="h-20 " src={GreenTick} alt="" />
                                <p>Sole Proprietor must be a Resident of India.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white p-4 mx-4 my-4 rounded-lg">
                                <img className="h-20 " src={GreenTick} alt="" />
                                <p>Sole proprietor has to be a natural person</p>
                            </div>
                        </div>

                    </div>

                    <div className="my-12" id="Steps">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Steps To Incorporate A Sole Proprietorship
                        </h2>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 1: </span>Choose a name for the business.</p>
                        <p><span className="text-[#9D3E55] arrow text-lg font-semibold">Step 2: </span>Open a bank account in the name of the business.</p>
                        <p>There is no formal registration required, but can be obtained through either the following ways:</p>
                        <p>– Register as a Small and Medium Enterprise (SME) under MSME Act,or</p>
                        <p>– Register under GST Act, or</p>
                        <p>– Register under Shop and Establishment Act.</p>
                        <div className="flex justify-center">

                            <img className="h-96" src={SoleProprietorshipPage} alt="" />
                        </div>
                    </div>


                    <div className="my-12" id="Requisite">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Requisite Documents
                        </h2>
                        <p>The following documents are required to establish sole proprietorship</p>
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">Identity Proof</li>
                                <p>- Aadhaar card of proprietor</p>
                                <p>- PAN card of proprietor</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Proof Of Residence</li>
                                <p>- Bank Statement copy</p>
                                <p>- Lease Agreement or Sales Document (in case of registration under Shops and Establishments Act)</p>
                            </div>
                        </ul>
                    </div>


                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read: How To Register A Company In India: A Step By Step Guide</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>


                    <div className="my-12" id="Compliances">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Compliance Required By Sole Proprietorship
                        </h2>

                        <div className="my-12">
                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={Accounting} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Accounting and Book Keeping</p>
                                    <p>It is always advisable to maintain financial records for business activities of a proprietorship firm on an accrual basis in order to judge whether these operations are generating a profit. However, one can also maintain a cash basis of accounting.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={Tax} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Tax Audit</p>
                                    <p>There is no legal obligation for the dealer to check the accounts (unless the turnover in the financial year exceeds Rs. 1 crore or the total income of the business exceeds Rs. 50 lakhs). In both cases, the Income Tax Act of 1961 requires an audit for the holder.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={Income} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">Income Tax Returns</p>
                                    <p>Income tax returns must be filed by all proprietorship firms having a taxable income. Since proprietorship and promoter are considered to be the same, the income tax return filing procedure for a proprietorship is similar to that of an individual.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-lg font-bold text-[#560216]'>Related Read:Income Tax Returns (ITR) AY 2021-22: Which ITR Form Should You File?</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>

                    <div className="my-12" id="Compliances">

                        <div className="my-12">
                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={GST} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">GST Registrations and returns</p>
                                    <p>You have to get yourself registered under GST if your annual turnover is more than the prescribed limits (generally Rs. 40 lakhs for most kinds of manufacturing businesses and Rs. 20 lakhs for services). However, it is necessary to get a GST registration if you are selling products through online platforms (such as Amazon, Flipkart etc.). Once you have registered under GST, you are required to file monthly or quarterly returns with details of sale and purchases.</p>
                                </div>
                            </div>

                            <div className="flex my-4">
                                <img className="h-20 mx-8" src={MSME} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[#9D3E55]  text-lg font-semibold">MSME Registration</p>
                                    <p>You can get yourself registered as a Micro, Small and Medium Enterprise (MSME) under the MSME Act. The application can be filed electronically. While it is not mandatory to register as an MSME, it is highly beneficial for businesses. It provides access to a variety of business portals and makes it easier in raising capital for businesses to an extent.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="mt-auto sm:w-4/5" id="Procedure">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">
                            How Can We Help?
                        </h2>

                        <div className="flex flex-col my-4">
                            <p className="text-[#9D3E55] arrow text-lg font-semibold">MSME Registration</p>
                            <p>All you need is Aadhaar and PAN card to get started. You can choose any name. However, the existing name should not be in the trademark register. Based on your documentation and discussions with you, our experts will advise you on what records you need to obtain.</p>
                        </div>
                        <div className="flex flex-col my-4">
                            <p className="text-[#9D3E55] arrow text-lg font-semibold">Shop and Establishment Act License</p>
                            <p>This license isn’t mandatory at all places, but it is required to be obtained according to the local laws. It is issued by the municipal party and is issued on the basis of the number of employees.</p>
                        </div>
                        <div className="flex flex-col my-4">
                            <p className="text-[#9D3E55] arrow text-lg font-semibold">Udyog Aadhar Registration.</p>
                            <p>Udyog Aadhaar is a registered company of all micro, small and medium sized companies. It can be used to open a bank account with tax registration along with industry base registration. Through this various subsidies from the government can also be enjoyed.</p>
                        </div>
                        <div className="flex flex-col my-4">
                            <p className="text-[#9D3E55] arrow text-lg font-semibold">GST Registration for a firm.</p>
                            <p>Our team will process GST registration on behalf of your sole proprietor, depending on your business type and your needs. To do this, you need to provide some documents like Aadhar card, PAN card etc.</p>
                        </div>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a. Who can start a Sole Proprietorship?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Every Indian citizen can have sole proprietorship.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. What type of businesses are commonly run as Sole Proprietorship?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    From your grocery store to retailers and manufacturers, many local businesses are solely owned.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c. Is the registration online or I have to submit any documents to the government office?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    All registrations are completely paperless and online. We also provide all services online so that you don’t need to travel from your office or home.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d. Which documents are needed for opening a current account in the name of my Sole Proprietorship?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Proof of the existence of your company is required to open a checking account. Most banks will apply for MSME registration and / or GST registration. You will also need a PAN card, an address and proof of identity.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. What if I want to switch from a sole proprietorship to a limited liability company or a limited liability company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    You can always choose to do so. The procedure is very simple. It is common for sole proprietors to convert into partnerships and private limited companies at a later stage.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f. How long does it take to found a company as a sole trader?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    A Sole Proprietorship business takes less than 12 days to set up and start functioning. This simplicity makes it popular among small traders and merchants. It is also much cheaper. This is the reason why it’s the most widely used business structure.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Still Confused?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
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

export default Sole_Proprietorship