import './MainTerminal.css'
import './GitTerminal.css'
import Draggable from 'react-draggable'
import { useContext } from 'react'
import { PageContext } from './PageContext'
import moment from 'moment'

 
export default function GitTerminal(props) {
    console.log(props)

    const title = props.data.title
    const description = props.data.description // name, language, link
    const fork = props.data.img_url
    console.log(props.data.img_url)


    const { handleClose, openInNewTab} = useContext(PageContext)

    return (
        <Draggable>
            <section className="git-terminal">
                <div className="git-window">
                    <div className="git-bar">
                        <div className="git-btn red" onClick={() => handleClose(props)}></div>
                        <div className="git-btn yellow"></div>
                        <div className="git-btn green"></div>
                    </div>
                    <div className="git-head">
                        <p> 
                            Current Repository <br/>

                            <b> Desktop </b>
                        </p>
                    </div>
                    <div className="git-tab-bg">
                        <div className="git-tab">
                            <p> History </p>
                        </div>
                    </div>
                    <section className="git-text">
                        <div className="git-container">
                            {description.map(item => {
                                    if (item[1] === null) {
                                        return null
                                    } else {
                                        return (
                                            <div className="git-entries" onClick={() => openInNewTab(item[2])}>
                                                <img src={fork} alt={item[0]}></img>
                                                <b>
                                                    {item[0]}:
                                                </b> 
                                                    &#160;{item[1]} 
                                                    &#160;
                                                    {moment(item[3]).format("dd, MM Do YYYY, h:mm:ss a")} 
                                            </div>
                                        )
                                    }
                                }
                            )}
                        </div>
                    </section>
                </div>
            </section>
        </Draggable>
    )

}