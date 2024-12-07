import { Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";

const PiptoCoinInfo = () => {
  return (
    <Box className="impressum" p={3}>
      <NavigationBar />
      <Typography variant="h2" gutterBottom>
        Pipto Coin Identity
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Token Name:</strong> Pipto Coin
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Token Symbol:</strong> PIP
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Slogan:</strong> "Because life is about falling, laughing, and
        sharing."
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Logo:</strong> A circular design featuring an illustration of a
        person about to fall while laughing, carrying a bag with a heart symbol
        (representing humanity). Simple cartoon style.
      </Typography>
      <Typography variant="h3" gutterBottom>
        Narrative and Philosophy
      </Typography>
      <Typography variant="body1" paragraph>
        Pipto Coin is a token that satirizes the transience of life. Every human
        inevitably "falls," both literally and metaphorically. But instead of
        complaining, we choose to laugh about it and help others who also
        "fall."
      </Typography>
      <Typography variant="h3" gutterBottom>
        Tokenomics
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Total Supply:</strong> 370 million PIP
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Distribution:</strong>
        <ul>
          <li>50% (185 million): For humanitarian donations.</li>
          <li>
            30% (111 million): Liquidity and listing on DEX like
            PancakeSwap/Uniswap.
          </li>
          <li>
            10% (37 million): Community (giveaways, rewards for creative
            content, etc.).
          </li>
          <li>10% (37 million): Platform development and operational costs.</li>
        </ul>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Communication Style
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Quirky Humor:</strong> Every social media post and communication
        uses memes, satirical jokes about falling, and humorous calls to share.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Examples:</strong>
        <ul>
          <li>
            "Have you fallen and been hit by Pipto? No worries, laugh with us
            while sharing!"
          </li>
          <li>"Pipto Coin: A token that falls, but only to uplift others."</li>
        </ul>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Roadmap
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Phase 1:</strong> Launch (0-3 Months)
        <ul>
          <li>
            Smart Contract: Deploy on Binance Smart Chain (BSC) for cost
            efficiency.
          </li>
          <li>
            Official Website: A fun and light landing page with a dashboard to
            track donations and community activities.
          </li>
          <li>
            Meme Contest Giveaway: A competition to create memes themed around
            falling or the transience of life.
          </li>
        </ul>
        <strong>Phase 2:</strong> Community Development (3-6 Months)
        <ul>
          <li>
            Collaboration campaigns with comedy influencers and meme creators.
          </li>
          <li>
            Token-based fundraising for social actions like disaster relief or
            humanitarian issues.
          </li>
          <li>List on DEX like PancakeSwap/Uniswap.</li>
        </ul>
        <strong>Phase 3:</strong> Expansion (6-12 Months)
        <ul>
          <li>
            Partnerships with major organizations like UNICEF, Red Cross, etc.
          </li>
          <li>Develop a mini-application for donation proof (transparency).</li>
          <li>List on CEX (Centralized Exchange) like Binance or Gate.io.</li>
        </ul>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Unique Features
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Donation Transparency:</strong> Public dashboard to see the flow
        of funds from the donation wallet.
        <br />
        <strong>Community Voting:</strong> To determine the next donation
        target.
        <br />
        <strong>Pipto Staking:</strong> Users can stake tokens to earn small
        rewards, but the staking results are used for direct donations.
        <br />
        <strong>Funny NFTs:</strong> Each large donation will receive a unique
        NFT featuring humorous illustrations about falling and rising.
      </Typography>
    </Box>
  );
};

export default PiptoCoinInfo;
