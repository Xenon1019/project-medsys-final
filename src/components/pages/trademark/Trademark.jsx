import React from "react";
import bussinessLogo from "../imgs/business logo.jpeg";
import starLogo from "../imgs/star logo.jpeg";
import smileLogo from "../imgs/smile logo.jpeg";
import bg from "../imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import ContactForm from "../../ContactForm";
import { RelatedRead } from "../common";
import "./trademark.css";

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

export default function Trademark() {
    TabTitle("Trademark Registration - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Trademark Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            A trademark is a unique identity that makes your product, service or enterprise stand out from the rest.
                            If you have a unique idea or logo, a trademark can protect it from illegal use permanently.
                            We have a dedicated team and a completely online process for registering your trademark anywhere in
                            India and also overseas!
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
            <div className="flex justify-center items-center gap-11 px-4 bg-black text-white h-20">
                <div className="text-xl my-auto">
                    Contact us to know more about how we can help you with
                    Trademark Registration
                </div>

                <button className="bg-[#560216] text-white w-1/2 my-auto h-1/2 sm:w-1/6 rounded-md text-lg hover:bg-green-600">
                    <a href="tel:+91 70204 38881">Call Now!</a>
                </button>

            </div>

            <div className="flex  h-full w-full">
                <div className="sm:w-1/4 hidden md:block">
                    <div className="flex flex-col sticky top-40 ml-4 my-12 p-9">
                        <div className="bg-white rounded-xl p-5">
                            <h2 className="text-2xl text-[#560216] font-bold text-center">
                                Table Of Contents
                            </h2>
                            <hr className="bg-[#560216]" />
                            <Scrollspy
                                items={[
                                    "Overview",
                                    "Register",
                                    "Trademark",
                                    "Classes",
                                    "Howto",
                                    "Objection",
                                    "Opposition",
                                    "Documents",
                                    "FAQs",
                                ]}
                                className="flex flex-col p-2 gap-3 text-center"
                                currentClassName="content-scroll-view"
                            >
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Overview"
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Register"
                                    >
                                        What can you register?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Trademark"
                                    >
                                        What is Trademark
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Classes"
                                    >
                                        Trademark Classes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Howto"
                                    >
                                        How to Register
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Objection"
                                    >
                                        Trademark Objection
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Opposition"
                                    >
                                        Trademark Opposition
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Documents"
                                    >
                                        Documents Required
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
                    </div>
                </div>
                <div className=" h-full sm:w-3/4 px-5 sm:px-9 py-2">
                    <div className="my-12" id="Overview">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">Overview</h2>
                        <p className="my-2">
                            A trademark can be defined as the unique identity that makes your company, product,
                            or service stand out from the rest. A registered trademark is your business’s intellectual
                            property/ intangible asset. It protects the investment made into creating trust and loyalty
                            among your customers.
                        </p>
                        <p className="">
                            The registration provides the right to sue against others who try to copy your trademark and
                            prevents others from using a similar trademark to the one registered by you
                        </p>
                        <iframe className='aspect-video w-2/3 my-4 mx-auto' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div>

                    <div className="my-12" id="Register">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            What Can You Register As a Trademark?
                        </h2>
                        <p className="my-3">
                            Many aspects of your brand image can be registered as a trademark. The aspect you need to consider is which aspect of your brand stands out to your customers. Pick that aspect(s) for
                            registering.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            1. Name
                        </h3>
                        <ul>
                            <li>
                                <p className="arrow">
                                    <b className="text-[#9d3e55] font-bold mr-2">
                                        a. Product Name:
                                    </b>
                                    You can register a particular product’s name as a trademark. Apple’s
                                    iPod is a product name trademark.
                                </p>
                            </li>
                            <li>
                                <p className="arrow">
                                    <b className="text-[#9d3e55] font-bold mr-2">
                                        b. Business Name:
                                    </b>
                                    Registering a company name as a trademark is the most common route
                                    businesses take. Ex: Bajaj.
                                </p>
                            </li>
                            <li>
                                <p className="arrow">
                                    <b className="text-[#9d3e55] font-bold mr-2">
                                        c. Person’s Name/Surname:
                                    </b>
                                    If your name plays an important part in generating revenue,
                                    then you can even trademark your name! Ex: Shah Rukh Khan has trademarked his name.
                                </p>
                            </li>
                            <li>
                                <p className="arrow">
                                    <b className="text-[#9d3e55] font-bold mr-2">
                                        d. Abbreviations:
                                    </b>
                                    Abbreviations of a company or brand name can also be a trademark. Ex:
                                    BMW.
                                </p>
                            </li>
                        </ul>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            2. Logo/Symbol
                        </h3>
                        <p className="my-3">
                            It is highly recommended to trademark a logo because it visually represents your brand. Your
                            customers can recollect a logo faster than a name. A great example of a logo trademark is the
                            ‘swoosh’ of Nike.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            3. Tagline
                        </h3>
                        <p className="my-3">
                            If you have a tagline for your brand, you can go ahead and trademark that as well. A tagline
                            tells your customers what you stand for as a business. For example, KFC’s ‘It's finger lickin'
                            good’.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            4. Other Options
                        </h3>
                        <ul className="ml-8">
                            <li className="arrow">
                                <b className="text-[#9d3e55] font-bold mr-2">
                                    a. Colour Mark:
                                </b>
                                You can trademark a colour or a combination of colours. (Ex: Cadbury has
                                trademarked the colour royal blue)
                            </li>
                            <li className="arrow">
                                <b className="text-[#9d3e55] font-bold mr-2">
                                    b. Sound Mark:
                                </b>
                                Musical notes or sounds can be trademarked if we can prove that it's
                                distinctive. Nokia has trademarked its tune.
                            </li>
                            <li className="arrow">
                                <b className="text-[#9d3e55] font-bold mr-2">
                                    c. Scent Mark:
                                </b>
                                Even scents can be trademarked.
                            </li>
                        </ul>
                        <RelatedRead>
                            Related Read:How To Register A Company In India: A Step By Step Guide
                        </RelatedRead>
                    </div>

                    {/* <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div> */}

                    <div className="my-12" id="Trademark">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Why Is Trademark Registration Important?
                        </h2>
                        <p>
                            Trademark registration is important and necessary for a business because:
                        </p>
                        <ul>
                            <li className="arrow">It showcases your unique identity</li>
                            <li className="arrow">It helps you build trust and loyalty among your customers</li>
                            <li className="arrow"> It offers legal protection for your brand’s identity</li>
                            <li className="arrow">It is an asset in itself</li>
                            <li className="arrow">It prevents unauthorized usage of your brand’s identity.</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Classes">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Trademark Classes
                        </h2>
                        <p className="my-3">
                            here are 45 trademark classes and all the goods and services are categorised across these
                            classes. You need to be very careful while picking the classes as it will determine the validity
                            of your trademark for your business’ products/services. If your business operates across
                            different goods/services that fall under different classes, you have to ensure that you apply
                            for the trademark under all the applicable classes.
                        </p>
                        <p className="my-3">
                            Some of the popular trademark classes in India are:
                        </p>
                        <ul>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold mr-2">Class 9:</b> which includes computer software and electronics,</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold mr-2">Class 25:</b> which includes clothing,</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold mr-2">Class 35:</b> which includes business management and advertising, and</li>
                            <li className="arrow"><b className="text-[#9d3e55] font-bold mr-2">Class 41:</b> which includes education and entertainment.</li>
                        </ul>
                        <p className="my-3">If you are operating within these trademark classes, the competition for a trademark might be
                            higher. However, that shouldn’t matter as long as your mark is unique.</p>
                    </div>

                    <div className="my-12" id="Howto">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            How to Register a Trademark
                        </h2>
                        <p className="my-3">
                            The process of trademark registration online is more complicated than it appears. It involves a
                            number of processes and government follow-up. Vakilsearch has made it easier for you by breaking
                            it down into three parts and doing the majority of the work. Register your trademark today to
                            protect your company's logo, slogan, and brand.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Step 1: Trademark Search
                        </h3>
                        <p className="my-3">
                            Once you give us the basic information about what you want to trademark and the industry you
                            operate in, our experts will do a thorough search across the trademark database. This is to
                            check whether the mark you want to register is available or not.
                        </p>
                        <p className="my-3">
                            Once you decide on an available trademark, we move to step 2.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Step 2: Class Selection and Document Collection
                        </h3>
                        <p className="my-3">
                            The next task is to select the appropriate class(es) for your business. You need not worry too
                            much though. Our experts will guide you in selecting the right classes to cover all aspects of
                            your business. Simultaneously, you can start uploading all the required documents (list given
                            below) for trademark registration in your dashboard.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Step 3: Trademark Application Filing
                        </h3>
                        <p className="my-3">
                            Once you upload all the documents, our team will proceed to verify them. Then the trademark
                            application form will be filled on your behalf and submitted along with the documents. Our team
                            will ensure that your application is accurate and error-free.
                        </p>
                        <p className="my-3">
                            We will keep you updated throughout the process and watch out for any notifications from the
                            Trademark Registry until the registration is complete.
                        </p>
                        <h3 className="text-lg text-[#9d3e55] font-extrabold my-7">
                            Congratulations! You can now start using the symbol ™ as the application has been submitted!
                        </h3>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Step 4: Trademark Objection (in some cases)
                        </h3>
                        <p className="my-3">
                            Sometimes the examiner might have some questions about your application. This is sent to you as
                            a trademark objection notice and you need to respond to it within 30 days. Our experts can craft
                            a strong objection response and guide you in submitting the right documents and proofs.
                        </p>
                        <h3 className="text-xl text-[#9d3e55] font-bold my-4">
                            Step 5: Trademark Opposition (in some cases)
                        </h3>
                        <p className="my-3">
                            There is also a chance for a third party to oppose your application. In that case, you have to
                            submit a counter-statement to the Registrar within 2 months stating why the opposition isn’t
                            valid. Based on your response the Registrar may either dismiss the opposition or call for a
                            hearing.
                        </p>
                    </div>

                    <div className="my-12" id="Objection">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Trademark Objections
                        </h2>
                        <p className="my-3">
                            In some cases, the trademark examiner might see certain problems or issues with the registration
                            of your trademark. These issues can be either the filing of an incorrect trademark form,
                            incorrect name/details, the usage of deceptive or offensive terms, insufficient information on
                            goods or services, or the existence of an identical or deceptively similar mark.
                        </p>
                        <p className="my-3">
                            When an objection is raised, the status on the register will show as ‘Objected’, following which
                            an expertly drafted response will need to be filed after an analysis of the objection itself and
                            with any supporting documents and proofs. Objection response is your opportunity to strengthen
                            the claim over your mark and create urgency.
                        </p>
                        <p className="my-3">
                            If the response is accepted, the application will be processed further for registration and
                            advertisement in the Trademark Journal. If it is not accepted, or if there are additional
                            clarifications sought by the examiner, there could be a trademark hearing scheduled and this
                            will be communicated to you by a notice.
                        </p>
                        <p className="my-3">
                            The process typically takes 2-4 months from when the objection is first raised. Once completed,
                            the chances for approval, while not guaranteed, are much higher.
                        </p>
                    </div>

                    <div className="my-12" id="Compliances">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Trademark Opposition
                        </h2>
                        <p className="my-3">
                            On the other hand, A trademark opposition is a legal proceeding in which one party attempts to
                            put a stop to a trademark application from being granted. A trademark opposition is filed by
                            third parties who feel your trademark could in some way impact them or their own trademark, in
                            writing, in the form of a notice, with the trademark examiner. If the examiner sees any merit to
                            the opposition, they are to forward the notice to the applicant, who is required to send in a
                            counter statement to the Registrar within 2 months.
                        </p>
                        <p className="my-3">
                            If the Registrar feels the counter statement addresses the opposition substantially, they may
                            dismiss the opposition. Alternatively, if the registrar feels there is more to be weighed, they
                            may call for a hearing with both parties appearing before them and presenting their cases. After
                            the hearing, the Registrar will rule on the validity of either the application or the
                            opposition. This ruling can be appealed before the Intellectual Property Appellate Board within
                            3 months of it being made public.
                        </p>
                    </div>

                    <div className="my-12" id="Documents">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Documents Required for Trademark Registration
                        </h2>
                        <p className="my-3">
                            Initially, you have to provide us with the following details:
                        </p>
                        <ul>
                            <li className="arrow">Applicant’s name</li>
                            <li className="arrow">Business type</li>
                            <li className="arrow">Business objectives</li>
                            <li className="arrow">Brand/logo/slogan name</li>
                            <li className="arrow">Registration address</li>
                            <li className="arrow">The documents required are:</li>
                            <li className="arrow">Signed Form-48</li>
                            <li className="arrow">Identification proof of the signatory</li>
                            <li className="arrow">Address proof of the signatory</li>
                            <li className="arrow">Business proof (depends on the type of business)</li>
                            <li className="arrow">Udyog Aadhar/MSME registration certificate (optional)</li>
                        </ul>
                    </div>

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is a trademark
                                        class?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    The Trademark
                                    Registry has classified goods and services under 45 classes. Each class lists a
                                    host of goods/services and depending on those you are offering, you need to
                                    mention the class(es) on your trademark application. The trademark would be
                                    registered and protected under those classes only.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What trademark
                                        applications are commonly rejected?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    If your
                                    trademark is similar to an existing application, would hurt religious
                                    sentiments, contains geographical names, or common words. It would also be
                                    rejected if it is likely to confuse.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        When can I use the ™
                                        symbol?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    As soon as you
                                    file the application and receive an acknowledgement, you can use the ™ symbol.
                                    Once the registration process is complete, you can use the ® symbol.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How can I run a
                                        trademark search??
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You can run a
                                    simple trademark search easily by clicking here. However, if you are serious
                                    about getting your trademark registered, it is advised to get a professional to
                                    do thorough trademark research.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What if my trademark
                                        is taken, but under a different class?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    If your brand
                                    name has already been registered, but under a different class, you're still in
                                    luck. Unless the brand is too well known (like McDonald’s or Fiat), your
                                    application is likely to be approved.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What if someone has a
                                        similar word trademarked?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    You can't get
                                    the word, but all is not lost. You could instead design a unique logo for your.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Do you guarantee
                                        approval of my trademark?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    It depends
                                    entirely on the government's judgement. But if it is unique, it is highly likely
                                    that it will be granted.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Should I file the
                                        trademark in my own name?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Many start-up
                                    founders register it in their own names, while large businesses would prefer to
                                    do so in the name of the company. This is because the future of a start-up is
                                    always in doubt. If owned by the founder, the trademark would be valid
                                    regardless of the state of the company. A trademark license agreement is,
                                    however, needed in this case.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How long does it take to get my trademark?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    It can take
                                    anywhere between 6 months to 1 year for your trademark to be approved. However,
                                    we can apply and start using the ™ symbol within few days if we can get all the
                                    details and documents at the earliest.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>Still Confused?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Speak to our experts who shall solve all your doubts. Call
                                        us at +91 70204 38881 or Mail us at
                                        medsysconsultancy@gmail.com
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

            </div>
            <ContactForm />
        </>
    );
};