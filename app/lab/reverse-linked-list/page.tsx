"use client"

import { Fragment, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const colorMap: { [key: string]: string } = {
  prev: "red",
  curr: "green",
  next: "rgb(0, 100, 255)",
}
const stepButtonStyle = "px-4 py-2 rounded-md border-black border hover:border-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-400";

// Visualize the algorithm of reversing a linked list.
type NodeProps = {
  color?: string,
  size?: number,
  value: number | string,
};
type ArrowProps = {
  className?: string,
  size?: number,
  style?: object,
};

const Node = ({ color = "black", size = 40, value }: NodeProps) => {
  // a svg of a node, which is a circle with a text inside 
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="3" className="lucide lucide-circle">
        <circle cx="24" cy="24" r="20"/>
        <text x="24" y="25" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="central" fill={color} fontFamily="Arial" fontSize="20px">
          {value}
        </text>
      </svg>
  );        
}

const Arrow = ({ className, size = 40, style = {} }: ArrowProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`lucide lucide-move-right ${className}`} style={style}>
      <path d="M18 8L22 12L18 16"/>
      <path d="M2 12H22"/>
    </svg>
  )
}

class ListNode {
  val: number;
  next: ListNode | null;
  key: string; // prev, curr, next
  
  constructor(val?: number, next?: ListNode | null, key?: string) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.key = key === undefined ? "" : key;
  }
}

const list = [1,2,3,4,5];
const formNodeArr = (list: number[]): ListNode[] => {
  let curr: ListNode = new ListNode();
  const res: ListNode[] = [];

  for (let i = 0; i < list.length - 1; i++) {
    curr.val =list[i];
    curr.next = new ListNode(list[i + 1]);
    res.push(curr);

    curr = curr.next;
  }
  res.push(curr);
  if (res.length > 1) {
    res[0].key = "curr";
    res[1].key = "next";
  }
  return res;
}

const arrowRightTransition = {
  transform: "rotate(0deg)",
  transition: "transform .3s ease-in-out",
};
const arrowLeftTransition = {
  transform: "rotate(180deg)",
  transition: "transform .3s ease-in-out",
};

const reverseListCodeString = 
"function reverseLinkedList (head: ListNode | null): ListNode | null {\n\
  if (!head) return null;\n\
  \n\
  let curr: ListNode | null  = head;\n\
  let next: ListNode | null = curr.next;\n\
  let prev: ListNode | null = null;\n\
  \n\
  while (curr) {\n\
      next = curr.next;\n\
      curr.next = prev;\n\
      \n\
      prev = curr;\n\
      curr = next;\n\
  }\n\
\n\
  return prev;\n\
};";

const Highlighted = () => {
  return (
    <SyntaxHighlighter language="typescript" style={docco} className="mx-4 rounded-md">
      {reverseListCodeString}
    </SyntaxHighlighter>
  );
};

function ReverseLinkedList() {
  const [nodes, setNodes] = useState<ListNode[]>(formNodeArr(list));
  const [step, setStep] = useState(0);

  const nextStep = () => {
    const newStep = step + 1;
    if (newStep === nodes.length + 1) {
      resetAll();
      return;
    }

    const newNodes = [...nodes];

    if (newStep < newNodes.length) {
      newNodes[newStep].key = "curr";
    }
    if (newStep > 0 && newStep - 1 < newNodes.length)
      newNodes[newStep - 1].key = "prev";
    if (newStep + 1 < newNodes.length)
      newNodes[newStep + 1].key = "next";

    if (step > 0) {
      newNodes[step - 1].key = "";
    }

    setStep(Math.min(newStep, nodes.length));
    setNodes(newNodes);

  }

  const prevStep = () => {
    const newStep = step - 1;
    if (newStep === -1) {
      resetAll();
      return;
    }

    const newNodes = [...nodes];

    if (step + 1 < newNodes.length)
      newNodes[step + 1].key = "";
    
    if (newStep > -1 && newStep < newNodes.length) {
      newNodes[newStep].key = "curr";

      if (newStep + 1 < newNodes.length)
        newNodes[newStep + 1].key = "next";
    }
    if (newStep - 1 > -1 && newStep - 1 < newNodes.length) {
      newNodes[newStep - 1].key = "prev";
    }

    setStep(Math.max(newStep, 0));
    setNodes(newNodes);
  }

  const resetAll = () => {
    setNodes(formNodeArr(list));
    setStep(0);
  }
  
  return (
    <div>
      <h1>ReverseLinkedList</h1>

      <div key="example">
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
          {list.map((_, id) => (
            <Fragment key={`node-after-${list.length - 1 - id}`}>
              <Node key={list[list.length - 1- id]} value={list[list.length - 1- id]} size={40} />
              {
                id !== list.length - 1 &&
                <Arrow size={28} />            
              }
            </Fragment>
          ))}
          </div>
      </div>

      <div key="code">
      </div>

      <div key="visualize">
        <div className="flex items-center">
          {nodes.map((node, id) => (
            <Fragment key={`node-visualize-${id}`}>
              <Node value={node.val} size={40} color={colorMap[node.key]} />
              {
                id !== list.length - 1 &&
                <Arrow size={28} style={id < step ? arrowLeftTransition : arrowRightTransition} />            
              }
            </Fragment>
          ))
        }
        </div>
      </div>

      <div key="color-label" className="flex gap-4 m-4">
        {
          Object.keys(colorMap).map((key) => (
            <Fragment key={`node-color-${key}`}>
              <label>{key} : </label>
              <Node value="" size={30} color={colorMap[key]} />
            </Fragment>
          ))
        }
      </div>

      <div key="step-button" className="flex gap-4 m-4">
        <button onClick={prevStep} className={stepButtonStyle} disabled={step === 0}>
          previous
        </button>
        <button onClick={nextStep} className={stepButtonStyle} disabled={step === nodes.length}>
          next
        </button>
        <button onClick={resetAll} className={stepButtonStyle}>
          reset
        </button>
      </div>

        <Highlighted />

    </div>
  )
}

export default ReverseLinkedList