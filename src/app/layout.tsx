import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700']
})

export const metadata = {
  title: 'Vscode',
  description: 'Vscode made with tailwind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
