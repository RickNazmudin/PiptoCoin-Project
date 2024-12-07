import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

// Define interface for roadmap data
interface RoadmapDataPoint {
  month: number;
  progress: number;
  phase: string;
  description: string;
}

// Custom Milestone Tooltip with proper typing
const MilestoneTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as RoadmapDataPoint;
    return (
      <Box
        sx={{
          background: "rgba(30, 40, 60, 0.9)",
          border: "1px solid #87CEFA",
          borderRadius: 2,
          p: 2,
          color: "white",
        }}
      >
        <Typography variant="h6" sx={{ color: "#87CEFA", mb: 1 }}>
          {data.phase}
        </Typography>
        <Typography variant="body2">
          {data.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </Box>
    );
  }
  return null;
};

const CryptoRoadmap: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Roadmap data with progress points
  const roadmapData: RoadmapDataPoint[] = [
    {
      month: 0,
      progress: 10,
      phase: "Phase 1: Launch",
      description:
        "Smart Contract Deployment on Binance Smart Chain\nOfficial Website Launch\nInitial Meme & Giveaway Contests",
    },
    {
      month: 3,
      progress: 40,
      phase: "Phase 2 : Community Development",
      description:
        "Influencer Collaborations\nFundraising Campaigns\nDEX Listings on PancakeSwap & Uniswap",
    },
    {
      month: 6,
      progress: 70,
      phase: "Phase 3 : Expansion Phase",
      description:
        "Humanitarian Partnerships\nTransparency Tool Development\nCentralized Exchange Listings",
    },
    {
      month: 12,
      progress: 100,
      phase: " Phase 4 : Global Scaling",
      description:
        "International Partnerships\nAdvanced Donation Platforms\nGlobal Community Engagement",
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
          Project Roadmap
        </Typography>

        {/* Cryptocurrency-style Chart */}
        <Box
          sx={{
            width: "100%",
            height: isMobile ? 300 : 400,
            background: "rgba(30, 40, 60, 0.5)",
            borderRadius: 2,
            p: 2,
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
              <XAxis
                dataKey="month"
                label={{
                  value: "Months",
                  position: "insideBottom",
                  offset: -10,
                  fill: "#87CEFA",
                }}
                stroke="#87CEFA"
              />
              <YAxis
                label={{
                  value: "Progress %",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#87CEFA",
                }}
                stroke="#87CEFA"
              />
              <Tooltip
                content={<MilestoneTooltip />}
                cursor={{ stroke: "#87CEFA", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#87CEFA"
                activeDot={{
                  r: 8,
                  style: {
                    fill: "rgba(135, 202, 250, 0.7)",
                    stroke: "#87CEFA",
                  },
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Additional Context */}
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
            Our roadmap represents the progressive journey of our project, with
            key milestones mapped against time and development progress.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ mt: 30 }}>
        {" "}
        {/* Added margin-top to create space above footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default CryptoRoadmap;
