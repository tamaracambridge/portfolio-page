import React from "react";
import HeroImg from "../../assets/hero-img.png"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";


import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiFillLinkedin
} from "react-icons/ai";

const Hero = ({mode}) => {
console.log(mode)
  const colors = ["#F172A1", "#E64398", "#B39BC8"];

  return (

    <div className={`flex flex-row justify-center items-start overflow-hidden pt-7 pb-7 
    ${mode === "light" ? `light:bg-primary` : `dark:bg-primary`}
    `
    }>
      {/* Text container */}
      <div className="container ">
      <div className=" md:w-1/2 mx-auto text-center lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>

            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>

            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2 font">
              Programmer.
            </h1>
          </RainbowHighlight>
            
       </RoughNotationGroup>
     </div>
     </div>
     </div>

  );
};

export default Hero;