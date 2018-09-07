import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.xyz();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      console.log("nextProp++++++", nextProps.newPost);
      // this.props.posts.unshift(nextProps);
    }
  }
  render() {
    console.log("posts    ", this.props);
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>POSTS</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state  ", state);
  return {
    posts: state.PostReducer.items,
    newPost: state.PostReducer.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    xyz: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
