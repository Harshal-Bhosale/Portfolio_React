import React from 'react'

import W1 from '../assets/img/work1.jpg'
import W2 from '../assets/img/work2.jpg'
import W3 from '../assets/img/work3.jpg'
import W4 from '../assets/img/work4.jpg'
import W5 from '../assets/img/work5.jpg'


const data = [
    {
        project: 'Genius-Ai',
        category: 'web',
        img: W1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.',
        live:"https://genius-ai-rho.vercel.app/",
        github:"https://www.github.com/Harshal-Bhosale",
    },
    {
        project: 'Genius-server',
        category: 'server',
        img: W2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.',
        live:"",
        github:"https://www.github.com/Harshal-Bhosale",
    },
    {
        project: 'Covid Tracker',
        category: 'apps',
        img: W3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.',
        live:"",
        github:"https://www.github.com/Harshal-Bhosale",
    },
    {
        project: 'Medicio',
        category: 'web',
        img: W4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.',
        live:"",
        github:"https://www.github.com/Harshal-Bhosale",
    },
    {
        project: 'Azure',
        category: 'server',
        img: W5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.',
        live:"",
        github:"https://www.github.com/Harshal-Bhosale",
    },
]

const Portfolio = () => {
  return (
    <section className="work section" id="work">
    <span className="section_subtitle">My Portfolio</span>
    <h2 className="section_title">Recent Works</h2>

    <div className="work_filters">
        <span className="work_item active-work" data-filter='all'>All</span>
        <span className="work_item" data-filter='.web'>Web</span>
        <span className="work_item" data-filter='.server'>Server</span>
        <span className="work_item" data-filter='.apps'>Apps</span>
    </div>

    <div className="work_container container grid">
       {data.map(({project,category,img,live,github,description},index)=>{
        return(
            
        <div key={index} className={"work_card mix " +category}>
            <img src={img} alt="" className="work_image"/>
            <h2  className="work_title">{project}</h2>
            <p className="work_description"> {description}</p>
            <div className='work_links'> 
            <a href={live} target='blank' className="work_button" >
                Demo<i className="bx bx-right-arrow-alt work_icon"></i>
            </a>
            <a href={github} target='blank' className="work_git" >
                <i className='bx bxl-github'></i>
            </a>
            </div>
        </div>
        )
       })}
               
    </div>
</section>
  )
}

export default Portfolio