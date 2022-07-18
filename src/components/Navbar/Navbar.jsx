import React, { useState } from "react";
import Logo from "./mainLogo.png";
import NavLinks from "./NavLinks";
import Log from "./Log";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#560215] sticky top-0 z-50">
      <div className="flex items-center font-normal text-rose-50 justify-between ">
        <div className="z-50 p-2 flex w-full lg:w-auto justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer w-fit  h-12"
            />
          </Link>
          <div
            className="text-3xl lg:hidden mt-3 "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <div className="lg:flex hidden items-center">
          <div className="hover:bg-rose-900  cursor-pointer rounded-sm">
            <Link to="/" className="inline-block uppercase py-4 px-3 font-semibold">
              Home
            </Link>
          </div>

          <NavLinks />
          <div className="hover:bg-rose-900 cursor-pointer rounded-sm">
            <Link
              to="/marketingSolutions"
              className=" inline-block uppercase font-semibold py-4 px-3"
            >
              Marketing Solution
            </Link>
          </div>
          <div className="hover:bg-rose-900  cursor-pointer rounded-sm">
            <Link
              to="/contact"
              className="inline-block uppercase py-4 px-3 font-semibold"
              
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:block hidden hover:bg-rose-900 py-4">
          <Log />
        </div>
        {/* Mobile*/}
        <div
          className={`
            lg:hidden bg-[#560216] fixed text-lg bottom-0 w-full h-full pt-20 z-30 overflow-y-auto
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className="hover:bg-rose-900" onClick={() => setOpen(!open)}>
            <Link to="/" className="p-7 cursor-pointer inline-block uppercase font-semibold">
              Home
            </Link>
          </div>
          <div className="hover:bg-rose-900" onClick={() => setOpen(!open)}>
            <Link to="/AboutUs" className="p-7 cursor-pointer inline-block uppercase font-semibold">
              About Us
            </Link>
          </div>
          <NavLinks setopen={setOpen} open={open} />
          <div className="hover:bg-rose-900" onClick={() => setOpen(!open)}>
            <Link to="/marketingSolutions" className="p-7 cursor-pointer inline-block uppercase font-semibold">
              Marketing Solution
            </Link>
          </div>
          <div className="hover:bg-rose-900" onClick={() => setOpen(!open)}>
            <Link to="/contact" className="p-7 cursor-pointer inline-block uppercase font-semibold">
              Contact Us
            </Link>
          </div>
          <div className="p-5 hover:bg-rose-900" onClick={() => setOpen(!open)}>
            <Log />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
