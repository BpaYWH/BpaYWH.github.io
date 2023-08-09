import Image from "next/image";

function SwimmerPerformanceAnalysis() {
  return (
   <div id="SwimmingPerformanceAnalysisSystem" style={{ backgroundImage: `url("/assets/image/background-global-repeat-2.PNG")` }}>
      <div id="intro" className="relative">
         <a 
         className="absolute top-4 left-4 px-4 py-2 sm:px-2 sm:py-0 rounded-md bg-slate-100 hover:bg-slate-300 shadow-md z-10"
         href="/"
         >
            ←
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

      <div id="block1" className="flex flex-col gap-4 my-16 px-2 py-8 w-full text-center mx-auto drop-shadow bg-slate-500 bg-opacity-50 whitespace-pre-wrap text-white text-lg sm:text-sm">
         <p>Powered by computer vision AI</p>
         <p>No customized wear devices</p>
         <p>Relies solely on ordinary cameras placed above the water</p>
         <p>Integration of three sub-systems: the camera system, posture analysis system, and feedback system</p>
      </div>

      <div id="block2" className="grid grid-cols-2 bg-slate-800 bg-opacity-40">
         <div className="flex flex-col justify-center border">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5">
               <p className="text-slate-50 text-2xl sm:text-sm md:text-md sm:font-semibold">
                  Ceiling cameras system
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-slate-100 text-lg sm:text-xs md:text-sm lg:text-md xl:text-lg">
                  <p>
                     Capture the swimmer's movement throughout the swim
                  </p>
               </div>
            </div>
         </div>

         <div className="relative w-full h-auto aspect-[489/368] transition hover:scale-[1.01] hover:z-10">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-1.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover hover:rounded-md"
            />
         </div>
      </div>
      
      <div id="block3" className="grid grid-cols-2 bg-slate-800 bg-opacity-40">
         <div className="relative w-full h-auto aspect-[942/703] transition hover:scale-[1.01] hover:z-10">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-2.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover hover:rounded-md"
            />
         </div>

         <div className="flex flex-col justify-center border">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5">
               <p className="text-slate-50 text-2xl sm:text-sm md:text-md sm:font-semibold">
                  Computer vision
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-slate-100 text-lg sm:text-xs md:text-sm lg:text-md xl:text-lg">
                  <p>
                     Posture tracking and evaluation
                  </p>
                  <p>
                     Speed, angle, and distance calculations
                  </p>
               </div>
            </div>
         </div>
      </div>

      <div id="block4" className="grid grid-cols-2 bg-slate-800 bg-opacity-40">
         <div className="flex flex-col justify-center border">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5">
               <p className="text-slate-50 text-2xl sm:text-sm md:text-md sm:font-semibold">
                  Feedback
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-slate-100 text-lg sm:text-xs md:text-sm lg:text-md xl:text-lg">
                  <p>
                     Performance dashboard
                  </p>
                  <p>
                     Recording replay
                  </p>
               </div>
            </div>
         </div>

         <div className="relative w-full h-auto aspect-[983/734] transition hover:scale-[1.01] hover:z-10">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-3.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover hover:rounded-md"
            />
         </div>
      </div>

      <div id="block5" className="flex justify-center mt-16 pb-16">
         <iframe className="rounded-lg " width="560" height="315" src="https://www.youtube.com/embed/RL1oFDWdH3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
   </div>
  )
}

export default SwimmerPerformanceAnalysis