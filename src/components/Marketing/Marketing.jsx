import mainImage from "./1.png";
import React, { useState } from "react";
import img1 from "./App Development.png";
import img2 from "./Branding.png";
import img3 from "./Business Strategy.png";
import img4 from "./Content Writing.png";
import img5 from "./Digital Marketing.png";
import img6 from "./E-commerce Website.png";
import img7 from "./Graphics Designing.png";
import img8 from "./Printing Services.png";
import img9 from "./Product Development & Design.png";
import img10 from "./SEO Consulting.png";
import img11 from "./Social Media Marketing.png";
import img12 from "./Web Development.png";

function App() {
  const backgroundImageStyle = {
    background: `url("${mainImage}") no-repeat center center/cover`,
    backgroundSize: "cover",
  };

  const AppDev = {
    backgroundImage: `url("${img1}")`,
    backgroundSize: "contain",
  };

  const Branding = {
    backgroundImage: `url("${img2}")`,
    backgroundSize: "contain",
  };

  const BusinessStrategy = {
    backgroundImage: `url("${img3}")`,
    backgroundSize: "contain",
  };

  const ContentWriting = {
    backgroundImage: `url("${img4}")`,
    backgroundSize: "contain",
  };

  const DigitalMarketing = {
    backgroundImage: `url("${img5}")`,
    backgroundSize: "contain",
  };

  const ECommerce = {
    backgroundImage: `url("${img6}")`,
    backgroundSize: "contain",
  };

  const GraphicsDesigning = {
    backgroundImage: `url("${img7}")`,
    backgroundSize: "contain",
  };

  const PrintingServices = {
    backgroundImage: `url("${img8}")`,
    backgroundSize: "contain",
  };

  const ProductDev = {
    backgroundImage: `url("${img9}")`,
    backgroundSize: "contain",
  };

  const SEO = {
    backgroundImage: `url("${img10}")`,
    backgroundSize: "contain",
  };

  const SocialMedia = {
    backgroundImage: `url("${img11}")`,
    backgroundSize: "contain",
  };

  const WebDev = {
    backgroundImage: `url("${img12}")`,
    backgroundSize: "contain",
  };

  return (
    <div className="App">
      <div
        className=" text-white w-full h-[550px]  flex items-center justify-center "
        style={backgroundImageStyle}
      >
        <h2 className="sm:text-6xl text-5xl uppercase font-bold text-center w-11/12">
          Marketing solutions
        </h2>
      </div>

      <div className="py-9">
        <div className="p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Business Strategy & Consulting
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              We develop strategies to produce results in collaboration with
              both small and large industries across all fields and sectors.
              Medsys Consultancy makes its advisory approach available to
              organisations eager to expand, foray into uncharted territory, and
              entrepreneurs in need of a helping hand. Our staff collaborates
              closely with clients to design effective methods to distinguish
              your work from that of your rivals. We have considerable expertise
              in tools and methodologies
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 py-3 w-1/3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={BusinessStrategy}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Web Development
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Every company should have a strong website that reflects their
              brand image in the market. When a visitor visits, they first
              assess the website's aesthetic appeal, followed by their
              impression of its usefulness. So you may complete your custom
              website design requirements more quickly by utilising professional
              web design services from Medsys Consultancy experts.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={WebDev}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              App Development
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Every company should have a strong website that reflects their
              brand image in the market. When a visitor visits, they first
              assess the website's aesthetic appeal, followed by their
              impression of its usefulness. So you may complete your custom
              website design requirements more quickly by utilising professional
              web design services from Medsys Consultancy experts.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={AppDev}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              E-Commerce Website
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              By enhancing the customer's purchase journey, a successful
              e-commerce website considerably lowers your Customer Acquisition
              Cost (CAC). Medsys Consultancy make e-Commerce simpler for you by
              integrating well-known payment and fulfilment systems, customising
              plugins, and automating the migration of inventory, orders, and
              customers from one platform to another.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={ECommerce}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Content Writing
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Medsys Consultancy provide the best content marketing services to
              help your startup succeed by harnessing the power of compelling
              and opinion-provoking material. Through the evaluations and
              comments they receive for their different digital marketing
              initiatives, a start-up has to read the thoughts of their
              customers. These generally include of written or video content on
              websites, blogs, social media platforms, and videos that discuss
              the start-up, its goods and services, and its brand.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={ContentWriting}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Digital Marketing
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              The internet is dynamic and always changing. This service gives
              users access to a large variety of platforms and tools from
              various sectors and countries. Even a small bit of firmness can go
              a long way when trying to make an impression. Through this
              platform, companies and their clients can communicate in real time
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={DigitalMarketing}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              SEO Consulting
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Medsys Consultancy are experts at creating search campaigns that
              generate visibility, traffic, rankings, and conversions. We assist
              in revitalising your brand and enhancing your online visibility
              through thorough, comprehensive, and brand-specific Search Engine
              Optimization. We don't skimp on anything, whether it's keyword
              research, on-page optimization, off-page optimization, link
              building, submissions, or content creation.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={SEO}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Graphics Designing
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Any firm, whether it is a B2B or B2C enterprise, must have graphic
              design as an essential component because it shapes the brand and
              directs marketing initiatives. For a variety of applications,
              Medsys Consultancy provide communication design solutions. Our
              graphic design assistance aids in the promotion and sale of your
              goods and services.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={GraphicsDesigning}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Product Development & Design
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              We create unique websites with intricate interactive elements and
              imaginative design because a generic website might not be
              sufficient for your business. We build unique APIs, set up the
              necessary infrastructure, and integrate your website with CRM and
              ERP programmes. Your ideas inspire our work. Let us create a
              website for you that is as unique as you are!
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={ProductDev}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">Branding</h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Brands are no longer thought to be created through advertising, in
              our opinion. They are created from interesting client experiences
              resulting from telling a fantastic, original story. By disrupting
              the market in a crazed manner, building consumer trust is the goal
              of branding.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={Branding}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Printing Services
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              To meet all of your demands, Medsys Consultancy offer commercial
              offset printing and digital printing services.
              <br />
              <br />
              We can assist you in designing and printing a layout that will
              communicate your message to your audience and help you sell a
              product or advertise a service.
              <br />
              <br />
              Give your business cards, flyers, and stickers a boost with these
              unique and cutting-edge features.
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={PrintingServices}
          ></div>
        </div>

        <div className="mt-11 p-7 sm:grid sm:grid-cols-2 sm:w-5/6 gap-24 mx-auto">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">
              Social Media Marketing
            </h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              Medsys Consultancy create unique websites with intricate
              interactive elements and imaginative design because a generic
              website might not be sufficient for your business. We build unique
              APIs, set up the necessary infrastructure, and integrate your
              website with CRM and ERP programmes. Your ideas inspire our work.
              Let us create a website for you that is as unique as you are!
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 w-1/3 py-3 sm:w-1/4 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
            style={SocialMedia}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
