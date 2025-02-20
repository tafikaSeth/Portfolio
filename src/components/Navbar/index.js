/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Menu from "../Assets/Icons/menu.webp"
import pathFb from '../Assets/Icons/fb (2).webp'
import pathApp from '../Assets/Icons/app.webp'
import pathIn from '../Assets/Icons/in.webp'
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
                    <button className="closebtn" onClick={closeMenuMobile}>&times;</button>
                    <div className="overlay-content">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Projects</a>
                        <a href="#skill">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            <div className="navbar-logo">SETH</div>
            <img onClick={openMenuMobile} className="menu" src={Menu} alt="Menu"/>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-mode">
                <a href="https://web.facebook.com/profile.php?id=100092466422462" target="_blank" rel="noopener noreferrer"><img src={pathFb} alt="facebook"/></a>
                <a href="https://www.linkedin.com/in/aintsoa-sarobidy-seth-76701033b/" target="_blank" rel="noopener noreferrer"><img src={pathIn} alt="linkedin"/></a>
                <a href="https://wa.me/+261384816313" target="_blank" rel="noopener noreferrer"><img src={pathApp} alt="whatsapp"/></a>
            </div>
        </nav>
    )
}
export default Navbar