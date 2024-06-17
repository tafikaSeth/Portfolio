import React from "react";
import "./navbar.css"

const Navbar = () => {
    const handleMenuClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    return(
        <nav className="navbar">
            <div className="navbar-logo">SETH</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-mode">
                <a href="https://web.facebook.com/profile.php?id=100092466422462" target='_blank' rel='noopener noreferrer'><img src="/assets/fb (2).png" alt="facebook"/></a>
                <a href="#linkedin"><img src="/assets/in.png" alt="linkedin"/></a>
                <a href="#whatsapp"><img src="/assets/app.png" alt="whatsapp"/></a>
            </div>
        </nav>
    )
}
export default Navbar