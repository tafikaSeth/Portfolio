import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import "../Card/card.css"

const CardFramework = ({title,image}) => {
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
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage="/assets/react.png" percentage="60%" tech="ReactJs"/>
                    <CardSkill bgColor="#33100C" borderColor="#FF2D20" color="#FF2D20" bgImage="/assets/laravel.png" percentage="50%" tech="Laravel"/>
                    <CardSkill bgColor="#192a52" borderColor="#2965F1" color="#2965F1" bgImage="/assets/react.png" percentage="50%" tech="Native"/>
                </div>
            </div>
        </div>
    )
}
export default CardFramework