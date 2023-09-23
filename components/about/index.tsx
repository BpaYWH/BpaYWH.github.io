"use client";

import { Fragment, MouseEvent, useState } from "react";
import Image from "next/image";

import { frontendStacks, backendStacks, langStacks, techStacksList } from "@/utils/config";

function About() {
   const [isXVisible, setXVisible] = useState<boolean>(false);

   const stopPropagation = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
   }

   return (
      <div className="p-8" onClick={stopPropagation}>
         <div className="relative">
            <div className="flex flex-col justify-between gap-8">
               <div id="about">
                  <h3 className="text-2xl md:text-xl">About me</h3>
                  <div className="flex flex-col gap-4 mt-4">
                     <p className="sm:text-sm">
                        Hi! I'm Henry Yau, a Full Stack Developer with experience creating web applications.
                     </p>
                     <p className="sm:text-sm">
                        I'm actively seeking opportunities where I can leverage my expertise (mainly in JavaScript / TypeScript) to drive innovation and deliver exceptional user experiences. 
                     </p>
                  </div>
               </div>

               <div id="skill" className="flex flex-col space-y-4">
                  <h3 className="text-2xl md:text-xl">Tech Stacks</h3>
                  <Fragment key="language">
                     <h4 className="text-lg">Languages</h4>
                     <div id="" className="flex flex-wrap gap-x-4 gap-y-4">
                        {   langStacks.map(item => (
                           <Image 
                           src={item.icon} 
                           alt={item.name}
                           title={item.name}
                           width={28} 
                           height={28} 
                           className="transition hover:scale-[1.2]"
                           />
                           ))
                        }
                     </div>
                  </Fragment>

                  <Fragment key="frontend">
                     <h4 className="text-lg">Frontend</h4>
                     <div className="flex flex-wrap gap-x-4 gap-y-4">
                        {
                           frontendStacks.map(item => (
                              <Image 
                              src={item.icon} 
                              alt={item.name}
                              title={item.name}
                              width={28} 
                              height={28}
                              className="transition hover:scale-[1.2]"
                              />
                           ))
                        }
                     </div>
                  </Fragment>

                  <Fragment key="backend">
                     <h4 className="text-lg">Backend</h4>
                     <div className="flex flex-wrap gap-x-4 gap-y-4">
                        {   backendStacks.map(item => (
                              <Image 
                              src={item.icon} 
                              alt={item.name}
                              title={item.name}
                              width={28} 
                              height={28} 
                              className="transition hover:scale-[1.2]"
                              />
                           ))
                        }
                     </div>
                  </Fragment>

                  <Fragment key="tech">
                     <h4 className="text-lg">Technologies</h4>
                     <div id="tech" className="flex flex-wrap gap-x-4 gap-y-4">
                        {   techStacksList.map(item => (
                              <Image 
                              src={item.icon} 
                              alt={item.name}
                              title={item.name}
                              width={28} 
                              height={28} 
                              className="transition hover:scale-[1.2]"
                              />
                           ))
                        }
                     </div>
                  </Fragment>
               </div>

               <div id="contact" className="flex gap-4 justify-end">
                  <a href="mailto: henryyaubpa@gmail.com" title="Email" className="transition hover:scale-110">
                     <Image src="/assets/image/icon/mail.png" alt="Email"  width={24} height={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/winghong-yau-42282718a/" title="LinkedIn" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/icon/In-Blue-48.png" alt="LinkedIn" width={24} height={24} />
                  </a>
                  <a href="https://github.com/BpaYWH" title="Github" className="transition hover:scale-110" target="_blank" rel="noreferrer">
                     <Image src="/assets/image/icon/tech/github-mark.svg" alt="Github" width={24} height={24} />
                  </a>
                  <a href="https://twitter.com/_HenryYau_" title="X" className="transition hover:scale-110" target="_blank" rel="noreferrer" onMouseEnter={() => {setXVisible(true)}} onMouseLeave={() => {setXVisible(false)}}>
                     {
                        isXVisible ?
                        <Image src="/assets/image/icon/x.svg" alt="X" width={24} height={24} />
                        :
                        <Image src="/assets/image/icon/twitter-color.svg" alt="Twitter" width={24} height={24} />
                     }
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About