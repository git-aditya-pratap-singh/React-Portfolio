import React, { useState, useEffect } from "react";
import {Link} from 'react-scroll';            // import smooth scrolling
import { Outlet} from "react-router-dom";    //
import Hamburger from 'hamburger-react';     // import Hamburger menu

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

/* Import Icon */
import { FaHome,FaUserAlt } from "react-icons/fa"; 
import { GiSkills } from "react-icons/gi";
import { FaPhoneAlt, FaUserGraduate, FaProjectDiagram  } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import { RxDoubleArrowUp } from "react-icons/rx";

/* Import Logo and CSS file */
import logo from "../assets/logo.png";
import "./nav.css";



const Navbar = () =>{

    // ################### Navbar #####################
    const [toggle, setToggle] = useState(false); // display which navigation bar (Mobile || Laptop)
    const [Nav, setNav] = useState(false);  // For Change Navigation Color

    const changeBack = () =>{
        if(window.scrollY >= 100){
            setNav(true);  // Update a Nav value
        }
        else{
            setNav(false);  // Update a Nav value
        }
    }
    window.addEventListener('scroll',changeBack);
    // ################### Navbar #####################



    // ################### Scroll Button #####################
    const [toggle_top, setToggleTop] = useState(false); // display scrolltop Button

    const scrollTo = () =>{
        if(window.scrollY >= 800){
            setToggleTop(true);
        }
        else{
            setToggleTop(false);
        }
    }
    const ScrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    window.addEventListener('scroll',scrollTo);
    // #########################################################
    


    useEffect(()=>{
        Aos.init({offset: 100,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])
    
    return(
        <>
        {/* main section */}
        <div className={`w-full px-4 sm:px-8 py-3 fixed z-10 ${Nav ? 'bg-gray-900' : ''}`}>
           
           {/* main-2 section into main section */}
           <div className="flex flex-row justify-between  items-center">
           
            {/* Logo section */}
            <div className="text-2xl font-bold text-cyan-500 flex items-center gap-3">
                    <img src={logo} alt="Error" className="w-[50px] md:w-[50px]"/>
                    <h1>Portfo<span className="text-[#fc036f]">lio.</span></h1>
            </div>
            
            {/* Navgation Item section */}
            <div className="px-5 fine" data-aos="fade-up-left" >

                <ul className="hidden lg:flex flex-row items-center text-white font-semibold gap-7">

                    <li className="ease-in duration-300 break-before-column cursor-pointer relative">
                        <Link to="home" smooth={true} duration={800} activeClass="active" className="flex flex-row items-center gap-2"><FaHome/>Home</Link>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="about" smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaUserAlt/>About</Link>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="skill" smooth={true} duration={800} className="flex flex-row items-center gap-2"><GiSkills/>Skills</Link>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="education" smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaUserGraduate/>Education</Link>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="project" smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaProjectDiagram/>Projects</Link>
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="reposit" smooth={true} duration={800} className="flex flex-row items-center gap-2"><FiCodepen/>Repositories</Link>                  
                    </li>

                    <li className="ease-in duration-300 cursor-pointer relative">
                        <Link to="contact" smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaPhoneAlt/>Contact</Link>
                    </li>

                </ul>

            </div>
            {/* End Navgation Item section */}
            
            {/* Hamburger Menu */}
            <div className="lg:hidden bg-gray-900 rounded-md">
                <a onClick={() => setToggle(!toggle)}><Hamburger color="#fff" size={25} duration={0.5} easing="ease-in" rounded 
                    toggled={toggle} toggle={!toggle}/></a>
            </div>
            {/* End Hamburger Menu */}


            {/* Mobile Navigation Menu */}
            <div className={`w-[210px] bg-gray-900 lg:hidden absolute mt-[550px]  py-9 shadow-lg rounded-lg
            transition-all-duration-500 ease-in-out duration-300 fine
            ${toggle? 'right-0':'right-[-80%]'}
            `}>
            <ul className="flex flex-col text-white font-semibold gap-10 items-center">

                    <li className=" ease-in duration-300 break-before-column cursor-pointer relative">
                        <Link to="home" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaHome/>Home</Link>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="about" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaUserAlt/>About</Link>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="skill" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><GiSkills/>Skills</Link>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="education" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaUserGraduate/>Education</Link>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="project" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaProjectDiagram/>Projects</Link>
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="reposit" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FiCodepen/>Repositories</Link>                  
                    </li>

                    <li className=" ease-in duration-300 cursor-pointer relative">
                        <Link to="contact" onClick={() => setToggle(!toggle)} smooth={true} duration={800} className="flex flex-row items-center gap-2"><FaPhoneAlt/>Contact</Link>
                    </li>
            </ul>
            </div>
            {/* Mobile Navigation Menu */}

           </div>
           {/* End main-2 section into main section */}
        </div>
         
        <Outlet/>



        {/* Scroll from bottom to top design */}

        { toggle_top == true && 
        <div className="bg-cyan-400 p-3 rounded-full shadow-lg shadow-cyan-500/70 z-10 top-[90%] left-[83%] md:left-[95%] fixed" data-aos="zoom-in-out"
            onClick={ScrollTop}>
            <RxDoubleArrowUp className="text-white text-2xl"/>
        </div>
        }

        
        </>
    )
}
export default Navbar;