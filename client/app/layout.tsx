import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { cookies } from 'next/headers'
import { Providers } from './Redux/Provider'

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
      <body className={``}>
        <Providers>
          <Header access={access?.value || ''} />
          <div className='min-h-[calc(100vh-48px)]'>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
