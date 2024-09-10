import React from "react";
import Menu from "../Assets/icons8-menu-50.png"
import pathFb from '../Assets/Icons/fb (2).png'
import pathApp from '../Assets/Icons/app.png'
import pathIn from '../Assets/Icons/in.png'
import "./navbar.css"

const Navbar = () => {

    const openMenuMobile = () => {
        document.getElementById("myNav").style.width = "100%";
    }
    const closeMenuMobile = () => {
        document.getElementById("myNav").style.width = "0%";
    }
    
    return(
        <nav className="navbar">
                <div id="myNav" className="overlay">
                <a className="closebtn" onClick={closeMenuMobile}>&times;</a>
                <div className="overlay-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#project">Projects</a>
                    <a href="#skill">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                </div>
            <div className="navbar-logo">SETH</div>
            <img onClick={openMenuMobile} className="menu" src={Menu}/>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-mode">
                <a href="https://web.facebook.com/profile.php?id=100092466422462" target='_blank' rel='noopener noreferrer'><img src={pathFb} alt="facebook"/></a>
                <a href="#linkedin"><img src={pathIn} alt="linkedin"/></a>
                <a href="#whatsapp"><img src={pathApp} alt="whatsapp"/></a>
            </div>
        </nav>
    )
}
export default Navbar