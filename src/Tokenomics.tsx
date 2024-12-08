import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Icons
import CharityIcon from "@mui/icons-material/VolunteerActivism";
import LiquidityIcon from "@mui/icons-material/AccountBalance";
import CommunityIcon from "@mui/icons-material/Group";
import DevelopmentIcon from "@mui/icons-material/Build";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

// Custom Tooltip for Pie Chart
const TokenomicsTooltip: React.FC<{
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    percentage: number;
    description: string;
  }[];
}> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <Box
        sx={{
          background: "rgba(30, 40, 60, 0.9)",
          border: "1px solid #87CEFA",
          borderRadius: 2,
          p: 2,
          color: "white",
          maxWidth: 300,
        }}
      >
        <Typography variant="h6" sx={{ color: "#87CEFA", mb: 1 }}>
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {data.value}M PIP ({data.percentage}%)
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {data.description}
        </Typography>
      </Box>
    );
  }
  return null;
};

const PiptoCoinTokenomics: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Tokenomics data
  const tokenomicsData = [
    {
      name: "Humanitarian Causes",
      value: 185,
      percentage: 50,
      icon: <CharityIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#10B981", // Emerald green
      description:
        "Direct donations to non-profit organizations, global and local community support.",
    },
    {
      name: "Liquidity & DEX",
      value: 111,
      percentage: 30,
      icon: <LiquidityIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#3B82F6", // Blue
      description:
        "Providing liquidity on decentralized exchanges like PancakeSwap and Uniswap.",
    },
    {
      name: "Community Rewards",
      value: 37,
      percentage: 10,
      icon: <CommunityIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#8B5CF6", // Purple
      description:
        "Giveaways, creative content rewards, and community engagement initiatives.",
    },
    {
      name: "Development",
      value: 37,
      percentage: 10,
      icon: <DevelopmentIcon sx={{ color: "#87CEFA", fontSize: 40 }} />,
      color: "#F43F5E", // Rose
      description:
        "Platform development, operational costs, and future innovation.",
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
      <Container maxWidth="lg">
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
          Pipto Coin Tokenomics
        </Typography>

        {/* Philosophical Introduction */}
        <Box sx={{ textAlign: "center", mb: 4, px: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "#E0E0E0", maxWidth: 800, margin: "0 auto" }}
          >
            "Life is about falling, laughing, and sharing" - This philosophy
            drives our unique tokenomics, where every token represents not just
            financial value, but a commitment to human connection and support.
          </Typography>
        </Box>

        {/* Total Supply Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <MonetizationOnIcon
            sx={{
              color: "#87CEFA",
              fontSize: 40,
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "#E0E0E0",
              fontWeight: 500,
            }}
          >
            Total Supply: <strong>370 Million PIP</strong>
          </Typography>
        </Box>

        {/* Tokenomics Visualization */}
        <Grid container spacing={4}>
          {/* Pie Chart */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: 400,
                background: "rgba(30, 40, 60, 0.5)",
                borderRadius: 2,
                p: 2,
                border: "1px solid rgba(135, 202, 250, 0.2)",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={isMobile ? 80 : 120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tokenomicsData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.color}
                        style={{
                          filter:
                            "drop-shadow(0 0 5px rgba(135, 202, 250, 0.3))",
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<TokenomicsTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          {/* Detailed Breakdown */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {tokenomicsData.map((item) => (
                <Grid item xs={12} key={item.name}>
                  <Box
                    sx={{
                      background: "rgba(30, 40, 60, 0.5)",
                      borderRadius: 2,
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      border: `1px solid ${item.color}`,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    {item.icon}
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: item.color,
                          mb: 0.5,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#E0E0E0",
                          mb: 0.5,
                        }}
                      >
                        {item.value}M PIP ({item.percentage}%)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#E0E0E0",
                          opacity: 0.7,
                          fontSize: "0.75rem",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Additional Tokenomics Context */}
        <Box sx={{ mt: 4, textAlign: "center", px: 4 }}>
          <Typography variant="h5" sx={{ color: "#87CEFA", mb: 2 }}>
            Our Unique Approach
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#E0E0E0", maxWidth: 800, margin: "0 auto" }}
          >
            Pipto Coin isn't just another cryptocurrency. It's a movement that
            transforms financial interactions into opportunities for humor,
            resilience, and collective support. Every token tells a story of
            falling, laughing, and rising together.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PiptoCoinTokenomics;
