"use client"

import { HTMLAttributes, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
   data: any[];
}

function Carousel3D({ className, data, ...props  }: Props) {
   const [currentId, setCurrentId] = useState(0);

   const handleClick = (id: number) => {
      setCurrentId(id);
   }

   return (
      <div className="overflow-x-hidden">

         <div className="flex justify-center">
            {
               data.map((item, index) => (
                  <div 
                  key={index} 
                  // className={`mx-auto w-fit transition-all duration-200 ${index === currentId ? 'opacity-100' : 'opacity-30 scale-75'} ${(index + 1) % data.length === currentId && "translate-x-[95%]"} ${(index - 1 + data.length) % data.length === currentId && "-translate-x-[95%]"}`}
                  className={`mx-auto w-fit transition-all duration-200 ${index === currentId ? 'opacity-100' : 'opacity-30 scale-75'} ${(index + 1) % data.length === currentId && ""} ${(index - 1 + data.length) % data.length === currentId && ""}`}
                  onClick={() => {handleClick(index)}}
                  >
                     {item}
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Carousel3D