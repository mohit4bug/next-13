import './globals.css'
import {Inter_Tight} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const globalFont = Inter_Tight({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={globalFont.className}>
        <div style={{height: "100dvh"}} className="w-full flex justify-center select-none overflow-auto scrollbar-hide">
            <div className="max-w-6xl w-full px-8 h-full">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    )
}
