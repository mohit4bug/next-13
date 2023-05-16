import Header from "@/components/Header";
import Link from "next/link";
import Tag from "@/components/Tag";
import Image from "next/image";
import data from "@/data/db.json"
import GradientHeading from "@/components/GradientHeading";



export default function BlogPage({ params }) {

    let { blog: blogTitle } = params
    blogTitle = blogTitle.replace(/%20/g, " ")

    const currentBlog = data.blogs.find((blog) => blog.title.includes(blogTitle))

    if (!currentBlog)
        return (
            <GradientHeading>404! Blog not found.</GradientHeading>
        )

    const headings = Object.keys(currentBlog.headings)

    return (
        <main>
            <Header center={true} date={currentBlog.date} isUserDetails={true}>{currentBlog.title}</Header>
            <div className="upper-border py-10 gap-8 flex-col-reverse md:flex-row flex">
                {/*Left*/}
                <div className="min-w-[15rem]">
                    {/* 1 */}
                    <div className="hidden md:flex gap-2 py-4 pt-0">
                        {/*Image container*/}
                        <div className="relative h-[2.8rem] w-[2.8rem] rounded-full overflow-hidden">
                            <Image src="/MohitAbout.jpeg" alt="me" fill className="object-cover" />
                        </div>
                        <div>
                            <p>Mohit Khatri</p>
                            <Link href="https://github.com/mohit4bug" className="primary-color text-sm">@Github</Link>
                        </div>
                    </div>
                    <div className="upper-border py-4">
                        <p className="gray-color text-sm uppercase">TAGS</p>
                        <div className="flex gap-2 flex-wrap">
                            {
                                currentBlog.tags.map((tag) => (
                                    <Tag name={tag} key={tag} />
                                ))
                            }
                        </div>
                    </div>
                    {
                        currentBlog.previous &&
                        <div className="upper-border py-4">
                            <p className="gray-color text-sm uppercase">Previous article</p>
                            <Link href={`/blog/${currentBlog.previous}`} className="primary-color text-sm">{currentBlog.previous}</Link>
                        </div>
                    }
                    {
                        currentBlog.next &&
                        <div className="upper-border py-4">
                            <p className="gray-color text-sm uppercase">Next article</p>
                            <Link href={`/blog/${currentBlog.next}`} className="primary-color text-sm">{currentBlog.next}</Link>
                        </div>
                    }
                    <div className="upper-border pt-8">
                        <Link href={`/blog`} className="primary-color flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
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
                                {currentBlog.headings[heading].map((line, index) => (
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