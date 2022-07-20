import React from "react";

import bussinessLogo from "../imgs/business logo.jpeg";
import starLogo from "../imgs/star logo.jpeg";
import smileLogo from "../imgs/smile logo.jpeg";
import bg from "../imgs/bg.png";

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

const copyright = () => {
  return (
    <div
      className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="">
        <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
          <h1 className="text-5xl font-semibold">Copyright Registration</h1>
        </div>
        <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
          <p className="my-3">
            Copyright is a type of intellectual property that allows you to sue
            anyone who tries to steal your work.
          </p>
          <p className="my-3">
            Why put it off any longer? Let’s safeguard your original material!!
          </p>
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

    // <div className="sm:grid sm:grid-cols-2 p-11 bg-rose-900"
    //  style={{background: `url(${bg})`}}>
    //   <div className="">
    //     <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
    //       <h1 className="text-5xl font-semibold">Copyright Registration</h1>
    //     </div>
    //     <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
    //       <p>
    //         Copyright is a type of intellectual property that allows you to sue
    //         anyone who tries to steal your work.
    //       </p>
    //       <p className="mt-3">
    //         Why put it off any longer? Let’s safeguard your original material!!
    //       </p>
    //     </div>
    //     <div className="sm:w-2/3 mx-auto text-lg p-5 text-rose-200">
    //       {points.map((p) => (
    //         <div className="flex gap-3">
    //           <div>{p.icon}</div>
    //           <div>{p.head}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="bg-rose-900 px-3 py-9">
    //     <form className="mx-auto sm:w-2/3 bg-rose-100 p-6 px-6 rounded-md">
    //       <div className="flex flex-col text-gray-600 py-2">
    //         <label>Full Name</label>
    //         <input
    //           className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
    //           type="text"
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-600 py-2">
    //         <label>Phone Number</label>
    //         <input
    //           className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
    //           type="number"
    //         />
    //       </div>
    //       <div className="flex flex-col text-gray-600 py-2">
    //         <label>E-mail</label>
    //         <input
    //           className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
    //           type="e-mail"
    //         />
    //       </div>
    //       <button className="w-3/4 py-2 mt-5 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
    //         Request a Callback
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default copyright;
