import React from 'react'
import "./cardWeb.css"

const CardWeb = ({backround,projectName,paragraph,outils,titleBtn,urlButton}) => {
    return(
        <div className='container-cardweb'>
            <div className='content-cardweb'>
                <div className='content-cardweb-image' style={{backgroundImage:`url(${backround})`}}></div>
                <div className='content-cardweb-texte'>
                    <h2>{projectName}</h2>
                    <p>{paragraph}</p>
                        <p>{outils}</p>
                </div>
            </div>
            <div className='btnCardWeb'>
                <a href={`${urlButton}`}>
                    {titleBtn}
                </a>
            </div>
        </div>
    )
}
export default CardWeb