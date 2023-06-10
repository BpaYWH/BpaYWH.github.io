import Link from "next/link"

export default function GamesPage() {
    return (
      <div>
         <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
            Go back to Home
         </Link>
         <p className="text-2xl">Games</p>
         <ul>
            <li>
               <Link href="/game/aim-training">Aim Training</Link>
            </li>
         </ul>
  </div>
    )
} 
