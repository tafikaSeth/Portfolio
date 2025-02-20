/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill/index'
import pathHtml from '../../Assets/html.webp'
import pathCss from '../../Assets/css.webp'
import pathJs from '../../Assets/js.webp'
import "./card.css"
import { motion} from 'framer-motion'

const Card = ({title,image}) => {
    const contexte = "Web technology encompasses the various tools and techniques used to communicate and interact over the internet."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <motion.div className="flip-box" onClick={handleClick}
            initial = {{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }}
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
                    <CardSkill bgColor="#551d0e" borderColor="#E34F26" color="#E34F26" bgImage={pathHtml} percentage="80%" tech="HTML"/>
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage={pathCss} percentage="70%" tech="CSS"/>
                    <CardSkill bgColor="#363109" borderColor="#F7DF1E" color="#F7DF1E" bgImage={pathJs} percentage="70%" tech="JavaScript"/>
                </div>
            </div>
        </motion.div>
    )
}
export default Card