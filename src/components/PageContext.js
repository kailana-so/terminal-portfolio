import { useState, createContext } from 'react'
import logo from '../images/logo-simp.png'

export const PageContext = createContext()

export function PageProvider(props) {

    const [ data, setData ] = useState([
        {   
            id: 0,
            title: 'GenusGenius',
            description: 'GenusGenius is a web app design to assist with the identification of different plant species',
            img_url: logo
        }
    ])

    const handleInput = (e, value) => {
        e.preventDefault()
        // setInput({content: e.target.value})
        console.log(value)
        
    }

    return (
        <PageContext.Provider value={ { data: data, handleInput: handleInput } }>
            { props.children }
        </PageContext.Provider>
    )
}
