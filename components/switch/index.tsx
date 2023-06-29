"use client"
import { useState } from "react";

type Props = {
   leftButton: string,
   rightButton: string
   className?: string
}

function Switch({ leftButton, rightButton, className = "" }: Props) {
  const [content, setContent] = useState<string>(leftButton);

  return (
   <div className={`grid grid-cols-2 bg-gray-200 rounded-3xl relative ${className}`}>
      <button onClick={() => setContent(leftButton)} className="z-10 px-4 py-2 rounded-3xl">
      {leftButton}
      </button>
      <button onClick={() => setContent(rightButton)} className="z-10 px-4 py-2 rounded-3xl">
         {rightButton}
      </button>
   <div className={`shadow-md absolute bg-green-300 w-1/2 h-full rounded-full transition ${content === leftButton ? "translate-x-0" : "translate-x-full"}`} />
 </div>
  )
}

export default Switch;