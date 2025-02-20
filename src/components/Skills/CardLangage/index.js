/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathPhp from '../../Assets/php.webp'
import pathPy from '../../Assets/py.webp'
import pathTs from '../../Assets/ts.webp'
import "../Card/card.css"
import { motion } from 'framer-motion'

const CardLangage = ({title,image}) => {
    const contexte = "Programming langage are the core of tools for writing software.Each langage has its strength and ideal use case,wether for web development."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <motion.div className="flip-box" onClick={handleClick}
            initial = {{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6 } }}
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
                    <CardSkill bgColor="#21263d" borderColor="#4F5B93" color="#4F5B93" bgImage={pathPhp} percentage="70%" tech="PHP"/>
                    <CardSkill bgColor="transparent" borderColor="#FFFFFF" color="#FFFFFF" bgImage={pathPy} percentage="50%" tech="PYTHON"/>
                    <CardSkill bgColor="#232B33" borderColor="#3178C6" color="#3178C6" bgImage={pathTs} percentage="40%" tech="TypeScript"/>
                </div>
            </div>
        </motion.div>
    )
}
export default CardLangage