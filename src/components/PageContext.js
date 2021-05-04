import { useState, createContext } from 'react'
import genus from '../images/genus.png'
import bank from '../images/bank.png'
import router from '../images/router.png'
import flowers from '../images/flowers.png'
import wellways from '../images/wellways.png'
import tictac from '../images/tictac.png'

export const PageContext = createContext()

export function PageProvider(props) {

    const [ data, setData ] = useState([
                        {   
                            id: 0,
                            title: 'CSS ATM',
                            description: 'A GA css challenge',
                            img_url: bank,
                            link: 'https://codepen.io/Kailana-so/pen/GRrgKbx',
                            showWindow: false
                        },  
                        {   
                            id: 1,
                            title: 'Router',
                            description: 'A GA navigation challenge: Find your train line',
                            img_url: router,
                            link: 'https://codepen.io/Kailana-so/pen/LYxwjzO',
                            showWindow: false
                        },
                        {   
                            id: 2,
                            title: 'Tic Tac Toe',
                            description: 'A GA challenge: Tic Tac Toe (reimagined as an 80s classic',
                            img_url: tictac,
                            link: 'https://github.com/kailana-so/TicTacToe',
                            showWindow: false
                        },
                        {   
                            id: 3,
                            title: 'Native plant db',
                            description: 'A ruby web app to submit sighting of native east coast plants',
                            img_url: flowers,
                            link: 'https://github.com/kailana-so/native-plants-app',
                            showWindow: false
                        },
                        {   
                            id: 4,
                            title: 'Interactive Annual Report',
                            description: 'Interactive Annual Report for Wellways 2020',
                            img_url: wellways,
                            link: 'https://github.com/kailana-so/WW-AnnualReport2020',
                            showWindow: false
                        },
                        {   
                            id: 5,
                            title: 'GenusGenius',
                            description: 'GenusGenius is a web app design to assist with the identification of different plant species. This single-page app currently has three methods for exploring plants in your area: Image identification API;Intelligent searching via keyword extraction; and a Google map lookup with markers',
                            img_url: genus,
                            link: 'https://github.com/kailana-so/Plant-Finder',
                            showWindow: false
                        },
                    ])


    const handleClose = (props) => {
        // console.log(props.id)
        // console.log(data.id)

        setData(data.map(obj => {
            if(obj.id !== props.id) {
                // console.log(obj)
                return obj
            }
            return {...obj, showWindow: false}
        }))

        // update view state to not visible
        // does this need to be part of teh state? or state it always be 'true' and then maniplutate wiht css and a function locally?
    }

    const handleOpen = (props) => {
        console.log(props)

        if (props === 'open projects') {
            console.log('yep! time to open shit')
            setData(data.map(obj => {
                return {...obj, showWindow: true}
            }))
            console.log(data)
        }
    }

    return (
        <PageContext.Provider value={ { data, handleClose, handleOpen } }>
            { props.children }
        </PageContext.Provider>
    )
}
