import { Container, Typography, Grid } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMui,
  SiExpress,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  // Languages
  {
    name: "C",
    icon: <SiC color="#A8B9CC" size={50} />,
    level: "Intermediate",
    glow: "#A8B9CC",
  },
  {
    name: "C++",
    icon: <SiCplusplus color="#00599C" size={50} />,
    level: "Intermediate",
    glow: "#00599C",
  },
  {
    name: "Core Java",
    icon: <FaJava color="#f89820" size={50} />,
    level: "Advanced",
    glow: "#f89820",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" size={50} />,
    level: "Advanced",
    glow: "#4479A1",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare color="#f7df1e" size={50} />,
    level: "Advanced",
    glow: "#f7df1e",
  },

  // Frontend
  {
    name: "HTML5",
    icon: <FaHtml5 color="#e34f26" size={50} />,
    level: "Expert",
    glow: "#e34f26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt color="#1572b6" size={50} />,
    level: "Expert",
    glow: "#1572b6",
  },
  {
    name: "React.js",
    icon: <FaReact color="#61dafb" size={50} />,
    level: "Advanced",
    glow: "#61dafb",
  },
  {
    name: "Redux",
    icon: <SiRedux color="#764abc" size={50} />,
    level: "Advanced",
    glow: "#764abc",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color="#7952b3" size={50} />,
    level: "Advanced",
    glow: "#7952b3",
  },
  {
    name: "Material UI",
    icon: <SiMui color="#007fff" size={50} />,
    level: "Advanced",
    glow: "#007fff",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss color="#38bdf8" size={50} />,
    level: "Advanced",
    glow: "#38bdf8",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs color="#68a063" size={50} />,
    level: "Advanced",
    glow: "#68a063",
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#ffffff" size={50} />,
    level: "Advanced",
    glow: "#ffffff",
  },

  // Database
  {
    name: "MongoDB",
    icon: <SiMongodb color="#4db33d" size={50} />,
    level: "Advanced",
    glow: "#4db33d",
  },
  {
    name: "Mongoose",
    icon: <SiMongodb color="#4db33d" size={50} />,
    level: "Advanced",
    glow: "#4db33d",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-aos="zoom-out-down"
      style={{ background: "#0a192f", padding: "80px 0" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#00e5ff",
            fontWeight: "700",
            fontSize: "2.8rem",
            letterSpacing: "1px",
            mb: 6,
            textShadow: `0 0 15px #64ffda55, 0 0 30px #64ffda33`,
          }}
        >
          Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${skill.glow}, 0 0 40px ${skill.glow}`,
                  borderColor: skill.glow,
                }}
                style={{
                  background: "#112240",
                  border: "2px solid rgba(100, 255, 218, 0.2)",
                  borderRadius: "16px",
                  padding: "30px 20px",
                  width: "200px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(2, 12, 27, 0.7)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {skill.icon}
                </motion.div>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {skill.level}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
