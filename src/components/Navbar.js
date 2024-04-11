import React, { useContext } from 'react'
import './navbar.css';
import ReactSwitch from "react-switch";
import { ThemeContext } from '../context/themeContext';
import { FaMoon, FaSun  } from 'react-icons/fa';
import { IoMdColorWand } from "react-icons/io";


function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
        <div className="navbar-left">
        <a href="#" className="navbar-brand">Spanish with Daniela</a>
        </div>
        <div className="navbar-right">
        <a href="#" className="nav-link">About Me</a>
        <a href="#" className="nav-link">Experience</a>
        <a href="#" className="nav-link">Courses</a>
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