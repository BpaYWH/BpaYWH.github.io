import WideCard from "@/components/general/wideCard";

import { WorkPageList } from "@/utils/config";

function Work() {  
  return (
    <div id="WorkContent" className="py-4 px-20 mb-8 sm:px-4 md:px-16">
      <h1 className="text-4xl pb-2 border-b sm:text-3xl">
        Projects
      </h1>

      <div className="flex flex-col justify-start gap-16 mt-8 sm:gap-8">
      {
         WorkPageList.map(({name, path, description, image}, id) => (
            <WideCard 
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
  )
}

export default Work