import React from 'react'
import { Link } from 'react-router-dom';
import "./home.scss";

import profile from "../../assets/profile.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Home = () => {

  
  return (
    <div className="home">
        <div className="left">
          <h4>Hi I am</h4>
          <h3>Dipesh Dura</h3>
          <h1>Web Devloper</h1>

          <div className="social-media-links">
            <div className="social-media">
            <Link to={import.meta.env.VITE_GITHUB} target="_blank" >
              <img src={github} alt={github} className="social-icon" />
            </Link>
            </div>
            <div className="social-media">
            <Link to={import.meta.env.VITE_LINKEDIN} target="_blank" >
              <img src={linkedin} alt={linkedin} className="social-icon" />

            </Link>
            </div>
          </div>
          <div className="buttons">
            <Link to="/contact">
            <button>Let's work Together</button>
            </Link>
            <Link to="#" download="my-resume">
            <button>Download CV</button>
            </Link>
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