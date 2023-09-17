import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Input,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Hidden from "@mui/material/Hidden";
import CustomLogo from "../assets/images/logo.svg";
import VertiCalNavBar from "./VertiCalNavBar.js";
import "./app.css";

export const CustomMenuIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="2" y1="10" x2="30" y2="10" stroke="#0074e4" strokeWidth="2" />
    <line x1="2" y1="20" x2="30" y2="20" stroke="#0074e4" strokeWidth="2" />
    <line x1="2" y1="30" x2="30" y2="30" stroke="#0074e4" strokeWidth="2" />
  </svg>
);

export const CustomCloseIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="30" x2="25" y2="10" stroke="#0074e4" strokeWidth="2" />
    <line x1="5" y1="10" x2="25" y2="30" stroke="#0074e4" strokeWidth="2" />
  </svg>
);

const Header = () => {
  const [showDrawer, setshowDrawer] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for tracking MenuIcon state

  const toggleSideButton = () => {
    setshowDrawer(!showDrawer);
    setIsMenuOpen(!isMenuOpen); // Toggle the MenuIcon state
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* Show the menu icon on the left */}
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            style={{ color: "#0074e4" }}
            aria-label="menu"
            onClick={toggleSideButton}
          >
            {isMenuOpen ? <CustomCloseIcon /> : <CustomMenuIcon />}
          </IconButton>
        </Hidden>

        {/* Show the logo on the left for medium and large screens */}
        <Hidden mdDown>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            <img
              src={CustomLogo}
              alt="Custom Logo"
              style={{ height: "80px" }}
            />
          </Typography>
        </Hidden>

        {/* Center the logo on small screens */}
        <Hidden mdUp>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <img
              src={CustomLogo}
              alt="Custom Logo"
              style={{ height: "80px" }}
            />
          </Typography>
        </Hidden>

        {/* Show navigation links on medium and larger screens */}
        <Hidden mdDown>
          {/* Add the search bar */}
          <Input
            placeholder="Search"
            startAdornment={
              // Add the SearchIcon as a start adornment
              <InputAdornment position="right">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{ width: "30%" }} // Adjust the width as needed
          />

          <Typography component="div" sx={{ flexGrow: 1, textAlign: "right" }}>
            <Button className="custom-button">About Us</Button>
            <Button className="custom-button">Careers</Button>
            <Button className="custom-button">Blog</Button>
            <Button className="custom-button">Learn More</Button>
          </Typography>
        </Hidden>

        {/* Show the button under the menu icon when clicked */}
        {showDrawer && (
          <VertiCalNavBar
            isOpen={isMenuOpen}
            onClose={!isMenuOpen}
            toggleSideButton={toggleSideButton}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

