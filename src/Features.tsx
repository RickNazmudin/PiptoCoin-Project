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
import LaughIcon from "@mui/icons-material/SentimentSatisfiedAlt";

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

const PiptoCoinFeatures: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const featuresData = [
    {
      title: "Transparent Donations",
      descriptions: [
        "50% of total supply (185M PIP) dedicated to humanitarian causes.",
        "Public dashboard tracking donation flows and community voting.",
      ],
      icon: <MonetizationOnIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#10B981", // Emerald green
    },
    {
      title: "Purpose-Driven Staking",
      descriptions: [
        "Staking rewards directly support social impact initiatives.",
        "Unique staking model where earnings contribute to donations.",
      ],
      icon: <StakingIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#3B82F6", // Blue
    },
    {
      title: "Humorous NFT Rewards",
      descriptions: [
        "Limited edition NFTs celebrating resilience and humor.",
        "Unique digital art for significant contributors.",
      ],
      icon: <NftIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#8B5CF6", // Purple
    },
    {
      title: "Meme Community Culture",
      descriptions: [
        "Comedy-driven social media challenges and giveaways.",
        "Engaging community through humor and shared experiences.",
      ],
      icon: <CommunityIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#F43F5E", // Rose
    },
    {
      title: "Philosophical Humor",
      descriptions: [
        '"Falling is part of life" - turning challenges into shared laughter.',
        'Slogan: "Because life is about falling, laughing, and sharing."',
      ],
      icon: <LaughIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#FFA500", // Orange
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
          Pipto Coin Features
        </Typography>

        <Grid container spacing={4}>
          {featuresData.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <FeatureItem {...feature} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ color: "#87CEFA", mb: 2 }}>
            Tokenomics Overview
          </Typography>
          <Typography variant="body1" sx={{ color: "#E0E0E0" }}>
            Total Supply: 370 Million PIP
            <br />
            Donation Allocation: 50% (185M PIP)
            <br />
            Liquidity: 30% (111M PIP)
            <br />
            Community & Development: 20% (74M PIP)
          </Typography>
        </Box>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PiptoCoinFeatures;
