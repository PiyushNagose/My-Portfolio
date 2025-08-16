import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import axios from "axios";

const accentColor = "#ffb703";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://my-portfolio-backend-x15a.onrender.com/contact",
        formData
      );
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      data-aos="zoom-out-down"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: "#0a192f",
        color: "#fff",
        padding: "100px 0",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: "center",
                marginBottom: "50px",
                color: "#00f6ff",
                fontSize: "2.8rem",
                fontWeight: "700",
                letterSpacing: "1px",
                textShadow: `0 0 15px #00f6ff55, 0 0 30px #00f6ff33`,
              }}
            >
              Contact Me
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#00f6ff" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#1e2a47",
                    borderRadius: "5px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ style: { color: "#00f6ff" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#1e2a47",
                    borderRadius: "5px",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={5}
                required
                InputLabelProps={{ style: { color: "#00f6ff" } }}
                InputProps={{
                  style: {
                    color: "#fff",
                    backgroundColor: "#1e2a47",
                    borderRadius: "5px",
                  },
                }}
              />

              {error && (
                <p style={{ color: "#ff4c4c", marginTop: "10px" }}>{error}</p>
              )}
              {success && (
                <p style={{ color: "#00ff9c", marginTop: "10px" }}>
                  Message sent successfully!
                </p>
              )}

              <Button
                type="submit"
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
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}
