import { useState, createContext } from 'react'
import genus from '../images/genus.png'
import bank from '../images/bank.png'
import router from '../images/router.png'
import flowers from '../images/flowers.png'
import wellways from '../images/wellways.png'
import tictac from '../images/tictac.png'
import port from '../images/pic.jpg'
import fork from '../images/fork.png'
import alien from '../images/alien.png'
import axios from 'axios'
import { useEffect } from 'react'

export const PageContext = createContext()

export function PageProvider(props) {
    
    
    const extractData  = repository => [repository.name, repository.language, repository.html_url, repository.pushed_at]
    const username = 'kailana-so'
    
    useEffect(() => {
        axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(({ data }) => data)
        .then(repos => repos.map(repo => extractData(repo)).filter(repoData => repoData != null)) 
        .then(repositoryData => setLang([{ id: 0, img_url: fork, showWindow: false, description: repositoryData}]))
    },[])
    
    const [ data, setData ] = useState([
        {   
            id: 0,
            title: 'CSS ATM',
            description: 'A GA css challenge.',
            skills: ['Semantic HTML', 'CSS', 'JavaScript', 'GitHub'],
            img_url: bank,
            link: 'https://codepen.io/Kailana-so/full/GRrgKbx',
            showWindow: false
        },  
        {   
            id: 1,
            title: 'Tic Tac Toe',
            description: 'A GA coding challenge: Tic Tac Toe (reimagined as an 80s classic)',
            skills: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
            img_url: tictac,
            link: 'https://github.com/kailana-so/TicTacToe',
            showWindow: false
        },
        {   
            id: 2,
            title: 'Router',
            description: 'A GA navigation challenge: Find your train line.',
            skills: ['JavaScript', 'Semantic HTML', 'CSS', 'GitHub'],
            img_url: router,
            link: 'https://codepen.io/Kailana-so/pen/LYxwjzO',
            showWindow: false
        },
        {   
            id: 3,
            title: 'Back to school pixel art',
            description: 'A GA drawing challenge: Draw an alien',
            skills: ['JavaScript', 'Semantic HTML', 'CSS', 'GitHub'],
            img_url: alien,
            link: 'https://codepen.io/Kailana-so/full/GRrgKRN',
            showWindow: false
        },
        {   
            id: 4,
            title: 'Native plant db',
            description: 'A web app built with Ruby and Sinatra, designed to create sightings of native east coast plant varieties.',
            skills: ['Ruby', 'Sinatra', 'ERB', 'Cloudinary', 'BCrypt', 'Postgres', 'Semantic HTML', 'CSS', 'GitHub'],
            img_url: flowers,
            link: 'https://github.com/kailana-so/native-plants-app',
            showWindow: false
        },
        {   
            id: 5,
            title: 'Interactive Annual Report',
            description: `An interactive annual report, including scroll, statistic and page 
            animations, in collaboration with designers and internal stakeholders to showcase 
            Wellways' 2019-2020 financial year.`,
            skills: ['Figma', 'Semantic HTML', 'CSS', 'SVG', 'JavaScript', 'GitHub'],
            img_url: wellways,
            link: 'https://github.com/kailana-so/WW-AnnualReport2020',
            showWindow: false
        },
        {   
            id: 6,
            title: 'GenusGenius',
            description: 'GenusGenius is a web app design to assist with the identification of different plant species. This single-page app currently has three methods for exploring plants in your area: Image identification API; Intelligent searching via keyword extraction; and a Google map lookup with markers.',
            skills: ['React', 'JavaScript', 'Express', 'PlantID API', 'Google maps API', 'Material UI', 'Figma', 'Semantic HTML', 'CSS', 'Postgres', 'GitHub'],
            img_url: genus,
            link: 'https://github.com/kailana-so/Plant-Finder',
            showWindow: false
        },
    ])

    const [ bio, setBio ] = useState([
        {   
            id: 0,
            title: 'Kailana Sommer',
            description: `Hi again. I'm a junior full-stack developer inspired by intelligent, responsive and accessible design systems for everyone. With a history in video editing and digital strategy, I love telling visual stories and working together to translate complex ideas into code.`,
            skills: ['React', 'JavaScript', 'Express', 'Node.js', 'Ruby', 'Sinarta', 'Figma', 'Semantic HTML', 'CSS', 'Postgres', 'Cloudinary', 'GitHub', 'Adobe'],
            img_url: port,
            link: 'https://linkedin.com/in/kailana-so',
            showWindow: false
        }
    ])

    const [lang, setLang ] = useState([])

    const handleClose = (props) => {
        console.log(props.id)
        // console.log(data.id)

        setData(data.map(obj => {
            if(obj.id !== props.id) {
                // console.log(obj)
                return obj
            }
            return {...obj, showWindow: false}
        }))
        
        setBio(bio.map(obj => {
            return {...obj, showWindow: false}
        }))

        setLang(lang.map(obj => {
            return {...obj, showWindow: false}
        }))
    }

    const handleOpen = (props) => {
        if (props.includes('open about')) {
            console.log('yep! time to open about')
            setBio(bio.map(obj => {
                return {...obj, showWindow: true}
            }))
            // console.log(bio)

        }
        
        if (props.includes('open projects')) {
            console.log('yep! time to open projects')
            setData(data.map(obj => {
                return {...obj, showWindow: true}
            }))
            // console.log(data)

        }

    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const openGit = () => {
        console.log('desktop baby')

        if (lang !== 0) {
            console.log('open git window')
            setLang(lang.map(obj => {
                return {...obj, showWindow: true}
            }))
        } 
    }
    // console.log(lang)
    return (
        <PageContext.Provider value={ { data, bio, lang, handleClose, handleOpen, openInNewTab, openGit } }>
            { props.children }
        </PageContext.Provider>
    )
}
