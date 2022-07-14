import React from "react";
import SideBar from "../components/Sidebar/SideBar";

import { Link } from "react-router-dom";
const Documents = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-5/6 mx-auto">
          <div className="my-auto rounded-md">
            <h1 className="text-center text-5xl font-semibold text-mainColor p-11">
              Upload Documents
            </h1>
            <div className="bg-rose-200 grid grid-cols-2 h-[400px] lg:h-[500px] p-7 my-11 mx-3 rounded-lg">
              <div className="bg-rose-100 rounded-md border-2 mr-1">
                <h1 className="text-center text-lg font-medium text-mainColor p-2">
                  Documents
                </h1>
              </div>
              <div className="bg-rose-100 lg:flex rounded-md border-2 my-auto">
                <div className="m-4">
                  <Link to="/documents/documentsTrust">
                  <button className="p-3 bg-rose-800 text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                    Upload Trust Documents
                  </button>
                  </Link>
                </div>
                <div className="m-4">
                  <Link to="/documents/documentsCompany">
                  <button className="p-3 bg-rose-800 text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                    Upload Company Documents
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
