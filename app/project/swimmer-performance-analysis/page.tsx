import Image from "next/image";

interface ContentDivProps extends React.ComponentProps<any> {
   children: React.ReactNode;
}
function ContentDiv({children, id}: ContentDivProps): JSX.Element {
   return (
      <div id={id} className="grid grid-cols-2 bg-slate-200 bg-opacity-50 hover:bg-slate-800 transition hover:bg-opacity-50 text-slate-900 hover:text-slate-50">
         {children}
      </div>
   );
}

function SwimmerPerformanceAnalysis() {

  return (
   <div id="swimming-performance-analysis-system" className="" style={{ backgroundImage: `url("/assets/image/background-global-repeat-3.PNG")` }}>
      <div id="intro" className="relative">
         <a 
         className="absolute top-4 left-4 px-4 py-2 sm:px-2 sm:py-0 rounded-md bg-slate-100 hover:bg-slate-400 shadow-md z-10 hover:text-slate-100 font-bold"
         href="/"
         >
            ←
         </a>
         <div className="relative w-full h-auto aspect-[16/9]">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Thumbnail.png" 
            alt="Camera System"
            fill
            className="object-cover"
            />
         </div>
      </div>

      <div id="block1" className="flex flex-col gap-4 my-16 px-2 py-8 w-full mx-auto drop-shadow bg-slate-900 bg-opacity-50 text-slate-50 text-xl md:text-sm text-center">
         <p>Powered by computer vision AI</p>
         <p>No customized wear devices</p>
         <p>Relies solely on ordinary cameras placed above the water</p>
         <p>Integration of three sub-systems: the camera system, posture analysis system, and feedback system</p>
      </div>

      <ContentDiv id="block2">
         <div className="flex flex-col justify-center border ">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5 drop-shadow">
               <p className="text-4xl sm:text-sm md:text-md lg:text-2xl sm:font-semibold">
                  Ceiling cameras system
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-lg sm:text-xs md:text-sm lg:text-md">
                  <p>
                     Capture the swimmer's movement throughout the swim
                  </p>
               </div>
            </div>
         </div>

         <div className="relative w-full h-auto aspect-[489/368]">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-1.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover"
            />
         </div>
      </ContentDiv>
      
      <ContentDiv id="block3">
         <div className="relative w-full h-auto aspect-[942/703]">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-2.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover"
            />
         </div>

         <div className="flex flex-col justify-center border">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5 drop-shadow">
               <p className="text-4xl sm:text-sm md:text-md lg:text-2xl sm:font-semibold">
                  Computer vision
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-lg sm:text-xs md:text-sm lg:text-md">
                  <p>
                     Posture tracking and evaluation
                  </p>
                  <p>
                     Speed, angle, and distance calculations
                  </p>
               </div>
            </div>
         </div>
      </ContentDiv>

      <ContentDiv id="block4">
         <div className="flex flex-col justify-center border">
            <div className="w-2/3 h-fit mx-auto sm:w-4/5 drop-shadow">
               <p className="text-4xl sm:text-sm md:text-md lg:text-2xl sm:font-semibold">
                  Feedback
               </p>

               <div className="flex flex-col gap-2 mt-4 mx-4 text-lg sm:text-xs md:text-sm lg:text-md">
                  <p>
                     Performance dashboard
                  </p>
                  <p>
                     Recording replay
                  </p>
               </div>
            </div>
         </div>

         <div className="relative w-full h-auto aspect-[983/734]">
            <Image
            src="/assets/image/Swimmer-Performance-Analysis/Description-3.jpeg" 
            alt="Camera System" 
            fill
            className="object-cover"
            />
         </div>
      </ContentDiv>

      <div id="block5" className="flex justify-center mt-16 bg-slate-800 bg-opacity-50 shadow-xl">
         <iframe className="rounded-md w-1/2 h-auto aspect-video" src="https://www.youtube.com/embed/RL1oFDWdH3g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <div id="block6" className="mt-16 bg-slate-100 bg-opacity-50 p-8">
         <h3 className="text-2xl text-slate-800 drop-shadow">Mother Project: </h3>
         <a href="https://www.hkuit.com/drowning-detection-system" target="_blank" rel="noreferrer" className="underline text-sky-500 hover:text-sky-600 shadow-lg">
            <p>
               Drowning Detection System
            </p>
         </a>
      </div>

      <div id="bottom-nav" className="flex justify-between gap-[2px] mt-16 text-slate-50 text-bold text-center drop-shadow">
         <a href="/" className="w-full py-4 bg-slate-800 bg-opacity-80 hover:bg-opacity-60 transition duration-400 hover:-translate-y-1 ">Back to Home</a>
         <a href="#intro" className="w-full py-4 bg-slate-800 bg-opacity-80 hover:bg-opacity-60 transition duration-400 hover:-translate-y-1">Scroll to Top</a>
      </div>
   </div>
  )
}

export default SwimmerPerformanceAnalysis