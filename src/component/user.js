import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../App.css";
import TextField from "@material-ui/core/TextField";

import Landing from "./landing";

const User = props => {
  return (
    <div className="App">
      <Button
        size="small"
        color="primary"
        target="_blank"
        onClick={() => props.changeUserName()}
      >
        {" "}
        change name
      </Button>
    </div>
  );
};

export default User;
