import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  Backdrop,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Instagram, Twitter } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import "./NavigationBar.css";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkVariants = {
    hover: { scale: 1.1, color: "#87CEFA" },
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Tokenomics", href: "/Tokenomics" },
    { name: "Roadmap", href: "/Roadmap" },
  ];

  const renderNavLinks = (isMobileMenu = false) => {
    return navLinks.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        variants={linkVariants}
        whileHover="hover"
        className="nav-link"
        style={{
          fontSize: isMobile ? "1.2rem" : "1.4rem",
          ...(isMobileMenu && {
            display: "block",
            textAlign: "center",
            padding: "1rem",
            borderBottom: "1px solid #333",
          }),
        }}
        onClick={isMobile ? handleDrawerToggle : undefined}
      >
        {link.name}
      </motion.a>
    ));
  };

  const renderSocialIcons = () => (
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
          onClick={() => window.open("https://github.com/", "_blank")}
          sx={{
            color: "#87CEFA",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            width: isMobile ? "2rem" : "2.25rem",
            height: isMobile ? "2rem" : "2.25rem",
            marginLeft: isMobile ? "1rem" : "-1.5rem",
            marginRight: isMobile ? "0.5rem" : "1rem",
          }}
        />
      </Tooltip>
      <Tooltip title="Instagram">
        <Instagram
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
          sx={{
            color: "#87CEFA",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            width: isMobile ? "2.4rem" : "2.6rem",
            height: isMobile ? "2.4rem" : "2.6rem",
            marginRight: isMobile ? "0.5rem" : "1rem",
          }}
        />
      </Tooltip>
      <Tooltip title="Twitter (X)">
        <Twitter
          onClick={() => window.open("https://twitter.com/", "_blank")}
          sx={{
            color: "#87CEFA",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            width: isMobile ? "2.4rem" : "2.6rem",
            height: isMobile ? "2.4rem" : "2.6rem",
            marginRight: isMobile ? "0.5rem" : "1rem",
          }}
        />
      </Tooltip>
      <Tooltip title="TikTok">
        <FaTiktok
          onClick={() => window.open("https://www.tiktok.com/", "_blank")}
          style={{
            color: "#87CEFA",
            cursor: "pointer",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            width: isMobile ? "2.4rem" : "2.6rem",
            height: isMobile ? "2.4rem" : "2.6rem",
            marginRight: isMobile ? "0.5rem" : "1rem",
          }}
        />
      </Tooltip>
    </Box>
  );

  return (
    <div>
      <Backdrop
        sx={{
          zIndex: theme.zIndex.drawer - 1,
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Ultra-transparent black
          backdropFilter: "blur(2px)", // Lighter blur
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", // Smooth transition
        }}
        open={isMobile && mobileOpen}
        onClick={handleDrawerToggle}
      />
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
          zIndex: theme.zIndex.drawer + 1, // Ensure AppBar is above Backdrop
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "row" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isMobile ? "0.5rem 1rem" : "0.5rem 2rem",
          }}
        >
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: "#87CEFA" }}
              >
                <MenuIcon />
              </IconButton>
              {renderSocialIcons()}
            </>
          ) : (
            <>
              {renderSocialIcons()}
              <Box sx={{ display: "flex", gap: "0.8rem" }}>
                {renderNavLinks()}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "250px",
              backgroundColor: "#111111",
              color: "#87CEFA",
            },
          }}
        >
          <Box
            sx={{
              textAlign: "right",
              padding: "0.5rem",
            }}
          >
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#87CEFA" }}>
              <Close />
            </IconButton>
          </Box>
          <List>{renderNavLinks(true)}</List>
        </Drawer>
      )}
    </div>
  );
};

export default NavigationBar;
