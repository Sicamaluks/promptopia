import Nav from '@components/Nav'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Provider from '@components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promtopia',
  description: 'Discover & Share AI-Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
