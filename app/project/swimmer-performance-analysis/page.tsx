import Image from "next/image";

import { CameraSystemDescription, PerformanceAnalysisDescription, FeedbackDescription } from "@/utils/config";

function SwimmerPerformanceAnalysis() {
  return (
   <div id="SwimmingPerformanceAnalysisSystem" className="flex flex-col justify-between gap-16 pb-8">
      <div className="my-4 flex flex-col gap-16 px-12 mt-8">
         <h1 className="text-6xl mb-4">
            SWIMMER PERFORMANCE ANALYSIS SYSTEM
         </h1>

         <div>
            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Powered by computer vision AI
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               No customized wear devices
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Relies solely on ordinary cameras placed above and beneath the water
            </p>

            <p className="px-2 whitespace-pre-wrap text-gray-500">
               Integration of three sub-systems: the camera system, posture analysis system, and feedback system
            </p>
         </div>

      </div>

      <div className="flex flex-col gap-32 px-24">
         <div className="flex justify-center gap-16">
            {
               CameraSystemDescription()
            }
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-1.jpeg" 
            alt="Camera System" 
            width={480}
            height={360}
            className="object-cover"
            />
         </div>

         <div className="flex justify-center gap-16">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-2.jpeg" 
            alt="Camera System" 
            width={480}
            height={360}
            className="object-cover"
            />
            {
               PerformanceAnalysisDescription()
            }
         </div>

         <div className="flex justify-center gap-16">
            {
               FeedbackDescription()
            }
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-3.jpeg" 
            alt="Camera System" 
            width={360}
            height={260}
            className="object-cover"
            />
         </div>

      </div>
      

      <div id="RefVideos">
        <h1 className="text-3xl mb-4">
            Reference Video
        </h1>
        <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/RL1oFDWdH3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
   </div>
  )
}

export default SwimmerPerformanceAnalysis