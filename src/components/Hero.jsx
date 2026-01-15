import React from 'react'

const Hero = () => {
  return (
    <div className='mt-0 min-vh-100 d-flex justify-content-between m-5 align-items-center' >

      <div className='text-white d-flex justify-content-center align-items-center ' style={{width:"48%"}}>
        <img
          src="/image/Profile1.png"
          className="rounded-circle img-fluid"
          style={{ width:"30vw", maxwidth: "150px", height: "auto", objectFit: "cover" }}
          alt="Profile"
        />
      </div>

      <div className='text-white p-5' style={{width:"48%"}}>
        <h1>Hello,</h1>
        <h1>I'm <span className='text-primary'>ASHUTOSH KUMAR</span></h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      
    </div>
  )
}

export default Hero
