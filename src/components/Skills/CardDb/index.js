import React from 'react'
import { useState } from 'react'
import CardSkill from '../cardSkill'
import "../Card/card.css"

const CardDb = ({title,image}) => {
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
                    <CardSkill bgColor="#551d0e" borderColor="#E34F26" color="#E34F26" bgImage="/assets/mysql.png" percentage="80%" tech="MySQL"/>
                    <CardSkill bgColor="#192a52" borderColor="#336791" color="#336791" bgImage="/assets/postgresqsl.png" percentage="30%" tech="PostegreSQL"/>
                </div>
            </div>
        </div>
    )
}
export default CardDb