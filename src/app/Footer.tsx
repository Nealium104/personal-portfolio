import {IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link'

export default function Footer () {
    return (
        <footer className="border-t-2">
            <span className='block text-center'>©2023 Neal Grindstaff</span>
            <div className="flex flex-col items-center justify-between">
                <div>
                    <div className="flex text-sm text-text-200 m-4">
                        <Link className='mx-4 light:text-black hover:text-primary-100' href="/web">Web</Link>
                        <Link className='mx-4 hover:text-primary-100' href="/photography">Photography</Link>
                        <Link className='mx-4 hover:text-primary-100' href="/music">Music</Link>
                        <Link className='mx-4 hover:text-primary-100' href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="m-4 text-xl flex">
                    <a href="" className="mx-4 hover:text-primary-100"><IoLogoFacebook/></a>
                    <a href="" className="mx-4 hover:text-primary-100"><IoLogoTwitter/></a>
                    <a href="" className="mx-4 hover:text-primary-100"><IoLogoInstagram/></a>
                    <a href="" className="mx-4 hover:text-primary-100"><IoLogoGithub/></a>
                </div>
            </div>
        </footer>
    )
}