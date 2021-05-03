import Typist from 'react-typist'
import moment from 'moment'
import './MainTerminal.css'
import Draggable from 'react-draggable'
import { useContext, useState } from 'react'
import { PageContext } from './PageContext'
 
export default function MainTerminal() {

    const currentDate = new Date() 

    const [ value, setValue ] = useState([])
    console.log(value)
    

    const handleInput = e => {
        e.preventDefault()
        let userInput =  e.target.value.toLowerCase()
        setValue(value => [...value, userInput])  
    }
    
    const menu = (
        <section>
            <p className="terminal-path">~/menu</p>
            <Typist> 
                <Typist.Delay ms={500} />
                <p>
                    &#62; Type 'open about' to read my bio  
                </p>
                <p>
                    &#62; Type 'open projects' to see some projects
                </p>
                <p>
                    &#62; Type 'open lang' to see my languages on github
                </p>
            </Typist>
        </section>
    )
    
    return (
        <Draggable>
            <section className="main-terminal">
                <div className="terminal-window">
                    <div className="terminal-bar">
                        <div className="terminal-btn red"></div>
                        <div className="terminal-btn yellow"></div>
                        <div className="terminal-btn green"></div>
                    </div>
                    <section className="terminal-text">
                        <p className="terminal-path">{moment(currentDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

                        <section className="container">
                            <Typist>
                                <p> Hi there.</p>
                                <Typist.Delay ms={900} />
                                    <p> I'm Kailana.</p>
                                    <Typist.Delay ms={900} />
                                    <p> Before we move on, let's get some things straight.</p>
                                    <Typist.Delay ms={900} />
                                    <p> This is a website. <Typist.Backspace count={12} delay={200} /> my website.</p>
                                    <Typist.Delay ms={900} />
                                    <p> You are the user.</p>
                                    <p> For commands type 'HELP' </p> 
                            </Typist>

                            {value.includes('help') ? menu : ''}

                            <form>
                                <b className="user"> &#62; &#62; </b> 
                                <input autofocus="" className="user-input" type="text" onChange={handleInput} cols="35" rows="5" placeholder="..." /> 
                            </form>
                        </section>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}