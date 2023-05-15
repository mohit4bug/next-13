import Link from "next/link";

export default function Tag({name, number}) {

    const isTag = number > 0

    return (
        <Link href="/tags/next-js"
              className="uppercase primary-color cursor-pointer text-sm font-semibold w-fit">
            {name}
            <span className="text-neutral-100">&nbsp;&nbsp; {isTag && (`(${number})`)}</span>
        </Link>
    )
}