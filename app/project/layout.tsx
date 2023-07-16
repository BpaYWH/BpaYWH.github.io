import Link from "next/link";

type Props = {
   children: React.ReactNode;
};

function ProjectLayout({children}: Props) {
  return (
      <div id="wrapperDiv" className="h-1/2">
         <div className="relative w-fit mb-8 rounded-md shadow transition-all duration-400 hover:scale-110 hover:bg-gray-100">
            <Link href="/" className="mx-auto w-full h-full">
               ← Back
            </Link>
         </div>
         <div className="">
            {children}
         </div>
      </div>
  )
}

export default ProjectLayout