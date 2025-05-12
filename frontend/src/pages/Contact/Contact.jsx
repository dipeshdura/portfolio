import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./contact.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import useContact from "../../Hooks/useContact";
const Contact = () => {
  const [isSmall, setIsSmall] =useState(false);
  useEffect(()=>{
    const smwidth =window.innerWidth >640;
    setIsSmall(smwidth);
  },[])

  const [formData, setFormData] =useState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });

  const handleOnChange =(e)=>{
   
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
    
  }

  const {sendContact} =useContact();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
        const result =await sendContact(formData);
        console.log("Message sent",result);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
    } catch (error) {
      console.error("Error sending message:",error.message);
      
    }

  }

  return (
    <div className="contact">
      <div className="info">
        <h1 className="title">👋Let's Connect !</h1>
        <p className="desc">
          Have a project in mind or just want to say hi? I'm always open to new
          opportunities and collaborations.
        </p>
      </div>
      <div className="container">
        <div className="left">
          <form  onSubmit={handleSubmit}>
            <div className="form-box">
              <label htmlFor="name">Name</label>
              <input type="text"
              onChange={handleOnChange}
               name="name"
               id="name"
               placeholder="Name"
               value={formData.name}
               autoFocus />
            </div>
            <div className="form-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={handleOnChange}
                name="email"
                id="email"
                value={formData.email}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-box">
              <label htmlFor="subject">Subject</label>
              <input type="text"
              onChange={handleOnChange}
               name="subject"
               id="subject"
               value={formData.subject}
                placeholder="Subject" />
            </div>
            <div className="form-box ">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                onChange={handleOnChange}
                rows={isSmall ? "10":"5"}
                id="message"
                value={formData.message}
                placeholder="Message...."
              ></textarea>
            </div>
            <div className="form-button">
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="rightContainer">
            <div className="infoContainer">
              <Link className="social-info" to={import.meta.env.VITE_GITHUB} target="_blank">
            <div className="icon">
              <img src={github} alt={github} />
              </div>
            <div className="title">GitHub</div>
              </Link>
              <Link className="social-info" to={import.meta.env.VITE_LINKEDIN} target="_blank">
            <div className="icon">
                <img src={linkedin} alt={linkedin} />
              </div>
            <div className="title">LinkedIn</div>
              </Link>

            </div>
            <div className="map">
              <iframe
                src={import.meta.env.VITE_MAP_LOCATION}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
