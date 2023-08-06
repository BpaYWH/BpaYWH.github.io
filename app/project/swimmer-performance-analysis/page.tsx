import Image from "next/image";

import { CameraSystemDescription, PerformanceAnalysisDescription, FeedbackDescription } from "@/utils/config";

function SwimmerPerformanceAnalysis() {
  return (
   <div id="SwimmingPerformanceAnalysisSystem" className="flex flex-col">
      <div className="h-screen" style={{ backgroundImage: `url("/assets/image/background-global.PNG")`, filter: `blur(12px)` }}>
      </div>

      <div className="absolute top-0 left-0">
         <div id="intro" className="relative">
            <a className="absolute top-4 left-4 px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-300 shadow-md z-10" href="/">
               Home
            </a>
            <div className="relative w-full h-auto aspect-[16/9]">
               <Image
               src="/assets/image/Swimmer-Performance-Analysis/thumbnail.png" 
               alt="Camera System"
               fill
               className="object-cover"
               />
            </div>
         </div>

         <div id="block1" className="flex flex-col gap-4 my-16 w-4/5 text-center mx-auto">
            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Powered by computer vision AI
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               No customized wear devices
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Relies solely on ordinary cameras placed above the water
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Integration of three sub-systems: the camera system, posture analysis system, and feedback system
            </p>
         </div>

         <div id="block2" className="grid grid-cols-2">
            {
               CameraSystemDescription()
            }
            <div className="relative w-full h-auto aspect-[489/368]">
               <Image
               src="/assets/image/Swimmer-Performance-Analysis/Description-1.jpeg" 
               alt="Camera System" 
               fill
               className="object-cover"
               />
            </div>
         </div>
         
         <div id="block3" className="grid grid-cols-2">
            <div className="relative w-full h-auto aspect-[942/703]">
               <Image
               src="/assets/image/Swimmer-Performance-Analysis/Description-2.jpeg" 
               alt="Camera System" 
               fill
               className="object-cover"
               />
            </div>
            {
               PerformanceAnalysisDescription()
            }
         </div>

         <div id="block4" className="grid grid-cols-2">
            {
               FeedbackDescription()
            }
            <div className="relative w-full h-auto aspect-[983/734]">
               <Image
               src="/assets/image/Swimmer-Performance-Analysis/Description-3.jpeg" 
               alt="Camera System" 
               fill
               className="object-cover"
               />
            </div>
         </div>

         <div id="block5" className="flex justify-center mt-16 pb-16">
            <iframe className="rounded-lg " width="560" height="315" src="https://www.youtube.com/embed/RL1oFDWdH3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
         </div>
      </div>

   </div>
  )
}

export default SwimmerPerformanceAnalysis