import mainImage from "./1.png";
import React, { useState } from "react";
import img3 from "./App Development.png";
import img10 from "./Branding.png";
import img1 from "./Business Strategy.png";
import img5 from "./Content Writing.png";
import img6 from "./Digital Marketing.png";
import img4 from "./E-commerce Website.png";
import img8 from "./Graphics Designing.png";
import img11 from "./Printing Services.png";
import img9 from "./Product Development & Design.png";
import img7 from "./SEO Consulting.png";
import img12 from "./Social Media Marketing.png";
import img2 from "./Web Development.png";

function App() {
  const backgroundImageStyle = {
    background: `url("${mainImage}") no-repeat center center/cover`,
    backgroundSize: "cover",
  };

  const MsServices = [
    {
      name: "Business Strategy & Consulting",
      data: "We develop strategies to produce results in collaboration with both small and large industries across all fields and sectors. Medsys Consultancy makes its advisory approach available to organisations eager to expand, foray into uncharted territory, and entrepreneurs in need of a helping hand. Our staff collaborates closely with clients to design effective methods to distinguish your work from that of your rivals. We have considerable expertise in tools and methodologies",
      backgroundImage: img1,
      backgroundSize: "contain",
    },
    {
      name: "Web Development",
      data: "Every company should have a strong website that reflects their brand image in the market. When a visitor visits, they first assess the website's aesthetic appeal, followed by their impression of its usefulness. So you may complete your custom website design requirements more quickly by utilising professional web design services from Medsys Consultancy experts.",
      backgroundImage: img2,
      backgroundSize: "contain",
    },
    {
      name: "App Development",
      data: "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices. Like web application development, mobile application development has its roots in more traditional software development.",
      backgroundImage: img3,
      backgroundSize: "contain",
    },
    {
      name: "E-Commerce Website",
      data: "By enhancing the customer's purchase journey, a successful e-commerce website considerably lowers your Customer Acquisition Cost (CAC). Medsys Consultancy make e-Commerce simpler for you by integrating well-known payment and fulfilment systems, customising plugins, and automating the migration of inventory, orders, and customers from one platform to another.",
      backgroundImage: img4,
      backgroundSize: "contain",
    },
    {
      name: "Content Writing",
      data: "Medsys Consultancy provide the best content marketing services to help your startup succeed by harnessing the power of compelling and opinion-provoking material. Through the evaluations and comments they receive for their different digital marketing initiatives, a start-up has to read the thoughts of their customers. These generally include of written or video content on websites, blogs, social media platforms, and videos that discuss the start-up, its goods and services, and its brand.",
      backgroundImage: img5,
      backgroundSize: "contain",
    },
    {
      name: "Digital Marketing",
      data: "The internet is dynamic and always changing. This service gives users access to a large variety of platforms and tools from various sectors and countries. Even a small bit of firmness can go a long way when trying to make an impression. Through this platform, companies and their clients can communicate in real time",
      backgroundImage: img6,
      backgroundSize: "contain",
    },
    {
      name: "SEO Consulting",
      data: "Medsys Consultancy are experts at creating search campaigns that generate visibility, traffic, rankings, and conversions. We assist in revitalising your brand and enhancing your online visibility through thorough, comprehensive, and brand-specific Search Engine Optimization. We don't skimp on anything, whether it's keyword research, on-page optimization, off-page optimization, link building, submissions, or content creation.",
      backgroundImage: img7,
      backgroundSize: "contain",
    },
    {
      name: "Graphics Designing",
      data: "Any firm, whether it is a B2B or B2C enterprise, must have graphic design as an essential component because it shapes the brand and directs marketing initiatives. For a variety of applications, Medsys Consultancy provide communication design solutions. Our graphic design assistance aids in the promotion and sale of your goods and services.",
      backgroundImage: img8,
      backgroundSize: "contain",
    },
    {
      name: "Product Development & Design",
      data: "We create unique websites with intricate interactive elements and imaginative design because a generic website might not be sufficient for your business. We build unique APIs, set up the necessary infrastructure, and integrate your website with CRM and ERP programmes. Your ideas inspire our work. Let us create a website for you that is as unique as you are!",
      backgroundImage: img9,
    },
    {
      name: "Branding",
      data: "Brands are no longer thought to be created through advertising, in our opinion. They are created from interesting client experiences resulting from telling a fantastic, original story. By disrupting the market in a crazed manner, building consumer trust is the goal of branding",
      backgroundImage: img10,
    },
    {
      name: "Printing Services",
      data: "To meet all of your demands, Medsys Consultancy offer commercial offset printing and digital printing services.We can assist you in designing and printing a layout that will communicate your message to your audience and help you sell a product or advertise a service. Give your business cards, flyers, and stickers a boost with these unique and cutting-edge features.",
      backgroundImage: img11,
    },
    {
      name: "Social Media Marketing",
      data: "Medsys Consultancy create unique websites with intricate interactive elements and imaginative design because a generic website might not be sufficient for your business. We build unique APIs, set up the necessary infrastructure, and integrate your website with CRM and ERP programmes. Your ideas inspire our work. Let us create a website for you that is as unique as you are!",
      backgroundImage: img12,
    },
  ];

  return (
    <>
      <div
        className=" text-white w-full h-[550px] items-center hidden lg:block justify-center "
        style={backgroundImageStyle}
      ></div>
      <h2 className="pt-5 text-7xl lg:hidden text-center font-semibold text-[#560216]">
        Marketing Solution
      </h2>
      
        {MsServices.map((s) => (
          <div className="p-7 md:grid md:grid-cols-2 sm:w-5/6 gap-24 mx-auto bg-rose-50 my-11 rounded-lg w-11/12 drop-shadow-lg">
          <div className="my-auto">
            <h2 className=" text-4xl font-semibold text-[#560216]">{s.name}</h2>
            <div className="mt-1 ml-1 w-1/3 h-1 bg-[#560216]"></div>
            <p className="text-rose-900 font-medium py-5 text-lg text-justify">
              {s.data}
            </p>
            <div className="py-3 flex justify-end ">
              <button className="text-lg  text-white bg-[#560216] p-2 py-3 w-1/3 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Get Started
              </button>
            </div>
          </div>
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat bg-red-200 rounded-xl"
          ><img src={s.backgroundImage} alt="img"/></div>
          </div>
        ))}
      
    </>
  );
}

export default App;
