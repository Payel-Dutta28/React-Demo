import React, { Component } from "react";
import "../styles/navigation.css";
import classNames from "classnames";
import logo from "../images/Logo.png";
import Button from "@material-ui/core/Button";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
const styles = theme => ({
  signOutBtn: {
    color: "#ffffff",
    borderColor: "#ffffff"
  }
});

function RciHeader(props) {
  const { classes } = props;
  return (
    <div className="header">
      <label className="lbl">Welcome {props.userName}</label>
      <Button
        variant="outlined"
        color="primary"
        className={classNames(classes.signOutBtn)}
      >
        SIGN OUT
      </Button>
    </div>
  );
}

export default withStyles(styles)(RciHeader);
