import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feedback from "../feedback/Feedback";
export default function Footer() {
  const [modalOn, setModalOn] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  var date = new Date().getFullYear();

  return (
    <>
      <footer>
        <div class="footer_upper d-flex">
          <div class="footer_menu">
            <h2 class="border-none">
              <img src="/assets/img/mainLogo.png" alt="" width="100px" />
            </h2>
            <ul>
              <li>
                <Link to="/AboutUs" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Pay US
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer_menu">
          <h2 className="font-semibold">POPULAR SERVICES</h2>
            <ul>
              <li>
                <Link to="/" className="text-white">
                  Business Setup
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  NGO management
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Trademark and IP
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Digital Branding
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_menu mb-auto">
          <h2 className="flex font-semibold">
              QUICK LINKS<div className="text-[#560216]">..........</div>
            </h2>
            <ul>
              <li>
                <Link to="/process" className="text-white">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="text-white">
                  Blog
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="footer_menu mb-auto">
            <h2 className="font-semibold">CONNECT WITH US</h2>
            <ul>
              <li>
                <Link to="/partner" className="text-white">
                  Partner with Us
                </Link>
              </li>
              <li>
              <a href="https://g.page/r/CcL_UBb54VReEBI/review" target={"_blank"} rel="noopener noreferrer" className="text-white">Customer Review</a>
                
              </li>

              <li>
                <label className="block">
                  <button className="text-white" onClick={clicked}>
                    Suggestions and Feedback
                  </button>
                </label>
                {/* {openModal && <Feedback closeModal={setOpenModal}/>} */}
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_botton">
          <h3>OUR OFFICE</h3>

          <div className="flex flex-row gap-4 justify-center p-2 w-4/5 mx-auto">
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Mumbai</h1>
            </div>
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Navi-Mumbai</h1>
            </div>
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Pune</h1>
            </div>
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Nashik</h1>
            </div>
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Delhi</h1>
            </div>
            <div className="py-2">
              <i class="lni lni-map-marker text-2xl"></i>
              <h1>Noida</h1>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:flex justify-center mx-auto">
            <div class="flex gap-1 px-2 py-5">
              <i class="lni lni-thumbs-up text-4xl my-auto"></i>
              <h1 className="text-sm my-auto">ASSURED CUSTOMER SATISFACTION</h1>
            </div>
            <div class="flex gap-1 px-2 py-5">
              <i class="lni lni-lock-alt text-4xl my-auto"></i>
              <h1 className="text-sm my-auto">CLIENT DATA CONFIDENTIALITY</h1>
            </div>
            <div class="flex gap-1 px-2 py-5">
              <i class="lni lni-paypal text-4xl my-auto"></i>
              <h1 className="text-sm my-auto">NO HIDDEN FEE</h1>
            </div>
            <div class="flex gap-1 px-2 py-5">
              <i class="lni lni-comments-reply text-4xl my-auto"></i>
              <h1 className="text-sm my-auto">SECURE ONLINE PAYMENT</h1>
            </div>
          </div>

          <div className="grid p-3 bg-[#25050c] ">
            <div className="flex mx-auto gap-7">
              <h1 className="tracking-wider uppercase my-auto text-[#af999e]">
                ⓒ 2017-{date} Medsys Consultancy Services LLP
              </h1>
              <div className="sm:flex py-3 my-auto uppercase gap-4">
                <div className="py-3">
                  <Link to="/terms&conditions" className="text-rose-200">
                    Terms and Conditions
                  </Link>
                </div>
                <div className="py-3">
                  <Link to="/privacypolicy" className="text-rose-200">
                    Privacy Policy
                  </Link>
                </div>
                <div className="py-3">
                  <Link to="/refundpolicy" className="text-rose-200">
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className=" gap-2">
            <Link to="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage">
              <i class="lni lni-facebook"></i>
            </Link>
            <Link to="https://twitter.com/MedsysIndia?fbclid=IwAR2NBFx4fVus5BIiCoZjxsxmz11QMM9T6F1NJyNoATQNv-Uv1O0aSCp-Zxk ">
              <i class="lni lni-twitter"></i>
            </Link>
            <Link to="https://www.instagram.com/medsysconsultancy/">
              <i class="lni lni-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/30242565/admin/  ">
              <i class="lni lni-linkedin"></i>
            </Link>
          </div>
          </div>
          
        </div>

        {modalOn && <Feedback setModalOn={setModalOn} />}
      </footer>
    </>
  );
}
