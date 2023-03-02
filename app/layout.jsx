import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full h-[50px] bg-blue-100 flex items-center">
          <ul className="flex justify-center gap-[50px] items-center p-5">
            <Link href="/" className="bg-white p-[5px] rounded-[10px]">Home</Link>
            <Link href="/goals" className="bg-white p-[5px] rounded-[10px]">Goals</Link>
          </ul>
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
