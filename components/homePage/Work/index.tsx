import Card from "@/components/general/card";

import { CameraSystemDescription, PerformanceAnalysisDescription, RecordReplayDescription } from "@/utils/config";

function Work() {
  return (
    <div id="WorkContent">
      <h1 className="text-4xl mb-8">
        Work
      </h1>


      <div className="">
        <div id="SwimmingPerformanceAnalysisSystem" className="mb-8">
          <div className="my-4">
            <h1 className="text-3xl mb-4">
              SWIMMER PERFORMANCE ANALYSIS SYSTEM
            </h1>
            <p>
              The Swimmer Performance Analysis System is a software-based system that allows for the analysis of swimmers' performance using computer vision technology. Unlike existing systems that require swimmers to wear customized devices, this system relies solely on ordinary cameras placed above and beneath the water. The system consists of three sub-systems: the camera system, posture analysis system, and feedback system.
            </p>
          </div>

          <div className="flex gap-4">
            <Card 
            title="Carmera System" 
            description={CameraSystemDescription()} 
            image="/assets/image/SwimmerPerformanceAnalysis-1.jpg" 
            className="xl:w-[500px] shadow rounded-xl"/>

            <Card 
            title="Performance Analysis" 
            description={PerformanceAnalysisDescription()} 
            image="/assets/image/SwimmerPerformanceAnalysis-2.jpg" 
            className="xl:w-[500px] shadow rounded-xl"/>

            <Card 
            title="Record Replay" 
            description={RecordReplayDescription()} 
            image="/assets/image/SwimmerPerformanceAnalysis-3.jpg" 
            className="xl:w-[500px] shadow rounded-xl"/>
          </div>
        </div>

        <div id="SmartRehab" className="mb-8">
          <div className="mb-4">
            <h1 className="text-3xl mb-4">
              Smart Rehab
            </h1>
            <p>
              Introduction
            </p>
          </div>

          <div>
            Description
          </div>
        </div>
      </div>

      <div id="RefVideos">
        <h1 className="text-3xl mb-4">
            Reference Video
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/RL1oFDWdH3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/wKLaeXTp8yk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>

   </div>
  )
}

export default Work