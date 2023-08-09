
import { ProjectPageList } from "@/utils/config";

function Project() {  
  return (
    <div className="mx-12 my-8 sm:mx-8">
         <h1 className="text-4xl sm:text-2xl md:text-3xl">
            Projects
         </h1>

         <div className="flex flex-col gap-4 mt-4">
            {
               ProjectPageList.map(({name, path, description}, id) => (
                  <a 
                  key={`${name}-${id}`} 
                  href={`/project/${path}`} 
                  className="px-4 py-2 rounded-lg rounded-lg hover:bg-gray-50 hover:drop-shadow"
                  >
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

export default Project;
