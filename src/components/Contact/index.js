import React, { useState,useRef } from "react";
import "./contact.css"
import emailjs from "emailjs-com" 
import { motion } from "framer-motion";

const Contact = () => {
    // const [isRecaptchaChecked, setRecaptchaChecked] = useState(false);
    // const captcha = useRef(null)
    const inputValue = useRef(null)
  
    // const handleRecap=(value)=>{
    //   console.log(captcha.current.getValue());
    //   if(captcha.current.getValue()){
    //     setRecaptchaChecked(!!value);
    //   }

    // }

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
            'service_8haw6rm',  // Replace with your EmailJS service ID
            'template_seth_2323', // Replace with your EmailJS template ID
            {
                from_name:formData.userEmail,
                to_name:formData.userName,
                message:formData.message,
                reply_to:"reply",
            },
            'yxVYn5pWjbDw-PolF'      // Replace with your EmailJS user ID
          ).then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
          }, (error) => {
            console.log(error.text);
            alert('Failed to send email.');
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
                            <h5>Let's create something together</h5>
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
                                <h4>Send me your message</h4>
                                <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Name*"  required/>
                                <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Your Email*"  required/>
                                <div style={{position: 'relative'}} className="for-input">
                                    <input ref={inputValue} type="text" name="message" value={formData.message} onChange={handleChange} id="input-message" placeholder=" "/>
                                    <label id="lab">Tape your message</label>
                                </div>
                                {/* <div className="recaptcha-container">
                                    <ReCAPTCHA
                                    ref={captcha}
                                    sitekey='6LcOs5wpAAAAAGyqC807hfWT1VBLa-qaE1HaO0PF'
                                    onChange={handleRecap}
                                    />
                                    </div>   */}
                                <button className="btnActive" type="submit">Send message</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Contact