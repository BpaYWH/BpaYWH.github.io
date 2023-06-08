import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TitleStyle = 
"absolute w-screen top-1/2 -translate-y-1/2 \
text-center text-4xl font-bold \
animate-rise \
";

const SubtitleStyle = "flex flex-col justify-center animate-fade-in";

const pageList = [
  "Components",
  "Algorithm",
  "System",
  "Game"
];

const VerticalCenterDiv = ({children, className}: Props) => {
  return (
    <div className={className + " " + SubtitleStyle}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
    <div className={TitleStyle}>
      My Laboratory
    </div>

    <div className="absolute w-screen h-screen text-xl text-center grid grid-cols-2">
      {
        pageList.map((page) => (
          <VerticalCenterDiv key={page} className="">
            <Link href={`/${page.toLowerCase()}`} className="p-16 border">
              {page}
            </Link>
          </VerticalCenterDiv>
        ))
      }
    </div>
    </>
  )
}
