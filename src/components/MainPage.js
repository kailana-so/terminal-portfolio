import MainTerminal from './MainTerminal.js'
import './MainPage.css'
import SecondaryTerminals from './SecondaryTerminals.js'
import { PageContext } from './PageContext.js'
import { useContext } from 'react'

export default function MainPage(){

    const { data } = useContext(PageContext)
    console.log(data)

    return (
        <section className="main-page">


            {/* grab the user input form the main termianl component and create a new array? then map through that array */}
            <MainTerminal />

            {/* {data.map(object => console.log(object))} */}
            {data.map(object => <SecondaryTerminals key={data.id} data={data}/>)}
            
        </section>
    )
}