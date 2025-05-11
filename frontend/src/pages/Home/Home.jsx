import React from 'react'
import "./home.scss";

import profile from "../../assets/profile.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Home = () => {
  const gitlink =import.meta.env.VITE_GITHUB;
  console.log(gitlink);
  
  return (
    <div className="home">
        <div className="left">
          <h4>Hi I am</h4>
          <h3>Dipesh Dura</h3>
          <h1>Web Devloper</h1>

          <div className="social-media-links">
            <div className="social-media">
            <a href={import.meta.env.VITE_GITHUB} target="_blank" >
              <img src={github} alt={github} className="social-icon" />
            </a>
            </div>
            <div className="social-media">
            <a href={import.meta.env.VITE_LINKEDIN} target="_blank" >
              <img src={linkedin} alt={linkedin} className="social-icon" />

            </a>
            </div>
          </div>
          <div className="buttons">
            <a href="/contact">
            <button>Let's work Together</button>
            </a>
            <a href="#" download="my-resume">
            <button>Download CV</button>
            </a>
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