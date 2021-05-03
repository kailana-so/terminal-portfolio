import Typist from 'react-typist'
import './MainTerminal.css'
import Draggable from 'react-draggable'
import { useContext } from 'react'
import { PageContext } from './PageContext'
 
export default function SecondaryTerminals(props) {

    console.log(props)
    const title = props.data.title
    const description = props.data.description
    const image = props.data.img_url
    const link = props.data.link

    const { handleClose } = useContext(PageContext)


    return (
        <Draggable>
            <section className="secondary-terminals">
                <div className="terminal-window">
                    <div className="terminal-bar">
                        <div className="terminal-btn red" onClick={() => handleClose(props)}></div>
                        <div className="terminal-btn yellow"></div>
                        <div className="terminal-btn green"></div>
                    </div>
                    <section className="terminal-text">
                        <img src={image} alt={title}/>
                        <Typist>
                            <h1> 
                                {title}
                            </h1>
                            <Typist.Delay ms={900} />
                            <div className="container">
                                {description}
                            </div>
                            <p>
                                <a href={link}> <b className="blue">view online</b> </a>
                            </p>
                        </Typist>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}