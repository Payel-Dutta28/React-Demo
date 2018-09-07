import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  cssRoot: {
    borderRadius: 0
  }
});

function RciCatButtons(props) {
  const { classes } = props;
  return (
    <Button
      variant={props.variant}
      color={props.type}
      className={classNames(classes.cssRoot)}
    >
      {props.text}
    </Button>
  );
}

export default withStyles(styles)(RciCatButtons);
