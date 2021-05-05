import MainTerminal from './MainTerminal.js'
import './MainPage.css'
import SecondaryTerminals from './SecondaryTerminals.js'
import GitTerminal from './GitTerminal.js'
import { PageContext } from './PageContext.js'
import { useContext } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Footer from './Footer.js'

export default function MainPage(){

    const { data, bio, lang } = useContext(PageContext)

    const gitWindow = lang.length > 0 ? lang[0] : []

    return (
        <section className="main-page">
            <MainTerminal />

            <section className="terminals-section">
                <CSSTransitionGroup
                    transitionName="window-transition"
                    transitionEnterTimeout={900}
                    transitionLeaveTimeout={300}>
                        {data.map(terminalData => terminalData.showWindow === true 
                            ? <SecondaryTerminals key={terminalData.id} id={terminalData.id} data={terminalData} visible={terminalData.showWindow}/> 
                            : null)}

                        {bio[0].showWindow === true 
                            ? <SecondaryTerminals key={bio[0].id} id={bio[0].id} data={bio[0]} visible={bio[0].showWindow}/> 
                            : null
                            }
                </CSSTransitionGroup>
                <CSSTransitionGroup
                    transitionName="window-transition"
                    transitionEnterTimeout={900}
                    transitionLeaveTimeout={300}>
                            {gitWindow.showWindow === true 
                                ? <GitTerminal key={gitWindow.id} id={gitWindow.id} data={gitWindow} visible={gitWindow.showWindow}/> 
                                : null} 
                </CSSTransitionGroup>
            </section>
            <Footer />
        </section>
    )
}