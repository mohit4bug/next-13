import './globals.css'
import {Inter_Tight} from 'next/font/google'
import Navbar from "@/components/Navbar";

const globalFont = Inter_Tight({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={globalFont.className}>
        <div className="w-full flex justify-center select-none overflow-auto h-screen scrollbar-hide">
            <div className="max-w-6xl w-full px-8">
                <Navbar/>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
