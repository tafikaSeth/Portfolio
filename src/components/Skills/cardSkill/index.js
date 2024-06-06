import React from "react";
import "./cardSkill.css"

const CardSkill = ({bgImage,percentage,bgColor,borderColor,color,tech}) => {
    return(
        <div className="container-cardSkill">
            <div className="content-cardSkill" style={{backgroundImage:`url(${bgImage})`}}>
                <div className="flip-box-back-content-pourcentage" style={{backgroundColor:`${bgColor}`,borderColor:borderColor}}><p style={{color:color}}>{percentage}</p></div>
            </div>
            <h1>{tech}</h1>
        </div>
    )
}
export default CardSkill