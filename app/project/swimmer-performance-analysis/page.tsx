import Carousel3D from "@/components/general/carousel3D";

import { SwimmerPerformanceDescriptionCards } from "@/utils/config";

function SwimmerPerformanceAnalysis() {
  return (
   <div id="SwimmingPerformanceAnalysisSystem" className="mb-8">
      <div className="my-4">
      <h1 className="text-3xl mb-4">
         SWIMMER PERFORMANCE ANALYSIS SYSTEM
      </h1>

      <div className="my-8">
         <p className="px-2 whitespace-pre-wrap text-gray-500">
            Powered by computer vision AI
         </p>

         <p className="px-2 whitespace-pre-wrap text-gray-500">
            {
            `
               No customized wear devices\n
               Relies solely on ordinary cameras placed above and beneath the water
            `
            }
         </p>
         <p className="px-2 whitespace-pre-wrap text-gray-500 text-center">
            Integration of three sub-systems: the camera system, posture analysis system, and feedback system
         </p>
      </div>

      </div>
      <div className="h-[744px] sm:h-[660px] md:h-[660px] lg:h-[640px] xl:h-[660px]">
         <Carousel3D data={SwimmerPerformanceDescriptionCards} />
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