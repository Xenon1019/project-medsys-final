import React from 'react'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"

import img11 from "./11.svg"
import imgHeader from "./blogHeader.png"


export default function BlogPost() {
    return (
        <>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="post-img mb-8">
                <img src={imgHeader} alt="" />
            </div>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl mb-6 text-center text-mainColor font-bold" style={{borderBottom:"1px solid #e8dada"}}><a href="/">Home</a>/Blog</h2>
                <div className="year-box adjust-year">
                    <div>
                        <h3 className='w-fit text-mainColor' style={{borderBottom:"2px solid black", fontSize:"21px"}}>Featured Articles </h3>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Business Setup</h1></a>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Start Ups</h1></a>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>NGO Management</h1></a>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Trademark</h1></a>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Web Development</h1></a>
                    </div>
                    <div>
                        <a href='/' className='cursor-pointer text-gray-700 hover:text-rose-500'><h1>Marketing Solutions</h1></a>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img2} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img4} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Bhushan shirude</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>

            </div>
            <div className="max-width-1 m-auto mt-9"><hr /></div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl mb-6 text-center text-mainColor font-bold" style={{borderBottom:"1px solid #e8dada"}}>People Read This Also</h2>
                <div className="row">


                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img11} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Bhushan shirude</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img1} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Bhushan shirude</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img2} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Bhushan shirude</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
