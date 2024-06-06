import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill/index'
import "./card.css"

const Card = ({title,image}) => {
    const contexte = "Web technology encompasses the various tools and techniques used to communicate and interact over the internet."
    const[isFlipped, setIsFlipped] = useState(false)
    const[front, setFront] = useState('flip-box-front')

    const handleClick = () =>{
        setIsFlipped(!isFlipped)
    }
    return(
        <div className="flip-box" onClick={handleClick}>
            <div className={`flip-box-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className={front}>
                    <div className='flip-box-front-content'>
                        <img src={image} alt={title}/>
                        <h4>{title}</h4>
                        <p>{contexte}</p>
                    </div>
                </div>
                <div className="flip-box-back">
                    <CardSkill bgColor="#551d0e" borderColor="#E34F26" color="#E34F26" bgImage="/assets/html.png" percentage="80%" tech="HTML"/>
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage="/assets/css.png" percentage="70%" tech="CSS"/>
                    <CardSkill bgColor="#363109" borderColor="#F7DF1E" color="#F7DF1E" bgImage="/assets/js.png" percentage="70%" tech="JavaScript"/>
                </div>
            </div>
        </div>
    )
}
export default Card