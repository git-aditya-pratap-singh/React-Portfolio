import React,{useEffect} from "react";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import {RepData} from "./Data";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


const Card =(props) =>{
    return(
        <>
          <div className="bg-gray-800 rounded-md flex flex-col md:flex-row gap-x-5 mx-auto items-center py-5 px-5 shadow-md" data-aos="zoom-in-out">
                <div className="bg-gray-700 rounded-full p-1 animate-spin"><AiFillCodeSandboxCircle size={60} color="cyan"/></div>

                <div className="flex flex-col items-center text-center mt-3">
                   <h1 className="text-xl md:text-xl lg:text-2xl text-white font-bold font ">{props.title}</h1>
                   <p className="mt-2 text-white text-[12px] md:text-[12px] lg:text-[14px] font-semibold">{props.details}</p>
                   <a href ={props.link}><FaGithub size={30} className="bg-gray-700 p-1 rounded-full text-cyan-500 mt-3 cursor-pointer hover:scale-110 duration-200"/></a>
                </div>

            </div>
        </>
    )
}

const Repositories = () =>{

    useEffect(()=>{
        Aos.init({offset: 100,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])
    

    return(
        <>
        <section className="bg-gray-900 w-full pt-20 sm:pt-24 " id='reposit'>

            {/* Repositories design */}
            <div className="max-w-[300px] mx-auto text-center">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-white font-serif">Repositories</h1>

                <div className="w-[300px] flex flex-row gap-x-3 items-center justify-center">

                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                        <h1 className="text-[#fc036f] font-semibold">What i Provide</h1>
                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                </div>
            </div>
            {/* End Repositories design */} 

            <div className="max-w-[1200px] mx-auto p-5 pt-10 grid grid-cols-1 md:grid-cols-2 gap-5 overflow-hidden">
                
            {
                RepData.map((elem)=>{
                    return(
                        <>
                         <Card
                         key = {elem.id}
                         title = {elem.title}
                         details = {elem.details}
                         link = {elem.link}
                         />
                        </>
                    )
                })
            }

            </div>

        </section>
        </>
    )
}
export default Repositories;