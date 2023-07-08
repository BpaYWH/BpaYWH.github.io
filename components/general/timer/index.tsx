import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
   counting: boolean;
   setCounting: Dispatch<SetStateAction<boolean>>;
}

const clearTimer = (timer: NodeJS.Timer | null) => {
   if (timer) {
      clearInterval(timer);
   }
}

function Timer({counting, setCounting}: Props) {
   const [time, setTime] = useState(30);
   const currentTimer = useRef<NodeJS.Timer | null>(null);

   const refreshTimer = () => {
      setTime(time => {
         if (time - 1 === 0)
            setCounting(!counting);
         return (time - 1);
      });
   };

   useEffect(() => {
      if (counting) {
         currentTimer.current = setInterval(refreshTimer, 100);
      }
      else {
         clearTimer(currentTimer.current);
         setTime(30);
      }
   }, [counting]);

   useEffect(() => {
      return () => {
         clearTimer(currentTimer.current);
      }  
   }, []);

   return (
      <p>Time: {time}s</p>
   )
}

export default Timer