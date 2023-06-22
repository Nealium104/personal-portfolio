import Nav from "../Nav";
import Footer from "../Footer";

export default function Music() {
    return (
        <main>
            <Nav />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl">Hi there! 👋</h1>
                <span className="text-xl">We&apos;re still under  construction at the moment. 👷‍♂️</span> 
                <span className="text-xl">Feel free to reach out and discuss this site or anything else at any of the social media links below!</span>   
            </div>
            <Footer />
        </main>
    )
}