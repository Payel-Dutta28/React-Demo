import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createPosts } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    //eeeeeeee
    this.props.xyz(post);
  }

  render() {
    return (
      <div>
        <h1> ADD POST</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title:</label>
              <TextField
                style={{ padding: 24 }}
                id="title"
                name="title"
                placeholder="title"
                margin="normal"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div>
              <label>Body:</label>

              <TextField
                style={{ padding: 24 }}
                id="body"
                name="body"
                placeholder="body"
                margin="normal"
                onChange={this.onChange}
                value={this.state.body}
              />
              <Button
                size="small"
                color="primary"
                target="_blank"
                type="submit"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state  ", state);
  return {
    posts: state.PostReducer.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    xyz: post => {
      dispatch(createPosts(post));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postform);
