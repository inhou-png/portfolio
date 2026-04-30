import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Pixelify_Sans } from 'next/font/google'
import './globals.scss'
import Footer from '@/components/footer/page';

const montserrat = Montserrat({ subsets: ['latin'] })

const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabio Enrique Brasil',
  description: 'Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${pixelify.className} h-full relative bg-black`}>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
