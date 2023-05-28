'use client'

import Image from "next/image"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export default function Featured() {
    return (
        <div className="h-[70vh] md:h-screen relative">
            <Image src="/poster2.png" fill className="absolute h-full w-full object-cover z-[-1]" alt="" />
            <div className="abolute h-full w-full z-10 px-12">
                <div className="h-full w-full md:w-[30rem] flex flex-col p-2 justify-center items-start">
                    <div className="relative w-full  h-1/3">
                        <Image src="/small2.png" fill className="object-contain" alt="" />
                    </div>
                    <p className="font-semibold text-white">Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.</p>
                    <div className="flex items-center gap-2 py-4">
                        <button className="rounded-sm flex items-center gap-1 bg-white font-semibold h-10 px-4">
                            <PlayArrowRoundedIcon />
                            <span>Play</span>
                        </button>
                        <button className="rounded-sm flex items-center gap-1 bg-neutral-500 bg-opacity-40 backdrop-blur-sm font-semibold text-white h-10 px-4">
                            <InfoOutlinedIcon />
                            <span>Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}