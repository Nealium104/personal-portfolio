import ChangingText from './ChangingText'
import Nav from './Nav'
import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const items = ['Web Developer', 'Photographer', 'Musician']
  return (
    <>
      <Nav />
      <main className="p-10 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center">
          <Image
          className="rounded-full shadow-xl"
          src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687395670/Portfolio/IMG_0307_rflqfz.jpg"
          alt="Neal with Seattle in the background"
          height={600}
          width={600} />
          <div className='text-5xl my-8'>
            <h1 className="">
              <ChangingText />
            </h1>
          </div>
        </div>
        <p className="text-center font-montserrat text-3xl my-8 px-4">I&apos;m a software enginneer, photographer, and musician based in Lexington, KY.</p>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between mx-10 h-full">
            <h2 className="text-5xl mt-8 mb-4 dark:text-primary-100">Web Developer</h2>
            <p> I craft digital experiences that merge design and functionality. I&apos;m passionate about creating responsive, user-friendly websites that are not only visually appealing but also deliver on performance. Through every line of code, I aim to connect with users, providing solutions that resonate on a global scale. For me, web development isn&apos;t just a job—it&apos;s an opportunity to innovate, inspire, and redefine online interaction.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/web/">Learn More</Link>
          </div>
          <div className="flex flex-col justify-between mx-10 h-full">
            <h2 className="text-5xl mt-8 mb-4 dark:text-primary-100">Photographer</h2>
            <p>Through my lens, I capture life&apos;s fleeting, extraordinary moments. Each shutter click narrates a unique story, reflecting my perception and passion for detail. For me, photography is not merely a hobby—it&apos;s a deeply fulfilling channel for sharing my vision, underlining beauty in the everyday, and fostering profound appreciation for the often overlooked nuances of life.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/photography">Learn More</Link>
          </div>
          <div className="flex flex-col justify-between mx-10 h-full">
            <h2 className="text-5xl mt-8 mb-4 dark:text-primary-100">Musician</h2>
            <p>With music as my language, I skillfully traverse various genres as a trained trumpeter. My degrees and baroque certification testify to my dedication and expertise. From classical pieces to lively jazz, my performances resonate, embodying my passion and technical prowess. To me, music is more than an art—it&apos;s my way of connecting, communicating, and sharing my unique perspective.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/music">Learn More</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
