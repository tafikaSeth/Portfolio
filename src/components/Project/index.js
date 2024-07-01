import React from "react";
import { useState,useEffect } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import "./project.css"
import CardWeb from "./CardWeb";
import Tooltip from "./Tooltip";

const Project = () => {
    const paragraphPortfolio = "Creation of my portfolio to show you what I'm capable of in the world of web development"
    const outilsPortfolio = "Outils: HTML,CSS,Javascript,ReactJs."
    const urlPortfolio = "https://github.com/tafikaSeth/Portfolio.git"
    const paragraphMikrea = "Integration of the website named MikRea project to broaden my web development skills"
    const outilsMikrea = "Outils: HTML,CSS,Javascript,NextJs."
    const paragraphVideo = "Creation of an application to make local video calls project personnel"
    const outilsVideo = "Outils: HTML,CSS,JavaScript,AgoraRTC,ReactJs."
    const paragraphKali = "Creation of a web design with prototypes for booking nutrition coaching"
    const outilsKali = "Outil: Figma"
    const urlKali = "https://www.figma.com/proto/vCnZw2XyJcvy9a9fShqLdS/Plateforme-de-r%C3%A9servation-de-service-de-coaching-en-nutrition?node-id=21-16&starting-point-node-id=21%3A16"
    const outilsChat = "Outils: Python,Ampalibe,API chatGPT"
    const urlChat = "https://github.com/tafikaSeth/Paris_sportif.git"
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //getWidth to change the slider per view
    const getWidth = () => {
        setWindowWidth(window.innerWidth)
        console.log( "ty "+windowWidth);
    }

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
        window.addEventListener('resize',getWidth)
        return () => {
            window.removeEventListener('resize',getWidth)
        }
    },[roundSelected,windowWidth])
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
                            <Swiper
                                className = 'mySwiper'
                                spaceBetween={20}
                                slidesPerView={windowWidth<=768 ? 1 : 3}
                                >
                                <SwiperSlide>
                                    <CardWeb backround='/assets/home.png' projectName='MY PORTFOLIO' urlButton={urlPortfolio} paragraph={paragraphPortfolio} outils={outilsPortfolio}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround='/assets/mikrea.png' projectName='MIKREA' urlButton='#mikrea' paragraph={paragraphMikrea} outils={outilsMikrea}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround='/assets/videoCall.jpg' projectName='VIDEO CALLING' urlButton='#videoCalling' paragraph={paragraphVideo} outils={outilsVideo}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround='/assets/videoCall.jpg' projectName='EnjoyB' urlButton='#videoCalling' paragraph={paragraphVideo} outils={outilsVideo}/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="content-projects-for-card-mobile" style={{display:displayCardMobile}}>
                            <CardWeb backround='/assets/videoCall.jpg' projectName='EnjoyB' urlButton='#videoCalling' paragraph={paragraphVideo} outils={outilsVideo}/>  
                        </div>
                        <div id="design" className="content-projects-for-card-design" style={{display:displayCardDesign}}>
                            <CardWeb backround='/assets/webDesign.png' projectName='C-KALI' urlButton={urlKali} paragraph={paragraphKali} outils={outilsKali}/>
                        </div>
                        <div className="content-projects-for-card-ai" style={{display:displayCardChatbot}}>
                            <CardWeb backround='/assets/chat.png' projectName='CHATBOT MESSENGER' urlButton={urlChat} paragraph={paragraphChat} outils={outilsChat}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project