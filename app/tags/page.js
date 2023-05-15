import Tag from "@/components/Tag";


export default function Tags() {
    return (
        <main>
            <div className="w-full flex flex-col md:flex-row gap-2 h-[68vh] items-center justify-center">
                <div>
                    <h1 className="capitalize font-extrabold text-[4rem]
            bg-gradient-to-r from-rose-500  to-white inline-block
             text-transparent bg-clip-text drop-shadow-[3px_4px_35px_rgba(244,63,94,0.51)]">
                        Tags
                    </h1>
                </div>
                <hr className="h-[5rem] border-[0.08rem] mx-4 hidden md:block"/>
                <div className="flex flex-wrap gap-4 max-w-md md:justify-start justify-center">
                    <Tag name="Next-js" number={10}/>
                    <Tag name="Guide" number={13}/>
                    <Tag name="React" number={10}/>
                    <Tag name="Reflection" number={13}/>
                    <Tag name="React" number={10}/>
                    <Tag name="Book" number={10}/>
                    <Tag name="React" number={11}/>
                    <Tag name="React" number={9}/>
                    <Tag name="Images" number={10}/>
                    <Tag name="React" number={10}/>
                    <Tag name="Writings" number={10}/>
                    <Tag name="React" number={10}/>
                    <Tag name="React" number={10}/>
                    <Tag name="React" number={10}/>
                    <Tag name="ExpressJS" number={10}/>
                    <Tag name="React" number={10}/>
                    <Tag name="Github" number={10}/>
                </div>
            </div>
        </main>
    )
}