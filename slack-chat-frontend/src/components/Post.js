import React, { Component } from "react";

class Post extends Component {
  currentPostInfo = () => {
    let currentPost = this.props.posts.filter(
      (item) => item.id === this.props.post.id
    );
    return (
      <div>
        <a class="PostInfo">
          <img
            src={currentPost.length > 0 && currentPost[0].user.img_url}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          {currentPost.length > 0 && currentPost[0].user.username}

          <div id="timestamp">
            {currentPost.length > 0 && currentPost[0].timestamp}
          </div>
        </a>
        <p>{currentPost.length > 0 && currentPost[0].content}</p>
      </div>
    );
  };

  render() {
    return <div className="Post">{this.currentPostInfo()}</div>;
  }
}

export default Post;
