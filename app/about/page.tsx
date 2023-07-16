import Image from "next/image";

import { techStacksList } from "@/utils/config";

function About() {
  return (
    <div className="p-16">
      <div className="absolute top-0 left-0 bg-gray-50 opacity-80 w-screen h-screen" />

      <div className="relative">
         <a href="/">
            <button>
               X
            </button>
         </a>

         <div className="flex flex-col justify-between gap-8">
            <div id="about">
               <h3 className="text-xl md:text-lg">About me</h3>
               <p>
                  Hi, I'm Henry Yau. I'm a Full Stack Developer. I'm currently working on a full-stack web application.
               </p>
            </div>

            <div id="skill">
               <h3 className="text-xl md:text-lg">Tech Stacks</h3>
               <div className="flex flex-wrap gap-4 mt-4">
                  {
                     techStacksList.map(item => (
                        <Image src={item} alt="" width={28} height={28} />
                        ))
                     }
               </div>
            </div>

            <div id="contact" className="flex gap-4 self-center">
               <p>resume</p>
               <a href="mailto: henryyaubpa@gmail.com" title="Email" className="transition hover:scale-110">
                  <Image src="/assets/image/icon/mail.png" alt="Email"  width={24} height={24} />
               </a>
               <a href="https://www.linkedin.com/in/winghong-yau-42282718a/" title="LinkedIn" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                  <Image src="/assets/image/icon/In-Blue-48.png" alt="LinkedIn" width={24} height={24} />
               </a>
               <a href="https://github.com/BpaYWH" title="Github" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                  <Image src="/assets/image/icon/github-mark.svg" alt="Github" width={24} height={24} />
               </a>
            </div>
         </div>
      </div>

    </div>
  )
}

export default About