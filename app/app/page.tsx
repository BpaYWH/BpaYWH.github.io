import Link from 'next/link';

export default function ComponentPage() {

    return (
        <div>
            <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                Go back to Home
            </Link>
            <p className="text-2xl">App</p>
            <ul>
                <li>
                    <Link href="/app/read-it-quick">Read it quick</Link>
                </li>
            </ul>
        </div>
    )
} 