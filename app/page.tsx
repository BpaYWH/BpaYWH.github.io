"use client"

import { useEffect, useState } from "react";

import Lab from "@/components/homePage/Lab";
import Work from "@/components/homePage/Work";
import Switch from "@/components/general/switch";

function Home() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const [showcase, setShowcase] = useState("Work");

  const scrollToTop = () => {
    if (!container) {
      return;
    }

    container.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const newContainer = document.getElementById("WorkDiv");
    if (typeof window !== "undefined") {
      setContainer(newContainer);
    }
    if (!newContainer) {
      console.error("not browser or container")
      return;
    }
  }, []);

  return (
    <>
      {
        showcase === "Lab" &&
        <Lab />
      }
      {
        showcase === "Work" &&
        <Work />
      }

      <div id="SwitchDiv" className="sticky bottom-4 border rounded-full shadow-md">
        <button title="Scroll to top" className={`absolute w-[40px] h-[40px] right-0 bottom-16 bg-green-400 text-white rounded-full p-2 transition duration-200 hover:scale-[1.1] hover:shadow-lg`} onClick={scrollToTop}>
          ▵
        </button>
        <Switch leftButton="Work" rightButton="Lab" showcase={showcase} setShowcase={setShowcase} />
      </div>
    </>
  )
}

export default Home;