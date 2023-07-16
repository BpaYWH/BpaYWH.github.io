import Card from "@/components/general/card";

import { ProjectPageList } from "@/utils/config";

function Project() {  
  return (
    <div className="p-16 w-fit mx-auto">
      <div className="absolute top-0 left-0 w-screen h-screen bg-gray-50 opacity-80" />

      <div className="relative px-4">
         <div className="flex justify-between">
            <h1 className="text-4xl sm:text-3xl">
               Projects
            </h1>
            <a href="/" className="">
               <button>
                  X
               </button>
            </a>
         </div>

         <div className="relative flex flex-col justify-start gap-32 mt-8 sm:gap-8 overflow-y-auto">
         {
            ProjectPageList.map(({name, path, description, image}, id) => (
               <Card 
               id="WideCard" 
               key={`${name}-${id}`} 
               path={`/project/${path}`}
               title={name} 
               description={
                  <p className="text-md text-gray-500 whitespace-pre-wrap sm:hidden">
                     {description}
                  </p>
               }
               imagePath={image} />
               ))
            }
         </div>
      </div>
   </div>
  )
}

export default Project