import React from 'react'

export default function HowWeWork() {
  return (
    <>
        <section className="section portfolio w-10/12 mx-auto " id="portfolio">
            <div className="container">
                <h2 className="section-title text-5xl text-center my-5 text-mainColor font-semibold padd-15">How We Work</h2>
                <div className="work-row">
                     
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner rounded-lg">
                            <div className="portfolio-item-thumbnail">
                                 <img src="/assets/img/howWeWork/FillForm.svg" className='bg-mainColor' alt=""/>
                                <div className="mask"></div>
                            </div>
                            <span className="term">Form fill</span>
                            <h3 className="portfolio-item-title">Fill the Form</h3>
                            <span className="more-button">&#x2192;</span>
                        </div>
                    </div>
                     
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner rounded-lg">
                            <div className="portfolio-item-thumbnail">
                            <img src="/assets/img/howWeWork/MakePay.svg" className='bg-mainColor' alt=""/>
                                <div className="mask"></div>
                            </div>
                            <span className="term">Payment</span>
                            <h3 className="portfolio-item-title">Make a payment</h3>
                            <span className="more-button">&#x2192;</span>
                        </div>
                    </div>
                     
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner rounded-lg">
                            <div className="portfolio-item-thumbnail">
                            <img src="/assets/img/howWeWork/GetCall.svg" className='bg-mainColor' alt=""/>
                                <div className="mask"></div>
                            </div>
                            <span className="term">Get Call</span>
                            <h3 className="portfolio-item-title">Get a call from concerned lawyer</h3>
                            <span className="more-button">&#x2192;</span>
                        </div>
                    </div>
                     
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner rounded-lg">
                            <div className="portfolio-item-thumbnail">
                            <img src="/assets/img/howWeWork/GetExp.svg" className='bg-mainColor' alt=""/>
                                <div className="mask"></div>
                            </div>
                            <span className="term">Expert Advice</span>
                            <h3 className="portfolio-item-title">You will get expert Advice from the lawyer</h3>
                            <span className="more-button">&#x2192;</span>
                        </div>
                    </div>
                     
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner rounded-lg">
                            <div className="portfolio-item-thumbnail">
                            <img src="/assets/img/howWeWork/ProfessAna.svg" className='bg-mainColor' alt=""/>
                                <div className="mask"></div>
                            </div>
                            <span className="term">Prof Analyze</span>
                            <h3 className="portfolio-item-title">A professional will analyze your case carefully</h3>
                            <span className="more-button">&#x2192;</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
