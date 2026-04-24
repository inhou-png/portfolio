import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import Footer from '@/components/footer/page';

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={`${montserrat.className} h-full relative bg-black`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
