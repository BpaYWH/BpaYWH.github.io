"use client"

import { useState } from "react";

import Image from "next/image";

import Clock from "@/components/general/clock";

import { techStacksList } from "@/utils/config";

function Introduction() {
   const [isCollapsed, setIsCollapsed] = useState(false);

   const handleCollapseClick = () => {
      setIsCollapsed(!isCollapsed);
   }

   return (
      <div className={`relative shadow h-full pt-4 px-4 bg-opacity-90 rounded-lg transition-color duration-1000 ${isCollapsed ? "w-6 bg-transparent md:w-full md:h-6" : "w-1/2 bg-white md:w-full"}`}>
         <div className={`flex flex-col justify-between p-16 h-full md:p-4 transition-all duration-500 overflow-hidden ${isCollapsed ? "opacity-0" : "opacity-1"}`}>
            <div id="introduction" className="opacity-80">
               <h1 className="mb-4 md:mb-2 text-6xl md:text-4xl">Henry Yau</h1>
               <h3 className="text-xl md:text-lg">Full Stack Web Developer</h3>
               <p className="text-md md:text-sm text-gray-400">Unleashing Creativity through Web Development</p>
            </div>

            <div id="skill" className="pt-4 border-t">
               <h3 className="text-xl md:text-lg">Tech Stacks</h3>
               {
                  techStacksList.map(item => (
                     <div>
                        Hi
                     </div>
                  ))
               }
            </div>

            <div id="footer" className="flex justify-between">
               <Clock />

               <div className="flex gap-4 self-center">
                  <a href="mailto: henryyaubpa@gmail.com" title="Email" className="transition hover:scale-110">
                     <Image src="/assets/image/icon/mail.png" alt="Email"  width={24} height={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/winghong-yau-42282718a/" title="LinkedIn" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/icon/In-Blue-48.png" alt="LinkedIn" width={24} height={24} />
                  </a>
                  <a href="https://github.com/BpaYWH" title="Github" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/icon/github-mark.svg" alt="Github" width={24} height={24} />
                  </a>
               </div>
            </div>
         </div>

         <button 
         title={`${isCollapsed ? "Expand" : "Collapse"}`}
         className={`md:invisible absolute z-10 top-0 bottom-0 my-auto left-full w-6 h-16 bg-green-300 text-white rounded-md shadow-lg transition duration-400 hover:bg-green-500 focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▶︎" : "◀︎"}
         </button>
         <button 
         title={`${isCollapsed ? "Expand" : "Collapse"}`}
         className={`invisible md:visible absolute z-10 md:top-full md:left-0 md:right-0 md:mx-auto md:w-16 md:h-6 bg-gray-200 rounded-md bg-green-300 text-white shadow-lg focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▼" : "▲"}
         </button>
      </div>
   )
}

export default Introduction