import React from "react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "./home.css"

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
        }, 300); // Milliseconds between each letter

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
            <header><Navbar/></header>
            <main className="content-home">
                <div className="content-home-name">
                    <h1>Hello,<br></br>I'm <span className="word-color">{displayText}</span></h1>
                    <h2>Web Developer</h2>
                    <div className="btn-contact">
                        <button onClick={(e)=>clickContact(e,'contact')}>
                            <a href="../About">
                                <span>CONTACT-ME</span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="content-home-image"></div>
            </main>
        </div>
    )
}
export default Home