import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./NavigationBar.css";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const linkVariants = {
    hover: { scale: 1.1, color: "#87CEFA" },
  };

  return (
    <div>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              marginTop: isMobile ? "0.5rem" : 0,
              marginBottom: isMobile ? "0.5rem" : 0,
              marginRight: isMobile ? "0" : "auto",
            }}
          >
            <Tooltip title="GitHub">
              <GitHub
                onClick={() =>
                  window.open("https://github.com/SitiNurAisahJ", "_blank")
                }
                sx={{
                  color: "#87CEFA",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2rem" : "2.25rem",
                  height: isMobile ? "2rem" : "2.25rem",
                  marginLeft: isMobile ? "1rem" : "-1.5rem",
                  marginRight: isMobile ? "1rem" : "1.5rem",
                }}
              />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <LinkedIn
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/siti-nur-aisah-b7a6a9229/",
                    "_blank"
                  )
                }
                sx={{
                  color: "#87CEFA",
                  cursor: "pointer",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  width: isMobile ? "2.4rem" : "2.6rem",
                  height: isMobile ? "2.4rem" : "2.6rem",
                }}
              />
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", gap: "0.8rem" }}>
            <motion.a
              href="/"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              About
            </motion.a>
            <motion.a
              href="/features"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Features
            </motion.a>
            <motion.a
              href="/Tokenomics"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Tokenomics
            </motion.a>
            <motion.a
              href="/Roadmap"
              variants={linkVariants}
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
            >
              Roadmap
            </motion.a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
