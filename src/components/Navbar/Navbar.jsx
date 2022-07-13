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
          <img src={Logo} className="md:cursor-pointer  h-12" />
          <div className="text-3xl lg:hidden mt-3 " onClick={() => setOpen(!open)}> 
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="lg:flex hidden text-sm items-center ml-40 gap-2 ">
          <li>
            <Link to="/" className="pr-2  inline-block uppercase font-semibold">
              Home
            </Link>
          </li>
        
          <NavLinks />
          <li>
            <Link to="/marketingSolutions" className="pr-2  inline-block uppercase font-semibold">
              Marketing Solution
            </Link>
          </li>
          <li>
            <Link to="/contact" className="pr-2  inline-block uppercase font-semibold">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="lg:block hidden">
          <Log />
        </div>
        {/* Mobile*/}
        <ul
          className={`
            lg:hidden bg-[#560216] fixed text-lg bottom-0 w-full h-full z-30 py-24 
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              About Us
            </a>
          </li>
          <NavLinks />
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Marketing Solution
            </a>
          </li>
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Contact Us
            </a>
          </li>
          <div className="p-5">
          <Log />
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
