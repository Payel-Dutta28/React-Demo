import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CustomizedButtons from "../component/buttons";

// We can inject some CSS into the DOM.
const styles = {
  button: {
    background: "green",
    borderRadius: 3,
    color: "white",
    "&:hover": {
      background: "blue"
    }
  }
};

function ClassNames(props) {
  return (
    <div>
      <Button className={props.classes.button}>
        {props.children ? props.children : "class names"}
      </Button>
      <CustomizedButtons />
    </div>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassNames);
