import Typist from 'react-typist'
import moment from 'moment'
import './MainTerminal.css'
import { useContext, useState } from 'react'
import { PageContext } from './PageContext'
 
export default function MainTerminal() {

    const currentDate = new Date() 

    const { handleOpen } = useContext(PageContext)
    // console.log(handleOpen)

    const [ value, setValue ] = useState([])
    // console.log(value)
    

    const handleInput = (e) => {
        e.preventDefault()
        const userInput =  e.target.value.toLowerCase()

        if(userInput === 'open about') {
            console.log('about')
        } 
        if(userInput === 'open lang') {
            console.log('lang')
        } 
        setValue(value => [...value, userInput])  
        handleOpen(userInput)
    }
    
    // const helpMenu = (
    //     <section>
    //         <p className="terminal-path">~/menu</p>
    //         <Typist> 
    //             <Typist.Delay ms={500} />
    //             <p>
    //                 <b>&#62; 'open about'</b> to read my bio  
    //             </p>
    //             <p>
    //                 <b>&#62; 'open projects'</b> to see some projects
    //             </p>
    //             <p>
    //                 <b>&#62;</b> click the folder to see github languages
    //             </p>
    //             <p>
    //                 <b>&#62;</b> drag to move // red button to close
    //             </p>
    //         </Typist>
    //     </section>
    // )
    
    return (
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
                                <p><b>&#62;</b> Hi there.</p>
                                <Typist.Delay ms={900} />
                                    <p><b>&#62;</b> I'm Kailana.</p>
                                    <Typist.Delay ms={900} />
                                    <p><b>&#62;</b> This is a website. <Typist.Backspace count={12} delay={200} /> my website.</p>
                                    <Typist.Delay ms={900} />
                                    <p><b>&#62;</b> Open some files.</p> 
                            </Typist>

                            {/* {value.includes('help') ? helpMenu : ''} */}

                            <form>
                                <b className="user"> &#62; &#62; </b> 
                                <input autoFocus="" className="user-input" type="text" onChange={handleInput} cols="45" rows="10" placeholder="..........." /> 
                            </form>
                        </section>
                    </section>
                </div>
            </section>
    )

}