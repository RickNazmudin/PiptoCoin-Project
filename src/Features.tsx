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

// Icons
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StakingIcon from "@mui/icons-material/AccountBalance";
import NftIcon from "@mui/icons-material/WorkspacePremium";
import CommunityIcon from "@mui/icons-material/Group";

const FeatureItem = ({
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
      <Typography
        variant="h6"
        sx={{
          color: color,
          mb: 0.5,
        }}
      >
        {title}
      </Typography>
      {descriptions.map((desc, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{
            color: "#E0E0E0",
            opacity: 0.8,
          }}
        >
          {desc}
        </Typography>
      ))}
    </Box>
  </Box>
);

const Features: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const featuresData = [
    {
      title: "Transparent Donations",
      descriptions: [
        "Real-time blockchain-verified donation tracking.",
        "Community-driven cause selection through decentralized voting.",
      ],
      icon: <MonetizationOnIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#10B981", // Emerald green
    },
    {
      title: "Purpose-Driven Staking",
      descriptions: [
        "Earn crypto rewards while directly supporting humanitarian causes.",
        "Sustainable staking model with social impact.",
      ],
      icon: <StakingIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#3B82F6", // Blue
    },
    {
      title: "Unique NFT Rewards",
      descriptions: [
        "Limited edition NFTs for significant contributors.",
        "Collectible digital art celebrating resilience and community.",
      ],
      icon: <NftIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#8B5CF6", // Purple
    },
    {
      title: "Crypto Community Culture",
      descriptions: [
        "Engaging meme contests and social media challenges.",
        "Building a vibrant, humorous crypto community.",
      ],
      icon: <CommunityIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
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
          Platform Features
        </Typography>

        <Grid container spacing={4}>
          {featuresData.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <FeatureItem {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ mt: 50 }}>
        {" "}
        {/* Added margin-top to create space above footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default Features;
