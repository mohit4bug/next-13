import Image from "next/image";
import socialMediaImages from "../../assets/socialMediaImages";
import Link from "next/link";

export default function Drawer({ drawer, setDrawer }) {



    const drawerStyle = !drawer ? "md:hidden block transform translate-x-[-100%] fixed z-20 h-screen top-0 w-full transition-all duration-500" :
        "md:hidden block transform translate-x-[0%] fixed z-20 h-screen top-0 w-full transition-all duration-500"

    return (
        <div className={drawerStyle} onClick={() => setDrawer(false)}>
            {/* here is all the content */}
            <div className="w-[70%] bg-white h-full shadow-2xl p-4 flex flex-col gap-4 relative" onClick={(e) => e.stopPropagation()}>

                {/* cross icon */}
                <span className="absolute top-5 right-5 cursor-pointer" onClick={() => setDrawer(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>

                <h1 className="text-2xl">Merrno</h1>
                <p className="text-sm">Discover the most outstanding articles on all topics of life. Write your stories and share them.</p>
                <div className="flex gap-2 items-center">
                    {
                        socialMediaImages.map((obj) => (
                            <Link href={obj.link} key={obj.link}>
                                <Image height={30} width={30} src={'/' + obj.img} alt="social" />
                            </Link>
                        ))
                    }
                </div>
                {/* Search box */}
                <div className="p-2 h-10 bg-slate-100 rounded-md flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className="text-sm grow bg-transparent outline-none border-none" placeholder="Search here." />
                </div>
                <hr className="h-0  my-4" />

                {/* Links */}
                <ul className="gap-2 -m-2 flex flex-col uppercase text-sm font-semibold ">
                    <li className="cursor-pointer rounded-md transition-all hover:bg-slate-100 p-2 px-4">Men</li>
                    <li className="cursor-pointer rounded-md transition-all hover:bg-slate-100 p-2 px-4">Women</li>
                    <li className="cursor-pointer rounded-md transition-all hover:bg-slate-100 p-2 px-4">Beauty</li>
                    <li className="cursor-pointer rounded-md transition-all hover:bg-slate-100 p-2 px-4">Sports</li>
                </ul>
            </div>
        </div>
    )
}