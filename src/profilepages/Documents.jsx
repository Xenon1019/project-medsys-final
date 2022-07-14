import React from "react";
import SideBar from "../components/Sidebar/SideBar";

import { Link } from "react-router-dom";
const Documents = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex w-5/6 mx-auto">
          <div className="bg-rose-200 mx-auto h-1/2 sm:h-3/4 my-auto w-11/12 sm:w-3/4 rounded-lg">
            <h1 className="text-center text-xl font-semibold text-mainColor p-3">
              Documents for Trust
            </h1>
            <div className="bg-rose-200 flex flex-row h-5/6 p-2 mt-11 rounded-lg">
              <div className="bg-rose-100 w-1/2 h-full rounded-md border-2 mr-1">
                <h1 className="text-center text-lg font-medium text-mainColor p-2">
                  Documents
                </h1>
              </div>
              <div className="bg-rose-100 w-1/2 lg:flex rounded-md border-2 ml-1 my-auto">
                <div className="m-4">
                  <Link to="/documents/documentsTrust">
                  <button className="p-3 bg-rose-800 text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                    Upload Documents
                  </button>
                  </Link>
                </div>
                <div className="m-4">
                  <Link to="/documents/documentsCompany">
                  <button className="p-3 bg-rose-800 text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                    Upload Documents
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
