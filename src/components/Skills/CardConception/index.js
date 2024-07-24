import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathPs from '../../Assets/fig.png'
import pathFigma from '../../Assets/fig.png'
import pathAi from '../../Assets/ail.png'
import "../Card/card.css"

const CardConception = ({title,image}) => {
    const contexte = "Design tools is increasingly valuable, these tools enhance the development process by enabling better design, improving user experience."
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
                    <CardSkill bgColor="transparent" borderColor="#31A8FF" color="#31A8FF" bgImage={pathPs} percentage="20%" tech="Photoshop"/>
                    <CardSkill bgColor="transparent" borderColor="#F24E1E" color="#F24E1E" bgImage={pathFigma} percentage="40%" tech="Figma"/>
                    <CardSkill bgColor="transparent" borderColor="#FF9A00" color="#FF9A00" bgImage={pathAi} percentage="40%" tech="Illustrator"/>
                </div>
            </div>
        </div>
    )
}
export default CardConception