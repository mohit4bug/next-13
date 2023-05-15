import Image from "next/image";

export default function Project() {
    return (
        <div className="h-auto w-full border-2 border-neutral-500 rounded-xl overflow-hidden">
            {/*Image container*/}
            <div className="relative h-[20rem] w-full">
                <Image src="/project.png" alt="project" fill className="object-cover"/>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h1 className="capitalize font-bold text-2xl">the time machine</h1>
                <p className="gray-color">
                    Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date
                    and press "Go". No more worrying about lost keys or forgotten headphones with this simple yet
                    affordable solution.
                </p>
                <p className="primary-color flex gap-2 cursor-pointer hover:underline items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                    </svg>
                </p>
            </div>
        </div>
    )
}