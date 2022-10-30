import React, {useState} from "react";
import logo from "./assest/logo.png";
import {Link} from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

//import { HashLink as Link } from "react-router-hash-link";

const Navbar = () =>{

  const [toggle, setToggle] = useState(false);
    
    return(
        <>
         {/* Navbar Design */}
          
          <div className="w-full bg-slate-50  shadow-md p-3 ">

            <div className="max-w-[1450px] mx-auto flex justify-between items-center px-[20px] ">

            <div className="text-2xl font-bold text-cyan-500 flex items-center gap-3">
                    <img src={logo} alt="Error" className="w-[50px] md:w-[50px]"/>
                    <h1>Portfo<span className="text-red-500">lio.</span></h1>
            </div>

            {
                    toggle?
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-2xl block md:hidden"/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-2xl block md:hidden"/>
            }
{/* <div className={toggle ? "menuIcon active" : "menuIcon"}></div> */}
            <ul className="hidden md:flex text-gray gap-12 font-semibold items-center">

                    <li className="hover:text-teal-500 ease-in duration-300 break-before-column ">
                        <Link to="home"  smooth={true} duration={800}>🏠Home</Link>
                    </li>

                    <li className="hover:text-teal-500 ease-in duration-300">
                        <Link to="about" smooth={true} duration={800}>🧖‍♂️About-Us</Link>
                    </li>

                    <li className="hover:text-teal-500 ease-in duration-300">
                        <Link to="skill" smooth={true} duration={800}>🪬Skills</Link>
                    </li>

                    <li className="hover:text-teal-500 ease-in duration-300">
                        <Link to="project" smooth={true} duration={800}>🎖️Projects</Link>
                    </li>

                    <li className="hover:text-teal-500 ease-in duration-300">
                        <Link to="reposit" smooth={true} duration={800}>🪟Repositories</Link>                  
                    </li>

                    <li className="hover:text-teal-500 ease-in duration-300">
                        <Link to="contact" smooth={true} duration={800}>📞Contact</Link>
                    </li>
            </ul>

            {/* Mobile/tab Menu bar*/}

            <ul className={`block duration-300 md:hidden w-full text-center absolute bg-slate-50 shadow-lg rounded-b-lg
             top-[74px] right-0 text-gray-800 font-semibold transition-all-duration-500 ease-in-out border-t-2
             ${toggle? 'right-[0px]':'right-[-100%]'}
             `}>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="home" onClick={() => setToggle(false)} smooth={true} duration={800}>🏠Home</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="about" onClick={() => setToggle(false)} smooth={true} duration={800}>🧖‍♂️About-Us</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="skill" onClick={() => setToggle(false)} smooth={true} duration={800}>🪬Skills</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="project" onClick={() => setToggle(false)} smooth={true} duration={800}>🎖️Projects</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="reposit" onClick={() => setToggle(false)} smooth={true} duration={800}>🪟Repositories</Link>
                    </li>
                    <li className="p-5 m-3 text-lg hover:text-teal-500 ease-in duration-300">
                       <Link to="contact" onClick={() => setToggle(false)} smooth={true} duration={800}>📞Contact</Link>
                    </li>
            </ul>

            
            </div>
          </div>
        </>
    );
}
export default Navbar;