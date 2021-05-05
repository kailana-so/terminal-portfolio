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
    const platform = link.split('/')
    // console.log(platform[2])

    const { handleClose } = useContext(PageContext)

    const { openInNewTab } = useContext(PageContext)

    return (
        <Draggable>
            <section className="secondary-terminals">
                <div className="terminal-window">
                    <div className="terminal-bar">
                        <div className="terminal-btn red" onClick={() => handleClose(props)} onMouseDown={(e) => {e.stopPropagation()}}></div>
                        <div className="terminal-btn yellow"></div>
                        <div className="terminal-btn green"></div>
                    </div>
                    
                    <section className="terminal-text">
                    <p className="terminal-path">~/docs/{title.split(' ').join('-')}</p>
                        <img src={image} alt={title}/>
                            <h1> 
                                {title}
                            </h1>
                            <div className="container">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <p onClick={() => openInNewTab(link)}>
                                <b><u> 
                                    {platform[2]} 
                                </u></b>
                            </p>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}