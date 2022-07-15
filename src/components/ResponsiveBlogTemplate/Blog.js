import { Link } from 'react-router-dom'
import React from 'react'
import img1 from "./1.png"
import img3 from "./3.png"

import imgHeader from "./blogHeader.png"

export default function BlogPost() {
    return (
        <>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="post-img mb-8 h-[550px]">
                <img src={imgHeader} style={{height:"550px"}} alt="" />
            </div>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl mb-6 text-center text-mainColor font-bold" style={{ borderBottom: "1px solid #e8dada" }}><a className='hover:text-rose-500' href="/">Home</a>/Blog</h2>
                <div className="year-box adjust-year">
                    <div className="recent-post mb-12">
                        <div>
                            <h3 className='w-fit text-mainColor' style={{ borderBottom: "2px solid black", fontSize: "21px" }}>Recent Posts </h3>
                        </div>
                        <div>
                            <Link to="/blog" className='cursor-pointer text-gray-700 flex items-center hover:text-rose-500'><i class="mr-3 lni lni-arrow-right-circle"></i><h1>What is form CSR 1 Registration?
                            </h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 flex items-center hover:text-rose-500'><i class="mr-3 lni lni-arrow-right-circle"></i><h1>Purpose of filing Form CSR 1
                            </h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 flex items-center hover:text-rose-500'><i class="mr-3 lni lni-arrow-right-circle"></i><h1>Due date for filing form CSR 1</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 flex items-center hover:text-rose-500'><i class="mr-3 lni lni-arrow-right-circle"></i><h1>Why Medsys as your Service Provider</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 flex items-center hover:text-rose-500'><i class="mr-3 lni lni-arrow-right-circle"></i><h1>Documents Required for Filing Form CSR-1</h1></Link>
                        </div>
                    </div>
                    <div className="categories">
                        <div>
                            <h3 className='w-fit text-mainColor' style={{ borderBottom: "2px solid black", fontSize: "21px" }}>Categories </h3>
                        </div>
                        <div>
                            <Link to="/blog" className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Business Setup</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Start Ups</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>NGO Management</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Trademark</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Web Development</h1></Link>
                        </div>
                        <div>
                            <Link to='/blog' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Marketing Solutions</h1></Link>
                        </div>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-mainColor text-2xl'>What is form CSR 1 Registration?</h3>

                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/CSR-1-Registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-2xl text-mainColor'>What is FCRA Registration?</h3>
                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/FCRA-registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-mainColor text-2xl'>What is form CSR 1 Registration?</h3>

                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/CSR-1-Registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-2xl text-mainColor'>What is FCRA Registration?</h3>
                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/FCRA-registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-mainColor text-2xl'>What is form CSR 1 Registration?</h3>

                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/CSR-1-Registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-2xl text-mainColor'>What is FCRA Registration?</h3>
                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/FCRA-registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-mainColor text-2xl'>What is form CSR 1 Registration?</h3>

                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/CSR-1-Registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-2xl text-mainColor'>What is FCRA Registration?</h3>
                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/FCRA-registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-mainColor text-2xl'>What is form CSR 1 Registration?</h3>

                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/CSR-1-Registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1 flex flex-col">
                        <h3 className='text-2xl text-mainColor'>What is FCRA Registration?</h3>
                        <h1 className="name">Bhushan shirude</h1>
                        <span>07 January | 6 min read</span>
                        <Link to="/FCRA-registration">
                            <button className='w-32 h-9 mt-6 rounded hover:bg-rose-700 bg-mainColor text-white'>Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-width-1 m-auto mt-9"><hr /></div>

        </>
    )
}
