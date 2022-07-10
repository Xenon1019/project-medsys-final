import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './trademark.css'
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';

function numberToLetter(num) {
    let ascii = 'a'.charCodeAt(0) + num;
    return String.fromCharCode(ascii);
}

function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div className={'accordion__item' + (activated ? ' accordion__item--active' : '')}>
            <button className="accordion__btn"
                onClick={() => {
                    toggle(!activated);
                }}>
                <span className="accordion__caption" > {numberToLetter(props.number) + '. ' + props.ques}</span>
                <span className="accordion__icon"><i className="fa fa-plus"></i></span>
            </button>

            <div className="accordion__content">
                <p >{props.answer}</p>
            </div>
        </div>);
}

function Header() {
    return (<>
        <div className="application" style={
            {
                display: 'flex',
                marginTop: '0rem',
            }}>
            <div className="header-left-content">
                <h1>Trademark Registration</h1> <br />
                <p>A trademark is a unique identity that makes your product, service or enterprise stand out from the rest.
                    If you have a unique idea or logo, a trademark can protect it from illegal use permanently.</p>


                <p>We have a dedicated team and a completely online process for registering your trademark anywhere in
                    India and also overseas!</p><br /><br />

                <br />
                <ul>
                    <li> <img src={businessLogo} alt="" /> <b>Business Served</b></li>
                    <li> <img src={starLogo} alt="" /> <b>9.6/10 Unfiltered Customer ratings</b></li>
                    <li> <img src={smileLogo} alt="" /> <b>Satisfaction or Money Back Guarntee</b></li>
                </ul>
            </div>

            <div className="header-right-content">
                <form action="">
                    <input type="text" name="" placeholder="Full Name" required /> <br />
                    <input type="email" name="" placeholder="Email ID" required /> <br />
                    <input type="tel" name="" placeholder="Phone No." required /> <br />
                    <button type="submit"> <a href="#">Request a Callback</a></button>
                </form>
            </div>
        </div>

        <div className="top-footer">
            <p>Contact us to know more about Society Registration</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>

    </>);

}

export default function Trademark() {
    TabTitle('Trademark Registration - medsysconsultancy.com');

    return (<>
        <Header />

        <section className="main-content">
            <div className="left" id="lefty" style={{ maxHeight: 'fit-content', height: 'fit-content' }}>
                <div id="activeTableContentaa" style={{ maxHeight: 'fit-content', height: 'fit-content' }}>
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view"
                        items={[
                            'content-overview',
                            'content-whatCan',
                            'content-why',
                            'eligibility',
                            'content-howto',
                            'content-objection',
                            'content-opposition',
                            'content-docs',
                            'content-faq',
                        ]}>
                        <li> <a className="tabanchor" href="#overview">Overview</a></li>
                        <li> <a className="tabanchor" href="#content1">what can you Register? </a></li>
                        <li> <a className="tabanchor" href="#laws">Why Trademark </a></li>
                        <li> <a className="tabanchor" href="#eligibility">Trademark Classes</a></li>
                        <li> <a className="tabanchor" href="#attachment">How to Register </a>
                        </li>
                        <li> <a className="tabanchor" href="#checklist">Trademark Objection </a>
                        </li>
                        <li> <a className="tabanchor" href="#opposition">Trademark Opposition</a></li>
                        <li> <a className="tabanchor" href="#document">Document Required</a></li>
                        <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />

                </div>
                <button type="submit" id="contact" style={{ marginTop: 'auto', marginLeft: 'auto' }}><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>
            </div>
            <br /><br />
            <div className="right1 necessity" id="Overview">
                <div className="necessity" id="content-overview">
                    <h1 id="overview">Overview</h1>
                    <br />
                    <p>A trademark can be defined as the unique identity that makes your company, product,
                        or service stand out from the rest. A registered trademark is your business’s intellectual
                        property intangible asset. It protects the investment made into creating trust and loyalty
                        among your customers.</p>
                    <br />

                    <p> The registration provides the right to sue against others who try to copy your trademark and
                        prevents others from using a similar trademark to the one registered by you</p>.
                    <br />


                </div><br />
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">

                </iframe>
                <div id="content1"></div>
                <br /><br /><br />

                <div className="ICI necessity" id="content-whatCan">
                    <h1>What Can You Register As a Trademark?</h1>
                    <br />
                    <p> Many aspects of your brand image can be registered as a trademark. The aspect you need to
                        consider is which aspect of your brand stands out to your customers. Pick that aspect(s) for
                        registering.</p><br />

                    <h3> 1. Name</h3><br />
                    <p>
                        <b> a. Product Name:</b> You can register a particular product’s name as a trademark. Apple’s
                        iPod is a product name trademark.
                    </p><br />
                    <p>
                        <b> b. Business Name:</b> Registering a company name as a trademark is the most common route
                        businesses take. Ex: Bajaj.
                    </p><br />
                    <p>
                        <b> c. Person’s Name/Surname:</b> If your name plays an important part in generating revenue,
                        then you can even trademark your name! Ex: Shah Rukh Khan has trademarked his name.
                    </p><br />
                    <p>
                        <b> d. Abbreviations:</b> Abbreviations of a company or brand name can also be a trademark. Ex:
                        BMW.
                    </p><br />
                    <h3> 2. Logo/Symbol</h3><br />
                    <p>
                        It is highly recommended to trademark a logo because it visually represents your brand. Your
                        customers can recollect a logo faster than a name. A great example of a logo trademark is the
                        ‘swoosh’ of Nike.
                    </p><br />
                    <h3> 3. Tagline</h3><br />
                    <p>
                        If you have a tagline for your brand, you can go ahead and trademark that as well. A tagline
                        tells your customers what you stand for as a business. For example, KFC’s ‘It's finger lickin'
                        good’.
                    </p><br />
                    <h3>4. Other Options</h3><br />
                    <p>
                        <b> a. Colour Mark:</b> You can trademark a colour or a combination of colours. (Ex: Cadbury has
                        trademarked the colour royal blue)
                    </p><br />
                    <p>
                        <b>b. Sound Mark:</b> Musical notes or sounds can be trademarked if we can prove that it's
                        distinctive. Nokia has trademarked its tune.
                    </p><br />
                    <p> <b> c. Scent Mark:</b> Even scents can be trademarked.</p>
                </div>
                <br /><br />
                <div className="plc">
                    <p>Related Read:How To Register A Company In India: A Step By Step Guide</p>
                    <button type="submit" className="button">
                        <a href="">CLICK HERE</a></button>
                </div>
                <p id="laws"></p>
                <br /><br />
                <div className="ICI" id="content-why">
                    <h1>Why Is Trademark Registration Important?</h1>
                    <br />
                    <p> Trademark registration is important and necessary for a business because:</p>
                    <br />
                    <ul>

                        <li>It showcases your unique identity</li><br />
                        <li>It helps you build trust and loyalty among your customers</li><br />
                        <li> It offers legal protection for your brand’s identity</li><br />
                        <li>It is an asset in itself</li><br />
                        <li>It prevents unauthorized usage of your brand’s identity.</li><br />
                    </ul>
                </div>
                <br />
                <br /><br />
                <div className="ICI necessity" id="eligibility">
                    <h1 id="eligibility"> Trademark Classes</h1>
                    <br />

                    <p>here are 45 trademark classes and all the goods and services are categorised across these
                        classes. You need to be very careful while picking the classes as it will determine the validity
                        of your trademark for your business’ products/services. If your business operates across
                        different goods/services that fall under different classes, you have to ensure that you apply
                        for the trademark under all the applicable classes.
                    </p>
                    <br />
                    <p>Some of the popular trademark classes in India are:</p>
                    <br />
                    <ul>
                        <li><b>class 9:</b> which includes computer software and electronics,</li><br />
                        <li><b>class 25:</b> which includes clothing,</li><br />
                        <li><b>class 35:</b> which includes business management and advertising, and</li><br />
                        <li><b>class 41:</b> which includes education and entertainment.</li><br />
                        <p>If you are operating within these trademark classes, the competition for a trademark might be
                            higher. However, that shouldn’t matter as long as your mark is unique.</p>
                        <br />
                    </ul>
                </div>
                <br id="attachment" /><br /><br />
                <div className="ICI necessity" id="content-howto">
                    <h1 id="attachment"> How to Register a Trademark </h1>
                    <br />

                    <p>The process of trademark registration online is more complicated than it appears. It involves a
                        number of processes and government follow-up. Medsys has made it easier for you by breaking
                        it down into three parts and doing the majority of the work. Register your trademark today to
                        protect your company's logo, slogan, and brand.</p>
                    <br />
                    <h3>Step 1: Trademark Search</h3><br />
                    <p>
                        Once you give us the basic information about what you want to trademark and the industry you
                        operate in, our experts will do a thorough search across the trademark database. This is to
                        check whether the mark you want to register is available or not.
                    </p><br />
                    <p>
                        Once you decide on an available trademark, we move to step 2.
                    </p><br />
                    <h3>
                        Step 2: Class Selection and Document Collection</h3><br />
                    <p>
                        The next task is to select the appropriate class(es) for your business. You need not worry too
                        much though. Our experts will guide you in selecting the right classes to cover all aspects of
                        your business. Simultaneously, you can start uploading all the required documents (list given
                        below) for trademark registration in your dashboard.
                    </p><br />
                    <h3><br />
                        Step 3: Trademark Application Filing</h3><br />
                    <p>
                        Once you upload all the documents, our team will proceed to verify them. Then the trademark
                        application form will be filled on your behalf and submitted along with the documents. Our team
                        will ensure that your application is accurate and error-free.
                    </p><br />
                    <p>
                        We will keep you updated throughout the process and watch out for any notifications from the
                        Trademark Registry until the registration is complete.
                    </p>
                    <br />
                    <b>
                        Congratulations! You can now start using the symbol ™ as the application has been submitted!
                    </b>

                    <br />
                    <br />
                    <h3>
                        Step 4: Trademark Objection (in some cases)</h3><br />
                    <p>
                        Sometimes the examiner might have some questions about your application. This is sent to you as
                        a trademark objection notice and you need to respond to it within 30 days. Our experts can craft
                        a strong objection response and guide you in submitting the right documents and proofs.
                    </p><br />
                    <h3>
                        Step 5: Trademark Opposition (in some cases)</h3><br />
                    <p>
                        There is also a chance for a third party to oppose your application. In that case, you have to
                        submit a counter-statement to the Registrar within 2 months stating why the opposition isn’t
                        valid. Based on your response the Registrar may either dismiss the opposition or call for a
                        hearing.
                    </p>
                </div>
                <p id="checklist"> </p><br /><br />
                <div className="ICI necessity" id="content-objection">
                    <h1> Trademark Objections</h1>
                    <br />
                    <p>
                        In some cases, the trademark examiner might see certain problems or issues with the registration
                        of your trademark. These issues can be either the filing of an incorrect trademark form,
                        incorrect name/details, the usage of deceptive or offensive terms, insufficient information on
                        goods or services, or the existence of an identical or deceptively similar mark.
                    </p><br />
                    <p>
                        When an objection is raised, the status on the register will show as ‘Objected’, following which
                        an expertly drafted response will need to be filed after an analysis of the objection itself and
                        with any supporting documents and proofs. Objection response is your opportunity to strengthen
                        the claim over your mark and create urgency.
                    </p><br />
                    <p>
                        If the response is accepted, the application will be processed further for registration and
                        advertisement in the Trademark Journal. If it is not accepted, or if there are additional
                        clarifications sought by the examiner, there could be a trademark hearing scheduled and this
                        will be communicated to you by a notice.
                    </p><br />
                    <p>The process typically takes 2-4 months from when the objection is first raised. Once completed,
                        the chances for approval, while not guaranteed, are much higher.
                    </p><br />
                </div>
                <p id="opposition"></p>
                <br />
                <br />
                <div className="ICI" id="content-opposition">
                    <h1> Trademark Opposition</h1>
                    <br />
                    <p>
                        On the other hand, A trademark opposition is a legal proceeding in which one party attempts to
                        put a stop to a trademark application from being granted. A trademark opposition is filed by
                        third parties who feel your trademark could in some way impact them or their own trademark, in
                        writing, in the form of a notice, with the trademark examiner. If the examiner sees any merit to
                        the opposition, they are to forward the notice to the applicant, who is required to send in a
                        counter statement to the Registrar within 2 months.
                    </p>
                    <br />
                    <p>
                        If the Registrar feels the counter statement addresses the opposition substantially, they may
                        dismiss the opposition. Alternatively, if the registrar feels there is more to be weighed, they
                        may call for a hearing with both parties appearing before them and presenting their cases. After
                        the hearing, the Registrar will rule on the validity of either the application or the
                        opposition. This ruling can be appealed before the Intellectual Property Appellate Board within
                        3 months of it being made public.
                    </p>
                </div>
                <br id="document" />
                <br />
                <br />
                <div className="ICI" id="content-docs">
                    <h1> Documents Required for Trademark Registration</h1>
                    <br />
                    <p>
                        Initially, you have to provide us with the following details:</p>
                    <br />
                    <ul>
                        <li>Applicant’s name</li><br />
                        <li>Business type</li><br />
                        <li>Business objectives</li><br />
                        <li>Brand/logo/slogan name</li><br />
                        <li>Registration address</li><br />
                        <li>The documents required are:</li><br />

                        <li>Signed Form-48</li><br />
                        <li>Identification proof of the signatory</li><br />
                        <li>Address proof of the signatory</li><br />
                        <li>Business proof (depends on the type of business)</li><br />
                        <li>Udyog Aadhar/MSME registration certificate (optional)</li><br />
                    </ul>
                </div>
                <br id="faq" />


                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br /><br />

                    <FAQItem number={0} ques={`What is a trademark
                                    class?`}
                        answer={`The Trademark
                    Registry has classified goods and services under 45 classes. Each class lists a
                    host of goods/services and depending on those you are offering, you need to
                    mention the class(es) on your trademark application. The trademark would be
                    registered and protected under those classes only.`} />
                    <FAQItem number={1} ques={`What trademark
                                    applications are commonly rejected?`}
                        answer={`If your
                    trademark is similar to an existing application, would hurt religious
                    sentiments, contains geographical names, or common words. It would also be
                    rejected if it is likely to confuse.`} />
                    <FAQItem number={2} ques={`When can I use the ™
                                    symbol?`}
                        answer={`file the application and receive an acknowledgement, you can use the ™ symbol.
                    Once the registration process is complete, you can use the ® symbol.`} />
                    <FAQItem number={3} ques={`How can I run a
                                    trademark search?`}
                        answer={`You can run a
                    simple trademark search easily by clicking here. However, if you are serious
                    about getting your trademark registered, it is advised to get a professional to
                    do thorough trademark research.`} />
                    <FAQItem number={4} ques={`What if my trademark
                                    is taken, but under a different class?`}
                        answer={`If your brand
                    name has already been registered, but under a different class, you're still in
                    luck. Unless the brand is too well known (like McDonald’s or Fiat), your
                    application is likely to be approved.`} />
                    <FAQItem number={5} ques={`What if someone has a
                                    similar word trademarked?`}
                        answer={`You can't get
                    the word, but all is not lost. You could instead design a unique logo for your.`} />
                    <FAQItem number={6} ques={`Do you guarantee
                                    approval of my trademark?`}
                        answer={`It depends
                    entirely on the government's judgement. But if it is unique, it is highly likely
                    that it will be granted.`} />
                    <FAQItem number={7} ques={`Should I file the
                                    trademark in my own name?`}
                        answer={`Many start-up
                    founders register it in their own names, while large businesses would prefer to
                    do so in the name of the company. This is because the future of a start-up is
                    always in doubt. If owned by the founder, the trademark would be valid
                    regardless of the state of the company. A trademark license agreement is,
                    however, needed in this case.`} />
                    <FAQItem number={8} ques={`How long does it take to get my trademark?`}
                        answer={`It can take
                    anywhere between 6 months to 1 year for your trademark to be approved. However,
                    we can apply and start using the ™ symbol within few days if we can get all the
                    details and documents at the earliest.`} />
                    <FAQItem number={9} ques={`Still Confused?`}
                        answer={`Speak to our experts who shall
                    solve all your
                    doubts.
                    Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com`} />

                </div>


            </div>
        </section>

    </>);
}