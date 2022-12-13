import React from 'react'
import style from '../styles/Projects.module.scss'

function Projects() {

    const projects = [
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'},
        {name: 'cum', link: '/', image: 'https://images.hdqwalls.com/wallpapers/windows10-5s.jpg'}
    ]
  return (
    <div className={style.sectionInner}>
        <div className={style.sectionNav}>
            <h1>PROJECTS</h1>
            <p>poggers</p>    
        </div>
        <div className={style.projects}>
            {projects.map((item, i) => {

                return (
                    <div key={i} className={style.item} style={{backgroundImage: `url(${item.image})`}}>
                        hewwo
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects