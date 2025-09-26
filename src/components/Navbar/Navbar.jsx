import "./Navbar.css"
import logo from "/logo.png"
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="flex justify-between items-center px-10 md:px-20 py-2 shadow-md rounded-full bg-white/16 backdrop-blur-xl text-white z-50 mr-5 ml-5 md:mr-15 md:ml-15">
  
        <img src={logo} alt="logo" className="logo p-0" />

        <button 
        className="menu-icon lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-bars text-2xl text-fuchsia-300"></i>
        </button>

        <ul className={`hidden lg:flex gap-6 text-gray-200 font-medium nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <a href="#contact"><button className="contact px-5 py-2 md:px-7 md:py-2 mt-3 md:mt-0 rounded-full bg-white text-black font-semibold text-sm md:text-md shadow-lg">
             Contact
            </button></a>
        </ul>
     </nav>
  )
}

export default Navbar
