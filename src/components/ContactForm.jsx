import React from "react";

export default function ContactForm() {
  return (
    <>
      
        <div className="lg:grid lg:grid-flow-col p-7 mx-auto rounded-md w-11/12 lg:5/6 my-7">
          <div className="my-auto lg:ml-auto ">
            <h1 className="font-semibold text-5xl pb-3 text-[#560216]">Please Get In Touch</h1>
            <p className="text-xl pt-3 ">
              Schedule a free consultaion with our executives for your <br />{" "}
              Startups Needs
            </p>
            <h6 className="py-1 text-base">For any Queries regarding your startup and legal advice*</h6>
            <form className="grid grid-flow-row text-base" action="#">
              <div className="flex flex-col text-[#560216] py-2">
                <label>Name</label>
                <input
                  className="rounded-md text-base w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-[#560216] py-2">
                <label>Your Email</label>
                <input
                  className="rounded-md text-base w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-[#560216] py-2">
                <label>Your phone</label>
                <input
                  className="rounded-md text-base w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <select required className="rounded-md text-base w-4/5 my-5 p-2" id="selection">
                <option>Services</option>
                <option value="selection">AGNi</option>
                <option value="selection">BIS</option>
                <option value="selection">Digital Marketing</option>
                <option value="selection">GeM</option>
                <option value="selection">Government Grants and Funding</option>
                <option value="selection">IEC Certification</option>
                <option value="selection">Industrial Land Banking </option>
                <option value="selection">Intellectual Property Rights</option>
                <option value="selection">ISO Certification</option>
                <option value="selection">MSME Loans</option>
                <option value="selection">Nidhi Prayas Yojna</option>
                <option value="selection">NSIS</option>
                <option value="selection">Pitch Deck</option>
                <option value="selection">Seed Fund</option>
                <option value="selection">Startup India Certification</option>
                <option value="selection">TReDS</option>
                <option value="selection">Udyam Certification</option>
                <option value="selection">Venture Capitalist</option>
              </select>
              <button className="text-lg  text-white bg-[#560216] p-2 py-3 w-1/3 tracking-wider mr-auto rounded-md hover:bg-rose-900">
                Send Now
              </button>
            </form>
          </div>
          <div className="lg:mr-auto">
            <img
              className="mx-auto h-[550px]"
              src="/assets/img/contactHeader/headerImg/4.svg"
              alt=""
            />
          </div>
        </div>
      
    </>
  );
}
