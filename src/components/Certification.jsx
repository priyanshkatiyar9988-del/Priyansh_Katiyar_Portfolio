import "../css/Certification.css";
import { FaAward, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaTools,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
  FaCertificate
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";

function Certificates() {
  const certificates = [
    {
      icon:<FaLaptopCode />,
      title: "Python Full Stack Development",
      provider: "EduSkills Virtual Internship",
      link: "/certificates/Python_Full_Stack_Development.pdf",
    },
    {
      icon:<FaShieldAlt />,
      title: "Cyber Security",
      provider: "EduSkills Virtual Internship",
      link: "/certificates/Cybersecurity.pdf",
    },
  ];

  return (
    <section className="certificates-section" id="certification">

      <p className="section-label reveal">
        ✦ Certifications
      </p>

      <h2 className="section-title reveal">
        My <span className="gradient-text">Certificates</span>
      </h2>

      <div className="certificates-grid">

        {certificates.map((cert, index) => (
          <div className="certificate-card reveal" key={index}>

            <div className="certificate-icon">
              {cert.icon}
            </div>

            <h3>{cert.title}</h3>

            <p className="certificate-provider">
              {cert.provider}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
              <FaEye />
            </a>

          </div>
        ))}

      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Certificates;