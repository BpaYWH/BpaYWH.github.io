import Switch from "@/components/switch";
import Card from "@/components/card";

import { LabList, LabPageList } from "@/utils/config";

function Home() {
  
  return (
    <div id="WorkDiv" className="basis-2/3 px-4 pt-4 bg-white rounded-md shadow-lg overflow-auto">
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
                    <Card id="Card" key={`${cat}-${name}`} path={`/${cat.toLowerCase()}/${path}`} title={name} description={description} image={image} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div id="SwitchDiv" className="sticky bottom-0 bg-white">
        <Switch leftButton="Lab" rightButton="Work" />
        <div className="h-4 bg-white" />
      </div>
    </div>
  )
}

export default Home;