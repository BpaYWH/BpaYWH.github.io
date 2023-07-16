import Image  from "next/image";

import { RehabIntro, RehabDescription } from "@/utils/config";

function SmartRehab() {
  return (
   <div>
      <div id="SmartRehab" className="mb-8">
        <div className="mb-4">
          <h1 className="text-3xl mb-4">
            Smart Rehab
          </h1>

          <div className="flex justify-between gap-4">
            <p className="whitespace-pre-wrap ">
              {RehabIntro}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <p className="whitespace-pre-wrap ">
            {RehabDescription}
          </p>
        </div>

        <div className="relative rounded-lg min-w-[280px] min-h-[280px]">
          <Image
            alt=""
            src="/assets/image/Rehab/RehabWeb-1.png"
            fill
            sizes="100vw"
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="relative rounded-lg min-w-[280px] min-h-[280px]">
          <Image
            alt=""
            src="/assets/image/Rehab/RehabWeb-2.png"
            fill
            sizes="100vw"
            className="object-cover rounded-t-lg"
          />
        </div>
      </div>

   <div id="RefVideos">
   <h1 className="text-3xl mb-4">
       Reference Video
   </h1>
   
   <div className="flex flex-wrap justify-center gap-8 mb-8">
     <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/wKLaeXTp8yk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
   </div>
 </div>
 </div>
  )
}

export default SmartRehab