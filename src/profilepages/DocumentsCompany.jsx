import React from "react";
import { Link } from "react-router-dom";

function DocumentsCompany() {
  return (
    <>
      <div className=" flex flex-col p-3">
        <h2 className="text-2xl sm:text-4xl font-semibold text-mainColor text-center py-5">
          Documents for Company
        </h2>

        <form
          className="w-full md:w-5/6  mx-auto bg-rose-50 sm:p-4 px-5 rounded-lg"
          type="submit"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Certificate</label>
              <input
                type="file"
                className="flex mx-auto  file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="certificate"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">PAN</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="PAN"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">TAN</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="TAN"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 p-3">
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">MOA</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">AOA</label>
              <input
                type="file"
                className="flex  mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

          <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">GST </label>
              <input
                type="file"
                className="flex  mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Audit Report</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Annual Report</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Income Tax return</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Event Base Forms</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Acknowledgement</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>

            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Director KYC</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Other Certificates</label>

              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
            <div className="bg-rose-100 rounded-md py-2 text-center ml-1 mt-1">
              <label className="text-lg font-semibold">Remarks</label>
              <input
                type="file"
                className="flex mx-auto file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="file1"
              />
            </div>
          </div>

          <div className="mt-7 p-3">
            <Link to="/documents">
              <button className="w-1/2 sm:w-1/3 p-2 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default DocumentsCompany;
