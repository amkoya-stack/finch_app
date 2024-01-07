import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finch – An efficient way to learn computer science',
  description: 'Finch is a super human tutor powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <hr className="hr-line"/>
        {/* <Header /> */}
        <main className="container mx-auto">
          <div className="flex items-start justify-center min-h-screen">
            <div className='mt-20'>{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  )
}
