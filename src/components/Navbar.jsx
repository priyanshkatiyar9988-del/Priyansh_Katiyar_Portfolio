import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "education",
        "skills",
        "certification",
        "contact",
      ];

      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const top = el.getBoundingClientRect().top;

          if (top <= 250) {
            current = id;
          }
        }
      });

      setActive(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-box">PK</span>
      </div>

      <div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
    {menuOpen && (
  <div
    className="menu-overlay"
    onClick={() => setMenuOpen(false)}
  />
)}

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className={active === "about" ? "active" : ""}>
          <a href="#about">ABOUT</a>
        </li>

        <li className={active === "projects" ? "active" : ""}>
          <a href="#projects">PROJECTS</a>
        </li>

        <li className={active === "education" ? "active" : ""}>
          <a href="#education">EDUCATION</a>
        </li>

        <li className={active === "skills" ? "active" : ""}>
          <a href="#skills">SKILLS</a>
        </li>

        <li className={active === "certification" ? "active" : ""}>
          <a href="#certification">CERTIFICATES</a>
        </li>

        <li className={active === "contact" ? "active" : ""}>
          <a href="#contact">CONTACT</a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;