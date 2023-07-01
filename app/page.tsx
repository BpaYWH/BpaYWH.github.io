"use client"

import { useEffect, useState } from "react";

import Lab from "@/components/homePage/Lab";
import Work from "@/components/homePage/Work";
import Switch from "@/components/general/switch";

function Home() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const [showcase, setShowcase] = useState("Lab");
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const scrollToTop = () => {
    if (!container) {
      return;
    }

    container.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  const handleScroll = () => {
    if (!container) {
      return;
    }
    if (container.scrollTop > 300) {
      setShowBackToTopBtn(true);
    }
    else {
      setShowBackToTopBtn(false);
    }
  }

  useEffect(() => {
    const newContainer = document.getElementById("WorkDiv");
    if (typeof window !== "undefined") {
      setContainer(newContainer);
    }
    if (!newContainer) {
      console.error("not browser or container")
      return;
    }

    newContainer.addEventListener("scroll", handleScroll);

    return () => {
      newContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id="WorkDiv" className="relative basis-2/3 flex flex-col justify-between px-4 pt-4 bg-white rounded-md shadow-lg overflow-y-scroll">
      {
        showcase === "Lab" &&
        <Lab />
      }
      {
        showcase === "Work" &&
        <Work />
      }

      <div id="SwitchDiv" className="sticky bottom-0 bg-white">
        <button className={`absolute w-[40px] h-[40px] right-0 bottom-16 bg-green-400 text-white rounded-full p-2 ${showBackToTopBtn ? "" : "hidden"} transition duration-200 hover:scale-[1.1] hover:shadow-lg`} onClick={scrollToTop}>
          ▵
        </button>
        <Switch leftButton="Lab" rightButton="Work" showcase={showcase} setShowcase={setShowcase} />
        <div className="h-4 bg-white" />
      </div>
      
    </div>
  )
}

export default Home;