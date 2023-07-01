"use client"

import { useState } from "react";

import Switch from "@/components/general/switch";


function Introduction() {
   const [showcase, setShowcase] = useState("About");

   return (
      <div className="basis-1/3 flex flex-col justify-between p-4 h-full bg-white rounded-lg shadow">
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
   )
}

export default Introduction