import Image from "next/image";

interface ProjectProps {
    src: string;
    alt: string;
    link: string;
    title: string;
    description: string;
}

export default function Project({src, alt, link, title, description}: ProjectProps) {
    return (
        <div className="flex flex-col items-center justify-center transition duration-150 ease-in-out hover:scale-110">
            <div className="rounded-xl w-full h-[600px] m-4 bg-bg-200 p-4">
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
                <p className="text-center mx-auto my-4">
                    {description}
                </p>
            </div>
        </div>
    )
}