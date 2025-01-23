/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathMysql from '../../Assets/mysql.png'
import pathPosteGre from '../../Assets/postgresqsl.png'
import "../Card/card.css"
import { motion } from 'framer-motion'

const CardDb = ({title,image}) => {
    const contexte = "Databases are systems for storing, retrieving, and managing data. They are crucial for handling the data-driven needs of applications."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <motion.div className="flip-box" onClick={handleClick}
            initial = {{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } }}
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
                    <CardSkill bgColor="#551d0e" borderColor="#E34F26" color="#E34F26" bgImage={pathMysql} percentage="80%" tech="MySQL"/>
                    <CardSkill bgColor="#192a52" borderColor="#336791" color="#336791" bgImage={pathPosteGre} percentage="30%" tech="PostegreSQL"/>
                </div>
            </div>
        </motion.div>
    )
}
export default CardDb