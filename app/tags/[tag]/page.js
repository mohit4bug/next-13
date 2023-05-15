import Header from "@/components/Header";
import Blog from "@/components/Blog";

export default function TagPage({params}) {

    const {tag} = params

    return (
        <main>
            <Header>{tag}</Header>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/>
        </main>
    )
}