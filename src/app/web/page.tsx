import Nav from "../Nav";
import Footer from "../Footer";
import Image from "next/image";

export default function MyComponent() {
    return (
        <main className="overflow-x-hidden">
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl">Hi there! 👋</h1>
                <span className="text-xl">We&apos;re still under  construction at the moment. 👷‍♂️</span> 
                <span className="text-xl">Feel free to reach out and discuss this site or anything else at any of the social media links below!</span>   
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl my-4">Projects:</h2>
                <div className="border-primary-200 border-2 rounded-xl w-1/3 my-4 bg-primary-300">
                    <h2 className="text-5xl text-center my-4">
                        <a href="https://collinstrumpet.com">Collins Trumpet</a>
                    </h2>
                    <Image
                    className="mx-auto"
                    alt="Screenshot of Robbie&apos;s site"
                    src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457354/Portfolio/Screenshot_2023-06-22_140801_ryrk6k.png"
                    height={600}
                    width={600}
                    />
                    <p className="w-1/2 text-center mx-auto my-4">This was my first freelance client project. Robert Collins is a well sought after trumpet player from North Carolina who reached out
                        to me to make his website. Since he&apos;s gotten it, he&apos;s earned playing opportunities around the country and experienced a surge in
                        students in his studio. The website uses HTML, CSS, JavaScript, React, Next.js, and uses both external APIs for email service, and browser APIs for much of the functionality.
                    </p>
                </div>
                <div className="border-primary-200 border-2 rounded-xl w-1/3 my-4 bg-primary-300">
                    <h2 className="text-5xl text-center my-4">
                        <a href="https://gig-econ.vercel.app/">Gig-Econ</a>
                    </h2>
                    <Image
                    className="mx-auto"
                    alt="Screenshot of the gig-econ site"
                    src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457421/Portfolio/Screenshot_2023-06-22_140959_e51xf2.png"
                    height={400}
                    width={400}
                    />               
                    <p className="w-1/2 text-center mx-auto my-4">Gig-Econ has been a pet project to help me in my efforts as an often gigging musician, photographer, and waiter. Very often, you need to count large sums of cash quickly.
                        I found it easier to just count the number of bills and calculate them by hand. However, this often lead to me forgetting my totals and it was often just a hassle
                        to do by hand. So I made gig-econ to act as a quick calculator, and then added functionality to record my transactions and date them. This project uses HTML, CSS, JavaScript, Next.js,
                        a NoSQL database (MonogDB), and uses APIs for Authentication. It also uses a UI library, DaisyUI, though a rework is currently in progress. The application is also a PWA app, installable
                        on both Android and Apple devices through most browsers.
                    </p>
                </div>
                <div className="border-primary-200 border-2 rounded-xl w-1/3 my-4 bg-primary-300">
                    <h2 className="text-5xl text-center my-4">
                        <a href="https://www.skun.ch/">Skunch</a>
                    </h2>
                    <Image
                    className="mx-auto"
                    alt="Screenshot of the skunch site"
                    src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457527/Portfolio/Screenshot_2023-06-22_141147_jf5h17.png"
                    height={400}
                    width={400}
                    />   
                    <p className="w-1/2 text-center mx-auto my-4">Skunch is a rock band based here in Lexington, Kentucky. I was invited by the current lead engineer to add onto the team. The project is still in progress, but I&apos;ve been able to add value
                        to the project as a photographer and created the current homepage for the project. The client is very ambitious and very good at marketing. Our push goal is to add a sidescrolling game that&apos;s currently in development and a blog.
                        We&apos;re currently investigating CMS options for the client to add blogposts through a friendly UI. The project features HTML, CSS, JavaScript, Next.js, and Tailwind. 
                    </p>
                </div>
                <div className="border-primary-200 border-2 rounded-xl w-1/3 my-4 bg-primary-300">
                    <h2 className="text-5xl text-center my-4">
                        <a href="https://www.kashmere.vercel.app/">Kashmere</a>
                    </h2>
                    <Image
                    className="mx-auto"
                    alt="Screenshot of the kashmere site"
                    src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687457635/Portfolio/Screenshot_2023-06-22_141330_hgha1i.png"
                    height={400}
                    width={400}
                    />   
                    <p className="w-1/2 text-center mx-auto my-4">Kashmere is a local 80&apos;s cover band which I play trumpet in. Currently, the producer has me on staff as trumpet player, photographer, and web developer! This is a work in progress EPK 
                        for the band that uses TypeScript, HTML, Next.js, and tailwind.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}