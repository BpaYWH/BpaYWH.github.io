import WideCard from "@/components/general/wideCard";

import { LabPageList } from "@/utils/config";

function Lab() {
  return (
   <div id="WorkContent" className="p-4">
      <div id="WorkCard" className="flex flex-col justify-start gap-8">
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