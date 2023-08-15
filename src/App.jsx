import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Repositories from "./Components/Repositories";
import Contact from "./Components/Contact";

import HashLoader from "react-spinners/HashLoader";

const App = () =>{

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },4000);
  },[])

  return(
    <>
    {
      loading ? <HashLoader color="#0bb8f1" loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader"
      className="flex mx-auto mt-[20rem]"/>
    :
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Repositories/>
    <Contact/>
    </>
    }
    </>
  )
}
export default App;