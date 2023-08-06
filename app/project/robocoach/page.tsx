import Image from "next/image";

const responsiveWidth = "";
const responsiveHeight = "";

function Robocoach() {
  return (
    <div className="relative">
      <a href="/" className="absolute top-4 left-4 px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-300 shadow-md z-10">
        ↩
      </a>

      <div id="intro" className="relative top-[80px]">
        <div className="relative left-[10%]">
          <div className="absolute top-0 left-[0] w-1/2 h-auto aspect-[800/513] bg-orange-200" />

          <div className="absolute top-[32px] left-[32px] w-1/2 h-auto aspect-[800/513] shadow-xl">
            <Image 
            src="/assets/image/Robocoach/thumbnail.png" 
            alt="" 
            fill
            className="object-cover rounded-md" 
            />
          </div>
        </div>

        <div className="absolute top-[32px] right-[10%] w-1/4 px-4 py-8">
          <p className="font-bold text-xl">
            Robocoach
          </p>
          <p>
            AI-powered movement analysis and tracks progress, providing valuable insights for teachers and parents to monitor students' exercise habits.
          </p>
        </div>
      </div>

      <div id="block1" className="relative top-[480px]">
        <div className="relative top-[200px] right-[10%]">
          <div className="absolute top-0 right-0 bg-[#8583FF] w-1/2 h-[120px] rounded-md" />
          <p className="absolute w-1/4 top-[24px] right-[24%] text-white font-semibold">
            Enabling students to track and evaluate exercises using smartphone's front-facing camera
          </p>
        </div>

        <div className="absolute top-0 right-[8%] w-1/4 h-auto aspect-[232/471]">
          <Image 
          src="/assets/image/Robocoach/robocoach-3.jpg" 
          alt=""
          fill
          className="rounded-md" />
        </div>
      </div>

      <div id="block2" className="relative top-[960px] left-[8%]">
        <div className="absolute top-[100px] left-[24%] bg-[#C5C3FF] w-[56px] h-[600px]"/>
        <div className="absolute top-0 w-1/4 h-auto aspect-[232/471]">
          <Image 
          src="/assets/image/Robocoach/robocoach-2.jpg"
          alt="" 
          fill
          className="object-cover rounded-md"
          />
        </div>

        <p className="absolute top-[200px] left-[28%] text-xl w-1/3">
        Features a leaderboard for students, while teachers can access a web portal to view student progress and set targets for gradual performance improvement
        </p>

        <div className="absolute top-[360px] right-[10%] w-1/2 h-auto aspect-video">
          <Image src="/assets/image/Robocoach/robocoach-1.jpg" alt="" fill sizes="100vw" className="rounded-md -translate-x-[20px] translate-y-[20px]" />
        </div>

        <div className="absolute top-[800px] w-full h-[40px]" />
      </div>
    </div>
  )
}

export default Robocoach