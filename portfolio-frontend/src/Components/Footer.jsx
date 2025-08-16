import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const accentColor = "#00f6ff";

export default function Footer() {
  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a192f, #1f2a47, #0d1b2a)",
        color: "#fff",
        padding: "50px 0",
        boxShadow: "0 -5px 20px rgba(0,0,0,0.5)",
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      <Container>
        <Row className="justify-content-between">
          {/* About / Name */}
          <Col md={4} style={{ marginBottom: "20px" }}>
            <h3
              style={{
                color: accentColor,
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "15px",
              }}
            >
              Piyush Nagose
            </h3>
            <p style={{ color: "#cfd8dc" }}>
              Full-Stack Developer | MERN Stack | DSA Enthusiast
            </p>
          </Col>

          {/* Links */}
          <Col md={4} style={{ marginBottom: "20px" }}>
            <h5 style={{ color: accentColor, marginBottom: "15px" }}>Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["home", "projects", "skills", "contact"].map((section) => (
                <li key={section} style={{ marginBottom: "10px" }}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScroll(e, section)}
                    style={{
                      color: "#cfd8dc",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = accentColor)}
                    onMouseLeave={(e) => (e.target.style.color = "#cfd8dc")}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social / Contact */}
          <Col md={4} style={{ marginBottom: "20px" }}>
            <h5 style={{ color: accentColor, marginBottom: "15px" }}>
              Contact & Social
            </h5>
            <div style={{ display: "flex", gap: "15px", fontSize: "1.4rem" }}>
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/PiyushNagose",
                  color: "#fff",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/piyush-nagose/",
                  color: "#0e76a8",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/piyushnagose22?igsh=MWpveW80ZWp6YndueQ==",
                  color: "#e4405f",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:piyushnagose204@gmail.com",
                  color: "#ffb703",
                },
              ].map(({ icon, link, color }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: color,
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.filter = `drop-shadow(0 0 15px ${accentColor})`)
                  }
                  onMouseLeave={(e) => (e.target.style.filter = "none")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "#2a3b5a" }} />

        <Row>
          <Col
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#b0bec5",
              fontSize: "0.9rem",
            }}
          >
            &copy; {new Date().getFullYear()} Piyush Nagose. All rights
            reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
