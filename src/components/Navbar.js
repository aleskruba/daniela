import React, { useContext,useRef } from 'react'
import './navbar.css';
import ReactSwitch from "react-switch";
import { ThemeContext } from '../context/themeContext';
import { IoMdColorWand } from "react-icons/io";


function Navbar() {
    const { theme, toggleTheme,aboutRef, experienceRef, coursesRef, contactRef } = useContext(ThemeContext);


  return (
    <nav className="navbar">
        <div className="navbar-left">
        <a href="#" className="navbar-brand">Spanish with <span className='navbar-brand-name'>Dani</span></a>
          <div className='navbar-image-div'>
              <img src="dani.jpeg" alt="Daniela"  className='navbar-image' />
          </div>

        </div>
        <div className="navbar-right">
          <div href="#about" 
               className="nav-link"
               onClick={()=>{aboutRef.current.scrollIntoView({
                behavior:'smooth'
              }) }}
               >About Me</div>
          <div href="#experience" 
               className="nav-link"
               onClick={()=>{experienceRef.current.scrollIntoView({
                behavior:'smooth'
              }) }}
               >Experience</div>
          <div href="#courses" 
               className="nav-link"
               onClick={()=>{coursesRef.current.scrollIntoView({
                behavior:'smooth'
              }) }}
               >Courses</div>
          <div href="#contact" 
              className="nav-link"
              onClick={()=>{contactRef.current.scrollIntoView({
                behavior:'smooth'
              }) }}
              >Contact</div>
        <div className='switch'>
        <IoMdColorWand className='colorwand'/> 
            <ReactSwitch 
            onChange={toggleTheme} 
            checked={theme === "dark"} 
            offColor="#46045e"
            onColor="#fce9ed"
            offHandleColor="#f3ebf6"
            onHandleColor="#46045e"
            checkedIcon={false}
            uncheckedIcon={false}
            />
          </div>
        </div>
  </nav>
  )
}

export default Navbar