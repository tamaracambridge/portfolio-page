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

const Hero = () => {

  const colors = ["#F172A1", "#E64398", "#B39BC8"];

  return (
    // <section className="bg-primary px-5 text-white py-32 font-lobster">
    //   <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    //     <div className="hero-info pb-5 md:pb-0">
    //     <RoughNotationGroup show={true}>
    //       <RainbowHighlight color={colors[0]}>
    //       <h1 className="text-4xl lg:text-6xl">
          
    //         Hi, <br />I am <span className="text-accent">T</span>amara <br />
    //         A Frontend Developer
    //       </h1>
    //       </RainbowHighlight>
    //    </RoughNotationGroup>
    //       <p className="py-5">
    //         I have experience in JavaScript, React.js and Tailwind CSS
    //       </p>

    //       <div className="flex py-5 ">
    //         <a
    //           href="https://www.linkedin.com/in/tamara-s-8222a619b/"
    //           className="pr-4 inline-block text-accent hover:text-white"
    //         >
    //           {" "}
    //           <AiFillLinkedin size={40} />{" "}
    //         </a>
    //       </div>

    //       <a
    //         href="/#projects"
    //         className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
    //       >
    //         See Projects
    //       </a>
    //     </div>

    //     <div className="hero-img">
    //       <img
    //         src={HeroImg}
    //         alt="coding illustration"
    //         className="lgw-[80%] ml-auto"
    //       />
    //     </div>
    //   </div>
    // </section>

    <div className="flex flex-row justify-center items-start overflow-hidden pt-7 pb-7">
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