import "../css/Skills.css";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { BsDatabaseFill } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java (basics)" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      category: "Backend",
      items: [
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiFlask />, name: "Flask" },
      ],
    },
    {
      category: "Database & Tools",
      items: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <VscVscode />, name: "VS Code" },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="skills-tag reveal"><span>✦</span> My Skills</p>

        <h2 className="skills-title reveal">
          My technical <span>toolkit</span>
        </h2>

        {skills.map((group, index) => (
          <div className="skill-group" key={index}>
            <h3 className="reveal">{group.category}</h3>

            <div className="skills-grid reveal">
              {group.items.map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Skills;