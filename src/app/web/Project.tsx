import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    src: string;
    alt: string;
    link: string;
    title: string;
    description: string;
    tech: string;
    page: string;
}

export default function Project({src, alt, link, title, description, tech, page}: ProjectProps) {
    return (
        <div className="group flex flex-col items-center justify-center transition duration-150 ease-in-out hover:scale-110">
            <div className="rounded-xl w-full h-[625px] m-4 bg-bg-200 p-4 flex flex-col">
                <h2 className="text-5xl text-center my-4 text-primary-200">
                    <a href={link}>{title}</a>
                </h2>
                <div className="h-72 relative">
                    <a href={link} className="">
                        <Image
                            className="object-cover h-full w-full"
                            alt={alt}
                            src={src}
                            fill
                        />
                    </a>
                </div>
                <h3 className="text-2xl text-center text-primary-100">Description:</h3>
                <p className="text-center mx-auto mb-4">
                    {description}
                </p>
                <h3 className="text-2xl text-center text-primary-100">Technologies:</h3>
                <span className="text-center block">{tech}</span>
                <Link href={page} className="bg-primary-300 rounded-xl w-32 text-center px-2 py-4 mx-auto my-2 group-hover:bg-black/50">Learn More</Link>
            </div>
        </div>
    )
}