import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import "../Card/card.css"

const CardVersioning = ({title,image}) => {
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="flip-box-back">
                    <CardSkill bgColor="transparent" borderColor="#E34F26" color="#E34F26" bgImage="/assets/github.png" percentage="60%" tech="Github"/>
                    <CardSkill bgColor="transparent" borderColor="#2965F1" color="#2965F1" bgImage="/assets/gitlab.png" percentage="30%" tech="GitLab"/>
                </div>
            </div>
        </div>
    )
}
export default CardVersioning