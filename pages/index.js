import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import style from '../styles/Home.module.scss'

import Typical from 'react-typical'
import { useInView } from 'react-intersection-observer'
import * as icons from 'react-icons/fa'

import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  const [typing, setTyping] = useState(<Typical className={style.typing} steps={['React', 1500, 'Sass', 1500, 'NodeJS', 1500, 'TypeScript', 1500, 'Your Mom', 1500, 'Redux', 1500, 'HTML', 1500, 'NextJS', 1500, 'CSS', 1500, 'SVG', 1500]} loop={Infinity}/>)
  const [domLoaded, setDomLoaded] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [skillRef, skillInView, skillEntry] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  const [ref, inView, entry] = useInView({
    threshold: 1,
  })

  const [ref2, inView2, entry2] = useInView({
    threshold: 1,
  })
  
  const [ref3, inView3, entry3] = useInView({
    threshold: 1,
  })

  const [ref4, inView4, entry4] = useInView({
    threshold: 1,
  })
  
  const homeRef = useRef(null)
  const homeScroll = () => homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const skillsRef = useRef(null)
  const skillsScroll = () => skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) 

  const projectsRef = useRef(null)
  const projectsScroll = () => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const contactRef = useRef(null)
  const contactScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className={style.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={nav ? style.navMobile : style.nav}>
          
          <div className={style.logo}>
            <img src="vercel.svg" alt="img" />
            <h1>Jacob</h1>
          </div>

          <div className={style.pages}>
            <h3 onClick={homeScroll} className={inView ? style.pageActive : style.page}>about</h3>
            <h3 onClick={skillsScroll} className={inView2 ? style.pageActive : style.page}>skills</h3>
            <h3 onClick={projectsScroll} className={inView3 ? style.pageActive : style.page}>projects</h3>
            <h3 onClick={contactScroll} className={inView4 ? style.pageActive : style.page}>contact me</h3>
          </div>

          <div className={style.links}>
            <a href=""><icons.FaGithubSquare/></a>
            <a href=""><icons.FaLinkedin/></a>
            <a href=""><icons.FaTelegram/></a>
          </div>
      </nav>

      <div className={style.navToggler} onClick={() => setNav(!nav)}>
        {nav ? <icons.FaTimes/> : <icons.FaBars/>}
      </div>

      <div ref={homeRef} className={style.section} style={{padding: '0 2em 0 2em'}}>
        <div className={style.sectionInner} ref={ref}>
          <div>
            <h1 className={style.greeting}>Hello<span>,</span> I am a <span>web developer</span> and welcome to my <span>portfolio</span>.</h1>
            
            <div>
              <p>I am a <span>19</span> year <span>Technical University</span> student with <span>two year experience</span> in web dev.</p>
              <p className={style.typingP}>I know stuff like: &nbsp; {domLoaded && typing}</p>
            </div>
          </div>

          <div className={style.hr}></div>
        </div>
      </div>

      <div ref={skillsRef} className={style.section}>
        <div ref={ref2}></div>
        <Skills/>
      </div>

      <div ref={projectsRef} className={style.section}>
        <div ref={ref3}></div>
        <Projects/>
      </div>

      <div ref={contactRef} className={style.section}>
        <div ref={ref4}></div>
        <Contact/>
      </div>

    </div>
  )
}