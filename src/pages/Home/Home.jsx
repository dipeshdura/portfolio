import React from 'react'
import "./home.scss";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import profile from "../../assets/profile.jpg";
const Home = () => {
  return (
    <div className="home">
        <div className="left">
          <h4>Hi I am</h4>
          <h3>Dipesh Dura</h3>
          <h1>Web Devloper</h1>

          <div className="social-media-links">
            <div className="social-media">
            <a href="#" >
          <TiSocialLinkedinCircular className="social-icon" />
            </a>
            </div>
            <div className="social-media">
            <a href="#" >
          <TiSocialLinkedinCircular className="social-icon" />
            </a>
            </div>
            <div className="social-media">
            <a href="#" >
          <TiSocialLinkedinCircular className="social-icon" />
            </a>
            </div>
          </div>
          <div className="buttons">
            <button>Hire me</button>
            <button>Download CV</button>
          </div>
        </div>
        <div className="right">
          <div className="circle">
            <div className="profile-container">
              <img src={profile} alt={profile} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home