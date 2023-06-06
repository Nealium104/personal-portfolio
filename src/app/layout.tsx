'use client';

import './globals.css'
import { Montserrat, Open_Sans, Inconsolata } from 'next/font/google'
import { Providers } from './providers'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--montserrat' })

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--openSans' })

const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  variable: '--inconsolata' })


export const metadata = {
  title: 'Portfolio',
  description: 'Created by Neal Grindstaff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <style jsx global>{`
      :root {
             --montserrat: ${montserrat.style.fontFamily};
             --openSans: ${openSans.style.fontFamily};
             --inconsolata: ${inconsolata.style.fontFamily};
           }
          `}
      </style>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}