import MainTerminal from './MainTerminal.js'
import './MainPage.css'
import SecondaryTerminals from './SecondaryTerminals.js'
import { PageContext } from './PageContext.js'
import { useContext } from 'react'

export default function MainPage(){

    const { data } = useContext(PageContext)
    // console.log(data)

    return (
        <section className="main-page">


            {/* grab the user input form the main termianl component and create a new array? then map through that array */}
            <MainTerminal />

            <section className="terminals-section">

                {data.map(terminalData => terminalData.showWindow === true ? <SecondaryTerminals key={terminalData.id} id={terminalData.id} data={terminalData} visible={terminalData.showWindow}/> : null)}

            </section>
            
        </section>
    )
}