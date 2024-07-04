import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ background: "#7469B6" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User Details
        </Typography>
        <Link href="#" color="inherit" sx={{ mr: 2 }}>
          Home
        </Link>
        <Link href="#" color="inherit">
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
