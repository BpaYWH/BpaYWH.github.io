import Card from "@/components/general/card";

import { LabPageList } from "@/utils/config";

function Lab() {
  return (
   <div id="WorkContent">
      <h1 className="mb-8 pb-8 text-4xl border-b border-gray-300">My Lab</h1>
      <div id="WorkCard" className="flex flex-wrap justify-start gap-8">
      {
         LabPageList.map(({name, path, description, image}, id) => (
            <Card id="Card" key={`${name}-${id}`} path={`/lab/${path}`} title={name} description={description} image={image} />
         ))
      }
      </div>
   </div>
  )
}

export default Lab;