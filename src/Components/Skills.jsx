import React, { useEffect } from "react";
import Data from "./Data";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


const Pic = (props) =>{
    return(
        <>
        <div className="flex flex-col space-y-4 bg-white items-center p-5 rounded-lg hover:scale-105" data-aos="fade-up">

            <div className="w-32 h-32 rounded-full border-1 shadow-lg relative ">
                <img src={props.img} className="bg-center bg-contain p-5"/>
                <div className="bg-gray-800 p-2.5 sm:p-2 absolute rounded-full mt-[-25px] ml-[90px] text-white text-[11px] sm:text-[10px] ">{props.num}%</div>
            </div>

            <h2 className="text-center font-bold text-gray-800">{props.title}</h2>
            <p className="font-semibold text-center text-gray-700 text-[13px] sm:text-[12px]">{props.subtitle}</p>

        </div>
        </>
    )
}

const Skills = () =>{

    useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])

    return(
        <>
        <section className="bg-gray-900 w-full pt-20 sm:pt-24 px-3" id="skill">
            
           <div className="w-full h-full">
               
            {/* About me design */}
            <div className="max-w-[300px] mx-auto  text-center">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-white font-serif">Skills</h1>

                <div className="w-[300px] flex flex-row gap-x-3 items-center justify-center">

                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                        <h1 className="text-[#fc036f] font-semibold">What do I Know</h1>
                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                </div>
            </div>
            {/* End About-me design */} 


            {/* Skills Grid section */}
            <div className="flex items-center justify-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-3 sm:p-5">
                  
                  {
                    Data.map((elem)=>{
                        return(
                            <>
                            <Pic
                              key={elem.id}
                              img={elem.image}
                              title={elem.title}
                              subtitle={elem.subtitle}
                              num={elem.num}
                            />
                            </>
                        )
                    })
                  }
                    

                </div>
            </div>


           </div>
        </section>
        </>
    )
}
export default Skills;