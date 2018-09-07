import React, { Component } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import User from "../component/user";
import Landing from "../component/landing";
import Posts from "../component/posts";
import PostForm from "../component/postform";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
//import { setName } from "../actions/userActions";
//import { add } from "../actions/mathActions";
import { bindActionCreators } from "redux";
import { Alert } from "reactstrap";
import * as UserAction from "../actions/userActions";
import * as MathAction from "../actions/mathActions";

const styles = {
  button: {
    background: "green",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px"
  }
};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  onClick = e => {
    console.log("onnnnnnnnnnn", e.target.parentNode.id);
    var btnClick = e.target.parentNode.id;
    if (btnClick == "increasebtn") {
      this.props.action.add(10);
    } else if (btnClick == "decreasebtn") {
      this.props.action.sub(5);
    }
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  setUserName = e => {
    console.log(this.props, "name", this.state.name);
    this.props.action.setName(this.state.name);
  };

  render() {
    return (
      <div className="container">
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Search for Courses"
          margin="normal"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Button
          size="small"
          color="primary"
          target="_blank"
          onClick={this.setUserName}
        >
          CHANGE User Name
        </Button>
        {/* <User changeUserName={() => this.props.setName("Blake")} /> */}
        <Landing username={this.props.user.username} />
        <Button
          size="small"
          color="primary"
          id="increasebtn"
          onClick={this.onClick}
          name="increasebtn"
        >
          {" "}
          Increment
        </Button>
        <Button
          size="small"
          color="primary"
          id="decreasebtn"
          onClick={this.onClick}
        >
          {" "}
          Decrement
        </Button>
        <h1>New Value</h1>
        <h2>{this.props.math.result}</h2>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Userreducer,
    math: state.Mathreducer
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setName: name => {
//       dispatch(setName(name));
//     },
//     increase: value => {
//       dispatch(add(value));
//     }
//   };
// };
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...UserAction, ...MathAction }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
