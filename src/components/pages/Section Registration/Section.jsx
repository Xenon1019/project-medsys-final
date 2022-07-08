import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import sectionImg from './imgs/Section 8 Company Benefits Image.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./Section.css"


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const Section = () => {
    TabTitle('Section 8 Company Registration - medsysconsultancy.com');

    return (
        <div className='font-serif'>
            <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
                <div className='text-white flex flex-col justify-between' >
                    <h2 className='text-5xl font-bold '>Section 8 Company Registration</h2>
                    <p className='text-lg mr-20'>Similar to Trusts and Associations, Section 8 Company is registered for charitable purposes. It is formed to promote research, social welfare, religion, etc.</p>
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
                <div className='text-2xl'>Contact us to know more about Section 8 Company</div>
                <div>
                    <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
                </div>
            </div>

            <div className='mx-40 my-20'>
                <h2 className='text-3xl text-[#560216] font-bold my-8'>How To Register A Section 8 Company?</h2>

                <ul className='my-2'>
                    <p className=''>Registering a Section 8 Company is quick, easy, and can be done online with Medsys in 3 simple steps:</p>
                    <div>
                        <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step 1: Right Entity Selection </li>
                        <p className='my-4'>We address all your queries about entity selection and guide you to choose the most appropriate one.</p>
                    </div>
                    <div>
                        <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step 2: Online Paperwork </li>
                        <p className='my-4'>We help you get the entire process of filing and registration completed.</p>
                    </div>
                    <div>
                        <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step 3: Registration </li>
                        <p className='my-4'>We will register the NGO and handle all the formalities (Trust Act, Society Registrations Act or the Companies Act, depending on the entity chosen).</p>
                    </div>


                </ul>
            </div>


            <div className='flex bg-[#f6d5dd] h-full w-full'>
                <div className='w-3/12'>
                    <div className='flex flex-col sticky top-20 '>
                        <div className='bg-white rounded-xl ml-12 my-12 p-2 '>
                            <h2 className='text-3xl text-[#560216] font-bold'>Table Of Contents</h2>
                            <hr className='bg-[#560216]' />
                            <Scrollspy items={[
                                'Overview',
                                'Requirements',
                                'Documents',
                                'Advantages',
                                'How',
                                'Faq'
                            ]} className="flex flex-col p-8" currentClassName="table-spy" >
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Requirements'>Requirements</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Advantages'>Advantages Of MSME</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fAQs'>FAQs</a>
                            </Scrollspy>
                        </div>
                        <button className='bg-[#560216] text-white m-12 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
                    </div>
                </div>
                <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-12 '>

                    <div className='my-12' id="Overview">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
                        <p className='my-2'>A Section 8 company under the Companies Act, 2013 or a Section 25 Company as per the Companies Act,1956 is an organization registered with an objective of promoting the fine arts, science, literature, or knowledge sharing for a purposeful matter or for charity. These are the limited companies established under the Companies Act. The Government grants these companies an exclusive license under Section 8 Companies Act. There are three main conditions for granting the license is.</p>
                        <p className=''>The company should form for the charitable purpose.</p>
                        <p className=''>Income and profits should be used towards these objects.</p>
                        <p className=''>The company should not pay any dividend to its members.</p>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className='my-12' id="Role">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Requirements for online registration of Sec 8 companies</h2>
                        <p>For registering a Section 8 company, the following criteria must be fulfilled:</p>
                        <ul className='my-2'>
                            <p className='text-[#9D3E55] mr-2 text-lg font-semibold'>Provisional Patent:</p>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Governed by:</span>Companies Act, 2013.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Members:</span>Minimum of 2 Directors/Shareholders.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Important Documents:</span>MoA, AoA and financial statements.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Board:</span>Directors.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Property management:</span>All the properties belonging to a company are vested in the name of the company. These can be sold in conformity to the provisions mentioned in the Companies Act, 2013. The Act says the sale can be done with prior consent of the Company Board of Directors, when they pass a resolution regarding the same.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Closure or winding up:</span>The property and funds of the society, upon its dissolution ( as per the society by-laws) and settlement of all liabilities & debts, may not be equally distributed among the company members. Rather, the same can be transferred or given to some other company, preferably with similar objects.</li>
                            <li className='my-4'><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>Annual compliance:</span>The company must ensure its annual compliance by filing its annual returns and annual accounts with the RoC.</li>
                        </ul>
                    </div>

                    <div className='my-12' id="Role">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Documents Required</h2>
                        <ul className=''>
                            <li className="my-4 arrow">DSC and DIN of the Directors.</li>
                            <li className="my-4 arrow">Objectives and proposed work of the company.</li>
                            <li className="my-4 arrow">Financial statements like assets and liabilities, the projection for five years etc.</li>
                            <li className="my-4 arrow">Directors personal documents.</li>
                            <li className="my-4 arrow">Registered office address documents viz. rental agreement or sale deed in the name of the company, utility bills not older than two months.</li>
                        </ul>
                    </div>
                    <div className='my-12' id="Role">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Advantages Of MSME</h2>
                        <p>The following are the advantages of incorporating a Section 8 company over other modes of registering an NGO:</p>
                        <ul className=''>
                            <li className="my-4 arrow">It has organised operations and greater flexibility.</li>
                            <li className="my-4 arrow">Avoids meticulous registration process and no physical presence required.</li>
                            <li className="my-4 arrow">No requirement of a minimum paid-up capital.</li>
                            <li className="my-4 arrow">Seamless procurement of tax benefits under section 12AA and 80G of the Income Tax Act.</li>
                            <li className="my-4 arrow">Any partnership firm can be a member in its individual capacity and obtain Directorship.</li>
                        </ul>
                        <img src={sectionImg} alt="" />
                    </div>

                    



                    <div className='my-12' id="fAQs">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a.Is there any maximum limit for the number of members in the Section 8 company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    There is no such maximum limit.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. Can any government employees or officer be a member of NGO?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The answer to this question is yes. Government employees or officers can be part of NGOs provided the NGO is not anti-government. There are a few rules too that these people have to follow, one of them is to make sure that the NGO is not profit making and the member must not draw any salary from the NGO.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c.What are the other alternatives for starting an NGO?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The Office of the Controller General of Patents, Designs and TradeMarks (CGPDTM) generally known as the Indian Patent Office, is an agency under the Department for Promotion of Industry and Internal Trade which administers the Indian law of patents, designs and trademarks.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d.How is the property of Section 8 managed?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The property of the company vests in the name of the Company and the same can be sold as per the rules mentioned under the Companies Act, (Eg: With the consent of the Board of Directors in the form of a resolution).
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. Still Confused?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Patents linked to any agriculture or horticulture-related process or processes related to atomic energy are not eligible for grants. e.g. inventions in relation to uranium, beryllium, thorium, radium, graphite, lithium etc as specified by the Central Government. The topography of integrated circuits also cannot be patented in India.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section