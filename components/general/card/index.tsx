import Link from "next/link";
import Image from "next/image";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: React.JSX.Element;
   imagePath?: string;
   path?: string;
   title: string;
}

function Card({ description, imagePath = "", path = "", title}: Props) {

   return (
      <div className={`relative w-[480px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[380px] 2xl:w[480px] rounded-lg transition duration-200 hover:shadow hover:scale-[1.01] hover:-translate-y-1`}>
         {
            path !== "" &&
            <Link href={path} className="absolute z-10 top-0 left-0 w-full h-full" />
         }

         <div className="relative rounded-lg w-[480px] h-[480px] sm:w-[280px] md:w-[280px] lg:w-[300px] xl:w-[380px] 2xl:w[480px] sm:h-[280px] md:h-[280px] lg:h-[300px] xl:h-[380px] 2xl:h[480px]">
            <Image
               alt=""
               src={imagePath}
               fill
               sizes="100vw"
               className="object-cover rounded-t-lg"
            />
         </div>

         <div className="p-2">
            <h1 className="text-2xl">
               {title}
            </h1>

            {description}
         </div>
      </div>
   )
}

export default Card