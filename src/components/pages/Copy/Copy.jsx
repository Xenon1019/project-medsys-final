import React from "react";
import bussinessLogo from "./imgs/business logo.jpeg";
import starLogo from "./imgs/star logo.jpeg";
import smileLogo from "./imgs/smile logo.jpeg";
import bg from "./imgs/bg.png";
import Scrollspy from "react-scrollspy";
import { TabTitle } from "../../Utillity";
import "./Copy.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import ContactForm from "../../ContactForm";
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
const Copy = () => {
    TabTitle("Business Plan - medsysconsultancy.com");

    return (
        <>
            <pagesHeader />
            <div
                className=" sm:grid sm:grid-cols-2 p-7  bg-cover didot"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="">
                    <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
                        <h1 className="text-5xl font-semibold">Copyright Registration</h1>
                    </div>
                    <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
                        <p>
                            Copyright is a type of intellectual property that allows you to sue anyone who tries to steal your work.
                        </p>
                        <p>Why put it off any longer? Let’s safeguard your original material!!</p>
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
                    Get in touch with us acquire various licenses, registrations, and certifications
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
                                    "Benefit",
                                    "Scope",
                                    "Right",
                                    "Document",
                                    "FAQs"
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
                                        href="#Benefit"
                                    >
                                        Benefit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Scope"
                                    >
                                        Scope
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Factors"
                                    >
                                        Right
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 "
                                        href="#Document"
                                    >
                                        Document Required
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
                            Copyright is the legal right creators are entitled to for their literary, dramatics, music, and artistic work. Producers of films and recordings enjoy this right too. When a proprietor registers for a copyright, it gives them an exclusive right to reproduce, replicate, and distribute the work. Further, they can grant authority to some other entity for the same purpose.
                        </p>
                        <p>Registering for copyright is important because it makes you the legal owner of the rights </p>
                        <div>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">
                                How Copyrighting Works
                            </h2>
                            <p>
                                A copyright protects the expression of an idea. Unlike a patent, which protects the idea itself, copyright protects only the expression.
                            </p>
                            <p>As the owner of the copyright, the author has the unique right to produce copies of the work, to exhibit and perform it publicly, and to distribute copies of the work to the public. These exclusive rights are valid for the author's lifetime plus 70 years. A work made for hire, on the other hand, has a copyright that lasts for a fixed period of 95 years from the date of creation.</p>
                            <p>The work must be original to the creator in order to be protected by copyright. To be unique, the work should:</p>
                            <ul className="">
                                <li className="arrow">Instead of being taken from another work, it must have been created by the author(s)</li>
                                <li className="arrow">Must be capable of at least a basic level of creativity.</li>
                                <li className="arrow">Note: The work will be terminated and will not be entitled to copyright protection if these two conditions are not met.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">
                                Copyright Law and Treaties
                            </h2>
                            <p>
                                The Copyright Act 1957 (the Act), supported by the Copyright Rules 1958 (the Rules), is the governing law for copyright protection in India. Substantial amendments carries out to the Copyright Act in 2012. India follows a common law legal system, so relies on case law to interpret and set precedents in law and so the judicial decisions contribute to the sources of copyright law in India. India is a member of the Berne Conventions and Universal Copyright Convention. The Government of India has also passed the International Copyright Order, 1999. According to this Order, any work first published in any country that is a member of any of the above conventions is granted the same treatment as if it was first published in India.
                            </p>
                            <p>The copyright law aims to balance the interests of those who create content, with the public interest in having the widest possible access to that content. WIPO administers several international treaties in the area of copyright and related rights.</p>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">
                                What Can Be Protected By Copyright?
                            </h2>
                            <p>
                                Copyright, a form of intellectual property law, protects original works of authorship including literary, dramatic, musical, and artistic works, such as poetry, novels, movies, songs, computer software, and architecture. Copyright does not protect facts, ideas, systems, or methods of operation, although it may protect the way these things are expressed.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">
                                Nine categories of works are copyrightable:
                            </h2>
                            <ul>
                                <li className="arrow">Books - Copyright protection provides legal protection to the author's works in the case of literary works. Since everything is altered, transferred, and copied so quickly in our era, the copyright registration for literary work is more commonly used for book publishing and newsletters.</li>
                                <li className="arrow">Software - The IT sector in India is quickly expanding, necessitating the protection of your unique work or software. Many programmers, coders, and developers get cheated when they come across software that is close to or identical to what they created. The copyright registration for software prevents any individual or third-party company from gaining unofficial access to the software.</li>
                                <li className="arrow">Scripts - A script is a written outline for a play, television programme, or film. Copyrighting a creative work—such as a script—prevents individuals from engaging in unauthorised use of your script, such as intentional and accidental copying, publishing, transmitting, exhibiting, distributing, modifying, and displaying other people's original creative expressions.</li>
                                <li className="arrow">Lyrics - When you register a copyright, you have full copyright protection for your song. Copyright protects your lyrics as soon as you write them, even if it's only on a bit of paper. The copyright registration of lyrics gives the song constructive notice. The melody, lyrics, percussion track on the recording and chord progression in the bridge are all distinct and expressive elements to which the author might claim any of the exclusive rights.</li>
                                <li className="arrow">Websites - Text, tables, computer programmes, compilations, including computer databases; photographs, paintings, diagrams, maps, charts, and plans; and works incorporating music, including graphical notation of such work that may be copyrightable are among the digital assets on the website. You only have copyright rights to the elements of a website that you created as an author.</li>
                                <li className="arrow">Apps - Copyrights can be used to safeguard intellectual property such as computer programs. Early designs of creativity can take on many forms, including software code, graphics, and models used to create mobile applications and other computer software. Copyright registration of software allows a developer to more easily defend his work if it is attempted to be copied. For software copyrights, the code, as well as copies of artwork and audiovisual content, must be included with the application.</li>
                                <li className="arrow">Videos - Copyright registration for video serves as a clear evidence in any copyright infringement lawsuit you may file, and it makes collecting damages much easier in such a situation. It's a simple way to establish your video rights. If you actually want to protect your work, copyrighting your videos should be at the top of your priority list.</li>
                                <li className="arrow">Songs - It is important to obtain copyright protection for your song, as it is now easier than ever for others to use your work without giving you the credit you deserve. If you're a new musician, it's even more crucial to think about copyright protection because you might not have the resources to fight if your song is misused/pirated.</li>
                                <li className="arrow">Music - Whether you're attempting to safeguard a song or a symphony, the first step is to get the music down in some tangible format, such as recording or writing on music staff paper. It can be difficult to assert your rights in a copyright infringement claim if you do not have recognised copyright for your music. And as a musician with registered copyright for your work, you have a lot of exclusive rights.</li>
                            </ul>
                        </div>
                    </div>



                    <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div>

                    <div className="my-12" id="Benefit">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                            Benefits of Copyright Registration
                        </h2>
                        <ul className="">
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">A public record of ownership</h2>
                            <li className="arrow">When a work is copyrighted, it is registered on a public record, thereby establishing ownership.</li>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">Copyright infringement</h2>
                            <li className="arrow">In the case of copyright infringement, the authors can sue infringers to secure their work and claim statutory compensation.</li>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">Prevents importing of duplicates</h2>
                            <li className="arrow">The owners can record the registration with the Indian customs and prevent importing duplicate copies of the work.</li>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">Commercial use of by-products</h2>
                            <li className="arrow">Have control over by-products or derivatives created from the original registered work for commercial purposes.</li>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">Transfer of copyright</h2>
                            <li className="arrow">The rights can be passed or sold to a third party by the original copyright holder.</li>
                            <h2 className="text-xl text-[#9D3E55] font-bold my-4">Ensures protection</h2>
                            <li className="arrow">Copyright protection enables the owners to exhibit their work without the fear that it will be replicated without authorisation.</li>

                        </ul>
                    </div>

                    <div className='flex justify-between items-center bg-white h-20 px-8 rounded-2xl' >
                        <h2 className='text-md md:text-xl font-bold text-[#560216]'>Related Read:How To Register A Company In India: A Step By Step Guide</h2>
                        <button className='bg-[#560216] text-white text-center px-3 py-1 rounded-full text-md md:text-lg hover:bg-green-600'>CLICK HERE</button>
                    </div>

                    <div className="my-12" id="Scope">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Scope of Copyright Protection
                        </h2>
                        <p>The Copyright Act of 1957 prevents the unauthorized use of any original literary, musical, dramatic, audio, cinematographic, and other artistic work. Both published and unpublished works can be copyrighted, and the original work’s copyright is reserved for the original creator. Copyright can also be registered for works that were published before 21 January 1958, that is before the Copyright Act came into existence.</p>
                        <p>Copyright protection of original literary, musical, dramatic, and artistic works lasts for the entire lifetime of the author and another 60 years from the year following the death of the author. For cinematograph films, sound recordings, photographs, posthumous publications, anonymous and pseudonymous publications, works of government, and works of international organizations, the 60 years is counted from the date of publication.</p>

                    </div>


                   
                    <div className="my-12" id="Right">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Rights of a Copyright Owner
                        </h2>
                        <p>
                        A copyright owner gets to enjoy the following rights and only they can assign these rights to someone else:
                        </p>
                        <ul className="">
                            <li className="arrow">Right of reproduction: no one can make copies of or reproduce a protected work, in part or whole, without permission from the copyright owner</li>
                            <li className="arrow">Right of adaptation: exclusive rights to the creator to use their piece of work the way they want (e.g., a book into a movie)</li>
                            <li className="arrow">Right of communication to the public: exclusive rights to broadcast their original work to the public</li>
                            <li className="arrow">Right to public performance: exclusive rights to the owners of artistic and musical work to perform their works in public</li>
                            <li className="arrow">Right of paternity/attribution: the right of attribution or paternity implies that the owner/creator can claim sole authorship over their piece of work. In other words, they can have it attributed to themselves</li>
                            <li className="arrow">Right of integrity: it allows the owner to sue in case their work is distorted or modified without permission</li>
                            <li className="arrow">Right of distribution: exclusive rights to distribute their work in whatever form they like (through selling, reproducing, leasing, lending, renting, or transferring).</li>
                        </ul>
                    </div>

                    <div className="my-12" id="Document">
                        <h2 className="text-3xl text-[#560216] font-bold my-4">
                        Documents Required to Register Copyright
                        </h2>
                        <p>
                        To register for copyright you need to give us the following details and documents.
                        </p>
                        <h2 className="text-xl text-[#9D3E55] font-bold my-4">Personal details:</h2>
                        <ul className="">
                            <li className="arrow">Name, address, and nationality of the applicant</li>
                            <li className="arrow">Name, address, and nationality of the author of the work</li>
                            <li className="arrow">Nature of the applicant’s interest in the copyright - whether the applicant is the author of the work or the representative of the author</li>
                            <li className="arrow">Copies of the original work</li>
                            <li className="arrow">ID proof of the owner and incorporation certificate if it is for business</li>
                        </ul>
                        <h2 className="text-xl text-[#9D3E55] font-bold my-4">Nature of the work:</h2>
                        <ul className="">
                            <li className="arrow">Class & description of the work</li>
                            <li className="arrow">Title of the work</li>
                            <li className="arrow">Language of the work</li>
                            <li className="arrow">Date of publication - publication in internal magazines, like a company magazine or a research paper submitted to a professor does not count as publication.</li>
                        </ul>
                        <h2 className="text-xl text-[#9D3E55] font-bold my-4">Documents:</h2>
                        <ul className="">
                            <li className="arrow">Three copies of your work</li>
                            <li className="arrow">Authorisation letter (we will send you)</li>
                        </ul>
                    </div>

                    

                    <div className="my-12" id="FAQs">
                        <h2 className="text-3xl text-[#560216] font-bold my-8">FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>a. What is the difference between privacy and copyright?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Privacy is the state of being private; the state of not being seen by others, whereas copyright is (uncountable) the legal right to be the entity that determines who may publish, copy, and distribute a piece of writing, music, picture, or other work of authorship. The right to have some control over how your personal information is gathered and utilised is known as information privacy.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>b. Does copyright apply to titles or names?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Copyright does not ordinarily protect titles by themselves or names, short word combinations, slogans, short phrases, methods, plots, or factual information nor protect ideas or concepts. Copyright is provided only to original creative work.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>c. Do I need a trademark or copyright?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    A trademark is a mark given to protect a brand name, logo or slogan. On the other hand, copyright is a protection given to unique content like a book, music, videos, songs, and artistic content.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>d. Is the process with Medsys fully online?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, the process for GST registration is online completely. You can do everything in the personalised dashboard we provide for you.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>e.After applying for a copyright, if someone else copies my content, is there any protection?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, absolutely. You must immediately send a legal notice and after sending the notice, if the problem does not get resolved, you can even file a case in a court of law.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f.Is there any way to search whether my content has been copyrighted by someone else in the past
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    No, there are no such provisions to check if the work has been copied by any third party. However, you can do a thorough search on the Internet to check if there is anything similar to yours.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>g.What if anyone claims that I have infringed their work?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    In such a case, you will receive a legal notice from the third party, claiming that you have copied or reproduced their registered work. Medsys can help you reply to the legal notice and in the further litigation process.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>h.Is copyright valid in India alone or is it valid across the world?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    India is a signatory of the Berne Convention, so copyright registered in India will get the status of foreign work and protection will be extended to countries that are also signatories to the Berne Convention.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>i.What cannot be protected through copyright in India?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Copyright protection is not applicable for ideas and methods - e.g., business operations, technical discoveries, mathematical principles, and other such concepts; commonly available info - e.g., telephone directories, general databases taken from free public records, etc.; Choreographic works and speeches unless they are notated or videotaped. Also, business names, product descriptions, taglines, and other such expressions cannot be copyrighted..
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>j.Is copyright applicable to mobile applications?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    A mobile application cannot be copyrighted as such; however, the coding can be copyrighted as literary work and other elements can be filed as different copyright applications..
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>k.Should my work be published to get registered for copyright?.</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Published and unpublished works can be registered. If a work is already published, the publishing details need to be furnished along with the application..
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       <span>l.Is there any chance of my copyright work getting rejected?</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, if the discrepancy is not removed within the said timeline, the application will be abandoned..
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>m.Still Confused?</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
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
}

export default Copy