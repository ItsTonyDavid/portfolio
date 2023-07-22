import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Navbar from '@/components/Navbar/Navbar';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Antonio Alcántara',
  description: 'IT services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='is-main'>
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <Navbar/>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
