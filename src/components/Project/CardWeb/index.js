import React from 'react'
import "./cardWeb.css"

const CardWeb = ({backround,projectName,paragraph,outils,urlButton}) => {
    return(
        <div className='container-cardweb'>
            <div className='content-cardweb'>
                <div className='content-cardweb-image' style={{backgroundImage:`url(${backround})`}}></div>
                <div className='content-cardweb-texte'>
                    <h4>{projectName}</h4>
                    <p>{paragraph}</p>
                    <p>{outils}</p>
                    <a href={`${urlButton}`}>
                        <button>GET LINK</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default CardWeb