/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState,useEffect } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import "./project.css"
import bgPortfolio from '../Assets/home.webp'
import bgMikrea from '../Assets/mikrea.webp'
import bgVideoCalling from '../Assets/videoCall.webp'
import bgEnjoyB from '../Assets/enjoyB.webp'
import bgMobile from '../Assets/mobilegeo.webp'
import bgWebDesign from '../Assets/webDesign.webp'
import bgChat from '../Assets/chat.webp'
import bgGearator from '../Assets/mobileGen.webp'
import CardWeb from "./CardWeb";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";

const Project = () => {
    const paragraphPortfolio = "Creation of my portfolio to show you what i'm capable in web development"
    const outilsPortfolio = "Techno: ReactJs, Swiper."
    const urlPortfolio = "https://github.com/tafikaSeth/Portfolio.git"
    const paragraphMikrea = "Integration the website MikRea project to broaden my web development skills"
    const outilsMikrea = "Techno: NextJs."
    const paragraphVideo = "Creation of an application to make local video calls project personnel"
    const outilsVideo = "Techno: ReactJs, AgoraRTC."
    const paragraphEnjoyB = "Integration of an website for read, add and dowload the BD"
    const outilsEnjoyB = "Techno: Next.Js, Swiper"
    const paragraphMobile = "Mobile application for geolocalisation to find position stop bus, generate routes and chat"
    const outilsMobile = "Techno: React native, react native map and GiftedChat"
    const paragraphKali = "Creation of a web design with prototypes for booking nutrition coaching"
    const outilsKali = "Tool: Figma"
    const urlKali = "https://www.figma.com/proto/vCnZw2XyJcvy9a9fShqLdS/Plateforme-de-r%C3%A9servation-de-service-de-coaching-en-nutrition?node-id=21-16&starting-point-node-id=21%3A16"
    const outilsChat = "Techno: Python,Ampalibe,API chatGPT"
    const urlChat = "https://github.com/tafikaSeth/Paris_sportif.git"
    const paragraphChat = "Creation of a sports betting messenger chatbot and chatGPT-turbo integration"
    const paragraphGenerator = "Mobile application for generate and scan a qr code simply"
    const outilsGenerator = "Techno: React native, Expo, Eas build"
    const urlGenarator = 'https://expo.dev/accounts/sethtafika/projects/genarate/builds/64550660-bf47-4c20-beb3-4eb91c2cd6e8'
    
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
                    <motion.h1
                        initial = {{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: false, amount: .5 }}                      
                    >
                        My Projects
                    </motion.h1>
                    <motion.hr
                        initial = {{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        viewport={{ once: false, amount: .5 }}
                    />
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
                        <motion.div className="content-projects-for-card-web" style={{display:displayCardWeb}}
                            initial = {{ opacity: 1, y: 50 }}
                            whileInView = {{ opacity: 1, y: 0, transtion:{ duration: 0.2 } }}
                        >
                            <Swiper
                                className = 'mySwiper'
                                spaceBetween={20}
                                slidesPerView={windowWidth<=768 ? 1 : 3}
                            >
                                <SwiperSlide>
                                    <CardWeb backround={bgPortfolio} projectName='MY PORTFOLIO' urlButton={urlPortfolio} paragraph={paragraphPortfolio} outils={outilsPortfolio}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround={bgMikrea} projectName='MIKREA' urlButton='#mikrea' paragraph={paragraphMikrea} outils={outilsMikrea}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround={bgVideoCalling} projectName='VIDEO CALLING' urlButton='#videoCalling' paragraph={paragraphVideo} outils={outilsVideo}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround={bgEnjoyB} projectName='EnjoyB' urlButton='#videoCalling' paragraph={paragraphEnjoyB} outils={outilsEnjoyB}/>
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                        <motion.div className="content-projects-for-card-mobile" style={{display:displayCardMobile}}
                            initial = {{ opacity: 1, y: 50 }}
                            whileInView = {{ opacity: 1, y: 0, transtion:{ duration: 0.2 } }}
                        >
                            <Swiper
                                className = 'mySwiper'
                                spaceBetween={25}
                                slidesPerView={windowWidth<=768 ? 1 : 2}
                            >
                                <SwiperSlide>
                                    <CardWeb backround={bgMobile} projectName='Geolocalisation' urlButton='#videoCalling' paragraph={paragraphMobile} outils={outilsMobile}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardWeb backround={bgGearator} projectName='Generator' urlButton={urlGenarator} paragraph={paragraphGenerator} outils={outilsGenerator}/>
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                        <motion.div id="design" className="content-projects-for-card-design" style={{display:displayCardDesign}}
                            initial = {{ opacity: 1, y: 50 }}
                            whileInView = {{ opacity: 1, y: 0, transtion:{ duration: 0.2 } }}
                        >
                            <CardWeb backround={bgWebDesign} projectName='C-KALI' urlButton={urlKali} paragraph={paragraphKali} outils={outilsKali}/>
                        </motion.div>
                        <motion.div className="content-projects-for-card-ai" style={{display:displayCardChatbot}}
                            initial = {{ opacity: 1, y: 50 }}
                            whileInView = {{ opacity: 1, y: 0, transtion:{ duration: 0.2 } }}
                        >
                            <CardWeb backround={bgChat} projectName='CHATBOT MESSENGER' urlButton={urlChat} paragraph={paragraphChat} outils={outilsChat}/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project