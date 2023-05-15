function Search() {
    return (
        <div
            className="h-[2.5rem] flex items-center bg-neutral-900 max-w-prose rounded-md px-2  gap-2">
            <input
                placeholder="Search articles"
                className="w-full h-full bg-transparent border-none outline-none"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
            </svg>
        </div>
    )
}

function Sub({sub}) {
    return (
        <p className="gray-color text-xl">
            {sub}
        </p>
    )
}

export default function Header({children, sub}) {
    return (
        <header className="pb-8">
            <h1 className="capitalize font-extrabold text-[4rem]">{children}</h1>
            {sub ? <Sub sub={sub}/> : <Search/>}
        </header>
    )
}