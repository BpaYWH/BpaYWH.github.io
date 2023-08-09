import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const styles = "font-nunito";

export const metadata = {
  title: 'Henry Yau Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <div id="wrapper-div" className={inter.className + " " + styles}>
          <div id="content" className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
