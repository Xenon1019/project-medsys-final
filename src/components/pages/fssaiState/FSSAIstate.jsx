import React from 'react'
import bussinessLogo from '../imgs/business logo.jpeg'
import starLogo from '../imgs/star logo.jpeg'
import smileLogo from '../imgs/smile logo.jpeg'
import bg from '../imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./FSSAIstate.css"
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
const FSSAIstate = () => {
  TabTitle('FSSAI State License - medsysconsultancy.com');

  return (
    <div className='font-serif'>
      <div
        className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="">
          <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
            <h2 className='text-5xl font-bold '>FSSAI State License</h2>
          </div>
          <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
            <p className='text-lg mr-20'>Food license is a mandatory compliance for the manufacturers dealing in the food business and restaurant business that certifies the safety of food products supplied or manufactured by various organizations in India. Get your food business registered by availing of our premium offers at the least cost, certifying the successful completion of the process.</p>
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
                'Advantages',
                'Who',
                'Documents',
                'Fee',
                'Process',
                'Penalties',
                'FAQs',
              ]} className="flex flex-col p-2 gap-3 text-center" currentClassName="content-scroll-view" >
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Role'>Role of FSSAI</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Advantages'>Advantages</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Who'>Who Needs State FSSAI</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Fee'>Fee Structure</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Process'>Process Flow</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Penalties'>Penalties</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#FAQs'>FAQs</a></li>
              </Scrollspy>
            </div>
          </div>
        </div>
        <div className='h-full sm:w-3/4 px-5 sm:px-9 py-2 '>

          <div className='my-12' id="Overview">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
            <p>FSSAI (Food Safety Standard Authority of India) is a prominent government-backed entity that regulates the food sector in India. It has outlined countless guidelines and provisions to foster food safety across the nation. Presently, every food business in India is mandated to secure an applicable food license to conduct its business operation. Functioning without a valid food license is a punishable offence for FBOs as per FSS Act, 2006. FSSAI conducts all its operations in view of the said Act and also follows the direction of the Ministry of Health and Family Welfare.</p>
          </div>




          <div className='my-12' id="Role">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Role of Food Safety Standard Authority of India</h2>
            <ul className=''>
              <li className="arrow">Formulating guidelines and norms for the food sector</li>
              <li className="arrow">Introducing initiatives related to food safety awareness</li>
              <li className="arrow">Releasing directions for food business operators</li>
              <li className="arrow">Setting out norms and rules for food testing labs</li>
              <li className="arrow">Accumulating Data pertaining to contaminants in food articles</li>
              <li className="arrow">To facilitate recommendation to Indian Government for formulating new provisions</li>
              <li className="arrow">Utilizing rapid alert system for prompt identification of issues in food articles available to the public</li>
            </ul>
            <p className='my-4'>FSSAI has underpinned stringent norms for proprietary food units as the majority of them conduct their operation without any norms. FSSAI has mandated these facilities to secure FSSAI licenses without any exception. As per the FSSAI, unregistered proprietary food units are not allowed to continue their business operation without a valid food license.</p>
            <p>FSSAI has rolled the mandatory provisions for FBO and regulation of manufacturing, storage, sale, & distribution process to ensure utmost food safety and hygiene. The authority has also set up a legitimate information network for the awareness of the masses to secure valid information related to food safety and hygiene.</p>

          </div>


          <div className='my-12' id="Advantages">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Benefits of FSSAI State License</h2>
            <p className='my-4'>Despite being a legal compulsion the FSSAI Basic Registration renders dozens of benefits to the Food business operators. The common benefits of securing FSSAI Basic Registration include</p>
            <ul className=''>
              <li className="arrow">Creates strong brand recognition among the target end-users and public at large</li>
              <li className="arrow">Improves creditability of the business</li>
              <li className="arrow">Enables businesses to attract more customers</li>
              <li className="arrow">Offers legal stability that otherwise is lacking in unregistered counterparts</li>
              <li className="arrow">Facilitates best practices to the business owner to ensure food safety</li>
            </ul>
          </div>

          <div className='my-12' id="Who">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Who needs a State FSSAI License?</h2>
            <ul className=''>
              <li className="arrow">Facility dealing with Proprietary foods</li>
              <li className="arrow">Vegetable oil production & processing facility using the process of solvent extraction meeting above turnover criteria.</li>
              <li className="arrow">Hotels having 4-star rating or less</li>
              <li className="arrow">Facilities dealing with dairy products, Milk Chilling Units having production capacity ranging from 500 to 50000 lit</li>
              <li className="arrow">A slaughterhouse having capacity of more than 2 & up to 50 large animals. Or the handling capacity of more than 10 & up to 150 small animals. Or per day capacity of more than 50 to up to 1000 poultry birds.</li>
              <li className="arrow">All food processing facilities, including re-packing units, with a per-day capacity of not less than 100kg/l to up to 2 metric tons</li>
            </ul>
          </div>

          <div className='my-12' id="Documents">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Fundamental documents required for securing State FSSAI License</h2>
            <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>Following Are The Documents That One To Arrange To Apply For A State FSSAI License:</h2>
            <p>Details of key management personal such as Directors, Partners, proprietors, & Executive Members of Society with real address & contact particulars.</p>
            <ul className=''>
              <li className="arrow">Passport–sized photos of the individual seeking the license</li>
              <li className="arrow">Identification as well as address proof of the individual seeking the license</li>
              <li className="arrow">Applicant’s PAN card</li>
              <li className="arrow">A copy of property documents (if the business place is owned by the applicant)</li>
              <li className="arrow">A copy of the rent agreement & NOC granted by the landlord ( in case of rented property)</li>
              <li className="arrow">Particulars on Raw material suppliers</li>
              <li className="arrow">Form B Duly completed and authenticated by the applicant.</li>
              <li className="arrow">List of machinery installed at the facility</li>
              <li className="arrow">NOC accorded by the local Municipality</li>
              <li className="arrow">Form IX</li>
              <li className="arrow">Particulars of food category and proposed food articles to be produced at the plant</li>
              <li className="arrow">Import Export Code rendered by Directorate General of Foreign Trade.</li>
              <li className="arrow">Authorization letter enclosing the name as well as the address of the liable individual</li>
              <li className="arrow">Food safety management system (FSMS)</li>
            </ul>
          </div>

          <div className='my-12' id="Fee">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FSSAI State License (Fee Structure)</h2>
            <p>The requisite fees must be paid by an applicant seeking State Food license via:</p>
            <ul className=''>
              <li className="arrow">Demand Draft (DD)</li>
              <li className="arrow">Treasury Challan, or</li>
              <li className="arrow">Cash</li>
            </ul>
            <p>The requisite fees must be paid by an applicant seeking State Food license via:</p>

            <div className='hidden sm:flex '>
              <div className='w-4/6 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Manufacturer (Production Capacity)</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >More than One million tons/day 10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >More than One million tons/day 10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Hotels having 4 stars rating</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >All Food Service providers (including restaurants, Canteens, clubs, caterers, Banquet halls offering food catering services, Dabbawalla system, & other FBOs.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Slaughtering capacity</h2>
              </div>
              <div className='w-2/6 flex flex-col '>
                <div className='border h-16 border-[#560216] pl-2 pt-2 bg-[#560216] text-white'>License Fees/year (INR)</div>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>5000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>3000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>5000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>2000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Less than 2 large animals or 10 small animals or 50 poultry birds per day.</h2>
              </div>
            </div>

          </div>

          <div className='my-12' id="Process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Process for Getting FSSAI State License from Licensing Authority</h2>
            <p>The FSSAI License is primarily granted based on the scope of operation and production volume. The typical steps involved in securing a State Food license include</p>
            <ul className='list-disc'>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:1</span>Arranging the aforesaid document and Filing of application via Form B</li>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:2</span>Submission of form to licensing authority via online portal FOSCOS. The filing process ends with the submission of standard fees.</li>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:3</span>In-depth scrutiny of application and document by FSSAI’s officials.</li>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:4</span> If needed, an on-site inspection will be conducted by FSSAI’s officials to determine the level of compliance at business premises.</li>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:5</span>Grant of State FSSAI License by the licensing authority (Note: the application may be revoked by the licensing authority in case of non-compliant.</li>
              <li className=''><span className='text-[#9D3E55] mr-2 arrow font-semibold'>  Step:6</span>after securing the license, the business owner can commence their business operation. Note: The license holder needs to display the license at their business premises at the time.</li>
            </ul>
          </div>


          <div className='my-12' id="Penalties">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
              Penalties
            </h2>
            <p className='my-4' >In general, the penalties for FBOs in India are pretty stringent, and they are bound to face severe consequences in case of non-compliance.</p>
            <p className='my-4' >FSSAI officials can conduct a surprise audit of the business premises without informing the owner. If they find some loopholes on account of compliance management, the concerned entity has to face penalties as cited in FSS Act, 2006. The table below manifests the type of penalties imposed in case of non-compliance;</p>

            <div className='flex '>

              <div className='w-1/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>S.No</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>1</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>2</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>3</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>4</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>5</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>6</div>
                <div className='border border-[#560216] h-16 pl-2 pt-2'>7</div>
              </div>
              <div className='w-6/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Particulars</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Food quality breaches the compliance given in the ac</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Sub-standard food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Misbranded Food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Falsified advertisement or invalid description</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Extraneous matter in food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Manifesting non-corporation with Food safety officer direction</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Unhygienic processing or manufacture</h2>
              </div>
              <div className='w-5/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Fine(Rs)</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>2 Lakh Petty manufacturer – 25,000/-</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>5 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>3 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>10 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>1 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>2 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>1 Lakh</h2>
              </div>
            </div>
          </div>



          <div className='my-12' id="FAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    a. What is an FSSAI state license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    A state license is granted by the State Authorities functioning in each state. This is in accordance with the FSS Regulations, 2011. Based on the eligibility, food business operators may fall under State License or Registration. Generally, FBOs with annual turnover ranging from 12 lakhs-20 crores is required to get this license.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    b. How can I get FSSAI state license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Application for State FSSAI license is supposed to be filed in form B as per prevailing Act. The application is available on the concerned authority's portal.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    c. Who all required FSSAI license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Every food business operator is liable to obtain an applicable food license based on underlying criteria underpinned by FSSAI, the apex food regulator of India. This even include exporter and importer of food items.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    d. What is central and state Fssai Licence?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Central FSSAI license is obtained by more prominent businesses; meanwhile, a state license is supposed to be secured by business earning within the specified threshold limit, set at 12 lakh-20 crores.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    e. Can FSSAI impose a penalty?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>If FBOs operate a food establishment with a valid food license, then FSSAI can impose a penalty of up to rupees 5 lakhs. The jail term could be slapped on the defaulter in a worst-case scenario. A penalty of one lakh rupees could come into effect if the FBO is found guilty of producing food items under unsanitary conditions.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    f.What happens if the FSSAI license expires?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The license holder must renew the license 30 days before the expiration of the food license to avert a late fine. FSSAI charges Rs 100/day fine for renewing the license after the expiration date.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    g. What is the Importance of FSSAI License?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Maintaining the food quality level to ensure safety & facilitating satisfaction to every customer is the aim of FBOs. FSSAI plays a vital role in formulating the controlling procedure. FBOs with the FSSAI license are bound to comply with food safety norms to avert significant penalities.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    h. Name the Act considered by FSSAI for formulating guidelines for FBOs?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>FSS, Act 2006.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    i. Is it possible for the FBOs to conduct food business without FSSAI License?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Conducting food business without FSSAI license is a punishable offense as per FSS Act, 2006</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    j. What happens after the submission of food license application?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The authority will conduct the thorough scrutiny of the submitted documentation and may arrange an on-site inspection of the business place.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    k. Still Confused?
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
      <ContactForm />
    </div>
  )
}

export default FSSAIstate