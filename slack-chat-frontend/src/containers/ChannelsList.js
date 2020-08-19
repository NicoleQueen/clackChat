import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChannelsList extends Component {
  renderChannels = () => {
    return this.props.channels.map((channel) => (
      <Link key={channel.id} to={`/channels/${channel.id}`}>
        <ul>{channel.name}</ul>
      </Link>
    ));
  };

  render() {
    return (
      <div className="ChannelsList">
        <p>{this.renderChannels()}</p>
      </div>
    );
  }
}

export default ChannelsList;
