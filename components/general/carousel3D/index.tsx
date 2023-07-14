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
      <div className="relative">
         {
            data.map((item, index) => (
               <div 
               key={index} 
               className={`absolute left-0 right-0 mx-auto w-fit transition-all duration-200 ${index === currentId ? 'opacity-100' : 'opacity-30 scale-75'} ${(index + 1) % data.length === currentId && "translate-x-[95%]"} ${(index - 1 + data.length) % data.length === currentId && "-translate-x-[95%]"}`}
               onClick={() => {handleClick(index)}}
               >
                  {item}
               </div>
            ))
         }
      </div>
   )
}

export default Carousel3D