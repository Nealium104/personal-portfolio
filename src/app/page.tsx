import ChangingText from './ChangingText'
import Nav from './Nav'
import Footer from './Footer';

export default function Home() {
  const items = ['Web Developer', 'Photographer', 'Musician']
  return (
    <>
      <Nav />
      <main className="p-10">
        <h1 className="font-montserrat text-5xl sm:text-3xl md:text-4xl lg:text-5xl py-10 flex flex-wrap items-start">Neal Grindstaff | <ChangingText /></h1>
      </main>
      <Footer />
    </>
  )
}
