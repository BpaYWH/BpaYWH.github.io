import Link from "next/link";

const TitleStyle = 
"absolute w-screen text-4xl font-bold \
text-center top-1/2  -translate-y-1/2 \
animate-rise \
";

export default function Home() {
  return (
    <>
    <div className={TitleStyle}>
      My Laboratory
    </div>

    <div className="absolute z-1 w-screen h-screen text-xl text-center grid grid-cols-2">
      <div>
        <Link href="/components">
          Components
        </Link>
      </div>

      <div>
        Algorithm
      </div>

      <div>
        System
      </div>

      <div className="">
        <s>Game</s>
      </div>
    </div>
    </>
  )
}
