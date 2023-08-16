import * as React from 'react';
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Nextjs assessment',
};

const inter = Inter({
  subsets: ['latin'],
})
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   weight: ["400", "500", "600", "700"],
// })

// const googleFonts = [
//   {
//     style: inter.style,
//     variable: inter.variable,
//   },
//   {
//     style: poppins.style,
//     variable: poppins.variable,
//   },
// ];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
