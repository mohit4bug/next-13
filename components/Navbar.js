import Link from "next/link";
import {Annie_Use_Your_Telescope} from "next/font/google";
import Image from "next/image";

const LogoFont = Annie_Use_Your_Telescope({
    subsets: ['latin'],
    weight: "400"

})

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between py-8 items-center">
            <Link href="/" className={`${LogoFont.className} text-2xl flex items-center gap-2`}>
                <Image src="/logo.svg" alt="logo" width={25} height={25}/>
                Mohit's blog
            </Link>
            <ul className="flex gap-8">
                <Link href="/blog" className="cursor-pointer">Blog</Link>
                <Link href="/tags" className="cursor-pointer">Tags</Link>
                <Link href="/projects" className="cursor-pointer">Projects</Link>
                <Link href="/about" className="cursor-pointer">About</Link>
            </ul>
        </nav>
    )
}