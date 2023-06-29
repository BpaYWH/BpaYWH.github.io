import Link from "next/link";

import Switch from "@/components/switch";

import { LabList, LabPageList } from "@/utils/config";


function Home() {
  
  return (
    <div className="col-span-2 flex flex-col justify-between border">
      <div className="">
        <h1 className="text-4xl font-bold mb-8">
          Lab
        </h1>

        {/* <div className="grid gap-4 grid-flow-col">
          {
            pageList.map((page) => (
              <button key={page} className="px-16 py-8 shadow rounded-md hover:bg-gray-100 hover:-translate-y-1 hover:scale-105 transition">
                <Link href={`/${page.toLowerCase()}`}>
                  {page}
                </Link>
              </button>
            ))
          }
        </div> */}
        {
          LabList.map((cat) => (
            <div key={cat} className="mx-4 my-8">
              <h1 className="text-2xl font-semibold pb-4 mb-8 border-b">{cat}</h1>
              {
                LabPageList[cat].map(({name, path}) => (
                  <button key={`${cat}-${name}`} className="py-4 px-8 shadow rounded-md hover:bg-gray-100 hover:-translate-y-1 transition">
                    <Link href={`/${cat.toLowerCase()}/${path}`}>
                      {name}
                    </Link>
                  </button>
                ))
              }
            </div>
          ))
        }
      </div>

      <Switch leftButton="Lab" rightButton="Work" />
    </div>
  )
}

export default Home;