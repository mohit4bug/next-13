import Header from "@/components/Header";
import Blog from "@/components/Blog";
import data from "@/data/db.json"
import GradientHeading from "@/components/GradientHeading";

export default function TagPage({ params }) {

    const { tag } = params

    const allTagBlogs = data.blogs.filter(blog => blog.tags.includes(tag.toString()))
    if (!tag)
        return (
            <GradientHeading>404! Tag not found.</GradientHeading>
        )

    return (
        <main>
            <Header>{tag}</Header>
            {allTagBlogs.map((blog) => (
                <Blog data={blog} />
            ))}
        </main>
    )
}