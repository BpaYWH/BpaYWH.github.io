"use client"

import { useState } from "react";

import Image from "next/image";

import Clock from "@/components/general/clock";

function Introduction() {
   const [isCollapsed, setIsCollapsed] = useState(false);

   const handleCollapseClick = () => {
      setIsCollapsed(!isCollapsed);
   }

   return (
      <div className={`relative shadow h-full bg-opacity-90 rounded-lg transition-color duration-1000 ${isCollapsed ? "w-6 bg-transparent sm:w-full sm:h-6" : "w-2/3 bg-white sm:w-full"}`}>
         <button 
         className={`sm:invisible absolute z-10 top-0 bottom-0 my-auto left-full w-6 h-16 bg-green-300 text-white rounded-md shadow-lg transition duration-400 hover:bg-green-500 focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▶︎" : "◀︎"}
         </button>
         <button 
         className={`invisible sm:visible absolute z-10 sm:top-full sm:left-0 sm:right-0 sm:mx-auto sm:w-16 sm:h-6 bg-gray-200 rounded-md bg-green-300 text-white shadow-lg focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▼" : "▲"}
         </button>

         <div className={`flex flex-col justify-between p-4 h-full transition-all duration-500 overflow-hidden ${isCollapsed ? "opacity-0" : "opacity-1"}`}>
            <div>
               <h1 className="text-4xl font-bold text-center mb-4">Henry Yau</h1>
               <p>Web Developer</p>
               <p>Unleashing Creativity through Web Development</p>
            </div>

            <div id="footer" className="flex justify-between gap-8">
               <div>
                  <Clock />
               </div>
               <div className="flex gap-4">
                  <a href="mailto: henryyaubpa@gmail.com" className="transition hover:scale-110">
                     <Image src="/assets/image/mail.png" alt="Email" width={32} height={32} />
                  </a>
                  <a href="https://www.linkedin.com/in/winghong-yau-42282718a/" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/In-Blue-48.png" alt="LinkedIn" width={32} height={32} />
                  </a>
                  <a href="https://github.com/BpaYWH" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/github-mark.svg" alt="Github" width={32} height={32} />
                  </a>
               </div>
            </div>
         </div>


      </div>
   )
}

export default Introduction