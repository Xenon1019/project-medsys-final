import React from 'react';
import { TabTitle } from './Utillity';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Partner() {
  TabTitle("Partner with us");
  return (
    <>
      {/* Section right below the header */}
      <section className="partner-header-below relative">
        <div className=" inner h-96">
          <div className="container absolute max-w-xl  top-20 right-32">
            <h1 className='text-4xl text-left text-white font-bold pb-7'>Join Partnership with Medsys</h1>
            <p className=' text-white'>Medsys caters to micro and small businesses in India. Helping start-ups to start their business in any sector and industry. If you deal in B2B products, Medsys partnership can be your business growth enabler.</p></div>
        </div>
      </section>
      {/* ++++++++++++++++++++++++++++ message section ++++++++++++++++++++++++ */}
      <section className="message mt-8">
        <div className="bg-[#560216]">
        <h1 className="heading font-bold text-white text-4xl py-8 text-center">Reason to Partner with Us</h1>
          <div className="px-8">
            <div className="ml-3">
              <ImQuotesLeft className="text-center text-5xl text-white" />
            </div>
            {/* </div> */}
            <div className="flex justify-center ml-3 py-3">
              <p className="flex justify-center text-white text-lg sm:text-xl sm:w-4/5 leading-7">
                Success comes from working with a partner you trust to provide the insight, support and expertise that will propel your business forward.
                We have built and continue to build our teams to cater specialized services and solutions that meet the distinct needs of the start-ups.
                Our deep-set commitment to our customers defines how we do business, and our years of experience working across industries underpin the vast array of services we offer.
                Our referral programme is an eye boggling opportunity to whoever looking for a easy earning at the convenience of their working hours.
              </p>
            </div>
            <div className="flex justify-end ml-3 px-2">
              <ImQuotesRight className="text-center text-white text-5xl " />
            </div>
          </div>
        </div>
      </section>
      {/* ++++++++++++++++++++++++++++ Join Partnership ++++++++++++++++++++++++ */}
      <section className="partner-experience myCont">
        <h1 className="heading font-bold text-4xl p-7 text-center">Our partners have experienced</h1>
        <div className="wrapper flex justify-between">
          {/* experience item  */}
          <div className='inner'>
            <div className="icon flex justify-center">
              <img src='\assets\img\LetsPartnerImg/Aceelerated.svg' alt="" />
              <div className="img"></div>
            </div>
            <p className='text-center w-fit font-bold'>Accelerated growth through a <br /> targeted network of business</p>
          </div>
          {/* experience item  */}
          <div className='inner'>
            <div className="icon flex justify-center">
              <img src='\assets\img\LetsPartnerImg/Complete.svg' alt="" />
            </div>
            <p className='text-center w-fit font-bold'>Seemless integration across<br />platform that facilities ease of doing business <br /> doing business</p>
          </div>
          {/* experience item  */}
          <div className='inner'>
            <div className="icon flex justify-center">
              <img src='\assets\img\LetsPartnerImg/Seamless.svg' alt="" />
            </div>
            <p className='text-center w-fit font-bold'>Complete support from a <br /> dedicated flexible team of legal <br />professionals</p>
          </div>
        </div>
        <h3 className='text-2xl text-center font-bold pt-5'>Come, Join Us</h3>
        <div className="button flex justify-center pt-4">
          <button>Become a partner</button>
        </div>
      </section>

      {/* ++++++++++++++++++++++++++++ Connect with team ++++++++++++++++++++++++ */}
      <section className="connect-with-team myCont mb-24">
        <h1 className="heading font-bold text-4xl p-7 pt-16 text-center">Connect with our team and Explore the Possibilites of Partnering </h1>
        <div className="form">
          <div className="inner grid grid-cols-2 gap-10">
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="text" placeholder='Name*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="email" placeholder='Email Address*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="phone" placeholder='Mobile Number*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="text" placeholder='Subject*' />
          </div>
          <textarea className='w-full mt-8 border-solid border outline-none px-5 py-1 border-slate-400' name="message" id="" cols="30" placeholder='Message*' rows="5"></textarea>
          <input className='w-full mt-4 border-solid border outline-none px-5 py-1 border-slate-400' placeholder='Security Code*' type="text" />
          {/* Button  */}
          <div className="form-btn flex justify-center pt-4">
            <button className='text-white w-28 h-8 bg-[#560217] rounded-sm'>Send</button>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact-mid">
          <div className="left">
            <img src="/assets/img/belowContactImg/Main Icon.svg" alt="" width="100px" />
          </div>
          <div className="right">
            <div>
              <img src="/assets/img/belowContactImg/Google Review.svg" alt="" />
              <h6>Google Review</h6>
            </div>
            <div>
              <img src="/assets/img/belowContactImg/Online Process.svg" alt="" />
              <h6>100% Online Process</h6>
            </div>
            <div>
              <img src="/assets/img/belowContactImg/Data is Safe.svg" alt="" />
              <h6>Your Data is Safe</h6>
            </div>
          </div>
        </div>
        <div className="contact-social-links">
          <button className="inner call rounded-3xl">
            <i className="lni lni-phone"></i>
            <span>
              <a href="tel:+918881069069">
                <h3>Call Us <br /></h3>+91 7020438881
              </a>
            </span>
          </button>
          <button className="inner facebook rounded-3xl">
            <i className="lni lni-facebook-messenger"></i>
            <span>
              <a href="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage">
                <h3>Chat ON <br /></h3>Facebook Messanger
              </a>
            </span>
          </button>
          <button className="inner whatsapp rounded-3xl">
            <i className="lni lni-whatsapp"></i>
            <span>
              <a href="https://wa.me/+917020438881">
                <h3>Click here<br /></h3>For Whatsapp Chat
              </a>
            </span>
          </button>
          <button className="inner email rounded-3xl">
            <i className="lni lni-envelope"></i>
            <span>
              <a href="/">
                <h3>Email Us<br /></h3>medsysconsultancy@gmail.com
              </a>
            </span>
          </button>
        </div>
      </section>
    </>
  )
}
