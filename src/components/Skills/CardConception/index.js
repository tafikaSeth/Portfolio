/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathPs from '../../Assets/ps.webp'
import pathFigma from '../../Assets/fig.webp'
import pathAi from '../../Assets/ail.webp'
import "../Card/card.css"
import { motion } from 'framer-motion'

const CardConception = ({title,image}) => {
    const contexte = "Design tools is increasingly valuable, these tools enhance the development process by enabling better design, improving user experience."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <motion.div className="flip-box" onClick={handleClick}
            initial = {{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.7, duration: 1 } }}
            viewport={{ once: false, amount: .5 }}
        >
            <div className={`flip-box-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className={front}>
                    <div className='flip-box-front-content'>
                        <img src={image} alt={title}/>
                        <h2>{title}</h2>
                        <p>{contexte}</p>
                    </div>
                </div>
                <div className="flip-box-back">
                    <CardSkill bgColor="transparent" borderColor="#31A8FF" color="#31A8FF" bgImage={pathPs} percentage="20%" tech="Photoshop"/>
                    <CardSkill bgColor="transparent" borderColor="#F24E1E" color="#F24E1E" bgImage={pathFigma} percentage="40%" tech="Figma"/>
                    <CardSkill bgColor="transparent" borderColor="#FF9A00" color="#FF9A00" bgImage={pathAi} percentage="40%" tech="Illustrator"/>
                </div>
            </div>
        </motion.div>
    )
}
export default CardConception