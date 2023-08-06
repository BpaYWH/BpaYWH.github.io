import Image  from "next/image";

import { RehabDescription } from "@/utils/config";

function SmartRehab() {
  return (
    <div className="relative" style={{ backgroundImage: `url("/assets/image/background-global.PNG)` }}>
      <a href="/" className="absolute top-4 left-4 px-4 py-2 rounded-md bg-slate-100 hover:bg-slate-300 shadow-md z-10">
        ←
      </a>

      <div id="intro" className="relative">
          <div className="absolute top-[300px] left-0 right-0 w-1/3 h-[800px] bg-gradient-to-bl from-[#EACC5C] to-[#DF9141] rounded-md mx-auto" />
          <div className="absolute top-[100px] right-[5%] w-3/5 h-auto aspect-[602/257] shadow-lg">
            <Image
            src="/assets/image/Rehab/thumbnail.jpeg"
            alt="Smart Rehab"
            fill
            className="object-cover rounded-md"
            />
          </div>

          <div className="absolute top-[280px] left-[20%] bg-white rounded-sm shadow-xl w-1/8 px-4 py-16 font-bold">
            <p>
              A groundbreaking project
            </p>
            <p>
              in
            </p>
            <p>
              Stroke Rehabilitation:
            </p>
            <p>
              leveraging the power of AI
            </p>
          </div>
      </div>

      <div id="block1" className="relative top-[600px]">
        <div className="absolute top-[80px] left-0 right-0 w-4/5 h-[200px] bg-[#84CBBA] opacity-75 rounded-md mx-auto" />
        
        <div className="absolute top-0 left-[25%] w-[30%] h-auto aspect-[16/9]">
          <Image
            src="/assets/image/Rehab/RehabWeb-1.png"
            alt="Smart Rehab"
            fill
            className="object-cover rounded-sm shadow-xl"
          />
        </div>

        <p className="absolute top-[120px] right-[15%] w-1/4 text-white text-xl">
          Empowering patients to continue their recovery journey at home or in elderly centers.
        </p>

      </div>

      <div id="block2" className="relative top-[960px]">
        <div className="relative w-1/3 left-[20%]">
          <div className="absolute top-[20px] left-[32px] bg-white rounded-sm shadow-xl w-[320px] px-4 py-8">
            <p>
              Help swimmers understand their performance, identify areas for improvement, and make adjustments to their technique
            </p>
          </div>
          <div className="absolute top-0 left-0 w-[32px] h-[200px] bg-[#84CBBA]" />
        </div>
        <div className="absolute -top-[20px] right-[15%] w-[30%] h-auto aspect-[16/9]">
          <Image
            src="/assets/image/Rehab/RehabWeb-2.png"
            alt=""
            fill
            className="object-cover rounded-sm shadow-xl"
          />
        </div>
      </div>

      <div id="block3" className="relative top-[1280px]">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 mx-auto bg-[#84CBBA] opacity-75 rounded-sm w-[70%] h-[100px]" />
        
          <div className="absolute top-0 left-0 right-0 mx-auto w-[60%] text-center text-white py-6">
            <p>
              {RehabDescription}
            </p>
          </div>
        </div>

        <div className="relative top-[160px]">
          <iframe className="absolute left-0 right-0 mx-auto rounded-md" width="560" height="315" src="https://www.youtube.com/embed/wKLaeXTp8yk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>

      <div className="absolute top-[1720px] w-full h-[80px] opacity-0" />
    </div>
  )
}

export default SmartRehab