"use client"

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: React.JSX.Element;
   imagePath?: string;
   path?: string;
   title: string;
}

function Card({ description, imagePath = "", path = "", title}: Props) {
   const [isMouseOver, setIsMouseOver] = useState(false)

   const handleMouseOver = () => {
      if(isMouseOver) return;
      setIsMouseOver(true)
   }

   return (
      <div onMouseOver={handleMouseOver} onMouseOut={() => setIsMouseOver(false)} className={`relative rounded-lg bg-gray-50 shadow-md w-[480px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[380px] 2xl:w[480px] rounded-lg transition duration-200 hover:shadow hover:scale-[1.01] hover:-translate-y-1 ${!isMouseOver && "disabled"}`}>
         {
            path !== "" &&
            <Link href={path} className="absolute z-10 top-0 left-0 w-full h-full" />
         }

         <div className="relative w-[480px] h-[480px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[380px] 2xl:w[480px] sm:h-[280px] md:h-[280px] lg:h-[300px] xl:h-[380px] 2xl:h[480px] shadow-lg">
            <Image
               alt=""
               src={imagePath}
               fill
               sizes="100vw"
               className="object-cover rounded-lg"
            />
         </div>

         <div className="p-4">
            <h1 className="text-2xl border-b-2 pb-2">
               {title}
            </h1>

            {description}
         </div>
      </div>
   )
}

export default Card