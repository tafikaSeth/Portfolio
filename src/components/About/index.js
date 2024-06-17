import React from "react"
import "./about.css"

const About = () => {
    return(
        <div id="about" className="container-about">
            <div className="content-about">
                <div className="content-about-image"></div>
                <div className="content-about-texte">
                    <div className="content-about-texteOne">
                        <h1>About Me</h1>
                        <hr/>
                        <p>My name's TAFIKA Aintsoa Sarobidy Seth but everybody calls me Tafika or Seth, i've 23 years old and i live in Fianarantsoa Madagascar.I'm currently doing a Master 1 in Computer Science at University of EMIT Fianarantsoa(Ecole de Management et d'Innovation Technologique), passionate about web development with a solid academic background and practical experience in various projects.I have acquired in-depth skills in front-end development such as ReactJs and back-end development in laravel.My objectif is to create innovative, high-performance web solutions.</p>
                        <p>Curious and always on the lookout for new knowledge.I strive to keep up to date with the latest technologies and industry trends.</p>
                    </div>
                    <div className="content-about-btn">
                        <a href="/tafika.pdf" download>
                        <button className="button" type="button">
                            <span className="button-text">DOWNLOAD CV</span>
                            <span className="button-icon">
                                <img className="svg" src="/assets/download.png" alt='dowloadCv'/>
                            </span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About