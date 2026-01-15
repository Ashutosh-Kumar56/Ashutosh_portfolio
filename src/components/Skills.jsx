import React from 'react'

const Skills = () => {
  return (
    <div className='text-primary'>

      <h2 className='text-white ps-5 pt-3 '>SKILLS</h2>  
        {/* Programming Language */}
      <div className="border border-1 border-white shadow-primary m-3 p-3 rounded">
        <div className='d-flex flex-wrap ps-4 my-2 gap-3'>
        <h4 className='mb-2 me-3'>Programming Language</h4>
            <img src="/image/C.png" alt="C Programming" style={{maxWidth:"80px"}} className='img-fluid '/>
            <img src="/image/C++.png" alt="C++ Programming" style={{maxWidth:"80px"}} className='img-fluid mx-5'/>
            <img src="/image/Java.png" alt="Java Programming" style={{maxWidth:"80px"}} className='img-fluid'/>
        </div>
      </div>


      {/* Web Technologies */}
      <div className="border border-1 border-white m-3 p-3  shadow-primary  rounded">
        <div className='d-flex flex-wrap ps-4 my-2 gap-3'>
        <h4 className='mb-2 me-3 d-flex align-items-center '>Web Technologies</h4>
            <img src="/image/HTML.png" alt="HTML" style={{maxWidth:"130px", height:"auto"}} className='img-fluid' />
            <img src="/image/CSS.png" alt="CSS" style={{maxWidth:"120px", height:"auto"}} className='img-fluid'/>
            <img src="/image/JS.png" alt="JavaScript" style={{maxWidth:"80px", height:"auto"}} className='img-fluid me-4 ms-4'/>
            <img src="/image/PHP.png" alt="PHP" style={{maxWidth:"130px", height:"auto"}} className='img-fluid ms-4' />
            <img src="/image/SQL.png" alt="SQL" style={{maxWidth:"110px", height:"auto"}} className='img-fluid mt-1 mx-5'/>
            <img src="/image/React.png" alt="React" style={{maxWidth:"90px", height:"auto"}} className='img-fluid mt-2'/>
        </div>
      </div>


      {/* Version Control */}
      <div className="border border-1 border-white shadow-primary  m-3 p-3  rounded">
        <div className='d-flex flex-wrap ps-4 my-2 gap-3'>
        <h4 className='mb-2 me-3 d-flex align-items-center'>Version Control</h4>
            <img src="/image/Git.png" alt="Git" style={{maxWidth:"110px", height:"110px"}} className='img-fluid ms-3' />
            <img src="/image/Github.png" alt="Github" style={{maxWidth:"110px", height:"100px"}} className='img-fluid ms-5'/>
        </div>
      </div>


      {/* Technical Skills */}
      <div className="border border-1 border-white shadow-primary  m-3 p-3  rounded">
        <div className='d-flex flex-wrap ps-4 my-2 gap-3'>
        <h4 className='mb-2 me-3 d-flex align-items-center'>Technical Skills</h4>
            <img src="/image/DS.png" alt="DS" style={{maxWidth:"90px", height:"90px"}} className='img-fluid ms-4 me-2' />
            <img src="/image/Bootstrap.png" alt="Bootstrap" style={{maxWidth:"110px", height:"100px"}} className='img-fluid ms-5'/>
            <img src="/image/VS.png" alt="VS Code" style={{maxWidth:"110px", height:"100px"}} className='img-fluid ms-4'/>
        </div>
      </div>


      {/* Soft Skills */}
      <div className="border border-1 border-white shadow-primary  m-3 p-3 rounded">
        <div className='d-flex flex-wrap ps-4 my-2 gap-3'>
        <h4 className='mb-2 me-3 d-flex align-items-center'>Soft Skills</h4>
            <ul className='d-flex flex-wrap list-unstyled align-items-center text-white mt-3 gap-3 ms-5'>
              <li><h5>Attentive Listening</h5></li>
              <li><h5>Teamwork</h5></li>
              <li><h5>Leadership</h5></li>
              <li><h5>Problem Solving</h5></li>
            </ul>
        </div>
      </div>


    </div>
  )
}

export default Skills
