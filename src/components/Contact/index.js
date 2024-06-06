import React, { useState } from "react";
import "./contact.css"
import emailjs from "emailjs-com"

const Contact = () => {
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
            'service_seth_2323',  // Replace with your EmailJS service ID
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
                        <h1>Contact Me</h1>
                        <hr/>
                    </div>
                    <div className="content-contact-cards">
                        <div className="content-contact-cardOne">
                            <h2>Let's chat.<br/>Tell me about your project.</h2>
                            <h5>Let's create something together</h5>
                            <p>Number phone: +261384816313</p>
                            <p>Address: Fianarantsoa Madagascar</p>
                        </div>
                        <div className="content-contact-cardTwo">
                            <div className="content-contact-cardTwo-message">
                                <h4>Send me a message</h4>
                                <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Name*" required/>
                                <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Your Email*" required/>
                                <label>Your Message</label>
                                <input type="text" name="message" value={formData.message} onChange={handleChange} id="input-message"/>
                                <button type="submit">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Contact