"use client"

import { useState } from "react";

import Switch from "@/components/general/switch";

const collapsedStyle = "left-0 rounded-lg";
const expandedStyle = "right-0 rounded-l-lg ";

function Introduction() {
   const [showcase, setShowcase] = useState("About");
   const [isCollapsed, setIsCollapsed] = useState(false);

   const handleCollapseClick = () => {
      setIsCollapsed(!isCollapsed);
   }

   return (
      <div className={`relative basis-auto h-full rounded-lg ${isCollapsed ? "w-6 bg-transparent" : "bg-white shadow"}`}>
         <button 
         className={`absolute top-1/2 w-6 h-16 bg-gray-200 transition hover:bg-gray-300 ${isCollapsed ? collapsedStyle : expandedStyle}`}
         onClick={handleCollapseClick}
         >
            {isCollapsed ? ">" : "<"}
         </button>

         {
            !isCollapsed &&
            <div className="flex flex-col justify-between p-4 h-full">
               {
                  showcase === "About" &&
                  <div>
                     <h1 className="text-4xl font-bold text-center mb-4">My Laboratory</h1>
                     <p>This is a place where I experiment with different ideas.</p>
                  </div>
               }
               {
                  showcase === "Contact" &&
                  <div>
                     <h1 className="text-4xl font-bold text-center mb-4">Contact</h1>
                     <p>My Contact: </p>
                  </div>
               
            }

               <Switch leftButton="About" rightButton="Contact" showcase={showcase} setShowcase={setShowcase} />
            </div>
         }
      </div>
   )
}

export default Introduction