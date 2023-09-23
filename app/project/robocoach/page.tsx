import Image from "next/image";

function Robocoach() {
  return (
    <div className="relative pt-8 pb-16 px-[20%] 2xl:px-16 lg:px-4" style={{ backgroundImage: `url("/assets/image/background-global-repeat-3.PNG")` }}>
      <a href="/" className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-400 shadow-md z-10 text-slate-100 hover:text-slate-800 font-bold">
        ←
      </a>

      <div id="content" className="flex flex-col gap-[10vh] mt-16">
        <div id="intro" className="mx-8 relative">
          <div className="flex justify-center gap-8 md:flex-col md:justify-start md:gap-8">
            <div className="relative w-full">
              <div className="relative top-0 left-[0] w-full h-auto aspect-[800/513] bg-orange-200" />

              <div className="absolute top-[32px] left-[32px] w-full h-auto aspect-[800/513] shadow-xl">
                <Image 
                src="/assets/image/Robocoach/thumbnail.png" 
                alt="" 
                fill
                className="object-cover rounded-md" 
                />
              </div>
            </div>

            <div className="px-8 py-8 h-fit bg-white bg-opacity-80">
              <a href="https://www.hkuit.com/robocoach" className="underline text-sky-500 hover:text-sky-600" target="_blank" rel="noreferrer">
                <p className="font-bold text-4xl sm:text-2xl xl:text-2xl drop-shadow hover:-translate-y-1">
                  Robocoach
                </p>
              </a>
              <p className="text-2xl md:text-sm xl:text-lg">
                AI-powered movement analysis and tracks progress, providing valuable insights for teachers and parents to monitor students' exercise habits
              </p>
              
            </div>
          </div>
        </div>

        <div id="block1" className="relative">
          <div className="flex justify-end">
            <div className="w-2/3 sm:w-[90%] px-6 p-4 bg-[#8583FF] bg-opacity-80 rounded-md">
              <p className="w-1/2 text-white md:text-sm sm:text-xs drop-shadow">
                Enabling students to track and evaluate exercises using smartphone's front-facing camera
              </p>
            </div>
          </div>

          <div className="absolute -top-[10vh] right-[5%] w-1/4 sm:w-1/3 h-auto aspect-[232/471]">
            <Image 
            src="/assets/image/Robocoach/robocoach-3.jpg" 
            alt=""
            fill
            className="rounded-md" />
          </div>
        </div>

        <div id="block2" className="relative flex flex-col gap-16 px-2">
          <div className="flex justify-start sm:justify-between">
            <div className="z-10 relative w-full h-auto aspect-[232/471]">
              <Image 
              src="/assets/image/Robocoach/robocoach-2.jpg"
              alt="" 
              fill
              className="object-cover rounded-md"
              />
            </div>

            <div className="basis-3/4 flex flex-col justify-center gap-8 py-8 border-violet-100 border-l-[8vw] -translate-x-[1vw] translate-y-[4vh] text-xl sm:text-sm md:text-lg text-violet-800 drop-shadow font-semibold">
              <p className="-translate-x-[4vw]">
                Features a leaderboard for students
              </p>
              <p className="-translate-x-[4vw]">
              Teachers can access a web portal to view student progress and set guidance
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-4/5 h-auto aspect-video">
            <Image src="/assets/image/Robocoach/robocoach-1.JPG" alt="" fill sizes="100vw" className="rounded-md " />
          </div>
        </div>
      </div>

      <a href="#content" className="z-20 fixed bottom-8 right-8 w-[36px] h-auto aspect-[1/1] transition hover:scale-[1.1] hover:drop-shadow bg-orange-200 hover:bg-orange-900 text-orange-900 hover:text-orange-200 rounded-full text-center flex flex-col justify-center">
        ▵
      </a>
    </div>
  )
}

export default Robocoach