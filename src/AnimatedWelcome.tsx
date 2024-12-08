import React from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Search } from "@mui/icons-material";
import Footer from "./Footer";

const AnimatedWelcome: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const text1 = "Hi!".split("");
  const text2 = "Crypto Enthusiast".split("");
  const text3 = "Pipto Coin".split(""); // Added text3
  const text4 =
    "is a satirical cryptocurrency designed to embrace the inevitability of life's stumbles. Built on the philosophy that every fall is an opportunity to laugh, grow, and support one another, Pipto Coin represents resilience and humor in the face of imperfection. This is not just a token it's a movement to rise together, one tumble at a time.".split(
      ""
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f1229 0%, #1E1E2F 100%)",
        minHeight: "100vh",
        py: 4,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth={isMobile ? "sm" : "lg"} sx={{ flex: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              {/* Animated Greeting */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#87CEFA",
                    mb: 2,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {text1.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>

              {/* Animated Crypto Enthusiast */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#87CEFA",
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {text2.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>

              {/* Animated Pipto Coin */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#FFD700", // Gold color for emphasis
                    mb: 2,
                    fontWeight: 600,
                    "&:hover": {
                      color: "#87CEFA", // Change to blue on hover
                    },
                  }}
                >
                  {text3.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 + index * 0.1 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>

              {/* Detailed Description */}
              <Box
                sx={{
                  background: "rgba(30, 40, 60, 0.5)",
                  borderRadius: 2,
                  p: 3,
                  boxShadow: 3,
                  mb: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#E0E0E0",
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  {text4.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.75 + index * 0.08 }} // Adjusted delay
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#87CEFA",
                    fontStyle: "italic",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  "Because life is about falling, laughing, and sharing"
                </Typography>
              </Box>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 0.5 }} // Adjusted delay
              >
                <Button
                  variant="contained"
                  startIcon={<Search />}
                  sx={{
                    backgroundColor: "#87CEFA",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: 4,
                    px: 4,
                    py: 2,
                    "&:hover": {
                      backgroundColor: "#FFD700",
                      boxShadow: "0 0 10px rgba(135, 202, 250, 0.5)",
                    },
                  }}
                  onClick={() => (window.location.href = "/roadmap")}
                >
                  Explore Roadmap
                </Button>
              </motion.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5, duration: 1.5 }} // Adjusted delay
              src="./logo_PIP.png"
              alt="Pipto Coin Logo"
              style={{
                zIndex: 1,
                userSelect: "none",
                height: "auto",
                width: isMobile ? "14rem" : "20rem",
                boxShadow: "0px 0px 15px rgba(135, 202, 250, 0.3)",
                borderRadius: "50%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ mt: 7 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default AnimatedWelcome;
