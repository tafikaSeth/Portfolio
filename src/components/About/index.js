import React from "react"
import iconDowload from '../Assets/Icons/download.png'
import "./about.css"
import {motion} from 'framer-motion'

const About = () => {
    const cv = require('../Assets/files/Seth.pdf')
    return(
        <div id="about" className="container-about">
            <div className="content-about">
                <div className="content-about-image"></div>
                <div className="content-about-texte">
                    <div className="content-about-texteOne">
                        <div className="content-about-title">
                            <motion.h1
                                initial = {{ opacity:0, x: 50 }}
                                whileInView={{ opacity:1, x: 0, transition: {delay: 0.2, duration: 0.5} }}
                                viewport={{ once: false, amount: .5 }}
                            >
                                About Me
                            </motion.h1>
                            <motion.hr
                                initial = {{ opacity:0, x: -50 }}
                                whileInView={{ opacity:1, x: 0, transition: {delay: 0.2, duration: 0.5} }}
                                viewport={{ once: false, amount: .5 }}  
                            />
                        </div>
                        <motion.p
                                initial = {{ opacity:0, y:50 }}
                                whileInView={{ opacity:1, y:0, transition: {delay: 0.2, duration: 0.5} }}
                                viewport={{ once: false, amount: .5 }}
                        >My name's TAFIKA Aintsoa Sarobidy Seth but everybody calls me Tafika or Seth, i've 23 years old and i live in Fianarantsoa Madagascar.I'm currently doing a Master 1 in Computer Science at University of EMIT Fianarantsoa(Ecole de Management et d'Innovation Technologique), passionate about web development with a solid academic background and practical experience in various projects.I have acquired in-depth skills in front-end development such as ReactJs and back-end development in laravel.My objectif is to create innovative, high-performance web solutions.</motion.p>
                        <motion.p
                                initial = {{ opacity:0, y:50 }}
                                whileInView={{ opacity:1, y:0, transition: {delay: 0.2, duration: 0.5} }}
                                viewport={{ once: false, amount: .5 }}
                        >Curious and always on the lookout for new knowledge.I strive to keep up to date with the latest technologies and industry trends.</motion.p>
                    </div>
                    <motion.div
                        className="content-about-btn"
                        initial = {{ scale: 0 }}
                        whileInView={{ opacity:1, scale: 1, transition: {delay: 0.2, duration: 0.5} }}  
                        viewport={{ once: false, amount: .5 }}
                    >
                        <a href={cv} download={true}>
                        <button className="button" type="button">
                            <span className="button-text">DOWNLOAD CV</span>
                            <span className="button-icon">
                                <img className="svg" src={iconDowload} alt='dowloadCv'/>
                            </span>
                        </button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default About