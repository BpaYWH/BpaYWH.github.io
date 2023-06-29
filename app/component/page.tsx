import Link from 'next/link';

export default function ComponentPage() {

    return (
        <div>
            <button className='border rounded-md bg-gray-200 hover:bg-gray-300 m-4'>
                <Link href="/" className='p-4'>
                    Back to Home
                </Link>
            </button>
            <p className="text-2xl">Component</p>
            <ul>
                <li>
                    <Link href="/component/file-explorer">File Explorer</Link>
                </li>
                <li>
                    <Link href="/component/page-preview">Page Preview</Link>
                </li>
            </ul>
        </div>
    )
} 