import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

// Icons
import LaunchIcon from "@mui/icons-material/RocketLaunch";
import CommunityIcon from "@mui/icons-material/Group";
import ExpansionIcon from "@mui/icons-material/Public";
import ScaleIcon from "@mui/icons-material/Language";

const PiptoCoinRoadmap: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Roadmap data with detailed information
  const roadmapData = [
    {
      month: 0,
      progress: 10,
      phase: "Launch Phase (0-3 Months)",
      icon: <LaunchIcon />,
      color: "#10B981", // Emerald green
      keyActivities: [
        "Smart Contract Deployment on Binance Smart Chain",
        "Official Website Launch",
        "Inaugural Meme & Giveaway Contests",
        "Initial Community Building",
        "Humorous Brand Positioning",
      ],
    },
    {
      month: 3,
      progress: 40,
      phase: "Community Development (3-6 Months)",
      icon: <CommunityIcon />,
      color: "#3B82F6", // Blue
      keyActivities: [
        "Influencer Collaborations",
        "Social Media Meme Challenges",
        "DEX Listings (PancakeSwap, Uniswap)",
        "Initial Fundraising Campaigns",
        "Engaging Community Reward Programs",
      ],
    },
    {
      month: 6,
      progress: 70,
      phase: "Expansion Phase (6-12 Months)",
      icon: <ExpansionIcon />,
      color: "#8B5CF6", // Purple
      keyActivities: [
        "Partnerships with Humanitarian Organizations",
        "Donation Transparency Tool Development",
        "Centralized Exchange Listings",
        "Global Cause-driven Initiatives",
        "Advanced Community Engagement Strategies",
      ],
    },
    {
      month: 12,
      progress: 100,
      phase: "Global Scaling (12+ Months)",
      icon: <ScaleIcon />,
      color: "#F43F5E", // Rose
      keyActivities: [
        "International Humanitarian Partnerships",
        "Advanced Donation Platforms",
        "Global Community Network Expansion",
        "Multi-language Community Support",
        "Continued Humor-driven Social Impact",
      ],
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
          Pipto Coin Roadmap
        </Typography>

        {/* Philosophical Introduction */}
        <Box sx={{ textAlign: "center", mb: 4, px: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "#E0E0E0", maxWidth: 800, margin: "0 auto" }}
          >
            "Life is about falling, laughing, and sharing" - Our roadmap isn't
            just a timeline, it's a journey of transformation, humor, and
            collective impact.
          </Typography>
        </Box>

        {/* Progress Chart */}
        <Box
          sx={{
            width: "100%",
            height: isMobile ? 300 : 400,
            background: "rgba(30, 40, 60, 0.5)",
            borderRadius: 2,
            p: 2,
            mb: 4,
            border: "1px solid rgba(135, 202, 250, 0.2)",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={roadmapData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(135, 202, 250, 0.1)"
              />
              <XAxis dataKey="month" stroke="#87CEFA" />
              <YAxis stroke="#87CEFA" />
              <Tooltip
                contentStyle={{
                  background: "rgba(30, 40, 60, 0.9)",
                  border: "1px solid #87CEFA",
                }}
                itemStyle={{ color: "#E0E0E0" }}
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#87CEFA"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Detailed Timeline */}
        <Timeline position="alternate">
          {roadmapData.map((phase, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: phase.color,
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {phase.icon}
                </TimelineDot>
                {index < roadmapData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    bgcolor: "rgba(30, 40, 60, 0.7)",
                    color: "white",
                    border: `1px solid ${phase.color}`,
                  }}
                >
                  <Typography variant="h6" sx={{ color: phase.color }}>
                    {phase.phase}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {phase.keyActivities.map((activity, actIndex) => (
                      <Typography
                        key={actIndex}
                        variant="body2"
                        sx={{
                          mb: 0.5,
                          color: "#E0E0E0",
                          "&::before": {
                            content: '"• "',
                            color: phase.color,
                            fontWeight: "bold",
                            mr: 1,
                          },
                        }}
                      >
                        {activity}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Closing Statement */}
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
            color: "#E0E0E0",
            background: "rgba(30, 40, 60, 0.5)",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">
            Our roadmap is a living document, guided by community spirit, humor,
            and the belief that every token can make a difference.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PiptoCoinRoadmap;
