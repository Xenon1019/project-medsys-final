import React, { useState } from "react";
import { links } from "./Mylinks";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className=" text-left md:cursor-pointer hover:bg-rose-900 rounded-sm group">
            <div className="flex justify-between py-4 px-3" onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
            <h1
              className=" flex justify-between items-center group uppercase font-semibold"
              
            >
              {link.name}
            </h1>
            <span className="material-symbols-outlined h-fit my-auto">expand_more</span>
            </div>
            {link.submenu && (
              <div>
                <div className="absolute top-15 hidden group-hover:lg:block hover:lg:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1  bg-[#560216] border border-l-rose-800 border-t-rose-800 border-r-[#560216] border-b-[#560216] drop-shadow rotate-45 rounded-sm"></div>
                  </div>
                  <div className="bg-[#560216] border border-rose-900 drop-shadow p-4 grid grid-flow-col-dense gap-5 rounded-md">
                    {link.sublinks.map((mysublinks) => (
                      <div className="h-full">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-rose-200 my-2">
                            <Link
                              to={slink.link}
                              className="hover:text-rose-50"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden bg-rose-900" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span class="material-symbols-outlined">expand_more</span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head
                        ? "lg:hidden bg-rose-800"
                        : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
