'use client'
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import data from "@/data/db.json"
import GradientHeading from "@/components/GradientHeading";
import Search from "@/components/Search";
import { useState } from "react";

export default function TagPage({ params }) {

    const { tag } = params
    const [query, setQuery] = useState("")

    const allTagBlogs = data.blogs.filter(blog => blog.tags.includes(tag.toString()))
    if (!tag)
        return (
            <GradientHeading>404! Tag not found.</GradientHeading>
        )

    return (
        <main>
            <Header search={<Search query={query} setQuery={setQuery} />}>{tag}</Header>
            {allTagBlogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase())).map((blog) => (
                <Blog data={blog} key={blog.title} />
            ))}
        </main>
    )
}