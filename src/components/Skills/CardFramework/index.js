import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import pathReact from '../../Assets/react.png'
import pathLaravel from '../../Assets/laravel.png'
import "../Card/card.css"

const CardFramework = ({title,image}) => {
    const contexte = "Frameworks provide a structured foundation to streamline the development process. They offer pre-written code, tools, and libraries."
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
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage={pathReact} percentage="60%" tech="ReactJs"/>
                    <CardSkill bgColor="#33100C" borderColor="#FF2D20" color="#FF2D20" bgImage={pathLaravel} percentage="50%" tech="Laravel"/>
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage={pathReact} percentage="50%" tech="Native"/>
                </div>
            </div>
        </div>
    )
}
export default CardFramework