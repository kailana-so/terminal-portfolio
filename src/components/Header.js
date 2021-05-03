import logo from '../images/logo-simp.png'
import './Header.css'
// import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'



export default function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <header className="header">
                <img src={logo} alt="Logo"/>
                {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
        </header>
    )
}