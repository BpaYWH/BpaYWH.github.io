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

const responsiveWidth = "sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w[400px]";
const responsiveHeight = "sm:h-[150px] md:h-[180px] lg:h-[210px] xl:h-[240px] 2xl:h[300px]";
const defaultWidth = "w-[400px]";

function Card({ description, imagePath = "", path = "", title}: Props) {
   const [isMouseOver, setIsMouseOver] = useState(false)

   const handleMouseOver = () => {
      if(isMouseOver) return;
      setIsMouseOver(true)
   }

   return (
      <div onMouseOver={handleMouseOver} onMouseOut={() => setIsMouseOver(false)} className={`relative rounded-lg bg-gray-50 shadow-md ${defaultWidth} ${responsiveWidth} ${responsiveHeight} rounded-lg transition duration-200 hover:shadow hover:scale-[1.01] hover:-translate-y-1 ${!isMouseOver && "disabled"}`}>
         {
            path !== "" &&
            <Link href={path} className="absolute z-10 top-0 left-0 w-full h-full" />
         }

         <div className={`relative ${defaultWidth} h-[280px] ${responsiveWidth} ${responsiveHeight}  shadow-lg`}>
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