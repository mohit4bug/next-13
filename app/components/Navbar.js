'use client'
import Image from "next/image"
import Link from "next/link"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./Navbar.scss"
import { useEffect, useState } from "react"

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Handle Scroll to change the color later
    return (
        <nav className="bg-gradient-to-t from-transparent to-neutral-950 px-4 lg:px-14 h-16 flex items-center justify-between fixed w-full z-10 transition-all duration-500">
            <div className="flex items-center gap-4 lg:gap-8 link">
                <Image src="/logo.png" height={80} width={80} alt="" />
                <span className="gap-6  hidden lg:flex">
                    <Link href="/">Home</Link>
                    <Link href="/">Tv Shows</Link>
                    <Link href="/">Movies</Link>
                    <Link href="/">New & Popular</Link>
                    <Link href="/">My List</Link>
                </span>
                <select className="bg-transparent py-2 outline-none block lg:hidden">
                    <option className="bg-dark">Home</option>
                    <option className="bg-dark">Tv Shows</option>
                    <option className="bg-dark">Movies</option>
                    <option className="bg-dark">New & Popular</option>
                    <option className="bg-dark">My List</option>
                </select>
            </div>
            <div className="flex items-center gap-4 link">
                <SearchRoundedIcon fontSize="small hidden md:block" />
                <Link href="/" className="font-semibold hidden md:block">Children</Link>
                <NotificationsNoneRoundedIcon fontSize="small" />
                <div className="flex  items-center cursor-pointer relative parent-css">
                    <span className="relative h-8 w-8">
                        <Image src="/profile.png" fill className="rounded-sm" alt="" />
                    </span>
                    <ArrowDropDownRoundedIcon className="arrow" />
                    <div className="absolute child-css  top-8 w-fit p-2 right-0">
                        <div className="bg-dark h-full w-full mt-[0.6rem] border flex flex-col p-4 gap-4 pr-10  cursor-default">
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap md:hidden" href="/">
                                <SearchRoundedIcon fontSize="small" />
                                Search
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap md:hidden" href="/">
                                <NotificationsNoneRoundedIcon fontSize="small" />
                                Notifications
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap" href="/">
                                <CreateRoundedIcon fontSize="small" />
                                Manage Profiles
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap" href="/">
                                <SupervisedUserCircleRoundedIcon fontSize="small" />
                                Transfer Profile
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap" href="/">
                                <PersonOutlineRoundedIcon fontSize="small" />
                                Account
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap" href="/">
                                <InfoOutlinedIcon fontSize="small" />
                                Help Center
                            </Link>
                            <Link className="link hover:underline flex items-center gap-2 whitespace-nowrap" href="/">
                                <LogoutOutlinedIcon fontSize="small" />
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}