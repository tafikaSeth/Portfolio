import React from "react"
import { useState,useEffect } from "react"
import "./home.css"
import { motion } from "framer-motion"

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const textToDisplay = 'Seth TAFIKA';

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= textToDisplay.length) {
                setDisplayText(textToDisplay.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 300);

        return () => clearInterval(intervalId);
    }, [textToDisplay]);
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
                <div className="content-home-name">
                    <h1>Hello,<br/>I'm <span className="word-color">{displayText}</span> <br/><span className="developer">Web Developer & mobile</span></h1>
                    <div className="btn-contact">
                        <motion.button onClick={(e)=>clickContact(e,'contact')}
                            initial = {{ scale: 0 }}
                            whileInView={{ opacity:1, scale: 1, transition: {delay: 0.2, duration: 0.5} }}
                            // animate = {{ scale: 1, transition: {delay: 0.2, duration: 0.5} }}
                            viewport={{ once: false, amount: .5 }}
                        >
                            <a href="../About">
                                <span>CONTACT-ME</span>
                            </a>
                        </motion.button>
                    </div>
                </div>
                <div className="content-home-image"></div>
            </div>
        </div>
    )
}
export default Home