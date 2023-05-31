import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Nav () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <>
            <button onClick={toggleMobileMenu}><GiHamburgerMenu /></button>
            <nav className="flex justify-between">
                <span>Neal Grindstaff</span>
                <div>
                    <Link href='/web'>Web</Link>
                    <Link href='/photography'>Photography</Link>
                    <Link href='/music'>Music</Link>
                </div>
            </nav>
        </>
    )
}