import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Delicious Receipes ',
  description: 'Various Delicious Receipes ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const access = cookieStore.get('access')
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header access={access?.value || ''} />
        <div className='min-h-[calc(100vh-48px)]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
