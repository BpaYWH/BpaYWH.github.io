"use client"

import { ReactElement, useState } from "react"

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

const maxPosition: TPosition = {
  x: 960,
  y: 540,
}

const startPosition: TPosition = {
  x: Math.floor(maxPosition.x / 2),
  y: Math.floor(maxPosition.y / 2),
}

//TODO: add timer, score, accuracy
export default function AimTraining(): ReactElement { 
  const [position, setPosition] = useState<TPosition>(startPosition)

  const handleDotClick = () => setPosition(getRandomPosition(maxPosition.x, maxPosition.y))

  return (
    <div className="m-4">
      {/* <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Start</button> */}
      <div className={`relative mx-auto my-8 w-[${maxPosition.x}px] h-[${maxPosition.y}px] border-[1px] border-black rounded-md`}>
        <svg onClick={handleDotClick} style={{position: 'absolute', top: position.y, left: position.x}}>
          <circle cx="10" cy="10" r="10" fill="red" className=" cursor-pointer" />
        </svg>
      </div>
    </div>
  )

}