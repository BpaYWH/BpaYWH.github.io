import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8'>
      <h1 className='text-2xl font-bold'>404 - Page Not Found</h1>
        {/* TODO: Add transition hover & text to icon animation */}
        <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
          Go back to Home
        </Link>
    </div>
  );
}