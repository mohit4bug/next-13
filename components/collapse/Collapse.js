"use client"
import { useState } from "react"


export default function Collapse({ title }) {

    const [open, setOpen] = useState(false)

    return (
        <div>
            {/* Label */}
            <label onClick={() => setOpen((prev) => !prev)} htmlFor="desc" className="flex items-center justify-between p-2 bg-slate-50 hover:bg-slate-100 rounded-md cursor-pointer">
                <p className="font-semibold">{title}</p>
                {!open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>}
                {/* Remaining */}
                {open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>}
            </label>
            <input type="checkbox" style={{ display: "none" }} />
            {open && <p id="content" className="p-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            </p>}
        </div>
    )
}