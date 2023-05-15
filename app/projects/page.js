import Header from "@/components/Header";
import Project from "@/components/Project";


export default function Projects() {
    return (
        <main>
            <Header sub={"All my projects at one place"}>Projects</Header>
            <div className="upper-border py-10 flex flex-col sm:grid grid-cols-2 gap-8">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </main>
    )
}