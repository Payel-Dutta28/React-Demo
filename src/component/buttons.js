import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  cssRoot: {
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700]
    }
  },
  cssRootElse: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: grey[500],
    "&:hover": {
      backgroundColor: grey[700]
    }
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red
  }
});

function CustomizedButtons(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
      >
        Custom CSS
      </Button>
      <Button size="small" color="primary" target="_blank" variant="contained">
        new theme button
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.cssRootElse)}
      >
        Custom CSS
      </Button>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          MuiThemeProvider
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.margin}
        >
          MuiThemeProvider
        </Button>
      </MuiThemeProvider>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
      >
        Bootstrap
      </Button>
    </div>
  );
}

CustomizedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedButtons);
