import React from "react";
import Header from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
