'use client'

import './globals.css'
import { Annie_Use_Your_Telescope, Inter_Tight } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const globalFont = Inter_Tight({ subsets: ['latin'] })
const LogoFont = Annie_Use_Your_Telescope({
    subsets: ['latin'],
    weight: "400"

})
export default function RootLayout({ children }) {

    const [show, setShow] = useState(false)

    return (
        <html lang="en">
            <body className={globalFont.className}>
                <div style={{ height: "100dvh" }} className="w-full flex justify-center select-none overflow-auto scrollbar-hide">
                    <div className="max-w-6xl w-full px-8 h-full relative">
                        <Navbar show={show} setShow={setShow} />
                        {children}
                        <div onClick={() => setShow(false)} style={{ height: "100vh", transform: `translateX(${show ? '0' : '100%'})` }} className="fixed block md:hidden z-10 top-0 w-full left-0 transition-all duration-500">
                            <ul onClick={e => e.stopPropagation()} className='h-full bg-neutral-900 w-[70%] float-right shadow-2xl shadow-black flex flex-col py-10 px-8 gap-4 text-[1rem]'>
                                <Link href="/" className={`${LogoFont.className} text-2xl flex items-center gap-2`}>
                                    <Image src="/logo.svg" alt="logo" width={25} height={25} />
                                    Mohit's blog
                                </Link>
                                <Link onClick={() => setShow(false)} href="/blog">Blog</Link>
                                <Link onClick={() => setShow(false)} href="/tags">Tags</Link>
                                <Link onClick={() => setShow(false)} href="/projects">Projects</Link>
                                <Link onClick={() => setShow(false)} href="/about">About</Link>
                            </ul>
                        </div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    )
}
