import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./Patent.css"
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
const Patent = () => {
    TabTitle('Patent eFiling - medsysconsultancy.com');

    return (
        <>
          <pagesHeader />
          <div
            className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="">
              <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                <h1 className="text-5xl font-semibold">Patent eFiling </h1>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p>An inventor with a patent has the sole right to prevent others from creating, utilising, selling, or acquiring their invention. Need to protect an invention? Look no further than India’s premier provider of intellectual property services.</p>
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
        <div className="text-xl my-auto">Contact us to know more about how we can help you with Patent</div>

<button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
  <a href="tel:+91 70204 38881">Call Now!</a>
</button>
</div>
            <div className='mx-4 md:mx-40 my-20'>
                <h2 className='text-3xl text-[#560216] font-bold my-8'>What Is Permanent & Provisional Patent?</h2>
                <div>
                    A patent is an absolute right given by the government to the creator, excluding others to manufacture, utilise or trade his creation till the life of the patent. In simple words, Patent gives the sole right for our design. The primary purpose of a patent is to avoid people from stealing one’s creation. The duration of a patent is 20 years, after that the invention is open for all. The period is set long so to motivate the creators into creating more or upgrading their creations. A creator, patent registered has the absolute right to sue anyone who is using his invention.
                </div>
            </div>


            <div className="flex  h-full w-full">
        <div className="sm:w-1/4 hidden md:block">
          <div className="flex flex-col sticky top-40 ml-4 my-12 p-9">
            <div className="bg-white rounded-xl p-5">
              <h2 className="text-2xl text-[#560216] font-bold text-center">
                Table Of Contents
              </h2>
              <hr className="bg-[#560216]" />
                            <Scrollspy items={[
                                'Overview',
                                'Advantages',
                                'Documents',
                                'Process',
                                'How',
                                'Faq'
                            ]} className="flex flex-col p-8" currentClassName="content-scroll-view" >
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Advantages'>Advantages</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Process'>Process Flow</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#How'>How Will We Help You?</a></li>
                                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#FAQs'>FAQs</a></li>
                                </Scrollspy>
            </div>
          </div>
        </div>
        <div className=" h-full sm:w-3/4 px-5 sm:px-9 py-2">
          <div className="my-12" id="Overview">
            <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className='my-2'>A patent is a right granted to an individual or enterprise by the government which excludes others from making, using, selling, or importing the patented product or process without prior approval.</p>
                        <p className='my-2'>Patent filing or patent registration is the first step an inventor takes to protect his/her invention from being misused. Patent filing in India is a fairly complicated ordeal, however, with the right legal guidance, it can be done easily. Any business entity or an individual who believes in securing their patent should get a legal consultation from expert patent practitioners such as ours. Vakilsearch helps you with the simplest way to file a patent.</p>
                        <p className='my-2'>A patent can be filed by any individual or business that wants to protect an invention or an idea. An invention can be a new product or a new process.</p>

                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className='my-12' id="Advantages">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Advantages</h2>
                        <p>The following are some of the advantages of filing a patent in India:</p>
                        <ul className=''>
                            <li className="arrow">A patent is a form of encouragement for innovations and inventions. Once an applicant is granted the patent, he or she becomes the exclusive owner of the invention or the idea</li>
                            <li className="arrow">Filing a patent in India is important for a business as the patent restricts its competitors from copying, selling, or importing its intellectual property without prior permission. This way the patent holder can protect their patent rights in support of the existing laws of the land</li>
                            <li className="arrow">Patents can be sold and licensed like other forms of property</li>
                            <li className="arrow">A patent is just like any other intellectual property and can be transferred by the inventor</li>
                            <li className="arrow">A patented product is likely to improve brand perception and potentially enable your business to charge a premium</li>
                            <li className="arrow">With exclusive patient rights, the owner of the patent controls the use of the invention for twenty years or longer.</li>
                        </ul>
                    </div>

                    <div className='my-12' id="Documents">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Documents Required</h2>
                        <p>Application form in duplicate (Form 1)</p>
                        <ul className=''>
                            <li className="arrow">The provisional or complete specification in duplicate. If the provisional specification is filed, it must be followed by the complete specification within 12 months (Form 2)</li>
                            <li className="arrow">Drawing in duplicate (if necessary)</li>
                            <li className="arrow">Abstract of the invention in duplicate</li>
                            <li className="arrow">Information & undertaking listing the number, filing date, & current status of each foreign patent application (if such exist) in duplicate (Form 3)</li>
                            <li className="arrow">Priority document (if the priority date is claimed) in convention application, when directed by the Controller</li>
                            <li className="arrow">Declaration of inventor-ship where the provisional specification is followed by complete specification or in case of convention/PCT national phase application (Form 5)</li>
                            <li className="arrow">Power of attorney (if filed through any patent agent)</li>
                            <li className="arrow">Fees (to be paid in cash/by cheque/by demand draft).</li>
                        </ul>
                    </div>

                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-xl font-bold text-[#560216]'>Related Read:Copyright Vs. Patent Vs. Trademark: Which One Is Right For You?</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>


                    <div className='my-12' id="Process">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Process Flow</h2>
                        <ul className='my-2'>
                            <p className='text-[#9D3E55] mr-2 text-lg font-semibold'>Provisional Patent:</p>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:1</span>Prepare Invention Disclosure Form (IDF)</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:2</span>Consolidate your invention</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:3</span>Search Uniqueness</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:4</span>Prepare Patent Specification</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:5</span>Patent exception</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:6</span>File a Patent Application</li>
                        </ul>
                        <ul className='my-2'>
                            <p className='text-[#9D3E55] mr-2 text-lg font-semibold'>Permanent Patent:</p>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:1</span>Search for the patent</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:2</span>Prepare a patentability report</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:3</span>Request for patent examination</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:4</span>Patent exception</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:5</span>Patent exception</li>
                            <li className=''><span className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Step:6</span>Draft a proper response for patent exceptions & grant patent</li>
                        </ul>
                    </div>


                    <div className='my-12' id="How">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>How Will We Help You?</h2>
                        <ul className=''>
                            <li className="arrow">Submit a service request by clicking here</li>
                            <li className="arrow">Our team will be there with you, to understand the necessary details about the business & provide you with a simple checklist.</li>
                            <li className="arrow">Once you fill-up the checklist & provide us with the required documents, our team shall verify them.</li>
                            <li className="arrow">In case of any query(s) from the department, our experts shall respond to them on your behalf.</li>
                        </ul>
                    </div>





                    <div className='my-12' id="FAQs">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    In case of any query(s) from the department, our experts shall respond to them on your behalf.
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    A patent can be filed either by a new inventor or his assignee (alone or jointly with any other people).
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What are the three types of patents?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The three types of patents are utility patents, design patents, and plant patents..
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Who gives patents in India?
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
                                     In India, how long is a patent valid?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Patent registration is valid for 20 years in India.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                     What cannot be patented in India UPSC?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Patents linked to any agriculture or horticulture-related process or processes related to atomic energy are not eligible for grants. e.g. inventions in relation to uranium, beryllium, thorium, radium, graphite, lithium etc as specified by the Central Government. The topography of integrated circuits also cannot be patented in India.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                     What information is required to obtain patent registration?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Patent registration application should include the details of the invention in the form of a CD or a pen drive that has mentioned the name, the uses, and the data of the invention.
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
      <ContactForm/>
        </>
    )
}

export default Patent