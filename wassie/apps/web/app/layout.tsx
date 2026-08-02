import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Wassie World Genesis',
  description: 'Frontend for Wassie World Genesis',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
