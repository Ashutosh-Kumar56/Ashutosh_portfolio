import React from 'react'

const About = () => {
  return (
    <div className='m-5 text-white'>
      <div>
        <h2>ABOUT</h2>
        <div className='m-5'>
          <h3>Education</h3>

          <div className="card bg-transparent text-white border shadow-primary">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Bachelor of Computer Application
              </h5>
              <p className="card-text">
                Maharishi Markandeswar (Deemed to be University), Mullana, Ambala
                2022 - 2025 | CGPA: 8.58 
              </p>
            </div>
          </div>


          <div className="card bg-transparent text-white border shadow-primary my-4">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Intermediate (BSEB)
              </h5>
              <p className="card-text">
                R.D & D.J College, Munger, Bihar
                2018 - 2020 | Percentage: 61.2% 
              </p>
            </div>
          </div>


          <div className="card bg-transparent text-white border shadow-primary">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Matriculation (CBSE)
              </h5>
              <p className="card-text">
                Saraswati Vidya Mandir, Munger, Bihar 
                2017 - 2018 | Percentage: 63%
              </p>
            </div>
          </div>

        </div>

        <div className="m-5">
          <h3>Hobbies</h3>

          <div className="d-flex flex-wrap justify-content-center gap-3">


            <div className="card bg-transparent text-white border shadow-primary" style={{minWidth: "250px", maxWidth: "300px"}} >
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h4 className='mb-0'>Coding</h4>
                  <img src="/image/Coding.png" alt="Coding" className="" style={{width: "50px"}}/>
                </div>
              </div>
            </div>


            <div className="card bg-transparent text-white border shadow-primary" style={{minWidth: "250px", maxWidth: "300px"}} >
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center">
                  <h4 className='mb-0'>Chess</h4>
                  <img src="/image/Chess.png" alt="Chess" className="" style={{width: "50px"}}/>
                </div>
              </div>
            </div>


            <div className="card bg-transparent text-white border shadow-primary" style={{minWidth: "250px", maxWidth: "300px"}} >
              <div className="card-body">
                <div className="card-title d-flex justify-content-between align-items-center ">
                  <h4 className='mb-0'>Travelling</h4>
                  <img src="/image/Travelling.png" alt="Travelling" className="" style={{width: "50px"}}/>
                </div>
              </div>
            </div>


          </div>
          
        </div>


      </div>
    </div>
  )
}

export default About
