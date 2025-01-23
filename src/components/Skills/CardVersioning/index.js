/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathGit from '../../Assets/github.png'
import pathGitLab from '../../Assets/gitlab.png'
import "../Card/card.css"
import {motion} from 'framer-motion'

const CardVersioning = ({title,image}) => {
    const contexte = "Version control systems help manage changes to source code over time. They are essential to work on the same project simultaneously without conflicts."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <motion.div className="flip-box" onClick={handleClick}
            initial = {{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.9 } }}
            viewport={{ once: false, amount: .5 }}
        >
            <div className={`flip-box-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className={front}>
                    <div className='flip-box-front-content'>
                        <img src={image} alt={title}/>
                        <h4>{title}</h4>
                        <p>{contexte}</p>
                    </div>
                </div>
                <div className="flip-box-back">
                    <CardSkill bgColor="transparent" borderColor="#E34F26" color="#E34F26" bgImage={pathGit} percentage="60%" tech="Github"/>
                    <CardSkill bgColor="transparent" borderColor="#2965F1" color="#2965F1" bgImage={pathGitLab} percentage="30%" tech="GitLab"/>
                </div>
            </div>
        </motion.div>
    )
}
export default CardVersioning