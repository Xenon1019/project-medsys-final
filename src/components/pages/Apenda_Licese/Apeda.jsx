import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import apendaImg from "./imgs/APEDA Registration Page Image.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Apeda.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
const points = [
    {
        head: "Business Served",
        icon: bussinessLogo,
    },
    {
        head: "9.6/10 Unfiltered Customer ratings",
        icon: starLogo,
    },
    {
        head: "Satisfaction or Money Back Guarantee",
        icon: smileLogo,
    },
];
const Apeda = () => {
    TabTitle("APEDA Registration - medsysconsultancy.com");

    return (
        <>
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">APEDA Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Get APEDA License within a week with the help of our expert support. Start exporting agriculture products by getting APEDA Registration at the comfort at your place. Enjoy the free consultancy from our experienced business advisors regarding your category of agriculture goods, make online payments and receive the online delivery of your APEDA Certificate.
                        </p>
                    </div>
                    <div className="sm:w-2/3 mx-auto text-lg p-5 text-rose-200">
                        {points.map((p) => (
                            <div className="flex gap-3 py-2">
                                <div>
                                    <img className="h-7 w-7" src={p.icon} alt="" />
                                </div>
                                <div>{p.head}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="px-3 py-9">
                    <form className="mx-auto sm:w-2/3 bg-white p-6 px-6 rounded-md">
                        <div className="flex flex-col text-gray-600 py-2">
                            <label>Full Name</label>
                            <input
                                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col text-gray-600 py-2">
                            <label>Phone Number</label>
                            <input
                                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                                type="number"
                            />
                        </div>
                        <div className="flex flex-col text-gray-600 py-2">
                            <label>E-mail</label>
                            <input
                                className="rounded-md bg-gray-100 mt-2 p-2 focus:bg-gray-200 focus:outline-none"
                                type="e-mail"
                            />
                        </div>
                        <button className="w-3/4 py-2 mt-5 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
                            Request a Callback
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-between items-center px-16 bg-black text-white h-20">
                <div className="text-2xl">
                    Contact us for more information related to License and Registration
                </div>
                <div>
                    <button className="bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600">
                        CALL NOW!
                    </button>
                </div>
            </div>



            <div className="flex bg-[#f6d5dd] h-full w-full">
                <div className="sm:w-1/4 hidden md:block">
                    <div className="flex flex-col sticky top-40 ml-4 my-12">
                        <div className="bg-white rounded-xl p-5">
                            <h2 className="text-3xl text-[#560216] font-bold text-center">
                                Table Of Contents
                            </h2>
                            <hr className="bg-[#560216]" />
                            <Scrollspy
                                items={[
                                    "About",
                                    "Why",
                                    "List",
                                    "What",
                                    "Benefits",
                                    "Objective",
                                    "Functions",
                                    "APEDA",
                                    "Documents",
                                    "FAQs",
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#About"
                                    >
                                        About APEDA Registration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Why"
                                    >
                                        Why Apeda Registration?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#List"
                                    >
                                        List of Products covered under...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#What"
                                    >
                                        What is Importance of Apeda R...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Benefits"
                                    >
                                        Benefits of Apeda Registration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Objective"
                                    >
                                        Objective of Online APEDA...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Functions"
                                    >
                                        Functions of APEDA Authorities
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#APEDA"
                                    >
                                        APEDA Certification Process
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Documents Required for Barco...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#FAQs"
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </Scrollspy>
                        </div>
                        <button className="bg-[#560216] text-white text-center w-3/4 sm:w-1/2 p-2 mx-auto mt-2 rounded-md text-lg hover:bg-green-600">
                            CONTACT US
                        </button>
                    </div>
                </div>
                <div className="bg-[#f6d5dd] h-full sm:w-3/4 px-5 py-4 ">
                    <div className="my-12" id="About">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">About APEDA Registration</h2>
                        <p className="my-2">
                            Agricultural & Processed Food Products Export Development Authority (APEDA) is a Government association founded in 1985 through an act for the Development and Growth of export of scheduled commodities. It furnishes financial assistance, information, guidelines towards the advancement of scheduled products. The products prescribed under the APEDA Act are considered as schedule products and exporters of such scheduled products are compelled to register under APEDA.
                        </p>
                        <div>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">Significance:- </span> It is mandatory for all the agricultural exporters to have an APEDA certificate for carrying out the export of scheduled Agri-products.</p>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">Enables Financial AID:- </span>An APEDA registration is a necessary requirement for the exporters to apply for financial support schemes run by the APEDA.</p>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">Validity:-</span>APEDA registration is a one-time process. The exporter needs to apply for renewal of APEDA certificate after every 5 years.</p>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">APEDA Products:-</span>Organic products, cereals, animal products, processed food, fresh fruits, vegetables, floriculture & seeds are covered under the category of APEDA products.</p>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">Easy Monthly Returns:-</span>The exporters having APEDA registration mandatorily needs to file the monthly export returns. In case of no exports, NIL return needs to be filed.</p>
                            <p><span className="text-[#9D3E55] text-lg font-semibold">Export-Orientation Programmes:-</span>The APEDA registration enables the exporters to participate in the Orientation and training Programmes conducted by APEDA for Export Promotion.</p>
                        </div>
                    </div>


                    {/* <div className='h-full'>
                          <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                      </div> */}

                    <div className="my-12" id="Why">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Why Apeda Registration?
                        </h2>
                        <p>
                            APEDA Registration Is obligatory for every exporter of agriculture commodities. By obtaining Online APEDA Registration, An Exporter Can:
                        </p>
                        <ul className="">
                            <li className="arrow">Obtain agreements on enhancing the packaging and trade of the Scheduled Products to be exported.</li>
                            <li className="arrow">Attend training sessions governed by APEDA in various traits of the industries connected with the Scheduled Products.</li>
                            <li className="arrow">Get enlisted under the Exporters Directory accessible.</li>
                            <li className="arrow">Get brand promotion by advertising and promoting the products with the APEDA registration.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="List">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            List of Products covered under the APEDA Registration
                        </h2>
                        <p>
                            APEDA do export promotion and development of the following below scheduled Agri products:-
                        </p>
                        <img src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">Fruits, Vegetables and their Products.</li>
                            <li className="arrow">Meat and Meat Products.</li>
                            <li className="arrow">Poultry and Poultry Products.</li>
                            <li className="arrow">Dairy Products.</li>
                            <li className="arrow">Confectionery, Biscuits and Bakery Products.</li>
                            <li className="arrow">Honey, Jaggery and Sugar Products.</li>
                            <li className="arrow">Cocoa and its products, chocolates of all kinds.</li>
                            <li className="arrow">Alcoholic and Non-Alcoholic Beverages.</li>
                            <li className="arrow">Cereal and Cereal Products.</li>
                            <li className="arrow">Groundnuts, Peanuts and Walnuts.</li>
                            <li className="arrow">Pickles, Papads and Chutneys.</li>
                            <li className="arrow">Guar Gum.</li>
                            <li className="arrow">Floriculture and Floriculture Products.</li>
                            <li className="arrow">Herbal and Medicinal Plants.</li>
                        </ul>
                        <p>In addition to this, APEDA has been entrusted with the responsibility to monitor Import of sugar.</p>
                    </div>

                    <div className="my-12" id="What">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What is Importance of Apeda Registration?
                        </h2>
                        <p className="my-2">The objective of APEDA is to enhance the growth of export of agricultural products specified under the APEDA Act through financial aid, relevant updates & statistics, formulating standards & implementing them for the development of agricultural products.</p>
                        <p className="my-2">Various agricultural products specified under the APEDA Act are referred to as scheduled products. Find out the complete list of the scheduled agricultural products under APEDA.</p>
                        <p className="my-2">The agricultural exporters mandatorily require an APEDA certificate for export of scheduled agricultural products in order to avail APEDA benefits. Given below are the benefits of getting an APEDA registration:</p>
                        <ul className="">
                            <li className="arrow">APEDA registration is a one-time process that enables the exporter to apply for financial schemes run by APEDA.</li>
                            <li className="arrow">It also enables its members to participate in training programmes conducted to uplift the Industries for scheduled products.</li>
                            <li className="arrow">It enables the export to avail the benefits of various export-promotion schemes run by the government in respect of scheduled products.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Benefits">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of Apeda Registration
                        </h2>
                        <p>
                            On obtaining APEDA Registration online, Agri-exporter can enjoy various benefits as follows:
                        </p>
                        <img src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">APEDA registration is compulsory for the export of scheduled products. Hence, get entry to export agricultural products.</li>
                            <li className="arrow">Businesses get listed on the APEDA Exporter Directory. Potential buyers can reach you for product enquiry.</li>
                            <li className="arrow">APEDA RCMC Registered exporter enjoys the privilege to buy Export Leads from Agri-Exchange Portal.</li>
                            <li className="arrow">Exporters can get the numerous monetary assistance schemes under APEDA.</li>
                            <li className="arrow">It helps the exporters in brand promotion through publicity, packaging improvement, database upgradation and analyses etc.</li>
                            <li className="arrow">Renders approach exporters about the numerous products and countries for export.</li>
                            <li className="arrow">Registered members can contribute to training programs governed by APEDA for various scheduled products and thereby enhance their business.</li>
                        </ul>
                    </div>
                    <div className="my-12" id="Objective">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Objective of Online APEDA Registration
                        </h2>
                        <p className="my-2">The purpose of online APEDA Registration is to facilitate and promote the export of scheduled agriculture products and to fulfill this numerous functions by the APEDA body under the regulation of the central Government.</p>
                        <p className="my-2">Also, the Central government framed the rules and regulation through APEDA body for the productive administration of APEDA Act.</p>
                    </div>
                    <div className="my-12" id="Functions">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Functions of APEDA Authorities
                        </h2>
                        <p>
                            APEDA Authorities are allocated with functions such as:
                        </p>
                        <img src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">Publicity of export-oriented production and growth of the Scheduled products.</li>
                            <li className="arrow">Setting the standards and specifications for the expected products.</li>
                            <li className="arrow">Registration of exporters of the scheduled commodities on payment of required fees.</li>
                            <li className="arrow">Enhancing packaging and marketing of the Scheduled products.</li>
                            <li className="arrow">Carrying out an assessment of products for the purpose of ensuring the quality of such products.</li>
                            <li className="arrow">Growth of industries referring to the scheduled products and undertaking surveys, feasibility studies etc.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="APEDA">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            APEDA Certification Process
                        </h2>

                        <img src={apendaImg} alt="" />
                        <ul className="">
                            <li className="arrow">Upload the required documents & information to our web portal.</li>
                            <li className="arrow">Consult our business advisor regarding your category of scheduled goods.</li>
                            <li className="arrow">Our professional will verify the validity of documents & Information provided.</li>
                            <li className="arrow">On Confirmation, make online payment with different payments modes available.</li>
                            <li className="arrow">Our professional shall Submit the application along with other relevant documents.</li>
                            <li className="arrow">On successful verification, the government body shall issue the APEDA certificate.</li>
                        </ul>
                    </div>
                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required for Barcode Registration
                        </h2>

                        <img src={apendaImg} alt="" />
                        <ul className="">
                            <div className="my-2">
                                <li className="arrow">PAN:-</li>
                                <p>A PAN is an imperative document for all the businesses or firms, it is mandatory to obtain PAN Number for APEDA Registration.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Import Export Code Certificate:-</li>
                                <p>Any person or the business type who intends to import or export goods and services from or to India must require an Import Export Code.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">List of Products:-</li>
                                <p>APEDA do export promotion and development of the scheduled agri products for require APEDA Certificate.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Details of All Directors/Partners/Proprietor:-</li>
                                <p>Documents like details of all directors, partners and proprietors must be submitted in the APEDA Registration application</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Bank Certificate:-</li>
                                <p>It is mandatory to obtain Bank Certificate that is duly approved by the concerned authorities.</p>
                            </div>
                            <div className="my-2">
                                <li className="arrow">Bank Account Statement:-</li>
                                <p>Bank account statement of last 2 months of the firm's Bank account or cancel cheque.</p>
                            </div>


                        </ul>
                    </div>


                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        a. How many people are required to form a private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Minimum 2 people are required to incorporate a private limited company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        b. How much time it will take to form private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        From the date of submission of complete required documents, it will take approximately 14 working days to deliver certificate of incorporation in your hand
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        c. Who can be a director of a company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Any person who attends the age of 18 can be director of the company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        d. Is there any address proof required/mandatory for private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes to incorporate your company latest utility bill along with NOC from property owner in favor of company is required
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        e. How many shareholders can be there in a private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Minimum 2 and Maximum 200 shareholders can be added in the company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        f. How many directors can be there in private ltd company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Minimum 2 Maximum 15 directors can manage the show of a company
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        g. What is a DSC?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        DSC stands for Digital Signature Certificate. It is basically a pen drive containing your signature in a digital form and is password protected.It is mandatorily required to sign the various incorporation applications by directors and shareholders digitally. It is only issued by government authorized agencies.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        h. What are MOA and AOA?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        MOA and AOA are charter documents of the company. It defines the business objectives and rules & regulations of the company. It is drafted by our professionals and delivers to you along with Certificate of incorporation
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        i. Will you provide this service in my town?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes Medsys is an online platform serving all over India no matters wherever you are doing business all you need is internet connection on your mobile or desktop and we are ready to get your job done.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        j. I am into a job? Can I start my own company?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes you can, but do check your employment agreement before starting, it must be having a proper authorization of it
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        k. Still Confused?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Apeda