import Link from "next/link";
import Image from "next/image";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: React.JSX.Element;
   imagePath?: string;
   path?: string;
   title: string;
}

const responsiveHeight = "sm:h-[280px] md:h-[280px] lg:h-[300px] xl:h-[440px] 2xl:h[560px]";

function WideCard({ description, imagePath = "", path = "", title}: Props) {

   return (
      <div className={`relative rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 shadow transition duration-400 hover:scale-[101%] hover:shadow-md`}>
         {
            path !== "" &&
            <Link href={path} className="absolute z-10 top-0 left-0 w-full h-full" />
         }

         <div className={`relative h-[560px] ${responsiveHeight}`}>
            <Image
               alt=""
               src={imagePath}
               fill
               sizes="100vw"
               className="object-cover rounded-lg shadow shadow-gray-500"
            />
         </div>

         <div className="p-4 text-gray-700 rounded-b-lg">
            <h1 className="text-2xl sm:text-xl">
               {title}
            </h1>

            {description}
         </div>
      </div>
   )
}

export default WideCard