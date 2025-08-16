import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"; // Added Resume Icon
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  const accentColor = "#ffb703";

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/PiyushNagose" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/piyush-nagose/",
    },
    { icon: <FaFileAlt />, link: "#resume" }, // Resume Section Link
    { icon: <FaEnvelope />, link: "mailto:piyushnagose204@gmail.com" },
  ];

  return (
    <motion.section
      id="home"
      data-aos="fade-up"
      style={{
        background: "linear-gradient(-45deg, #0a192f, #0a192f)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        color: "#fff",
        padding: "120px 0 100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .social-icon {
            font-size: 1.6rem;
            margin-right: 15px;
            color: #64ffda;
            transition: transform 0.3s, color 0.3s;
          }
          .social-icon:hover {
            transform: translateY(-5px) scale(1.2);
            color: ${accentColor};
          }
        `}
      </style>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col md={6}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                lineHeight: "1.2",
              }}
            >
              Hi, I'm{" "}
              <motion.span
                style={{
                  color: accentColor,
                  textShadow: `0 0 10px ${accentColor}55`,
                }}
                animate={{
                  textShadow: [
                    `0 0 10px ${accentColor}55`,
                    `0 0 20px ${accentColor}`,
                    `0 0 10px ${accentColor}55`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Piyush Nagose
              </motion.span>
            </motion.h1>
            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                fontSize: "1.4rem",
                margin: "15px 0",
                color: "#64ffda",
                fontWeight: 500,
              }}
            >
              <ReactTyped
                strings={[
                  "Full-Stack Developer",
                  "MERN Stack Dev",
                  "DSA Enthusiast",
                  "AI And ML Explorer",
                  "React And Node.js Developer",
                  "Open-Source Contributor",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </motion.div>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              style={{
                fontSize: "1.1rem",
                margin: "20px 0 20px",
                color: "#ccd6f6",
              }}
            >
              Passionate about building modern and responsive web applications
              with clean and user-friendly designs.
            </motion.p>
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              style={{ marginBottom: "20px" }}
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  style={{ marginRight: "2rem" }}
                  href={item.link}
                  target={item.link.startsWith("#") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                variant="contained"
                sx={{
                  fontWeight: 600,
                  backgroundColor: accentColor,
                  borderRadius: "0.75rem",
                  color: "#000",
                  marginTop: "0.75rem",
                  "&:hover": {
                    backgroundColor: "#ffaa00",
                    boxShadow: "0 0 20px ${accentColor}",
                  },
                  padding: "10px 20px",
                  fontSize: "0.85rem",
                  transition: "all 0.3s ease",
                }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </motion.div>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="text-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
              transitionSpeed={2500}
              gyroscope={true}
            >
              <motion.img
                src="\Piyush_photo.jpg"
                alt="Profile"
                className="img-fluid"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 0 50px ${accentColor}99, 0 10px 30px rgba(0,0,0,0.3)`,
                }}
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  border: `6px solid ${accentColor}`,
                  padding: "5px",
                  background: "#112240",
                  boxShadow: `0 0 30px ${accentColor}55, 0 15px 30px rgba(0,0,0,0.25)`,
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}
