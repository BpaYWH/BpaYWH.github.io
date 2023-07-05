import Link from "next/link";

type Props = {
   children: React.ReactNode;
};

function LabLayout({children}: Props) {
  return (
      <div id="wrapperDiv">
         <div className="w-fit mb-8 rounded-md shadow transition-all duration-400 hover:scale-110 hover:bg-gray-100">
            <Link href="/" className="px-4">
               ← Back
            </Link>
         </div>
         {children}
      </div>
  )
}

export default LabLayout