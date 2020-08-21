import React, { Component } from "react";

class Post extends Component {

  state = {
    isMouseInside: false
  }

  getInitialState() {
    return {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }

  currentPostInfo = () => {
    let currentPost = this.props.posts.filter(
      (item) => item.id === this.props.post.id
    );

    console.log(this.props.post)

    return (
      <div className="SinglePostContainer" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
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
        
        {this.state.isMouseInside ? 
          <div class="btn-group" role="group" aria-label="Basic example" >
            <button type="button" class="btn btn-secondary-sm">Like</button>
            <button type="button" class="btn btn-secondary-sm" onClick={()=> this.props.deletePost(this.props.post)}>Delete</button>
          </div>
        : null}
      </div>
    );
  };

  render() {
    return <div className="Post">{this.currentPostInfo()}</div>;
  }
}

export default Post;

// getInitialState() {
//   return {
//     isMouseInside: false
//   };
// }
// mouseEnter = () => {
//   this.setState({ isMouseInside: true });
// }
// mouseLeave = () => {
//   this.setState({ isMouseInside: false });
// }
// render() {
//   return (
//     <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
      
//     </div>
//   );
// }