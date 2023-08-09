"use client"

import { MouseEvent, ReactElement, useEffect, useState } from "react";

import Timer from "@/components/general/timer";

type TPosition = {
  x: number,
  y: number,
}

function getRandomPosition(maxX: number, maxY: number): TPosition {
  return {
    // Should be max - min + 1, max - 1 includes the 1px boder
    x: Math.floor(Math.random() * (maxX - 1)),
    y: Math.floor(Math.random() * (maxY - 1)),
  };
} 

export default function AimTraining(): ReactElement { 
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<TPosition>({x: 0, y: 0});
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [rightClicks, setRightClicks] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const handleDotClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setScore(score + 50);
    
    setTotalClicks(totalClicks + 1);
    setRightClicks(rightClicks + 1);
    setAccuracy(Math.round(((rightClicks + 1)/ (totalClicks + 1)) * 100));

    setPosition(getRandomPosition(container?.scrollWidth || 0, container?.scrollHeight || 0));
  }

  const handleMissClick = () => {
    if(!isStarted) return;
    
    setScore(score - 30);
    
    setTotalClicks(totalClicks + 1);
    setAccuracy(Math.round((rightClicks/ (totalClicks + 1)) * 100));

  }

  const handleToggleAim = () => {
    if (isStarted) {
      setIsStarted(false);
      return;
    }

    if (!container) {
      console.error("not container");
      return;
    }

    const newPosition = getRandomPosition(container.scrollWidth - 20 || 0, container.scrollHeight - 20 || 0);
    setPosition(newPosition);
  
    setScore(0);
    setTotalClicks(0);
    setRightClicks(0);
    setAccuracy(0);

    setIsStarted(true);
  }

  useEffect(() => {
    const newContainer = document.getElementById("clickDiv");
    if (typeof window !== "undefined") {
      setContainer(newContainer);
    }
    if (!newContainer) {
      console.error("not browser or container")
      return;
    }
  }, []);

  return (
    <div className="mt-4 px-8 my-4 w-full h-full">
      <div className="flex justify-between">
        <button className={`px-4 py-2 ${isStarted ? "bg-gray-600 hover:bg-gray-500" : "bg-cyan-600 hover:bg-cyan-500"} text-white rounded-md shadow-md transition-color duration-300 hover:shadow-xl hover:scale-105`} onClick={handleToggleAim}>
          {
            isStarted ? "Stop" : "Start"
          }
        </button>

        <div className="flex items-center">
          <Timer counting={isStarted} setCounting={setIsStarted} />
        </div>

        <div>
          <p>Score: {score}</p>
          <p>Accuracy: {accuracy}%</p>
        </div>
      </div>
      <div id="clickDiv" className="relative mt-8 w-full h-full border-2 border-gray-300 rounded-md" onClick={handleMissClick}>
        <svg onClick={e => {handleDotClick(e)}} style={{position: 'absolute', top: position.y, left: position.x}} className={`w-[20px] h-[20px] ${!isStarted && "hidden"}`}>
          <circle cx="10" cy="10" r="10" fill="red" className=" cursor-pointer" />
        </svg>
      </div>
    </div>
  )

}