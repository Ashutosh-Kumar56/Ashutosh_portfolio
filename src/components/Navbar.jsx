import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // <div className='d-flex flex-wrap align-items-center px-3 py-2'>
    //     <h1 className='text-primary me-3 mb-2'>Ashutosh</h1>
    //     <ul className='list-unstyled d-flex flex-wrap ms-auto pe-4 pt-4 mt-2 text-white'>
    //         {/* <Link to="/"> <li className='px-4'>Ashutosh</li></Link>
    //         <Link to="/about"> <li className='px-4'>About</li></Link>
    //         <Link to="/skills"> <li className='px-4'>Skills</li></Link>
    //         <Link to="/project"> <li className='px-4'>Projects</li></Link> */}
            
    //         {/* <li className='px-4'>Ashutosh</li>
    //         <li className='px-4'>About</li>
    //         <li className='px-4'>Skills</li>
    //         <li className='px-4'>Projects</li>
    //         <li className='px-4'>Contact</li> */}
    //         {/* <Link to="/project"><li className='px-4'>Project</li></Link> */}
            

    //         <NavLink className={({ isActive }) =>`nav-link nav-item-hover mx-4 ${isActive ? "text-primary fw-bold" : ""}`} to='/'>Ashutosh</NavLink>
    //         <NavLink className={({ isActive }) =>`nav-link nav-item-hover mx-4 ${isActive ? "text-primary fw-bold" : ""}`} to='/about'>About</NavLink>
    //         <NavLink className={({ isActive }) =>`nav-link nav-item-hover mx-4 ${isActive ? "text-primary fw-bold" : ""}`} to='skills'>Skills</NavLink>
    //         <NavLink className={({ isActive }) =>`nav-link nav-item-hover mx-4 ${isActive ? "text-primary fw-bold" : ""}`} to='projects'>Projects</NavLink>
    //         <NavLink className={({ isActive }) =>`nav-link nav-item-hover mx-4 ${isActive ? "text-primary fw-bold" : ""}`} to='contact'>Contact</NavLink>

            
    //     </ul>
    // </div>



    // METHOD 2 ----------------------------------------------------------------------------------------


    <div className='d-flex flex-wrap align-items-center px-3 py-2 fixed-top bg-dark'>
  <h1 className='text-primary me-3 mb-2'>Ashutosh</h1>

  {/* Hamburger toggle button for mobile */}
  <button className="navbar-toggler ms-auto mb-2" type="button" 
          data-bs-toggle="collapse" data-bs-target="#navbarMenu" 
          aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Collapsible menu */}
  <div className="collapse d-flex flex-wrap ms-auto" id="navbarMenu">
    {/* <ul className='list-unstyled d-flex flex-wrap text-white mb-0'>
      <li className='mx-2 mx-md-4 my-1'>
        <NavLink className={({ isActive }) => `nav-link nav-item-hover ${isActive ? "text-primary fw-bold" : "text-white"}`} to='/'>Ashutosh</NavLink>
      </li>
      <li className='mx-2 mx-md-4 my-1'>
        <NavLink className={({ isActive }) => `nav-link nav-item-hover ${isActive ? "text-primary fw-bold" : "text-white"}`} to='/about'>About</NavLink>
      </li>
      <li className='mx-2 mx-md-4 my-1'>
        <NavLink className={({ isActive }) => `nav-link nav-item-hover ${isActive ? "text-primary fw-bold" : "text-white"}`} to='/skills'>Skills</NavLink>
      </li>
      <li className='mx-2 mx-md-4 my-1'>
        <NavLink className={({ isActive }) => `nav-link nav-item-hover ${isActive ? "text-primary fw-bold" : "text-white"}`} to='/projects'>Projects</NavLink>
      </li>
      <li className='mx-2 mx-md-4 my-1'>
        <NavLink className={({ isActive }) => `nav-link nav-item-hover ${isActive ? "text-primary fw-bold" : "text-white"}`} to='/contact'>Contact</NavLink>
      </li>
    </ul> */}


        <ul className='list-unstyled d-flex flex-wrap text-white mb-0  '>
          <li className='mx-2 mx-md-4 my-1'><a href="#home" className="nav-link nav-item-hover">Ashutosh</a></li>
          <li className='mx-2 mx-md-4 my-1'><a href="#about" className="nav-link nav-item-hover">About</a></li>
          <li className='mx-2 mx-md-4 my-1'><a href="#skills" className="nav-link nav-item-hover">Skills</a></li>
          <li className='mx-2 mx-md-4 my-1'><a href="#projects" className="nav-link nav-item-hover">Projects</a></li>
          <li className='mx-2 mx-md-4 my-1'><a href="#contact" className="nav-link nav-item-hover">Contact</a></li>
        </ul>




  </div>
</div>










    // METHOD 3 --------------------------------------------------

    





  )
}

export default Navbar
