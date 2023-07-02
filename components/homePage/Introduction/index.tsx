"use client"

import { useState } from "react";


function Introduction() {
   const [isCollapsed, setIsCollapsed] = useState(false);

   const handleCollapseClick = () => {
      setIsCollapsed(!isCollapsed);
   }

   return (
      <div className={`relative shadow h-full rounded-lg transition-color duration-1000 ${isCollapsed ? "w-6 bg-transparent sm:w-full sm:h-6" : "w-2/3 bg-white sm:w-full"}`}>
         <button 
         className={`sm:invisible absolute z-10 top-0 bottom-0 my-auto left-full w-6 h-16 bg-green-300 text-white rounded-md transition duration-400 hover:bg-green-500 focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▶︎" : "◀︎"}
         </button>
         <button 
         className={`invisible sm:visible absolute z-10 sm:top-full sm:left-0 sm:right-0 sm:mx-auto sm:w-16 sm:h-6 bg-gray-200 rounded-md bg-green-300 text-white focus:outline-none`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? "▼" : "▲"}
         </button>

         <div className={`p-4 h-full transition-all duration-500 overflow-hidden ${isCollapsed ? "opacity-0" : "opacity-1"}`}>
            <h1 className="text-4xl font-bold text-center mb-4">My Laboratory</h1>
            <p>This is a place where I experiment with different ideas.</p>
         </div>
      </div>
   )
}

export default Introduction