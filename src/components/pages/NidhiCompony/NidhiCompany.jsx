import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import nidhiImg from './imgs/Nidhi Company Page Image.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./NidhiCompany.css"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const NidhiCompany = () => {
  TabTitle('Nidhi Company Registration - medsysconsultancy.com');

  return (
    <div className='font-serif'>
      <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
        <div className='text-white flex flex-col w-full justify-between' >
          <h2 className='text-5xl font-bold '>Nidhi Company Registration</h2>
          <p className='text-lg mr-20'>An excellent option for people looking to save money and lead a thrifty lifestyle.</p>
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
        <div className='text-2xl'>Contact us to know more about license and registrations</div>
        <div>
          <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
        </div>
      </div>




      <div className='flex h-full w-full'>
        <div className='w-3/12'>
          <div className='flex flex-col sticky top-40 ml-4 my-12'>
            <div className='bg-white rounded-xl  p-2 '>
              <h2 className='text-3xl text-[#560216] font-bold'>Table Of Contents</h2>
              <hr className='bg-[#560216]' />
              <Scrollspy items={[
                'What',
                'Benefits',
                'Checklist',
                'things',
                'Procedure',
                'Documents',
                'FAQs',
              ]} className="flex flex-col p-8" currentClassName="content-scroll-view" >
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#What'>What is a Nidhi Company?</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Benefits'>Benefits of a Nidhi Company</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Checklist'>Checklist For A Nidhi Company</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#things'>What are the 10 things Nidhi .....</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Procedure'>Procedure</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a></li>
                <li><a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#FAQs'>FAQs</a></li>
              </Scrollspy>
            </div>
            <button className='bg-[#560216] text-white ml-4 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
          </div>
        </div>
        <div className=' h-full w-9/12 px-12 py-4 '>

          <div className='my-12' id="What">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>What is a Nidhi Company?</h2>
            <p className='my-2'>It is a company classified as an NBFC (a Non-banking financing company) and registered under Section 406 of Companies Act, 2013. The main business of such a company is to facilitate lending money between the core members of the company. This way members (or shareholders) are encouraged to save money and invest them within the company. These deposits are then used by the company for its members (or shareholders), to provide loans or advances, and to acquire government-issued stocks/bonds/debentures/securities. It is regulated by the Ministry of Corporate Affairs, while the RBI monitors all its financial dealings.</p>
            <img src={nidhiImg} alt="" />
          </div>

          <div className='my-12' id='Benefits'>
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Benefits of a Nidhi Company</h2>

            <ul className='my-2'>
              <div>
                <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Cheaper To Borrow: </li>
                <p className='my-4'>As a member, one can borrow money at a minimum rate, relative to the rate at which banks lend money. This can be a major advantage in times of need, as different individuals in the mutual benefit society are likely to need funds at different points in time.</p>
              </div>
              <div>
                <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Encourages Savings: </li>
                <p className='my-4'>It encourages all its members to save money and encourages a thrifty lifestyle. A Nidhi Company, after all, is a mutual benefit society wherein members can lend or borrow money and accept financial aid amongst them.</p>
              </div>
              <div>
                <li className='text-[#9D3E55] mr-2 arrow text-lg font-semibold'>  Fewer Complications: </li>
                <p className='my-4'>Borrowing and lending to known persons, where the procedure is fixed, is much less complicated than dealing with banks or in an informal setting. A Nidhi Company enables its members to unlock the potential of their money and gain from lower interest rates when they require money themselves.</p>
              </div>


            </ul>
          </div>

          {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

          <div className='my-12' id="Checklist">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Checklist For A Nidhi Company</h2>
            <ul className=''>
              <li className="arrow">At least seven members are mandatory to form a Nidhi company. Out of these, three should be designated as the directors. However, it should acquire a minimum of 200 members within one year of commencement.</li>
              <li className="arrow">Moreover, the company should have a minimum equity share capital of Rs 5 lakhs, for registering as a Nidhi Company. This entire amount has to be paid up. However, the Net Owned Funds (NOF) must be increased to Rs 10 lakhs within a year of registration.</li>
              <ol >
                <li>A. At least 10% of its outstanding deposits should comprise of un-encumbered term deposits.</li>
                <li>B. The prescribed NOF to deposits ratio should be 1:20.</li>
              </ol>
              <p>This includes equity share capital and free reserves and excludes accumulated losses as well as intangible assets.</p>
              <li className="arrow">At least 10% of its outstanding deposits should comprise of un-encumbered term deposits</li>
              <li className="arrow">The prescribed NOF to deposits ratio should be 1:20. where 10% of the total deposits are in a fixed deposit account of a nationalized bank.</li>
              
            </ul>
          </div>


          <div className='my-12' id="things">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>What are the 10 things Nidhi Companies cannot do as an NBFC (Non-Banking Financial Company)?</h2>
            <p>A Nidhi company cannot deal in the following –</p>
            <ul className=''>
              <li className="arrow">Chit fund business</li>
              <li className="arrow">Hire purchase finance</li>
              <li className="arrow">Acquisition/insurance of securities issued by any corporate</li>
              <li className="arrow">Engaging as an NBFC in the business of advances or loans</li>
              <li>Leasing finance</li>
              <li>Acquisition of stocks/shares /bonds/securities/debentures issued by any local authority /Govt./marketable securities</li>

            </ul>
          </div>

          <div className='my-12' id="Procedure">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Procedure</h2>
            <p>Contrary to what you might think, registering a Nidhi Company is a simple 3-Step process and can be done completely online. We’ve laid it out below.</p>
            <ul className=''>
              <li className="arrow">Name Reservation – We help you reserve your name with MCA.</li>
              <li className="arrow">DSC and DINs – We help you get 1 DSC and 3 DINs.</li>
              <li className="arrow">Documents and approval – We help you at every stage of the documentation process and in getting in-principle approval from the RBI.</li>
            </ul>
          </div>

          <div className='my-12' id="Why">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Documents Required</h2>
            <p>To Be Submitted By All Directors</p>
            <ul className=''>
              <li className="arrow">Self-attested copy of PAN Card</li>
              <li className="arrow">Self-attested copy of Driver’s License/ Voter ID/ Aadhaar Card/Passport</li>
              <li className="arrow">Self-attested copy of Bank Statement/ Telephone Bill/Mobile Bill/ Electricity Bill</li>
              <li>Passport-size Photograph</li>
              <li>Specimen Signature Certificate</li>
            </ul>
          </div>



          <div className='my-12' id="FAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  a. How can I expand the operations of my Nidhi Company to different areas?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  A minimum of three branches can be opened in a particular district. In case you want to expand outside the district or want to open more than three branches, the Registrar of Companies need to intimated 30 days prior to their opening.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  b. Should I dissolve my Nidhi Company because it has not gained the necessary numbers of representatives in spite of completing one full year of tenure?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  The conditions laid down by the Act says that a Nidhi Company should acquire a minimum of 200 members within its first year of incorporation. However, in case the company is not able to meet the required numbers, it can apply for an extension with the necessary government authorities.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  c. In a Nidhi Company, are members allowed to credit or debit cash to the general fund?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  No, members are only allowed to deposit, borrow, or lend funds.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  d. What are the criteria to become a representative of a Nidhi Company?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Any person can deposit, lend or borrow money through the provisions provided by the Companies Act, 2013. Hence, they can all become members of a Nidhi Company. provided they are not a corporation or a company.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  e. In a Nidhi Company, what should the limit for cash deposit be, for its representatives?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  A Nidhi Company can accept deposits not exceeding 20 times of its net owned assets, as per the last audited statements.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    f. Still Confused?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
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

export default NidhiCompany