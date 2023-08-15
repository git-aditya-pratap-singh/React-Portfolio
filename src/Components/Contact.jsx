import React, {useEffect, useRef} from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaHackerrank, FaYoutube, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

/* Import Aos Libraray for Move the content */
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () =>{

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_az18ci9', 'template_adav6ic', e.target, 'DrGpzWOEz9bCkQAc9')
        .then((result) => {
            Swal.fire(
                'Successfully',
                'Your email has been Send!',
                'success'
              )
              e.target.reset();
        }, 
        (error) => {
            Swal.fire(
                'Error',
                'Your email has been not Send!',
                'error'
              )
        });
    };


    useEffect(()=>{
        Aos.init({offset: 100,
            duration: 600,
            easing: 'ease-in',
            once:true,
            delay: 100});
      },[])
    

    return(
        <>
        <section className="bg-cyan-700 w-full pt-20 sm:pt-24 overflow-hidden" id="contact">

             {/* Contact design */}
            <div className="max-w-[300px] mx-auto text-center">

                <h1 className="font-bold text-3xl tab:text-5xl md:text-4xl text-white font-serif">Contact-Us</h1>

                <div className="w-[300px] flex flex-row gap-x-3 items-center justify-center">

                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                        <h1 className="text-[#fc036f] font-semibold">get in touch</h1>
                    <div className="w-[50px] h-1 bg-cyan-500 rounded-md"></div>
                </div>
            </div>
            {/* End Contact design */} 


            {/* Main Section */}
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-5 p-5">
                
                
                {/* Left Design Section */}
                <div className="flex flex-col justify-between md:py-14" data-aos="fade-right">

                    <div className="text-white">
                        <h1 className="font-bold text-3xl sm:text-3xl tracking-wide">Get in touch</h1>
                        <p className="pt-2 text-cyan-100 text-sm font-medium sm:text-[15px] sm:leading-loose">Building a successful product is a challenge. 
                          I am highly energetic in user experience design, interfaces and web development.</p>
                    </div>


                    <div className="flex flex-col gap-5 text-white mt-10 text-sm sm:mt-16 md:text-[15px] md:text-sm ">
                        <div className="inline-flex space-x-3 items-center">
                            <FaPhoneAlt/>
                            <span>+91 8433399250</span>
                        </div>

                        <div className="inline-flex space-x-3 items-center">
                            <FaEnvelope/>
                            <span>singhadityapratap370@gmail.com</span> 
                        </div>

                        <div className="inline-flex space-x-3 items-center">
                            <FaMapMarkerAlt/>
                            <span>Sahadatpura, Mau</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-6 text-white text-2xl 
                           mt-10 sm:mt-28 md:text-3xl sm:gap-x-8 md:gap-x-6">
                        
                        <a href = "https://www.linkedin.com/in/theaditya-pratap-singh/"><FaLinkedinIn/></a>

                        <a href = "https://github.com/git-aditya-pratap-singh"><FaGithub/></a>

                        <a href = "https://www.hackerrank.com/aditya_singh_20"><FaHackerrank/></a>

                        <a href = "https://www.youtube.com/c/CodingHubTech"><FaYoutube/></a>

                        <a href = "https://www.instagram.com/aditya_singh_rajpoot_2.0/"><FaInstagram/></a>

                    </div>
                    
                </div>
                

                <div className="relative">
                    <div className="absolute z-0 w-40 h-40 rounded-full bg-teal-400 md:left-[310px] md:-top-16 
                    left-[250px] top-[-20px]" data-aos="zoom-in"></div>

                    <div className="absolute z-0 w-40 h-40 rounded-full bg-teal-400 md:top-[440px] md:left-[-50px]
                    left-[-50px] top-[450px]"></div>
                </div>
                

                <div className="relative bg-white rounded-xl shadow-lg p-6 text-gray-600" data-aos="fade-left">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 text-gray-800">
                        <div>
                            <label for="" className="text-sm font-bold">Your name</label>
            
                            <input type="text" 
                            name="user_name"
                            placeholder="Your name" 
                            required
                            autoComplete="off"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold ">Email Address</label>
                        
                            <input type="email"
                            name="user_email" 
                            placeholder="Email Address" 
                            required
                            autoComplete="off"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold ">Subject</label>
            
                            <input type="text" 
                            name="user_subject"
                            placeholder="Subject" 
                            autoComplete="off"
                            required
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                        </div>

                        <div>
                            <label for="" className="text-sm font-bold tab:text-[20px] md:text-sm">Message</label>
                        
                            <textarea
                            placeholder="Message"
                            name="message" 
                            required
                            rows="4"
                            className="ring-1 ring-gray-400 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300">
                            </textarea>
                        </div>
                        
                        <input type="submit" value="Send Message" className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 tab:py-3 md:py-2
                        uppercase cursor-pointer text-sm tab:text-lg md:text-sm" />
                
                    </form>
                </div>


            </div>

        {/* Footer Design */}

        <div className="w-full bg-slate-900 text-center items-center py-5 px-3 absolute">
            <h1 className=" text-white font-semibold text-sm tab:text-[20px] md:text-[16px]">Developed By 
            <span className="text-cyan-400"> Aditya Pratap Singh</span> | ©️ 2023 All rights reserved.</h1>
        </div>


        </section>
        </>
    )
}
export default Contact;