"use client"
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
   leftButton: string;
   rightButton: string;
   className?: string;
   showcase: string;
   setShowcase: React.Dispatch<React.SetStateAction<string>>;
}

function Switch({ leftButton, rightButton, className = "", showcase, setShowcase }: Props) {

  return (
   <div className={`grid grid-cols-2 bg-gray-200 rounded-3xl relative ${className}`}>
      <button onClick={() => setShowcase(leftButton)} className={`z-10 px-4 py-2 rounded-3xl`}>
      {leftButton}
      </button>
      <button onClick={() => setShowcase(rightButton)} className={`z-10 px-4 py-2 rounded-3xl`}>
         {rightButton}
      </button>
   <div className={`shadow-md absolute bg-green-300 w-1/2 h-full rounded-full transition ${showcase === leftButton ? "translate-x-0" : "translate-x-full"}`} />
 </div>
  )
}

export default Switch;