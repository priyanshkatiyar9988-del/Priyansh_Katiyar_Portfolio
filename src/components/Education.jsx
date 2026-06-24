import "../css/Education.css";

import {
  FaSchool,
  FaBookReader,
  FaUserGraduate,
  FaCalendarAlt,
  FaAward,
  FaStar
} from "react-icons/fa";

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-header">
        <p className="section-label reveal">
          ACADEMIC JOURNEY
        </p>

        <h2 className="section-title reveal">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="edu-section-divider"></div>
        </div>

      <div className="timeline">

        {/* BCA */}
        <div className="timeline-item">

          <div className="timeline-icon">
            <FaUserGraduate />
          </div>

          <div className="timeline-card current-card reveal">

            <span className="edu-badge current-badge">
                <span className="badge-dot"></span>
              Recently Completed
            </span>

            <h3>
              National Post Graduate College
            </h3>

            <p>
              Bachelor of Computer Applications (BCA)
            </p>

            <div className="edu-meta">
              <span>
                <FaAward />
                CGPA: 7 / 10
              </span>

              <span>
                <FaCalendarAlt />
                2023 - 2026
              </span>
            </div>

          </div>
        </div>

        {/* 12th */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaBookReader />
          </div>

          <div className="timeline-card reveal">

            <span className="edu-badge">
                <span className="badge-dot"></span>
              CLASS 12TH
            </span>

            <h3>
              Rani Laxmi Bai Memorial Senior And Secondary School
            </h3>

            <p>Board: CBSE</p>

            <div className="edu-meta">
              <span>
                <FaAward />
                81.6%
              </span>

              <span>
                <FaCalendarAlt />
                2023
              </span>
            </div>

          </div>
        </div>

        {/* 10th */}

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaSchool />
          </div>

          <div className="timeline-card reveal">

            <span className="edu-badge">
              <span className="badge-dot"></span>
              CLASS 10TH
            </span>

            <h3>
              Rani Laxmi Bai Memorial Senior And Secondary School
            </h3>

            <p>Board: CBSE</p>

            <div className="edu-meta">
              <span>
                <FaAward />
                84.0%
              </span>

              <span>
                <FaCalendarAlt />
                2021
              </span>
            </div>
          </div>
        </div>

      </div>
      <div className="section-divider"></div>
    </section>
  );
}

export default Education;