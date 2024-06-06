import React from "react";
import "./project.css"
import CardWeb from "./CardWeb";
import CardLangage from "../Skills/CardLangage"
import CardDb from "../Skills/CardDb"
import CardFramework from "../Skills/CardFramework"
import Tooltip from "./Tooltip";
import { useState } from "react";
import { useEffect } from "react";

const Project = () => {
    const paragraphPortfolio = "Creation of my portfolio to show you what I'm capable of in the world of web development"
    const outilsPortfolio = "Outils: HTML,CSS,Javascript,ReactJs."
    const paragraphMikrea = "Integration of the website named MikRea project to broaden my web development skills"
    const outilsMikrea = "Outils: HTML,CSS,Javascript,NextJs."
    const paragraphVideo = "Creation of an application to make local video calls project personnel"
    const outilsVideo = "Outils: HTML,CSS,TypeScript,AgoraRTC,NextJs."
    const paragraphKali = "Creation of a web design with prototypes for booking nutrition coaching"
    const outilsKali = "Outil: Figma"
    const outilsChat = "Outils: Python,Ampalibe,API chatGPT"
    const paragraphChat = "Creation of a sports betting messenger chatbot and chatGPT-turbo integration"
    const [isDisp,setIsDisp] = useState(true)
    const [roundSelected,setRoundSelected] = useState('round-first')
    const [displayCardWeb,setDisplayCardWeb] = useState('none')
    const [displayCardMobile,setDisplayCardMobile] = useState('none')
    const [displayCardDesign,setDisplayCardDesign] = useState('none')
    const [displayCardChatbot,setDisplayCardChatbot] = useState('none')
    const [roundDivOne,setRoundDivOne] = useState('round-first')
    const [roundDivTwo,setRoundDivTwo] = useState('round-second')
    const [roundDivThree,setRoundDivThree] = useState('round-third')
    const [roundDivFour,setRoundDivFour] = useState('round-fourth')

    const handleClickRound = (e) => {
        const roundClicked = e.target.className
        setRoundSelected(roundClicked)
        setIsDisp(!isDisp)
        if(isDisp){
            showCard()
        }else{
            console.log("erreur eh");
        }

    }

    const showCard = () => {
        if(roundSelected=='round-first'){
            setRoundDivOne('round-after')
            setDisplayCardWeb('flex')
        }else{
            setRoundDivOne('round-first')
            setDisplayCardWeb('none')
        }

        if(roundSelected=='round-second'){
            setRoundDivTwo('round-after')
            setDisplayCardMobile('flex')
        }else{
            setRoundDivTwo('round-second')
            setDisplayCardMobile('none')
        }

        if(roundSelected=='round-third'){
            setRoundDivThree('round-after')
            setDisplayCardDesign('flex')
        }else{
            setRoundDivThree('round-third')
            setDisplayCardDesign('none')
        }

        if(roundSelected=='round-fourth'){
            setRoundDivFour('round-after')
            setDisplayCardChatbot('flex')
        }else{
            setRoundDivFour('round-fourth')
            setDisplayCardChatbot('none')
        }
    }

    useEffect(()=>{
        showCard()
    },[roundSelected])
    return(
        <div id="project" className="container-project">
            <div className="content-project">
                <div className="content-project-title">
                    <h1>My Projects</h1>
                    <hr/>
                </div>
                <div className="content-project-myservices">
                    <div className="content-line-round">
                        <Tooltip tooltipText="Web">
                            <div className={roundSelected==='round-first'?'round-after':'round-first'} onClick={handleClickRound}></div>
                        </Tooltip>
                        <div className="line-first"></div>
                        <Tooltip tooltipText="Mobile">
                            <div className={roundSelected==='round-second'?'round-after':'round-second'} onClick={handleClickRound}></div>
                        </Tooltip>
                        <div className="line-first"></div>
                        <Tooltip tooltipText="Web design">
                            <div className={roundSelected==='round-third'?'round-after':'round-third'} onClick={handleClickRound}></div>
                        </Tooltip>
                        <div className="line-first"></div>
                        <Tooltip tooltipText="Chatbot">
                            <div className={roundSelected==='round-fourth'?'round-after':'round-fourth'} onClick={handleClickRound}></div>
                        </Tooltip>
                    </div>
                    <div className="content-projects-cards">
                        <div className="content-projects-for-card-web" style={{display:displayCardWeb}}>
                            <CardWeb backround='/assets/home.png' projectName='MY PORTFOLIO' urlButton='#portfolio' paragraph={paragraphPortfolio} outils={outilsPortfolio}/>
                            <CardWeb backround='/assets/mikrea.png' projectName='MIKREA' urlButton='#mikrea' paragraph={paragraphMikrea} outils={outilsMikrea}/>
                            <CardWeb backround='/assets/videoCall.jpg' projectName='VIDEO CALLING' urlButton='#videoCalling' paragraph={paragraphVideo} outils={outilsVideo}/>
                        </div>
                        <div className="content-projects-for-card-mobile" style={{display:displayCardMobile}}>
                            <CardLangage/>
                            <CardLangage/>
                        </div>
                        <div className="content-projects-for-card-design" style={{display:displayCardDesign}}>
                            <CardWeb backround='/assets/webDesign.png' projectName='C-KALI' urlButton='#Ckali' paragraph={paragraphKali} outils={outilsKali}/>
                        </div>
                        <div className="content-projects-for-card-ai" style={{display:displayCardChatbot}}>
                            <CardWeb backround='/assets/chat.png' projectName='CHATBOT MESSENGER' urlButton='#chatbot' paragraph={paragraphChat} outils={outilsChat}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project