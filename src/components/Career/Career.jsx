import React from 'react'
import HeaderImg from './careerHeader.png'
export default function Career() {
  const backgroundImageStyle = {
    background: `url("${HeaderImg}") no-repeat center center/cover`,
  };
  return (
    <>
      {/* +++++++++++++++++++++ Career header ++++++++++++++++++++++= */}
      <section className="carrier-header h-[550px] flex items-center justify-center" style={backgroundImageStyle}>
      </section>
      {/* +++++++++++++++++++++ Career path ++++++++++++++++++++++= */}
      <section className="career-path">
        <div className="wrapper flex justify-evenly items-center px-16">
        <div className="inner-left">
          <h1 className='text-left text-2xl font-bold text-black mb-1'>Join with Medsys!</h1>
          <h1 className='text-4xl pb-4 text-left relative text-mainColor font-medium'>Career path that will broaden your <br /> expertise and skills!</h1>
          <p className='pt-4 ' style={{fontSize:"19px", color:"#534f4f"}}>We firmly believe that combined experience, wisdom, and creativity of our <br /> people will lead to great ideas and solutions that will support us to overcome <br /> all challenges. <br />
            Our expert team can build robust solutions to get you noticed with our <br /> innovation, creativity, and big ideas. Our success factor is driven by our <br /> ability to stay ahead of digital marketing trends. We incorporate cutting-edge <br /> technology and resources that help us to craft an ideal solution.</p>
        </div>
        <div className="inner-right  w-96">
          <img className="" style={{width:"500px"}} src="/assets/img/contactHeader/headerImg/6.svg" alt="" />
        </div>
        </div>
      </section>
      {/* +++++++++++++++++++++ Contact form ++++++++++++++++++++++= */}
      <section className="career-contact-form mb-8">
        <form action="backend.php" className=' py-10 px-28 bg-mainColor' style={{border:"1px solid"}}>
          <div className="max-w-4xl m-auto upper grid-cols-2 grid gap-4">
            <input className='py-2 outline-none px-2 rounded' type="text" name='name' placeholder='Enter name' />
            <input className='py-2 outline-none px-2 rounded' type="email" name='email' placeholder='Enter email' />
            <input className='py-2 outline-none px-2 rounded' type="phone" name='phone' placeholder='Enter Phone' />
            <input className='py-2 outline-none px-2 rounded' type="text" name='subject' placeholder='Subject' />
          </div>
          <div className="m-auto flex justify-center"><textarea className='max-w-4xl outline-none px-2 w-full my-4' name="" id="" cols="30" rows="5"></textarea></div>
          <div className="w-fit m-auto pb-6">
          <div className="bg-rose-100 rounded-md py-2 w-fit text-center ml-1 mt-1 m-auto ">
              <input
                type="file"
                className="flex mx-auto  file:my-5 file:ml-7 file:mr-3 file:py-1 file:border-0 file:bg-mainColor file:hover:bg-rose-900 file:text-rose-200 file:rounded-md file:font-light text-sm file:text-base font-normal"
                id="certificate"
              />
            </div>
          </div>
          <div className="flex justify-center">
          <button className="bg-rose-800 hover:bg-rose-700 text-white  py-2 rounded hover:opacity-90 px-8">Apply Now</button>
          </div>
        </form>
      </section>
    </>
  )
}
