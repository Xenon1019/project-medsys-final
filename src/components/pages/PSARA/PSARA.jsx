import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./PSARA.css"
import ContactForm from "../../ContactForm";


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


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

const PSARA = () => {
    TabTitle('PSARA License - medsysconsultancy.com');

    return (
        <>
        <pagesHeader />
        <div
          className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="">
            <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
              <h1 className="text-5xl font-semibold">PSARA License</h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>Private security business is thriving rapidly. Connect with Medsys to know the legalities</p>
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

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="flex  h-full w-full">
                <div className="sm:w-1/4 hidden md:block">
                    <div className="flex flex-col sticky top-40 ml-4 my-12 p-9">
                        <div className="bg-white rounded-xl p-5">
                            <h2 className="text-2xl text-[#560216] font-bold text-center">Table Of Contents</h2>
                            <hr className='bg-[#560216]' />
                            <Scrollspy items={[
                                'Overview',
                                'Role',
                                'Eligibility',
                                'Documents',
                                'Instructions',
                                'FAQs'
                            ]} className="flex flex-col p-8" currentClassName="content-scroll-view" >
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Role'>Role of Private Security Agency</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Eligibility'>Eligibility Criteria</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Instructions'>Instructions</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#FAQs'>FAQs</a></li>
                            </Scrollspy>
                        </div>
                    </div>
                </div>
                <div className='h-full sm:w-3/4 px-5 sm:px-9 py-2 '>

                    <div className='my-12' id="Overview">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
                        <p>The ever-expanding business landscape in India has escalated the requirement of private security. From banks to lavish restaurants, car showrooms to highly-advanced factories, everyone seeks adequate protection to keep criminal elements out of the equation or to ensure proper upkeep of their fences. This growing safety concern has led to the birth of the Private Security Agencies (Regulation) Act, 2005 (PSARA). The said Act offers the leverage of establishing a legalized private security agency in India. Besides, this Act governs every aspect of private security agencies in India, be it securing registration or hiring candidates for security services.</p>

                    </div>

                    <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div>

                    <div className='my-12' id="Role">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Fundamental Role of Private Security Agency in India</h2>
                        <p>Private security agencies refer to a business entity that facilitates security services to businesses from different verticals. PSARA Act, 2005 came into effect to underpin a certain standard of professionalism in the regime of security services. PSARA license serves as a fundamental mandate for security agencies in India. Apart from facilitating security services, the security agencies offer adequate training to selected candidates for their security-centric careers.</p>

                    </div>

                    <div className='my-12' id="Eligibility">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Eligibility Criteria for Obtaining PSARA License in India</h2>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>1: In Terms Of The Type Of Business Organization</h2>
                        <h2 className='text-md font-bold my-2 text-black'>The Following Business Structures Can Apply For PSARA License</h2>
                        <ul className=''>
                            <li className="arrow">Sole Proprietorship,</li>
                            <li className="arrow">One Person Company(OPC)</li>
                            <li className="arrow">Partnership Firm,</li>
                            <li className="arrow">LLP</li>
                            <li className="arrow">Association of Persons, and</li>
                            <li className="arrow">Private Limited Company.</li>
                        </ul>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>2: In Terms Of The Role Of A Director/Principal Officer</h2>
                        <h2 className='text-md font-bold my-2 text-black'>The PSARA Act Has Underpinned Specific Criteria For Individuals Intending To Serve The Position Of Director/Principal Officer</h2>
                        <ul className=''>
                            <li className="arrow">Individual must be an Indian national</li>
                            <li className="arrow">An individual should not be minor as far as age is concerned.</li>
                            <li className="arrow">Individual must have ample financial resources to cater to business expenses.</li>
                            <li className="arrow">Individual must have crime-free track records.</li>
                        </ul>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>3: In Terms Of The Role Of A Security Guard</h2>
                        <h2 className='text-md font-bold my-2 text-black'>Individuals intending to become security guards must fulfill the given conditions:</h2>
                        <ul className=''>
                            <li className="arrow">Individual must be an Indian national</li>
                            <li className="arrow">The person should not be a minor and neither over 65 years of age.</li>
                            <li className="arrow">The person ought to behave adequate training</li>
                            <li className="arrow">The person must have a seamless service track record without any termination</li>
                            <li className="arrow">The person should match the desired physical attributes.</li>
                            <li className="arrow">The person must secure character certificate from a previous firm</li>
                        </ul>

                    </div>


                    <div className='my-12' id="Documents">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Documents Necessary for Obtaining a PSARA License</h2>
                        <ul className=''>
                            <li className="arrow">PAN</li>
                            <li className="arrow">GSTIN</li>
                            <li className="arrow">Provident Fund Registration</li>
                            <li className="arrow">ESIC ( i.e. Employees State Insurance Corporation) Registration</li>
                            <li className="arrow">Registration under Shops and Commercial Establishments Act</li>
                            <li className="arrow">Registration under the Labour Act</li>
                            <li className="arrow">Proof relating to the identity of the directors as well as employees</li>
                            <li className="arrow">Copies of the IT returns of the Directors</li>
                            <li className="arrow">Two passport size photos and PANs of the promoters</li>
                            <li className="arrow">Proof relating to the address of the Agency Office</li>
                            <li className="arrow">Affidavit as u/s 7 (2) of PSARA, 2005</li>
                            <li className="arrow">Security training affidavit</li>
                            <li className="arrow">Certificate of Incorporation (COI)</li>
                            <li className="arrow">Signed Memorandum of Understanding i.e. MOU with the authority-recommended training institute</li>
                        </ul>
                    </div>

                    <div className='my-12' id="Instructions">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Instructions for Securing PSARA License in India</h2>
                        <p>Follow the below-mentioned steps for obtaining PSARA license in India:</p>
                        <ul className=''>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]"> Step 1: Arrange the applicable documents</li>
                                <h2 className='mb-2'>The documents necessary for the application have to be collected and sorted accordingly to ensure quick and smooth processing of the application, which will, in turn, speed up the process of obtaining the license.</h2>
                                <h2 className='mb-2'>The documents related to the various registration and details of the directors and promoters have to be legit and in an acceptable format to avert any discrepancy.</h2>
                                <h2 className='mb-2'>Once the required documents are arranged, the application can be filed electronically on the official portal. The presence of the digital signature makes the registration process seamless and hassle-free</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 2: Enter into a Memorandum of Understanding with a certified training institute</li>
                                <h2>The applicant must enter into <span className='text-lg font-bold text-black'> A Memorandum Of Understanding (MOU) </span> with a certified training institute. The list of the eligible institute is available on the government official portal. These institutes shall provide the required training to the selected candidates. Ex-servicemen have access to a certain degree of relaxation concerning the training aspects of the agency.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 3: File The Standard Application</li>
                                <h2>Once all the above steps are fulfilled, the applicant must file the application (Form-I) with the respective state authority. The said form must be attested with Form-II (application for verification of antecedents). Affidavit in Form-III must be accompanied by Form-I.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 4: Complete Formalities Regarding Police Verification</li>
                                <h2>In this step, the applicant is required to file form-I to initiate the Police verification. Where the agency is a company or a partnership, the proposed directors shall undergo Police verification without any exception.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 5: Grant Of PSARA License</li>
                                <h2>Where the application is attested with the NOC from the police after verification, the respective authority will scrutinize the same and then proceed to either accord the license in form-IV or reject the same in case of default.</h2>
                            </div>
                        </ul>
                        <h2><span className='text-lg font-bold text-[#9D3E55]'>Note: </span> Authority usually takes around 60 days to grant this license from the date of application submission. Following are the parameters that affect the timeline of granting the license</h2>

                        <ul>
                            <li className='text-md font-bold my-2 text-black arrow'>Quantum Of Paperwork Compliance Level</li>
                            <li className='text-md font-bold my-2 text-black arrow'>Type Of License</li>
                            <li className='text-md font-bold my-2 text-black arrow'>Appointment Of Supervisors</li>

                            <p>Applicants must appoint the supervisors to stay in line with the provisions of the PSARA, 2005. The supervisors are obligated to administer the agency's operation in relation to the work of the security guards. The supervisors so appointed must have at least three years of experience in the defence services.</p>

                        </ul>
                    </div>



                    <div className='my-12' id="FAQs">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         How do I apply for a Psara license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Steps for apply for Psara license First, arrange the required documentation. Second, Sign MoU with a certified training institute Third, file application in form 1 Fourth, complete the formalities regarding police verification
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         Who can apply for Psara?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Indian national or citizen of such other nation as the Central Gov. may, by Official Gazette, specify; Individual who have attained 18 years of age but has not exceeded the age of 65 years; Individuals who duly satisfy the agency about his antecedents & character.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is Psara license mandatory for security agency?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        PSARA license is a legal mandate for conducting the business of private security in India. Such businesses facilitate trained security guards to various organizations across the country.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         What is the validity of the PSARA License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Typically, a PSARA license comes with a validity of 5 years which can be extended further by filing the relevant application online. However, in the states like Chhattisgarh & Uttarakhand, it is valid for one year only.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         What is the Government fee for PSARA Licence?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        The government fees payable can be divided into the given categories: For one district -- Rs. 5,000/- For 2 to 5 districts in a state -- Rs. 10,000/-. For the entire state -- Rs. 25,000/-.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is the role of Supervisor so appointed by the Private security agency in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Supervisors are liable to administer the agency’s operation and all the affairs related to security guards.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         What are the provisions regarding the License renewal?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        The application pertaining to license renewal must be filed 45 days prior to the expiration date.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         Is the grant of PSARA license is done on the state-wise basis?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes, the grant of PSARA license is done on the state-wise basis.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        List down some key documentations for obtaining PSARA license in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        MOA, GST registration, MoU with training institute, PF and ESIC Registration, so and so forth.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                         Still Confused?
                                    </AccordionItemButton>
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
            <ContactForm />
    </>
    )
}

export default PSARA