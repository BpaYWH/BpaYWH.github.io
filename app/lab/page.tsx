import WideCard from "@/components/general/wideCard";

import { LabPageList } from "@/utils/config";

function Lab() {
  return (
   <div id="WorkContent" className="py-4 px-32 mb-8 sm:px-4 md:px-16">
      <h1 className="text-4xl pb-2 border-b sm:text-3xl">
        Lab
      </h1>
      <a href="/" className="">
         <button>
            X
         </button>
      </a>

      <div id="WorkCard" className="flex flex-col justify-start gap-16 mt-8 sm:gap-8">
      {
         LabPageList.map(({name, path, description, image}, id) => (
            <WideCard
            id="WideCard" 
            key={`${name}-${id}`} 
            path={`/lab/${path}`} 
            title={name} 
            description={
               <p className="text-md text-gray-500 whitespace-pre-wrap">
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

export default Lab;