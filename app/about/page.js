import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main>
            <Header sub={"All about me"}>About</Header>
            <div className="upper-border py-10 flex flex-col md:flex-row justify-between gap-8 flex-nowrap">
                {/* Left */}
                <div className="flex flex-col items-center min-w-fit px-4">
                    <div
                        className="relative h-[15rem] w-[15rem] rounded-full overflow-hidden">
                        <Image src="/MohitAbout.jpeg" alt="me" fill
                               className="object-cover"/>
                    </div>
                    <p className="font-bold text-2xl mt-4">Mohit Khatri</p>
                    <p className="gray-color text-center">Full Stack web developer (JS)💕<br/> Graduating from
                        <span className="font-semibold">
                             {' '}Poornima University.
                        </span>
                    </p>
                    <div className="flex gap-2 items-center mt-2">
                        <Link href="https://github.com/mohit4bug">
                            <Image src="/github.svg" alt="Github" height={35} width={35}/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/mohit4bug/">
                            <Image src="/linkedIn.svg" alt="LinkedIn" height={28} width={28}/>
                        </Link>
                    </div>
                </div>
                {/* Right */}
                <div className="grow flex flex-col gap-4 text-center md: mt-8">
                    <p className="gray-color">Mohit Khatri is a passionate full-stack web developer with expertise in
                        various programming languages and frameworks. His primary focus is on coding in JavaScript,
                        particularly in the realm of web development.</p>

                    <p className="gray-color"> With a strong command over technologies like
                        MongoDB, Express, React, Node.js, Redux, and Next.js, Mohit excels at building robust and
                        dynamic web applications. Mohit constantly explores new
                        technologies and keeps himself updated with the latest industry trends.</p>

                    <p className="gray-color">With a meticulous approach to development, Mohit emphasizes clean and
                        maintainable code, ensuring the scalability and performance of his projects.</p>
                </div>
            </div>
        </main>
    )
}