import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from "../../Utillity";
import "./apeda.css";
import businessLogo from "./business logo.jpeg";
import smileLogo from "./smile logo.jpeg";
import starLogo from "./star logo.jpeg";
import apedaReg from "./APEDA Registration Page Image.png";

function numberToLetter(num) {
    let ascii = "a".charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}

function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div
            className={
                "accordion__item" + (activated ? " accordion__item--active" : "")
            }
        >
            <button
                className="accordion__btn"
                onClick={() => {
                    toggle(!activated);
                }}
            >
                <span className="accordion__caption">

                    {numberToLetter(props.number) + ". " + props.ques}
                </span>
                <span className="accordion__icon">
                    <i className="fa fa-plus"></i>
                </span>
            </button>

            <div className="accordion__content">
                <p>{props.answer}</p>
            </div>
        </div>
    );
}

function Header() {
    return (
        <>
            <div
                className="application"
                style={{
                    display: "flex",
                    marginTop: "0rem",
                }}
            >
                <div className="header-left-content">
                    <h1>APEDA Registration</h1> <br />
                    <p>
                        Get APEDA License within a week with the help of our expert support.
                        Start exporting agriculture products by getting APEDA Registration
                        at the comfort at your place. Enjoy the free consultancy from our
                        experienced business advisors regarding your category of agriculture
                        goods, make online payments and receive the online delivery of your
                        APEDA Certificate.
                    </p>
                    <br />
                    <br />
                    <ul>
                        <li>

                            <img src={businessLogo} alt="" /> <b>Business Served</b>
                        </li>
                        <li>

                            <img src={starLogo} alt="" />
                            <b>9.6/10 Unfiltered Customer ratings</b>
                        </li>
                        <li>

                            <img src={smileLogo} alt="" />
                            <b>Satisfaction or Money Back Guarntee</b>
                        </li>
                    </ul>
                </div>

                <div className="header-right-content">
                    <form action="">
                        <input type="text" name="" placeholder="Full Name" required />
                        <br />
                        <input type="email" name="" placeholder="Email ID" required />
                        <br />
                        <input type="tel" name="" placeholder="Phone No." required /> <br />
                        <button type="submit">

                            <a href="#">Request a Callback</a>
                        </button>
                    </form>
                </div>
            </div>

            <div className="top-footer">
                <p>
                    Contact us for more information related to License and Registration
                </p>
                <button type="submit">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>
            </div>
        </>
    );
}

export default function ApedaLicense() {
    TabTitle("Apeda Registration - medsysconsultancy.com");

    return (
        <>
            <Header />

            <section className="main-content">
                <div className="left" id="lefty">
                    <div>
                        <h1>Table Of Contents</h1>
                        <hr />
                        <Scrollspy currentClassName='content-scroll-view'
                            items={[
                                'content-overview',
                                'content-why',
                                'content-list',
                                'content-importance',
                                'content-benefits',
                                'content-objective',
                                'content-functions',
                                'content-apeda-certification',
                                'content-docs',
                                'content-faq',
                            ]}>
                            <li>
                                <a href="#necessity">About APEDA Registration</a>
                            </li>
                            <li>

                                <a href="#benefits">Why Apeda Registration?</a>
                            </li>
                            <li>

                                <a href="#advantages">List of Products covered under...</a>
                            </li>
                            <li>

                                <a href="#services">What is Importance of Apeda Reg...</a>
                            </li>
                            <li>

                                <a href="#procedure">Benefits of Apeda Registration</a>
                            </li>
                            <li>

                                <a href="#obj">Objective of Online APEDA...</a>
                            </li>
                            <li>

                                <a href="#fun">Functions of APEDA Authorities</a>
                            </li>
                            <li>

                                <a href="#cert">APEDA Certification Process</a>
                            </li>
                            <li>

                                <a href="#doc">Documents Required for Barco...</a>
                            </li>
                            <li>
                                <a href="#faq">FAQs</a>
                            </li>
                        </Scrollspy>
                        <br />
                    </div>
                    <button type="submit" id="contact">
                        <a href="#contactus">
                            <b style={{ color: 'white' }}> CONTACT US </b>
                        </a>
                    </button>
                </div>

                <div className="right1" id="necessity">
                    <div className="necessity" id="content-overview">
                        <h1 id="overview">About APEDA Registration</h1>
                        <br />
                        <p className="gap">
                            Agricultural & Processed Food Products Export Development
                            Authority (APEDA) is a Government association founded in 1985
                            through an act for the Development and Growth of export of
                            scheduled commodities. It furnishes financial assistance,
                            information, guidelines towards the advancement of scheduled
                            products. The products prescribed under the APEDA Act are
                            considered as schedule products and exporters of such scheduled
                            products are compelled to register under APEDA.
                        </p>
                        <br />
                        <p>

                            <b> Significance:-</b> It is mandatory for all the agricultural
                            exporters to have an APEDA certificate for carrying out the export
                            of scheduled Agri-products.
                        </p>
                        <p>
                            <b> Enables Financial AID:-</b> An APEDA registration is a
                            necessary requirement for the exporters to apply for financial
                            support schemes run by the APEDA.
                        </p>
                        <p>
                            <b> Validity:-</b> APEDA registration is a one-time process. The
                            exporter needs to apply for renewal of APEDA certificate after
                            every 5 years.
                        </p>
                        <p>
                            <b> APEDA Products:-</b> Organic products, cereals, animal
                            products, processed food, fresh fruits, vegetables, floriculture &
                            seeds are covered under the category of APEDA products.
                        </p>
                        <p>
                            <b> Easy Monthly Returns:-</b> The exporters having APEDA
                            registration mandatorily needs to file the monthly export returns.
                            In case of no exports, NIL return needs to be filed.
                        </p>
                        <p id="benefits">
                            <b> Export-Orientation Programmes:-</b> The APEDA registration
                            enables the exporters to participate in the Orientation and
                            training Programmes conducted by APEDA for Export Promotion.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id="content-why">
                        <h1>Why Apeda Registration?</h1>
                        <br />
                        <p>
                            APEDA Registration Is obligatory for every exporter of agriculture
                            commodities. By obtaining Online APEDA Registration, An Exporter
                            Can:
                        </p>
                        <ul>
                            <li>
                                Obtain agreements on enhancing the packaging and trade of the
                                Scheduled Products to be exported.
                            </li>
                            <li>
                                Attend training sessions governed by APEDA in various traits of
                                the industries connected with the Scheduled Products.
                            </li>
                            <li>Get enlisted under the Exporters Directory accessible.</li>
                            <li id="advantages">
                                Get brand promotion by advertising and promoting the products
                                with the APEDA registration.
                            </li>
                        </ul>
                    </div>
                    <div className="ICI"
                        id="content-list">
                        <h1 style={{ paddingBottom: '22px', paddingTop: '38px' }}>
                            List of Products covered under the APEDA Registration
                        </h1>
                        <br />
                        <p>
                            APEDA do export promotion and development of the following below
                            scheduled Agri products:-
                        </p>
                        <img
                            src={apedaReg}
                            alt=""
                            style={{
                                paddingLeft: "200px",
                                paddingTop: "28px",
                                height: "350px",
                            }}
                        />
                        <ul>
                            <li>Fruits, Vegetables and their Products.</li>
                            <li>Meat and Meat Products.</li>
                            <li>Poultry and Poultry Products.</li>
                            <li>Dairy Products.</li>
                            <li>Confectionery, Biscuits and Bakery Products.</li>
                            <li>Honey, Jaggery and Sugar Products.</li>
                            <li>Cocoa and its products, chocolates of all kinds.</li>
                            <li>Alcoholic and Non-Alcoholic Beverages.</li>
                            <li>Cereal and Cereal Products.</li>
                            <li>Groundnuts, Peanuts and Walnuts.</li>
                            <li>Pickles, Papads and Chutneys.</li>
                            <li>Guar Gum.</li>
                            <li>Floriculture and Floriculture Products.</li>
                            <li>Herbal and Medicinal Plants.</li>
                        </ul>
                        <p id="services">
                            In addition to this, APEDA has been entrusted with the
                            responsibility to monitor Import of sugar.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id="content-importance">
                        <h1>What is Importance of Apeda Registration?</h1>
                        <br />
                        <p>
                            The objective of APEDA is to enhance the growth of export of
                            agricultural products specified under the APEDA Act through
                            financial aid, relevant updates & statistics, formulating
                            standards & implementing them for the development of agricultural
                            products.
                        </p>
                        <br />
                        <p>
                            Various agricultural products specified under the APEDA Act are
                            referred to as scheduled products. Find out the complete list of
                            the scheduled agricultural products under APEDA.
                        </p>
                        <br />
                        <p>
                            The agricultural exporters mandatorily require an APEDA
                            certificate for export of scheduled agricultural products in order
                            to avail APEDA benefits. Given below are the benefits of getting
                            an APEDA registration:
                        </p>
                        <ul>
                            <li>
                                APEDA registration is a one-time process that enables the
                                exporter to apply for financial schemes run by APEDA.
                            </li>
                            <li>
                                It also enables its members to participate in training
                                programmes conducted to uplift the Industries for scheduled
                                products.
                            </li>
                            <li id="procedure">
                                It enables the export to avail the benefits of various
                                export-promotion schemes run by the government in respect of
                                scheduled products.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id="content-benefits">
                        <h1>Benefits of Apeda Registration</h1>
                        <br />
                        <p>
                            On obtaining APEDA Registration online, Agri-exporter can enjoy
                            various benefits as follows:
                        </p>
                        <ul>
                            <li>

                                APEDA registration is compulsory for the export of scheduled
                                products. Hence, get entry to export agricultural products.
                            </li>
                            <li>

                                Businesses get listed on the APEDA Exporter Directory. Potential
                                buyers can reach you for product enquiry.
                            </li>
                            <li>

                                APEDA RCMC Registered exporter enjoys the privilege to buy
                                Export Leads from Agri-Exchange Portal.
                            </li>
                            <li>

                                Exporters can get the numerous monetary assistance schemes under
                                APEDA.
                            </li>
                            <li>

                                It helps the exporters in brand promotion through publicity,
                                packaging improvement, database upgradation and analyses etc.
                            </li>
                            <li>

                                Renders approach exporters about the numerous products and
                                countries for export.
                            </li>
                            <li id="obj">

                                Registered members can contribute to training programs governed
                                by APEDA for various scheduled products and thereby enhance
                                their business.
                            </li>
                        </ul>
                    </div>

                    <br />
                    <br />
                    <div className="ICI" id='content-objective'>
                        <h1>Objective of Online APEDA Registration</h1>
                        <br />
                        <p>
                            The purpose of online APEDA Registration is to facilitate and
                            promote the export of scheduled agriculture products and to
                            fulfill this numerous functions by the APEDA body under the
                            regulation of the central Government.
                        </p>
                        <br />
                        <p id="fun">
                            Also, the Central government framed the rules and regulation
                            through APEDA body for the productive administration of APEDA Act.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id="content-functions">
                        <h1>Functions of APEDA Authorities</h1>
                        <br />
                        <p>APEDA Authorities are allocated with functions such as:</p>
                        <ul>
                            <li>
                                Publicity of export-oriented production and growth of the
                                Scheduled products.
                            </li>
                            <li>
                                Setting the standards and specifications for the expected
                                products.
                            </li>
                            <li>
                                Registration of exporters of the scheduled commodities on
                                payment of required fees.
                            </li>
                            <li>
                                Enhancing packaging and marketing of the Scheduled products.
                            </li>
                            <li>
                                Carrying out an assessment of products for the purpose of
                                ensuring the quality of such products.
                            </li>
                            <li id="cert">
                                Growth of industries referring to the scheduled products and
                                undertaking surveys, feasibility studies etc.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id="content-apeda-certification">
                        <h1>APEDA Certification Process</h1>
                        <br />
                        <ul>
                            <li>
                                Upload the required documents & information to our web portal.
                            </li>
                            <li>
                                Consult our business advisor regarding your category of
                                scheduled goods.
                            </li>
                            <li>
                                Our professional will verify the validity of documents &
                                Information provided.
                            </li>
                            <li>
                                On Confirmation, make online payment with different payments
                                modes available.
                            </li>
                            <li>
                                Our professional shall Submit the application along with other
                                relevant documents.
                            </li>
                            <li id="doc">
                                On successful verification, the government body shall issue the
                                APEDA certificate.
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className="ICI" id='content-docs'>
                        <h1>Documents Required for Barcode Registration</h1>
                        <br />
                        <ul>
                            <li>

                                <b>PAN:-</b>
                            </li>
                            <p>
                                A PAN is an imperative document for all the businesses or firms,
                                it is mandatory to obtain PAN Number for APEDA Registration.
                            </p>
                            <li>

                                <b>Import Export Code Certificate:-</b>
                            </li>
                            <p>
                                Any person or the business type who intends to import or export
                                goods and services from or to India must require an Import
                                Export Code.
                            </p>
                            <li>
                                <b>List of Products:-</b>
                            </li>
                            <p>
                                APEDA do export promotion and development of the scheduled agri
                                products for require APEDA Certificate.
                            </p>
                            <li>Details of All Directors/Partners/Proprietor:-</li>
                            <p>
                                Documents like details of all directors, partners and
                                proprietors must be submitted in the APEDA Registration
                                application
                            </p>
                            <li>
                                <b>Bank Certificate:-</b>
                            </li>
                            <p>
                                It is mandatory to obtain Bank Certificate that is duly approved
                                by the concerned authorities.
                            </p>
                            <li>
                                <b>Bank Account Statement:-</b>
                            </li>
                            <p id="faq">
                                Bank account statement of last 2 months of the firm's Bank
                                account or cancel cheque.
                            </p>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className="faq" id='content-faq'>
                        <h1>FAQs</h1>
                        <br />
                        <br />
                        <br />

                        <FAQItem number={0} ques={`How many people are required to form a private ltd company?`}
                            answer={`Minimum 2 people are required to incorporate a private limited company`} />
                        <FAQItem number={1} ques={`How much time it will take to form private ltd company?`}
                            answer={`From the date of submission of complete required documents, it will take approximately 14 working days to deliver certificate of incorporation in your hand`} />
                        <FAQItem number={2} ques={`Who can be a director of a company?`}
                            answer={`Any person who attends the age of 18 can be director of the company`} />
                        <FAQItem number={3} ques={`Is there any address proof required/mandatory for private ltd company?`}
                            answer={`Yes to incorporate your company latest utility bill along with NOC from property owner in favor of company is required`} />
                        <FAQItem number={4} ques={`How many shareholders can be there in a private ltd company?`}
                            answer={`Minimum 2 and Maximum 200 shareholders can be added in the company`} />
                        <FAQItem number={5} ques={`How many directors can be there in private ltd company?`}
                            answer={`Minimum 2 Maximum 15 directors can manage the show of a company`} />
                        <FAQItem number={6} ques={`What is a DSC?`}
                            answer={`
              DSC stands for Digital Signature Certificate. It is basically a pen drive containing your signature in a digital form and is 
              password protected.It is mandatorily required to sign the various incorporation applications by directors and 
              shareholders digitally. It is only issued by government authorized agencies.`} />
                        <FAQItem number={7} ques={`What are MOA and AOA?`}
                            answer={`MOA and AOA are charter documents of the company. It defines the business objectives and rules & regulations of the company. It is drafted by our professionals and delivers to you along with Certificate of incorporation`} />
                        <FAQItem number={8} ques={`Will you provide this service in my town?`}
                            answer={`Yes Medsys is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done.`} />
                        <FAQItem number={9} ques={`I am into a job? Can I start my own company?`}
                            answer={`Yes you can, but do check your employment agreement before starting, it must be having a proper authorization of it`} />
                        <FAQItem number={10} ques={`Still Confused?`}
                            answer={`solve all your
              doubts.
              Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />


                    </div>
                </div>
            </section>
        </>
    );
}
