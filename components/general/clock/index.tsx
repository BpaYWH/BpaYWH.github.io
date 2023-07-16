import React, { useEffect, useState } from "react"

const Wave = ({ className = "", style = {} }: { className?:string, style?: React.CSSProperties }) => (
   <svg viewBox="0 0 400 170" className={className} style={style}>
      <path d="M 200 15 C 240 0 260 0 300 15 C 340 30 360 30 400 15 L 400 185 L 0 185 L 0 15 M 0 15 C 40 0 60 0 100 15 C 140 30 160 30 200 15" stroke="gray" fill="gray" />
   </svg>
)   

function Clock() {
   const [date, setDate] = useState<Date|null>(null);

   const refreshClock = () => { 
      setDate(new Date());
   };

   useEffect(() => {
      const timerId: NodeJS.Timer = setInterval(refreshClock, 1000);
      setDate(new Date());

      return () => {
        clearInterval(timerId);
      };
    }, []);

  return (
    <div className="relative border w-fit rounded-md overflow-hidden">
      <p className="font-bold mx-4 my-2">
         {date?.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
      </p>
      <div className="absolute w-full h-full transition-all ease-linear duration-100" style={{top: `${75 - (date?.getSeconds() || 0) * 100 / 60}%`}}>
         <Wave className="w-[200%] opacity-10 animate-loop-x" />
      </div>
   </div>
  )
}

export default Clock