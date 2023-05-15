import Header from "@/components/Header";
import Link from "next/link";
import Tag from "@/components/Tag";
import Image from "next/image";

const fake = {
    date: "August 7, 2021",
    headings: {
        "Introduction": [
            "Parsing and display of math equations is included in this blog template. Parsing of math is enabled by remark-math and rehype-katex. KaTeX and its associated font is included in _document.js so feel free to use it on any page.",
            "Inline math symbols can be included by enclosing the term between the $ symbol.",
            "Math code blocks are denoted by $$.",
            "If you intend to use the $ sign instead of math, you can escape it (\\$), or specify the HTML entity"
        ],
        "Deriving the OLS Estimator": [
            "Using matrix notation, let nnn denote the number of observations and kkk denote the number of regressors.",
            "The vector of outcome variables Y\\mathbf{Y}Y is a n×1n \\times 1n×1 matrix",
            "At times it might be easier to use vector notation. For consistency, I will use the bold small x to denote a vector and capital letters to denote a matrix. Single observations are denoted by the subscript."
        ]
    },
    tags: ["Next-js", "Math", "Ols"],
    previous: "Server",
    next: "Blog"
}


export default function BlogPage({params}) {
    
    let {blog} = params
    const headings = Object.keys(fake.headings)
    return (
        <main>
            <Header center={true} date={fake.date} isUserDetails={true}>{blog}</Header>
            <div className="upper-border py-10 gap-8 flex-col-reverse md:flex-row flex">
                {/*Left*/}
                <div className="min-w-[15rem]">
                    {/* 1 */}
                    <div className="hidden md:flex gap-2 py-4 pt-0">
                        {/*Image container*/}
                        <div className="relative h-[2.8rem] w-[2.8rem] rounded-full overflow-hidden">
                            <Image src="/MohitAbout.jpeg" alt="me" fill className="object-cover"/>
                        </div>
                        <div>
                            <p>Mohit Khatri</p>
                            <Link href="https://github.com/mohit4bug" className="primary-color text-sm">@Github</Link>
                        </div>
                    </div>
                    <div className="upper-border py-4">
                        <p className="gray-color text-sm uppercase">TAGS</p>
                        <div className="flex gap-2">
                            {
                                fake.tags.map((tag) => (
                                    <Tag name={tag} key={tag}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="upper-border py-4">
                        <p className="gray-color text-sm uppercase">Previous article</p>
                        <Link href={`/blog/${fake.previous}`} className="primary-color text-sm">{fake.previous}</Link>
                    </div>
                    <div className="upper-border py-4">
                        <p className="gray-color text-sm uppercase">Next article</p>
                        <Link href={`/blog/${fake.next}`} className="primary-color text-sm">{fake.next}</Link>
                    </div>
                    <div className="upper-border pt-8">
                        <Link href={`/blog`} className="primary-color flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                            </svg>
                            Back to the blog
                        </Link>
                    </div>
                </div>
                {/*Right*/}
                <div className="flex flex-col gap-4">
                    {
                        headings.map((heading, index) => (
                            <>
                                <h1 className="font-bold text-3xl" key={index}>{heading}</h1>
                                {fake.headings[heading].map((line, index) => (
                                    <p className="gray-color" key={index}>{line}</p>
                                ))}
                            </>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}