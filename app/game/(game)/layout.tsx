import Link from 'next/link';

type Props = {
    children: React.ReactNode;
}

export default function ComponentsLayout({children}: Props) {
    return (
        <>
            <div className='flex justify-start gap-4'>
                <Link href="/" className='rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                    Go back to Home
                </Link>
                <Link href="/game" className='rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                    Go back to Game
                </Link>
            </div>
            <main>
                {children}
            </main>
        </>
    )

}