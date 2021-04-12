import React from "react";

// Material ui imports
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Images imports
import Logo from "../../assets/images/logo.png";

const styles = {
  container: {
    padding: "10px 0"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    marginLeft: "10px"
  }
};

const Header = ({ classes }) => {
  return (
    <AppBar
      position="static"
      color="transparent"
      height="200"
      className={classes.container}
    >
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <img src={Logo} height="100" alt="Healthy pizza" />
          <Typography variant="body1" color="inherit" className={classes.title}>
            Enjoy in your favourite food, make your amazing fruit cup now!
          </Typography>
        </Box>
        <Box display="flex"></Box>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
