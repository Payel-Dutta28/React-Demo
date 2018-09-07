import React, { Component } from "react";
import Button from "@material-ui/core/Button";

const landing = props => {
  return (
    <div>
      <h1>{props.username}</h1>
      <p>This is my first React Component.</p>
    </div>
  );
};
export default landing;
