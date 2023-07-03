import Card from "@/components/general/card";

import { LabList, LabPageList } from "@/utils/config";

function Lab() {
  return (
   <div id="WorkContent">
      <h1 className="text-4xl font-bold mb-8">
      Lab
      </h1>
      {
      LabList.map((cat) => (
         <div id="WorkCategory" key={cat} className="mx-4 my-8">
            <h1 className="text-3xl font-semibold mb-8">{cat}</h1>
            <div id="WorkCard" className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            {
               LabPageList[cat].map(({name, path, description, image}) => (
                  <Card id="Card" key={`${cat}-${name}`} path={`/lab/${path}`} title={name} description={description} image={image} />
               ))
            }
            </div>
         </div>
      ))
      }
   </div>
  )
}

export default Lab;