import Cart from "../Cart/Cart";
import Dropdown from "../dropdown/Dropdown";
import "./Navbar.scss";


function RoundButton({ children }) {
    return (
        <button className="p-2 rounded-full hover:bg-slate-100 cursor-pointer relative dropdown-parent">
            {children}
        </button>
    )
}

export default function Navbar({ setDrawer }) {

    return (
        <div className="bg-white w-full p-4 flex items-center justify-between shadow-sm sticky top-0 z-10">

            {/* Ham burgur */}
            <span className="block md:hidden cursor-pointer" onClick={() => setDrawer(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>

            {/* Logo */}
            <h1 className="text-2xl">MERRNO</h1>

            {/* Cat links */}
            <ul className="md:flex hidden gap-4  uppercase text-sm font-semibold ">
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
                    {/* User dropdown */}
                    <Dropdown>
                        <div className="flex flex-col w-auto p-2">
                            {/* Single item */}
                            <div className="whitespace-nowrap px-2 pr-14 rounded-md flex gap-2 items-center hover:bg-neutral-100 py-[0.5rem] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <p className="text-sm capitalize">My account</p>
                            </div>
                            {/* Single item */}
                            <div className="whitespace-nowrap px-2 pr-14 rounded-md flex gap-2 items-center hover:bg-neutral-100 py-[0.5rem] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <p className="text-sm capitalize">My orders</p>
                            </div>
                            <div className="whitespace-nowrap px-2 pr-14 rounded-md flex gap-2 items-center hover:bg-neutral-100 py-[0.5rem] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className="text-sm capitalize">Wishlist</p>
                            </div>
                            <hr className="h-0" />
                            <div className="whitespace-nowrap px-2 pr-14 rounded-md flex gap-2 items-center hover:bg-neutral-100 py-[0.5rem] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <p className="text-sm capitalize">Help</p>
                            </div>
                            <div className="whitespace-nowrap px-2 pr-14 rounded-md flex gap-2 items-center hover:bg-neutral-100 py-[0.5rem] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <p className="text-sm capitalize">Logout</p>
                            </div>
                        </div>
                    </Dropdown>
                </RoundButton>


                <RoundButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p className="absolute top-0 right-0 text-[0.6rem] font-semibold bg-blue-500 text-white h-4 w-4 rounded-full flex items-center justify-center">2</p>
                    {/* Cart dropdown */}
                    <Cart />
                </RoundButton>
            </div >
        </div >
    )
}