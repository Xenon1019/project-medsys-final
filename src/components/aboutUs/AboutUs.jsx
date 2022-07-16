import mainImage from "./bg1.png";
import React, { useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img1 from "./Budding_Entrepreneurs.png";
import img2 from "./One_India_One_Service_Rate.png";
import img3 from "./Franchisee_all_across_india.png";
import img4 from "./Identification_and_removal.png";
import img5 from "./Reinforce_action_plans.png";
import img6 from "./Access_current_performance.png";
import whoimg from "./4.png";
import whymedsys from "./5.png";
import aim from "./aim.png";
import vision from "./1.png";
import mission from "./2.png";

import one from "./Bhushan Shirude_20220712_230010_0000.png";
import two from "./Mayuri Shirude_20220712_230010_0002.png";
import three from "./Ganesh Chinchole_20220712_230010_0001.png";
import four from "./Kaamini Suhas_20220712_230010_0003.png";
import five from "./Deepali Pawar_20220712_230010_0004.png";


function App() {
  const team =[
    {
      name: "Bhushan Shirude",
      title: "Founder & CEO",
      img: one,
    },
    {
      name: "Mayuri Shirude",
      title: "Co-founder & COO",
      img: two,
    },
    {
      name: "Ganesh Chinchole",
      title: "Chief Technical Officer",
      img: three,
    },
    {
      name: "Kaamini Suhas ",
      title: "CSR Head",
      img: four,
    },
    {
      name: "Deepali Pawar",
      title: "Legal & Digital Marketing Head",
      img: five,
    },
  ];
  
  const backgroundImageStyle = {
    background: `url("${mainImage}")no-repeat center center/cover`,
  };

  const imgupcoming1 = {
    backgroundImage: `url("${img1}")`,
    backgroundSize: "contain",
  };

  const imgupcoming2 = {
    backgroundImage: `url("${img2}")`,
    backgroundSize: "contain",
  };

  const imgupcoming3 = {
    backgroundImage: `url("${img3}")`,
    backgroundSize: "contain",
  };

  const imgupcoming4 = {
    backgroundImage: `url("${img4}")`,
    backgroundSize: "contain",
  };

  const imgupcoming5 = {
    backgroundImage: `url("${img5}")`,
    backgroundSize: "contain",
  };

  const imgupcoming6 = {
    backgroundImage: `url("${img6}")`,
    backgroundSize: "contain",
  };

  const whoare = {
    backgroundImage: `url("${whoimg}")`,
    backgroundSize: "contain",
  };

  const whymed = {
    backgroundImage: `url("${whymedsys}")`,
    backgroundSize: "contain",
  };

  
  const OurVision = {
    backgroundImage: `url("${vision}")`,
    backgroundSize: "contain",
  };

  const OurMission = {
    backgroundImage: `url("${mission}")`,
    backgroundSize: "contain",
  };

  const data = [
    {
      id: 1,
      val: "We aim to provide personalized services to our clients to ‘Start, Grow and Sustain’ their business and enable them to take proactive decisions so that they are not stuck in legal hurdles or formalities. ",
    },
    {
      id: 2,
      val: "We guarantee hassle-free service delivery without compromising on quality. ",
    },
    {
      id: 3,
      val: "We ensure complete transparency at every step. ",
    },
    {
      id: 4,
      val: "We aspire to prepare our organization for growth and create processes that effectively deal with the developing marketplace. ",
    },
    {
      id: 5,
      val: "We aspire to reach the right customers since doing so will enable us to better understand consumer purchasing patterns and form commercial alliances that will increase our organization's market share. ",
    },
    {
      id: 6,
      val: "We aspire to improve our standing among consumers to serve them the best service we can and eventually improve our revenue.",
    },
  ];

  const [sideData, setSideData] = useState(data[0].val);

  return (
    <>
      <div
        className="  h-[550px] w-full items-center hidden lg:block justify-center "
        style={backgroundImageStyle}
      >
      </div>

      <h2 className="pt-5 text-7xl lg:hidden text-center font-semibold text-[#560216]">About Us</h2>

      
        <div className="py-11">

          <div className="flex items-center justify-center w-11/12 lg:w-1/2 mx-auto">
            <p className="md:text-2xl text-rose-900 items-center text-justify font-semibold">
              Consultancy Services is a social organization aiming at
              sustainability, performing well, and creating social change.
              <br></br>
              <br></br>
              Since 2017, Medsys Consultancy Services has been a one-stop
              solution for any business or entrepreneur looking for a Chartered
              Accountant, Company Secretary, or a Lawyer and even social
              presence management solution. <br></br>
              <br></br>
              We have already served over +500 customers and have a steadily
              growing network of over +15 professionals from different cities in
              Maharashtra.
            </p>
          </div>
        </div>

      <div className="bg-[#560216] py-9 px-3 mt-11 mx-auto w-3/4 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-16 ">
            <h2 className="text-5xl text-rose-100 font-bold">Our Vision</h2>
            {/* <div className="bg-rose-100 mt-1 w-1/2 h-1.5"></div> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div
              className="w-36 h-36 bg-no-repeat mx-auto"
              style={OurVision}
            ></div>
            <p className="text-xl text-rose-100 items-center text-justify sm:w-1/2 font-medium mx-auto mt-5 mb-7">
              We provide innovative, quality-driven services to our clients to
              improve, optimize their performance and support them to scale up
              their solutions to address the complex challenges of surviving in
              the business world.
            </p>
          </div>
        </div>
      </div>
    
      <div className="bg-[#560216] py-9 px-3 mt-11 mx-auto w-3/4 rounded-lg shadow-md">
        <div className="flex items-center justify-center mt-7">
          <div className="flex flex-col items-center justify-center max-w-md mb-16 ">
            <h2 className="text-5xl text-rose-100 font-bold">Our Mission</h2>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <div
              className="w-36 h-36 bg-no-repeat mx-auto"
              style={OurMission}
            ></div>
            <p className="text-xl text-rose-100 items-center text-justify sm:w-1/2 font-medium mx-auto mt-5">
              To build a team of experienced professionals to assists
              entrepreneurs to convert their dream business by providing
              end-to-end business incorporation and associated services.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f6d5dd] p-7 mt-11 mx-auto w-11/12 rounded-lg shadow-md">
        <div className="sm:px-9">
          <h2 className=" text-5xl text-[#560216]">Who are we?</h2>
          {/* <div className="bg-[#560216] mt-1 w-1/4 lg:w-36 h-1.5"></div> */}
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:w-11/12 mx-auto mt-6">
          <p className="text-rose-900 text-xl font-medium text-justify my-auto pr-6">
            We provide a technology-motivated platform to impart management
            consultancy services in India. We assist startups in running their
            business. We offer CSR consultancy services to NGOs. We assist NGOs
            in all the legal formalities and certifications. We assist startups,
            companies and NGO to build impeccable social presence to tip the
            scales in their favour.
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={whoare}
          ></div>
        </div>

        <div className="mt-9 px-4 sm:px-9 ">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Why Medsys?
          </h2>
          {/* <div className="bg-[#560216] mt-1 w-1/4 lg:w-36 h-1.5 ml-auto"></div> */}
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:w-11/12 mx-auto mt-6">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={whymed}
          ></div>
          <p className="text-rose-900 text-xl font-medium text-justify my-auto pr-6">
            Success comes from working with a partner you trust to provide the
            insight, support, and expertise that will propel your business
            forward.<br></br> We have built and continue to build our teams to
            cater specialized services and solutions that meet the distinct
            needs of the start-ups.<br></br> Our deep-set commitment to our
            customers defines how we do business, and our years of experience
            working across industries underpin the vast array of services we
            offer.
          </p>
        </div>
      </div>

      <div className="bg-[#560216] py-2 px-3 mt-11 mx-auto w-11/12 sm:w-5/6 rounded-lg shadow-md">
        <div className="p-1 sm:p-11 py-16">
          <div className="flex items-center justify-center">
            <div className="pb-9 flex flex-col items-center justify-center">
              <h2 className="text-4xl sm:text-5xl text-rose-100 font-bold mx-auto ">
                Upcoming Goals
              </h2>
              {/* <div className="bg-rose-100 mt-3 w-1/2 h-1.5"></div> */}
            </div>
          </div>

          <div className="grid grid-cols-3 mt-9 w-11/12 mx-auto">
            <div>
              <div
                className="sm:w-56 sm:h-32 w-36 h-20  mx-auto bg-no-repeat"
                style={imgupcoming1}
              ></div>
              <p className="text-lg sm:text-xl p-3 text-rose-100 text-center mx-auto">
                One-Stop Solution for budding entrepreneurs and businesses.
              </p>
            </div>

            <div>
              <div
                className="sm:w-56 sm:h-32 w-36 h-20 mx-auto bg-no-repeat"
                style={imgupcoming2}
              ></div>
              <p className="text-lg sm:text-xl text-rose-100 p-3 text-center">
                One India One Service Rate
              </p>
            </div>

            <div>
              <div
                className="sm:w-56 sm:h-32 w-36 h-20 mx-auto bg-no-repeat"
                style={imgupcoming3}
              ></div>
              <p className="text-lg sm:text-xl text-rose-100 p-3 text-center">
                MEDSYS Franchisee all across India
              </p>
            </div>
          </div>
        </div>
        </div>

      <div className="bg-[#560216] py-2 px-3 mt-11 mx-auto w-11/12 sm:w-5/6 rounded-lg shadow-md">
        <div className="p-1 sm:p-11 py-16">
          <div className="flex items-center justify-center">
            <div className="pb-9 flex flex-col items-center justify-center">
              <h2 className="text-4xl sm:text-5xl text-rose-100 font-bold mx-auto">
                Our Growth Parameter
              </h2>
              {/* <div className="bg-rose-100 mt-3 w-1/2 h-1.5"></div> */}
            </div>
          </div>

          <div className="grid grid-cols-3 mt-9 w-11/12 mx-auto">
            <div className="">
              <div
                className="sm:w-56 sm:h-32 w-36 h-20 mx-auto bg-no-repeat"
                style={imgupcoming4}
              ></div>
              <p className="text-lg sm:text-xl text-rose-100 p-3 text-center">
                Starts with the identification and removal of barriers.
              </p>
            </div>

            <div>
              <div
                className="sm:w-56 sm:h-32 w-36 h-20 mx-auto bg-no-repeat"
                style={imgupcoming5}
              ></div>
              <p className="text-lg sm:text-xl text-rose-100 p-3 text-center">
                Reinforce action plans for the errors identified.
              </p>
            </div>

            <div>
              <div
                className="sm:w-56 sm:h-32 w-36 h-20 mx-auto bg-no-repeat"
                style={imgupcoming6}
              ></div>
              <p className="text-lg sm:text-xl text-rose-100 p-3 text-center">
                Assess the current performance status of operations, marketing,
                franchisee.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 mt-11 mx-auto w-11/12 rounded-lg shadow-md">
        <div className="pb-6">
          <div className=" p-11 mx-auto sm:px-9">
            <h2 className=" text-5xl font-semibold text-center text-[#560216]">
              Aims and Aspirations of Medsys
            </h2>
          </div>
          <div className="lg:grid lg:grid-cols-2 ">
          <div className="w-11/12 mx-auto shadow-md bg-rose-100 rounded-md items-center justify-center ">
            <img src={aim} alt=""/>
            </div>

            <ul className="my-auto px-3">
              {data.map((d => (
                <li className="list-disc ml-4 mr-3 font-semibold text-justify text-lg py-2 text-rose-900">
                {d.val}
              </li>
              )))}
            </ul>
          </div>
        </div>
      </div>

      

      <div className="bg-rose-50 w-11/12 pb-7 rounded-lg shadow-md mx-auto my-9">
          <div className="p-7 text-center"><h1 className="text-5xl font-semibold text-[#560216]">Meet The Team</h1></div>
          <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 w-11/12 mx-auto">
            {team.map((t)=>(
              <div className="sm:p-3 p-5 bg-rose-100 m-2 rounded-md drop-shadow-lg">
                  <div className="p-3"><img className="border-4 border-rose-400 hover:border-rose-600 rounded-full" src={t.img} /></div>
                  <div className="py-4"><h1 className="md:text-2xl text-3xl font-semibold text-[#560216] text-center">{t.name}</h1></div>
                  <p className="text-xl md:text-lg text-rose-700 font-medium text-center">{t.title}</p>
              </div>
            ))}
          </div>
        </div>

      <div className="bg-[#560216ea] mb-11 mx-auto w-11/12 rounded-lg shadow-md">
        <div className="px-8 py-14">
          <div className="w-3/4">
            <h2 className="italic text-5xl text-white">
              Message from founder !!
            </h2>
          </div>
          <div className="ml-3 mt-7">
            <ImQuotesLeft className="text-center text-5xl text-white" />
          </div>
          <div className="flex justify-center ml-3 py-3">
            <p className="flex justify-center text-white text-lg sm:text-2xl sm:w-4/5 text-justify leading-7">
              He is an entrepreneur, business consultant and Founder of Medsys
              Consultancy Services LLP looking after the Business and Marketing
              aspects of the firm. Also, he is the founder of Medlife Pharma
              Healthcare Private Limited and Medlife Foundation. He aims at
              supporting startups on strategic projects, develop, build and
              strengthen their organisational capabilities, generate innovative
              ideas and projects and help in improving organizational efficiency
              and effectiveness through his Sales and Marketing industry
              expertise.
            </p>
          </div>
          <div className="flex justify-end ml-3 px-2">
            <ImQuotesRight className="text-center text-white text-5xl " />
          </div>
          <div className="flex flex-col justify-end px-3 m-3">
            <div className="flex justify-end py-1">
              <h1 className="text-white text-3xl mr-9">~Bhushan Shirude</h1>
              <br></br>
            </div>
            <div className="flex justify-end py-1">
              <h1 className="text-white text-2xl mr-9">Founder and CEO</h1>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default App;
