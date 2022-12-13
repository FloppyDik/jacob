import React from 'react'
import style from '../styles/Skills.module.scss'
import { useInView } from 'react-intersection-observer'

function Skills() {
    const [skillRef, skillInView, skillEntry] = useInView({
        triggerOnce: true,
        threshold: 0,
    })

  return (
    <div className={style.sectionInner}>
          <div className={style.sectionNav}>
            <h1>SKILLS</h1>
            <p>poggers</p>    
          </div>

          <div className={style.skills}>
            <div className={style.skill}>
                <div className={style.name}><h1>JavaScript</h1><h1>80%</h1></div>
                    <div ref={skillRef} className={skillInView ? style.jsSkillFull : style.jsSkillBar}>
                </div>
            </div>
            <hr/>
            <div className={style.skill}>
                <div className={style.name}><h1>Css</h1><h1>75%</h1></div>
                    <div ref={skillRef} className={skillInView ? style.cssSkillFull : style.cssSkillBar}>
                </div>
            </div>
            <hr/>
            <div className={style.skill}>
                <div className={style.name}><h1>React</h1><h1>80%</h1></div>
                    <div ref={skillRef} className={skillInView ? style.reactSkillFull : style.reactSkillBar}>
                </div>
            </div>
            <hr/>
            <div className={style.skill}>
                <div className={style.name}><h1>Node JS</h1><h1>55%</h1></div>
                    <div ref={skillRef} className={skillInView ? style.nodeSkillFull : style.nodeSkillBar}>
                </div>
            </div>
            <hr/>
            <div className={style.skill}>
                <div className={style.name}><h1>Firebase</h1><h1>75%</h1></div>
                    <div ref={skillRef} className={skillInView ? style.fbSkillFull : style.fbSkillBar}>
                </div>
            </div>
            <hr/>
          </div>

          <div className={style.hr}></div>
        </div>
  )
}

export default Skills