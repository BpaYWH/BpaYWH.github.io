import { useEffect, useState } from "react";

interface Props {
   isCounting: boolean;
   setIsCounting: (isCounting: boolean) => void;
}

const clearTimer = (timer: NodeJS.Timer | null) => {
   if (timer) {
      clearInterval(timer);
   }
}

function Timer({isCounting, setIsCounting}: Props) {
   const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
   const [time, setTime] = useState(30);

   const refreshTimer = () => {
      console.log(time)
      if (time - 1 === 0) {
         setIsCounting(false);
         clearTimer(timer);
         return;
      }
      setTime(time => time - 1);
   };

   useEffect(() => {
      if (time === 0) {
         setIsCounting(false);
         clearTimer(timer);
      }
      else {
         if (!isCounting) {
            clearTimer(timer);
         }
         else {
            if (!timer) {
               const newTimer = setInterval(() => {
                  console.log(time);
                  setTime(time - 1);
               }, 500);
               setTimer(newTimer);
               setTime(30);
            }
         }
      }

      return () => {
         clearTimer(timer);
      }
      
   }, [isCounting, time]);

   return (
      <p>Time: {time}s</p>
   )
}

export default Timer