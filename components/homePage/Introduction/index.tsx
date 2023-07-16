"use client"

import Image from "next/image";

import Clock from "@/components/general/clock";

const responsiveSize = "h-[240px] w-[240px] sm:md:h-[120px] sm:md:w-[120px] lg:h-[240px] lg:w-[240px] xl:2xl:h-[320px] xl:2xl:w-[320px]";

const buttonBaseStyle = "px-8 py-4 rounded-l-full border-l-2 border-t-2 border-black drop-shadow text-4xl ";
const buttonHoverStyle = "hover:border-gray-400 hover:border-t-0 hover:border-b-2 hover:text-gray-600 transition-all duration-100";
const buttonResponsiveStyle = "sm:text-lg md:xl lg:xl:text-2xl xl:text-3xl 2-xl:text-4xl";

function Introduction() {
   return (
      <div className="overflow-hidden">
         <div className="absolute top-1/3 left-[50%]">
            <div className="relative left-[-50%]">
               <div className={`relative ${responsiveSize} mx-auto`}>
                  <Image
                  src="/assets/image/my-face.PNG"
                  alt="This is me"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                  />
               </div>

               <h1 className="mt-8 text-4xl md:text-4xl text-center">Henry Yau</h1>
               <h3 className="mt-8 text-xl md:text-lg">Full Stack Web Developer</h3>
               <p className="mt-4 text-md md:text-sm text-gray-400">Unleashing Creativity through Web Development</p>

               <div className="mt-8 mx-auto left-0 right-0 w-fit">
                  <Clock />
               </div>
            </div>
         </div>

         <div className="absolute right-0 top-[30%]">
            <div className="flex flex-col justify-between gap-24">
               <button className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}>
                  About
               </button>
               <button className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}>
                  Project
               </button>
               <button className={`${buttonBaseStyle} ${buttonHoverStyle} ${buttonResponsiveStyle}`}>
                  Lab
               </button>
            </div>
         </div>
      </div>
   )
}

export default Introduction