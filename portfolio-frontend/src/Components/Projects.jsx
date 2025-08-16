import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  const accentColor = "#00e5ff"; // bright cyan
  const darkBg = "#0a192f";
  const cardBg = "#112240";

  const projects = [
    {
      title: "Roamify",
      description:
        "AI-powered full-stack travel & hospitality platform with itinerary planning, image recommendations, and smart trip management.",
      image: "Screenshot 2025-08-14 180533.png",
      tech: ["React", "Node.js", "MongoDB", "Gemini API"],
      demoLink: "https://raomify.onrender.com",
      githubLink: "https://github.com/PiyushNagose/Roamify",
    },
    {
      title: "NowCall",
      description:
        "Real-time video calling and messaging web app with WebRTC, Socket.io, screen sharing, and multi-user support.",
      image: "Screenshot 2025-08-14 181008.png",
      tech: ["React", "Node.js", "WebRTC", "Socket.io"],
      demoLink: "https://now-video-call-frontend.onrender.com",
      githubLink: "https://github.com/PiyushNagose/Now-Video-Call",
    },
    {
      title: "Bulloro",
      description:
        "Full-stack stock trading & portfolio management platform with buy/sell functionality, real-time tracking, and order management.",
      image: "Screenshot 2025-08-14 181151.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://bulloro-frontend.onrender.com",
      githubLink: "https://github.com/PiyushNagose/Bulloro-Trading-Platform",
    },
    {
      title: "Commitra",
      description:
        "Managed code versions, collaboration, and project history using Git and GitHub for all development projects.",
      image: "Screenshot 2025-08-16 100646.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "AWS S3 Bucket"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      data-aos="zoom-out-up"
      style={{
        padding: "90px 0",
        background: darkBg,
        scrollMarginTop: "80px",
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: accentColor,
              fontWeight: "bold",
              marginBottom: "50px",
              letterSpacing: "1px",
              textShadow: `0 0 15px ${accentColor}55`,
            }}
          >
            Projects
          </Typography>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: `0 0 20px ${accentColor}66`,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  sx={{
                    background: cardBg,
                    border: `1px solid ${accentColor}33`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: accentColor,
                      boxShadow: `0 0 25px ${accentColor}66`,
                    },
                  }}
                >
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </motion.div>

                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#ccd6f6",
                        fontWeight: "bold",
                        textShadow: `0 0 5px ${accentColor}33`,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#8892b0",
                        margin: "10px 0 15px",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "15px",
                      }}
                    >
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          sx={{
                            borderColor: `${accentColor}88`,
                            color: accentColor,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        href={project.demoLink}
                        target="_blank"
                        sx={{
                          borderColor: accentColor,
                          color: accentColor,
                          "&:hover": {
                            background: `${accentColor}22`,
                            borderColor: accentColor,
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        href={project.githubLink}
                        target="_blank"
                        sx={{
                          borderColor: accentColor,
                          color: accentColor,
                          "&:hover": {
                            background: `${accentColor}22`,
                            borderColor: accentColor,
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
}
