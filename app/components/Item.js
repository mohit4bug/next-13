'use client'

import Image from "next/image"

export default function Item() {
    return (
        <div className="item-css min-w-[235px] relative w-[235px] h-full  ml-[5px] rounded-sm">
            <Image src="/poster2.png" fill className="object-cover" />
        </div>
    )
}