import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import "../Card/card.css"

const CardConception = ({title,image}) => {
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
                    <CardSkill bgColor="transparent" borderColor="#31A8FF" color="#31A8FF" bgImage="/assets/ps.png" percentage="20%" tech="Photoshop"/>
                    <CardSkill bgColor="transparent" borderColor="#F24E1E" color="#F24E1E" bgImage="/assets/fig.png" percentage="40%" tech="Figma"/>
                    <CardSkill bgColor="transparent" borderColor="#FF9A00" color="#FF9A00" bgImage="/assets/ail.png" percentage="40%" tech="Illustrator"/>
                </div>
            </div>
        </div>
    )
}
export default CardConception