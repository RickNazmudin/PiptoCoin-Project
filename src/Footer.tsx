import { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import {
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { db } from "./firebase";

export const VisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const docRef = doc(db, "visitorCount", "count");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };

    fetchVisitorCount();
  }, []);

  return count !== null ? (
    <Typography
      variant="body2"
      sx={{
        color: "#87CEFA",
        fontWeight: "bold",
      }}
    >
      Total Visitors: {count}
    </Typography>
  ) : null;
};

const Footer = () => {
  const socialLinks = [
    {
      icon: <TwitterIcon />,
      color: "#1DA1F2",
      link: "https://twitter.com/piptocoin",
    },
    {
      icon: <TelegramIcon />,
      color: "#0088cc",
      link: "https://t.me/piptocoin",
    },
    {
      icon: <GitHubIcon />,
      color: "#333",
      link: "https://github.com/piptocoin",
    },
  ];

  return (
    <Box
      sx={{
        background: "rgba(30, 40, 60, 0.5)",
        py: 4,
        mt: "auto",
        borderTop: "1px solid rgba(135, 202, 250, 0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#87CEFA",
                mb: 1,
              }}
            >
              Pipto Coin
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#E0E0E0",
                opacity: 0.8,
              }}
            >
              Embrace the fall, share the laugh
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  sx={{
                    color: social.color,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <VisitorCount />
            <Typography
              variant="body2"
              sx={{
                color: "#E0E0E0",
                mt: 1,
              }}
            >
              © 2024 Pipto Coin. All Rights Reserved.
            </Typography>
            <a
              href="/impressum"
              style={{
                color: "#87CEFA",
                textDecoration: "none",
                fontSize: "0.8rem",
                marginTop: "0.5rem",
                display: "block",
              }}
            >
              Disclaimer & Privacy Policy
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
