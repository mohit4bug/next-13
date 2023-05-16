import GradientHeading from "@/components/GradientHeading";
import Tag from "@/components/Tag";
import data from "@/data/db.json"


export default function Tags() {

    const tagCounts = data.blogs.reduce((acc, blog) => {
        if (blog.tags) {
            blog.tags.forEach(tag => {
                if (acc[tag]) {
                    acc[tag]++;
                } else {
                    acc[tag] = 1;
                }
            });
        }
        return acc;
    }, {});

    const tags = Object.keys(tagCounts)

    return (
        <main>
            <div className="w-full flex flex-col md:flex-row gap-2 h-[68vh] items-center justify-center">
                <div>
                    <GradientHeading>Tags</GradientHeading>
                </div>
                <hr className="h-[5rem] border-[0.08rem] mx-4 hidden md:block" />
                <div className="flex flex-wrap gap-4 max-w-md md:justify-start justify-center">
                    {
                        tags.map((tag) => (
                            <Tag name={tag} number={tagCounts[tag]} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}