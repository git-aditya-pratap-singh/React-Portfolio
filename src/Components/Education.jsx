import React, {useEffect} from "react";
import {education} from "./Data";
import { FaUserGraduate } from "react-icons/fa";
import "./nav.css";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) =>{
    return(
        <>
        <div className="flex flex-row gap-10 mx-auto max-w-[500px] p-5" data-aos="fade-up" >
            
                <div className="p-0.5 mt-1 bg-gray-800 rounded-full "></div>
                <div className="p-3 bg-gray-800 absolute rounded-full drop-shadow-md ml-[-17px]"><FaUserGraduate color="white"/></div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-[20px] tab:text-xl">{props.course}</h1>
                    <p className="text-cyan-600 font-semibold">{props.college}</p>
                    <p className="text-[14px]">Percentage : {props.percentage}%</p>
                    <p className="text-[14px]">{props.year}</p>
                    <p className="text-gray-500 text-[13px]">{props.summary}</p>
                </div>

                <div className="hidden md:block mt-0 w-20 h-20">
                    <img src={props.imgsrc} alt="Error" className="w-11 h-11 bg-contain bg-center  mx-auto "/>
                </div>
        </div>

        </>
    );
}

const Education = () =>{

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])

    return(
        <> 
        <section className="bg-white w-full pt-20 sm:pt-24 px-5" id="education">

            {/* About me design */}
            <div className="max-w-[300px] mx-auto text-center">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-gray-800 font-serif">Education</h1>

                <div className="w-[300px] flex flex-row gap-x-3 items-center justify-center">

                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                        <h1 className="text-[#fc036f] font-semibold">What i doing</h1>
                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                </div>
            </div>
            {/* End About-me design */} 


            {/* Education Design Section */}
            <div className="max-w-[600px] mx-auto">
               <div className="flex flex-col">

                  {
                    education.map((elem)=>{
                        return(
                            <>
                            <Card
                            key={elem.id}
                            course={elem.course}
                            college={elem.college}
                            percentage={elem.percentage}
                            year={elem.year}
                            summary={elem.summary}
                            imgsrc={elem.imgsrc}
                            />
                            </>
                        )
                    })
                }
                  
               </div>
            </div>

        </section>
        </>
    )
}
export default Education;