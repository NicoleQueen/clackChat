import React, { Component } from "react";
import Post from "../components/Post";

class PostsContainer extends Component {
  currentChannelPosts = (props) => {
    let currentChannel = this.props.channels.filter((channel) => {
      return channel.id === parseInt(this.props.match.params.channelId);
    });

    return currentChannel[0].posts.map((post) => {
      return (
        <li>
          <Post post={post} posts={this.props.posts} />
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <aside>
          {this.props.channels.length > 0 && this.currentChannelPosts()}
        </aside>
      </div>
    );
  }
}

export default PostsContainer;
