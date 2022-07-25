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
        <div className="footer_upper d-flex">
          <div className="footer_menu pt-3">
          <div className="border-none">
                <img src="/assets/img/mainLogo.png" alt="" className="mb-4"/>
              </div>
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
                <Link to="/career" className="text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Pay Us
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
                  Marketing Solution
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
                <Link to="/blog" className="text-white">
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
                <a
                  href="https://g.page/r/CcL_UBb54VReEBI/review"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Customer Review
                </a>
              </li>

              <li>
                <label className="block">
                  <button className="text-white" onClick={clicked}>
                    Feedback
                  </button>
                </label>
                {/* {openModal && <Feedback closeModal={setOpenModal}/>} */}
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_botton">
          <h3>OUR OFFICE</h3>

          <div className="flex text-sm gap-4 justify-center p-3">
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
              <h1>Mumbai</h1>
            </div>
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
              <h1>Navi-Mumbai</h1>
            </div>
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
              <h1>Pune</h1>
            </div>
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
              <h1>Nashik</h1>
            </div>
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
              <h1>Delhi</h1>
            </div>
            <div className="py-2">
              <span class="material-symbols-outlined text-[#d06666]">
                pin_drop
              </span>
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

          <div className="grid bg-[#25050c] ">
            <div className="flex items-center my-5 justify-center gap-3">
              <a href="https://www.facebook.com/medsysconsultancy/?ref=pages_you_manage" target="_blank">
                <i class="lni lni-facebook"></i>
              </a>
              <a href="https://twitter.com/MedsysIndia?fbclid=IwAR2NBFx4fVus5BIiCoZjxsxmz11QMM9T6F1NJyNoATQNv-Uv1O0aSCp-Zxk " target="_blank">
                <i class="lni lni-twitter"></i>
              </a>
              <a href="https://www.instagram.com/medsysconsultancy/" target="_blank">
                <i class="lni lni-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/30242565/admin/  " target="_blank">
                <i class="lni lni-linkedin"></i>
              </a>
            </div>
            <div className="flex mx-auto text-sm gap-7">
              <h1 className="tracking-wider uppercase my-auto text-[#af999e]">
                ⓒ 2017-{date} Medsys Consultancy Services LLP
              </h1>
              <div className="sm:flex py-2 my-auto uppercase gap-6">
                <div className="py-2">
                  <Link to="/terms&conditions" className="text-rose-200">
                    Terms and Conditions
                  </Link>
                </div>
                <div className="py-2">
                  <Link to="/privacypolicy" className="text-rose-200">
                    Privacy Policy
                  </Link>
                </div>
                <div className="py-2">
                  <Link to="/refundpolicy" className="text-rose-200">
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modalOn && <Feedback setModalOn={setModalOn} />}
      </footer>
    </>
  );
}
