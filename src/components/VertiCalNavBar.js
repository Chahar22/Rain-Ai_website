import React from "react";
import CustomLogo from "../assets/images/logo.svg";
import Hidden from "@mui/material/Hidden";
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

const VertiCalNavBar = ({ isOpen, onClose, toggleSideButton }) => {
  return (
    <Drawer open={isOpen} onClose={onClose} anchor="top">
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F0F0F0", // Add transition for width
        }}
      >
       
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {/* Show the menu icon on the left */}
        
          <IconButton
            size="large"
            edge="start"
            style={{ color: "#0074e4" }}
            aria-label="menu"
            onClick={toggleSideButton}
          >
             <CustomCloseIcon />
          </IconButton>
        
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
       
         </Toolbar>
    </AppBar>
        
       
        {/* Center the logo on small screens */}

        <List style={{ textAlign: "right" }}>
          <ListItem button style={{ marginTop: "3%" }}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Careers" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Learn More" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Box>
    </Drawer>
  );
};

export default VertiCalNavBar;
