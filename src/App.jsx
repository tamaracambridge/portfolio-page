import { React, useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import { GrActions } from 'react-icons/gr';
import { useEffect } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const handleClick = () => {
    mode === "light" ? setMode("dark") : setMode("light");
    console.log(mode);
  };

  return (
    <>
      <div className={`${mode ? 'dark' : 'light'} mode-container`}>
      </div>
      <Navbar handleClick={handleClick} mode={mode}/>
      <Hero mode={mode}/>
      <About mode={mode}/>
      <Experience mode={mode}/>
      <Projects mode={mode}/>
      <Contact mode={mode}/>
    </>
  );
}

export default App;
