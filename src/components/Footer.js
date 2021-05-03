import './Footer.css'
import giticon from '../images/GitHub-Mark-120px-plus.png'
import codepenicon from '../images/codepen.png'
import linkedinicon from '../images/LI-In-Bug.png'

export default function Footer() {

    return (
        <footer>
            <a href="https://github.com/kailana-so">
                <img className="work-icons" src={giticon} alt="github icon"/>
            </a>

            <a href="https://github.com/kailana-so">
                <img className="work-icons" src={codepenicon} alt="github icon"/>
            </a>
            
            <a href="https://github.com/kailana-so">
                <img className="work-icons" src={linkedinicon} alt="github icon"/>
            </a>
        </footer>
    )
}