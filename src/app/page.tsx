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
      <main className="p-10">
        <div className='flex items-center justify-center'>
          <Image
          className="rounded-full shadow-xl"
          src="/images/Seattle.jpg"
          alt="Neal with Seattle in the background"
          height={400}
          width={400} />
          <h1 className="font-montserrat bg-primary-300 text-5xl mx-6 px-3 shadow-xl rounded-full sm:text-3xl md:text-4xl lg:text-5xl py-10 flex flex-wrap items-start">Neal Grindstaff | <ChangingText /></h1>
        </div>
        <p className='text-justify-center font-montserrat text-5xl my-8 px-4'>Hi, I'm Neal. I'm based in Lexington, KY. I'm a software enginneer, photographer, and musician.</p>
        <section className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col justify-between mx-10 h-full'>
            <h2 className='text-5xl mt-8 mb-4 dark:text-primary-100'>Web Development</h2>
            <p> I craft digital experiences that merge design and functionality. I'm passionate about creating responsive, user-friendly websites that are not only visually appealing but also deliver on performance. Through every line of code, I aim to connect with users, providing solutions that resonate on a global scale. For me, web development isn't just a job—it's an opportunity to innovate, inspire, and redefine online interaction.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/web/">Learn More</Link>
          </div>
          <div className='flex flex-col justify-between mx-10 h-full'>
            <h2 className='text-5xl mt-8 mb-4 dark:text-primary-100'>Photography</h2>
            <p>Through my lens, I capture life's fleeting, extraordinary moments. Each shutter click narrates a unique story, reflecting my perception and passion for detail. For me, photography is not merely a hobby—it's a deeply fulfilling channel for sharing my vision, underlining beauty in the everyday, and fostering profound appreciation for the often overlooked nuances of life.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/photography">Learn More</Link>
          </div>
          <div className='flex flex-col justify-between mx-10 h-full'>
            <h2 className='text-5xl mt-8 mb-4 dark:text-primary-100'>Music</h2>
            <p>With music as my language, I skillfully traverse various genres as a trained trumpeter. My degrees and baroque certification testify to my dedication and expertise. From classical pieces to lively jazz, my performances resonate, embodying my passion and technical prowess. To me, music is more than an art—it's my way of connecting, communicating, and sharing my unique perspective.</p>
            <Link className="my-4 text-center bg-primary-300 w-fit p-4 rounded-2xl self-center" href="/music">Learn More</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
