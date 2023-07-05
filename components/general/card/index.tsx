import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: string;
   image?: string;
   path: string;
   title: string;
}

function Card({ className = "", description = "", image = "", path, title }: Props) {
  return (
   <div className="w-[280px]">
      <div className={`h-[280px] mb-2 bg-cover bg-center rounded-lg transition duration-200 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-1 ${className}`} style={{backgroundImage: `url('${image}')`}}>
         <Link href={path} className="block h-full w-full p-4" />
      </div>
      <h1 className="text-2xl">
         {title}
      </h1>
      <p className="text-md text-gray-400">
         {description}
      </p>
   </div>
  )
}

export default Card