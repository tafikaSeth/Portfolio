import React from "react"
import "./home.css"
import { motion } from "framer-motion"

const Home = () => {
    const clickContact = (e,sectionId) => {
        e.preventDefault()
        const id = document.getElementById(sectionId)
        if(id){
            window.scrollTo({
                top: id.offsetTop,
                behavior: "smooth"
            })
        }
    }
    
    return(
        <div id="home" className="container-home">
            <div className="content-home">
                <div className="content-home-image"></div>
                <div className="content-home-name">
                    <h1>Hello,<br/>I'm <span className="word-color">Seth TAFIKA</span> <br/><span className="developer">Web Developer & mobile</span></h1>
                    <div className="btn-contact">
                        <motion.button onClick={(e)=>clickContact(e,'contact')}
                            initial = {{ scale: 0 }}
                            whileInView={{ opacity:1, scale: 1, transition: {delay: 0.2, duration: 0.5} }}  
                            viewport={{ once: false, amount: .5 }}
                            style={{marginLeft: '10px'}}
                        >
                            <a href="../About">
                            
                            <span>CONTACT-ME</span>
                            </a>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home