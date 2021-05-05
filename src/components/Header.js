import logo from '../images/logo-simp.png'
import './Header.css'
// import { Squash as Hamburger } from 'hamburger-react'



export default function Header() {
    return (
        <header className="header">
                <img src={logo} alt="Logo"/>
        </header>
    )
}