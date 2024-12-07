import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

// Ikon
import LaughIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ResilienceIcon from "@mui/icons-material/Shield"; // Ganti ikon di sini
import HumorIcon from "@mui/icons-material/TagFaces";
import MissionIcon from "@mui/icons-material/EmojiEmotions";

const AboutItem = ({
  title,
  descriptions,
  icon,
  color,
}: {
  title: string;
  descriptions: string[];
  icon: React.ReactNode;
  color: string;
}) => (
  <Box
    sx={{
      background: "rgba(30, 40, 60, 0.5)",
      borderRadius: 2,
      p: 2,
      display: "flex",
      alignItems: "center",
      border: `1px solid ${color}`,
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.03)",
      },
    }}
  >
    {icon}
    <Box sx={{ ml: 2 }}>
      <Typography variant="h6" sx={{ color: color, mb: 0.5 }}>
        {title}
      </Typography>
      {descriptions.map((desc, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{ color: "#E0E0E0", opacity: 0.8 }}
        >
          {desc}
        </Typography>
      ))}
    </Box>
  </Box>
);

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const aboutData = [
    {
      title: "Embrace the Fall",
      descriptions: [
        "Transform life's unexpected moments into opportunities for growth.",
        "Celebrate imperfection and find humor in life's challenges.",
      ],
      icon: <LaughIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#10B981", // Emerald green
    },
    {
      title: "Community Resilience",
      descriptions: [
        "Build a supportive network that lifts each other up.",
        "Turn setbacks into stepping stones of collective strength.",
      ],
      icon: <ResilienceIcon sx={{ color: "#87CEFA", fontSize: 40 }} />, // Ikon baru
      color: "#3B82F6", // Blue
    },
    {
      title: "Humor as a Superpower",
      descriptions: [
        "Use laughter as a universal language of connection.",
        "Find joy and lightness in life's most challenging moments.",
      ],
      icon: <HumorIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#8B5CF6", // Purple
    },
    {
      title: "Our Mission",
      descriptions: [
        "Create a cryptocurrency that's more than just a financial asset.",
        "Spread positivity, empathy, and shared human experience.",
      ],
      icon: <MissionIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#F43F5E", // Rose
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f1229 0%, #1E1E2F 100%)",
        minHeight: "100vh",
        py: 4,
        color: "white",
      }}
    >
      <NavigationBar />
      <Container maxWidth={isMobile ? "sm" : "lg"}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#87CEFA",
            mb: 4,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          About Pipto Coin
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            maxWidth: "800px",
            margin: "0 auto",
            background: "rgba(30, 30, 47, 0.8)",
            borderRadius: 2,
            p: 3,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", lineHeight: 1.6, mb: 2 }}
          >
            Pipto Coin isn't just another cryptocurrency – it's a movement that
            transforms how we perceive life's challenges. Born from the
            understanding that everyone stumbles, we've created a digital
            ecosystem that celebrates resilience, promotes community support,
            and turns every fall into a moment of connection and growth.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#87CEFA", fontStyle: "italic", mb: 2 }}
          >
            "Because life is about falling, laughing, and sharing"
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {aboutData.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <AboutItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ mt: 30 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default About;
