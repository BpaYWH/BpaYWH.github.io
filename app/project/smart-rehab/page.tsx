import Image  from "next/image";

function SmartRehab() {
  return (
    <div id="smart-rehab" className="relative pt-4 pb-16 px-[20%] 2xl:px-[12%] xl:px-4 overflow-x-hidden" style={{ backgroundImage: `url("/assets/image/background-global-repeat-3.PNG")` }}>
      <div id="back" className="mx-4 my-8" >
        <a href="/" className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-400 shadow-md z-10 text-slate-100 hover:text-slate-800">
          ←
        </a>
      </div>

      <div className="flex flex-col gap-[10vh] md:gap-[10vh]">
        <div id="intro" className="relative">
            <div className="absolute top-[8vh] left-0 right-0 w-1/3 md:w-1/2 sm:w-1/2 lg:w-1/2 h-[800px] bg-gradient-to-bl from-[#EACC5C] to-[#DF9141] opacity-80 rounded-md mx-auto -translate-x-[20%]" />

            <div className="flex justify-center mx-8 sm:mx-2">
              <div className="basis-1 z-10 flex flex-col justify-center px-4 py-12 sm:py-4 md:py-12 bg-white rounded-sm shadow-xl font-bold md:font-semibold text-md sm:text-xs md:text-sm translate-y-[5vh]">
                <p>A groundbreaking project in</p>
                <p>Stroke Rehabilitation:</p>
                <p>the power of AI</p>
              </div>

              <div className="relative w-1/2 scale-110 sm:scale-[1.3]">
                <Image
                src="/assets/image/Rehab/thumbnail.jpeg"
                alt="Smart Rehab"
                fill
                className="object-contain"
                />
              </div>
          </div>
        </div>

        <div id="block1" className="relative">
          <div className="flex flex-col justify-center w-4/5 sm:w-[95%] h-auto aspect-[5/1] bg-[#84CBBA] bg-opacity-75 rounded-md mx-auto">
            <div className="flex justify-end py-4 pr-6">
              <p className="w-1/3 text-white text-xl sm:text-xs md:text-sm drop-shadow-lg">
                Empowering patients to continue their recovery journey at home or in elderly centers.
              </p>
            </div>
          </div>
          
          <div className="absolute z-10 -top-[3vh] left-[15%] sm:left-[10%] w-[40%] sm:w-[50%] md:w-[40%] h-auto aspect-[16/9]">
            <Image
              src="/assets/image/Rehab/RehabWeb-1.png"
              alt="Smart Rehab"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div id="block2" className="flex justify-between gap-8 px-8 sm:px-2">
          <div className="z-10 min-w-[180px] w-1/2">
            <div className="border-l-[4vw] border-[#84CBBA]">
              <div className="flex flex-col justify-center px-4 py-8 sm:px-2 sm:py-4 bg-white rounded-sm shadow-xl ">
                <p className="text-lg sm:text-xs md:text-sm">
                  Help patients understand their recovery progress, identify areas for improvement, and make adjustments to their motions
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-2/3 right-0 aspect-[16/9] sm:scale-[1.5]">
            <Image
              src="/assets/image/Rehab/RehabWeb-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="z-10 mx-auto p-4 w-4/5 h-auto aspect-[4/1] bg-[#84CBBA] bg-opacity-75 rounded-sm ">
          <div className="flex flex-col justify-center w-full h-full">
            <p className="text-center text-white text-lg sm:text-xs md:text-md drop-shadow-lg">
              Integration of web technologies to provide coaching and supervision of rehabilitation exercises, promoting the use of AI and IT technology in stroke rehabilitation.
            </p>
          </div>
        </div>

        <div className="z-10">
          <iframe className="mx-auto rounded-md min-w-[90%] h-auto aspect-video" src="https://www.youtube.com/embed/wKLaeXTp8yk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>

        <a href="#smart-rehab" className="z-20 fixed mx-4 bottom-6 left-0 w-[36px] h-auto aspect-[1/1] bg-[#DF9141] hover:bg-[#FFB161] text-white text-center hover:scale-110 flex flex-col justify-center rounded-full transition">
            ▵
        </a>
    </div>
  )
}

export default SmartRehab;
