import React from "react";

// Material ui imports
import { Toolbar, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    position: "fixed",
    bottom: "0"
  }
};

const Footer = ({ classes }) => {
  return (
    <Container maxWidth="xl" height="10%" className={classes.container}>
      <Toolbar>
        <Typography variant="body1" color="secondary">
          ©2021 Sandra Nikolic, typeahead component
        </Typography>
      </Toolbar>
    </Container>
  );
};

export default withStyles(styles)(Footer);