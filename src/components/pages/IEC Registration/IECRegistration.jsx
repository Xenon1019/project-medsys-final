import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import AccessSVG from "./imgs/Access to Global Markets.svg"
import benefitsLogo from './imgs/Benefits from the Government.svg'
import lesserLogo from './imgs/Lesser Compliances.svg'
import lifetimeLogo from './imgs/Lifetime Validity.svg'
import iecLogo from './imgs/iecImg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./IECRegistration.css"


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const IECRegistration = () => {
    TabTitle('Design Registration - medsysconsultancy.com');

    return (
        <div className='font-serif'>
            <div className='h-[34rem] flex justify-between py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
                <div className='text-white flex flex-col justify-between' >
                    <h2 className='text-5xl font-bold '>IEC Registration</h2>
                    <p className='text-lg mr-20'>Do you want to bring goods or services into or out of India?</p>
                    <p className='text-lg mr-20 mt-2'>Get IEC now to begin your import/export business!</p>
                    <div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={bussinessLogo} alt="" />
                            <h2>Business Served</h2>
                        </div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={starLogo} alt="" />
                            <h2> 9.6/10 Unfiltered Customer ratings</h2>
                        </div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={smileLogo} alt="" />
                            <h2>Satisfaction or Money Back Guarntee</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-white border rounded-3xl '>
                    <form className='flex flex-col  p-8 w-[30rem]' action="">
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Full Name' type="text" />
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Email ID' type="text" />
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Phone No.' type="text" />
                        <div className='text-center my-12'>
                            <button className='border bg-[#560216] text-white px-2 py-2 rounded-lg'>Request a Callback</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex justify-between items-center px-16 bg-black text-white h-20'>
                <div className='text-2xl'>Our IEC Registration Packages Start From ₹4,500/- All-Inclusive</div>
                <div>
                    <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
                </div>
            </div>
            <div className='mx-40 my-20'>
                <h2 className='text-3xl text-[#560216] font-bold my-8'>What Is IEC Registration?</h2>
                <div>
                    IEC stands for Import and Export code. It is a 10 digit number which has a lifetime validity. The IEC certificate is granted by the Directorate General of Foreign Trade (DGFT) under the Ministry of Commerce and Industry. One cannot import without first getting themselves registered for the IEC certificate. Even exporters can only take advantage of customs, export promotion and DGFT benefits if they have the IEC certificate.

                </div>
            </div>

            <div className='flex bg-[#f6d5dd] h-full w-full'>
                <div className='w-3/12'>
                    <div className='flex flex-col sticky top-40 ml-4 my-12'>
                        <div className='bg-white rounded-xl  p-2 '>
                            <h2 className='text-3xl text-[#560216] font-bold'>Table Of Contents</h2>
                            <hr className='bg-[#560216]' />
                            <Scrollspy items={[
                                'Overview',
                                'Benefits',
                                'Documents',
                                'How',
                                'FAQs'
                            ]} className="flex flex-col p-8" currentClassName="content-scroll-view" >
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Benefits'>Benefits</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#How'>How Will We Help You?</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#FAQs'>FAQs</a></li>
                            </Scrollspy>
                        </div>
                        <button className='bg-[#560216] text-white my-4 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
                    </div>
                </div>
                <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-2 '>

                    <div className='my-12' id="Overview">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
                        <p>India has witnessed a huge growth in the export and import sector in recent years. Indian businesses are looking to expand their base from domestic to international markets, whereas multinational companies like Google, Amazon, Emirates, etc. are entering the Indian marketplace. An importer requires an IEC certificate to clear his shipment from the customs and also to make payment to the foreign party. Exporters use the IEC code to send shipments to foreign countries and receive payments from their foreign clients.</p>
                        <p>All types of business structures such as proprietorship, partnership firms, LLPs, Companies and charitable organizations are eligible to apply for IEC certificate. IEC certificate is not required if the goods or services imported or exported are for personal use or for traders who are registered under GST.</p>
                    </div>


                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-xl font-bold text-[#560216]'>Related Read: An Overview On GST And 5 Ways GST Impacts Your Business</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>


                    <div className='my-12' id="Benefits">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Benefits</h2>
                        <div>
                            <div className='flex items-center my-4'>
                                <img src={lifetimeLogo} alt="" />
                                <div className='mx-2'>
                                    <h2 className="text-xl text-[#9D3E55] font-bold">Lifetime Validity</h2>
                                    <p>IEC is a one-time registration process. You are not required to renew your IEC certificate unless there are any changes in the business.</p>
                                </div>
                            </div>
                            <div className='flex items-center my-4'>
                                <img src={benefitsLogo} alt="" />
                                <div className='mx-2'>
                                    <h2 className="text-xl text-[#9D3E55] font-bold">Benefits from the government</h2>
                                    <p>Subsidies from Council of Export Promotion and Customs are available if you have an IEC certificate. Also, various DGFT benefits can only be enjoyed if you have the IEC certificate.</p>
                                </div>
                            </div>
                            <div className='flex items-center my-4'>
                                <img src={lesserLogo} alt="" />
                                <div className='mx-2'>
                                    <h2 className="text-xl text-[#9D3E55] font-bold">Lesser compliances</h2>
                                    <p>IEC certificates helps in reducing the additional formalities in case of export and import and also reduces bureaucracy and frauds.</p>
                                </div>
                            </div>
                            <div className='flex items-center my-4'>
                                <img src={AccessSVG} alt="" />
                                <div className='mx-2'>
                                    <h2 className="text-xl text-[#9D3E55] font-bold">Access to global markets</h2>
                                    <p>Entities cannot export goods or services without holding an IEC certificate. IEC certificate is a key to take the products or services to the foreign market & help businesses grow.</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='my-12' id="Documents">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Documents Required</h2>

                        <ul className='list-disc'>
                            <li className='arrow'>PAN Card Of Applicant (Company, LLP, Trust etc.)</li>
                            <li className='arrow'>Residential Proof Of All Director/Partner/Proprietor (Electricity Bill/ Rent Agreement/ Sales Deed)</li>
                            <li className='arrow'>Identity Proof Of All Directors/Partners/Proprietors (Aadhaar Card/ Driving License/ Voter Id)</li>

                            <div className='flex '>

                                <div className='w-3/12 flex flex-col '>
                                    <div className='border border-black h-16 pl-2 pt-2 bg-[#560216] text-white'>Type of Applicant</div>
                                    <h2 className='border border-[#560216] text-[#9D3E55] h-16 pl-2 pt-2'>Documents Required	</h2>

                                </div>
                                <div className='w-3/12 flex flex-col '>
                                    <div className='border border-black h-16 pl-2 pt-2 bg-[#560216] text-white'>Company</div>
                                    <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Certificate of Registration + MOA & AOA</h2>

                                </div>
                                <div className='w-3/12 flex flex-col '>
                                    <div className='border h-16 border-black pl-2 pt-2 bg-[#560216] text-white'>Limited Liability Partnership (LLP)</div>
                                    <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Certificate of Registration + LLP agreement</h2>

                                </div>
                                <div className='w-3/12 flex flex-col '>
                                    <div className='border h-16 border-black pl-2 pt-2 bg-[#560216] text-white'>Partnership Firm</div>
                                    <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Partnership Agreement</h2>
                                </div>
                            </div>

                            <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                                <h2 className='text-xl font-bold text-[#560216]'>Related Read:How To Choose Between A Private Ltd. Company And LLP?</h2>
                                <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                            </div>

                            <li className='my-4 arrow'>Cancelled Cheque Or Bank Certificate In From ANF – 2a(i)</li>
                            <h2 className="text-lg text-[#9D3E55] font-bold">In case of a foreign investment in the entity, in addition to above documents following documents shall also be required</h2>
                            <li className='arrow'>Scanned Copy Of Report On Money Invested Filed With The RBI​</li>
                            <li className='arrow'>Scanned Copy Of Form FC-GPR​</li>
                            <li className='arrow'>If Specific Permission Granted To The Entity, Then Scanned Copy Of The Permission​</li>


                        </ul>

                        <img src={iecLogo} alt="" />

                    </div>

                    <div className='my-12' id="How">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>How Will We Help You?</h2>

                        <ul className='list-disc'>
                            <li className='arrow'> Submit a request by clicking here.</li>
                            <li className='arrow'>Our team will contact you with a simple checklist</li>
                            <li className='arrow'>Fill in the checklist</li>
                            <li className='arrow'>Submit the documents</li>
                            <li className='arrow'> Documents shall be verified by our expert team</li>
                            <li className='arrow'> Application for IEC is filed with the authority</li>
                            <li className='arrow'> IEC certificate granted</li>
                            <p>Throughout the process, our dedicated manager will keep you updated on the progress of the application.</p>
                        </ul>
                    </div>







                    <div className='my-12' id="FAQs">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        a.How many days will it take to get my IEC certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Once you submit your documents, we shall verify the documents and if everything seems proper we shall file the application. This normally takes 2-3 days. Once the application is filed, it normally takes 5-6 working days for the department to process the application & issue an IEC certificate.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        b. I have 5 different branches of my business. Do I need to separately take an IEC certificate for each branch?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        IEC certificate is issued for a particular Pan No. So if all the branches have the same PAN number then you don’t need to separately get an IEC certificate for all the branches. Rather you can have the name of all the branches in the same certificate.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        c. Are there any compliances after the IEC certificate is obtained?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>There is no compliance to be fulfilled after the registration of your IEC code.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        d. Can I update my IEC code after registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes, you can update your IEC code by submitting all necessary documents to the authority.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        e. Can I cancel my IEC certificate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Yes, you can make a request to the DGFT online to cancel your IEC certificate.</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        f. Still Confused?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IECRegistration