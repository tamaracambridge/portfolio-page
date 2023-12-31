import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import "../Style.css"
import { GrActions } from "react-icons/gr";
import { IconContext } from "react-icons"
import { sections } from "../../assets/Data/Data";



const Navbar = ({darkMode, handleClick}) => {
  const style = { color: "white", fontSize: "1.5em" }
  
  return (
    <>
    
    <div className="inline-grid grid-cols-2  w-full">
    <div >
    <GrActions style={style} onClick={handleClick}/>

    </div>
      <div>

    <a href="/" className="font-lobster logo text-4xl font-bold text-accent transition duration-150 ease-in-out hover:scale-110 pr-3 col-start-2 flex justify-end">
     Tamara Skerritt-Cambridge
   </a>

     
<ul className="flex col-span-2 col-start-2 justify-end">
      {sections.map((section) => {
        return(
          <li className= "mb-5 mt-5 hover:h-full group-hover:w-full group-hover:transition-all font-space">
            <a href={"/#"+ section.lowerName} className= "hover:pink hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110 pl-5 pb-5 pt-5 pr-5 scroll  ">
              {section.name}
            </a>
          </li>
        )

      }
      )}
</ul>
</div>
</div>
</>
  );
};

export default Navbar;