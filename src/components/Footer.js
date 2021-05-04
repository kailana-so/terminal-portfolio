import './Footer.css'
import giticon from '../images/GitHub-Mark-120px-plus.png'
import codepenicon from '../images/codepen.png'
import linkedinicon from '../images/LI-In-Bug.png'
import { PageContext } from './PageContext.js'
import { useContext } from 'react'

export default function Footer() {

    const { openInNewTab } = useContext(PageContext)

    return (
        <footer>
            <div className="footer-dock">

                <img className="work-icons" src={giticon} alt="github icon" onClick={() => openInNewTab('https://github.com/kailana-so')} />

                <img className="work-icons" src={codepenicon} alt="github icon" onClick={() => openInNewTab('https://codepen.io/Kailana-so')}/>
                
                <img className="work-icons" src={linkedinicon} alt="github icon" onClick={() => openInNewTab('https://www.linkedin.com/in/kailana-so/')}/>

            </div>
        </footer>
    )
}