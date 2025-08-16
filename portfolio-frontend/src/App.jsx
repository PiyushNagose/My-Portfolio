import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ResumeSection from "./Components/ResumeSection";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // smooth animation speed
      once: false, // animate every time it's in view
      offset: 100, // trigger slightly before visible
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ResumeSection />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
