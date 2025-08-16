import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ResumeSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  const darkBg = "#0a192f";
  const cardBg = "#112240";
  const accentColor = "#ffb703"; // same as Contact button

  const highlights = [
    {
      title: "Education",
      content: "B.Tech in CSE, Shri Ram Institute | CGPA 8.5",
    },
    {
      title: "Technical Skills",
      content: "MERN Stack, Python, Git, WebRTC, Socket.io",
    },
    {
      title: "Key Projects",
      content:
        "Roamify (AI Travel Planner), NowCall (Video Chat), Bulloro (Stock Platform)",
    },
  ];

  return (
    <motion.section
      id="resume"
      data-aos="fade-zoom-in"
      style={{
        padding: "90px 0",
        background: darkBg,
        scrollMarginTop: "80px",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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
              color: "#00f6ff",
              fontWeight: "bold",
              fontSize: "2.7rem",
              marginBottom: "50px",
              letterSpacing: "1px",
              textShadow: `0 0 15px #00f6ff55`,
            }}
          >
            Resume Highlights
          </Typography>
        </motion.div>

        <Row className="mb-4">
          {highlights.map((item, index) => (
            <Col md={12} lg={4} className="mb-4 d-flex" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 20px #00f6ff66`,
                  transition: { duration: 0.3 },
                }}
                className="flex-fill"
              >
                <Card
                  sx={{
                    background: cardBg,
                    // marginTop: "1rem",
                    border: `1px solid #00f6ff33`,
                    borderRadius: "16px",
                    padding: "15px",
                    height: "100%", 
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ccd6f6",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#8892b0" }}>
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <Button
            href="/Piyush_Nagose_Resume.pdf"
            download
            variant="contained"
            sx={{
              fontWeight: 600,
              backgroundColor: accentColor,
              borderRadius: "0.75rem",
              color: "#000",
              "&:hover": {
                backgroundColor: "#ffaa00",
                boxShadow: `0 0 20px ${accentColor}`,
              },
              padding: "8px 15px",
              fontSize: "0.85rem",
              transition: "all 0.3s ease",
              marginTop: "20px",
            }}
          >
            View Resume
          </Button>
        </motion.div>
      </Container>
    </motion.section>
  );
}
