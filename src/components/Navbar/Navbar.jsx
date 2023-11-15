import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import "../Style.css"


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const sections = [{name: "About", lowerName: "about"},
  {name: "Projects", lowerName: "projects"},
  {name: "Employment History", lowerName: "employment/history"},
  {name: "Resume", lowerName: "resume"},
  {name: "Contact", lowerName: "contact"}]
  const handleToggle = () => setToggle(!toggle);

  return (
    <>
    <div className="flex justify-end">

    <a href="/" className="font-lobster logo text-4xl font-bold text-accent transition duration-150 ease-in-out hover:scale-110 pr-3 ">
     Tamara Skerritt-Cambridge
   </a>
   </div>

    <header className="flex justify-end ">
     
<ul className="flex">
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

 
</header>
</>
  );
};

export default Header;