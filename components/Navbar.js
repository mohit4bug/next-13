import Link from "next/link";
import { Annie_Use_Your_Telescope } from "next/font/google";
import Image from "next/image";

const LogoFont = Annie_Use_Your_Telescope({
    subsets: ['latin'],
    weight: "400"

})

export default function Navbar({ show, setShow }) {
    return (
        <nav className="w-full flex justify-between py-8 items-center">
            <Link href="/" className={`${LogoFont.className} text-2xl flex items-center gap-2`}>
                <Image src="/logo.svg" alt="logo" width={25} height={25} />
                Mohit's blog
            </Link>
            <span onClick={() => setShow(true)} className="sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </span>
            <ul className="hidden gap-8 sm:flex">
                <Link href="/blog" className="cursor-pointer">Blog</Link>
                <Link href="/tags" className="cursor-pointer">Tags</Link>
                <Link href="/projects" className="cursor-pointer">Projects</Link>
                <Link href="/about" className="cursor-pointer">About</Link>
            </ul>

        </nav>
    )
}