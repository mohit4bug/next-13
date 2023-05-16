import Image from "next/image";
import Link from "next/link";
import GradientHeading from "./GradientHeading";

function Search() {
    return (
        <div
            className="h-[2.5rem] flex items-center bg-neutral-800 max-w-prose rounded-md px-2  gap-2">
            <input
                placeholder="Search articles"
                className="w-full h-full bg-transparent border-none outline-none" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
    )
}

function Sub({ sub }) {
    return (
        <p className="gray-color text-xl">
            {sub}
        </p>
    )
}

export default function Header({ children, sub, center, date, isUserDetails }) {

    const style = center ? "pb-8 flex items-center flex-col" : "pb-8"

    return (
        <header className={style}>
            {date && <p className="gray-color">{date}</p>}
            <GradientHeading>{children}</GradientHeading>
            {sub || date ? <Sub sub={sub} /> : <Search />}

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