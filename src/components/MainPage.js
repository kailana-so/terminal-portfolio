import MainTerminal from './MainTerminal.js'
import './MainPage.css'
import SecondaryTerminals from './SecondaryTerminals.js'
import GitTerminal from './GitTerminal.js'
import { PageContext } from './PageContext.js'
import { useContext } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

export default function MainPage(){

    const { data, bio, lang } = useContext(PageContext)
    // console.log(bio)
    // console.log(bio[0].showWindow)
    console.log(lang)
    
    // const handleLangArray = () => {
    //     if (lang === undefined) {
    //         console.log('guard condition')
    //     } else {
    //         return lang.showWindow === true ? <SecondaryTerminals key={lang.id} id={lang.id} data={lang} visible={lang.showWindow}/> : null
    //     }
    // }

    return (
        <section className="main-page">


            {/* grab the user input form the main termianl component and create a new array? then map through that array */}
            <MainTerminal />

            <section className="terminals-section">
                <CSSTransitionGroup
                    transitionName="window-transition"
                    transitionEnterTimeout={900}
                    transitionLeaveTimeout={300}>
                        {data.map(terminalData => terminalData.showWindow === true ? <SecondaryTerminals key={terminalData.id} id={terminalData.id} data={terminalData} visible={terminalData.showWindow}/> : null)}

                        {bio[0].showWindow === true ? <SecondaryTerminals key={bio[0].id} id={bio[0].id} data={bio[0]} visible={bio[0].showWindow}/> : null}

                        {lang[0] === undefined 
                        ? null 
                        : lang[0].showWindow === true 
                        ? <GitTerminal key={lang[0].id} id={lang[0].id} data={lang[0]} visible={lang[0].showWindow}/> 
                        : null}
                        
                </CSSTransitionGroup>
            </section>
            
        </section>
    )
}