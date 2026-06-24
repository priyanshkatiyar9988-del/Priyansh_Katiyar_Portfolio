import "../css/About.css";
import profile from "../assets/Pi7_Passport_Photo.jpeg"
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";
import { useEffect, useState } from "react";

function About() {
    return (
    <section className="abouts " >
      <div className="about-heading reveal">
      <span className="about-tag">• About Me</span>
        <h2>
          Let me introduce <span>myself</span>
        </h2>
      </div>

      <section className="about">

        {/* Left Side */}
        <div className="about-left">
          <div className="about-image-wrapper reveal">
              <div className="about-image-circle">
                  <img src={profile} alt="profile" />
              </div>
          </div>

          <div className="about-info reveal">
            <p>📍 Location: Lucknow, India</p>
            <p>🎓 Education: BCA</p>
            <p>📧 Email: priyanshkatiyar9988@gmail.com</p>
            <p>💼 Status: <span>Open to work</span></p>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right reveal">

          <p>
            I'm <strong>Priyansh Katiyar</strong>, a BCA undergraduate focused on <strong>full-stack</strong> and <strong>Python development</strong>, with hands-on experience in building responsive, scalable web applications using <strong>React, Flask, Django, </strong>and <strong>MongoDB</strong>.
          </p>

          <p>
            I enjoy developing clean, responsive, and user-focused applications while continuously improving my technical skills through practical projects and real-world problem solving. My experience spans both <strong>frontend</strong> and <strong>backend</strong> development, allowing me to create complete web solutions from concept to deployment. 
          </p>

          <p>
              Currently, I am focused on strengthening my full-stack development skills, exploring AI-powered applications, and gaining industry experience through internships and collaborative projects. My goal is to contribute to impactful software solutions while growing as a developer.
          </p>

          <a
            href="https://drive.google.com/file/d/1uotJVQP_i4vdyIz-FjWLQvga1VZokm2F/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Download Resume
          </a>
        </div>

      </section>
      <div className="about-do">

    <div className="do-card reveal">
        <div className="do-icon">
            <FaLaptopCode />
        </div>
        <h3>Frontend Development</h3>
        <p>
            Building interactive and responsive user interfaces.
        </p>
    </div>

    <div className="do-card reveal">
        <div className="do-icon">
            <FaServer />
        </div>
        <h3>Backend Development</h3>
        <p>
            Creating secure and scalable APIs and web services.
        </p>
    </div>

    <div className="do-card reveal">
        <div className="do-icon">
            <FaDatabase />
        </div>
        <h3>Database Management</h3>
        <p>
            Designing optimized and efficient databases.
        </p>
    </div>

    <div className="do-card reveal">
        <div className="do-icon">
            <BsLightbulb />
        </div>
        <h3>Problem Solving</h3>
        <p>
            Solving real-world problems through technology.
        </p>
    </div>

    </div>
    <div className="section-divider"></div>
    </section >
    );
}


export default About;