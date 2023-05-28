'use client'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Item from './Item'
import { useRef, useState } from 'react'

export default function Carousel() {

    const [slideCount, setSlideCount] = useState(0)
    const listRef = useRef()
    const handleSlide = (button) => {
        const prevDistance = listRef.current.getBoundingClientRect().x // -40 beacuse of the buttons
        if (button === "L" && slideCount > 0) {
            setSlideCount((prev) => prev - 1)
            listRef.current.style.transform = `translateX(${(2 * 190) + prevDistance}px)`
        }
        if (button === "R" && slideCount < 3) {
            setSlideCount((prev) => prev + 1)
            listRef.current.style.transform = `translateX(${(2 * -190) + prevDistance}px)`
        }
    }

    return (
        <div className="bg-dark mt-8">
            <p className="text-white text-xl font-semibold p-2 px-10">Family TV Favorite</p>
            <div className=" w-full relative">
                <span className="absolute top-0 left-0 h-full backdrop-blur-sm w-10 grid place-items-center text-white cursor-pointer  z-10" onClick={() => handleSlide("L")}>
                    <ArrowBackIosIcon />
                </span>
                {/* List */}
                <div className='h-36 w-full flex pl-9  transition-transform duration-500' ref={listRef} >
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <span className="absolute top-0 right-0 h-full backdrop-blur-sm  w-10 grid place-items-center text-white cursor-pointer  z-10" onClick={() => handleSlide("R")}>
                    <ArrowForwardIosIcon />
                </span>
            </div>
        </div>
    )
}