import Image from "next/image";

const responsiveWidth = "";
const responsiveHeight = "";

function Robocoach() {
  return (
    <div className="pt-4 pb-16 px-[20%] xl:px-16 lg:px-0" style={{ backgroundImage: `url("/assets/image/background-global-repeat-3.PNG")` }}>
      <a href="/" className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-400 shadow-md z-10 text-slate-100 hover:text-slate-800">
        ←
      </a>

      <div className="flex flex-col gap-[10vh] mt-16">
        <div id="intro" className="mx-8 relative">
          <div className="flex justify-center gap-8 sm:flex-col sm:justify-start sm:gap-8">
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

            <div className="px-4 py-8">
              <p className="font-bold text-xl">
                Robocoach
              </p>
              <p>
                AI-powered movement analysis and tracks progress, providing valuable insights for teachers and parents to monitor students' exercise habits.
              </p>
            </div>
          </div>
        </div>

        <div id="block1" className="relative">
          <div className="flex justify-end">
            <div className="w-2/3 sm:w-[90%] px-6 p-4 bg-[#8583FF] rounded-md">
              <p className="w-1/2 text-white font-semibold md:text-sm sm:text-xs">
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

            <div className="basis-3/4 flex flex-col justify-center gap-8 py-8 border-[#C5C3FF] border-l-[8vw] -translate-x-[1vw] translate-y-[4vh]">
              <p className="w-full text-lg sm:text-xs md:text-md -translate-x-[4vw]">
                Features a leaderboard for students, while teachers can access a web portal to view student progress and set targets for gradual performance improvement
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-4/5 h-auto aspect-video">
            <Image src="/assets/image/Robocoach/robocoach-1.jpg" alt="" fill sizes="100vw" className="rounded-md " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Robocoach