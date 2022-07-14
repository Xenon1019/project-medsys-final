import { useState } from "react";
import control from "./control.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const Menus = [
    {
      title: "Profile",
      src: "account_circle",
      routes: "/profile",
    },
    {
      title: "Documents",
      src: "description",
      routes: "/documents",
    },
    {
      title: "Pending work",
      src: "pending_actions",
      routes: "/pendingWork",
    },
    {
      title: "Completed work",
      src: "assignment_turned_in",
      routes: "/completedWork",
    },
    {
      title: "Generate Quotation",
      src: "request_quote",
      routes: "/quotation",
    },
    {
      title: "Log Out",
      src: "logout",
      gap: true,
      routes: "/",
    },
  ];
  return (
    <div
      className={` ${
        open ? "w-1/3 sm:w-72 " : "w-10 sm:w-20"
      } bg-mainColor lg:h-screen pl-3 lg:pl-7 py-11 lg:py-24 relative duration-300 `}
    >
      <img
        src={control}
        className={`absolute cursor-pointer -right-5 top-9 w-11 sm:w-9 border-rose-400 hover:animate-pulse opacity-100
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="">
        <h1
          className={`text-rose-100 origin-left font-semibold text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Dashboard
        </h1>
      </div>
      <ul className="pt-3 w-2/3 mr-auto">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-1 cursor-pointer hover:text-rose-400 text-rose-100 font-semibold text-sm sm:text-md items-center 
              ${Menu.gap ? "mt-9" : "mt-2"} 
              } `}
              onClick={() => setToggle(!toggle)}
          >
            <>
              <NavLink to={Menu.routes}>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  <span className="flex flex-row p-1">
                    {" "}
                    <span class="material-symbols-rounded pr-2">
                      {Menu.src}
                    </span>
                    {Menu.title}
                  </span>
                </span>
              </NavLink>
              <br />
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
