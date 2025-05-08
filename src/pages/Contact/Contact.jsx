import React from "react";
import "./contact.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Contact = () => {
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
          <form action="">
            <div className="form-box">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-box">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-box ">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="10"
                id="message"
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
              <a className="info" href="#">
            <div className="icon">
              <img src={github} alt={github} />
              </div>
            <div className="title">GitHub</div>
              </a>
              <a className="info" href="#">
            <div className="icon">
                <img src={linkedin} alt={linkedin} />
              </div>
            <div className="title">LinkedIn</div>
              </a>

            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2928.380506139405!2d84.40506577906838!3d27.650765756008287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sorbit!5e1!3m2!1sen!2snp!4v1746706306168!5m2!1sen!2snp"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
