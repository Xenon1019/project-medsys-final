import React, { useState } from "react";
import { Link } from "react-router-dom";
import l from "./lr.png";

export default function LoginRegister() {
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const [otp,setOtp]=useState("");
  const [password,setPassword]=useState("");

  const backgroundImageStyle = {
    background: `url("${l}") center/cover`,
  };
  
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
  const handleChange=() => {

  }
  return (
    <>
    <div className="my-7 bg-[#560216] w-11/12 lg:w-4/5 mx-auto shadow-xl rounded-xl">
    
    <div className="" style={backgroundImageStyle}>
    <div className="lg:grid lg:grid-cols-2 bg-[#56021681] rounded-xl">
      <div className="w-full my-auto py-7">
        <h2 className="text-4xl font-semibold  text-rose-100 text-center text ml-auto mr-auto p-3">
          Sign in here{" "}
        </h2>
        <form className="max-w-[350px] w-3/4 mx-auto bg-[#ffe5eaea] p-6 px-6 rounded-md " onSubmit={handleSubmit}>
          <h2 className="text-4xl text-[#2d1e22ea] font-bold text-center ml-auto">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-600 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-md bg-gray-200 p-2 focus:bg-white focus:outline-none"
              type="number"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-gray-600 py-2">
            <label>E-mail</label>
            <input
              className="rounded-md bg-gray-200 p-2 focus:bg-white focus:outline-none"
              type="e-mail"
              onChange={handleChange}
            />
          </div>
          <button className="w-3/4 py-2 mt-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
            Get OTP
          </button>
          <div className="flex flex-col text-gray-600 py-2">
            <label>Enter OTP</label>
            <input
              className="rounded-md bg-gray-200 p-2 focus:bg-white focus:outline-none"
              type="number"
            />
          </div>
          <Link to="/profile">
            <button className="w-3/4 py-2 mt-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
              Sign in
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full flex flex-col space-y-4 justify-center lg:ml-auto py-7 shadow-md" >
        <h2 className="text-4xl font-semibold text-rose-100 text-center ml-auto mr-auto">
          Create an account here{" "}
        </h2>
        <form className="max-w-[400px] w-3/4 mx-auto bg-[#2d1e22ea] py-4 px-6 rounded-md " >
          <h2 className="text-4xl text-[#ffe5eaf1] font-bold text-center">SIGN UP</h2>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Full Name</label>
            <input
              className="rounded-md bg-zinc-700 p-2 focus:bg-zinc-600 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-md bg-zinc-700 p-2 focus:bg-zinc-600 focus:outline-none"
              type="number"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>E-Mail Address</label>
            <input
              className="rounded-md bg-zinc-700 p-2 focus:bg-zinc-600 focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Set Password</label>
            <input
              className="rounded-md bg-zinc-700 p-2 focus:bg-zinc-600 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex flex-col text-rose-100 py-2">
            <label>Confirm Password</label>
            <input
              className="rounded-md bg-zinc-700 p-2 focus:bg-zinc-600 focus:outline-none"
              type="password"

            />
          </div>
          <Link to="/">
            <button className="w-3/4 py-2 mt-2 bg-rose-900 text-rose-100 font-semibold rounded-md hover:bg-rose-800">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}
