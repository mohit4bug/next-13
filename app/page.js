import Blog from "@/components/Blog";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main>
            <Header sub={"A blog created with Next.js and Tailwind.css"}>
                Latest
            </Header>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </main>
    )
}
