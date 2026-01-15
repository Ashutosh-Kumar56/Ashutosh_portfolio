import React from 'react'

const Projects = () => {
  return (
    <div className='m-5 text-white'> 
    <h2>PROJECTS</h2>
      <div className='d-flex flex-wrap justify-content-center gap-4 p-3'>
        <div className="card bg-transparent mx-5 border border-primary shadow-primary" style={{ maxWidth: "27rem", minWidth:"250px", height:"auto" }}>
          <div className="card-body">
            <h2 className="card-title text-primary">Book Inventory Management System</h2>
            <p className="card-text text-white mt-4 text-justify">
              Designed robust Book Inventory Management System to enable users to efficiently track libraryor organizational book inventories.
            </p>
            <p className="card-text text-white mt-4 fw-bold">
              Leveraged technologies: Java Spring boot(backend), react(frontend), MySQL(database).
            </p>
          </div>
        </div>

        <div className="card bg-transparent  border border-primary shadow-primary " style={{ maxWidth: "27rem", minWidth:"250px", height:"auto" }}>
          <div className="card-body">
            <h2 className="card-title text-primary">Employee Management System</h2>
            <p className="card-text text-white mt-4 text-justify">
              Built a Employee Management System to managing employees, Implementated comprehensive CRUD functionalities to streamline employees management workflows.
            </p>
            <p className="card-text text-white mt-4 fw-bold ">
              Leveraged technologies: Java Spring boot(backend), react(frontend), MySQL(database).
            </p>
          </div>
        </div>

      </div>

      <div className='d-flex justify-content-center'>
        <div className="card bg-transparent  border border-primary shadow-primary" style={{ maxWidth: "27rem", minWidth:"250px", height:"auto" }}>
          <div className="card-body">
            <h2 className="card-title text-primary">WordWhiz (Next Word Predictor)</h2>
            <p className="card-text text-white mt-4 text-justify">
              Engineered a predictive text application capable  of suggesting contextually relevant  words based on user input.
            </p>
            <p className="card-text text-white mt-4 fw-bold ">
              Leveraged technologies: Python (Scikit-learn, Flask).
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
