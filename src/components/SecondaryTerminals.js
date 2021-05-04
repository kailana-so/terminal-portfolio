import './MainTerminal.css'
import Draggable from 'react-draggable'
import { useContext } from 'react'
import { PageContext } from './PageContext'
 
export default function SecondaryTerminals(props) {

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
                    <p className="terminal-path">~/documents/{title}</p>
                        <img src={image} alt={title}/>
                            <h1> 
                                {title}
                            </h1>
                            <div className="container">
                                {description}
                            </div>
                            <p>
                                <a href={link}> <b className="blue">view online</b> </a>
                            </p>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}