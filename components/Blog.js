import Link from "next/link";
import Tag from "./Tag";

export default function Blog({ data }) {


    const firstHeading = Object.keys(data.headings)[0]

    return (
        <div className="upper-border py-8 gap-2 md:gap-24 flex-col flex md:flex-row">
            <p className="gray-color font-semibold min-w-[10rem] mt-[0.4rem]">{data.date}</p>
            <div className="grow">
                <h2 className="font-bold text-2xl">
                    <Link href={"/blog/" + data.title}>
                        {data.title}
                    </Link>
                </h2>
                {/* Tags */}
                <div className="text-sm flex gap-2 font-semibold">
                    {data.tags.map((tag) => (
                        <Tag name={tag} key={tag} />
                    ))}
                </div>

                <p className="gray-color mt-6">
                    {data.headings[firstHeading]}
                </p>

                <Link href={"/blog/" + data.title} className="mt-6 primary-color flex gap-2 cursor-pointer hover:underline items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}