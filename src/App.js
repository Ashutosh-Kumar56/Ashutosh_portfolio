import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
// import Project from './components/Projects';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Projects from './components/Projects';
import Contact from './components/Contact';
// import './components/Navbar';
// import './components/Hero';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/> */}

      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */}



<Navbar/>
        <div id="hero">
        <Hero/> {/* Your existing Home component */}
      </div>

      <div id="about">
        <About /> {/* Your existing About component */}
      </div>

      <div id="skills">
        <Skills /> {/* Your existing Skills component */}
      </div>

      <div id="projects">
        <Projects /> {/* Your existing Projects component */}
      </div>

      <div id="contact">
        <Contact /> {/* Your existing Contact component */}
      </div>




    </div>
  );
}

export default App;
