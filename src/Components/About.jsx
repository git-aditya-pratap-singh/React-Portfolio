import React from "react";
import Typed from 'react-typed';
import { FiAward } from "react-icons/fi";
import { BiBriefcase, BiDesktop } from "react-icons/bi";


import about from "../assets/b7.jpg";
import aditya from "../assets/aditya.png";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


import { RiDownloadCloudFill} from "react-icons/ri";

const About = () =>{

    React.useEffect(()=>{
        Aos.init({offset: 200,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
    },[])
    
    return(
        <>
        <section id="about" className="">

        <div className="w-full relative">

            <img src={about} alt="error" className="mx-auto absolute w-full h-full bg-center bg-cover"/>
            
            {/* Background Image above Opacity */}
            <div className="bg-black absolute w-full h-full opacity-80"></div> 
             

            {/* Image Above about-me section */}
            <div className="w-full mx-auto relative py-16 md:py-20 px-2 ">


            
            {/* About me design */}
            <div className="max-w-[300px] mx-auto p-5 text-center">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-white font-serif">About me</h1>

                <div className="w-[200px] mx-auto flex flex-row gap-x-3 items-center">

                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                        <h1 className="text-[#fc036f] font-normal">Who am I</h1>
                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                </div>
            </div>
            {/* End About-me design */} 


  
            {/* About-me information section(Image and Info) */}
            <div className="w-full py-3 md:py-7">
   

            {/* About-me flex part section*/}
            <div className="max-w-[1250px] flex flex-col lg:flex-row gap-y-3 md:gap-x-11 mx-auto py-3 items-center 
                        rounded-lg shadow-lg bg-white ">


            {/* flex-1 (Images) */}
            <div className="basis-1/2 items-center mx-auto px-3" data-aos="fade-up">
                <img src={aditya} alt="Error!" className="bg-center bg-cover rounded-lg"/>
            </div>


            {/* flex-2 (info) */}
            <div className="basis-1/2 text-justify text-gray-800 overflow-hidden px-5 space-y-3" data-aos="fade-up">
            
            {/* Experience, Completed & Learning Design Section */}
            <div className="flex flex-row space-x-3 items-center justify-center" data-aos="zoom-out-up">

               <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-8 border rounded-lg">
                  <h1><FiAward size={20} color="#fc036f"/></h1>
                  <h1 className="text-gray-800 font-normal text-[13px]">Experience</h1>
                  <h2 className="text-gray-500 text-[11px]">1+ Year's</h2>
               </div>

               <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-8 border rounded-lg">
                  <h1><BiBriefcase size={22} color="#fc036f" /></h1>
                  <h1 className="text-gray-800 font-normal text-[13px]">Completed</h1>
                  <h2 className="text-gray-500 text-[11px]">3 Project's +</h2>
               </div>

               <div className="flex flex-col items-center space-y-0 text-center py-3 px-4 sm:py-4 sm:px-6 border rounded-lg">
                  <h1><BiDesktop size={22} color="#fc036f"/></h1>
                  <h1 className="text-gray-800 font-normal text-[13px]">Learning</h1>
                  <h2 className="text-gray-500 text-[11px]">docker, AWS, Redis</h2>
               </div> 

            </div>
            {/* End of Experience, Completed & Learning Design Section */}


            <h1 className="flex flex-col sm:flex-row font-bold text-[25px] md:text-2xl tab:text-[33px] text-gray-800 text-left font antialiased">
                Hey, I'm Aditya and I'm a   
            <h1 className="ml-2"><Typed
               className="text-cyan-500 text-[25px] md:text-2xl tab:text-[33px] font antialiased font-semibold"
               strings={[' React Developer', ' Frontend Developer', ' MERN Developer', ' Full-Stack Developer']}
               typeSpeed={90}
               backSpeed={60}
               loop
            />
            </h1>
            </h1>
            <p className="mt-3 md:text-[15px] leading-6 sm:pr-5 first-letter:text-3xl first-letter:font-semibold">I am Aditya Pratap Singh from Mau, currently I'm working as a Software Developer and 
               I have 1+ years hands on experience in MERN-Stack Technology in Software field. 
               I had opportunity to work on various project that honed my skills. I'm passionate about solving real-world problem with
               innotive solution and continously learning new technology. 
               <b> I'm currently learning on docker, AWS, React-Native.</b></p>
           
        
            <a download="Resume_AdityaSingh.pdf" href="Resume.pdf"><button className='w-[150px] rounded-md flex flex-row items-center gap-1 
                font-medium my-5 py-3 text-white px-1 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[17px]'>
                <RiDownloadCloudFill className="ml-2"/>Download CV</button></a>
    
            </div>
            {/* End flex-2 (info) */}

        </div>
        {/* End About-me flex part section*/}

        </div>
        {/* End About-me information section(Image and Info) */}

        </div>
        {/* End Image Above about-me section */}

        </div>
        </section>
        </>
    )
}
export default About;