import Link from 'next/link';

type Props = {
    children: React.ReactNode;
}

export default function ComponentsLayout({children}: Props) {
    return (
        <section>
            <Link href="/" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
                Go back to Home
            </Link>
            <Link href="/algorithm" className='border rounded-md p-4 bg-gray-200 hover:bg-gray-300'>
               Go back to Algorithm
            </Link>

            {children}
        </section>
    )

}