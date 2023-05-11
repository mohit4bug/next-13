function RoundButton({ children }) {
    return (
        <button className="p-2 rounded-full hover:bg-slate-100 cursor-pointer relative">
            {children}
        </button>
    )
}

export default function Navbar() {
    return (
        <div className="bg-white w-full p-4 flex items-center justify-between shadow-sm sticky top-0">
            {/* Logo */}
            <h1 className="text-2xl">MERRNO</h1>

            {/* Cat links */}
            <ul className="md:flex hidden gap-4 font uppercase text-sm font-semibold ">
                <li className="cursor-pointer rounded-full transition-all hover:bg-slate-100 p-2 px-4">Men</li>
                <li className="cursor-pointer rounded-full transition-all hover:bg-slate-100 p-2 px-4">Women</li>
                <li className="cursor-pointer rounded-full transition-all hover:bg-slate-100 p-2 px-4">Beauty</li>
                <li className="cursor-pointer rounded-full transition-all hover:bg-slate-100 p-2 px-4">Sports</li>
            </ul>

            {/* Interactive buttons */}
            <div className="flex gap-2">
                <RoundButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </RoundButton>
                <RoundButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </RoundButton>
                <RoundButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p className="absolute top-0 right-0 text-[0.6rem] font-semibold bg-blue-500 text-white h-4 w-4 rounded-full flex items-center justify-center">2</p>
                </RoundButton>
            </div>
        </div>
    )
}