import "../css/Hero.css";
import profile from "../assets/Pi7_Passport_Photo.jpeg"
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CountUp from "react-countup";

function Hero() {
    return (
    <>
    <section className="hero">
        <div className="hero-left">
            <span className="tag"> Python · Flask · MongoDB </span>
            <h1>Priyansh</h1> 
            <h1><span>Katiyar</span></h1>
            <h2>Full Stack Developer | Python Developer</h2>
            <p>
                BCA Undergraduate and Full Stack Developer with hands-on experience in building modern web applications using React, Django, Flask, and MongoDB. Passionate about creating scalable solutions, solving real-world problems, and continuously learning emerging technologies.
            </p>

            <div className="hero-social-links">
                <a href="https://www.linkedin.com/in/priyansh-katiyar/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link linkedin">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/priyanshkatiyar9988-del" 
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link github">
                    <FaGithub />
                </a>

                <a href="mailto:priyanshkatiyar9988@gmail.com" className="hero-social-link email">
                    <MdEmail />
                </a>
            </div>
            <div className="hero-buttons">
                <a
                    href="https://drive.google.com/file/d/1uotJVQP_i4vdyIz-FjWLQvga1VZokm2F/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                >
                    DOWNLOAD CV
                </a>

                <a
                    href="mailto:priyanshkatiyar9988@gmail.com"
                    className="contact-btn"
                >
                    CONTACT ME
                </a>
            </div>
                <div className="stats">
                    <div className="stat-card">
                        <h3>2+</h3>
                        <p>Projects</p>
                    </div>

                    <div className="stat-card">
                        <h3>1</h3>
                        <p>Internships</p>
                    </div>

                    <div className="stat-card">
                        <h3>10+</h3>
                        <p>Technologies</p>
                    </div>

                    <div className="stat-card">
                        <h3>2</h3>
                        <p>Certificates</p>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="image-wrapper">
                     <div className="image-circle">
                        <img src={profile} alt="profile" />
                     </div>
                </div>
            </div>
            
        </section>
        <div className="section-divider"></div>
    </>
    );
}


export default Hero;