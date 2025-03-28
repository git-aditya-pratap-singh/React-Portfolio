import html from "../assets/html5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import js from "../assets/js.png";
import java from "../assets/java.png";
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import c from "../assets/C_Logo.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";
import dsa from "../assets/dsa.png";
import netlify from "../assets/netlify.png";
import orlank from "../assets/orlank.avif";
import typescript from "../assets/ts.png";
import sass from "../assets/sass.png";
import bitbucket from "../assets/bitbucket.png";

import bu from "../assets/bu.png";
import srmu from "../assets/srmu.png";
import tdic from "../assets/tdic.png";

import student from "../assets/student.png";
import weather from "../assets/weather.png";
import vote from "../assets/vote.png";
import todo from "../assets/todo.png"
import port from "../assets/port.png";
import food from '../assets/food.png';
import cresclogo from "../assets/cresc_logo.png";


// Skills Data ----------------------------------------------
const Data = [
    {
        id:1,
        image: c,
        title:"C",
        subtitle:"C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie.",
        num:70
    },

    {
        id:2,
        image: java,
        title:"Java",
        subtitle:"Java is a programming language. It was created by James Gosling, and released in 1995.",
        num:50
    },

    {
        id:3,
        image: python,
        title:"Python",
        subtitle:"Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
        num:80
    },

    {
        id:4,
        image: html,
        title:"HTML",
        subtitle:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        num:80
    },

    {
        id:5,
        image: css,
        title:"CSS",
        subtitle:"CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language.",
        num:80
    },

    {
        id:7,
        image: sass,
        title:"SCSS",
        subtitle:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap.",
        num:75

    },

    {
        id:8,
        image: tailwind,
        title:"Tailwind CSS",
        subtitle:"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap.",
        num:75

    },
    
    {
        id:9,
        image: js,
        title:"JavaScript",
        subtitle:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia and everything else.",
        num:80
    },

    {
        id:10,
        image: typescript,
        title:"TypeScript",
        subtitle:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia and everything else.",
        num:65
    },

    {
        id:11,
        image: react,
        title:"Reactjs",
        subtitle:"React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
        num:85
    },

    {
        id:12,
        image: nodejs,
        title:"Nodejs",
        subtitle:"Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
        num:75
    },

    {
        id:13,
        image: php,
        title:"PHP",
        subtitle:"PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993.",
        num:65
    },

    {
        id:14,
        image: mysql,
        title:"MySql",
        subtitle:"MySQL is an open-source relational database management system. Its name is a co-founder Michael Widenius's and SQL (Structured Query Language).",
        num:80
    },

    {
        id:15,
        image: mongo,
        title:"MongoDB",
        subtitle:"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program.",
        num:80
    },

    {
        id:16,
        image: dsa,
        title:"Data Structure with Python",
        subtitle:"DSA stands for Data Structures and Algorithms. It is also sometimes referred to Problem Solving Data Structures.",
        num:65
    },

    {
        id:17,
        image: netlify,
        title:"Netlify",
        subtitle:"Netlify is a remote-first cloud computing company that offers a development platform that includes build, deploy.",
        num:78
    },


    {
        id:18,
        image: github,
        title:"GitHub",
        subtitle:"GitHub is an Internet hosting service for software development and version control using Git.",
        num:70
    },
    {
        id:19,
        image: bitbucket,
        title:"BitBucket",
        subtitle:"GitHub is an Internet hosting service for software development and version control using Git.",
        num:50
    },


]

// Education Data----------------------------------

const education = [
    {
        id : 1,
        course : "Master Of Computer Application (MCA)",
        college : "BundelKhand University, Jhansi",
        percentage : "75",
        year : "July 2021 - June 2023",
        summary : "Completed Master Of Computer Application from Bundelkhand University, Jhansi I got overall 74% in my MCA Degree.",
        imgsrc : bu

    },
    {
        id : 2,
        course : "Bachelor Of Computer Application (BCA)",
        college : "Shri Ramswaroop Memorial University, Lucknow",
        percentage : 64,
        year : "July 2018 - June 2021",
        summary : "Completed Bachelor Of Computer Application from Shri Ramswaroop Memorial university, Lucknow I got overall 64% in my BCA Degree.",
        imgsrc : srmu
    },
    {
        id : 3,
        course : "Intermediate",
        college : "Tileshwari Devi Intermediate College, Ballia",
        percentage : 90,
        year : "July 2016 - June 2017",
        summary : "Completed Intermediate from TDI College, Ballia I got overall 90% in Board.",
        imgsrc : tdic
    },
    {
        id : 4,
        course : "High School",
        college : "Tileshwari Devi Intermediate College, Ballia",
        percentage : 88,
        year : "July 2014 - June 2015",
        summary : "Completed Higher Education from TDI College, Ballia I got overall 88% in Board.",
        imgsrc : tdic
    }
]


// Project Data-set ------------------------------------------------

const projectData = [
    {
        id : 1,
        imgsrc : food,
        title : "Foodzy (Food Ordering Web App)",
        details : "The MERN-based food delivery web app provides a seamless and efficient platform for users to order their favorite meals from local restaurants. With a user-friendly interface, real-time tracking, secure payments.",
        github : "https://github.com/git-aditya-pratap-singh/foodzy_UI",
        youtube : "https://foodzyweb.netlify.app/",
    },

    {
        id : 2,
        imgsrc : weather,
        title : "React Weather App",
        details : "I have developed Weather App using New Technology like Tailwind CSS and React. In this app you get relevant and all information from the weather. We get all the information in the Weather app through the Weather API.",
        github : "https://github.com/git-aditya-pratap-singh/React-Weather-App",
        youtube : "https://weatherapk2.netlify.app",
    },


    {
       id : 3,
       imgsrc : "https://user-images.githubusercontent.com/68802755/168081638-05a3933b-9f36-4c6f-98a4-581fd265123d.png",
       title : "Library Management System",
       details : "I have developed a library management system using Tkinter libraries in python. so all components are used in the library management system.",
       github : "https://github.com/git-aditya-pratap-singh/LibrarySystempython",
       youtube : "https://youtu.be/gfKtsv5npWY",
    },

    {
        id : 4,
        imgsrc : student,   
        title : "Student Management System",
        details : "I have developed students management system using PyQt5 libraries in python. so all components are used in Students management system",
        github : "https://github.com/git-aditya-pratap-singh/Student-management-System",
        youtube : "https://youtu.be/dVb0inSkKjA",
    },

    
    {
        id : 5,
        imgsrc : todo,
        title : "ToDo App Using React",
        details : "I'm talking about the project being completed. As the data is stored locally, there is no data loss when refreshing the app as it uses JavaScript frontend library ReactJs and CSS framework Tailwindcss.",
        github : "https://github.com/git-aditya-pratap-singh/Todo_App_React",
        youtube : "https://todoappin.netlify.app/",
    },

    {
        id : 6,
        imgsrc : port,
        title : "Portfolio Using React",
        details : "I have developed my web Portfolio using new technology like Tailwind css and Reactjs and with this of all my details. It is easy to update this portfolio because it's based on Components based design.",
        github : "https://github.com/git-aditya-pratap-singh/React-Portfolio-dummy",
        youtube : "https://aditya-singh.netlify.app/",
    },


    {
        id : 7,
        imgsrc : vote,
        title : "Online Voting System",
        details : "I have developed Online Voting System using fronted languages(HTML5,CSS,JavaScript) and Backend languages(PHP) and MySql Database.",
        github : "",
        youtube : "",
    },
]

const RepData = [
    {
        id : 1,
        title : "Data Structure With Python",
        details : "All Data Structure concepts like Linked List, Stack, Queues, Tree, Graphs, and Heaps are included inside Repositories.",
        link : "https://github.com/git-aditya-pratap-singh/Data-Structure-with-Python",
    },

    {
        id : 2,
        title : "Algorithms With Python",
        details : "Inside Repositories, All Algorithms like Searching, Sorting, and Greedy are included.",
        link : "https://github.com/git-aditya-pratap-singh/Algorithms-with-Python",
    },
]

const experienceData = [
    {
        id: 1,
        designation: 'Software Developer',
        company: 'Cresc Datasoft Pvt Ltd.',
        techStack: 'ReactJS, NodeJS, MongoDB, MYSQL, API',
        year : 'Sep 2023 - Sep 2024',
        rolesAndResponsibilities: [
            {
                id: 1,
                Name: 'BDS (Web App)',
                roleRes: [
                    {
                        id: 1,
                        label: 'Designed a module that extracts data from the database and transfers it to Excel.'
                    },
                    {
                        id: 2,
                        label: 'Implemented and managed the MongoDB database, including schema design and aggregation pipelines.'
                    }
                ]
            },
            {
                id: 2,
                Name: 'HRMS Portal',
                roleRes: [
                    {
                        id: 1,
                        label: 'Developed a cutting-edge login module that utilizes both JWT authentication and OTP-based authentication.'
                    },
                    {
                        id: 2,
                        label: 'API Development: Developed RESTful APIs using Node.js and Express.js.'
                    },
                    {
                        id: 3,
                        label: 'Performance Optimization: Optimized backend performance for scalability and efficiency.'
                    }
                ]
            }
        ],
        imgsrc: cresclogo
    },

    {
        id: 2,
        designation: 'Full Stack MERN Developer',
        company: 'Orlank Technologies Pvt Ltd.',
        techStack: 'ReactJS, NodeJS, MongoDB, MYSQL, API',
        year : 'Jan 2025 - Mar 2025',
        rolesAndResponsibilities: [
            {
                id: 1,
                Name: 'Toor & Travel Web App',
                roleRes: [
                    {
                        id: 1,
                        label: 'Developed a cutting-edge login module that utilizes both JWT authentication and OTP-based authentication.'
                    },
                    {
                        id: 2,
                        label: 'Business Logic: Developed server-side logic for handling HRMS functions such as attendance, employee information, and punching time in/out using MongoDB aggregation pipelines.'
                    },
                    {
                        id: 3,
                        label: 'Performance Optimization: Optimized backend performance for scalability and efficiency.'
                    }
                ]
            }
        ],
        imgsrc: orlank
    }
];




export default Data;
export {education}
export {projectData};
export {RepData};
export {experienceData};