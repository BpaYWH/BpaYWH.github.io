import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   description?: string;
   image?: string;
   path: string;
   title: string;
}

function Card({ className = "", description = "", image = "", path, title }: Props) {
  return (
   <div className={`rounded-lg min-w-[200px] max-w-[280px] h-[360px] bg-cover transition duration-200 hover:scale-[1.01] hover:shadow-lg hover:-translate-y-1 ${className}`} style={{backgroundImage: `url('${image}')`}}>
      <Link href={path} className="block h-full p-4">
         <h1 className="text-2xl mb-2">
            {title}
         </h1>
         <p className="text-md">
            {description}
         </p>
      </Link>
   </div>
  )
}

export default Card