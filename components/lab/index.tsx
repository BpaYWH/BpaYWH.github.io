import { LabPageList } from "@/utils/config";

function Lab() {
  return (
   <div id="lab-content" className="py-8 px-12 sm:px-4 md:px-16">
      <h1 className="text-4xl sm:text-2xl md:text-3xl">
        Lab
      </h1>

      <div id="lab-list" className="flex flex-col justify-start gap-4 mt-4">
      {
         LabPageList.map(({name, path, description}, id) => (
            <a key={`${name}-${id}`} href={`/lab/${path}`} className="px-4 py-2 rounded-lg hover:bg-gray-50 hover:drop-shadow">
               <h3 className="text-2xl sm:text-md md:text-lg">
                  {name}
               </h3>

               <p className="text-md md:text-sm text-gray-500 whitespace-pre-wrap sm:hidden">
                  {description}
               </p>
            </a>
         ))
      }
      </div>
   </div>
  )
}

export default Lab;