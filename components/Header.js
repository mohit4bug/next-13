'use client'

import Image from "next/image";
import Link from "next/link";
import GradientHeading from "./GradientHeading";



function Sub({ sub }) {
    return (
        <p className="gray-color text-xl">
            {sub}
        </p>
    )
}

export default function Header({ children, sub, center, date, isUserDetails, search }) {

    const style = center ? "pb-8 flex items-center flex-col" : "pb-8"

    return (
        <header className={style}>
            {date && <p className="gray-color">{date}</p>}
            <GradientHeading>{children}</GradientHeading>
            {sub || date ? <Sub sub={sub} /> : search}

            {isUserDetails && <div className="gap-2 py-4 pt-0 flex md:hidden">
                {/*Image container*/}
                <div className="relative h-[2.8rem] w-[2.8rem] rounded-full overflow-hidden">
                    <Image src="/MohitAbout.jpeg" alt="me" fill className="object-cover" />
                </div>
                <div>
                    <p>Mohit Khatri</p>
                    <Link href="https://github.com/mohit4bug" className="primary-color text-sm">@Github</Link>
                </div>
            </div>
            }
        </header>
    )
}