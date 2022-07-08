import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import designLogo from './imgs/Design.svg'
import TOW from './imgs/Title of Work.svg'
import DOW from './imgs/Description of Work.svg'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./Design.css"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const Design = () => {
  TabTitle('Design Registration - medsysconsultancy.com');

  return (
    <div className='font-serif'>
      <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
        <div className='text-white flex flex-col justify-between' >
          <h2 className='text-5xl font-bold '>Design Registration</h2>
          <p className='text-lg mr-20'>We can help you obtain a Design Registration for your unique product design within a few clicks of a mouse.</p>
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
        <div className='text-2xl'>Contact us to know more about how we can help you with Design Registration</div>
        <div>
          <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
        </div>
      </div>
      <div className='mx-40 my-20'>
        <h2 className='text-3xl text-[#560216] font-bold my-8'>What Is Design Registration?</h2>
        <div>
          Various industrial designs are registered and protected through the process of Design Registration in India. The procedure of Design Registration is administered under the Designs Act-2000 and the corresponding Designs Rules-2001.

        </div>

      </div>
      <div className='flex bg-[#f6d5dd] h-full w-full'>
        <div className='w-3/12'>
          <div className='flex flex-col sticky top-20 '>
            <div className='bg-white rounded-xl ml-12 my-12 p-2 '>
              <h2 className='text-3xl text-[#560216] font-bold'>Table Of Contents</h2>
              <hr className='bg-[#560216]' />
              <Scrollspy items={[
                'overview',
                'advantages',
                'importance',
                'process',
                'documents',
                'faq'
              ]} className="flex flex-col p-8" currentClassName="table-spy" >
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#overview'>Overview</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#advantages'>Advantages</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#importance'>Importance of Design Registration</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#process'>Process Flow</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#documents'>Documents Required</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fAQs'>FAQs</a>
              </Scrollspy>
            </div>
            <button className='bg-[#560216] text-white m-12 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
          </div>
        </div>
        <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-12 '>

          <div className='my-12' id="overview">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
            <p>Various industrial designs are registered and protected through the process of Design Registration in India. The procedure of Design Registration is administered under the Designs Act-2000 and the corresponding Designs Rules-2001.</p>
          </div>
          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}


          <div className='my-12' id="advantages">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Advantages
            </h2>
            <div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Safety from misuse</h2>
                <p>Design Registration process prevents other entities from producing, selling or distributing products having identical designs.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Expandable validity</h2>
                <p>A Design registration is valid for a period of 10 years. This validity period can be extended up to 5 more years</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Unique Selling Point</h2>
                <p>Design registration gives an entity a Unique Selling Point, which means that its product gets unique identity from that of the competitors.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Protects Originality</h2>
                <p>The registered designs are universally unique and they are not earlier published in any nation and were also not known in India before.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Induces Client Response</h2>
                <p>An important criterion for registering a design is that it should appeal to and is judged solely by the eye.</p>
              </div>
              <div className='my-2'>
                <h2 className='text-lg font-bold text-[#9D3E55]'>Promotes Creativity</h2>
                <p>Design registration requires a product to be appealing and unique from all others, and this promotes creativity and boosts competition.</p>
              </div>
            </div>
          </div>



          <div className='my-12' id="importance">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Importance of Design Registration</h2>

            <ul className='list-disc'>
              <h2 className=''>The industrial design indicates the creation of new and genuine features of that are recognised by unique shape, configuration, patterns, decoration and combination of lines or colours applied. A unique design in its finished state appeals to the eye and is judged by the clients in a positive manner. Given below are the objectives of Design Registration:</h2>
              <li className='my-4'>To make effective and convenient legal system for protection of Designs in India from being misused.</li>
              <li className='my-4'>To encourage and develop creativity and originality.</li>
              <li className='my-4'>It is a necessary Compliance of Trade-Related Aspects of Intellectual Property Rights (TRIPs) Agreement between the WTO Member nations.</li>
            </ul>
          </div>

          <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
            <h2 className='text-xl font-bold text-[#560216]'>Related Read:Copyright Vs. Patent Vs. Trademark: Which One Is Right For You?</h2>
            <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-lg hover:bg-green-600'>CLICK HERE</button>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Process Flow</h2>
            <ul className='list-disc'>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:1</span>Upload required documents & information of the article on our web portal.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:2</span>Consult our business advisor regarding design registration form.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:3</span>Our professional will verify the validity of documents & Information provided.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:4</span>On Confirmation, make online payment with different payments modes available.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:5</span>The design registration form will be filled as per the details of your product.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 before:content-["\00BB"]'>  Step:6</span>On verification, the Controller of Design shall issue Design certificate</li>
            </ul>

          </div>

          <div className='my-12' id="documents">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Documents Required</h2>
            <div>
              <div className='flex items-center my-4'>
                <img src={designLogo} alt="" />
                <div className='mx-2'>
                  <h2 className="text-xl text-[#9D3E55] font-bold">Design</h2>
                  <p>4 views of designs from a different angle</p>
                </div>
              </div>
              <div className='flex items-center my-4'>
                <img src={TOW} alt="" />
                <div className='mx-2'>
                  <h2 className="text-xl text-[#9D3E55] font-bold">Title of Work</h2>
                </div>
              </div>
              <div className='flex items-center my-4'>
                <img src={DOW} alt="" />
                <div className='mx-2'>
                  <h2 className="text-xl text-[#9D3E55] font-bold">Description of Work</h2>
                </div>
              </div>
            </div>

          </div>




          <div className='my-12' id="fAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    a. What is meant by ‘Design’?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    As per the Designs Act, 2000, ‘Design’ means only the features of shape, configuration, pattern or ornament or composition of lines or colour or combination thereof applied to any article whether two dimensional or three dimensional or in both forms, by any industrial process or means, whether manual, mechanical or chemical, separate or combined, which in the finished article appeal to and are judged solely by the eye, but does not include any mode or principle or construction or anything which is in substance a mere mechanical device, and does not include any trademark, as define in clause (v) of sub-section of Section 2 of the Trade and Merchandise Marks Act, 1958, property mark or artistic works as defined under Section 2(c) of the Copyright Act, 1957.

                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    b.What is the objective of getting Design registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The main objective of the design registration is to safeguard originality of new designs. In many cases, the buying decision is influenced not only by their efficiency but also by their appearance. Thus the key object behind design Registration is to see whether the artisan or creator of a novel design is not deprived of the reward he deserves.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    c.Which articles are not applicable for Design registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The following type of articles are not applicable to Design registration-
                    Postage stamps,
                    Labels,
                    tokens,
                    cards
                    This is because only those designs are considered whose physical existence does exist. Once the alleged Design i.e. ornamentation is removed only a piece of paper, metal or like material remains and the article referred does not exist. The article must have its separate existence independent of the Designs applied to it.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    d. What is the use of design registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The design registration gives the registered proprietor a ‘Copyright’ over his design for a certain period. ‘Copyright’ means the sole right to apply a design to the articles belonging to the class for which it is registered.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    e. How much is the vaildity of the registration of a design?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Initially, the duration of design registration 10 years from the date of registration. In cases where the claim to priority has been allowed, the duration is taken as 10 years from the date of the priority. The initial period of design registration may be extended further to 5 more years on an application before the expiry of the said initial period.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    f.What is the date of registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The date of registration other than the case of priority claim is the actual date of filing the Design registration application. In the case of registration of priority claim, the date of registration is the date of making an application in the reciprocal country.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    g. How much time does it take to get the Design certificate after Design Registration?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>When an application for of a Design registration is made, it is accepted and a certificate of registration is issued to the applicant soon after the Design registration process. However, a separate request should be made to the Controller for obtaining a certified copy of that certificate for legal proceeding.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    h. What is a Register of Designs?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The Register of Designs is a document maintained by the Patent Office, Kolkata as a legal requirement. It contains the design number, class number, date of filing (in India) and reciprocity date (if any), name and address of Proprietor and other basic details as that determine the validity of proprietorship of the design</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    i. Can we register a design again for which Copyright has expired?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>No. A registered design, cannot be registered again of which the copyright has expired.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    j. How much is the penalty for piracy of a registered Design?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>If anyone breaches the copyright of a design a penalty of a sum of ₹25,000/- to the registered proprietor subject to a maximum of ₹50,000/-. However, this is recoverable as a contract debt. The registered proprietor may bring a suit for the recovery of the damages for any such violation and for an order against repetition of the same. Total sum recoverable shall be ₹50,000/-as contract debt.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    k. Will you provide this service in my town?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Yes, we can assist you in obtaining APEDA registration in your town as well.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    l. Do I need to physically present for the process?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>No, You don’t need to be physically present for the process, E-StartupIndia is an online catering platform all you need is an internet connection in your phone/computer and the required documents with you and we can get the job done no matters even if you are present at the remotest location of India.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    m. Still Confused?
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

export default Design