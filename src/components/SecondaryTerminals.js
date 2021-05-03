import Typist from 'react-typist'
import './MainTerminal.css'
import Draggable from 'react-draggable'
 
export default function SecondaryTerminals(props) {

    console.log(props)
    const title = props.data[0].title
    const description = props.data[0].description
    const image = props.data[0].img_url
    console.log(image)

    return (
        <Draggable>
            <section className="secondary-terminals">
                <div className="terminal-window">
                    <div className="terminal-bar">
                        <div className="terminal-btn red"></div>
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
                        </Typist>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}