"use client"


// Visualize the algorithm of reversing a linked list.

const list = [1,2,3,4,5];

type NodeProps = {
  size?: number,
  value: number
};
type ArrowProps = {
  className?: string,
  size?: number
};

const Node = ({ size = 40, value }: NodeProps) => {
  // a svg of a node, which is a circle with a text inside 
  return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle">
        <circle cx="24" cy="24" r="20"/>
        <text x="24" y="25" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="central" fill="black" fontFamily="Arial" fontSize="20px">
          {value}
        </text>
      </svg>
  );        
}

const Arrow = ({ className, size = 40 }: ArrowProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-move-right ${className}`}>
      <path d="M18 8L22 12L18 16"/>
      <path d="M2 12H22"/>
    </svg>
  )
}

function ReverseLinkedList() {

   
  return (
    <div>
      <h1>ReverseLinkedList</h1>

      <div className="flex items-center">
        {list.map((item) => (
          <Node key={item} value={item} size={40} />
        ))}
        <Arrow size={32} />
      </div>
    </div>
  )
}

export default ReverseLinkedList