import Header from "@/components/Header";

function Tag() {
    return (
        <p className="uppercase primary-color cursor-pointer text-sm font-semibold">
            Next-js
            <span className="text-neutral-100">&nbsp;&nbsp;(10)</span>
        </p>
    )
}


export default function Tags() {
    return (
        <main>
            <Header sub={"You can find here all the tags I have created"}>
                Tags
            </Header>
            <div className="max-w-prose flex flex-wrap gap-4">
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
                <Tag/>
            </div>
        </main>
    )
}