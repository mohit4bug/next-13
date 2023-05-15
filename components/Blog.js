export default function Blog() {
    return (
        <div className="upper-border py-8 gap-2 md:gap-24 flex-col flex md:flex-row">
            <p className="gray-color font-semibold min-w-fit mt-[0.4rem]">August 7, 2023</p>
            <div className="grow">
                <h2 className="font-bold text-2xl">New features in v1</h2>
                {/* Tags */}
                <div className="text-sm flex gap-2 font-semibold">
                    <p className="uppercase primary-color cursor-pointer">NEXT-JS</p>
                    <p className="uppercase primary-color cursor-pointer">Tailwind</p>
                    <p className="uppercase primary-color cursor-pointer">Bootstrap</p>
                </div>

                <p className="gray-color mt-6">
                    An overview of the new features released in v1 - code block copy, multiple
                    authors, frontmatter
                    layout and more
                </p>

                <p className="mt-6 primary-color flex gap-2 cursor-pointer hover:underline items-center">
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