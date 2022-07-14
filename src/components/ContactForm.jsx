import React from "react";

export default function ContactForm() {
  return (
    <>
      
        <div className="lg:grid lg:grid-flow-col px-7 py-11  bg-rose-50 mx-auto rounded-md w-11/12 lg:w-3/4 my-7 shadow-md">
          <div className="my-auto mx-auto">
            <h1 className="font-semibold text-5xl py-3 text-[#560216]">Please Get In Touch</h1>
            <p className="text-lg py-3">
              Schedule a free consultaion with our executives for your <br />{" "}
              Startups Needs
            </p>
            <h6 className="py-3">For any Queries regarding your startup and legal advice*</h6>
            <form className="grid grid-flow-row " action="#">
              <div className="flex flex-col text-[#560216] py-2">
                <label>Name</label>
                <input
                  className="rounded-md  w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-[#560216] py-2">
                <label>Your Email</label>
                <input
                  className="rounded-md w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col text-[#560216] py-2">
                <label>Your phone</label>
                <input
                  className="rounded-md w-4/5 mt-1 p-2 focus:bg-zinc-50 focus:outline-none"
                  type="text"
                />
              </div>
              <select className="rounded-md  w-4/5 my-5 p-2" id="selection">
                <option value="selection">Subject</option>
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
          <div>
            <img
              className="mx-auto h-[500px]"
              src="/assets/img/contactHeader/headerImg/4.svg"
              alt=""
            />
          </div>
        </div>
      
    </>
  );
}
