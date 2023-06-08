import Link from 'next/link';

export default function ComponentsPage() {

    return (
        <div>
            <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                Go back to Home
            </Link>
            <p className="text-2xl">Components</p>
            <ul>
                <li>
                    <Link href="/components/file-explorer">File Explorer</Link>
                </li>
                <li>
                    <Link href="/components/pagePreview">Page Preview</Link>
                </li>
            </ul>
        </div>
    )
} 