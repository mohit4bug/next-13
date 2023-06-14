import { codeImg } from "@/imports"
import Image from "next/image"
import {
    VscLayoutPanelOff,
    VscChromeMinimize,
    VscChromeClose,
    VscLayout,
    VscLayoutSidebarLeft,
    VscLayoutSidebarRightOff,
    VscMenu
} from "react-icons/vsc"
import { TbResize } from "react-icons/tb"
import MiniButton from "./MiniButton"

const buttons = ["File", "Edit", "Selection", "View", 'Go', "Run"]


export default function TitleBar() {
    return (
        <div className="h-10 border-b border-neutral-700 bg-neutral-900 flex items-center px-2 justify-between">
            <Image src={codeImg} width={20} height={20} alt="" className="" />

            {/* Links */}
            <div className="hidden sm:flex text-neutral-200 text-sm gap-2 px-4 mr-auto">
                {buttons.map((title) => (
                    <button className="hover:bg-neutral-700  px-2 py-[0.2rem] rounded-md">{title}</button>
                ))}
            </div>
            <span className="sm:hidden mr-auto ml-4 text-neutral-200 cursor-pointer">
                <VscMenu size={18} />
            </span>

            {/* Title */}
            <p className="hidden md:block text-neutral-200 text-sm mr-auto">Visual Studio Code</p>

            {/* Pane Buttons */}
            <div className="hidden gap-[0.3rem] md:flex">
                <MiniButton>
                    <VscLayoutSidebarLeft size={20} />
                </MiniButton>
                <MiniButton>
                    <VscLayoutPanelOff size={20} />
                </MiniButton>
                <MiniButton>
                    <VscLayoutSidebarRightOff size={20} />
                </MiniButton>
                <MiniButton>
                    <VscLayout size={20} />
                </MiniButton>
            </div>

            {/* Window Buttons */}
            <div className="flex items-center -mr-2 text-neutral-200">
                <span className="h-[2.4rem] w-10 hover:bg-neutral-700 flex items-center justify-center">
                    <VscChromeMinimize />
                </span>
                <span className="h-[2.4rem] w-10 hover:bg-neutral-700 flex items-center justify-center">
                    <TbResize />
                </span>
                <span className="h-[2.4rem] w-10 hover:bg-red-500 flex items-center justify-center">
                    <VscChromeClose />
                </span>
            </div>
        </div>
    )
}