import React, { Component } from "react";

class Post extends Component {
  state = {
    isMouseInside: false
  };

  currentPostInfo = () => {
    let currentPost = this.props.posts.filter(
      (item) => item.id === this.props.post.id
    );
    
    return (
      <div class="postWrapper">
        <a class="postInfo">
          <img
            src={currentPost.length > 0 && currentPost[0].user.img_url}
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          {currentPost.length > 0 && currentPost[0].user.username}
          {currentPost.length > 0 && currentPost[0].user.timestamp}
        </a>
          <p class="postContent">{currentPost.length > 0 && currentPost[0].content}</p>
          {this.state.isMouseInside ?
              <div class="postMenu">      
                <div class="postButtonGroup" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary btn-sm">:)</button>
                  <button type="button" class="btn btn-secondary btn-sm">Respond in Thread</button>
                  <button type="button" class="btn btn-secondary btn-sm">Edit</button>
                  <button type="button" class="btn btn-secondary btn-sm">Delete</button>
                </div>
              </div>  
            : null}
      </div>
    );
  };

  getInitialStateMouse() {
    return {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    // console.log('enter')
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    // console.log('leave')
    this.setState({ isMouseInside: false });
  }

  render() {
    return <div 
      className="Post" 
      onMouseEnter={this.mouseEnter} 
      onMouseLeave={this.mouseLeave}
      > 
      {this.currentPostInfo()}  
    </div>;
  }
}

export default Post;
