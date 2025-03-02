import emailjs from "emailjs-com" 
import { motion } from "framer-motion";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/ReactToastify.css'
import React, { useState,useRef } from "react";
import "./contact.css"


const Contact = () => {
    const inputValue = useRef(null)

    const[formData, setFormData] = useState({
        userName:'',
        userEmail:'',
        message:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,[name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.send(
            'service_8haw6rm',  
            'template_seth_2323',
            {
                from_name:formData.userEmail,
                to_name:formData.userName,
                message:formData.message,
            },
            'yxVYn5pWjbDw-PolF' 
          ).then((result) => {
            console.log(result.text);
            toast.success("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
            toast.info("Email not sent, please try again after a few minutes!")
          });
      
          setFormData({
            userName: '',
            userEmail: '',
            message: ''
          });

    }

    return(
        <form onSubmit={handleSubmit}>
            <div id="contact" className="container-contact">
                <div className="content-contact">
                    <div className="content-contact-title">
                        <motion.h1
                            initial = {{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: false, amount: .5 }}
                        >
                            Contact Me
                        </motion.h1>
                        <motion.hr
                            initial = {{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: false, amount: .5 }}
                        />
                    </div>
                    <div className="content-contact-cards">
                        <motion.div 
                            className="content-contact-cardOne"
                            initial = {{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: false, amount: .5 }}
                        >
                            <h2>Let's chat.<br/>Tell me about your project.</h2>
                            <h3>Let's create something together</h3>
                            <p>Number phone: +261384816313</p>
                            <p>Address: Fianarantsoa Madagascar</p>
                        </motion.div>
                        <motion.div
                            className="content-contact-cardTwo"
                            initial = {{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } }}
                            viewport={{ once: false, amount: .5 }}
                        >
                            <div className="content-contact-cardTwo-message">
                                <h3>Send me your message</h3>
                                    <label for="userName" className="common-label">Username</label>
                                        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} placeholder=" Name*" aria-label="username"  required/>
                                    <label for="userEmail" className="common-label">Email</label>
                                        <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder=" Your Email*" aria-label="email" required/>
                                <div style={{position: 'relative'}} className="for-input">
                                    {/* <label for="input-message" id="lab">Tape your message</label> */}
                                    <input ref={inputValue} type="text" name="message" value={formData.message} onChange={handleChange} id="input-message" placeholder=" Tape your message"/>
                                </div>
                                <button className="btnActive" type="submit">Send message</button>
                                <ToastContainer transition={Zoom}/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Contact