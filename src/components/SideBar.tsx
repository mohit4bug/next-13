'use client'

import { useState } from "react"
import {
    VscFiles,
    VscSearch,
    VscGitMerge,
    VscDebugAlt,
    VscExtensions,
    VscAccount,
    VscSettingsGear,
    VscNewFile,
    VscNewFolder,
    VscRefresh,
    VscCollapseAll,
    VscEllipsis,
    VscChevronRight,
    VscJson
} from "react-icons/vsc"
import { BsGit } from "react-icons/bs"
import MiniButton from "./MiniButton"

export default function SideBar() {

    const [activeTab, setActiveTab] = useState(0)
    const inActiveTabStyle = "text-neutral-400 border-l-2 border-transparent cursor-pointer h-16 flex items-center justify-center w-full"
    const activeTabStyle = "text-neutral-200 border-l-2 border-blue-400 cursor-pointer h-16 flex items-center justify-center w-full"

    const [showFileTree, setShowFileTree] = useState(true)

    return (
        <div className="w-fit h-full bg-neutral-900 flex">
            <div className="w-14 h-full border-r border-neutral-700 flex flex-col">
                <span className={activeTab === 0 ? activeTabStyle : inActiveTabStyle} onClick={() => { setActiveTab(0), setShowFileTree(prev => !prev) }}>
                    <VscFiles size={32} />
                </span>
                <span className={activeTab === 1 ? activeTabStyle : inActiveTabStyle} onClick={() => setActiveTab(1)}>
                    <VscSearch size={32} />
                </span>
                <span className={activeTab === 2 ? activeTabStyle : inActiveTabStyle} onClick={() => setActiveTab(2)}>
                    <VscGitMerge size={32} />
                </span>
                <span className={activeTab === 3 ? activeTabStyle : inActiveTabStyle} onClick={() => setActiveTab(3)}>
                    <VscDebugAlt size={32} />
                </span>
                <span className={activeTab === 4 ? activeTabStyle : inActiveTabStyle} onClick={() => setActiveTab(4)}>
                    <VscExtensions size={32} />
                </span>
                <span className={`${activeTab === 5 ? activeTabStyle : inActiveTabStyle} mt-auto`} onClick={() => setActiveTab(5)}>
                    <VscAccount size={32} />
                </span>
                <span className={activeTab === 6 ? activeTabStyle : inActiveTabStyle} onClick={() => setActiveTab(6)}>
                    <VscSettingsGear size={32} />
                </span>
            </div>
            {showFileTree && (
                <div className="w-56 sm:w-80 h-full border-r border-neutral-700 p-2 px-4">
                    {/* Icons */}
                    <div className="flex items-center gap-[0.2rem] h-8">
                        <p className="uppercase text-sm text-neutral-400 whitespace-nowrap overflow-hidden">EXPLORER: Mohit/...</p>
                        <MiniButton>
                            <VscNewFile size={20} />
                        </MiniButton>
                        <MiniButton>
                            <VscNewFolder size={20} />
                        </MiniButton>
                        <MiniButton>
                            <VscRefresh size={20} />
                        </MiniButton>
                        <MiniButton>
                            <VscCollapseAll size={20} />
                        </MiniButton>
                        <MiniButton>
                            <VscEllipsis size={20} />
                        </MiniButton>
                    </div>
                    {/* File Tree */}
                    <div className="text-neutral-300">
                        {/* Single Item */}
                        <div className="items-center text-[0.94rem] flex gap-[0.35rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <VscChevronRight size={20} />
                            <p>node_modules</p>
                        </div>
                        <div className="items-center text-[0.94rem] flex gap-[0.35rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <VscChevronRight size={20} />
                            <p>public</p>
                        </div>
                        <div className="items-center text-[0.94rem] flex gap-[0.35rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <VscChevronRight size={20} />
                            <p>src</p>
                        </div>
                        <div className="items-center text-[0.94rem] flex gap-[0.35rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <BsGit size={14} className="ml-[0.2rem] text-slate-700" />
                            <p>.gitignore</p>
                        </div>
                        <div className="items-center text-[0.94rem] flex gap-[0.28rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <VscJson size={18} className="ml-[0.1rem] text-yellow-300" />
                            <p>package-lock.json</p>
                        </div>
                        <div className="items-center text-[0.94rem] flex gap-[0.28rem] h-[1.8rem] rounded-md px-2 -mx-2 cursor-pointer hover:bg-neutral-700">
                            <VscJson size={18} className="ml-[0.1rem] text-yellow-300" />
                            <p>package.json</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}