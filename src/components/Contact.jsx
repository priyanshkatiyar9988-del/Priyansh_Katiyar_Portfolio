import "../css/Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "priyanshkatiyar9988@example.com",
      link: "mailto:priyanshkatiyar9988@example.com"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 9305990495",
      link: "tel:+919305990495"
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      value: "linkedin.com/in/priyansh-katiyar",
      link: "https://linkedin.com/in/priyansh-katiyar"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/priyanshkatiyar9988-del",
      link: "https://github.com/priyanshkatiyar9988-del"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Lucknow, Uttar Pradesh, India"
    }
  ];

  return (
    <section className="contact-section" id="contact">

      <div className="section-header">
        <p className="section-label reveal">
          GET IN TOUCH
        </p>

        <h2 className="section-title reveal">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div className="contact-section-divider"></div>
      </div>

      <div className="contact-content">

        <h3 className="contact-heading reveal">
          Reach Out To Me
        </h3>

        <p className="contact-text reveal">
          I'm always open to new opportunities, internships, collaborations, and meaningful conversations.
        </p>
        <p className="contact-text reveal">
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="contact-list reveal">

          {contacts.map((item, index) => (

            item.link ? (

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                key={index}
              >

                <div className="contact-icon">
                  {item.icon}
                </div>

                <div className="contact-info">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>

              </a>

            ) : (

              <div className="contact-card" key={index}>

                <div className="contact-icon">
                  {item.icon}
                </div>

                <div className="contact-info">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>

              </div>

            )

          ))}

        </div>

      </div>

    </section>
  );
}

export default Contact;