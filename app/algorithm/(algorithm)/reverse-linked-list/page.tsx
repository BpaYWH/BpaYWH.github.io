"use client"

import { Fragment, useState } from "react";

// Visualize the algorithm of reversing a linked list.
type NodeProps = {
  color?: string,
  size?: number,
  value: number,
};
type ArrowProps = {
  className?: string,
  size?: number,
  style?: object,
};

const Node = ({ color = "black", size = 40, value }: NodeProps) => {
  // a svg of a node, which is a circle with a text inside 
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle">
        <circle cx="24" cy="24" r="20"/>
        <text x="24" y="25" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="central" fill={color} fontFamily="Arial" fontSize="20px">
          {value}
        </text>
      </svg>
  );        
}

const Arrow = ({ className, size = 40, style = {} }: ArrowProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-move-right ${className}`} style={style}>
      <path d="M18 8L22 12L18 16"/>
      <path d="M2 12H22"/>
    </svg>
  )
}

const list = [1,2,3,4,5];

const arrowRightTransition = {
  transform: "rotate(0deg)",
  transition: "transform .3s ease-in-out",
};
const arrowLeftTransition = {
  transform: "rotate(180deg)",
  transition: "transform .3s ease-in-out",
};

function ReverseLinkedList() {
  const [isRotate, setIsRotate] = useState(false);
  return (
    <div>
      <h1>ReverseLinkedList</h1>

      <div id="example">
        <div className="flex items-center">
          <label>
            Original List:
          </label>
          {list.map((item, id) => (
            <Fragment key={`node-before-${id}`}>
              <Node value={item} size={40} />
              {
                id !== list.length - 1 &&
                <Arrow size={28} />            
              }
            </Fragment>
          ))}
        </div>
        <div className="flex items-center">
          <label>
            Revesed List:
          </label>
          {list.toReversed().map((item, id) => (
            <Fragment key={`node-after-${id}`}>
              <Node key={item} value={item} size={40} />
              {
                id !== list.length - 1 &&
                <Arrow size={28} />            
              }
            </Fragment>
          ))}
          </div>
      </div>

      <div id="code">
      </div>

      <div id="visualize">
        {
          // curr Node: Green Node
          // prev Node: Yellow Node
          // next Node: Blue Node
        }
        <div className="flex items-center">
          {list.map((item, id) => (
            <Fragment key={`node-visualize-${id}`}>
              <Node value={item} size={40} color="red" />
              {
                id !== list.length - 1 &&
                <Arrow size={28} style={isRotate ? arrowLeftTransition : arrowRightTransition} />            
              }
            </Fragment>
          ))}
        </div>
      </div>
      <button onClick={() => setIsRotate(!isRotate)}>
        toggle rotate
      </button>

    </div>
  )
}

export default ReverseLinkedList