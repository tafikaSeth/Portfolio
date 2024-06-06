import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import "../Card/card.css"

const CardLangage = ({title,image}) => {
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
                    <CardSkill bgColor="#21263d" borderColor="#4F5B93" color="#4F5B93" bgImage="/assets/php.png" percentage="70%" tech="PHP"/>
                    <CardSkill bgColor="transparent" borderColor="#FFFFFF" color="#FFFFFF" bgImage="/assets/py.png" percentage="50%" tech="PYTHON"/>
                    <CardSkill bgColor="#232B33" borderColor="#3178C6" color="#3178C6" bgImage="/assets/ts.png" percentage="40%" tech="TypeScript"/>
                </div>
            </div>
        </div>
    )
}
export default CardLangage