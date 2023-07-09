import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: React.JSX.Element;
   image?: string;
   path?: string;
   title: string;
}

function Card({ className = "", description, image = "", path = "", title }: Props) {
  return (
   <div className={`w-[280px] transition duration-200 hover:scale-[1.01] hover:-translate-y-1 ${className}`}>
      <figure className={`h-[280px] bg-cover bg-center rounded-lg transition duration-200 hover:shadow-lg`} style={{backgroundImage: `url('${image}')`}}>
         {
            path !== "" &&
            <Link href={path} className="block h-full w-full p-4" />
         }
      </figure>

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