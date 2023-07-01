import './globals.css'
import { Inter } from 'next/font/google'
import Introduction from '@/components/homePage/Introduction';
import Switch from '@/components/general/switch';

const inter = Inter({ subsets: ['latin'] });
const styles = "flex h-screen px-4 py-8 gap-4 bg-gray-50";

export const metadata = {
  title: 'My Component Laboratory',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + styles}>
        <Introduction />
        {children}
      </body>
    </html>
  )
}
