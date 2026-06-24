import { useState } from "react";
import "../css/Projects.css";
import { FaLayerGroup, FaCodeBranch, FaUserAstronaut, FaGithub, FaRocket} from "react-icons/fa";

function Projects() {
  const [activeTab, setActiveTab] = useState("major");

  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="section-header reveal">
          <p className="section-label">What I've Built</p>

          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>

          <div className="section-line"></div>
        </div>

        {/* Tab Navigation */}
        <div className="project-tabs reveal">

          <button
            className={`tab-btn ${activeTab === "major" ? "active" : ""}`}
            onClick={() => setActiveTab("major")}
          > <FaLayerGroup />
            Major Projects
          </button>

          <button
            className={`tab-btn ${activeTab === "minor" ? "active" : ""}`}
            onClick={() => setActiveTab("minor")}
          > <FaCodeBranch />
            Minor Projects
          </button>

          <button
            className={`tab-btn ${activeTab === "self" ? "active" : ""}`}
            onClick={() => setActiveTab("self")}
          > <FaUserAstronaut />
            Self Projects
          </button>

        </div>

        {/* MAJOR PROJECT */}
        <div
          className={`project-tab-content ${
            activeTab === "major" ? "active" : ""
          }`}
        >
          <div className="projects-grid">
            <div className="project-card glass reveal">

              <div className="project-card-header">
                <div className="project-icon">🧠</div>

                <div className="project-links">
                  <a
                    href="https://github.com/priyanshkatiyar9988-del/Feelora"
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  > <FaGithub />
                    View GitHub
                  </a>
                </div>
              </div>

              <h3 className="project-title">
                FEELORA - AI Mental Health Journal & Sentiment Tracker
              </h3>

              <p className="project-desc">
                FEELORA is an AI-powered mental wellness platform that helps
                users track and understand their emotions through daily
                journaling.
              </p>

              <p className="project-desc">
                The system analyzes journal entries using sentiment analysis
                and emotion detection models, providing personalized insights,
                mood trends, and visual analytics.
              </p>

              <p className="project-desc">
                Designed to promote emotional self-awareness and support users
                in monitoring their mental well-being more effectively.
              </p>

              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">PyMongo</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP Libraries</span>
                <span className="tech-tag">Machine Learning</span>
              </div>

            </div>
          </div>
        </div>

        {/* MINOR PROJECT */}
        <div
          className={`project-tab-content ${
            activeTab === "minor" ? "active" : ""
          }`}
        >
          <div className="projects-grid">
            <div className="project-card glass reveal">

              <div className="project-card-header">
                <div className="project-icon">🎵</div>

                <div className="project-links">
                  <a
                    href="https://github.com/priyanshkatiyar9988-del/melody"
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  > <FaGithub />
                    View GitHub
                  </a>
                </div>
              </div>

              <h3 className="project-title">
                Melody - Music Streaming Web Application
              </h3>

              <p className="project-desc">
                Melody is a lightweight, responsive frontend web application designed 
                to deliver a premium, distraction-free audio playback experience.
              </p>

              <p className="project-desc">
                Utilizing advanced HTML5 Audio APIs and modern CSS frameworks, the project 
                showcases custom-built media controls, dynamic playlist queues, and high-performance 
                rendering.
              </p>

              <p className="project-desc">
                The entire user experience is optimized 
                for speed and visual consistency across all device screens.
              </p>

              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>

            </div>
          </div>
        </div>

        {/* SELF PROJECT */}
        <div
          className={`project-tab-content ${
            activeTab === "self" ? "active" : ""
          }`}
        >
          <div className="projects-grid">
            <div className="project-card glass reveal">

              <div className="project-card-header">
                <div className="project-icon">🏢</div>

                <div className="project-links">
                  <a
                    href="https://github.com/priyanshkatiyar9988-del/infotech_compliance_services"
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  > <FaGithub />
                    View GitHub
                  </a>

                  <a
                    href="https://infotech-compliance-services.vercel.app/"
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer" 
                  > <FaRocket/>
                    View Live
                  </a>
                </div>
              </div>

              <h3 className="project-title">
                Infotech Compliance Landing Page
              </h3>

              <p className="project-desc">
                Built a fully responsive landing page for an Infotech Compliance 
                service platform tailored for research analysts to master real-world UI design.
              </p>

              <p className="project-desc">
                Developed a pixel-perfect, mobile-friendly interface featuring
                 an interactive navigation drawer with smooth JavaScript transitions.
              </p>

              <p className="project-desc">
                Gained hands-on experience in component-driven CSS, layout structuring, and responsive 
                design, bridging the gap between static design concepts and functional web applications.
              </p>

              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">Flexbox & Grid</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive UI</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  );
}

export default Projects;