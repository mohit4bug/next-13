import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-2 py-4">
            {/*Social Icons*/}
            <div className="flex gap-2 items-center mt-2">
                <Link href="https://github.com/mohit4bug">
                    <Image src="/github.svg" alt="Github" height={35} width={35}/>
                </Link>
                <Link href="https://www.linkedin.com/in/mohit4bug/">
                    <Image src="/linkedIn.svg" alt="LinkedIn" height={28} width={28}/>
                </Link>
            </div>
            <p className="gray-color text-sm">Mohit Khatri • © 2023 • NextJS</p>
            <p className="gray-color text-sm">Mohit's Blog</p>
        </footer>
    )
}