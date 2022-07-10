import React from 'react'
import HeaderImg from './careerHeader.png'
export default function Career() {
  const backgroundImageStyle = {
    background: `url("${HeaderImg}") no-repeat center center/cover`,
  };
  return (
    <>
      {/* +++++++++++++++++++++ Career header ++++++++++++++++++++++= */}
      <section className="carrier-header h-96 flex items-center justify-center" style={backgroundImageStyle}>
        <h1 className='text-5xl font-bold text-white tracking-wider text-center'>CAREER</h1>
      </section>
      {/* +++++++++++++++++++++ Career path ++++++++++++++++++++++= */}
      <section className="career-path">
        <div className="wrapper flex justify-evenly items-center px-16">
        <div className="inner-left">
          <h1 className='text-left text-2xl font-bold text-black mb-1'>Join with Medsys!</h1>
          <h1 className='text-4xl pb-4 text-left relative text-mainColor font-medium'>Career path that will broaden your <br /> expertise and skills!</h1><span className="absolute w-32 h-1 rounded bg-rose-500"></span>
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
          <div className="upper grid-cols-2 grid gap-4">
            <input className='py-2 outline-none px-2 rounded' type="text" name='name' placeholder='Enter name' />
            <input className='py-2 outline-none px-2 rounded' type="email" name='email' placeholder='Enter email' />
            <input className='py-2 outline-none px-2 rounded' type="phone" name='phone' placeholder='Enter Phone' />
            <input className='py-2 outline-none px-2 rounded' type="text" name='subject' placeholder='Subject' />
          </div>
          <textarea className='outline-none px-2 w-full mt-4' name="" id="" cols="30" rows="5"></textarea>
          <div className="text-white mb-8 flex justify-center">Select a File:<input style={{width:"220px"}} className="text-white" type="file" /></div>
          <div className="flex justify-center">
          <button className="bg-rose-600 text-white  py-2 rounded hover:opacity-90 px-8">Apply Now</button>
          </div>
        </form>
      </section>
    </>
  )
}
