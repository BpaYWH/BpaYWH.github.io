import Link from "next/link";
import Image from "next/image";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: React.JSX.Element;
   imagePath?: string;
   path?: string;
   title: string;
}

function WideCard({ description, imagePath = "", path = "", title}: Props) {

   return (
      <div className={`relative rounded-lg bg-gray-50 transition duration-400 hover:scale-[101%] hover:shadow-md`}>
         {
            path !== "" &&
            <Link href={path} className="absolute z-10 top-0 left-0 w-full h-full" />
         }

         <div className="relative h-[480px] sm:h-[280px] md:h-[280px] lg:h-[300px] xl:h-[380px] 2xl:h[480px]">
            <Image
               alt=""
               src={imagePath}
               fill
               sizes="100vw"
               className="object-cover rounded-lg shadow-md"
            />
         </div>

         <div className="p-4 text-gray-700 rounded-b-lg">
            <h1 className="text-2xl">
               {title}
            </h1>

            {description}
         </div>
      </div>
   )
}

export default WideCard