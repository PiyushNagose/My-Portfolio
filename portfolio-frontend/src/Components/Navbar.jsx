import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-scroll";

const accentColor = "#ffb703";

export default function Navbar() {
  const linkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -70,
    activeClass: "active-link",
  };

  const sections = ["home", "skills", "projects", "resume", "contact"]; // added resume

  return (
    <AppBar
      position="sticky"
      elevation={6}
      sx={{
        background: "linear-gradient(90deg, #0a192f, #1f2a47, #0d1b2a)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              fontSize: { xs: "1rem", md: "1.3rem" },
              letterSpacing: "1px",
              marginRight: "2rem",
              color: accentColor,
            }}
          >
            <img src="/PIYUSH NAGOSE.png" alt="logo" style={{width: "7%", marginRight: "0.75rem", borderRadius: "50%"}} />
            Portfolio
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section}
                sx={{
                  color: "#cfd8dc",
                  fontWeight: 500,
                  "&:hover": {
                    color: accentColor,
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Link to={section} {...linkProps}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <style>
        {`
          .active-link {
            color: ${accentColor} !important;
            border-bottom: 2px solid ${accentColor};
          }
        `}
      </style>
    </AppBar>
  );
}
