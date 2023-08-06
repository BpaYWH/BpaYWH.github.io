"use client"

import { MouseEvent, useState } from "react";
import Image from "next/image";

import About from "@/components/about";
import Clock from "@/components/general/clock";
import Lab from "@/components/lab";
import Project from "@/components/project";

const responsiveSize = "h-[240px] w-[240px] sm:md:h-[120px] sm:md:w-[120px] lg:h-[240px] lg:w-[240px] xl:2xl:h-[320px] xl:2xl:w-[320px]";

const buttonBaseStyle = "px-8 py-4 rounded-l-full border-l-2 border-t-2 border-black drop-shadow text-4xl ";
const buttonHoverStyle = "hover:border-gray-400 hover:border-t-0 hover:border-b-2 hover:text-gray-600 transition-all duration-100";
const buttonResponsiveStyle = "sm:text-sm sm:px-4 sm:py-2 md:text-md md:px-6 md:py-3 lg:text-xl xl:text-2xl 2-xl:text-4xl";

const sideDivBaseStyle = "absolute left-0 top-[15%] w-3/4 border-gray-500 border-y border-r rounded-r-md bg-white transition-all duration-300";

function Introduction() {
   const [showAbout, setShowAbout] = useState(false);
   const [showProject, setShowProject] = useState(false);
   const [showLab, setShowLab] = useState(false);

   const handleAboutClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      setShowAbout(!showAbout);
      setShowProject(false);
      setShowLab(false);
   }
   const handleProjectClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      setShowAbout(false);
      setShowProject(!showProject);
      setShowLab(false);
   }
   const handleLabClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      setShowAbout(false);
      setShowProject(false);
      setShowLab(!showLab);
   }
   const handleBlankClick = () => {
      setShowAbout(false);
      setShowProject(false);
      setShowLab(false);
   }

   return (
      <div onClick={handleBlankClick}>
          <Image
          src="/assets/image/background-global.PNG"
          alt="Global Background"
          fill
          className="opacity-20"
          />
          <div id="global-background" className="font-caveat text-9xl font-bold text-gray-500 md:text-7xl opacity-10">
            <h1 className="absolute top-[10%] left-[5%]">
              Code
            </h1>
            <h1 className="absolute bottom-[12%] left-[28%]">
              Create
            </h1>
            <h1 className="absolute top-[28%] right-[8%]">
              Inspire
            </h1>
          </div>
          <div className="absolute top-0 left-0 w-full h-full" />

         <div className="absolute top-0 left-0 w-full h-full overflow-hidden" onClick={handleBlankClick}/>

         <div className="absolute top-[20%] left-[50%]">
            <div className="relative left-[-50%]">
               <div className={`relative ${responsiveSize} mx-auto`}>
                  <Image
                  src="/assets/image/my-face.PNG"
                  alt="This is me"
                  title="This is me!"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                  />
               </div>

               <h1 className="mt-8 text-4xl sm:text-2xl md:text-3xl xl:text-3xl text-center">Henry Yau</h1>
               <h3 className="mt-8 text-xl sm:text-md md:text-lg xl:text-xl">Full Stack Developer</h3>
               <p className="mt-4 text-md sm:text-sm md:text-sm text-gray-400">Unleashing Creativity through Web Development</p>

               <div className="mt-8 mx-auto left-0 right-0 w-fit">
                  <Clock />
               </div>
            </div>
         </div>

         <div className="absolute right-0 top-[20%]">
            <div className="flex flex-col justify-between gap-24">
               <button
               className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}
               onClick={e => handleAboutClick(e)}
               >
                  About
               </button>

               <button 
               className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}
               onClick={e => handleProjectClick(e)}
               >
                  Project
               </button>

               {/* <button
               className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}
               onClick={e => handleLabClick(e)}
               >
                  Lab
               </button> */}
            </div>
         </div>

         <div className={`w-5/6 ${sideDivBaseStyle} ${showAbout ? `translate-x-0` : `-translate-x-full`}`}>
            <About />
         </div>
         <div className={`${sideDivBaseStyle} ${showProject ? `translate-x-0` : `-translate-x-full`}`}>
            <Project />
         </div>
         <div className={`${sideDivBaseStyle} ${showLab ? `translate-x-0` : `-translate-x-full`}`}>
            <Lab />
         </div>
      </div>
   )
}

export default Introduction