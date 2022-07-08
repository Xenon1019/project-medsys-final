import React from "react";
import FAQItem from "./FAQItem";

function FAQ() {

    return (<section id="about" style={{marginRight : '95px'}}>
        <hr />

        <div className="accordion" id="faq">
            <FAQItem number={0} ques="How can I get a central FSSAI
                        license?"
                answer="First, you need to file Form B
                        available on the FSSAI’s official portal.

                        During filing, you need to upload some key documents including firm registration, floor plan, and
                        members" />

            <FAQItem number={1} ques="Who needs a FSSAI central license?"
                answer="As per the basic criteria set out
                        by FSSAI, a business with an annual turnover of more than 20 crore needs to get this license." />

            <FAQItem number={2} ques=".How can I convert my FSSAI license to
                        Central?"
                answer="The formal request for such
                        license conversion can be made on the FSSAI’s official portal.." />
            <FAQItem number={3} ques="What is the cost of an FSSAI Central
                        License?"
                answer="The basic government cost for
                        securing FSSAI Central License has been capped at Rs 7000 for one year." />
            <FAQItem number={4} ques="Who gives FSSAI Central License?"
                answer="Food Safety Standards Authority of
                        India" />
            <FAQItem number={5} ques="Which are the three types of FSSAI
                        license?"
                answer="FSSAI Basic Registration, FSSAI
                        State Licence, and Central FSSAI license" />
            <FAQItem number={6} ques=" How long does it take to get a Central
                        FSSAI License?"
                answer="FSSAI Central license can take a
                        time period of 30 days." />

            <FAQItem number={7} ques="Still Confused?"
                answer="Speak to our experts who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com" />

        </div>
    </section >);
}

export default FAQ;