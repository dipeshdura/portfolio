import React from "react";
import "./about.scss";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <div className="card-right">
        <div className="left">
          <h1>👋About</h1>
          <p>
            Hi, I'm Dipesh Dura — a passionate <b>Full-Stack Developer</b>{" "}
            specializing in the <b>MERN stack </b> (MongoDB, Express.js, React,
            Node.js). I love building dynamic, user-friendly web applications
            that solve real-world problems.
          </p>
        </div>
        <div className="right">
          <img src={profile} alt={profile} />
        </div>
      </div>
      <div className="card-left">
        <div className="left">
          <img src={profile} alt={profile} />
        </div>
        <div className="right">
          <h1>🚀 My Journey</h1>
          <p>
            My coding journey began with a curiosity about how websites work.
            What started as a hobby turned into a full-fledged passion. After
            learning the fundamentals of HTML, CSS, and JavaScript, I discovered
            the power of full-stack development — and since then, I've been
            crafting end-to-end applications using modern JavaScript
            technologies.
          </p>
        </div>
      </div>

      <div className="card-right">
        <div className="left">
          <h1>🛠️ Technologies I Work With</h1>
          <div className="info">
            <li>
              <b>Frontend:</b> React, Redux, Tailwind CSS, HTML5, CSS3
            </li>
            <li>
              {" "}
              <b>Backend:</b> Node.js, Express.js, MongoDB
            </li>
            <li>
              {" "}
              <b>Tools & Platforms:</b> Git, GitHub, Postman, Firebase, Render
            </li>
            <li>
              {" "}
              <b>Others:</b> RESTful APIs, JWT Auth, Mongoose, EJS
            </li>
          </div>
        </div>
        <div className="right">
          <img src={profile} alt={profile} />
        </div>
      </div>
      <div className="card-left">
        <div className="left">
          <img src={profile} alt={profile} />
        </div>
        <div className="right">
          <h1>💡 What I Do</h1>
          <div className="info">
            <li>Build responsive and interactive web applications</li>
            <li>Integrate backend APIs and authentication systems</li>
            <li>Design clean, maintainable, and scalable code</li>
            <li>Continuously learn and adapt to new technologies</li>
          </div>
        </div>
      </div>

      <div className="info-desc">
        <div className="info">
          <div className="title">🎯 Goals & Aspirations</div>
          <div className="desc">
            Right now, I'm focused on sharpening my skills, building real-world
            projects, and exploring opportunities as a junior full-stack
            developer. I'm also passionate about open-source, clean code, and
            building things that make an impact.
          </div>
        </div>
        <div className="info">
          <div className="title">🎮 Outside of Code</div>
          <div className="desc">
            When I'm not coding, you'll probably find me editing gameplay
            videos, watching football, or exploring the latest in AI tools and
            tech trends.
          </div>
        </div>
        <div className="info">
          <div className="title">🤝 Let's Connect</div>
          <div className="desc">
            I'm always open to collaboration, freelance work, or just a tech
            talk. Feel free to check out my{" "}
            <b>
              <Link to={import.meta.env.VITE_GITHUB} target="_blank">
                GitHub
              </Link>
            </b>{" "}
            or head over to the{" "}
            <b>
              {" "}
              <Link to="/contact">Contact</Link>
            </b>{" "}
            page to reach out!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
