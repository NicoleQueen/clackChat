import React, { Component } from "react";
import Post from "../components/Post";

class PostsContainer extends Component {
  state = {
    postsList: "",
  };

  currentChannelPosts = (props) => {
    console.log(this.props)
    let currentChannel = this.props.channels.filter((channel) => {
      console.log(channel)
      return channel.id === parseInt(this.props.match.params.channelId);
    });
    
    return currentChannel[0].posts.map((post) => {
      return (
        <ul>
          <Post
            post={post}
            posts={this.props.posts}
            deletePost={this.props.deletePost}
          />
        </ul>
      );
    });
  };
  render() {
    return (
      <div className="PostContainer">
        <aside>
          {this.props.channels.length > 0 && this.currentChannelPosts()}
        </aside>
      </div>
    );
  }
}

export default PostsContainer;
