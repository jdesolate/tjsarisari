import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '../components/nav'
import Footer from '../components/footer'
import { Analytics } from "@vercel/analytics/react"
import { ChakraProvider } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: {
    default: 'TJ Sari-Sari Store',
    template: '%s | TJ Sari-Sari Store',
  },
  description: `Your one- stop sari-sari store located in D.Jakosalem St., Cebu City.We offer a wide range of 
  everyday essentials, snacks, beverages, and household items at affordable prices.Open daily to serve your community needs.`,
  openGraph: {
    title: 'TJ Sari-Sari Store',
    description: `Your one - stop sari - sari store located in D.Jakosalem St., Cebu City.We offer a wide range of 
  everyday essentials, snacks, beverages, and household items at affordable prices.Open daily to serve your community needs.`,
    siteName: 'TJ Sari-Sari Store',
    locale: 'en_PH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </main>
        <Analytics />
      </body>
    </html >
  )
}
