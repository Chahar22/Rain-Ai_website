import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Follow Us</Typography>
          <IconButton color="primary" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton color="primary" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton color="primary" aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary" aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton color="primary" aria-label="YouTube">
            <YouTube />
          </IconButton>
        </Grid>
        
      </Container>
    </footer>
  );
};

export default Footer;
