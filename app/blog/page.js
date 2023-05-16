'use client'

import Header from "@/components/Header";
import Blog from "@/components/Blog";
import data from "@/data/db.json";
import Search from "@/components/Search";
import { useState } from "react";

export default function Blogs() {

    const [query, setQuery] = useState("")

    const newBlogs = data.blogs.sort((b1, b2) => {
        const b1Date = new Date(b1.date)
        const b2Date = new Date(b2.date)

        if (b1Date < b2Date) return 1
        else if (b1Date > b2Date) return -1
        else return 0
    })

    return (
        <main>
            <Header search={<Search query={query} setQuery={setQuery} />}>All posts</Header>
            {newBlogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase())).map((blog) => (
                <Blog data={blog} key={blog.title} />
            ))}
        </main>
    )
}