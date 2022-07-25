import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";
import { TabTitle } from './Utillity';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import HowWeWork from './HowWeWork';

export default function Home() {
    TabTitle("Home - medsysconsultancy.com");
    return (
        <>
            {/* <!-- =================Introduction slider====================== --> */}

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                // navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"

            >
                <SwiperSlide> <div className="swiper-slide "><img src="/assets/img/slider1.svg" alt="" /></div></SwiperSlide>
                <SwiperSlide> <div className="swiper-slide"><img src="/assets/img/slider2.svg" alt="" /></div></SwiperSlide>
                <SwiperSlide> <div className="swiper-slide"><img src="/assets/img/slider3.png" alt="" /></div></SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>

            {/* <!-- =================popular-products====================== --> */}
            <section className="container popular-products">
                <h1 className="section-heading text-5xl font-semibold text-center text-[#560216]">Popular Products</h1>
                <div className="wrapper">
                    <div className="item shadow-md">
                        <div><img src="/assets/img/Business Setup.svg" alt="" /></div>
                        <h1 className='font-bold'>Business Setup</h1>
                        <img className="inner-img border rounded-lg" src="/assets/img/Business Setup.png" alt="" />
                    </div>
                    <div className="item shadow-md">
                        <div><img src="/assets/img/NGO Management.svg" alt="" /></div>
                        <h1 className='font-bold'>NGO Management</h1>
                        <img className="inner-img border rounded-lg" src="/assets/img/NGO Management.png" alt="" />
                    </div>
                    <div className="item shadow-md">
                        <div><img src="/assets/img/Trademark & IP.svg" alt="" /></div>
                        <h1 className='font-bold'>Trandemark and IP</h1>
                        <img className="inner-img border rounded-lg" src="/assets/img/Trademark & IP.png" alt="" />
                    </div>
                    <div className="item shadow-md">
                        <div><img src="/assets/img/Digital Branding.svg" alt="" /></div>
                        <h1 className='font-bold'>Marketing Solution</h1>
                        <img className="inner-img border rounded-lg" src="/assets/img/Digital Branding.png" alt="" />
                    </div>
                </div>
            </section>
            {/* <!-- =================sustain====================== --> */}
            <section className="container sustain">
                <div className="wrapper">
                    <div className="item">
                        <img src="/assets/img/Start.svg" alt="" />
                        <h3 className='font-bold'>Start</h3>
                        <p>Business save upto 2-7% of their net GST with us every month, Individuals can upto &#8377 86,500 by
                            filing their tax returns through us.</p>
                    </div>
                    <div className="item">
                        <img src="/assets/img/Sustain.svg" alt="" />
                        <h3 className='font-bold'>Sustain</h3>
                        <p>Experience 3x faster GST filing, 5x faster invoice reconciliation and 10x faster e-waybil generation.
                            Individuals file their tax returns in under 7 min.</p>
                    </div>
                    <div className="item">
                        <img src="/assets/img/Grow.svg" alt="" />
                        <h3 className='font-bold'>Grow</h3>
                        <p>Our products are designed and tested by in-house tax experts, ensuring every new clause, form or
                            features is updated and sent to you over the cloud.</p>
                    </div>
                </div>
            </section>
            {/* <!-- =================Work====================== --> */}
            <HowWeWork />
            {/* <!-- =================clients====/================== --> */}
            <section className=" clients">
                <div className="swiper mySwiper inner">
                    <h1 className="client-heading">What Our client Say About US</h1>
                    <div className="swiper-wrapper">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={true}
                            loop={true}
                            autoplay={{ delay: 2000 }}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>We liked their aggressiveness to deliver things on time, the team of all professionals guide us
                                        together with our company incorporation, Legal Certificate, and routine compliances and business
                                        as
                                        well. </p>
                                    <div className="d-flex person">
                                        {/* <div className="img">
                                            <img src="/assets/img/client.jpg" alt="" />
                                        </div> */}
                                        <div>
                                            <h3>Biraj Das </h3>
                                            <span>Director, SIB oil mill prime Pvt. Ltd</span>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>We started with 12A 80G Registration. We are taking the NGO service for the last 3 years; we had
                                        an
                                        amazing service experience with the Medsys team. Everything was completed on time </p>
                                    <div className="d-flex person">
                                        {/* <div className="img">
                                            <img src="/assets/img/client.jpg" alt="" />
                                        </div> */}
                                        <div>
                                            <h3>Kanta Naik</h3>
                                            <span>President, Rohan Naik charitable Trust</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>Medsys NGO consultancy provides services using technology to track, update and process their NGO
                                        Services. I did an NGO Darpan registration, and though I had a lot of issues, it was done
                                        efficiently. The team Medsys has superb knowledge and helps in providing the Solution. I
                                        recommend
                                        Medsys Consultancy for their professionalism </p>
                                    <div className="d-flex person">
                                        {/* <div className="img">
                                            <img src="/assets/img/client.jpg" alt="" />
                                        </div> */}
                                        <div>
                                            <h3>Gagan Malhotra</h3>
                                            <span>Director, Dream worth Technology Pvt Ltd
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>It's a good website for all the NGO compliance and Business approvals. The team was excellent and
                                        updated daily on WhatsApp or over phones. Amazing service. Specifically, I am Recommended for
                                        NGO-related services. Nice experience with Bhushan.
                                    </p>
                                    <div className="d-flex person">
                                        {/* <div className="img">
                                            <img src="/assets/img/client.jpg" alt="" />
                                        </div> */}
                                        <div>
                                            <h3>Pradeep Bhojane</h3>
                                            <span>President, Tree Foundation
                                                Director, 6 clean force Pvt Ltd
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <p>One of the must greatest supporting consultancy for running NGO Compliance. I have a very good
                                        experience. The Medsys team has given very good guidance and help to Param sunandaee foundation.
                                        And
                                        Mr. Bhushan and his team are very professional and supportive.
                                    </p>
                                    <div className="d-flex person">
                                        {/* <div className="img">
                                            <img src="/assets/img/client.jpg" alt="" />
                                        </div> */}
                                        <div>
                                            <h3>kalpesh Rajput</h3>
                                            <span>Director, Param Sunandaee group
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* <!-- =================Partner====================== --> */}
            <section className="partner container lg:w-4/5">
                <div className="partner-inner mb-5">
                    <div className="left">
                        <h1 className='font-black'>Let's Partner Up!</h1>
                        <p style={{ fontWeight: "bold" }}>Become our partner and drive your business to the next level.</p>
                        <h6>Connect with us now!</h6>
                        <div className="flex justify-center">
                        <button className='border rounded-md mx-auto bg-mainColor hover:bg-rose-800'>Download Partner Success Stories</button>

                        </div>
                    </div>
                    <div className="right bg-[#570909]">
                        <img src="/assets/img/LetsPartnerImg/partnerUs.png" alt="" />
                    </div>
                </div>
            </section>
          
            {/* <!-- ======================Profile===="================== --> */}
            <section className="profile container w-4/5">
                <div className="inner">
                    <div className="left">
                        <h1>Want to know more about us ?</h1>
                        <h6>Download our company profile</h6>
                    </div>
                    <div className="right" download="">
                        <a href="/assets/medsysPDF/MCSLLP_BUSINESS PRESENTATION.pdf">
                            <input type="button" value="Download" />
                        </a>
                    </div>
                </div>
            </section>
              {/* <!-- ================= Partner-bw-img====================== --> */}
              <section className="partner-bw-img hidden sm:block mb-9">
                <div className="img h-[500px]"></div>
            </section>
            {/* <!-- ======================Counter======================= --> */}
            <section className="counter container ">
                <div className="inner w-11/12 gap-5 mx-auto">
                    <div className="item ">
                        <div className="flex justify-center">
                            <h1>1000</h1><span>+</span>
                        </div>
                        <h6 className='text-center'>Happy Clients</h6>
                    </div>
                    <div className="item">
                        <div className="flex justify-center">
                            <h1>100</h1><span>+</span>
                        </div>
                        <h6 className='text-center'>Experts Official</h6>
                    </div>
                    <div className="item">
                        <div className="flex justify-center">
                            <h1>500</h1><span>+</span>
                        </div>
                        <h6 className='text-center'>Active Projects</h6>
                    </div>
                    <div className="item">
                        <div className='flex justify-center'>
                            <h1>15</h1><span>+</span>
                        </div>
                        <h6 className='text-center'>Upcoming Services</h6>
                    </div>
                </div>
            </section>

        </>

    )
}
