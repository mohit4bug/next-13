import Blog from "@/components/Blog";
import Header from "@/components/Header";
import data from "@/data/db.json"

export default function Home() {

    const newBlogs = data.blogs.sort((b1, b2) => {
        const b1Date = new Date(b1.date)
        const b2Date = new Date(b2.date)

        if (b1Date < b2Date) return 1
        else if (b1Date > b2Date) return -1
        else return 0
    })


    return (
        <main>
            <Header sub={"A blog created with Next.js and Tailwind.css"}>Latest</Header>
            {newBlogs.map((blog) => (
                <Blog data={blog} />
            ))}
        </main>
    )
}
