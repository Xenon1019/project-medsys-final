import mainImage from "./1.png";
import React, { useState } from "react";
import img1 from "./App Development.png";
import img2 from "./Branding.png";
import img3 from "./Business Strategy.png";
import img4 from "./Content Writing.png";
import img5 from "./Digital Marketing.png";
import img6 from "./E-commerce Website.png";
import img7 from "./Graphics Designing.png";
import img8 from "./Printing Services.png";
import img9 from "./Product Development & Design.png";
import img10 from "./SEO Consulting.png";
import img11 from "./Social Media Marketing.png";
import img12 from "./Web Development.png";

function App() {
  const backgroundImageStyle = {
    background: `url("${mainImage}") no-repeat center center/cover`,
    backgroundSize: "cover",
  };

  const AppDev = {
    backgroundImage: `url("${img1}")`,
    backgroundSize: "contain",
  };

  const Branding = {
    backgroundImage: `url("${img2}")`,
    backgroundSize: "contain",
  };

  const BusinessStrategy = {
    backgroundImage: `url("${img3}")`,
    backgroundSize: "contain",
  };

  const ContentWriting = {
    backgroundImage: `url("${img4}")`,
    backgroundSize: "contain",
  };

  const DigitalMarketing = {
    backgroundImage: `url("${img5}")`,
    backgroundSize: "contain",
  };

  const ECommerce = {
    backgroundImage: `url("${img6}")`,
    backgroundSize: "contain",
  };

  const GraphicsDesigning = {
    backgroundImage: `url("${img7}")`,
    backgroundSize: "contain",
  };

  const PrintingServices = {
    backgroundImage: `url("${img8}")`,
    backgroundSize: "contain",
  };

  const ProductDev = {
    backgroundImage: `url("${img9}")`,
    backgroundSize: "contain",
  };

  const SEO = {
    backgroundImage: `url("${img10}")`,
    backgroundSize: "contain",
  };

  const SocialMedia = {
    backgroundImage: `url("${img11}")`,
    backgroundSize: "contain",
  };

  const WebDev = {
    backgroundImage: `url("${img12}")`,
    backgroundSize: "contain",
  };

  return (
    <div className="App">
      <div
        className=" text-white w-full h-[550px]  flex items-center justify-center "
        style={backgroundImageStyle}
      >
        <h2 className="sm:text-6xl text-5xl uppercase font-bold text-center w-11/12">
          Marketing solutions
        </h2>
      </div>



      <div className="py-11 px-2">
        <div className="p-9">
          <h2 className=" text-5xl text-[#560216]">
            Business Strategy & Consulting
          </h2>
          <div className="bg-[#560216] mt-1 w-2/4 lg:w-80 h-1.5"></div>
        </div>
        <div className="sm:grid sm:grid-cols-2 w-11/12 gap-24 mx-auto">
          <p className="text-rose-900 mb-2 text-xl font-medium my-auto pr-6">
            We work with small and big industries across all sectors and domains
            to craft strategies to deliver results. To businesses seeking to
            grow, venture into new areas and entrepreneurs looking for guiding
            hands, Kraft Concept offers its consultative approach. Our team has
            extensive expertise in tools and methodologies and works in tandem
            with clients to develop robust strategies to outshine your work from
            your competitors.
            <div className="py-3 flex justify-end ">
              <button className="text-xl  text-[#560216] bg-rose-300 p-2 w-1/3 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 my-auto bg-no-repeat"
            style={BusinessStrategy}
          ></div>
        </div>


        <div className="mt-7 p-9">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Web Development
          </h2>
          <div className="bg-[#560216] mt-1 w-2/4 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={WebDev}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            In today's hyper-digital world, websites need to be built on a solid
            platform to load quickly, be easily found and easy to use (for both
            the client and the customer), be visually appealing, contain
            valuable content and engage the site visitor.<br></br>
            <br></br> Our web development team is skilled at asking the right
            questions to help you determine your needs and to build a plan that
            will deliver a site that’s ready to take on the world. We also know
            how to accurately estimate the amount of resources and cost to
            design and build it. Once the platform is defined and we’re
            building, we start with a mobile-first and content-first approach.
            This enables us to help a client take advantage of the trend in
            mobile use and design a site that leverages its content for both its
            visitors and the search engines.
            <div className="py-3 flex justify-end ">
              <button className="text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>

        <div className="mt-7 p-9">
          <h2 className=" text-5xl text-[#560216]">App Development</h2>
          <div className="bg-[#560216] mt-1 w-1/4 lg:w-64 h-1.5"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            Create applications tailor-made for your business requirement. From
            digitizing spread sheets to building complex application using
            latest technologies, our customized services empower applications to
            evolve and reinvent processes - enabling you to deliver reliable,
            stable and faster results.<br></br>
            <br></br> With capabilities across platforms (iOS, Android and
            Microsoft), our mobile app development services can avail to build
            both customer and enterprise apps. Our mobile solutions include
            sales force enabling apps, product configurators and mobile-based
            Learning Management Systems.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={AppDev}
          ></div>
        </div>



        <div className="mt-7 p-9">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            E-Commerce Website
          </h2>
          <div className="bg-[#560216] mt-1 w-1/3 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={ECommerce}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            E-commerce is the buying and selling of goods and services, or the
            transmitting of funds or data, over an electronic network, primarily
            the internet. These business transactions occur either as
            business-to-business (B2B), business-to-consumer (B2C),
            consumer-to-consumer or consumer-to-business.<br></br>
            <br></br> The terms e-commerce and e-business are often used
            interchangeably. The term e-tail is also sometimes used in reference
            to the transactional processes that make up online retail shopping.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>

        <div className="mt-7 p-9">
          <h2 className=" text-5xl text-[#560216]">Content Writing</h2>
          <div className="bg-[#560216] mt-1 w-1/4 lg:w-64 h-1.5"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <p className="text-rose-900 mb-2 text-xl font-medium my-auto pr-6">
            Content writing is the process of writing, editing, and publishing
            content in a digital format. That content can include blog posts,
            video or podcast scripts, ebooks or whitepapers, press releases,
            product category descriptions, landing page or social media copy ...
            and more.<br></br>
            <br></br> Content writing can take various forms, but in essence, it
            comes down to creating content for digital formats — and (at least
            in our case) for marketing purposes.<br></br>
            <br></br> Here, we'll explore what content writing is (hint, hint …
            I'm currently doing it), as well as tips to take your own content to
            the next level. Plus, we'll explore examples of incredible,
            high-quality content writing.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={ContentWriting}
          ></div>
        </div>

        <div className="mt-7 p-9 ">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Digital Marketing
          </h2>
          <div className="bg-[#560216] mt-1 w-1/3 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={DigitalMarketing}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            The internet is ever-changing and dynamic. Access to a wide range of
            platforms and tools from different industries and nations is
            provided by this service. When it comes to making an impression,
            even a little firm can make a big difference. Businesses and their
            customers can communicate with each other in real-time through this
            platform.<br></br>
            <br></br> When it comes to promoting your brand on the internet,
            digital marketing or internet marketing has taken over. Digital
            marketing services may aid a business in a variety of ways, from
            attracting more visitors to improving sales and returns.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>

        <div className="mt-7 p-9">
          <h2 className=" text-5xl text-[#560216]">SEO Consulting</h2>
          <div className="bg-[#560216] mt-1 w-1/4 lg:w-64 h-1.5"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <p className="text-rose-900 mb-2 text-xl font-medium my-auto pr-6">
            If you regularly use Google then you've probably realised that when
            you search for something you don't typically scroll past the first
            page or even the first few results.<br></br>
            <br></br> We specialise in developing search campaigns that deliver
            visibility, traffic, rankings & conversions. With well-researched,
            strategic and brand specific Search Engine Optimization, we help
            resurrect your brand and elevate your online presence. Be it Keyword
            research, On-page optimisation, Off-page optimisation, Link
            building, Submissions or Content generation, we leave no stone
            unturned.<br></br>
            <br></br> Write to us, for a free SEO analysis of your website.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={SEO}
          ></div>
        </div>

        <div className="mt-7 p-9 ">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Graphics Designing
          </h2>
          <div className="bg-[#560216] mt-1 w-1/3 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={GraphicsDesigning}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            Graphic design is an ancient craft, dating back past Egyptian
            hieroglyphs to at least 17,000-year-old cave paintings. It’s a term
            that originated in the 1920s’ print industry. It continues to cover
            a range of activities including logo creation. Graphic design in
            this sense concerns aesthetic appeal and marketing. Graphic
            designers attract viewers using images, color and typography.
            However, graphic designers working in user experience (UX) design
            must justify stylistic choices regarding, say, image locations and
            font with a human-centered approach. That means you need to focus
            on—and seek to empathize the most with—your specific users while you
            create good-looking designs that maximize usability. Aesthetics must
            serve a purpose—in UX design we don’t create art for art’s sake. So,
            graphic designers must branch into visual design. When designing for
            UX, you should:
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>

        <div className="mt-7 p-9">
          <h2 className=" text-5xl text-[#560216]">Branding</h2>
          <div className="bg-[#560216] mt-1 w-1/4 lg:w-64 h-1.5"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <p className="text-rose-900 mb-2 text-xl font-medium my-auto pr-6">
            We don’t belive that Brands are built from advertising anymore. They
            are built from engaging customer experinces. From telling a great
            story, which has never been told before. By insanely – Disrupting
            the market Branding means creating trust in consumer‘s mind. We
            don’t believe that brands are build from advertising anymore. They
            are build from great customer experience-which we focus on…Customer
            experience is about how they are treated at the Physical Stores, or
            how we make them feel. Disruptive thinking starts when you tell a
            great story. When you help the organisation with a new brand
            narrative, which inspires.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={Branding}
          ></div>
        </div>

        <div className="mt-7 p-9 ">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Product Development & Design
          </h2>
          <div className="bg-[#560216] mt-1 w-1/3 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={ProductDev}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            A generic website may not be enough for your company, we build
            custom websites with complex interactive features and creative
            design. We create custom API’s, deploy infrastructure, and integrate
            your website with ERP and CRM systems. You imagine, we create. Trust
            us to build you a website as unique as you!
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>

        <div className="mt-7 p-9">
          <h2 className=" text-5xl text-[#560216]">Printing Services</h2>
          <div className="bg-[#560216] mt-1 w-1/4 lg:w-64 h-1.5"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <p className="text-rose-900 mb-2 text-xl font-medium my-auto pr-6">
            We specialize in commercial offset printing and digital printing
            services to cover all your needs. Whether you’re looking to promote
            a product or advertise a service, we can help you design and print a
            layout that will reach your audience and get your message across.
            <br></br>
            <br></br>
            Take your business cards, Flyers and Stickers to the next level with
            exclusive and innovative features.
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>

          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 mt-6 bg-no-repeat my-auto sm:ml-auto"
            style={PrintingServices}
          ></div>
        </div>

        <div className="mt-7 p-9 ">
          <h2 className="text-5xl text-[#560216] flex justify-end">
            Social Media Marketing
          </h2>
          <div className="bg-[#560216] mt-1 w-1/3 lg:w-64 h-1.5 ml-auto"></div>
        </div>
        <div className="md:grid md:grid-cols-2 w-11/12 mx-auto">
          <div
            className="lg:h-96 md:w-full md:h-56 w-full h-72 bg-no-repeat my-auto sm:ml-auto"
            style={SocialMedia}
          ></div>
          <p className="text-rose-900 text-xl font-medium my-auto pr-6">
            A generic website may not be enough for your company, we build
            custom websites with complex interactive features and creative
            design. We create custom API’s, deploy infrastructure, and integrate
            your website with ERP and CRM systems. You imagine, we create. Trust
            us to build you a website as unique as you!
            <div className="py-3 flex justify-end ">
              <button className="text-2xl  text-[#560216] bg-rose-300 p-2 w-1/2 sm:w-2/5 mx-auto rounded-md">
                Get started
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
